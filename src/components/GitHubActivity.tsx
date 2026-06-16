import { profile } from "@/data/portfolio";

type Event = {
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: { commits?: unknown[]; ref_type?: string };
};

async function getEvents(): Promise<Event[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${profile.githubUser}/events/public?per_page=30`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    return (await res.json()) as Event[];
  } catch {
    return null;
  }
}

function label(e: Event): string {
  const repo = e.repo.name.split("/")[1] ?? e.repo.name;
  switch (e.type) {
    case "PushEvent":
      return `pushed ${e.payload?.commits?.length ?? 1} commit(s) → ${repo}`;
    case "CreateEvent":
      return `created ${e.payload?.ref_type ?? "repo"} → ${repo}`;
    case "WatchEvent":
      return `starred ${repo}`;
    case "PullRequestEvent":
      return `opened PR → ${repo}`;
    case "IssuesEvent":
      return `issue activity → ${repo}`;
    case "ForkEvent":
      return `forked ${repo}`;
    default:
      return `${e.type.replace("Event", "").toLowerCase()} → ${repo}`;
  }
}

export default async function GitHubActivity() {
  const events = await getEvents();

  return (
    <div className="glass overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          live_github_activity
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-purple-bright hover:text-cyan"
        >
          @{profile.githubUser} →
        </a>
      </div>

      <div className="max-h-[280px] space-y-1 overflow-y-auto p-4 font-mono text-xs">
        {events && events.length > 0 ? (
          events.slice(0, 12).map((e, i) => (
            <div key={i} className="flex gap-3 py-1 text-gray-400">
              <span className="text-purple/60">▸</span>
              <span className="flex-1 truncate text-gray-300">{label(e)}</span>
            </div>
          ))
        ) : (
          <p className="py-2 text-muted">
            ◷ activity feed unavailable right now — visit{" "}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-bright hover:text-cyan"
            >
              github.com/{profile.githubUser}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

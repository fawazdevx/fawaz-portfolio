import Chrome from "@/components/Chrome";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import BuildLog from "@/components/BuildLog";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Chrome />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <BuildLog>
        {/* Server component streamed into the client timeline */}
        <GitHubActivity />
      </BuildLog>
      <Contact />
    </main>
  );
}

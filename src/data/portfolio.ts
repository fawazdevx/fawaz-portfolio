export const profile = {
  name: "Fawaz Oyebode",
  fullName: "Fawaz Oyebode Akanni",
  roles: [
    "Backend & Web3 Developer",
    "Smart Contract Engineer",
    "Cybersecurity Practitioner",
    "Game Dev Tooling Builder",
  ],
  tagline:
    "I build production-grade backends, smart-contract-backed dApps, and automation tools that replace messy manual workflows.",
  location: "Lagos / Ibadan, Nigeria",
  email: "oyebodefawaz2020@gmail.com",
  phone: "+234 906 406 8250",
  githubUser: "fawazdevx",
  resumeUrl: "/Fawaz_Oyebode_Software_CV.pdf",
  socials: {
    github: "https://github.com/fawazdevx",
    linkedin: "https://linkedin.com/in/fawazoyebode",
    twitter: "https://x.com/fawazdevx",
    website: "https://fawazoyebode.tech",
  },
};

export const about = {
  summary:
    "Backend-focused software developer with hands-on experience shipping automation tools and full-stack Web3 applications. I design modular, secure backends — REST APIs, auth, validation — and smart-contract-backed dApps across the stack, from PyQt5 desktop tooling to React frontends and Solidity / Motoko contracts.",
  focus: [
    {
      title: "Web3",
      detail: "Solidity, Motoko (ICP), USDC settlement, upgradeable contracts",
      proof: "Nexora · Fundarc · Agora",
    },
    {
      title: "Backend & Automation",
      detail: "Python, REST APIs, auth & validation, template-driven generation",
      proof: "TelescriptGenius",
    },
    {
      title: "Security",
      detail: "Secure software design, auth flows, key management",
      proof: "Google Cybersecurity certified",
    },
    {
      title: "Game Dev Tooling",
      detail: "Unreal Engine plugin, Blueprint nodes, onchain game features",
      proof: "Arc UE Plugin",
    },
  ],
  currentlyBuilding:
    "ChainLearn — a decentralized LMS helping Web2 developers transition into Web3 with on-chain certifications and NFT-powered learning incentives.",
};

export type Project = {
  name: string;
  blurb: string;
  impact: string;
  stack: string[];
  tags: ("Web3" | "AI" | "Security" | "Game Dev" | "Backend" | "Mobile")[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "ChainLearn",
    blurb:
      "Decentralized LMS helping Web2 developers transition into Web3 via interactive courses, on-chain certifications, and NFT learning incentives.",
    impact: "Wallet-based auth, gamified learning, NFT certificates.",
    stack: ["React", "Solidity", "Web3", "NFT"],
    tags: ["Web3", "AI"],
    featured: true,
  },
  {
    name: "Nexora",
    blurb:
      "Financial control layer for AI agents — agent wallets, Save/Earn vaults, and x402 payments with USDC settlement on the Arc network.",
    impact: "On-chain payment & settlement flows behind a wallet-connected dApp.",
    stack: ["React", "TypeScript", "Solidity", "USDC", "Arc"],
    tags: ["Web3", "AI"],
    github: "https://github.com/fawazdevx/Nexora",
    live: "https://nexorafi.vercel.app",
    featured: true,
  },
  {
    name: "RecallForge",
    blurb:
      "AI cybersecurity tutor with persistent, user-owned memory. Three Claude agents (mentor, challenge, evaluator) generate adaptive Linux privilege-escalation labs; progress is anchored on-chain so the AI never forgets your weak areas.",
    impact:
      "Memory stored on Walrus as verifiable blobs, checkpoints on Sui testnet; non-custodial (users sign their own txs). Built for Sui Overflow · Walrus track.",
    stack: ["React", "TypeScript", "Sui Move", "Anthropic Claude", "Walrus", "Express"],
    tags: ["AI", "Web3", "Security"],
    github: "https://github.com/fawazdevx/RecallForge",
    live: "https://recallforgeai.vercel.app",
    featured: true,
  },
  {
    name: "Fundarc",
    blurb:
      "Milestone-based crowdfunding dApp. Contributions held in smart-contract escrow and released only after contributor voting approves each milestone.",
    impact: "~300 campaigns to date on Arc testnet. Voting, refunds, transparency dashboards.",
    stack: ["Solidity", "React", "USDC", "Arc"],
    tags: ["Web3"],
    github: "https://github.com/fawazdevx/Fundarc",
    live: "https://fundarc.netlify.app",
    featured: true,
  },
  {
    name: "TelescriptGenius",
    blurb:
      "Python desktop tool that auto-generates LTE and 10G/Aviat site configuration scripts from reusable templates — replacing an error-prone manual workflow.",
    impact: "Generated 200+ site config scripts for telecom engineers.",
    stack: ["Python", "PyQt5", "PySide"],
    tags: ["Backend", "Security"],
    github: "https://github.com/fawazdevx/TelescriptGenius",
    featured: true,
  },
  {
    name: "Agora Agent Market",
    blurb:
      "Onchain marketplace where AI agents publish staked, USDC-backed market signals judged on real outcomes — not claims.",
    impact: "Upgradeable Solidity (UUPS), agent leaderboards, stake-weighted sentiment.",
    stack: ["Vite", "React", "Solidity", "Foundry", "USDC"],
    tags: ["Web3", "AI"],
    github: "https://github.com/fawazdevx/Agora-agent-market",
  },
  {
    name: "Arc UE Plugin",
    blurb:
      "Unreal Engine plugin + Node.js backend letting game devs add onchain USDC and NFT features through Blueprint nodes — no C++ required.",
    impact: "Blueprint-callable USDC/NFT nodes backed by Solidity + Express signing layer.",
    stack: ["C++", "Blueprint", "Solidity", "Node.js", "ethers"],
    tags: ["Game Dev", "Web3"],
    github: "https://github.com/fawazdevx/arc-unreal-plugin",
    live: "https://arc-ue4-plugin.netlify.app",
  },
  {
    name: "vaulTify",
    blurb:
      "Decentralized wallet dApp on the Internet Computer using Motoko, with Internet Identity authentication.",
    impact: "Internet Identity auth, native ICP integration.",
    stack: ["Motoko", "ICP", "Internet Identity"],
    tags: ["Web3"],
    github: "https://github.com/fawazdevx/vaulTify",
  },
  {
    name: "VHTST",
    blurb:
      "Interactive Python simulation tool modeling thermodynamic and heat-transfer concepts for educational use. Final-year research project.",
    impact: "Modular architecture and PyQt5 UI built for extensibility.",
    stack: ["Python", "PyQt5"],
    tags: ["Backend"],
    github: "https://github.com/fawazdevx/VHTST",
  },
  {
    name: "Lifeline",
    blurb:
      "Cross-platform emergency-response & healthcare app — handle emergencies, connect with healthcare professionals, and manage medical profiles. Built with a team for the GDSC Solution Challenge.",
    impact: "Backend developer on the Django/Python API; collaborated on the Flutter app.",
    stack: ["Flutter", "Dart", "Python", "Django"],
    tags: ["Mobile", "Backend"],
    github: "https://github.com/fawazdevx/lifeline",
  },
];

export type SkillCategory = {
  title: string;
  accent: "purple" | "cyan";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Web3 / Blockchain",
    accent: "purple",
    skills: [
      "Solidity",
      "Motoko (ICP)",
      "Foundry",
      "UUPS Upgradeable",
      "USDC / Stablecoins",
      "Wallet Integration",
      "IPFS",
      "Internet Identity",
    ],
  },
  {
    title: "Backend",
    accent: "cyan",
    skills: [
      "Python",
      "Node.js",
      "REST API Design",
      "Auth & Authorization",
      "Input Validation",
      "Modular Architecture",
      "Automation Systems",
    ],
  },
  {
    title: "Frontend",
    accent: "purple",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Responsive dApps"],
  },
  {
    title: "Security",
    accent: "cyan",
    skills: [
      "Secure Software Design",
      "Secure Auth Flows",
      "Key Management",
      "Telecom Network Scripting",
      "Google Cybersecurity Cert",
    ],
  },
  {
    title: "Tools & Platforms",
    accent: "purple",
    skills: ["Git", "GitHub Actions (CI/CD)", "Linux", "PyQt5 / PySide", "Supabase", "SQL"],
  },
  {
    title: "Languages",
    accent: "cyan",
    skills: ["Python", "JavaScript", "TypeScript", "Solidity", "Motoko", "C++", "SQL"],
  },
];

export type LogEntry = {
  date: string;
  title: string;
  detail: string;
  tag: string;
};

export const buildLog: LogEntry[] = [
  {
    date: "2026 Q2",
    title: "Built RecallForge",
    detail:
      "AI cybersecurity tutor with on-chain memory (Sui + Walrus). Built for Sui Overflow.",
    tag: "AI / Web3 / Security",
  },
  {
    date: "2026 Q2",
    title: "Shipped Nexora finance layer",
    detail: "Agent wallets + USDC settlement (x402) on Arc.",
    tag: "Web3 / AI",
  },
  {
    date: "2026 Q2",
    title: "Built Agora Agent Market",
    detail: "Upgradeable Solidity contracts + staked signal marketplace.",
    tag: "Web3 / AI",
  },
  {
    date: "2026 Q1",
    title: "Released Arc Unreal Engine plugin",
    detail: "Blueprint-callable onchain USDC & NFT nodes for game devs.",
    tag: "Game Dev",
  },
  {
    date: "2026 Q2",
    title: "Launched Fundarc",
    detail: "Milestone escrow crowdfunding — ~300 campaigns on testnet.",
    tag: "Web3",
  },
  {
    date: "2024 Q3",
    title: "Building ChainLearn MVP",
    detail: "Decentralized LMS with wallet auth and NFT certifications.",
    tag: "Web3 / EdTech",
  },
  {
    date: "2023 – 2026",
    title: "TelescriptGenius in production",
    detail: "200+ telecom config scripts generated; secure auth + validation engine.",
    tag: "Backend / Automation",
  },
  {
    date: "2023",
    title: "Contributed backend to Lifeline",
    detail: "Django/Python API for a healthcare & emergency-response app — GDSC Solution Challenge (team).",
    tag: "Backend / Mobile",
  },
];

export const certifications = [
  "Google Cybersecurity Professional Certificate — 2024",
  "3MTT Software Development Certificate — 2025",
  "CS50: Introduction to Programming with Python — Harvard / edX",
  "Web3 Development (ICP / Blockchain) — Motoko & smart contracts",
  "Unreal Engine Game Development — Epic Games",
];

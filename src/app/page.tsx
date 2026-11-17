import Chrome from "@/components/Chrome";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import NexoraCaseStudy from "@/components/NexoraCaseStudy";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import BuildLog from "@/components/BuildLog";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main" className="relative">
      <Chrome />
      <Hero />
      <About />
      <Projects />
      <NexoraCaseStudy />
      <Services />
      <Skills />
      <BuildLog>
        {/* Server component streamed into the client timeline */}
        <GitHubActivity />
      </BuildLog>
      <Contact />
    </main>
  );
}

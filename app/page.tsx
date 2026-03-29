import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProfileImageSection } from "@/components/ProfileImageSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkillsSection } from "@/components/SkillsSection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { VertexSection } from "@/components/VertexSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <SmoothScroll />
      <Navbar />

      <main>
        <Hero />
        <ProfileImageSection />

        <SectionWrapper
          id="projects"
          marker="Section 01"
          title="Featured Projects"
          subtitle="Selected builds focused on product execution, interaction quality, and technical decision-making."
        >
          <ProjectsGrid />
        </SectionWrapper>

        <SectionWrapper
          id="vertex"
          marker="Section 02"
          title="Vertex Studios"
          subtitle="A student-driven game and creative technology initiative designed to create real production experience."
        >
          <VertexSection />
        </SectionWrapper>

        <SectionWrapper
          id="skills"
          marker="Section 03"
          title="Skills & Tech Stack"
          subtitle="Core technologies I use to design, build, and scale polished digital products."
        >
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper
          id="experience"
          marker="Section 04"
          title="Experience & Momentum"
          subtitle="Leadership, shipping history, and iterative building across student and indie projects."
        >
          <ExperienceTimeline />
        </SectionWrapper>

        <SectionWrapper
          id="contact"
          marker="Section 05"
          title="Contact"
          subtitle="Employers, collaborators, and clients are welcome to reach out."
          className="pb-14"
        >
          <ContactSection />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

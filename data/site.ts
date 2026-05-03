import type { NavItem, VertexPillar } from "@/lib/types";

export const navItems: NavItem[] = [
  { id: "hero", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "vertex", label: "Vertex Studios" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const siteMeta = {
  name: "Kanishka Dutta",
  roleLine: "Full-Stack Developer | Frontend Builder | Founder of Vertex Studios",
  valueProp:
    "I design and ship high-fidelity digital products that blend technical precision with strong visual identity. I build interfaces that are fast, clear, and made to stand out in real-world use.",
  location: "Kitchener, Ontario, Canada",
  focus: "React, Next.js, TypeScript, Systems UI",
  availability: "Open to full-time roles, internships, and client work",
  email: "Kdutta2017@outlook.com",
  github: "https://github.com/KDCodes23",
  linkedin: "https://www.linkedin.com/in/kanishkadutta",
  discord: "kanishka.vertex",
  resumeUrl: "#",
  opportunityLabel: "Open to Opportunities",
  portraitImage: "/images/portraitImage.png",
  portraitImageBG: "/images/portraitImageBG.jpg",
  portraitAlt: "Full-body portrait of Kanishka Dutta"
};

export const vertexPillars: VertexPillar[] = [
  {
    title: "Game Development",
    description:
      "Building playable systems and multiplayer experiences with production-minded iteration.",
    marker: "VX-01"
  },
  {
    title: "Student Collaboration",
    description:
      "Pairing students and graduates into focused pods to ship meaningful real projects.",
    marker: "VX-02"
  },
  {
    title: "Portfolio Projects",
    description:
      "Turning ideas into strong case-study work that demonstrates craft, process, and impact.",
    marker: "VX-03"
  },
  {
    title: "Creative Technology",
    description:
      "Combining design, engineering, and experimentation to create memorable digital products.",
    marker: "VX-04"
  }
];

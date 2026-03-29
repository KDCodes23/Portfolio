import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "prompt-ui-agent",
    indexLabel: "BUILD 01",
    title: "Prompt-to-UI Agent",
    summary:
      "A workflow that converts product prompts into production-ready interface drafts, component hierarchies, and editable implementation scaffolds.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Tailwind"],
    status: "CASE STUDY",
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#"
    }
  },
  {
    id: "vertex-studios-web",
    indexLabel: "BUILD 02",
    title: "Vertex Studios Website",
    summary:
      "A studio platform built to communicate mission, projects, and execution quality while supporting future portfolio and team expansion.",
    tech: ["Next.js", "Framer Motion", "TypeScript", "Supabase"],
    status: "LIVE",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "agario-multiplayer",
    indexLabel: "BUILD 03",
    title: "Agar.io-style Multiplayer Game",
    summary:
      "A competitive browser game focused on responsive controls, authoritative state sync, and smooth real-time interactions.",
    tech: ["Node.js", "WebSocket", "Express", "Canvas"],
    status: "PROTOTYPE",
    links: {
      github: "#",
      caseStudy: "#"
    }
  },
  {
    id: "stellica-wallet",
    indexLabel: "BUILD 04",
    title: "Stellica / Stellar Discord Wallet",
    summary:
      "A Discord-first wallet concept for the Stellar ecosystem, combining onboarding clarity with secure command-driven interactions.",
    tech: ["TypeScript", "Discord API", "Stellar SDK", "PostgreSQL"],
    status: "CASE STUDY",
    links: {
      github: "#",
      caseStudy: "#"
    }
  },
  {
    id: "inventory-system",
    indexLabel: "BUILD 05",
    title: "Inventory Management System",
    summary:
      "A full-stack dashboard for stock tracking, analytics, and operations with role-based workflows and reliable data handling.",
    tech: ["React", "Express", "MongoDB", "Docker"],
    status: "LIVE",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "doodle-wars",
    indexLabel: "BUILD 06",
    title: "Doodle Wars / Ninja Panda Auto-Battle",
    summary:
      "An auto-battle prototype exploring game feel, balancing systems, and stylized interaction loops for indie production testing.",
    tech: ["Unity", "C#", "Godot", "Game Design"],
    status: "PROTOTYPE",
    links: {
      github: "#"
    }
  }
];

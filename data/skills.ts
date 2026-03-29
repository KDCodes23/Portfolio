import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "WebSocket"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Vercel", "Cursor"]
  },
  {
    category: "Game Dev",
    items: ["Unity", "C#", "Godot", "Gameplay Systems", "Rapid Prototyping"]
  }
];

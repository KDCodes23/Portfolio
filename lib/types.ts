export type NavItem = {
  id: string;
  label: string;
};

export type Project = {
  id: string;
  indexLabel: string;
  title: string;
  summary: string;
  tech: string[];
  status: "LIVE" | "PROTOTYPE" | "CASE STUDY";
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
};

export type VertexPillar = {
  title: string;
  description: string;
  marker: string;
};

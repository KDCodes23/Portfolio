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
  status: "LIVE" | "PROTOTYPE" | "CASE STUDY" | "INPROGRESS";
  links: {
    demo?: string;
    caseStudy?: string;
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
export type EducationItem = {
  schoolName: string;
  location: string;
  period: string;
  degree: string;
  summary: string;
};

export type VertexPillar = {
  title: string;
  description: string;
  marker: string;
};

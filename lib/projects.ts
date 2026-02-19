export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deployUrl?: string;
  category: "Web" | "Mobile" | "Back-end" | "Data Science" | "Jogos";
}

export const projects: Project[] = [
  {
    id: "game-1",
    title: "Depths of the Mind",
    description: "Experiência de Surto de Esquizofrenia",
    tags: ["Godot", "GDScript", "Game Design"],
    githubUrl: "https://github.com/matheusnajal/Depths-of-the-Mind",
    category: "Jogos",
  },
];

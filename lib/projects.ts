export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: "Web" | "Mobile" | "Back-end" | "Data Science" | "Jogos" | "Artigo";
}

export const projects: Project[] = [
    {
    id: "artigo-1",
    title: "Modelagem e Simulação de Corpos e Tecidos Deformáveis em Motores de Jogos",
    description: "Meu trabalho de conclusão de curso voltado a área de computação gráfica e física",
    tags: ["Godot", "Unity", "Unreal Engine", "Física Computacional", "Matemática para Jogos", "GDScript", "C#", "Blueprint"],
    githubUrl: "https://github.com/matheusnajal/TCC",
    category: "Artigo",
  },
  {
    id: "game-1",
    title: "Depths of the Mind",
    description: "Experiência de Surto de Esquizofrenia",
    tags: ["Godot", "GDScript", "Game Design"],
    githubUrl: "https://github.com/matheusnajal/Depths-of-the-Mind",
    category: "Jogos",
  },
];

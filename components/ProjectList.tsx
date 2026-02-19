"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Search, Filter, X } from "lucide-react";
import { Project } from "@/lib/projects";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Adicionado "Artigo" à lista
  const categories = [
    "Web",
    "Mobile",
    "Back-end",
    "Data Science",
    "Jogos",
    "Artigo",
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web":
        return "bg-yellow-400";
      case "Mobile":
        return "bg-blue-400";
      case "Back-end":
        return "bg-purple-400";
      case "Data Science":
        return "bg-green-400";
      case "Jogos":
        return "bg-red-400";
      case "Artigo":
        return "bg-orange-400"; // 2. Cor exclusiva Laranja
      default:
        return "bg-gray-400";
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category);

    const normalizedSearch = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex justify-center max-w-2xl mx-auto mb-12 mt-8">
        <div className="flex w-full gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar projetos (Tecnologia, Nome...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-12 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all placeholder:font-bold placeholder:text-gray-400 text-lg font-bold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3 h-fit">
          <div className="border-2 border-black bg-[#FAEBD7] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-8">
            <div className="flex justify-between items-center font-black border-b-2 border-black pb-3 mb-4 text-lg">
              <span className="flex items-center gap-2">
                <Filter size={20} /> Áreas
              </span>
            </div>

            <div className="space-y-4">
              <label
                className="flex items-center gap-3 cursor-pointer group select-none"
                onClick={() => setSelectedCategories([])}
              >
                <div
                  className={`w-5 h-5 border-2 border-black flex items-center justify-center transition-colors ${
                    selectedCategories.length === 0
                      ? "bg-black"
                      : "bg-white group-hover:bg-gray-100"
                  }`}
                >
                  {selectedCategories.length === 0 && (
                    <div className="w-2 h-2 bg-white"></div>
                  )}
                </div>
                <span
                  className={`text-sm ${
                    selectedCategories.length === 0
                      ? "font-black"
                      : "font-medium"
                  }`}
                >
                  Todos
                </span>
              </label>

              <hr className="border-black border-dashed opacity-30" />

              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <div
                    className={`w-5 h-5 border-2 border-black transition-colors flex items-center justify-center ${
                      selectedCategories.includes(category)
                        ? getCategoryColor(category)
                        : "bg-white group-hover:bg-gray-100"
                    }`}
                  >
                    {selectedCategories.includes(category) && (
                      <div className="w-2 h-2 bg-black"></div>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      selectedCategories.includes(category)
                        ? "font-black"
                        : "font-medium"
                    }`}
                  >
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>
        <div className="md:col-span-9 grid grid-cols-1 gap-6">
          <div className="flex justify-between items-end mb-4 border-b-2 border-black pb-2">
            <h2 className="font-black text-2xl">Meus Projetos</h2>
            <span className="bg-[#FAEBD7] px-3 py-1 border-2 border-black text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {filteredProjects.length} projetos
            </span>
          </div>

          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 border-2 border-black border-dashed opacity-50">
              <p className="font-bold text-xl">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

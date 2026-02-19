"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import { Search, Filter, X } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function PostList({ posts }: { posts: Post[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizeText = (text: string) => {
    return (text ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(post.category);

    const normalizedSearch = normalizeText(searchQuery);
    const normalizedTitle = normalizeText(post.title);
    const normalizedExcerpt = normalizeText(post.excerpt);

    const matchesSearch =
      normalizedTitle.includes(normalizedSearch) ||
      normalizedExcerpt.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex justify-center max-w-2xl mx-auto mb-16 mt-8">
        <div className="w-full relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Procurar posts (ex: React, Buracos Negros...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-12 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all placeholder:font-bold placeholder:text-gray-400 text-lg font-bold"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3 h-fit">
          <div className="border-2 border-black bg-[#FAEBD7] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-8">
            <div className="flex justify-between items-center font-black border-b-2 border-black pb-3 mb-4 text-lg">
              <span className="flex items-center gap-2">
                <Filter size={20} /> Filtros
              </span>
              {(selectedCategories.length > 0 || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-red-500 hover:underline"
                >
                  Limpar
                </button>
              )}
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
                  Todos os posts
                </span>
              </label>

              <hr className="border-black border-dashed opacity-30" />

              {["Computação", "Física", "Pessoal", "Livro", "Artigo"].map((category) => (
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
                        ? category === "Computação"
                          ? "bg-blue-400"
                          : category === "Física"
                            ? "bg-purple-400"
                            : category === "Pessoal"
                              ? "bg-green-400"
                              : category === "Livro"
                                ? "bg-pink-400"
                                : "bg-orange-400"
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

        <div className="md:col-span-9">
          <div className="flex justify-between items-end mb-8 border-b-2 border-black pb-2">
            <h2 className="font-black text-2xl md:text-3xl truncate pr-4">
              {searchQuery
                ? `Resultados para "${searchQuery}"`
                : selectedCategories.length === 0
                  ? "Últimas Publicações"
                  : selectedCategories.join(" & ")}
            </h2>
            <span className="bg-[#FAEBD7] px-3 py-1 border-2 border-black text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
              {filteredPosts.length} posts
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))
          ) : (
            <div className="text-center py-20 border-2 border-black border-dashed opacity-50 bg-[#FAEBD7]">
              <p className="font-black text-2xl mb-2">Ops! Nada encontrado.</p>
              <p className="text-gray-600 font-medium">
                Tente buscar por palavras-chave diferentes.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 font-bold underline hover:text-red-500"
              >
                Limpar filtros e busca
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
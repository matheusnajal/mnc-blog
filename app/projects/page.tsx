import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto bg-[#FDF6E3]">
      <header className="flex justify-between items-center mb-16 border-b-2 border-black pb-4">
        <div className="text-2xl font-black italic tracking-tighter">
          MNC.BLOG
        </div>
        <nav className="hidden md:flex gap-8 font-bold text-sm">
          <Link href="/" className="hover:text-[#FF6B6B] transition-colors">
            Posts
          </Link>
          <Link
            href="/projects"
            className="text-[#FF6B6B] underline decoration-2 underline-offset-4"
          >
            Projetos
          </Link>
        </nav>
      </header>
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">
          Portfólio & <span className="text-blue-600">Código</span>
        </h1>
        <p className="font-medium text-lg text-gray-800 max-w-2xl mx-auto">
          Uma coleção de experimentos, ferramentas e soluções que desenvolvi.
        </p>
      </div>

      <ProjectList projects={projects} />
    </main>
  );
}

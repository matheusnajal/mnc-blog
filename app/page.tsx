import { getSortedPostsData } from "@/lib/posts";
import PostList from "@/components/PostList";
import Link from "next/link";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto bg-[#FDF6E3]">
      <header className="flex justify-between items-center mb-16 border-b-2 border-black pb-4">
        <div className="text-2xl font-black italic tracking-tighter">
          MNC.BLOG
        </div>
        <nav className="hidden md:flex gap-8 font-bold text-sm">
          <Link
            href="/"
            className="text-[#FF6B6B] underline decoration-2 underline-offset-4"
          >
            Posts
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#FF6B6B] transition-colors"
          >
            Projetos
          </Link>
        </nav>
      </header>
      <div className="text-center mb-8 space-y-8">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">
          Explorando <span className="text-blue-600">Bits</span> &{" "}
          <span className="text-purple-600">Átomos</span>
        </h1>

        <p className="font-medium text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed border-l-4 border-black pl-4 text-left md:text-center md:border-none md:pl-0">
          Olá! Me chamo <strong>Matheus Najal Cruz</strong>. Sou Bacharel em
          Ciência da Computação e apaixonado por física. Aqui compartilho meus
          estudos, teorias e experimentos de código.
        </p>
      </div>
      <PostList posts={allPosts} />
    </main>
  );
}

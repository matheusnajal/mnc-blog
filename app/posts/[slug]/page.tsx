import { getPostData, getSortedPostsData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const postData = getPostData(slug);

const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Computação":
        return "bg-blue-400";
      case "Física":
        return "bg-purple-400";
      case "Pessoal":
        return "bg-green-400";
      case "Livro":
        return "bg-pink-400";
      case "Artigo":
        return "bg-orange-400";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto bg-[#FDF6E3]">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-black mb-8 hover:text-[#FF6B6B] transition-colors"
      >
        <ArrowLeft size={20} /> Voltar para Home
      </Link>

      <article className="border-2 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <header className="mb-8 border-b-2 border-black pb-8">
          <div className="flex gap-4 mb-4 text-sm font-bold">
            <span
              className={`px-2 py-1 border border-black ${getCategoryColor(postData.category)}`}
            >
              {postData.category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {postData.title}
          </h1>
          <div className="flex gap-6 text-gray-600 font-bold text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {postData.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {postData.readTime}
            </span>
          </div>
        </header>

        <div className="text-gray-900">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-3xl md:text-4xl font-black mt-8 mb-4"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl md:text-3xl font-bold mt-8 mb-4"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-lg leading-relaxed mb-6 font-medium text-gray-800"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc pl-6 mb-6 space-y-2 font-medium"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal pl-6 mb-6 space-y-2 font-medium"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-[#FF6B6B] bg-gray-50 pl-4 py-2 italic my-6"
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 underline font-bold hover:text-blue-800"
                  {...props}
                />
              ),
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

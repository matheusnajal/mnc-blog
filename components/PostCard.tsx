import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface PostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function PostCard({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
}: PostProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Computação":
        return "bg-blue-400";
      case "Física":
        return "bg-purple-400";
      case "Pessoal":
        return "bg-green-400";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="w-full border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="flex justify-between items-start mb-3">
        <span
          className={`text-xs font-black px-2 py-1 border border-black ${getCategoryColor(category)}`}
        >
          {category.toUpperCase()}
        </span>
        <span className="text-sm font-bold text-gray-500 flex items-center gap-1">
          <Clock size={14} /> {readTime}
        </span>
      </div>

      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="text-gray-700 font-medium mb-4 line-clamp-2">{excerpt}</p>

      <div className="flex justify-between items-center border-t-2 border-black pt-4">
        <div className="flex items-center text-sm font-bold text-gray-600 gap-2">
          <Calendar size={16} />
          {date}
        </div>

        <Link
          href={`/posts/${id}`}
          className="flex items-center gap-2 font-black text-sm hover:underline hover:text-[#FF6B6B] transition-colors"
        >
          Ler completo <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

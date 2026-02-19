import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  category,
}: ProjectProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
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
        return "bg-orange-400";
      default:
        return "bg-gray-200";
    }
  };

  const colorClass = getCategoryColor(category);

  return (
    <div className="w-full border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-bold px-2 py-1 border border-black ${colorClass}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            className={`text-xs font-black px-2 py-1 border border-black ${colorClass}`}
          >
            {category.toUpperCase()}
          </span>
        </div>

        <h3 className="text-2xl font-black mb-3">{title}</h3>
        <p className="text-gray-700 font-medium mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t-2 border-black border-dashed">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black text-white font-bold py-3 hover:bg-gray-800 transition-colors w-full"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>
  );
}

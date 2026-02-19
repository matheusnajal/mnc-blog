import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white mt-20">
      <div className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-black text-2xl tracking-tighter italic">
              MNC.BLOG
            </h3>
            <p className="font-medium text-gray-600 max-w-xs">
              Explorando o universo, uma linha de código por vez.
            </p>
            <p className="text-sm font-bold mt-4">© 2026 Matheus Najal Cruz.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/matheusnajal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white border-2 border-black hover:bg-gray-800 hover:-translate-y-1 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-najal-cruz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0077B5] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://instagram.com/matheusnajal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#E1306C] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Instagram size={24} />
            </a>

            <a
              href="mailto:matheusnajalk@gmail.com"
              className="p-3 bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

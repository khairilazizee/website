import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              KHAIRIL
              <br />
              AZIZEE
            </h1>
            <div className="h-1 w-32 bg-foreground" />
          </div>

          <div className="space-y-6 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-normal text-muted-foreground">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Full-stack developer with expertise in building responsive
              interfaces, scalable back-end systems, and enterprise applications
              using modern technologies and low-code platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="/resume"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              View Resume
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-smooth"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

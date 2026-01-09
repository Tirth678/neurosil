import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Extend Window interface for VANTA
declare global {
  interface Window {
    VANTA: {
      BIRDS: (options: Record<string, unknown>) => {
        destroy: () => void;
      };
    };
    THREE: unknown;
  }
}

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initVanta = () => {
      if (vantaRef.current && window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff,
          color1: 0x3b82f6,
          color2: 0x6366f1,
          colorMode: "lerp",
          birdSize: 1.20,
          wingSpan: 20.00,
          speedLimit: 5.00,
          separation: 50.00,
          alignment: 50.00,
          cohesion: 50.00,
          quantity: 4.00
        });
      }
    };

    if (!vantaEffect.current) {
      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.async = true;
      
      threeScript.onload = () => {
        if (!isMounted) return;
        // Load Vanta Birds after Three.js is loaded
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
        vantaScript.async = true;
        
        vantaScript.onload = () => {
          if (isMounted) {
            initVanta();
          }
        };
        
        document.body.appendChild(vantaScript);
      };
      
      document.body.appendChild(threeScript);
    }

    // Cleanup function
    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100 relative">
      {/* Vanta Birds Background - Full Page */}
      <div ref={vantaRef} className="fixed inset-0 z-0" />

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">

            <div className="
              inline-flex items-center gap-2
              bg-gray-900/10
              backdrop-blur-md
              border border-gray-900/20
              rounded-full px-4 py-2 mb-6
              animate-fade-in
            ">
              <Sparkles className="text-blue-600" size={20} />
              <span className="text-gray-900 font-medium">
                Bold & Visionary
              </span>
            </div>

            <h1 className="
              text-5xl sm:text-6xl lg:text-7xl
              font-bold mb-6 leading-tight
              text-gray-900
              animate-slide-up
            ">
              Innovating the Future
              <span className="
                block mt-2
                bg-gradient-to-r from-blue-600 to-indigo-600
                bg-clip-text text-transparent
              ">
                Research & Development Hub
              </span>
            </h1>

            <p className="
              text-xl sm:text-2xl
              text-gray-700
              mb-8
              animate-fade-in-delay
            ">
              Where creativity meets engineering excellence.
            </p>

            <div className="
              flex flex-col sm:flex-row gap-4
              justify-center
              animate-fade-in-delay-2
            ">
              <Link
                to="/projects"
                className="
                  group bg-gray-900
                  text-white
                  px-8 py-4 rounded-lg font-semibold
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  shadow-lg hover:shadow-xl hover:scale-105
                "
              >
                Explore Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>

              <Link
                to="/profiles"
                className="
                  bg-transparent
                  border border-gray-900/50
                  text-gray-900
                  hover:bg-gray-900 hover:text-white
                  px-8 py-4 rounded-lg font-semibold
                  transition-all duration-300
                "
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          z-20 animate-bounce
        ">
          <div className="
            w-6 h-10 border-2 border-gray-900/70
            rounded-full flex items-start justify-center p-2
          ">
            <div className="w-1.5 h-1.5 bg-gray-900/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Combined Card with Tint */}
          <div className="
            bg-gray-900/10
            backdrop-blur-md
            border border-gray-300
            rounded-3xl
            p-8 md:p-12
            shadow-2xl
            max-w-6xl
            mx-auto
            mb-16
          ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
              {/* IMAGE - Left Side */}
              <div className="animate-fade-up flex justify-center">
                <img
                  src="/images/harsh.jpg"
                  alt="Inspiration"
                  className="
                    w-64 md:w-80 lg:w-96
                    h-auto
                    rounded-2xl
                    shadow-2xl
                    object-cover
                  "
                />
              </div>

              {/* TEXT - Right Side */}
              <div className="animate-fade-up text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-0 text-gray-900">
                  INSPIRATION
                </h2>
                <p className="text-base md:text-lg text-gray-700 font-medium mb-6">
                  (Harsh Shanghavi)
                </p>
                <div className="space-y-5">
                  <p className="text-xl text-gray-900 leading-relaxed font-semibold">
                    AI = Atithi + Innovation
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    We welcome ideas like Atithi.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    We power them with AI.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    We shape the future through innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card */}
            <div className="
              bg-gray-900/10
              backdrop-blur-md
              border border-gray-300
              p-8 rounded-2xl text-center
              shadow-xl hover:shadow-2xl
              transition-all duration-300 hover:scale-105
              animate-fade-up
            ">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">50+</h3>
              <p className="text-gray-800 font-medium">
                Active Projects
              </p>
            </div>

            <div className="
              bg-gray-900/10
              backdrop-blur-md
              border border-gray-300
              p-8 rounded-2xl text-center
              shadow-xl hover:shadow-2xl
              transition-all duration-300 hover:scale-105
              animate-fade-up
            ">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">100+</h3>
              <p className="text-gray-800 font-medium">
                Student Researchers
              </p>
            </div>

            <div className="
              bg-gray-900/10
              backdrop-blur-md
              border border-gray-300
              p-8 rounded-2xl text-center
              shadow-xl hover:shadow-2xl
              transition-all duration-300 hover:scale-105
              animate-fade-up
            ">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1h-2zM2.5 8.5A.5.5 0 013 8h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">20+</h3>
              <p className="text-gray-800 font-medium">
                Awards Won
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
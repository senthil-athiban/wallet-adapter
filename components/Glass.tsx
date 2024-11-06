// components/GlassCard.js
export default function GlassCard() {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-blue-500 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 -z-10"></div>
        
        {/* Cloud and moon icons */}
        <div className="absolute top-10 right-10">
          <img src="/clouds-and-moon.png" alt="Clouds and Moon" className="w-16 h-16" />
        </div>
  
        <div className="w-80 bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg border border-white/20">
          <h1 className="text-5xl font-bold text-white">48</h1>
          <p className="mt-2 text-xl font-semibold text-white">Frosted</p>
          <p className="text-lg text-white/80">Weather Icons</p>
          <p className="mt-4 text-sm text-white/70">Download freebie from Figma community</p>
  
          <p className="mt-6 text-3xl font-bold text-white">1.2k</p>
          <p className="text-lg font-semibold text-white">Downloads</p>
  
          <div className="mt-8 flex items-center justify-center space-x-2">
            <img src="/figma-logo.png" alt="Figma Logo" className="w-5 h-5" />
            <p className="text-white text-sm">Crafted with Figma</p>
          </div>
        </div>
      </div>
    );
  }
  
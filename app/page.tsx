import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4ade80_0%,transparent_60%)] opacity-30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-10 flex justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/50 border border-white/20">
              <span className="text-8xl font-black tracking-tighter">K</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            KATILIYO
          </h1>
          
          <p className="text-3xl md:text-4xl text-zinc-400 mb-8 font-light">
            Katıl • Keşfet • Eğlen
          </p>

          <p className="text-xl text-zinc-500 max-w-lg mx-auto mb-12">
            Yakınındaki en iyi etkinlikleri keşfet, 
            arkadaşlarınla buluş ve unutulmaz anılar biriktir.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-black px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-emerald-400 hover:text-black transition-all">
              Etkinlikleri Keşfet
            </button>
            <button className="border border-white/40 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 transition-all">
              Nasıl Çalışır?
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Neden Katılıyo?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-10 rounded-3xl text-center">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="text-3xl font-semibold mb-4">Yakınındaki Etkinlikler</h3>
              <p className="text-zinc-400">Konumuna göre en iyi etkinlikleri anında gör.</p>
            </div>

            <div className="bg-zinc-900 p-10 rounded-3xl text-center">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-3xl font-semibold mb-4">Arkadaşlarınla Buluş</h3>
              <p className="text-zinc-400">Ortak ilgi alanlarına göre etkinliklere katıl.</p>
            </div>

            <div className="bg-zinc-900 p-10 rounded-3xl text-center">
              <div className="text-6xl mb-6">🎟️</div>
              <h3 className="text-3xl font-semibold mb-4">Kolay Bilet</h3>
              <p className="text-zinc-400">QR kod ile hızlı ve güvenli bilet al.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black py-16 text-center text-zinc-500 border-t border-white/10">
        <p className="text-lg">© 2026 Katılıyo • Katıl ve Keşfet</p>
      </footer>
    </main>
  );
}
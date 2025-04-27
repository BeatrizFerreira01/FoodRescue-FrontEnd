'use client';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-[#F5F0E6] h-28 flex justify-between items-center px-12 text-black font-bold shadow-md animate-fade-in">
        <div className="flex items-center gap-5">
          <Image src="/assets/logo.png" alt="Logo FoodRescue" width={120} height={120} />
          <span className="text-3xl font-extrabold">FoodRescue</span>
        </div>
        <nav>
          <ul className="flex gap-10 text-lg">
            <li><Link href="/" className="hover:text-[#2D8C44] transition">Home</Link></li>
            <li><Link href="/cadastro" className="hover:text-[#2D8C44] transition">Cadastrar alimento</Link></li>
            <li><Link href="/listagem" className="hover:text-[#2D8C44] transition">Lista de alimentos</Link></li>
            <li><Link href="/perfil" className="hover:text-[#2D8C44] transition">Perfil</Link></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white animate-fade-in" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="absolute inset-0 bg-[#1E4D2B] opacity-90"></div>
        <div className="relative text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Ajude a reduzir o desperdício! Faça sua doação.</h2>
          <Link href="/cadastro">
            <button className="mt-4 bg-[#FF8C42] hover:bg-[#e67c35] text-white text-lg font-bold py-3 px-6 rounded-lg transition animate-pulse-smooth">
              Doe Agora
            </button>
          </Link>
        </div>
      </section>

      {/* Cards de Ação */}
      <main className="flex-1 p-10 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        <Card title="Adicionar Alimento" icon="🛒" link="/cadastro" />
        <Card title="Gerenciar Doações" icon="📦" link="/doacoes" />
        <Card title="Histórico" icon="⏳" link="/historico" />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E6030] h-16 flex items-center justify-center text-white text-sm animate-fade-in">
        FoodRescue © 2025 - Todos os direitos reservados.
      </footer>

    </div>
  );
}

function Card({ title, icon, link }: { title: string; icon: string; link: string }) {
  return (
    <Link href={link} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <span className="text-4xl mb-4">{icon}</span>
      <h3 className="text-lg font-bold">{title}</h3>
    </Link>
  );
}

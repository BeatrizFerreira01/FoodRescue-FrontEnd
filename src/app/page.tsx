import Link from "next/link";
import { Inter } from "next/font/google";
import { Metadata } from "next"
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#F5F0E6] h-20 flex justify-between items-center px-6 text-white font-bold">
        <img src="assets/logo.png" width={100} height={100}/>
        <nav>
          <ul className="flex gap-5">
            <li><Link href="/" className="text-black">Home</Link></li>
            <li><Link href="/cadastro" className="text-black">Cadastrar alimento</Link></li>
            <li><Link href="/listagem" className="text-black">Lista de alimentos</Link></li>
            <li><Link href="/perfil" className="text-black">Perfil</Link></li>
          </ul>
        </nav>
      </header>
      {/* Banner */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "#1E4D2B"}}></div>
        <div className="relative text-center">
          <h2 className="text-3xl font-bold">Ajude a reduzir o desperdício! Faça sua doação.</h2>
          <Link href="/cadastro" className="mt-4 inline-block bg-[#FF8C42] text-white text-lg font-bold py-3 px-6 rounded-lg">Doe Agora</Link>
        </div>
      </section>

      {/* Seção Principal */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="Adicionar Alimento" icon="🛒" link="/cadastro" />
        <Card title="Gerenciar Doações" icon="📦" link="/doacoes" />
        <Card title="Histórico" icon="⏳" link="/historico" />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E6030] h-16 flex items-center justify-center text-white">
        <p>FoodRescue © 2025 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function Card({ title, icon, link }: { title: string; icon: string; link: string }) {
  return (
    <Link href={link} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
      <span className="text-3xl mb-2">{icon}</span>
      <h3 className="text-lg font-bold">{title}</h3>
    </Link>
  );
}

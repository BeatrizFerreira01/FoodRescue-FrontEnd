import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#2D8C44] h-20 flex justify-between items-center px-6 text-white font-bold">
      <img src="/logo.png" alt="Logo FoodRescue" className="h-12" />
      <nav>
        <ul className="flex gap-5">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/src/app/cadastro">Cadastrar alimento</Link></li>
          <li><Link href="/src/app/listagem">Lista de alimentos</Link></li> {/* Corrigido */}
          <li><Link href="/src/app/perfil">Perfil</Link></li> {/* Corrigido */}
          <li><Link href="/src/app/doacoes">Gerenciar Doações</Link></li>
          <li><Link href="/src/app/historico">Histórico</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

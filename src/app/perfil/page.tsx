'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PerfilPage() {
  // Estados para Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');

  // Estados para Cadastro
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estado de Mensagem
  const [mensagem, setMensagem] = useState('');

  // Estado de Usuário Logado
  const [usuarioLogado, setUsuarioLogado] = useState<any>(null);

  // Função de cadastro
  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setMensagem('Preencha todos os campos do cadastro.');
      return;
    }

    const novoUsuario = { nome, email, senha };
    localStorage.setItem('usuario', JSON.stringify(novoUsuario));

    setMensagem('✅ Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
  };

  // Função de login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);

      if (usuario.email === loginEmail && usuario.senha === loginSenha) {
        setUsuarioLogado(usuario);
        setMensagem(`✅ Bem-vindo(a), ${usuario.nome}!`);
      } else {
        setMensagem('❌ Email ou senha incorretos.');
      }
    } else {
      setMensagem('❌ Nenhum usuário cadastrado ainda.');
    }

    setLoginEmail('');
    setLoginSenha('');
  };

  // Função de sair
  const handleLogout = () => {
    setUsuarioLogado(null);
    setMensagem('Você saiu da conta.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      
      {/* Título */}
      <h1 className="text-3xl font-bold mb-2 text-center">Área do Usuário</h1>
      <p className="text-center mb-10 text-gray-600">
        Faça login ou cadastre-se para gerenciar sua conta.
      </p>

      {/* Mensagens */}
      {mensagem && (
        <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-lg w-full max-w-md text-center animate-fade-in">
          {mensagem}
        </div>
      )}

      {/* Se usuário estiver logado */}
      {usuarioLogado ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center mb-20 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-[#2D8C44]">Perfil</h2>
          <p className="mb-2"><strong>Nome:</strong> {usuarioLogado.nome}</p>
          <p className="mb-6"><strong>Email:</strong> {usuarioLogado.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>
      ) : (
      /* Se não estiver logado, mostrar login e cadastro */
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20 w-full max-w-5xl">

        {/* Login */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#2D8C44]">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              value={loginSenha}
              onChange={(e) => setLoginSenha(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#2D8C44] text-white font-bold py-3 rounded-lg hover:bg-[#256b35] transition"
            >
              Entrar
            </button>
          </form>
        </div>

        {/* Cadastro */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#2D8C44]">Cadastro</h2>
          <form onSubmit={handleCadastro} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#FF8C42] text-white font-bold py-3 rounded-lg hover:bg-[#e67c35] transition"
            >
              Cadastrar
            </button>
          </form>
        </div>

      </div>
      )}

      {/* Desenvolvedoras */}
      <div className="mt-20 text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Desenvolvedoras</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">

          {/* Beatriz */}
          <div className="flex flex-col items-center group">
            <Image
              src="/assets/beatriz.jpg"
              alt="Foto de Beatriz Ferreira"
              width={120}
              height={120}
              className="rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
            />
            <h3 className="text-lg font-semibold mt-3">Beatriz Ferreira</h3>
            <Link
              href="https://github.com/BeatrizFerreira01"
              target="_blank"
              className="mt-2"
            >
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54..."></path>
                </svg>
                GitHub
              </button>
            </Link>
          </div>

          {/* Bárbara */}
          <div className="flex flex-col items-center group">
            <Image
              src="/assets/barbara.png"
              alt="Foto de Bárbara Dias"
              width={120}
              height={120}
              className="rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
            />
            <h3 className="text-lg font-semibold mt-3">Bárbara Dias</h3>
            <Link
              href="https://github.com/bahdiaz"
              target="_blank"
              className="mt-2"
            >
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54..."></path>
                </svg>
                GitHub
              </button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

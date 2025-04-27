"use client";
import { useState } from "react";
import axios from "axios";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState<number>(1);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !categoria) {
      setErro("Preencha todos os campos.");
      setMensagem("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/api/alimentos", {
        nome: nome,
        categoria: categoria,
        quantidade: quantidade,
      });

      setMensagem(`Alimento "${response.data.nome}" cadastrado com sucesso!`);
      setErro("");
      setNome("");
      setCategoria("");
      setQuantidade(1);
    } catch (error: any) {
      console.error("Erro ao cadastrar alimento:", error);
      const msg =
        error?.response?.data?.message || "Erro ao cadastrar alimento.";
      setErro(msg);
      setMensagem("");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-[#2D8C44] mb-4 text-center">
        Cadastrar Alimento
      </h1>

      {mensagem && (
        <p className="mb-4 text-green-600 text-center font-medium">
          {mensagem}
        </p>
      )}

      {erro && (
        <p className="mb-4 text-red-600 text-center font-medium">{erro}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-gray-700">
            Nome do Alimento
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            placeholder="Digite o nome do alimento"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">
            Categoria
          </label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            placeholder="Digite a categoria"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">
            Quantidade
          </label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            min={1}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
            placeholder="Digite a quantidade"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#FF8C42] text-white text-xl font-bold rounded-lg hover:bg-[#e67c35] transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;

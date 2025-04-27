'use client';
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState<number | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    if (!nome || !descricao || !categoria || quantidade === '') {
      toast.error("Preencha todos os campos corretamente!");
      return;
    }

    if (quantidade <= 0) {
      toast.error("A quantidade deve ser maior que 0!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/api/alimentos", {
        nome,
        descricao,
        categoria,
        quantidade,
      });

      toast.success(`Alimento "${response.data.nome}" cadastrado com sucesso!`);
      setNome("");
      setDescricao("");
      setCategoria("");
      setQuantidade('');
    } catch (error: any) {
      console.error("Erro ao cadastrar alimento:", error);
      const msg = error?.response?.data?.message || "Erro ao cadastrar alimento.";
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg animate-fade-in">
        <h1 className="text-3xl font-bold text-[#2D8C44] mb-6 text-center">
          Cadastrar Alimento
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nome */}
          <input
            type="text"
            placeholder="Nome do Alimento"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
          />

          {/* Descrição */}
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
          ></textarea>

          {/* Categoria */}
          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
          />

          {/* Quantidade */}
          <input
            type="number"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8C44] focus:outline-none"
          />

          {/* Botão */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FF8C42] text-white text-lg font-bold rounded-lg hover:bg-[#e67c35] transition"
          >
            Cadastrar
          </button>

        </form>
      </div>
    </div>
  );
};

export default Cadastro;

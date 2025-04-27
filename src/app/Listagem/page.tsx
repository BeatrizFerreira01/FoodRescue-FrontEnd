'use client';

import React, { useEffect, useState } from 'react';

interface Alimento {
  id: number;
  nome: string;
  categoria: string;
  quantidade: number;
}

const Listagem = () => {
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [sortBy, setSortBy] = useState('nome');
  const [nomeFiltro, setNomeFiltro] = useState('');
  const [quantidadeMin, setQuantidadeMin] = useState<number | ''>('');
  const [quantidadeMax, setQuantidadeMax] = useState<number | ''>('');

  const fetchAlimentos = async () => {
    setLoading(true);
    try {
      let url = `http://localhost:8081/api/alimentos?nome=${nomeFiltro}&page=${page}&size=${size}&sortBy=${sortBy}`;

      if (quantidadeMin !== '') {
        url += `&quantidadeMin=${quantidadeMin}`;
      }
      if (quantidadeMax !== '') {
        url += `&quantidadeMax=${quantidadeMax}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setAlimentos(data.content);
    } catch (error) {
      console.error('Erro ao buscar alimentos:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAlimentos();
  }, [page, sortBy]);

  const handlePesquisar = () => {
    setPage(0); // Voltar para a primeira página ao pesquisar
    fetchAlimentos();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Lista de Alimentos</h1>

      {/* Área de filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={nomeFiltro}
          onChange={(e) => setNomeFiltro(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="number"
          placeholder="Quantidade mínima"
          value={quantidadeMin}
          onChange={(e) => setQuantidadeMin(e.target.value === '' ? '' : Number(e.target.value))}
          className="border p-2 rounded w-full md:w-auto"
        />
        <input
          type="number"
          placeholder="Quantidade máxima"
          value={quantidadeMax}
          onChange={(e) => setQuantidadeMax(e.target.value === '' ? '' : Number(e.target.value))}
          className="border p-2 rounded w-full md:w-auto"
        />
        <button onClick={handlePesquisar} className="bg-blue-500 text-white px-4 py-2 rounded">
          Pesquisar
        </button>
      </div>

      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => setSortBy('nome')}>
                Nome 🔽
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => setSortBy('categoria')}>
                Categoria 🔽
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => setSortBy('quantidade')}>
                Quantidade 🔽
              </th>
            </tr>
          </thead>
          <tbody>
            {alimentos.length > 0 ? (
              alimentos.map((alimento) => (
                <tr key={alimento.id}>
                  <td className="border px-4 py-2">{alimento.nome}</td>
                  <td className="border px-4 py-2">{alimento.categoria}</td>
                  <td className="border px-4 py-2">{alimento.quantidade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="border px-4 py-2 text-center">
                  Nenhum alimento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Paginação */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {page + 1}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Listagem;

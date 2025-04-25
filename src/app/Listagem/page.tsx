const Listagem = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Lista de Alimentos</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {/* Aqui você pode mapear os alimentos cadastrados */}
          <tr>
            <td className="border px-4 py-2">Arroz</td>
            <td className="border px-4 py-2">
              Alimento básico para diversas receitas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;

import React from "react";

const mockData = [
  { id: 1, location: "Rua A, 123", status: "Vazia" },
  { id: 2, location: "Rua B, 456", status: "Cheia" },
  { id: 3, location: "Rua C, 789", status: "Vazia" },
  { id: 4, location: "Rua D, 101", status: "Cheia" },
  { id: 1, location: "Rua A, 123", status: "Vazia" },
  { id: 2, location: "Rua B, 456", status: "Cheia" },
  { id: 3, location: "Rua C, 789", status: "Vazia" },
  { id: 4, location: "Rua D, 101", status: "Cheia" },
];

export default function TabelaLixeiras() {
  return (
    <div className="flex justify-center p-6 md:p-12 w-full md:w-1/2">
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold font-titulo text-titulo uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold font-titulo text-titulo uppercase tracking-wider">
              Localização
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold font-titulo text-titulo uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 border-b border-gray-200 bg-white text-parafrafo font-paraf text-sm">
                {item.id}
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-parafrafo font-paraf bg-white text-sm">
                {item.location}
              </td>
              <td
                className={`px-6 py-4 border-b font-paraf border-gray-200 text-sm ${
                  item.status === "Cheia" ? "text-red-600" : "text-green-600"
                }`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

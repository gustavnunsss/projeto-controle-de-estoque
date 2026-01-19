"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react"; // Importação do ícone solicitado

const products = Array.from({ length: 15 }).map((_, i) => ({
  id: `00${i + 1}`,
  name: "Iphone 16 PRO MAX",
  price: 4000.0,
  rating: 5.0,
  stockQuantity: 200,
  createdAt: new Date(),
}));

export default function Inventory() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(products.map((p) => p.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <aside className="w-64 bg-zinc-900 p-6 hidden md:block border-r border-zinc-800">
        <h1 className="text-xl font-bold mb-8">LOGO</h1>
        <nav className="space-y-2">
          <p className="text-xs text-zinc-500 mb-4">MENU</p>
          <div className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 cursor-pointer">
            Dashboard
          </div>
          <div className="px-4 py-2 rounded-lg bg-zinc-800 font-medium text-white">
            Inventory
          </div>
          <div className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 cursor-pointer">
            Sales
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">Inventory</h2>
          <Input
            placeholder="Search"
            className="max-w-md bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
          />
          {/* Botão com Fundo Gray, Letra Branca e Ícone */}
          <Button
            variant="default"
            className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 border-none"
          >
            <CircleUser className="w-5 h-5 text-zinc-400" />
            User
          </Button>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Inventory items</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="text-white border-b border-zinc-800 font-medium">
                <tr>
                  <th className="p-4 text-left">
                    <Checkbox
                      className="border-zinc-700"
                      checked={selectedIds.length === products.length}
                      onCheckedChange={(checked) => handleSelectAll(!!checked)}
                    />
                  </th>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Product name</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Stock Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <Checkbox
                        className="border-zinc-700"
                        checked={selectedIds.includes(product.id)}
                        onCheckedChange={(checked) =>
                          handleSelectOne(product.id, !!checked)
                        }
                      />
                    </td>
                    <td className="p-4 text-white font-mono">{product.id}</td>
                    <td className="p-4 font-semibold text-white">
                      {product.name}
                    </td>
                    <td className="p-4 text-zinc-300">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price)}
                    </td>
                    <td className="p-4 text-zinc-300">
                      {product.stockQuantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, CircleUser, Calendar, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Sell() {
  const [quantity, setQuantity] = useState(2);
  const price = 4000.0;
  const total = price * quantity;

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar - Mesmo estilo do seu Inventory */}
      <aside className="w-64 bg-zinc-900 p-6 hidden md:block border-r border-zinc-800">
        <h1 className="text-xl font-bold mb-8">LOGO</h1>
        <nav className="space-y-2">
          <p className="text-xs text-zinc-500 mb-4">MENU</p>
          <div className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 cursor-pointer">
            Dashboard
          </div>
          <div className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 cursor-pointer">
            Inventory
          </div>
          <div className="px-4 py-2 rounded-lg bg-zinc-800 font-medium text-white border-l-4 border-white/10">
            Sell
          </div>
          <div className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 cursor-pointer">
            Salles
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Header - Seguindo seu padrão */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Nova Venda</h2>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search"
              className="max-w-md bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
            />
            <Button className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 border-zinc-800 border">
              <CircleUser className="w-5 h-5 text-zinc-400" />
              User
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Lado Esquerdo - Formulário e Carrinho */}
          <div className="xl:col-span-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Dados do Cliente */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Dados do Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 uppercase">
                      Cliente
                    </label>
                    <Select defaultValue="bruno">
                      <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                        <SelectItem value="bruno">Bruno Vargas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 uppercase">
                        Vendedor
                      </label>
                      <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-md border border-zinc-800 text-sm">
                        User 1
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 uppercase">
                        Data
                      </label>
                      <div className="flex items-center justify-between bg-zinc-950 p-2 rounded-md border border-zinc-800 text-sm text-zinc-400">
                        18/01/2026 <Calendar className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Busca Rápida */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Adicionar Produto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <Input
                      className="bg-zinc-950 border-zinc-800 pl-10 text-white"
                      placeholder="Buscar produto..."
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                    <div>
                      <p className="text-sm font-bold text-white">
                        Iphone 16 PRO MAX
                      </p>
                      <p className="text-xs text-zinc-500">R$ 4.000,00</p>
                    </div>
                    <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabela de Itens Selecionados - Igual à sua do Inventory */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white text-sm">
                  Produtos Selecionados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead className="text-zinc-500 border-b border-zinc-800 font-medium">
                    <tr>
                      <th className="p-4 text-left font-bold">PRODUTO</th>
                      <th className="p-4 text-left font-bold">PREÇO</th>
                      <th className="p-4 text-center font-bold">QTD</th>
                      <th className="p-4 text-left font-bold">SUBTOTAL</th>
                      <th className="p-4 text-right font-bold">AÇÃO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-800/40">
                      <td className="p-4 font-semibold text-white">
                        Iphone 16 PRO MAX
                      </td>
                      <td className="p-4 text-zinc-300">R$ 4.000,00</td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="text-zinc-400 hover:text-white text-lg font-bold"
                          >
                            +
                          </button>
                          <span className="w-10 text-center bg-zinc-950 py-1 rounded border border-zinc-800">
                            {quantity}
                          </span>
                          <button
                            onClick={() =>
                              setQuantity((q) => Math.max(1, q - 1))
                            }
                            className="text-zinc-400 hover:text-white text-lg font-bold"
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-white font-bold">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(total)}
                      </td>
                      <td className="p-4 text-right">
                        <Button
                          variant="ghost"
                          className="text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Resumo Financeiro */}
          <div className="xl:col-span-4">
            <Card className="bg-zinc-900 border-zinc-800 sticky top-6 shadow-2xl">
              <CardHeader className="border-b border-zinc-800 mb-4">
                <CardTitle className="text-white text-lg">
                  Resumo Financeiro
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-zinc-500">
                    <span>Subtotal</span>
                    <span className="text-white">
                      R${" "}
                      {total.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Descontos</span>
                    <span className="text-emerald-500">- R$ 0,00</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-white font-bold text-lg uppercase">
                      Total
                    </span>
                    <span className="text-white text-2xl font-black">
                      R${" "}
                      {total.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    Pagamento
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-zinc-950 rounded-lg border border-emerald-500/50 flex flex-col items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] uppercase font-bold text-white">
                        Pago
                      </span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 flex flex-col items-center gap-1 opacity-50">
                      <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                      <span className="text-[10px] uppercase font-bold text-zinc-500">
                        Pendente
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold h-12 text-sm">
                    FINALIZAR VENDA
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-zinc-800 hover:bg-red-500/10 hover:text-red-500 text-zinc-500 h-10"
                  >
                    CANCELAR
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

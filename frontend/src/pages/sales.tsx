"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/bagde";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Search } from "lucide-react";

export default function SalesPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <main className="flex-1 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 py-6 space-y-6 text-white">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Sales</h2>

            <div className="relative w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search"
                className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Total de Vendas</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400 text-xl font-bold">
                R$ 12.450,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Vendas Pagas</CardTitle>
              </CardHeader>
              <CardContent className="text-green-500 text-xl font-bold">
                R$ 8.900,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Vendas Pendentes</CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-400 text-xl font-bold">
                R$ 3.200,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Canceladas</CardTitle>
              </CardHeader>
              <CardContent className="text-red-400 text-xl font-bold">
                R$ 350,00
              </CardContent>
            </Card>
          </div>

          {/* Tabela */}
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">ID</TableHead>
                    <TableHead className="text-white">Cliente</TableHead>
                    <TableHead className="text-white">Data</TableHead>
                    <TableHead className="text-white">Valor</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Pagamento</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow className="border-zinc-800">
                    <TableCell>#1023</TableCell>
                    <TableCell>Bruno Vargas</TableCell>
                    <TableCell>23/11/2023</TableCell>
                    <TableCell>R$ 2.200,00</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 text-white">Pago</Badge>
                    </TableCell>
                    <TableCell>Boleto</TableCell>
                  </TableRow>

                  <TableRow className="border-zinc-800">
                    <TableCell>#1022</TableCell>
                    <TableCell>Francisco Maciel</TableCell>
                    <TableCell>20/11/2023</TableCell>
                    <TableCell>R$ 1.600,00</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-600 text-white">
                        Pendente
                      </Badge>
                    </TableCell>
                    <TableCell>Pix</TableCell>
                  </TableRow>

                  <TableRow className="border-zinc-800">
                    <TableCell>#1019</TableCell>
                    <TableCell>Gustavo Nunes</TableCell>
                    <TableCell>17/11/2023</TableCell>
                    <TableCell>R$ 2.200,00</TableCell>
                    <TableCell>
                      <Badge className="bg-red-600 text-white">Cancelado</Badge>
                    </TableCell>
                    <TableCell>Cartão</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

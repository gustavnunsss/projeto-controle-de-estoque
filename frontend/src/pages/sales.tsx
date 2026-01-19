"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <aside className="w-64 bg-zinc-900 p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-10">LOGO</h1>

        <span className="text-xs text-zinc-400 mb-4">MENU</span>

        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            Inventory
          </Button>
          <Button variant="secondary" className="justify-start">
            Sales
          </Button>
          <Button variant="ghost" className="justify-start">
            Financial
          </Button>
        </nav>
      </aside>

      <main className="flex-1 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Sales</h2>

            <div className="relative w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search"
                className="pl-10 bg-zinc-900 border-zinc-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Total de Vendas</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400 text-xl font-bold">
                R$ 12.450,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Vendas Pagas</CardTitle>
              </CardHeader>
              <CardContent className="text-green-500 text-xl font-bold">
                R$ 8.900,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Vendas Pendentes</CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-400 text-xl font-bold">
                R$ 3.200,00
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Canceladas</CardTitle>
              </CardHeader>
              <CardContent className="text-red-400 text-xl font-bold">
                R$ 350,00
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pagamento</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>#1023</TableCell>
                    <TableCell>Bruno Vargas</TableCell>
                    <TableCell>23/11/2023</TableCell>
                    <TableCell>R$ 2.200,00</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600">Pago</Badge>
                    </TableCell>
                    <TableCell>Boleto</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>#1022</TableCell>
                    <TableCell>Francisco Maciel</TableCell>
                    <TableCell>20/11/2023</TableCell>
                    <TableCell>R$ 1.600,00</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-600">Pendente</Badge>
                    </TableCell>
                    <TableCell>Pix</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>#1019</TableCell>
                    <TableCell>Gustavo Nunes</TableCell>
                    <TableCell>17/11/2023</TableCell>
                    <TableCell>R$ 2.200,00</TableCell>
                    <TableCell>
                      <Badge className="bg-red-600">Cancelado</Badge>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign, Package, Users, ShoppingCart } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { JSX } from "react";
import { Sidebar } from "@/components/sidebar";

const chartData = [
  { month: "Jan", value: 500 },
  { month: "Feb", value: 1200 },
  { month: "Mar", value: 800 },
  { month: "Apr", value: 2000 },
  { month: "May", value: 1500 },
  { month: "Jun", value: 3000 },
  { month: "Jul", value: 2200 },
  { month: "Aug", value: 4200 },
  { month: "Sep", value: 3800 },
  { month: "Oct", value: 5200 },
  { month: "Nov", value: 4600 },
  { month: "Dec", value: 6000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 px-8 py-6 space-y-6">
        {/* HEADER */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Button
            variant="outline"
            className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2 border-none"
          >
            User
          </Button>
        </header>

        {/* METRICS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Sales"
            value="$5,000"
            icon={<DollarSign />}
          />
          <MetricCard title="Products" value="4" icon={<Package />} />
          <MetricCard title="Customers" value="3" icon={<Users />} />
          <MetricCard title="Orders" value="15" icon={<ShoppingCart />} />
        </section>

        {/* CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* RECENT ORDERS */}
          <Card className="bg-zinc-900 border border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <OrderItem name="Bruno Vargas" value="$1,250" />
              <OrderItem name="Luan Braga" value="$1,100" />
              <OrderItem name="Gustavo Nunes" value="$1,000" />
            </CardContent>
          </Card>

          {/* SALES CHART */}
          <Card className="lg:col-span-2 bg-zinc-900 border border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Sales Trends</CardTitle>

              <Select defaultValue="jan">
                <SelectTrigger className="w-[130px] bg-zinc-900 border-zinc-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 text-white border-zinc-700">
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  <SelectItem value="mar">March</SelectItem>
                  <SelectItem value="apr">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="jun">June</SelectItem>
                  <SelectItem value="jul">July</SelectItem>
                  <SelectItem value="aug">August</SelectItem>
                  <SelectItem value="sep">September</SelectItem>
                  <SelectItem value="oct">October</SelectItem>
                  <SelectItem value="nov">November</SelectItem>
                  <SelectItem value="dec">December</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>

            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="month" stroke="#d4d4d8" />
                  <YAxis stroke="#d4d4d8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#18181b",
                      borderColor: "#3f3f46",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: JSX.Element;
}) {
  return (
    <Card className="bg-zinc-900 border border-zinc-800">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm text-zinc-400">{title}</CardTitle>
        <div className="text-zinc-400">{icon}</div>
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-bold text-white">{value}</p>
        <span className="text-xs text-green-500">+0% from last month</span>
      </CardContent>
    </Card>
  );
}

function OrderItem({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-2 last:border-none">
      <div>
        <p className="font-medium text-white">{name}</p>
        <span className="text-xs text-zinc-400">Today</span>
      </div>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

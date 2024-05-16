import DoughnutChart from "@/components/dough-chart";

export default function Page() {
  return (
    <main>
      <h1 className="md: mb-4 text-2xl text-xl">Dashboard</h1>
      <DoughnutChart />
      <DoughnutChart />
    </main>
  );
}

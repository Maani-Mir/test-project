import DoughnutChart from "@/components/dough-chart";

export default function Page() {
  return (
    <main>
      <div className="pt-12 text-3xl font-semibold ">Dashboard</div>
      <div className="pt-1 pl-1 text-sm pb-8 text-[#52508C]">
        You can overview Samos Tuanis Data Here!
      </div>

      <DoughnutChart />
    </main>
  );
}

import GenderChart from "@/components/gender-chart";
import RegionChart from "@/components/region-chart";
import LanguageChart from "@/components/language-chart";
import CategoryChart from "@/components/category-chart";

export default function Page() {
  return (
    <main>
      <div className="pt-12 text-3xl font-semibold ">Dashboard</div>
      <div className="pt-1 pl-1 text-sm pb-8 text-[#52508C]">
        You can overview Samos Tuanis Data Here!
      </div>

      <GenderChart />
      <div className="pt-4">
        <RegionChart />
      </div>
      <div className="pt-4">
        <LanguageChart />
      </div>
      <div className="pt-4">
        <CategoryChart />
      </div>
    </main>
  );
}

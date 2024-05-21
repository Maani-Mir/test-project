import TotalHits from "@/components/total-hits/total-hits-table";

import React from "react";

export default function Page() {
  return (
    <div>
      <div className="pt-12 text-3xl font-semibold ">
        Total Number of Hits by Categories
      </div>
      <div className="pt-1 pl-1 text-sm pb-8 text-[#52508C]">
        You can overview Samos Tuanis Number of Hits
      </div>
      <TotalHits />
    </div>
  );
}

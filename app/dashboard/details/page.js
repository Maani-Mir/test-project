import DetailsTable from "@/components/details/table";

import React from "react";

const Page = () => {
  return (
    <div>
      <div className="pt-12 text-3xl font-semibold ">App Stats</div>
      <div className="pt-1 pl-1 text-sm pb-8 text-[#52508C]">
        You can overview Samos Tuanis Number of Hits
      </div>
      <DetailsTable />
    </div>
  );
};

export default Page;

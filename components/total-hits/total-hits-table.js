import React from "react";
import BeliefHitsCard from "./belief-hits-card";
import BeliefHitsTable from "./belief-hits-table";
import FamilyHitsCard from "./family-hits-card";
import FamilyHitsTable from "./family-hits-table";
import CommunityHitsCard from "./community-hits-card";
import CommunityHitsTable from "./community-hits-table";
import CountryHitsCard from "./country-hits-card";
import CountryHitsTable from "./country-hits-table";

const HITS_TABLE = [
  {
    category: "My Belief",
    categoryvalue: "2000",
    subcategory: "Self Esteem",
    subvalue: "600",
    games: [
      { name: "Mythbuster", value: "600" },
      { name: "Run and Catch", value: "600" },
      { name: "Guess the Word", value: "600" },
    ],
  },
  {
    category: "My Family",
    categoryvalue: "2000",
    subcategory: "Self Esteem",
    subvalue: "600",
    games: [
      { name: "Mythbuster", value: "600" },
      { name: "Run and Catch", value: "600" },
      { name: "Guess the Word", value: "600" },
    ],
  },
  {
    category: "My Belief",
    categoryvalue: "2000",
    subcategory: "Self Esteem",
    subvalue: "600",
    games: [
      { name: "Mythbuster", value: "600" },
      { name: "Run and Catch", value: "600" },
      { name: "Guess the Word", value: "600" },
    ],
  },
  {
    category: "My Belief",
    categoryvalue: "2000",
    subcategory: "Self Esteem",
    subvalue: "600",
    games: [
      { name: "Mythbuster", value: "600" },
      { name: "Run and Catch", value: "600" },
      { name: "Guess the Word", value: "600" },
    ],
  },
];

export default function TotalHits() {
  return (
    <div>
      <BeliefHitsCard />
      <BeliefHitsTable />
      <div className="pt-8">
        <FamilyHitsCard />
        <FamilyHitsTable />
      </div>
      <div className="pt-8">
        <CommunityHitsCard />
        <CommunityHitsTable />
      </div>
      <div className="pt-8">
        <CountryHitsCard />
        <CountryHitsTable />
      </div>
    </div>
  );
}

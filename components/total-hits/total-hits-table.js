import React from "react";
import HitsCard from "./belief-hits-card";
import HitsTable from "./belief-hits-table";

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
      <HitsCard />
      <HitsTable />
    </div>
  );
}

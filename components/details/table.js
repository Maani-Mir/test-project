import React from "react";

const DETAILS_ENTERIES = [
  {
    srno: "1",
    gender: "Female",
    age: "16-18",
    region: "North-Central",
    category: "My Belief",
    subcategory: "Responsibilities",
    game: "Learn with Letters",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "2",
    gender: "Female",
    age: "16-18",
    region: "North-Central",
    category: "My Belief",
    subcategory: "Responsibilities",
    game: "Learn with Letters",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "3",
    gender: "Female",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Belief",
    subcategory: "Self Esteem",
    game: "Learn with Letters",
    language: "Sp",
    date: "18-6-2022",
  },
  {
    srno: "4",
    gender: "Female",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Belief",
    subcategory: "Self Esteem",
    game: "Learn with Letters",
    language: "Sp",
    date: "18-6-2022",
  },
  {
    srno: "5",
    gender: "Female",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Family",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "6",
    gender: "Female",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Family",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "7",
    gender: "Male",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Community",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "8",
    gender: "Male",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Community",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "9",
    gender: "Male",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Family",
    subcategory: "Self Esteem",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "10",
    gender: "Male",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Family",
    subcategory: "Self Esteem",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
];

const DetailsTable = () => {
  return (
    <div className="">
      <table className=" min-w-full text-white md:table">
        <thead className="rounded-lg text-center text-sm font-normal bg-gradient-to-t from-[#38048C] to-[#3B0092]">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium ">
              #
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Gender
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Age
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Region
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Category
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Sub Category
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Game
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Language
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {DETAILS_ENTERIES.map((entry) => (
            <tr key={entry.srno} className="odd:bg-[#1B1744] even:bg-[#221E52]">
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.srno}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.gender}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.age}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.region}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.category}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.subcategory}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.game}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.language}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;

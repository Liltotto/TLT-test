"use client";

import MainSection from "@/components/layouts/mainSection";
import Sidebar from "@/components/layouts/sidebar";
import ListWrapper from "@/components/listWrapper/listWrapper";
import { useState } from "react";


export default function Goods() {

  const [selectedOption, setSelectedOption] = useState("tabular");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex">
      <Sidebar />
      <MainSection
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      >
        <ListWrapper
          selectedOption={selectedOption}
          searchQuery={searchQuery}
        />
      </MainSection>

    </div>
  );
}

"use client";

import CardList from "@/components/cardList/cardList";
import CardsItem from "@/components/cardsItem/cardsItem";
import FormCreateOrEdit from "@/components/forms/formCreateOrEdit/formCreateOrEdit";
import MainSection from "@/components/layouts/mainSection";
import Sidebar from "@/components/layouts/sidebar";
import ListWrapper from "@/components/listWrapper/listWrapper";
import TabularList from "@/components/tabularList/tabularList";
// import TabularListWrapper from "@/components/tabularListWrapper/tabularListWrapper";
import { MyModal } from "@/components/UI/myModal/myModal";
import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
// 	title: 'Товары',
// };

export default function Goods() {
  // const [visible, setVisible] = useState(true);

  const [selectedOption, setSelectedOption] = useState("tabular");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex">
      <Sidebar />
      {/* <Card/> */}
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
        {/* {selectedOption === "tabular" ? <TabularList /> : null}
        {selectedOption === "card" ? <CardList /> : null} */}
        {/* <TabularList /> */}
        {/* <TabularListWrapper /> */}
      </MainSection>
      {/* <MyModal visible={visible} setVisible={handleClick}>
        <FormCreateOrEdit />
      </MyModal> */}
    </div>
  );
}

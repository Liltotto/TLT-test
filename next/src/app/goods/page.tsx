'use client'

import CardsItem from "@/components/cardsItem/cardsItem";
import FormCreateOrEdit from "@/components/formCreateOrEdit/formCreateOrEdit";
import MainSection from "@/components/layouts/mainSection";
import Sidebar from "@/components/layouts/sidebar";
import TabularList from "@/components/tabularList/tabularList";
import { MyModal } from "@/components/UI/myModal/myModal";
import { Metadata } from "next";
import { useState } from "react";


// export const metadata: Metadata = {
// 	title: 'Товары',
// };

export default function Goods() {

	const [visible, setVisible] = useState(true)

	const handleClick = (boolean: boolean) => {
		setVisible(boolean)
	}

	return (
		<div className="flex">
			<Sidebar />
			{/* <Card/> */}
			<MainSection>
				<TabularList />
			</MainSection>
			{/* <MyModal visible={visible} setVisible={handleClick}>
				<FormCreateOrEdit />
			</MyModal> */}
		</div>
	)
}

import Card from "@/components/card/card";
import Sidebar from "@/components/layouts/sidebar";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'Товары',
};

export default function Goods() {
  return (
    <div>
        <Sidebar/>
        {/* <Card/> */}
    </div>
  )
}

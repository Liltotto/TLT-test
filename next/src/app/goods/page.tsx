import Sidebar from "@/components/layouts/sidebar";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'Товары',
};

export default function Goods() {
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

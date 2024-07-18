import Sidebar from "@/components/layouts/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Алгоритмы",
};

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="text-3xl m-auto">algorithms</div>
    </div>
  );
}

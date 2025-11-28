


import Menu from "@/components/menu";
import { ProductList } from "@/components/product/productList";
import SectionWraper from "@/components/sectionWraper";

export default function Home() {

  return (
    <div className="bg-gray-100 font-sans">
      <Menu/>

      <SectionWraper/>

      <ProductList/>
      
    </div>

  );
}

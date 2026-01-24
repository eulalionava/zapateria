


import Menu from "@/src/components/menu";
import { ProductList } from "@/src/components/product/productList";
import SectionWraper from "@/src/components/sectionWraper";

export default function Home() {

  return (
    <div className="bg-gray-100 font-sans">
      {/* <Menu/> */}

      <SectionWraper/>

      <ProductList/>
      
    </div>

  );
}

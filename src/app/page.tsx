
import { ProductList } from "@/src/components/product/productList";
// import SectionWraper from "@/src/components/sectionWraper";
import { FilterGender } from "@/src/components/filterGender";
import ItemPromotion from "../components/ItemPromotion";

export default function Home() {

  return (
    <div className="bg-gray-100 font-sans">
    
      {/* <SectionWraper/> */}
      
      <div>
        <ItemPromotion/>
        <FilterGender/>
        <ProductList/>
      </div>
      
    </div>

  );
}

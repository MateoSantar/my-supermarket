import { products, sales } from "@/app/lib/data";
import ProductsTable from "@/app/ui/products/ProductsTable";
import TopProducts from "@/app/ui/products/TopProducts";
import { barlow } from "@/app/utils/fonts";

export default function Products() {
    return (
        <div
            className={`flex flex-col md:flex-row gap-5 ${barlow.className} p-3 pb-7 pl-5 `}
        >
            <div className=" w-full md:w-2/3">
                <ProductsTable products={products} />
            </div>
            <div className=" w-full md:w-1/3 h-fit">

                <TopProducts sales={sales}/>
            </div>
        </div>
    );
}

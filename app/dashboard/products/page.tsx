import { deliveries, products, sales } from "@/app/lib/data";
import DeliveriesTable from "@/app/ui/products/DeliveriesTable";
import ProductsTable from "@/app/ui/products/ProductsTable";
import TopProducts from "@/app/ui/products/TopProducts";
import { barlow } from "@/app/utils/fonts";

export default function Products() {
    return (
        <div
            className={`flex flex-col  gap-3 ${barlow.className} p-3 pb-7 pl-5 `}
        >
            <Section>
                <div className=" w-full md:w-2/3 h-fit">
                    <ProductsTable products={products} />
                </div>
                <div className=" w-full md:w-1/3">
                    <TopProducts sales={sales} />
                </div>
            </Section>
            <Section>
                <div className="w-full">
                    <DeliveriesTable deliveries={deliveries}/>
                </div>
            </Section>
        </div>
    );
}

function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col md:flex-row gap-5">
            {children}
        </section>
    );
}

import { getFetch } from "@/utils/requests";
import Image from "next/image";
import Paginate from "../module/Paginate";

async function ProductCard({ params }) {
    const data = await getFetch(`/menu?${params}`);

    return (
        <>
            <div className="products-container grid justify-center gap-8  my-12">
                {
                    data.products.map(product => (
                        <div className="product-card  bg-[white] max-w-80 p-6 rounded-2xl">
                            <div>
                                <img src="/images/product-1.webp" width={300} height={300} alt={product.name} />
                                <h3 className="card-title my-4">{product.name}</h3>
                            </div>
                            <p className="card-price text-green-600">{product.price} تومان</p>

                        </div>

                    ))
                }

            </div>
            <Paginate links={data.meta.links} />
        </>

    );
};

export default ProductCard;

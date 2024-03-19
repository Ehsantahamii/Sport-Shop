import { getFetch } from '@/utils/requests';
import './products.css'
import ProductCard from "@/layouts//ProductCard";
import { Suspense } from 'react';
import Loading from '@/module//Loading';
import Sort from '@/module//Sort';
async function page({ searchParams }) {
    const params = new URLSearchParams(searchParams);
    return (
        <section>
            <Sort />
            <Suspense key={params.toString()} fallback={<Loading />}>
                <ProductCard params={params.toString()} />
            </Suspense>
        </section>
    );
}

export default page;
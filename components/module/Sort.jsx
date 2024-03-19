"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Sort = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();


    function handleClick(type) {
        const params = new URLSearchParams(searchParams);
        params.set('sortBy', type);
        params.delete('page');
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <ul className="flex items-center gap-8">
            مرتب سازی براساس:
            <li className="flex gap-2 px-2 item-center hover:border-b-[1.5px] border-blue-800">
                <input type="radio" name="" id="" onChange={() => handleClick('max')}
                    checked={searchParams.has("sortBy") && searchParams.get('sortBy') == 'max'} />
                بیشترین قیمت
            </li>
            <li className="flex gap-2 px-2 item-center hover:border-b-[1.5px] border-blue-800">
                <input type="radio" name="" id="" onChange={() => handleClick('min')} 
                checked={searchParams.has("sortBy") && searchParams.get('sortBy') == 'min'}/>
                کمترین قیمت
            </li>
            <li className="flex gap-2 px-2 item-center hover:border-b-[1.5px] border-blue-800">
                <input type="radio" name="" id="" onChange={() => handleClick('bestseller')} 
                checked={searchParams.has("sortBy") && searchParams.get('sortBy') == 'bestseller'}/>
                پرفروش ترین
            </li>
            <li className="flex gap-2 px-2 item-center hover:border-b-[1.5px] border-blue-800">
                <input type="radio" name="" id="" onChange={() => handleClick('sale')} 
                checked={searchParams.has("sortBy") && searchParams.get('sortBy') == 'sale'}/>
                با تخفیف
            </li>
        </ul>
    );
};

export default Sort;
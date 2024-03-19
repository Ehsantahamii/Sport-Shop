"use client"
import { usePathname, useRouter } from "next/navigation";
import "./Paginate.css"
const Paginate = ({ links }) => {
    const pathname = usePathname();
    const router = useRouter();

    function handlePage(page) {
        const params = new URLSearchParams();
        params.set("page", page);

        router.replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="flex justify-center my-8 ">
            <ul className="pagination flex gap-4">
                {
                    links.slice(1, -1).map((link, index) => (

                        <li key={index} className={link.active ? "page-item animate-bounce active " : "page-item"}>
                            <button className="w-full h-full" onClick={() => handlePage(link.label)}>{link.label}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Paginate;
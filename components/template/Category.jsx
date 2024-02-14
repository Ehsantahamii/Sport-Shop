'use client'
import Link from "next/link";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import Loading from "../module/Loading";

function Category() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["category"],
        queryFn: () => fetch("http://localhost:3001/category").then((res) =>
            res.json())
    })
    console.log(data);
    if (isLoading) {
        return (
            <Loading />
        )
    };
    return (
        <section className="categories h-40 flex flex-wrap justify-center  gap-4">
            {
                data.map((category) =>
                    <Link  className="flex justify-center items-center w-full max-w-[250px] h-16 border-solid border-[3px]" href="#">
                        <img className="max-w-[100px]" src={category.image} alt="" />
                        <h3>{category.title}</h3>
                    </Link>

                )
            }
        </section>
    );
}

export default Category;
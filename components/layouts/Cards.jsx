import Image from "next/image";

const Cards = () => {
    return (
        <section className="flex flex-col-reverse sm:flex-row gap-6 justify-between my-6 sm:my-12 w-[95vw] max-w-[1280px] mx-auto">
            <div className="flex-hz w-full justify-between sm:w-1/2">
                <Image className="w-[49%] h-full  rounded-[1.56rem]" src="/images/banner-24.webp" width={300} height={300} />
                <Image className="w-[49%] h-full  rounded-[1.56rem]" src="/images/banner-25.webp" width={300} height={300} />
            </div>
            <div className="w-full sm:w-1/2">
                <Image className="w-full h-full rounded-[1.56rem]" src="/images/banner-26.webp" width={600} height={300} />
            </div>
        </section>
    );
};

export default Cards;
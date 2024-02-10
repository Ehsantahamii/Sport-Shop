import { RiSearch2Line } from "react-icons/ri";

const Searchbar = () => {
    return (
        <div className="flex-hz flex-row-reverse hidden md:hidden ">
            <button className="w-[3.12rem] h-[3.12rem] rounded-[1rem] bg-gray-400">
                <RiSearch2Line className="m-auto text-white" />
            </button>
            <input className="w-[25dvw] max-h-[3.12rem] px-2 py-5 bg-[#f8f9fb] rounded-[1rem] border-[1px] border-[#f8f9fb] " type="search" placeholder="جست و جوی محصول" />
        </div>
    );
};

export default Searchbar;
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Searchbar_2 from "./searchBar/Searchbar_2";

const Navbar = () => {
    return (
        <nav className="flex-hz  my-8 py-2 px-8 bg-blue-600 text-white rounded-[90px] justify-between">
            <GiHamburgerMenu className="cursor-pointer md:hidden" />
            <Searchbar_2 />
            <ul className="hidden md:flex md:gap-4">
                <li className="hover:bg-[#333] py-2 px-2 gap-1 rounded-[90px] flex-hz cursor-pointer">
                    خانه
                    <IoIosArrowDown />
                </li>
                <li className="hover:bg-[#333] py-2 px-2 gap-1 rounded-[90px] flex-hz cursor-pointer">
                    فروشگاه
                    <IoIosArrowDown />

                </li>
                <li className="hover:bg-[#333] py-2 px-2 rounded-[90px] flex-hz cursor-pointer">درباره ما</li>
                <li className="hover:bg-[#333] py-2 px-2 rounded-[90px] flex-hz cursor-pointer">تماس با ما</li>
                <li className="hover:bg-[#333] py-2 px-2 rounded-[90px] flex-hz cursor-pointer">بلاگ</li>
            </ul>
            <div className="relative w-[5.31rem] h-12 bg-[#49be78] hover:bg-[#378f5a] rounded-full flex justify-center items-center cursor-pointer">
                <span className="absolute top-0 right-0 bg-[#333] px-2 rounded-[90px]">0</span>
                <BsCart className="text-white text-[1.2rem] m-auto" />
            </div>
        </nav>
    );
};

export default Navbar;
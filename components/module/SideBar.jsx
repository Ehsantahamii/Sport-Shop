import Link from "next/link"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoHomeOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { GrNote } from "react-icons/gr";
import { HiShoppingBag } from "react-icons/hi";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdInterests } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import UserChange from "./UserChange"
import { ProfileCard } from "./ProfileCard";
import { logout } from "@/actions/authAction";



export default function Example() {

    return (
        <Command className="sidebar hidden px-4 py-4 lg:w-1/3 max-w-[420px] lg:min-w-[350px] card-shadow lg:block">
            <div className="flex justify-between items-center">
                <ProfileCard />

                <UserChange />
            </div>
            <Command className="">
                <CommandEmpty>عدم دریافت اطلاعات...</CommandEmpty>
                <CommandGroup className="text-[1rem]  mt-4" heading="ناحیه کاربری" >
                    <CommandSeparator className="mb-4 mt-1" />
                    <CommandItem >
                        <Link className="w-full h-full flex items-normal gap-1" href="/dashboard">
                            <IoHomeOutline />
                            پیشخوان
                        </Link>
                    </CommandItem>

                    <CommandItem>
                        <Link className="w-full h-full flex items-normal gap-1" href="/dashboard/orders">
                            <MdOutlineShoppingBag />
                            سفارشات من
                        </Link>

                    </CommandItem>

                    <CommandItem>
                        <Link className="w-full h-full flex items-normal gap-1" href="/dashboard/addresses">
                            {/* <TbCategoryPlus /> */}
                            <FaMapLocationDot />
                            آدرس ها
                        </Link>
                    </CommandItem>

                    <CommandItem>
                        <Link className="w-full h-full flex items-normal gap-1" href={"/dashboard/transactions"}>
                        <LiaCommentDollarSolid />
                        تراکنش ها
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link className="w-full h-full flex items-normal gap-1" href={"/dashboard/favorites"}>
                        <MdInterests />
                            علاقه مندی ها
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link className="w-full h-full flex items-normal gap-1" href={"/dashboard/send-review"}>
                        <MdOutlineRateReview />
                        ثبت نظر
                        </Link>
                    </CommandItem>
                    <CommandItem><Link className="w-full h-full flex items-normal gap-1" href={"/"}>
                        <MdWeb />
                        بازگشت به صفحه اصلی
                    </Link>
                    </CommandItem>
                    <CommandItem className="text-red-500 hover:text-red-700 flex items-normal gap-1">
                        <IoExitOutline />
                        <form action={logout}>
                            <button >خروج از حساب کاربری</button>
                        </form>
                    </CommandItem>
                </CommandGroup>
            </Command>

        </Command>
    )
}

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
import { MdWeb } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import UserChange from "./UserChange"


export default function Example() {
    return (
        <Command className="bg-foreground px-4 py-4 w-[20dvw] max-w-[420px] min-w-[350px] card-shadow">
            <div className="flex justify-between items-center">
                <div className="flex flex-vr gap-3 items-center">

                    <Avatar className="w-28 h-28" >
                        <AvatarImage src="/images/user-avatar.jpg" />
                        <AvatarFallback>
                            <Skeleton className="w-full h-full" />
                        </AvatarFallback>

                    </Avatar>
                    <h2 className="text-white">احسان تهامی</h2>

                </div>

                <UserChange />
            </div>
            <Command className="bg-transparent">
                <CommandEmpty>عدم دریافت اطلاعات...</CommandEmpty>
                <CommandGroup className="text-[1rem] text-white  mt-4" heading="ناحیه کاربری" >
                    <CommandSeparator className="mb-4 mt-1" />
                    <CommandItem >
                        <Link className="flex-hz items-normal gap-1 w-full" href="/dashboard">
                            <IoHomeOutline />
                            پیشخوان
                        </Link>
                    </CommandItem>

                    <CommandItem>
                        <Accordion type="multiple" collapsible className="w-full h-full">
                            <AccordionItem className="border-0 p-0 m-0" value="item-1">
                                <AccordionTrigger className="flex-hz justify-start items-center gap-1 p-0">
                                    <HiShoppingBag />
                                    محصولات</AccordionTrigger>
                                <AccordionContent >
                                    <Command>
                                        <CommandItem>
                                            <Link className="w-full h-full" href="/dashboard/allproducts">محصولات</Link>
                                        </CommandItem>
                                        <CommandItem>افزودن محصول جدید</CommandItem>
                                    </Command>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CommandItem>
                    <CommandItem>
                        <Link className="w-full h-full flex-hz items-normal gap-1" href="/dashboard/addcategory">
                            <TbCategoryPlus />
                            افزودن دسته بندی
                        </Link>
                    </CommandItem>

                    <CommandItem>
                        <Accordion type="multiple" collapsible className="w-full ">
                            <AccordionItem className="border-0 p-0 m-0" value="item-1">
                                <AccordionTrigger className="flex-hz justify-start items-center gap-1 p-0">
                                    <GrNote />
                                    وبلاگ</AccordionTrigger>
                                <AccordionContent>
                                    <Command >
                                        <CommandItem>
                                            وبلاگ</CommandItem>
                                        <CommandItem>افزودن وبلاگ جدید</CommandItem>
                                    </Command>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CommandItem>
                    <CommandItem>ادمین ها</CommandItem>
                    <CommandItem>علاقه مندی ها</CommandItem>
                    <CommandItem>نظرات</CommandItem>
                    <CommandItem><Link className="flex-hz items-normal gap-1 w-full" href={"/"}>
                        <MdWeb />
                        بازدید سایت
                    </Link>
                    </CommandItem>
                    <CommandItem className="text-red-500 ">خروج از حساب کاربری</CommandItem>
                </CommandGroup>
            </Command>

        </Command>
    )
}

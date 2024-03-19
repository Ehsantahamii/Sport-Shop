import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import AddressesForm from "@/template//AddressesForm";
import EditAddressesForm from "@/template//EditAddressesForm";
import { getFetch } from "@/utils/requests";
import { cookies } from "next/headers";
import { HiMiniPlusCircle } from "react-icons/hi2";
async function page() {

    const accessToken = cookies().get("access_token");
    const { addresses, provinces, cities } = await getFetch("/profile/addresses", { 'Authorization': `Bearer ${accessToken.value}` });
    console.log(addresses, provinces, cities);

    return (
        <div className="w-[85%] m-auto p-5">
            <h1 class="text-4xl">آدرس ها</h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <span className="flex justify-normal items-normal gap-2">
                            <HiMiniPlusCircle />
                            ایجاد آدرس جدید
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <AddressesForm provinces={provinces} cities={cities} />
                        <EditAddressesForm addresses={addresses} provinces={provinces} cities={cities} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default page;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { getFetch } from "@/utils/requests";
import { cookies } from "next/headers";
import moment from 'jalali-moment'


export async function ProfileCard() {
    const accessToken = cookies().get("access_token");
    const user = await getFetch("/profile/info", { 'Authorization': `Bearer ${accessToken.value}` });

    return (
        <div className="flex flex-vr gap-3 items-center">
            <Avatar className="w-28 h-28" >
                <AvatarImage src="/images/user-avatar.jpg" />
                <AvatarFallback>
                    <Skeleton className="w-full h-full" />
                </AvatarFallback>

            </Avatar>
            <h2 className="">{user.name}</h2>
            <h2 className=" text-right">
                {moment().locale('fa').format('DD/MMMM/YYYY')}

            </h2>

        </div>
    );
};


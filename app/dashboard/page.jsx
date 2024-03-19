
import ProfilePage from "@/template//ProfilePage";
import { getFetch } from "@/utils/requests";
import { cookies } from "next/headers";

export default async function page() {
    const accessToken = cookies().get("access_token");
    const user = await getFetch("/profile/info", { 'Authorization': `Bearer ${accessToken.value}` });

    return (
        <div className="w-[85%] m-auto p-5">
            <h1 className="text-4xl">اطلاعات کاربر</h1>
            <ProfilePage user={user} />
        </div>
    );
}


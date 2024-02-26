
import ProfilePage from "@/template//ProfilePage";
import { getFetch } from "@/utils/requests";
import { cookies } from "next/headers";

export default async function page() {
    const accessToken = cookies().get("access_token");
    const user = await getFetch("/profile/info", { 'Authorization': `Bearer ${accessToken.value}` });
    console.log(user);

    return (
        <div className="w-[80dvw] p-5 text-white">
            <h1 className="text-4xl">اطلاعات کاربر</h1>
            <ProfilePage user={user} />
        </div>
    );
}


'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserChange() {
    return (
        <Dialog className="bg-foreground">
            <DialogTrigger asChild>
                <Button variant="outline">ویرایش پروفایل</Button>
            </DialogTrigger>
            <DialogContent className="bg-card-foreground sm:max-w-[425px] text-right">
                <DialogHeader className="">
                    <DialogTitle className="text-white text-right">ویرایش پروفایل</DialogTitle>
                    <DialogDescription className="">
                        پروفایل خود را ویرایش کرده و بر روی دکمه دخیره کلیک کنید.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-white text-right">
                            نام
                        </Label>
                        <Input id="name" value="" className="bg-muted-foreground col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-white text-right text-right">
                            نام کاربری
                        </Label>
                        <Input id="username" value="" className=" bg-muted-foreground col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">ذخیره پروفایل</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

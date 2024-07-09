import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Button } from "../ui/button";
import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { TiMap } from "react-icons/ti";
import { LuClock1 } from "react-icons/lu";

const EventCard: FC = () => {
    return (
        <Card className="px-3 border border-gray">
            <CardHeader>
                <Image src="/image.png" alt="event image" width={318} height={153} className="w-full rounded-lg" />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <CardTitle className="text-xl">Recycle Rally: Transforming Waste into Resources</CardTitle>
                <CardDescription className="text-sm text-black">Join us for "Green Horizons: Community Tree Planting Day," where we unite to plant trees, </CardDescription>
                <div className="flex w-full py-2 justify-between">
                    <Button className="h-[65px] w-[120px]  bg-green200 text-green300 border-green300 flex flex-col "><LuUser2 />16 Participants</Button>
                    <Button className="h-[65px] w-[120px] bg-red200 text-alert border-alert flex flex-col "><TiMap />Casablanca</Button>
                    <Button className="h-[65px] w-[120px] bg-blue200 text-blue300 border-blue300 flex flex-col "><LuClock1 />12/1/2023</Button>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <div className="flex">
                    <Image src="/user.png" alt="avatar" width={40} height={40} className="mr-3" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-sm ">BioScience Club USTHB</h1>
                        <p className="text-xs text-black">Services de conseil en environnement</p>
                    </div>
                </div>
                <FiPlusCircle className="text-4xl text-green300" />
            </CardFooter>
        </Card>
    )
}

export default EventCard;
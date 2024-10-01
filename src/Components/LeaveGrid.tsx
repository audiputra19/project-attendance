import { BadgeInfo } from "lucide-react";
import { FC } from "react";
import { leaveProps, leaveRes } from "../interfaces/leave";

interface LeaveGridProps {
    leaveData: leaveProps | undefined;
}

export const LeaveGrid: FC<LeaveGridProps> = ({ leaveData }) => {

    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-bold dark:text-white">Mass Leave</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.massLeave}</p>
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-bold dark:text-white">Annual Leave</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.annualLeave}</p>
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-bold dark:text-white">Last Leave</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.lastLeave}</p>
                </div>
            </div>
            <div className="p-5 bg-color-base rounded-3xl">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-bold text-white">My Leave</p>
                    <p className="text-sm text-white">Total: {leaveData?.myLeave}</p>
                </div>
            </div>
        </div>
    )
}
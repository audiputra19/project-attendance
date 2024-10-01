import { BadgeInfo } from "lucide-react";
import { FC } from "react";
import { leaveProps, leaveRes } from "../interfaces/leave";

interface LeaveGridProps {
    leaveData: leaveProps | undefined;
    isLoading: boolean;
}

export const LeaveGrid: FC<LeaveGridProps> = ({ leaveData, isLoading }) => {

    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-semibold dark:text-white">Mass Leave</p>
                    {isLoading ? (
                        <div className="w-[100px] h-5 rounded-xl animate-pulse bg-gray-300 mb-2 dark:bg-gray-600"></div>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.massLeave}</p>
                    )}
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-semibold dark:text-white">Annual Leave</p>
                    {isLoading ? (
                        <div className="w-[100px] h-5 rounded-xl animate-pulse bg-gray-300 mb-2 dark:bg-gray-600"></div>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.annualLeave}</p>
                    )}
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-3xl dark:bg-dark-second">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full dark:bg-dark-main dark:text-white">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-semibold dark:text-white">Last Leave</p>
                    {isLoading ? (
                        <div className="w-[100px] h-5 rounded-xl animate-pulse bg-gray-300 mb-2 dark:bg-gray-600"></div>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total: {leaveData?.lastLeave}</p>
                    )}
                </div>
            </div>
            <div className="p-5 bg-color-base rounded-3xl">
                <div>
                    <div className="p-3 bg-white w-fit rounded-full">
                        <BadgeInfo size={20}/>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-1">
                    <p className="font-semibold text-white">My Leave</p>
                    {isLoading ? (
                        <div className="w-[100px] h-5 rounded-xl animate-pulse bg-green-300 mb-2 dark:bg-gray-600"></div>
                    ) : (
                        <p className="text-sm text-white">Total: {leaveData?.myLeave}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
import { ArrowLeft, BadgeInfo } from "lucide-react";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { usePostLeaveMutation } from "../services/apiLeave";
import { useAppSelector } from "../store";

const Leave: FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [leave, {data, isLoading}] = usePostLeaveMutation();
    const userData = useAppSelector(state => state.auth.userInfo);
    const leaveData = data?.data;

    useEffect(() => {
        leave({ nik: userData?.nik });
    }, [leave, userData?.nik]);
    
    return (
        <div className="min-h-screen bg-white dark:bg-dark-main">
            <div className="sticky z-20 top-0 left-0 right-0 bg-white flex justify-between items-center p-5 md:mx-20 lg:mx-48 lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                <div
                    className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft/>
                </div>
                <div className="hidden lg:block">
                    <p className="text-xl font-bold dark:text-white">{t('leave')}
                        <span className="text-color-base pl-1 text-4xl">.</span>
                    </p>
                </div>
                <div></div>
            </div>
            <div className="p-5 sm:mx-12 md:mx-32 lg:mx-80">
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
            </div>
        </div>
    )
}

export default Leave;
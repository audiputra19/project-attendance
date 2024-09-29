import { AlarmClock, ArrowLeft, Bus, ClipboardCheck, ClipboardX, PhoneOutgoing, SquareArrowOutUpRight } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerInput from "../Components/DatePicker";
import Loading from "../Components/Loading";
import { NotFound } from "../Components/NotFound";
import { useAlert } from "../Context/AlertContext";
import { MainReportProps } from "../interfaces/report";
import { useMainReportMutation } from "../services/apiReport";
import { useAppSelector } from "../store";
import { useTranslation } from "react-i18next";

const ReportAttendance: FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const navigate = useNavigate();
    const [postReport, {data, isLoading, isSuccess, error}] = useMainReportMutation();
    const userData = useAppSelector(state => state.auth.userInfo);
    const nik = userData?.nik;
    const [report, setReport] = useState<MainReportProps>();
    const { showAlert } = useAlert();
    const { t } = useTranslation();

    const handleSubmit = () => {
        if(startDate && endDate) {
            postReport({startDate, endDate, nik});
        } else {
            showAlert('Periode harus diisi');
        }
    }

    useEffect(() => {
        if(isSuccess && data) {
            setReport(data.data);
        } else if (error){
            const message = (error as any)?.data?.message;
            showAlert(message);
        }
    }, [isSuccess, data, error, showAlert]);

    return (
        isLoading ? (
            <Loading/>
        ) : (
            <div className="min-h-screen bg-white dark:bg-dark-main">
                <div className="sticky z-20 top-0 left-0 right-0 bg-white flex justify-between items-center p-5 md:mx-20 lg:mx-48 lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                    <div
                        className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft/>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-xl font-bold dark:text-white">{t('report')}
                            <span className="text-color-base pl-1 text-4xl">.</span>
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="p-5 sm:mx-10 md:mx-32 lg:mx-80">
                    <div className="flex justify-center gap-3 w-full">
                        <DatePickerInput selectedDate={startDate} onDateChange={setStartDate}/>
                        <DatePickerInput selectedDate={endDate} onDateChange={setEndDate}/>
                    </div>
                    <div className="mt-5">
                        <button 
                            type="submit"
                            className="w-full px-5 py-4 bg-color-base text-white rounded-xl font-bold hover:bg-color-baseHover"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="mt-10">
                        <p className="font-bold text-xl dark:text-white">{t('myReport')}</p>
                    </div> 

                    {!data ? (
                        <NotFound/>
                    ) : ( 
                        <div className="mt-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <ClipboardCheck className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">{t('present')}</p>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                        <p className="font-bold text-2xl text-color-base">{report?.hadir}</p>
                                        <div className="cursor-pointer">
                                            <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <ClipboardX className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">Alpa</p>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                        <p className="font-bold text-2xl text-color-base">{report?.alpa}</p>
                                        <div className="cursor-pointer">
                                            <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <AlarmClock className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">{t('late')}</p>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                        <p className="font-bold text-2xl text-color-base">{report?.telat}</p>
                                        <div className="cursor-pointer">
                                            <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <PhoneOutgoing className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">{t('permit')}</p>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                        <p className="font-bold text-2xl text-color-base">{report?.izin}</p>
                                        <div className="cursor-pointer">
                                            <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <Bus className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">{t('leave')}</p>
                                    </div>
                                    <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                        <p className="font-bold text-2xl text-color-base">{report?.cuti}</p>
                                        <div className="cursor-pointer">
                                            <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    )
}

export default ReportAttendance;
import { FC, useState } from "react";
import DatePickerInput from "../Components/DatePicker";
import { AlarmClock, ArrowLeft, Bus, ClipboardCheck, ClipboardX, Hand, PhoneOutgoing, SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportAttendance: FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedDate2, setSelectedDate2] = useState<Date | null>(null);
    const navigate = useNavigate();

    return (
        <div>
            <div className="sticky z-20 top-0 left-0 right-0 bg-white flex justify-between items-center p-5 md:mx-20 lg:mx-48 lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                <div
                    className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft/>
                </div>
                <div className="hidden lg:block">
                    <p className="text-xl font-bold dark:text-white">Report
                        <span className="text-color-base pl-1 text-4xl">.</span>
                    </p>
                </div>
                <div></div>
            </div>
            <div className="p-5 sm:mx-10 md:mx-32 lg:mx-80">
                <div className="flex justify-center gap-3 w-full">
                    <DatePickerInput selectedDate={selectedDate} onDateChange={setSelectedDate}/>
                    <DatePickerInput selectedDate={selectedDate2} onDateChange={setSelectedDate2}/>
                </div>
                <div className="mt-5">
                    <button 
                        type="submit"
                        className="w-full px-5 py-4 bg-color-base text-white rounded-xl font-bold hover:bg-color-baseHover"
                    >
                        Submit
                    </button>
                </div>
                <div className="mt-10">
                    <p className="font-bold text-xl dark:text-white">My Report</p>
                </div> 
                <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                    <ClipboardCheck className="text-blue-500 dark:text-white"/>
                                </div>
                                <p className="font-bold text-sm md:text-base dark:text-white">Hadir</p>
                            </div>
                            <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                <p className="font-bold text-2xl text-color-base">14</p>
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
                                <p className="font-bold text-2xl text-color-base">14</p>
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
                                <p className="font-bold text-sm md:text-base dark:text-white">Telat</p>
                            </div>
                            <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                <p className="font-bold text-2xl text-color-base">14</p>
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
                                <p className="font-bold text-sm md:text-base dark:text-white">Izin</p>
                            </div>
                            <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                <p className="font-bold text-2xl text-color-base">14</p>
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
                                <p className="font-bold text-sm md:text-base dark:text-white">Cuti</p>
                            </div>
                            <div className="mt-3 flex justify-between items-center bottom-0 left-0 right-0">
                                <p className="font-bold text-2xl text-color-base">14</p>
                                <div className="cursor-pointer">
                                    <SquareArrowOutUpRight className="text-gray-500" size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportAttendance;
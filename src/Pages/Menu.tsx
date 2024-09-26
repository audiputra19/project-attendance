import { Banknote, Bus, ChevronRight, FileText, House, UserCheck } from "lucide-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Menu: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen py-5 px-5 sm:px-12 md:px-32 lg:px-80 flex flex-col gap-5 bg-white dark:bg-dark-main">
            <div className="p-5 flex justify-between items-center gap-5 bg-gray-100 rounded-2xl dark:bg-dark-second">
                <div>
                    <p className="text-lg text-black font-bold dark:text-white">Muhammad Audi Putra</p>
                    <p className="text-sm text-gray-400 font-semibold">audiputra19@gmail.com</p>
                </div>
                <div className="text-gray-400 dark:text-white">
                    <ChevronRight size={28}/>
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-2xl flex flex-col gap-5 dark:bg-dark-second dark:text-white">
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <House/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">Home Page</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer" onClick={() => navigate('/attendance')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <UserCheck/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">Absensi</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer" onClick={() => navigate('/salary')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Banknote/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">Gaji</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Bus/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">Cuti</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer" onClick={() => navigate('/report')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <FileText/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">Report</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
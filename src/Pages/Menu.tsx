import { Banknote, Bus, ChevronRight, Eclipse, FileText, Globe, House, UserCheck } from "lucide-react";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePostProfileMutation } from "../services/apiProfile";
import { useAppSelector } from "../store";
import ToggleSwitch from "../Components/ToggleSwitch";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const Menu: FC = () => {
    const navigate = useNavigate();
    const [profile, {data: profileData, isLoading}] = usePostProfileMutation();
    const nameParts = profileData?.data?.nama?.split(" ");
    const username = nameParts?.slice(0, 2).join(' ');
    const userData = useAppSelector(state => state.auth.userInfo)
    const {isDarkMode, toggleTheme} = useTheme();
    const { t } = useTranslation();

    useEffect(() => {
        profile({nik: userData?.nik})
    }, [profile, userData?.nik]);

    return (
        <div className="w-full min-h-screen py-5 px-5 sm:px-12 md:px-32 lg:px-80 flex flex-col gap-5 bg-white dark:bg-dark-main">
            <div className="p-5 flex justify-between items-center gap-5 bg-gray-100 rounded-2xl cursor-pointer dark:bg-dark-second" onClick={() => navigate('/menu')}>
                {isLoading ? (
                    <div className="flex flex-col gap-2">
                        <div className="w-[180px] h-5 bg-gray-300 animate-pulse rounded-xl dark:bg-gray-600"></div>
                        <div className="w-[200px] h-5 bg-gray-300 animate-pulse rounded-xl dark:bg-gray-600"></div>
                    </div>
                ) : (
                    <div>
                        <p className="text-lg text-black font-bold dark:text-white">{username}</p>
                        <p className="text-sm text-gray-400 font-semibold">{profileData?.data.email}</p>
                    </div>
                )}
                <div className="text-gray-400">
                    <ChevronRight size={28}/>
                </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-2xl flex flex-col gap-3 dark:bg-dark-second dark:text-white">
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => navigate('/')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <House/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('homePage')}</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => navigate('/attendance')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <UserCheck/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('attendance')}</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => navigate('/salary')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Banknote/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('salary')}</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => navigate('/')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Bus/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('leave')}</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => navigate('/report')}>
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <FileText/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('report')}</p>
                        <div className="text-gray-400">
                            <ChevronRight size={28}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-2xl flex flex-col gap-3 dark:bg-dark-second dark:text-white">
                <div 
                    className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => navigate('/lang')}
                >
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Globe/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('language')}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-gray-500 dark:text-gray-400">{t('title')}</p>
                            <div className="text-gray-400">
                                <ChevronRight size={28}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-4 items-center cursor-pointer p-2 rounded-2xl">
                    <div className="flex justify-center text-gray-600 dark:text-white">
                        <Eclipse/>
                    </div>
                    <div className="col-start-2 col-span-6 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-12 flex justify-between items-center">
                        <p className="font-semibold">{t('darkMode')}</p>
                        <ToggleSwitch isChecked={isDarkMode} onTonggle={toggleTheme} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
import { FC, useEffect, useState } from "react";
import Attendance from "./Attendance";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { clearToken } from "../store/authSlice";
import Alert from "../Components/Alert";
import { useTheme } from "../Context/ThemeContext";
import { Banknote, Bus, Download, Eye, EyeOff, FileText, Info, LogOut, Menu, Moon, Sun, User, UserCheck, WalletMinimal } from "lucide-react";
import { useModal } from "../Context/ModalContext";
import moment from "moment";
import { usePostSalaryMutation } from "../services/apiSalary";
import { usePostProfileMutation } from "../services/apiProfile";

const Home: FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [salaryVisible, setSalaryVisible] = useState(false);
    const [salary, {data: salaryData, isLoading}] = usePostSalaryMutation();
    const [profile, {data: profileData}] = usePostProfileMutation();
    const dispatch = useAppDispatch();
    const { openModal } = useModal();
    const navigate = useNavigate();
    const month = moment().format("MM");
    const year = moment().format("YYYY");
    const dataUser = useAppSelector(state => state.auth.userInfo);
    const pdfUrl = `https://sukabumi.karixa.co.id/skn/audi/dataku-v2/gaji_new_pdf.php?nik=${dataUser?.nik}|${dataUser?.pass}|${month}-${year}`;

    const nameParts = profileData?.data?.nama?.split(" ");
    const username = nameParts?.slice(0, 2).join(' ');

    useEffect(() => {
        salary({
            nik: dataUser?.nik,
            month,
            year
        })

        profile({
            nik: dataUser?.nik,
        })
    }, [salary, profile])

    // console.log(profileData)
    
    const tonggleSalaryVisible = () => {
        setSalaryVisible(!salaryVisible);
    }

    const handleLogout = () => {
        openModal('Are you sure you want to logout?', 'Logout', () => {
            dispatch(clearToken());
        })
    }

    const handlePdfViewer = () => {
        navigate('pdf-viewer', {state: {pdfUrl}});
    }

    // const profile = require(`../Assets/Images/profile.jpg`);

    return (
        <div>
            <div className="sticky top-0 left-0 right-0 bg-white p-5 md:mx-20 lg:mx-48 flex justify-between items-center lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                <div className="flex gap-3">
                    <div>
                        <div>
                            {isLoading ? (
                                <div className="w-[200px] h-5 rounded-xl animate-pulse bg-gray-100 mb-2"></div>
                            ) : (
                                <p className="font-bold text-xl dark:text-white">{username}</p>
                            )}
                            <p className="font-bold text-gray-400 text-sm">Welcome Back</p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between md:gap-3">
                    <div 
                        onClick={toggleTheme}
                        className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                    >
                        {isDarkMode 
                        ? ( <Sun/> ) 
                        : ( <Moon/> )}
                    </div>
                    <div className="hidden md:block bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second">
                        <Menu/>
                    </div>
                </div>
            </div>
            <div className="p-5 sm:mx-12 md:mx-32 lg:mx-80">
                <div className="relative mt-10">
                    <div className="bg-[url('https://wallpapercave.com/wp/wp9587304.jpg')] absolute inset-0 bg-cover bg-center w-full p-5 rounded-2xl"></div>
                    <div className="bg-black/20 absolute inset-0 rounded-2xl"></div>
                    <div className="relative p-5 z-10">
                        <div className="flex items-center gap-2 text-white">
                            <WalletMinimal />
                            <p className="text-sm">Your Salary</p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <p 
                                className="text-2xl font-bold text-white"
                            >Rp {salaryVisible ? salaryData?.salary.toLocaleString("id-ID") ?? '-' : '-'}</p>
                            <div onClick={tonggleSalaryVisible}>
                                {salaryVisible 
                                ? <EyeOff className="text-white cursor-pointer"/> 
                                : <Eye className="text-white cursor-pointer"/>}
                            </div>
                        </div>
                        <div className="flex items-center mt-5 gap-3">
                            <button
                                className="bg-black opacity-80 text-white py-3 px-4 rounded-xl cursor-pointer hover:opacity-70"
                                onClick={() => navigate('/salary')}
                            >
                                Check Detail
                            </button>
                            <div 
                                className="bg-black opacity-80 text-white p-3 rounded-xl cursor-pointer hover:opacity-70"
                                onClick={handlePdfViewer}
                            >
                                <Download/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="bg-gray-100 w-full p-5 rounded-2xl dark:bg-dark-second">
                        <div>
                            <p className="font-bold text-lg text-gray-500 dark:text-white">Services</p>
                        </div>
                        <div className="mt-3 grid place-items-center grid-cols-4 md:grid-cols-6 gap-5">
                            <div className="flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                    onClick={() => navigate('/attendance')}
                                >
                                    <UserCheck/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Absensi</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                    onClick={() => navigate('/salary')}
                                >
                                    <Banknote/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Gaji</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                    onClick={() => navigate('/salary')}
                                >
                                    <Bus/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Cuti</p>
                            </div>
                            <div className="hidden md:block md:flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                    onClick={() => navigate('/cuti')}
                                >
                                    <FileText/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Report</p>
                            </div>
                            <div className="hidden md:block md:flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                >
                                    <User/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Profile</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                >
                                    <Info/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">About</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 w-fit">
                                <div 
                                    className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                                    onClick={handleLogout} 
                                >
                                    <LogOut/>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-white">Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Alert />
        </div>
    )
}

export default Home;
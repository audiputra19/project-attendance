import axios from "axios";
import { FC, FormEvent, useEffect, useState } from "react";
import { usePostAttendanceMutation, useTimeAttendanceMutation } from "../services/apiAttendance";
import { useAppSelector } from "../store";
import { useAlert } from "../Context/AlertContext";
import Alert from "../Components/Alert";
import { ArrowLeft, Clock1, Clock12, Clock3, Clock5, Clock7 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveClock from "../Components/LiveClock";
import Loading from "../Components/Loading";
import { TimeAttendanceProps } from "../interfaces/attendance";

const Attendance: FC = () => {
    const [postAttendance, {isLoading}] = usePostAttendanceMutation();
    const [postTimeAttendance, {data, isSuccess, error}] = useTimeAttendanceMutation();
    const [time, setTime] = useState<TimeAttendanceProps>();
    const { showAlert } = useAlert();
    const navigate = useNavigate();
    const userData = useAppSelector(state => state.auth.userInfo);
    const nik = userData?.nik;

    useEffect(() => {
        if(nik){
            postTimeAttendance({nik});
        }
    }, [nik])

    useEffect(() => {
        if(isSuccess && data){
            setTime(data.data);
        }
    }, [isSuccess, data]);

    const formatTime = (timeSring: string): string => {
        return timeSring.split(':').join(' : ');
    }

    const handleAttendance = () => {

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( 
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const data = await postAttendance({ latitude, longitude, nik }).unwrap();
                        showAlert(data.message);
                        
                        if (nik) {
                            postTimeAttendance({ nik });
                        }

                    } catch (error: any) {
                        const message = error?.data?.message || 'Gagal melakukan absensi';
                        showAlert(message);
                    }
                },
                (error) => {
                    console.error('Error mendapatkan lokasi:', error);
                    showAlert('Tidak mendapatkan lokasi.');
                },{
                    enableHighAccuracy: true,
                });
        } else {
            showAlert('Geolokasi tidak didukung oleh browser ini.');
        }
    }

    return (
        <div className="min-h-screen dark:bg-dark-main">
            {isLoading ? (
                <Loading/>
            ) : (
                <div>
                    <div className="sticky top-0 left-0 right-0 bg-white flex justify-between items-center p-5 md:mx-20 lg:mx-48 lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                        <div
                            className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft/>
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-xl font-bold dark:text-white">Attendance
                                <span className="text-color-base pl-1 text-4xl">.</span>
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="p-5 sm:mx-10 md:mx-32 lg:mx-80">
                        <LiveClock/>
                        <div className="mt-10">
                            <p className="font-bold text-xl dark:text-white">Today Attendance</p>
                        </div> 
                        <div className="mt-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <Clock7 className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">Masuk</p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-bold text-xl text-color-base">{time && time.masuk !== '00:00:00' ? formatTime(time.masuk) : '-'}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className={`font-bold text-sm ${ time?.telat === 0 ? 'text-gray-400' : 'text-red-500'}`}>
                                            {time?.telat === 0 ? 'On Time' : 'Late'}
                                            
                                            {time && time.alpa > 0 
                                            ? <span className="bg-red-100 text-red-500 text-xs py-1 px-2 rounded-xl ml-2">Alpa</span>
                                            : null
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <Clock12 className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">Istirahat</p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-bold text-xl text-color-base">{time && time.istKeluar !== '00:00:00' ? formatTime(time.istKeluar) : '-'}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="font-bold text-sm text-gray-400">Half Hours</p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <Clock1 className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">Ist. Masuk</p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-bold text-xl text-color-base">{time && time.istMasuk !== '00:00:00' ? formatTime(time.istMasuk) : '-'}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className={`font-bold text-sm ${ time?.telatIst === 0 ? 'text-gray-400' : 'text-red-500'}`}>
                                            {time?.telatIst === 0 ? 'Half Hours' : 'Late'}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-5 rounded-xl dark:bg-dark-second">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-3 rounded-xl dark:bg-blue-500">
                                            <Clock5 className="text-blue-500 dark:text-white"/>
                                        </div>
                                        <p className="font-bold text-sm md:text-base dark:text-white">Keluar</p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-bold text-xl text-color-base">{time && time.keluar !== '00:00:00' ? formatTime(time.keluar) : '-'}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="font-bold text-sm text-gray-400">Go Home</p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="p-5 sm:mx-10 md:mx-32 lg:mx-80">
                        <button
                            type="button"
                            className="w-full bg-color-base p-4 rounded-xl text-white font-bold"
                            onClick={handleAttendance}
                        >
                            Check In
                        </button>
                    </div>
                </div>
            )}
            <Alert />
        </div>
    )
}

export default Attendance;
import { ArrowLeft, Eye, EyeOff, WalletMinimal } from "lucide-react";
import { FC, useState } from "react"
import { useNavigate } from "react-router-dom";
import bgSalary from '../Assets/Images/bg-salary.jpg';
import DatePickerInput from "../Components/DatePicker";
import YearMonthPicker from "../Components/YearMonthPicker";

const Salary: FC = () => {
    const navigate = useNavigate();
    const [salaryVisible, setSalaryVisible] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedDate, setSelectedDate] = useState<{ year: number; month: number }>({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
    });

    const handleDateChange = (year: number, month: number) => {
        setSelectedDate({ year, month });
    };

    const tonggleSalaryVisible = () => {
        setSalaryVisible(!salaryVisible);
    }

    return (
        <div className="min-h-screen dark:bg-dark-main">
            <div className="sticky z-20 top-0 left-0 right-0 bg-white flex justify-between items-center p-5 md:mx-20 lg:mx-48 lg:border-b-2 lg:border-gray-200 dark:border-dark-second dark:bg-dark-main">
                <div
                    className="bg-gray-100 p-3 rounded-xl cursor-pointer dark:text-white dark:bg-dark-second"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft/>
                </div>
                <div className="hidden lg:block">
                    <p className="text-xl font-bold dark:text-white">Salary
                        <span className="text-color-base pl-1 text-4xl">.</span>
                    </p>
                </div>
                <div></div>
            </div>
            <div className="p-5 sm:mx-12 md:mx-32 lg:mx-80">
                <YearMonthPicker onDateChange={handleDateChange}/>
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
                <div className="relative mt-5">
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
                            >Rp {salaryVisible ? '1.000.000' : '-'}</p>
                            <div onClick={tonggleSalaryVisible}>
                                {salaryVisible 
                                ? <EyeOff className="text-white cursor-pointer"/> 
                                : <Eye className="text-white cursor-pointer"/>}
                            </div>
                        </div>
                        <div className="flex items-center mt-5 gap-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Salary;
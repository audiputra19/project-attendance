import { CalendarDays, User } from "lucide-react";
import { FC } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}
const DatePickerInput: FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
    return (
        <div>
            <div className="">
                <div className="absolute z-10 text-gray-500 p-4 dark:text-white">
                    <CalendarDays/>
                </div>
                <DatePicker
                    selected={selectedDate}
                    onChange={onDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="w-full pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                    placeholderText="Select a date"
                    popperPlacement="bottom-start"
                />
            </div>
        </div>
    )
}

export default DatePickerInput;
import { CalendarDays } from 'lucide-react';
import { FC } from 'react';
import DatePicker from "react-datepicker";
import { useDateContext } from '../Context/DateContext';

const YearMonthPicker: FC = () => {
  const {selectedDate, setSelectedDate} = useDateContext();

  const handleChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return (
    <div>
        <div className="">
            <div className="absolute z-10 text-gray-500 p-4 dark:text-white">
                <CalendarDays/>
            </div>
            <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="MM/yyyy"
                className="w-full pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                placeholderText="Select a year and month"
                popperPlacement="bottom-start"
                showMonthYearPicker
            />
        </div>
    </div>
  )
};

export default YearMonthPicker;

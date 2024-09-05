import React, { useState, useEffect } from 'react';

interface DatePickerProps {
  onDateChange: (year: number, month: number) => void;
}

const YearMonthPicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

  useEffect(() => {
    // Panggil callback setiap kali tahun atau bulan berubah
    onDateChange(year, month);
  }, []);

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  const getMonths = () => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <div className='flex gap-3'>
        <select 
            value={year} 
            onChange={handleYearChange}
            className="w-full pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
        >
            {getYears().map((year) => (
                <option key={year} value={year}>
                {year}
                </option>
            ))}
        </select>

        <select 
            value={month} 
            onChange={handleMonthChange}
            className="w-full pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
        >
            {getMonths().map((month) => (
            <option key={month} value={month}>
                {month.toString().padStart(2, '0')}
            </option>
            ))}
        </select>
    </div>
  );
};

export default YearMonthPicker;

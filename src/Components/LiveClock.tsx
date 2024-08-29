import moment from "moment";
import React, { useState, useEffect } from "react";

const LiveClock: React.FC = () => {
    const [time, setTime] = useState({
        hours: moment().format("HH"),
        minutes: moment().format("mm"),
        seconds: moment().format("ss"),
    });
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime({
                hours: moment().format("HH"),
                minutes: moment().format("mm"),
                seconds: moment().format("ss"),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex w-full justify-center gap-5">
            <div className="flex justify-center items-center bg-gray-100 w-20 h-20 text-2xl font-bold rounded-2xl dark:bg-dark-second">
                <div className="flex flex-col items-center gap-1 dark:text-color-base">
                    {time.hours}
                    <p className="text-xs">Hours</p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100 w-20 h-20 text-2xl font-bold rounded-2xl dark:bg-dark-second">
                <div className="flex flex-col items-center gap-1 dark:text-color-base">
                    {time.minutes}
                    <p className="text-xs">Minutes</p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100 w-20 h-20 text-2xl font-bold rounded-2xl dark:bg-dark-second">
                <div className="flex flex-col items-center gap-1 dark:text-color-base">
                    {time.seconds}
                    <p className="text-xs">Second</p>
                </div>
            </div>
        </div>
    );
};

export default LiveClock;

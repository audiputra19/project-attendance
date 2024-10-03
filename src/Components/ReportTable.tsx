import moment from "moment-timezone";
import { FC } from "react";
import { ListReportRes } from "../interfaces/report";

interface ReportTableProps {
    reportData: ListReportRes[] | undefined;
}

export const ReportTable: FC<ReportTableProps> = ({ reportData }) => {

    return (
        <div className="w-full border border-gray-200 rounded-xl dark:bg-dark-main dark:text-white dark:border-dark-second">
            <div className="overflow-x-auto rounded-xl">
                <table className="table">
                    <thead className="bg-gray-50 dark:bg-dark-second">
                        <tr className="text-sm text-gray-700 border-gray-200 font-semibold dark:text-white dark:border-dark-second">
                            <td><center>No</center></td>
                            <td><center>Tanggal</center></td>
                            <td><center>Hadir</center></td>
                            <td><center>Alpa</center></td>
                            <td><center>Telat</center></td>
                            <td><center>Izin</center></td>
                            <td><center>Cuti</center></td>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData?.map((data: ListReportRes, i: number) => {
                            const date = moment(data.tanggal).tz('Asia/Jakarta').format('DD-MM-YYYY');
                            return (
                                <tr 
                                    key={i}
                                    className="text-xs border-gray-200 text-black hover:bg-gray-50 dark:border-dark-second dark:hover:bg-dark-second dark:text-white"
                                >
                                    <td><center>{i + 1}</center></td>
                                    <td className="w-28"><center>{date}</center></td>
                                    <td><center>{data.hadir}</center></td>
                                    <td><center>{data.alpa}</center></td>
                                    <td><center>{data.telat}</center></td>
                                    <td><center>{data.izin}</center></td>
                                    <td><center>{data.cuti}</center></td>
                                </tr>                            
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
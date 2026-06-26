import { FC } from "react";
import { leaveProps, reportLeaveProps } from "../interfaces/leave";
import moment from "moment-timezone";

interface LeaveTableProps {
    leaveData: reportLeaveProps[] | undefined;
    isLoading: boolean;
}

export const LeaveTable: FC<LeaveTableProps> = ({ leaveData, isLoading }) => {
    return (
        <div className="w-full border border-gray-200 rounded-xl dark:bg-dark-main dark:text-white dark:border-dark-second">
            <div className="overflow-x-auto rounded-xl max-h-[400px] scrollbar-hidden">
                <table className="table w-full text-left border-collapse">
                    <thead className="bg-gray-50 sticky top-0 dark:bg-dark-second z-10">
                        <tr className="text-sm text-gray-700 border-b border-gray-200 font-semibold dark:text-white dark:border-dark-second text-center">
                            <td className="py-2.5">No</td>
                            <td className="py-2.5">Tanggal</td>
                            <td className="py-2.5">Kategori</td>
                            <td className="py-2.5">Jumlah</td>
                            <td className="py-2.5">Sisa</td>
                            <td className="py-2.5">Keterangan</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">Loading data...</td>
                            </tr>
                        ) : leaveData && leaveData.length > 0 ? (
                            leaveData.map((data: reportLeaveProps, i: number) => {
                                const date = moment(data.tanggal).tz('Asia/Jakarta').format('DD-MM-YYYY');

                                let badgeComponent;
                                if (data.tipe === "Cuti Pribadi") {
                                    badgeComponent = <span className="px-2 py-1 text-xs font-semibold rounded bg-red-500 text-white">Cuti (-)</span>;
                                } else {
                                    badgeComponent = data.nilai >= 0 
                                        ? <span className="px-2 py-1 text-xs font-semibold rounded bg-green-500 text-white">Adjust (+)</span>
                                        : <span className="px-2 py-1 text-xs font-semibold rounded bg-amber-500 text-gray-900">Adjust (-)</span>;
                                }

                                // 2. Logika Warna Nilai / Jumlah
                                const warnaNilai = data.nilai >= 0 ? "text-green-600 font-bold" : "text-red-600 font-bold";
                                const nilaiFmt = data.tipe === "Adjustment" && data.nilai >= 0 ? `+${data.nilai} Hari` : `${data.nilai} Hari`;

                                return (
                                    <tr 
                                        key={i}
                                        className="text-xs border-b border-gray-200 text-black hover:bg-gray-50 dark:border-dark-second dark:hover:bg-dark-second dark:text-white align-middle text-center"
                                    >
                                        <td className="py-2.5">{i + 1}</td>
                                        <td className="min-w-[120px] py-2.5">{date}</td>
                                        <td className="min-w-[150px] py-2.5">
                                            <div className="flex flex-col items-center gap-1">
                                                {badgeComponent}
                                                {data.memotong_lalu && (
                                                    <span className="px-2 py-1 text-[10px] rounded bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-900">
                                                        Memotong Cuti Tahun Lalu
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className={`py-2.5 ${warnaNilai}`}>{nilaiFmt}</td>
                                        <td className="min-w-[100px] py-2.5 font-semibold text-gray-900 dark:text-gray-100">{data.saldo_berjalan} Hari</td>
                                        <td className="min-w-[150px] text-left px-3 py-2.5 text-gray-600 dark:text-gray-300">{data.keterangan || "-"}</td>
                                    </tr>                            
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500 dark:text-gray-400">
                                    Belum ada aktivitas cuti atau adjustment di tahun ini.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
// export interface leaveProps {
//     massLeave: number;
//     annualLeave: number;
//     lastLeave: number;
//     myLeave: number;
// }
export interface leaveProps {
    nik: number;
    tahun: number;
    sisa_murni_tahun_lalu: number;
    sisa_tahun_lalu_aktif: number;
    sisa_tahun_ini: number;
    total_sisa_cuti: number;
    jatah_reguler_tahun_ini: number;
    nilai_adjustment: number;
    cuti_bersama: number;
}

export interface leaveRes {
    data: leaveProps;
}

export interface leaveReq {
    nik: number | undefined;
}

export interface reportLeaveProps {
    tanggal: string;
    tipe: "Cuti Pribadi" | "Adjustment";
    nilai: number;
    saldo_berjalan: number;
    memotong_lalu: boolean;
    keterangan: string;
}

export interface reportLeaveRes {
    data: reportLeaveProps[];
}
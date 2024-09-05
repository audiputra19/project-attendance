export interface MainReportReq {
    nik: number | undefined;
    startDate: Date;
    endDate: Date;
}

export interface MainReportProps {
    hadir: number;
    alpa: number;
    telat: number;
    izin: number;
    cuti: number;
}

export interface MainReportRes {
    data: MainReportProps;
}
export interface leaveProps {
    massLeave: number;
    annualLeave: number;
    lastLeave: number;
    myLeave: number;
}

export interface leaveRes {
    data: leaveProps;
}

export interface leaveReq {
    nik: number | undefined;
}

export interface reportLeaveProps {
    tanggal: string;
    keterangan: string;
    sisa: number;
}

export interface reportLeave {
    data: reportLeaveProps;
}
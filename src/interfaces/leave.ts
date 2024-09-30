export interface leaveRes {
    massLeave: number;
    annualLeave: number;
    lastLeave: number;
    myLeave: number;
}

export interface leaveReq {
    nik: number | undefined;
}
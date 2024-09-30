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
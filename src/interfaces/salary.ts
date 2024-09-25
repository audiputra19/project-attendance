export interface SalaryRes {
    salary: number;
}

export interface SalaryReq {
    nik: number | undefined;
    month: number;
    year: number;
}
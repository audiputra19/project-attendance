import { FC } from "react";
import { leaveProps } from "../interfaces/leave";

interface LeaveTableProps {
    leaveData: leaveProps | undefined;
}

export const LeaveTable: FC<LeaveTableProps> = ({ leaveData }) => {
    return (
        <div>Leave</div>
    )
}
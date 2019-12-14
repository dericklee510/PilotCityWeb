type weekday = 'M' |'T' |'W'|'Th'|'F'|'Sa'|'Su'
export interface IBellSchedule{
    period: string[];
    // courses: string;
    weeklySchedule: weekday[];
    startTime: string;
    endTime: string;
}

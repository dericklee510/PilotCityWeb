type weekday = "M" |"T" |"W"|"Th"|"F"|"Sa"|"Su"
export interface IBellSchedule{
    period:string[],
    course:string
    weeklySchedule: weekday[]
    startTime:string
    endTime:string
}
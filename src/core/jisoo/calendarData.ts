import { calendarDatatTypes } from "../../type/jisoo/calendarDataTypes";

export const CAELENDAR_DATA: calendarDatatTypes[] = [
  { id: 1, student: "은빈", times: [{ dateId: 1, dates: "2023-07-20", time: "09:00~10:00" }], color: "#FFC81E" },
  { id: 2, student: "혜인", times: [{ dateId: 2, dates: "2023-07-21", time: "10:00~11:00" }], color: "#EB0000" },
  { id: 3, student: "성경", times: [{ dateId: 3, dates: "2023-07-06", time: "09:00~10:00" }], color: "#FFB6C1" },
  {
    id: 4,
    student: "희정",
    times: [
      { dateId: 4, dates: "2023-07-06", time: "19:00~20:00" },
      { dateId: 5, dates: "2023-07-16", time: "18:00~19:00" },
    ],
    color: "#7B68EE",
  },
  {
    id: 5,
    student: "지수",
    times: [
      { dateId: 6, dates: "2023-07-06", time: "13:00~14:00" },
      { dateId: 7, dates: "2023-07-13", time: "13:00~14:00" },
      { dateId: 8, dates: "2023-07-20", time: "13:00~14:00" },
      { dateId: 9, dates: "2023-07-27", time: "13:00~14:00" },
    ],
    color: "#5F9EA0",
  },
];

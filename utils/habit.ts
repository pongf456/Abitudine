import { DaysOfWeek } from "@/types/enums";
import { Habit } from "@/types/interfaces";
import _ from "lodash";
import moment from "moment";
export class HabitUtils {
  static getStatus(
    startDate: Habit["startDate"],
    endDate: Habit["endDate"],
  ): string {
    const now = moment();
    const startMoment = moment(startDate, "hh:mm A");
    const endMoment = moment(endDate, "hh:mm A");
    if (moment.duration(startMoment.diff(now)).asMilliseconds() >= 0) {
      const diff = moment.duration(startMoment.diff(now));
      const hours = diff.hours();
      const minutes = diff.minutes();
      return `${hours} hora${minutes === 1 ? "" : "s"} y ${minutes} minuto${minutes === 1 ? "" : "s"}`;
    } else if (moment.duration(endMoment.diff(now)).asMilliseconds() >= 0) {
      return "En proceso";
    } else return "Ya pasó";
  }
  static includesTheseDays(
    executionDays: Habit["executionDays"],
    days: Habit["executionDays"],
  ): boolean {
    return _.intersection(executionDays, days).length > 0;
  }
  static includesTheseTraits(
    traits: Habit["identity"],
    identity: Habit["identity"],
  ): boolean {
    return _.intersection(identity, traits).length > 0;
  }
  static countHabitsByDay(habits: Habit[]): Record<DaysOfWeek, number> {
    const counts: Record<DaysOfWeek, number> = {
      [DaysOfWeek.Monday]: 0,
      [DaysOfWeek.Tuesday]: 0,
      [DaysOfWeek.Wednesday]: 0,
      [DaysOfWeek.Thursday]: 0,
      [DaysOfWeek.Friday]: 0,
      [DaysOfWeek.Saturday]: 0,
      [DaysOfWeek.Sunday]: 0,
    };

    habits.forEach((habit) => {
      habit.executionDays.forEach((day) => {
        counts[day]++;
      });
    });

    return counts;
  }
}

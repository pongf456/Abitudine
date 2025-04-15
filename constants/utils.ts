import * as Notifications from "expo-notifications";
import { Habit } from "@/types/interfaces";
import moment from "moment";
export const generateColor = () => {
  const CHHAPOLA = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${CHHAPOLA}`;
};
export const difficultyTranslations = {
  Easy: "Fácil",
  Medium: "Normal",
  Hard: "Difícil",
  VeryHard: "Muy Difícil",
};
export function assignHabitNotification(habit: Habit): Promise<string> {
  // Obtener la hora actual usando Moment.js
  const now = moment();
  const habitStartMoment = moment(habit.startDate, "hh:mm A");

  // Si la hora ya pasó hoy, programa para mañana
  if (habitStartMoment.isBefore(now)) {
    habitStartMoment.add(1, "days");
  }
  const result = Notifications.scheduleNotificationAsync({
    identifier: habit.startedDate,
    content: {
      title: habit.name,
      body: `¡Es hora de tu hábito! ${habit.description}`,
      data: {
        url: `/habits/${habit.startedDate}`,
      },
    },
    trigger: {
      date: habitStartMoment.toDate(), // Convertir a Date de JavaScript
      type: Notifications.SchedulableTriggerInputTypes.DATE,
    },
  });
  return result;
}
export function deleteHabitNotification(
  identifier: Habit["startedDate"],
): Promise<void> {
  return Notifications.cancelScheduledNotificationAsync(identifier);
}

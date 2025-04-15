import { Habit } from "@/types/interfaces";
import _ from "lodash";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { deleteHabitNotification } from "@/constants/utils";
interface Store {
  _habits: Habit[];
  push(item: Habit): void;
  del(key: Habit["startedDate"]): void;
  upd(key: Habit["startedDate"], data: Omit<Habit, "startedDate">): void;
}
const useHabitsStore = create(
  persist<Store>(
    (set, get) => ({
      _habits: [],
      del(key) {
        deleteHabitNotification(key);
        set((state) => ({
          _habits: state._habits.filter((habit) => habit.startedDate !== key),
        }));
      },
      push(item) {
        const overlappingHabits = _.filter(get()._habits, (oldItem) => {
          if (
            _.intersection(oldItem.executionDays, item.executionDays).length ===
            0
          )
            return false;
          //Iniciar instancias de moment
          const newStartMoment = moment(item.startDate, "hh:mm A");
          const newEndMoment = moment(item.endDate, "hh:mm A");
          const oldStartMoment = moment(oldItem.startDate, "hh:mm A");
          const oldEndMoment = moment(oldItem.endDate, "hh:mm A");
          // convertir a minutos totales
          const newStartMinutes =
            newStartMoment.hours() * 60 + newStartMoment.minutes();
          const newEndMinutes =
            newEndMoment.hours() * 60 + newEndMoment.minutes();
          const oldStartMinutes =
            oldStartMoment.hours() * 60 + oldStartMoment.minutes();
          const oldEndMinutes =
            oldEndMoment.hours() * 60 + oldEndMoment.minutes();
          // Validación
          if (
            newEndMinutes <= oldStartMinutes ||
            oldEndMinutes <= newStartMinutes
          )
            return false;
          else return true;
        });
        overlappingHabits.map((habit) => get().del(habit.startedDate));
        set({ _habits: _.concat(get()._habits, item) });
        return true;
      },
      upd: (key, data) =>
        set((state) => ({
          _habits: state._habits.map((habit) =>
            habit.startedDate === key ? { ...data, startedDate: key } : habit,
          ),
        })),
    }),
    {
      name: "habits-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useHabitsStore;

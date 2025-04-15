import { useEffect } from "react";
import _ from "lodash";
import useHabitsStore from "./useHabitsStore";
import moment from "moment";
import { assignHabitNotification } from "@/constants/utils";
export default function useHabitsNotifications() {
  const { _habits } = useHabitsStore();
  useEffect(() => {
    const day = moment().day();
    const items = _.filter(_habits, (item) => {
      if (_.includes(item.executionDays, day)) return true;
      else return false;
    });
    items.map((item) => assignHabitNotification(item));
  }, [_habits]);
}

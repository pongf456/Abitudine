import { Modal, ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import InputIcon from "../global/InputIcon";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { habitSchema, HabitSchema } from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import DateSelector from "./DateSelector";
import DaysSelector from "./DaysSelector";
import ButtonIcon from "../global/ButtonIcon";
import { colors } from "@/constants/Theme";
import useHabitsStore from "@/hooks/useHabitsStore";
import IdentitySelector from "./IdentitySelector";
interface Properties {
  visible: boolean;
  hide(): void;
}
export default function AddModal({ hide, visible }: Properties) {
  const { push } = useHabitsStore();
  const { control, watch, handleSubmit, reset } = useForm<HabitSchema>({
    defaultValues: {
      difficulty: "Easy",
      identity: [],
      startDate: `${moment().format("hh:mm A")}`,
      endDate: `${moment().add(10, "minutes").format("hh:mm A")}`,
      executionDays: [0, 1, 2, 3, 4, 5, 6],
      daysCompleted: [],
    },
    resolver: zodResolver(habitSchema),
  });
  const lastStartDate = watch("startDate");
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={hide}
    >
      <View className="flex-1 justify-end p-2">
        <View className="w-full h-[80%] rounded-xl bg-accent border-2 border-primary">
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-1 p-2"
          >
            <Controller
              control={control}
              name="name"
              render={({
                field: { onChange, ...others },
                fieldState: { error },
              }) => (
                <InputIcon
                  error={error?.message}
                  onChangeText={onChange}
                  numberOfLines={1}
                  {...others}
                  iconName="infocirlce"
                  placeholder="Nombre"
                  className={["rounded-md my-1"]}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({
                field: { onChange, ...others },
                fieldState: { error },
              }) => (
                <InputIcon
                  error={error?.message}
                  onChangeText={onChange}
                  {...others}
                  multiline={true}
                  numberOfLines={4}
                  iconName="questioncircle"
                  placeholder="Descripción"
                  className={["rounded-md my-1"]}
                />
              )}
            />
            <Controller
              control={control}
              name="difficulty"
              render={({ field: { value, onChange } }) => (
                <>
                  <Text
                    style={{ textTransform: "uppercase" }}
                    className="font-secondary-medium my-2 text-center text-xl text-primary"
                  >
                    Nivel de dificultad
                  </Text>
                  <View className="bg-darkTextPrimary rounded-xl">
                    <Picker selectedValue={value} onValueChange={onChange}>
                      <Picker.Item label="Fácil" value={"Easy"} />
                      <Picker.Item label="Normal" value={"Medium"} />
                      <Picker.Item label="Difícil" value={"Hard"} />
                      <Picker.Item label="Muy difícil" value={"VeryHard"} />
                    </Picker>
                  </View>
                </>
              )}
            />
            <Controller
              control={control}
              name="executionDays"
              render={(data) => (
                <>
                  <Text
                    style={{ textTransform: "uppercase" }}
                    className="text-center font-secondary-medium my-2 text-xl text-primary"
                  >
                    Días de ejecución
                  </Text>
                  <DaysSelector
                    values={data.field.value}
                    onChange={data.field.onChange}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="identity"
              render={({ field: { value, onChange } }) => (
                <>
                  <Text
                    style={{ textTransform: "uppercase" }}
                    className="text-center font-secondary-medium my-2 text-xl text-primary"
                  >
                    Rasgos de identidad asociados
                  </Text>
                  <IdentitySelector value={value} onChange={onChange} />
                </>
              )}
            />

            <View className="flex-row justify-around p-2 m-2">
              <Controller
                control={control}
                name="startDate"
                render={({ field: { value, onChange } }) => (
                  <DateSelector
                    title="Inicio"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="endDate"
                render={({ field: { value, onChange }, formState }) => (
                  <DateSelector
                    title="Cierre"
                    minimum={lastStartDate}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </View>
          </ScrollView>
          <ButtonIcon
            iconName="save"
            size={25}
            color={colors.accent}
            onPress={handleSubmit((data) => {
              push({
                ...data,
                startedDate: new Date().toISOString(),
                notes: [],
              });
              reset();
              hide();
            })}
            className="bg-primary m-2 rounded-xl"
          >
            <Text className="font-secondary-medium text-center text-darkTextPrimary">
              Guardar hábito
            </Text>
          </ButtonIcon>
        </View>
      </View>
    </Modal>
  );
}

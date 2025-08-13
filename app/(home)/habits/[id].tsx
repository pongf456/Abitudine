import useHabitsStore from "@/hooks/useHabitsStore";
import { router, useLocalSearchParams } from "expo-router";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import _ from "lodash";
import { Habit as HabitType } from "@/types/interfaces";
import InputIcon from "@/components/global/InputIcon";
import { Picker } from "@react-native-picker/picker";
import DaysSelector from "@/components/habits/DaysSelector";
import IdentitySelector from "@/components/habits/IdentitySelector";
import DateSelector from "@/components/habits/DateSelector";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/constants/Theme";
import { Controller, useForm } from "react-hook-form";
import { habitSchema, notesSchema } from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import Completed from "@/components/habits/Completed";

const joinedSchema = habitSchema.extend({
  notes: notesSchema,
});
type JoinedSchema = z.infer<typeof joinedSchema>;
function Title({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View className="gap-2 my-1">
      <Text className="font-secondary-medium text-primary text-xl">
        {title}
      </Text>
      <View className="pl-2">{children}</View>
    </View>
  );
}
function Notes({
  value,
  onChange,
}: {
  value: HabitType["notes"];
  onChange(notes: HabitType["notes"]): void;
}) {
  const [text, setText] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    const result = notesSchema.element.shape.text.safeParse(text);
    if (result.error) setError(result.error.issues[0].message);
    else setError(undefined);
  }, [text]);
  return (
    <View>
      <View className="items-center justify-center py-2">
        {value.length === 0 ? (
          <Text className="font-secondary-regular text-sm text-textPrimary">
            No posees notas
          </Text>
        ) : (
          value.map((item, index) => (
            <View
              key={index}
              className="bg-darkTextPrimary w-[90%] my-1 p-2 relative"
            >
              <TouchableOpacity
                onPress={() =>
                  onChange(
                    value.filter((note) => note.createdAt !== item.createdAt),
                  )
                }
                className="absolute z-10 top-2 right-2 p-1 rounded-full bg-background"
              >
                <AntDesign
                  name="close"
                  size={25}
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
              <Text className="font-secondary-regular text-textPrimary">
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
              <Text className="font-secondary-regular text-textSecondary px-2">
                {item.text}
              </Text>
            </View>
          ))
        )}
      </View>
      <View className="flex-row justify-between items-center">
        <InputIcon
          onChangeText={setText}
          value={text}
          numberOfLines={1}
          className={["w-[80%] rounded-xl"]}
          iconName="tag"
          placeholder="Escribe una nota"
        />
        <TouchableOpacity
          onPress={() => {
            if (!error)
              onChange([
                ...value,
                {
                  text: text as string,
                  createdAt: new Date().toISOString(),
                },
              ]);
            setText(undefined);
          }}
          className="p-2 mx-1 bg-primary rounded-xl"
        >
          <MaterialIcons name="save" size={20} color={colors.background} />
        </TouchableOpacity>
      </View>
      {error && (
        <Text className="font-secondary-regular text-sm text-textSecondary px-1">
          {error}
        </Text>
      )}
    </View>
  );
}
const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);
export default function Habit() {
  const { id } = useLocalSearchParams();
  const { _habits, upd } = useHabitsStore();
  const data = useMemo(() => {
    return _.find(_habits, { startedDate: id }) as HabitType | undefined;
  }, [id, _habits]);
  const { control, watch, formState, handleSubmit, reset } =
    useForm<JoinedSchema>({
      resolver: zodResolver(joinedSchema),
      defaultValues: data,
    });
  const lastStartDate = watch("startDate");
  return (
    <View className="flex-1 items-center justify-center relative">
      <View className="flex-row items-center w-full justify-between">
        <TouchableOpacity
          onPress={() => router.push("/habits")}
          className="bg-primary items-center px-2 py-1 justify-center flex-row gap-2 m-2 rounded-xl"
        >
          <MaterialIcons
            size={25}
            color={colors.darkTextPrimary}
            name="arrow-back-ios"
          />
          <Text className="font-secondary-medium text-darkTextPrimary">
            Regresar
          </Text>
        </TouchableOpacity>
        <Text className=" font-secondary-regular text-center mx-2 text-textPrimary text-base">
          {(data?.startedDate
            ? new Date(data.startedDate)
            : new Date()
          ).toLocaleString()}
        </Text>
      </View>
      {!data ? (
        <Text className="font-secondary-bold text-textPrimary">
          Hábito no encontrado.
        </Text>
      ) : (
        <>
          {formState.isDirty && (
            <TouchableAnimated
              entering={FadeInRight}
              exiting={FadeOutLeft}
              onPress={handleSubmit((newData) => {
                upd(data.startedDate, newData);
                reset(newData);
              })}
              className="absolute top-4 right-4 p-2 bg-accent border-2 border-primary rounded-xl z-20"
            >
              <Text className="font-secondary-bold text-sm text-primary">
                Guardar
              </Text>
            </TouchableAnimated>
          )}
          <ScrollView className="flex-1 p-2">
            <Completed habit={data} />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, ...props } }) => (
                <Title title="Nombre">
                  <InputIcon
                    numberOfLines={1}
                    className={["rounded-xl border-2 border-primary"]}
                    iconName="infocirlce"
                    onChangeText={onChange}
                    {...props}
                  />
                </Title>
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, ...props } }) => (
                <Title title="Descripción">
                  <InputIcon
                    multiline={true}
                    numberOfLines={4}
                    className={["rounded-xl border-2 border-primary"]}
                    iconName="questioncircle"
                    onChangeText={onChange}
                    {...props}
                  />
                </Title>
              )}
            />
            <Controller
              control={control}
              name="difficulty"
              render={({ field }) => (
                <Title title="Nivel de dificultad">
                  <View className="bg-darkTextPrimary rounded-xl">
                    <Picker
                      selectedValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <Picker.Item label="Fácil" value={"Easy"} />
                      <Picker.Item label="Normal" value={"Medium"} />
                      <Picker.Item label="Difícil" value={"Hard"} />
                      <Picker.Item label="Muy difícil" value={"VeryHard"} />
                    </Picker>
                  </View>
                </Title>
              )}
            />
            <Controller
              control={control}
              name="executionDays"
              render={({ field }) => (
                <Title title="Dias de ejecución">
                  <DaysSelector
                    values={field.value}
                    onChange={field.onChange}
                  />
                </Title>
              )}
            />
            <Controller
              control={control}
              name="identity"
              render={({ field }) => (
                <Title title="Rasgos de identidad asociados">
                  <IdentitySelector
                    value={field.value}
                    onChange={field.onChange}
                  />
                </Title>
              )}
            />
            <Controller
              control={control}
              name="notes"
              render={({ field }) => (
                <Title title="Notas">
                  <Notes value={field.value} onChange={field.onChange} />
                </Title>
              )}
            />
            <View className="flex-row justify-around pb-8 m-2">
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <DateSelector
                    title="Inicio"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <DateSelector
                    title="Cierre"
                    minimum={lastStartDate}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}

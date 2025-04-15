import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputIcon from "@/components/global/InputIcon";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonIcon from "@/components/global/ButtonIcon";
import { colors } from "@/constants/Theme";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { userSchema, UserSchema } from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@/hooks/useUserStore";
import { Redirect } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import Identities from "@/components/global/Identities";

export default function Start() {
  const [boxOpen, setBoxOpen] = useState(false);
  const { top } = useSafeAreaInsets();
  const nickname = useUserStore((state) => state.nickname);
  const { control, watch, handleSubmit } = useForm<UserSchema>({
    defaultValues: {
      identity: [],
      birthDate: new Date(),
    },
    resolver: zodResolver(userSchema),
  });
  const date = watch("birthDate");
  if (nickname) return <Redirect href="/home" />;
  else
    return (
      <View className="w-full h-full">
        <View
          style={{ paddingTop: top }}
          className={`bg-accent p-2 rounded-b-[50]`}
        >
          <Text className="font-secondary-bold uppercase text-center text-2xl m-4 text-textPrimary">
            Formulario de inicio
          </Text>
        </View>
        <ScrollView className="px-4 flex-1">
          <Controller
            control={control}
            name="perfilUri"
            render={(data) => (
              <>
                <TouchableOpacity
                  onPress={async () => {
                    let result = await ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ["images"],
                      allowsMultipleSelection: false,
                    });
                    if (result.canceled) return;
                    data.field.onChange(result.assets[0].uri);
                  }}
                  className="w-60 h-60 overflow-hidden items-center justify-center bg-accent rounded-full self-center m-2"
                >
                  {data.field.value ? (
                    <Image
                      className="w-full h-full"
                      source={{ uri: data.field.value }}
                    />
                  ) : (
                    <Text className="font-secondary-medium text-textPrimary text-center text-xs">
                      Selecciona una imagen de perfil
                    </Text>
                  )}
                </TouchableOpacity>

                <Text className="text-center font-secondary-regular text-xs text-textPrimary">
                  {data.fieldState.error?.message ?? ""}
                </Text>
              </>
            )}
          />
          <Controller
            control={control}
            name="nickname"
            render={({
              field: { onChange, ...others },
              fieldState: { error },
            }) => (
              <InputIcon
                error={error?.message}
                numberOfLines={1}
                iconName="user"
                autoComplete="username"
                placeholder="Apodo"
                {...others}
                onChangeText={onChange}
                className={["rounded-xl m-6"]}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, ...others },
              fieldState: { error },
            }) => (
              <InputIcon
                error={error?.message}
                numberOfLines={1}
                iconName="mail"
                autoComplete="email"
                placeholder="Correo"
                {...others}
                onChangeText={onChange}
                className={["rounded-xl m-6"]}
              />
            )}
          />
          <Controller
            control={control}
            name={"birthDate"}
            render={({ fieldState, field: { onChange } }) => (
              <>
                {boxOpen && (
                  <DateTimePicker
                    testID="user_date"
                    mode="date"
                    value={date}
                    onChange={(ev, date) => {
                      setBoxOpen(false);
                      date && onChange(date);
                    }}
                  />
                )}
                <ButtonIcon
                  iconName="calendar"
                  className="bg-accent shadow-md m-4 rounded-xl"
                  color={colors.textPrimary}
                  size={25}
                  onPress={() => setBoxOpen(!boxOpen)}
                >
                  <View className="  justify-center items-center">
                    <Text className="font-secondary-bold uppercase text-base text-textPrimary">
                      Fecha de nacimiento
                    </Text>
                    <Text className="font-secondary-regular text-sm m-1 text-textPrimary">
                      {date.toLocaleDateString()}
                    </Text>
                  </View>
                </ButtonIcon>
                <Text
                  numberOfLines={1}
                  className="mx-4 font-secondary-regular text-xs text-textPrimary"
                >
                  {fieldState.error?.message ?? ""}
                </Text>
              </>
            )}
          />
          <Controller
            control={control}
            name="identity"
            render={(props) => (
              <Identities
                value={props.field.value}
                onChange={props.field.onChange}
                error={props.fieldState.error?.message}
              />
            )}
          />
          <ButtonIcon
            onPress={handleSubmit(({ perfilUri, birthDate, ...data }) => {
              useUserStore.setState({
                birthDate: birthDate.toString(),
                ...data,
              });
              useUserStore.getState().setPerfilUri(perfilUri);
            })}
            iconName="cloud"
            className="bg-primary shadow-md self-center m-4 rounded-xl"
            color={colors.darkTextPrimary}
            size={25}
          >
            <Text className="font-secondary-regular text-sm text-dark text-center uppercase text-darkTextPrimary">
              guardar datos
            </Text>
          </ButtonIcon>
        </ScrollView>
      </View>
    );
}

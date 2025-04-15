import HabitsPieChart from "@/components/account/HabitsPieChart";
import Carrousel from "@/components/global/Carrousel";
import Identities from "@/components/global/Identities";
import { colors } from "@/constants/Theme";
import useUserStore from "@/hooks/useUserStore";
import { DaysOfWeek } from "@/types/enums";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
export default function Account() {
  const { nickname, email, birthDate, perfilUri, identity, setPerfilUri } =
    useUserStore();
  return (
    <ScrollView className="flex-1">
      <View className="w-full p-2 flex-row">
        <TouchableOpacity
          onPress={async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ["images"],
              allowsMultipleSelection: false,
            });
            if (result.canceled) return;
            await setPerfilUri(result.assets[0].uri);
          }}
          className="w-[30%]"
        >
          <Image
            className="w-28 h-28 rounded-xl bg-primary"
            source={{ uri: perfilUri }}
          />
        </TouchableOpacity>
        <View className="w-[70%]">
          <Text
            numberOfLines={1}
            className="font-secondary-bold w-full text-2xl text-textPrimary"
          >
            {nickname ?? ""}
          </Text>
          <Text
            numberOfLines={1}
            className="font-secondary-regular w-full text-sm text-textPrimary"
          >
            {email ?? ""}
          </Text>
          <View className="flex-1 items-center gap-1 flex-row">
            <View className="p-2 bg-primary rounded-xl">
              <FontAwesome
                name="birthday-cake"
                size={20}
                color={colors.accent}
              />
            </View>
            <View className="flex-row p-2 items-center rounded-xl bg-primary">
              <Text className="text-background font-secondary-regular">
                {new Date(birthDate ?? "").toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="p-2 flex-row gap-2 flex-wrap">
        {identity && (
          <Identities
            className="w-full"
            onChange={(newIdentity) => {
              useUserStore.setState({ identity: newIdentity });
            }}
            value={identity}
          />
        )}
      </View>
      <Carrousel
        className="w-full self-center flex-1"
        titles={[
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ]}
      >
        <HabitsPieChart day={DaysOfWeek.Monday} />
        <HabitsPieChart day={DaysOfWeek.Tuesday} />
        <HabitsPieChart day={DaysOfWeek.Wednesday} />
        <HabitsPieChart day={DaysOfWeek.Thursday} />
        <HabitsPieChart day={DaysOfWeek.Friday} />
        <HabitsPieChart day={DaysOfWeek.Saturday} />
        <HabitsPieChart day={DaysOfWeek.Sunday} />
      </Carrousel>
      <Text className="text-center font-secondary-medium text-textPrimary">
        Gráfico de ocupación
      </Text>
    </ScrollView>
  );
}

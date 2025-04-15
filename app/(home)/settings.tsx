import { Text, TouchableOpacity, View } from "react-native";
import * as Application from "expo-application";
import Constants from "expo-constants";
import Item from "@/components/settings/Item";
import useUserStore from "@/hooks/useUserStore";

export default function Settings() {
  const reset = useUserStore((d) => d.reset);
  return (
    <View className="p-2">
      <Item name="Creador">Yeiderson Sequera</Item>
      <Item name="Dispositivo">{Constants.deviceName}</Item>
      <Item name="Sistema">
        {Constants.platform?.android
          ? "Android"
          : Constants.platform?.ios
            ? "Ios"
            : "Desconocido"}
      </Item>
      <Item name="Versión de la aplicación">
        {Application.nativeApplicationVersion}
      </Item>
      <Item name="Datos">
        <TouchableOpacity
          onPress={() => reset()}
          className="bg-primary px-2 py-1 rounded-md"
        >
          <Text
            style={{ textTransform: "uppercase" }}
            className="font-secondary-regular text-sm text-darkTextPrimary"
          >
            eliminar
          </Text>
        </TouchableOpacity>
      </Item>
    </View>
  );
}

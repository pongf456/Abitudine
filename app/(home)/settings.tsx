import { Text, TouchableOpacity, View } from "react-native";
import * as Application from "expo-application";
import * as Updates from "expo-updates";
import Constants from "expo-constants";
import Item from "@/components/settings/Item";
import useUserStore from "@/hooks/useUserStore";

export default function Settings() {
  const reset = useUserStore((d) => d.reset);
  return (
    <View className="p-2">
      <Item name="Desarrollador:">Yeiderson Sequera</Item>
      <Item name="Dispositivo:">{Constants.deviceName}</Item>
      <Item name="Sistema:">
        {Constants.platform?.android
          ? "Android"
          : Constants.platform?.ios
            ? "Ios"
            : "Desconocido"}
      </Item>
      <Item name="Versión de la aplicación:">
        {Application.nativeApplicationVersion}
      </Item>
      <Item name="Fecha de actualización:">
        {Updates.createdAt?.toLocaleDateString() ?? "Ninguna"}
      </Item>
      <Item name="Datos:">
        <TouchableOpacity
          onPress={() => reset()}
          className="bg-primary px-4 py-2 rounded-md"
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

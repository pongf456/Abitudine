import { AntDesign } from "@expo/vector-icons";
import clsx from "clsx";
import { View, TouchableOpacityProps, TouchableOpacity } from "react-native";
export interface properties extends TouchableOpacityProps {
  iconName: keyof typeof AntDesign.glyphMap;
  color?: string;
  size: number;
}
export default function ButtonIcon({
  iconName,
  color,
  className,
  children,
  size,
  ...others
}: properties) {
  return (
    <TouchableOpacity
      {...others}
      className={clsx(
        "flex-row items-center justify-between gap-2 p-2",
        className,
      )}
    >
      <View className="w-[20%]">
        <AntDesign
          className="text-center"
          name={iconName}
          size={size}
          color={color ?? "black"}
        />
      </View>
      <View className="w-[80%]">{children}</View>
    </TouchableOpacity>
  );
}

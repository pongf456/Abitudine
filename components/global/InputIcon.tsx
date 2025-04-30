import { colors } from "@/constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import clsx from "clsx";
import { forwardRef } from "react";
import { View, TextInputProps, TextInput, Text } from "react-native";
interface inputIcon extends Omit<TextInputProps, "className"> {
  iconName: keyof typeof AntDesign.glyphMap;
  className?: string[];
  error?: string;
}

const InputIcon = forwardRef<TextInput, inputIcon>(
  ({ iconName, className, error, ...props }, ref) => {
    return (
      <View
        className={clsx(
          "bg-darkTextPrimary shadow-md",
          className ? className[0] : undefined,
        )}
      >
        {error && (
          <Text
            numberOfLines={1}
            className={clsx(
              "font-secondary-regular mx-2 text-xs text-textPrimary",
              className ? className[2] : undefined,
            )}
          >
            {error}
          </Text>
        )}
        <View className="flex-row self-center px-1 py-2 items-center">
          <View className="w-[20%] items-center justify-center">
            <AntDesign name={iconName} size={25} color={colors.textPrimary} />
          </View>
          <TextInput
            ref={ref}
            {...props}
            className={clsx(
              "text-base w-[80%] p-0 h-full font-secondary-regular",
              className ? className[1] : undefined,
            )}
          />
        </View>
      </View>
    );
  },
);
InputIcon.displayName = "InputIcon";
export default InputIcon;

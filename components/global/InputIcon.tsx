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
      <>
        <View
          className={clsx(
            "flex-row self-center items-center bg-darkTextPrimary shadow-md",
            className ? className[0] : undefined,
          )}
        >
          <View className="w-[20%] items-center justify-center">
            <AntDesign name={iconName} size={25} color={colors.textPrimary} />
          </View>
          <TextInput
            ref={ref}
            {...props}
            className={clsx(
              "text-base w-[80%] h-full font-secondary-regular",
              className ? className[1] : undefined,
            )}
          />
        </View>
        {error && (
          <Text
            className={clsx(
              "font-secondary-regular text-xs text-textPrimary",
              className ? className[2] : undefined,
            )}
          >
            {error}
          </Text>
        )}
      </>
    );
  },
);
InputIcon.displayName = "InputIcon";
export default InputIcon;

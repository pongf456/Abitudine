import { View, Text } from "react-native";
import clsx from "clsx";
export default function Logo({
  className,
  size,
  inverted,
}: {
  className?: string;
  size: number;
  inverted?: boolean;
}) {
  return (
    <View className={clsx("flex-row items-center p-1", className)}>
      <Text
        style={{ fontSize: size * 1.7 }}
        className={clsx(
          "font-primary-bold",
          inverted ? "text-accent" : "text-secondary",
        )}
      >
        A
      </Text>
      <Text
        style={{ fontSize: size }}
        className={clsx(
          "font-primary-semibold self-center",
          inverted ? "text-darkTextPrimary" : "text-primary",
        )}
      >
        bitudine
      </Text>
    </View>
  );
}

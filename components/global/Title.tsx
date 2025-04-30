import { View, Text, ViewProps } from "react-native";
import clsx from "clsx";
interface Properties extends Omit<ViewProps, "className"> {
  title: string;
  center?: boolean;
  className: string[];
}
export default function Title({
  title,
  children,
  center,
  className,
  ...props
}: Properties) {
  return (
    <View {...props} className={className[0]}>
      <Text
        className={clsx(
          "font-secondary-bold text-2xl text-textPrimary",
          center && "text-center",
        )}
      >
        {title}
      </Text>
      <View className={clsx("pl-2", className[1])}>{children}</View>
    </View>
  );
}

import { View, Text, ViewProps } from "react-native";
import clsx from "clsx";
interface Properties extends Omit<ViewProps, "className"> {
  title: string;
  className: string[];
}
export default function Title({
  title,
  children,
  className,
  ...props
}: Properties) {
  return (
    <View {...props} className={className[0]}>
      <Text className="font-secondary-bold text-2xl text-textPrimary">
        {title}
      </Text>
      <View className={clsx("pl-2", className[1])}>{children}</View>
    </View>
  );
}

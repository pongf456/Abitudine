import { ReactNode } from "react";
import { View, Text } from "react-native";
export interface Properties {
  name: string;
  children: ReactNode | string;
}
export default function Item({ name, children }: Properties) {
  return (
    <View className="p-1 flex-row ">
      <Text className="min-w-[50%] max-w-[60%] text-base font-secondary-medium text-textPrimary">
        {name}
      </Text>
      <View className="flex-1 items-end justify-center">
        {typeof children === "string" ? (
          <Text className="font-secondary-regular text-base text-textPrimary/80">
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </View>
  );
}

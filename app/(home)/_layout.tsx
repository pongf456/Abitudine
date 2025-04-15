import Animated, { LinearTransition } from "react-native-reanimated";
import { Redirect, Tabs, usePathname } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/Theme";
import { StatusBar } from "expo-status-bar";
import useUserStore from "@/hooks/useUserStore";
import Logo from "@/components/global/Logo";
import { InitialRouteTitles } from "@/constants/routes";
import { useMemo } from "react";
export default function AppLayout() {
  const nickname = useUserStore((state) => state.nickname);
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const title = useMemo(() => {
    // Extrae el nombre de la ruta base (sin el /)
    const routeName = pathname.split("/")[1] || "home";
    return InitialRouteTitles[routeName] || routeName;
  }, [pathname]);
  if (!nickname) return <Redirect href="/start" />;
  else
    return (
      <>
        <StatusBar style="light" />
        <View
          style={{ paddingTop: insets.top }}
          className="bg-primary flex-row items-center justify-between"
        >
          <Logo size={25} inverted />
          <View className=" p-2 m-2 bg-background rounded-lg">
            <Animated.Text
              layout={LinearTransition}
              style={{ textTransform: "uppercase" }}
              className="text-sm text-primary font-secondary-bold"
            >
              {title}
            </Animated.Text>
          </View>
        </View>
        <Tabs
          screenOptions={{
            animation: "fade",
            freezeOnBlur: true,
            headerShown: false,
          }}
          tabBar={({ navigation, descriptors, state }) => {
            return (
              <View className="bg-primary  w-full  h-16 px-2 self-center justify-around items-center rounded-t-3xl flex-row overflow-hidden">
                {state.routes.map((route, index) => {
                  const { options } = descriptors[route.key];
                  const isFocused = state.index === index;
                  const icon =
                    options.tabBarIcon &&
                    options.tabBarIcon({
                      size: 25,
                      color: isFocused
                        ? colors.accent
                        : colors.darkTextSecondary,
                      focused: isFocused,
                    });
                  const onPress = () => {
                    const event = navigation.emit({
                      type: "tabPress",
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name, route.params);
                    }
                  };

                  const onLongPress = () => {
                    navigation.emit({
                      type: "tabLongPress",
                      target: route.key,
                    });
                  };
                  return (
                    <TouchableOpacity
                      key={index}
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarButtonTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      className="items-center justify-center flex-1"
                    >
                      {icon}
                      <Text
                        className="text-center font-secondary-medium text-xs"
                        numberOfLines={1}
                        style={{
                          color: isFocused
                            ? colors.accent
                            : colors.darkTextSecondary,
                        }}
                      >
                        {options.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: InitialRouteTitles.home,
              tabBarIcon: ({ color, size }) => (
                <AntDesign size={size} name="home" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="habits"
            options={{
              title: InitialRouteTitles.habits,
              tabBarIcon: ({ color, size }) => (
                <AntDesign size={size} name="calendar" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="account"
            options={{
              title: InitialRouteTitles.account,
              tabBarIcon: ({ color, size }) => (
                <AntDesign size={size} name="user" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: InitialRouteTitles.settings,
              tabBarIcon: ({ color, size }) => (
                <AntDesign size={size} name="setting" color={color} />
              ),
            }}
          />
        </Tabs>
      </>
    );
}

import { useCallback, useState } from "react";
import { View, Text, Modal, TouchableOpacity, ViewProps } from "react-native";
import InputIcon from "../global/InputIcon";
import ButtonIcon from "./ButtonIcon";
import { colors } from "@/constants/Theme";
import Animated, {
  LinearTransition,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AnimatedTouchableOpacity from "./AnimatedTouchableOpacity";
import Title from "./Title";
export default function Identities({
  value,
  onChange,
  error,
  ...props
}: {
  value: string[];
  onChange?: (value: string[]) => void;
  error?: string;
} & ViewProps) {
  const [identity, setIdentity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const update = useCallback(
    (data: string[]) => {
      if (onChange) onChange(data);
    },
    [onChange],
  );
  const toggleModal = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);
  const addIdentity = useCallback(() => {
    update([...value, identity]);
    setIdentity("");
    toggleModal();
  }, [value, identity, toggleModal, update]);
  const removeIdentity = useCallback(
    (name: string) => {
      update(value.filter((identity) => identity !== name));
    },
    [value, update],
  );
  return (
    <View {...props}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
        visible={modalVisible}
      >
        <View className="w-full flex-1 justify-end">
          <View className="p-4 m-4 relative bg-accent rounded-xl shadow-sm shadow-primary items-center">
            <Animated.View className="p-2 shadow-md absolute rounded-xl -top-14 right-2 bg-accent">
              <TouchableOpacity onPress={toggleModal}>
                <AntDesign
                  size={25}
                  color={colors.textPrimary}
                  name="closecircleo"
                />
              </TouchableOpacity>
            </Animated.View>
            <InputIcon
              value={identity}
              onChangeText={(t) => setIdentity(t)}
              iconName="pushpin"
              className={["rounded-xl"]}
              placeholder="identidad"
            />
            <ButtonIcon
              iconName="plus"
              size={20}
              color={colors.darkTextPrimary}
              className="bg-primary my-4  mx--8 rounded-xl"
              onPress={addIdentity}
            >
              <Text className="text-center font-secondary-bold uppercase text-base text-darkTextPrimary">
                añadir
              </Text>
            </ButtonIcon>
          </View>
        </View>
      </Modal>
      <Title center title="¿Cómo te identificas?" className={["gap-2"]}>
        {error && (
          <Text className="my-2 font-secondary-regular text-center text-xs text-textPrimary">
            Es necesario añadir las cualidades que poseas.
          </Text>
        )}
        <View className="flex-row flex-wrap gap-y-2 items-center justify-center">
          {value.map((identity, index) => (
            <Animated.View
              layout={LinearTransition}
              entering={ZoomIn}
              exiting={ZoomOut}
              key={index}
              className="px-2 h-10 flex-row gap-1 bg-primary rounded-xl items-center justify-center mx-2"
            >
              <Text className="font-secondary-regular text-xs text-background">
                {identity}
              </Text>
              <TouchableOpacity onPress={() => removeIdentity(identity)}>
                <MaterialIcons
                  size={15}
                  color={colors.background}
                  name="close"
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
          <AnimatedTouchableOpacity
            layout={LinearTransition}
            onPress={toggleModal}
            className="w-10 h-10 mx-2 bg-primary rounded-xl items-center justify-center"
          >
            <AntDesign
              name="plus"
              size={20}
              className="text-sm"
              color={colors.background}
            />
          </AnimatedTouchableOpacity>
        </View>
      </Title>
    </View>
  );
}

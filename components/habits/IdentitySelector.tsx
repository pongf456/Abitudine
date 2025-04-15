import useUserStore from "@/hooks/useUserStore";
import { Trait } from "@/types/interfaces";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
interface Properties {
  value: Trait[];
  onChange: (identity: Trait[]) => void;
}
interface SecondProperties extends Properties {
  item: Trait;
}
function Identity({ item, value, onChange }: SecondProperties) {
  const selected = useMemo(() => value.includes(item), [item, value]);
  const add = useCallback(() => {
    onChange([...value, item]);
  }, [item, onChange, value]);
  const del = useCallback(() => {
    onChange(value.filter((selected) => selected !== item));
  }, [item, onChange, value]);
  return (
    <TouchableOpacity
      onPress={selected ? del : add}
      className={clsx("p-2 bg-primary rounded-xl", !selected && "opacity-50")}
    >
      <Text className="text-darkTextPrimary font-secondary-regular text-sm">
        {item}
      </Text>
    </TouchableOpacity>
  );
}
export default function IdentitySelector(props: Properties) {
  const { identity } = useUserStore();
  return (
    <View className="flex-row flex-wrap gap-2 justify-center">
      {identity &&
        identity.length !== 0 &&
        identity.map((trait) => (
          <Identity {...props} key={trait} item={trait} />
        ))}
      {!identity ||
        (identity.length === 0 && (
          <Text className="font-secondary-regular text-sm text-textPrimary">
            No tienes rasgos asociados
          </Text>
        ))}
    </View>
  );
}

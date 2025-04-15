import { User } from "@/types/interfaces";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as fs from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Extended {
  setPerfilUri: (imageUri?: string) => Promise<void>;
  reset(): Promise<void>;
}
const useUserStore = create(
  persist<Partial<User> & Extended>(
    (set, get) => ({
      perfilUri: undefined,
      setPerfilUri: async (imageUri) => {
        const oldUri = get().perfilUri;
        if (oldUri) {
          try {
            await fs.deleteAsync(oldUri);
          } catch {
            console.log("Ocurrió un error al eliminar la imagen antigua");
          }
        }
        if (!imageUri) return;
        const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1); // Obtiene el nombre del archivo
        const destinationUri = `${fs.documentDirectory}${filename}`;
        await fs.copyAsync({ from: imageUri, to: destinationUri });
        set({ perfilUri: destinationUri });
      },
      async reset() {
        set({
          nickname: undefined,
          email: undefined,
          birthDate: undefined,
          identity: [],
        });
        await this.setPerfilUri();
      },
      nickname: undefined,
      email: undefined,
      birthDate: undefined,
      identity: [],
    }),
    {
      name: "user-data",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useUserStore;

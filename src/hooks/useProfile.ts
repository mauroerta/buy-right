import { useLocalStorage } from "./useLocalStorage";
import { ProfileInfo } from "@/types/ProfileInfo";

export function useProfile() {
  const [profile, setProfile] = useLocalStorage<ProfileInfo>("right-profile", {
    defaultValue: {
      firstName: "",
      lastName: "",
      address: "",
    },
  });

  return { profile, setProfile };
}

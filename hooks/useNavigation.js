import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = (path, params) => {
    const queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    router.push(`${path}?${queryString}`);
  };

  return navigateTo;
};

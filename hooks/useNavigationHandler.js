import { useRouter } from "next/navigation";

export const useNavigationHandler = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return { navigateTo };
};

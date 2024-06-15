import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback((path:string) => {
    router.push(path);
  }, [router]);

 
  return {
    navigateTo,
  };
};

export default useNavigation;
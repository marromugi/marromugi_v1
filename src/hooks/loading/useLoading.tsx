import { loadingState } from '@/states/loading'
import { useRecoilState } from 'recoil'

export const useLoading = () => {
  const [isLoading, setLoading] = useRecoilState(loadingState)
  return { isLoading, setLoading }
}

import { semantics } from '@/const/colors/semantics'
import { Theme } from '@/states/theme'
import {
  BiSun,
  BiMoon,
  BiMenu,
  BiBook,
  BiRun,
  BiCoffeeTogo,
  BiMessageDetail,
  BiInfoCircle,
} from 'react-icons/bi'
import {
  BsTwitter,
  BsSpotify,
  BsGithub,
  BsFillInfoCircleFill,
} from 'react-icons/bs'

export const getIconSVG = (icon: keyof typeof semantics.icon, theme: Theme) => {
  switch (icon) {
    case 'theme':
      return theme === 'light' ? BiMoon : BiSun
    case 'menu':
      return BiMenu
    case 'blog':
      return BiBook
    case 'product':
      return BiCoffeeTogo
    case 'me':
      return BiRun
    case 'contact':
      return BiMessageDetail
    case 'twitter':
      return BsTwitter
    case 'spotify':
      return BsSpotify
    case 'github':
      return BsGithub
    case 'info':
      return BsFillInfoCircleFill
  }
}

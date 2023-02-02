import { MenuItemType } from '@/components/ui/molucules/menu/menuItem/type'

export const MENU_ITEMS: Record<
  MenuItemType,
  {
    title: string
    description: string
    href: string
  }
> = {
  blog: {
    title: 'ブログ',
    description: '学んだことをまとめています',
    href: '/blog',
  },
  product: {
    title: 'プロダクト',
    description: '今まで作ったものと作っているもの',
    href: '/blog',
  },
  me: {
    title: '私について',
    description: '興味あることや経歴など',
    href: '/me',
  },
  contact: {
    title: 'コンタクト',
    description: '記事の修正など、ご連絡はこちらから',
    href: '/contact',
  },
}

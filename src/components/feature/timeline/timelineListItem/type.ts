import { semantics } from '@/const/colors/semantics'

export type TimelineContentType = 'blog'

export type BlogCategory = {
  name: string
  slug: string
}

export type Blog = {
  title: string
  slug: string
  meta: string
  body: string
  thumbnail: any
  author: any
  category: BlogCategory
}

export type Timeline = {
  title: string
  category: keyof typeof semantics.button.timeline
  slug: string
  type: TimelineContentType
  publish: string
  blog?: Blog
}

export type TimelineListItemProps = {
  timeline: Timeline
}

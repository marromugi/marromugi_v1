import { TextProps } from '@/components/atoms/text/text/type'

export type Headline1Props = TextProps & {
  size: Extract<TextProps['size'], '600' | '700' | '800' | '900'>
}

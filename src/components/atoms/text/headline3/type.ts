import { TextProps } from '@/components/atoms/text/text/type'

export type Headline3Props = TextProps & {
  size: Extract<TextProps['size'], '400' | '500' | '600' | '700' | '800'>
}

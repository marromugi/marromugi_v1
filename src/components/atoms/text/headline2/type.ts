import { TextProps } from '@/components/atoms/text/text/type'

export type Headline2Props = TextProps & {
  size: Extract<TextProps['size'], '500' | '600' | '700' | '800' | '900'>
}

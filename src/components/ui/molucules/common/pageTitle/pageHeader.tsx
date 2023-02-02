import { Flex } from '../../../atoms/box'
import { Headline2 } from '../../../atoms/text'
import { PageTitleProps } from './type'

export const PageTitle = ({
  title,
  size = '800',
  children,
}: PageTitleProps) => {
  return (
    <Flex
      width={'100%'}
      direction="row"
      items={'center'}
      justify={'space-between'}
    >
      <Headline2 size={size} family={'secondary'} space={{ x: '400' }}>
        {title}
      </Headline2>
      {children && <div>{children}</div>}
    </Flex>
  )
}

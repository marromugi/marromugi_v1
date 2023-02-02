import { useTheme } from '@/hooks/theme'
import ReactMarkdown from 'react-markdown'
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown'
import remarkGfm from 'remark-gfm'
import { BlogMarkdownCode } from '../blogMarkdown/blogMarkdownCode/blogMarkdownCode'

export const BlogArticle = () => {
  const { theme } = useTheme()
  const components = {
    code: BlogMarkdownCode,
  }

  const markdown = `
  個人制作で~styled-components~を使用していたのですが、話題の~Tailwind~も気になっていたので興味がてら触ってみました。
  その中で個人的に設計で悩んだことがあったので、書き出して整理していこうと思います。
  
  ## styled-components の設計
  \`styled-components\`を使用していて特に便利だと思った点は、作成した各コンポーネントを**継承**できる点でした。
  Boxコンポーネントを作成する場合は、~padding~や~margin~などのBoxでも使用する可能性が高いプロパティを持つコンポーネントを作成しておきます。そうすることで、次にボーダーを持つボックスが欲しくなったりした時に、作成したコンポーネントを継承することでコード上に再定義する必要がなくなるので、コードの見通しや修正がしやすくなると感じていました。
  
  ~~~typescript
  export const Box = styled.div<{
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    position?: NonNullable<JSX.IntrinsicElements["div"]["style"]>["position"];
    margin?: string;
    padding?: string;
    opacity?: string;
    zIndex?: string;
  }>
  ~~~
  
  上の話の通り、**大枠のコンポーネントを作成し、それを継承する形で役割を増やしたコンポーネントを作成する**という手法をとっていました
  
  ## TailwindCSS　を使ってみて
  ~Tailwind~では、あらかじめ用意された細かなクラスを必要な分だけ割り当てることでスタイルを完成させていきます。煩雑になりがちなCSSの命名を自分で行う必要がなく、既存のクラス名を追記していくだけなので、考えすぎずにスタイリングすることができそうです。これは、**使い切りのスタイリング**や**1つの目的のみに作成されるコンポーネントへのスタイリング**にはとても便利だと感じました。
  
  ただ、汎用性を持たせようとすると少し面倒な場面があるかもしれません。
  - Hello!
  - Hola!
    - Bonjour!
    * Hi!

  1. First
  2. Second

  ![how_to_create](https://storage.googleapis.com/zenn-user-upload/f299e17b4ff2-20220729.png)
fasfa

  | Head | Head | Head |
  | ---- | ---- | ---- |
  | Text | Text | Text |
  | Text | Text | Text |

  fasfas
  fasfa

  > 文書<body>の主要な内容を表します。主要な内容とは、文書の中心的な主題、またはアプリケーションの中心的な機能に直接関連または拡張した内容の範囲のことです。
  
  コードは「」で挟むことでブロックとして挿入できます。以下のように言語を指定するとコードへ装飾（シンタックスハイライト）が適用されます。
  `

  return (
    <ReactMarkdown
      className={`article-markdown-${theme}`}
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  )
}

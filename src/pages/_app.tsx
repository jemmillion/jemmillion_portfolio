import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "조연재 | Full-stack Dev",
  description: "안녕하세요, 프론트엔드 개발자 조연재입니다.",
  canonical: "https://jemmillion.github.io/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jemmillion.github.io/",
    title: "조연재 | Full-stack Dev",
    site_name: "조연재 | Full-stack Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "조연재 | Full-stack Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "조연재 | Full-stack Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "조연재 | Full-stack Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

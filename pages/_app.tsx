import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock';
import * as GA from '../utils/analytics';
import theme from '../theme';
import 'tippy.js/dist/tippy.css';

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      GA.initGA();
      (window as any).GA_INITIALIZED = true;
    }
    GA.logPageView();
  });
  
  return (
    <div>
      <Head>
        <title lang="en">sliver.today</title>
        <link rel="icon" type="image/png" href="/pizza.png" />

        <meta name="title" content="🍕 sliver.today" />
        <meta
          name="description"
          content="A simple app to stay updated with Sliver Pizzeria's daily menu."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sliver.today" />
        <meta property="og:title" content="🍕 sliver.today" />
        <meta
          property="og:description"
          content="A simple app to stay updated with Sliver Pizzeria's daily menu."
        />
        <meta property="og:image" content="https://sliver.today/cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sliver.today" />
        <meta property="twitter:title" content="🍕 sliver.today" />
        <meta
          property="twitter:description"
          content="A simple app to stay updated with Sliver Pizzeria's daily menu."
        />
        <meta property="twitter:image" content="https://sliver.today/cover.png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider 
        theme={theme}
      >
        <Global
          styles={theme => ({
            body: {
              position: "relative",
              fontFamily: theme.fonts.body,
              fontWeight: theme.fontWeights.body,
              margin: 0,
            },
            pre: {
              borderRadius: "8px",
              overflow: "scroll",
            },
            code: {
              fontWeight: "bold",
              backgroundColor: "#eeeefa",
              color: "#5183f5",
              padding: "0.15rem 0.4rem",
              borderRadius: "0.25rem",
            }
          })}
        />
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
      </ThemeProvider>
    </div>
  )
}

export default App;
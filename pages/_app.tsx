import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import 'tippy.js/dist/tippy.css';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
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
        <meta property="og:image" content="/og-pizza.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sliver.today" />
        <meta property="twitter:title" content="🍕 sliver.today" />
        <meta
          property="twitter:description"
          content="A simple app to stay updated with Sliver Pizzeria's daily menu."
        />
        <meta property="twitter:image" content="/og-pizza.png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Global
          styles={theme => ({
            body: {
              fontFamily: theme.fonts.body,
              fontWeight: theme.fontWeights.body,
              margin: 0,
            }
          })}
        />
          <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App;
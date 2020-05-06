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
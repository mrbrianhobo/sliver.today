import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <div>
      <Head>
        <title lang="en">sliver.today</title>
        <link rel="icon" type="image/png" href="/pizza.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {console.log(theme)}
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App;
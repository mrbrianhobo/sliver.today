export default {
  fonts: {
    body: 'Inconsolata, monospace',
    heading: 'Inter, sans-serif',
    monospace: 'Inconsolata, monospace',
  },
  fontWeights: {
    light: 300,
    body: 400,
    semi: 600,
    bold: 700,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#5183f5',
    secondary: '#718096',
    muted: '#dedede',
    modes: {
      dark: {
        text: '#fff',
        background: '#171923',
        muted: 'rgba(255, 255, 255, 0.08)',
      }
    }
  },
  buttons: {
    primary: {
      border: '2px dashed #5183f5',
      color: 'primary',
      bg: 'background',
      '&:hover': {
        color: '#fff',
        bg: 'primary',
      }
    },
    active: {
      border: '2px dashed #5183f5',
      color: '#fff',
      bg: 'primary',
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 8,
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.125);',
    },
  },
}

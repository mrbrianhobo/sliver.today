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
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#5183f5',
  },
  buttons: {
    primary: {
      border: '2px dashed #5183f5',
      color: '#5183f5',
      bg: '#fff',
      '&:hover': {
        color: '#fff',
        bg: '#5183f5',
      }
    },
    active: {
      border: '2px dashed #5183f5',
      color: '#fff',
      bg: '#5183f5',
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

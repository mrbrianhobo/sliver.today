import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github'

defaultProps.theme = theme;

const CodeBlock: React.FC<{
  children: any;
  className: string;
}> = ({ children, className }) => {
  const language = (className.replace(/language-/, '') as Language)
  const multiline = children.length > 80;

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre 
          className={className} 
          style={{
            padding: '20px', 
            minHeight: multiline ? "325px" : "",
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock;

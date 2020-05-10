import React from 'react';
import { useColorMode } from 'theme-ui';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import LightTheme from 'prism-react-renderer/themes/github';
import DarkTheme from 'prism-react-renderer/themes/palenight';

export const GetCodeBlockString: React.FC<{
  code: string;
  language: string;
}> = ({ code, language }) => {
  return <CodeBlock className={language}>{code}</CodeBlock>;
}

const CodeBlock: React.FC<{
  children: any;
  className: string;
}> = ({ children, className }) => {
  const colorMode: string = useColorMode()[0];
  defaultProps.theme = colorMode === 'default' ? LightTheme : DarkTheme;

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

import React from 'react';
import dynamic from 'next/dynamic';
import { useColorMode } from 'theme-ui';
import { Theme } from 'react-select';
import { Queries } from '../interfaces';

const options = [
  { value: Queries.default, label: 'Default' },
  { value: Queries.telegraph, label: 'Telegraph' },
  { value: Queries.shattuck, label: 'Shattuck' },
  { value: Queries.broadway, label: 'Broadway' },
  { value: Queries.all, label: 'All' }
]

// Invert the theme colors
const darkTheme = (theme: Theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      neutral90: theme.colors.neutral0,
      neutral80: theme.colors.neutral5,
      neutral70: theme.colors.neutral10,
      neutral60: theme.colors.neutral20,
      neutral50: theme.colors.neutral30,
      neutral40: theme.colors.neutral40,
      neutral30: theme.colors.neutral50,
      neutral20: theme.colors.neutral60,
      neutral10: theme.colors.neutral70,
      neutral5: theme.colors.neutral80,
      neutral0: '#292B36',
      primary25: theme.colors.primary75,
      primary50: '#2981F2',
      primary: '#0F78FF',
    },
  }
}

const ReactSelect = dynamic(() => import('react-select'), {
  ssr: false
});

const Select: React.FC<{
  onChange: (query: string) => void;
}> = ({ onChange }) => {
  const colorMode: string = useColorMode()[0];

  const handleChange = (selected: any) => {
    if (selected != null || selected != undefined) {
      onChange(selected.value);
    }
  }

  return (
    <ReactSelect
      onChange={(selected) => handleChange(selected)} 
      options={options}
      isSearchable={false}
      theme={colorMode === 'default' ? t => t : darkTheme}
    />
  )
}

export default Select;

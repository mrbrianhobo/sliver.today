import React from 'react';
import dynamic from 'next/dynamic';
import { Queries } from '../interfaces';

const options = [
  { value: Queries.default, label: 'Default' },
  { value: Queries.telegraph, label: 'Telegraph' },
  { value: Queries.shattuck, label: 'Shattuck' },
  { value: Queries.broadway, label: 'Broadway' },
  { value: Queries.all, label: 'All' }
]

const ReactSelect = dynamic(() => import('react-select'), {
  ssr: false
});

const Select: React.FC<{
  onChange: (query: string) => void;
}> = ({ onChange }) => {
  const handleChange = (selected: any) => {
    if (selected != null || selected != undefined) {
      onChange(selected.value);
    }
  }

  return (
    <ReactSelect
      onChange={(selected) => handleChange(selected)} 
      options={options} 
    />
  )
}

export default Select;

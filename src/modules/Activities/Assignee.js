/* eslint-disable react/jsx-boolean-value */
import { useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
  { id: 'fox', label: '🦊 Pascal' },
  { id: 'Butterfly', label: '🦋 Bizimungu' },
  { id: 'Honeybee', label: '🐝 Issa' },
];

const Assignee = () => {
  const [Assignee, setAssignee] = useState(null);

  const handleChange = (id) => {
    setAssignee(id);
  };

  return (
    <Select
      primaryColor="indigo"
      id={Assignee}
      onChange={handleChange}
      options={options}
      isSearchable="true"
      isClearable="true"
      isMultiple={true}
      placeholder="Select your email"
    />
  );
};

export default Assignee;

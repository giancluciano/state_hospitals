import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const STATE_CHOICES = JSON.parse(document.getElementById('state-choices').textContent);

const DropdownComponent = ({}) => {
  return (
    <Dropdown
      placeholder="Select state"
      fluid
      selection
      options={STATE_CHOICES.map((item) => ({
        key: item,
        value: item,
        text: item,
      }))}
    />
  );
};

export default DropdownComponent;
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import StyledDropdown from './StyledDropdown.ts';

type DropdownProps = {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  defaultValue: string | number;
};

function Dropdown({ options, onChange, defaultValue }: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue.toString());
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: string) {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  }

  return (
    <StyledDropdown className="dropdown-select__container">
      <div className="dropdown-select__display" onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
        <span className="dropdown-select__display-title">
          {options.find(option => option.value === selectedValue)?.label}
        </span>
        <Icon icon={isOpen ? IconType.ARROW_UP : IconType.ARROW_DOWN} />
      </div>
      {isOpen && (
        <div className={`dropdown-select__options ${isOpen ? 'open' : ''}`}>
          {options.map(option => (
            <p
              key={option.value}
              className="dropdown-select__option"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;

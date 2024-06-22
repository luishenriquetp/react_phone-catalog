import React, { useState } from 'react';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import StyledDropdown from './StyledDropdown.ts';

type DropdownProps = {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  defaultValue: string | number;
};

function Dropdown({ options, onChange, defaultValue }: DropdownProps): React.ReactNode {
  const [selectedValue, setSelectedValue] = useState(defaultValue.toString());
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: string) {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  }

  return (
    <StyledDropdown className="dropdown-select__container">
      <button
        className="dropdown-select__display"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        type="button"
        aria-label="dropdown select device"
      >
        <span className="dropdown-select__display-title">
          {options.find(option => option.value === selectedValue)?.label}
        </span>
        <Icon icon={isOpen ? IconType.ARROW_UP : IconType.ARROW_DOWN} />
      </button>
      {isOpen && (
        <div className={`dropdown-select__options ${isOpen ? 'open' : ''}`}>
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              aria-label={option.label}
              className="dropdown-select__option"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;

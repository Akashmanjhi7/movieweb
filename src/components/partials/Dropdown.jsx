import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className='select text-zinc-300  outline-none  '>
      <select defaultValue="0" name="format" id="format" onChange={func}>
        <option value="0" disabled>
          {title.toUpperCase()}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className=''>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

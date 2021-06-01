import React, { useState } from 'react';
import css from './styles.module.scss';
import { EyeIcon } from './assets/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = email => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

/**
* @param {string} text
* @param {number} minLength
* @returns {boolean}
*/
export const validateTextLength = (text, minLength = 4) => {
  return text.trim().length >= minLength;
};

export const inputType = {
  text: 'text',
  email: 'email',
  password: 'password',
  phone: 'phone',
  number: 'number',
  date: 'date',
  time: 'time',
};

export const Input = ({
  containerClassName,
  labelClassName,
  inputClassName,
  type = inputType.text,
  placeholder,
  value = '',
  onChange,
  autoFocus = false,
  roundedBorder = false,
  darkMode = false,
  minLength = 1,
  label,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleTextChange = e => {
    const value = e.target.value;

    switch (type) {
      case inputType.text:
        setIsValid(validateTextLength(value, minLength));
        break;

      case inputType.password:
        setIsValid(validateTextLength(value, minLength));
        break;

      case inputType.phone:
        setIsValid(validateTextLength(value, 11));
        break;

      case inputType.email:
        setIsValid(validateEmail(value));
        break;

      case inputType.number:
        setIsValid(validateTextLength(value, 1));
        break;

      case inputType.date:
        setIsValid(true);
        break;

      case inputType.time:
        setIsValid(true);
        break;

      default:
        return;
    }
    onChange(e);
  };

  return (
    <div
      className={classNames(css.Container_InputTis, {
        [css.Dark_InputTis]: darkMode
      }, containerClassName)}
    >
      {
        label &&
        <span className={classNames(css.Label_InputTis, {
          [css.Dark_InputTis]: darkMode
        }, labelClassName)}>
          {label}
        </span>
      }
      <div className={css.InputContainer_InputTis}>
        <input
          className={classNames(css.Input_InputTis, {
            [css.Invalid_InputTis]: !isValid,
            [css.RoundedBorder_InputTis]: roundedBorder && isValid,
            [css.RoundedBorderError_InputTis]: roundedBorder && !isValid,
            [css.Dark_InputTis]: darkMode
          }, inputClassName)}
          placeholder={placeholder}
          onChange={handleTextChange}
          type={showPassword ? inputType.text : type}
          value={value}
          autoFocus={autoFocus}
          {...props}
        />
        {type === inputType.password && (
          <EyeIcon
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
          />
        )}
      </div>
    </div>
  );
};


Input.propTypes = {
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  roundedBorder: PropTypes.bool,
  darkMode: PropTypes.bool,
  minLength: PropTypes.number,
  label: PropTypes.string,
};
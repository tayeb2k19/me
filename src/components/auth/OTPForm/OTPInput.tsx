import React, { useRef, KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  onClear?: () => void;
  disabled?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({ value, onChange, onClear, disabled }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusNext = (index: number) => {
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrev = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !value[index]) {
      focusPrev(index);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const digit = e.target.value.replace(/[^0-9]/g, '');
    if (!digit) return;

    const newValue = [...value];
    newValue[index] = digit;
    onChange(newValue);

    if (digit && index < 5) {
      focusNext(index);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
    
    if (pastedData) {
      const newValue = Array(6).fill('');
      [...pastedData].forEach((digit, index) => {
        if (index < 6) newValue[index] = digit;
      });
      
      onChange(newValue);
      
      // Focus last filled input or first empty input
      const lastFilledIndex = newValue.reduce((acc, curr, idx) => curr ? idx : acc, 0);
      setTimeout(() => {
        inputRefs.current[Math.min(lastFilledIndex + 1, 5)]?.focus();
      }, 0);
    }
  };

  return (
    <div className="otp-input-container">
      {value.map((digit, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={disabled}
          className="otp-input"
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
};
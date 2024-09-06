import { formatPhoneNumberWithSpaces } from "@/shared/utils";
import { TextField } from "@mui/material";
import React from "react";

const PhoneNumberInput = ({ value, onChange }) => {
  const processPhoneNumber = (inputValue) => {
    let cleanedNumber = inputValue
      .replace(/\D/g, "")
      .replace(/\s/g, "")
      .slice(1);

    // Ограничиваем длину до 10 цифр
    if (cleanedNumber.length > 10) {
      cleanedNumber = cleanedNumber.slice(0, 10);
    }

    // Возвращаем форматированный номер
    return "+7" + cleanedNumber;
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const formattedNumber = processPhoneNumber(input);
    onChange({ target: { name: "phone", value: formattedNumber } });
  };

  return (
    <TextField
      label="Телефон"
      value={formatPhoneNumberWithSpaces(value)}
      onChange={handleInputChange}
      fullWidth
      sx={{
        "& input": { color: "primary.dark" },
        "& fieldset": { borderColor: "#b1b1b1" },
      }}
      margin="normal"
      autoComplete="off"
      placeholder="+7 XXX XXX XX XX"
    />
  );
};

export default PhoneNumberInput;

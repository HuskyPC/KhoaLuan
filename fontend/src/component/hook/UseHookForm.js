import { useState } from "react";

export default function UseHookForm(innitialValues) {
  const [values, setValues] = useState(innitialValues);
  const handleValues = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleValues,
  };
}

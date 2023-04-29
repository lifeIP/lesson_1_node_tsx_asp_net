import { error } from "console";
import { useState } from "react";

export default function useForm(getFreshModelObject: () => any) {
  const [values, setValues] = useState(getFreshModelObject());
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}

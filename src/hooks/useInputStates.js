import { useState } from "react";
import { v4 as uuid } from "uuid";

const emptyVals = {
  number: "",
  publisher: "",
  title: "",
  quantity: "",
  price: "",
  release_date: "",
  progress: "",
};

export default function useInputStates(initialVals = emptyVals) {
  const [value, setValue] = useState(initialVals);

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute("name");
    const newValue = { ...value };

    newValue[fieldName] = e.target.value;

    setValue(!newValue.id ? { ...newValue, id: uuid() } : newValue);
  };

  const reset = () => {
    setValue(emptyVals);
  };
  return [value, handleChange, reset];
}

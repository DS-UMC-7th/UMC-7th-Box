import { useEffect, useState } from "react";

export default function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  //   const onSubmit = (data) => {
  //     console.log("폼 데이터 제출: ", data); //
  //   };

  useEffect(() => {
    const newErrors = validate(values);

    setErrors(newErrors);
  }, [validate, values]);

  return { values, touched, errors, getTextInputProps };
}

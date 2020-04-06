import { useState } from "react";

interface useInputReturn {
  value: any,
  onChange: Function,
}

const useInput = (initialValue: any): useInputReturn => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (input:any) => setValue(input),
  };
};

export default useInput;
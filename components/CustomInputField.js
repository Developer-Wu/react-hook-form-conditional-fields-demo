import { FormControl, FormLabel, Input } from '@chakra-ui/react';
function CustomInputField({ register, name, label }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...register(name)} />
    </FormControl>
  );
}

export default CustomInputField;

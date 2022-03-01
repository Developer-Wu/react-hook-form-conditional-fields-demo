import { FormControl, FormLabel, Select } from '@chakra-ui/react';

function CustomSelectField({ options, label, register, name }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select placeholder="--select--" {...register(name)}>
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelectField;

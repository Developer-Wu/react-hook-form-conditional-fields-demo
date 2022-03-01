import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useFieldArray, useForm } from 'react-hook-form';
import CustomInputField from '../components/CustomInputField';
import CustomSelectField from '../components/CustomSelectField';

const INDUSTRY_OPTIONS = [
  {
    label: 'Education',
    value: 'education',
  },
  {
    label: 'Technology',
    value: 'technology',
  },
  {
    label: 'Finance',
    value: 'finance',
  },
  {
    label: 'Arts',
    value: 'arts',
  },
];

const YEARS_OF_EXP_OPTIONS = [
  {
    label: '0',
    value: 0,
  },
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
];

export default function Home() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      fName: '',
      lName: '',
      workExperience: [
        {
          industry: 'education',
          exp: 0,
          remark: '',
        },
      ],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'workExperience',
  });
  return (
    <Box d="flex" justifyContent={'center'} py="20px" w="100%">
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        alignItems={'flex-start'}
        spacing="20px"
      >
        <Heading mb="20px">Registration Form</Heading>
        <HStack mb="20px" spacing={'20px'}>
          <CustomInputField
            name="fName"
            label="First Name"
            register={register}
          />
          <CustomInputField
            name="lName"
            label="Last Name"
            register={register}
          />
        </HStack>
        <Text mb="20px" fontSize={'20px'} fontWeight="600" as="h2">
          Work Experience
        </Text>
        {fields.map((f, i) => {
          return (
            <HStack
              alignItems={'center'}
              justifyContent="center"
              key={f.id}
              mb="20px"
              spacing={'20px'}
            >
              <CustomSelectField
                register={register}
                label="Industry"
                options={INDUSTRY_OPTIONS}
                name={`workExperience.${i}.industry`}
              />
              <CustomSelectField
                register={register}
                label="Years of Experience"
                options={YEARS_OF_EXP_OPTIONS}
                name={`workExperience.${i}.exp`}
              />
              <CustomInputField
                register={register}
                name={`workExperience.${i}.remark`}
                label="Remark"
              />
              {i > 0 && <Button onClick={() => remove(i)}>X</Button>}
            </HStack>
          );
        })}
        <Button
          onClick={() =>
            append({
              industry: '',
              exp: 0,
              remark: '',
            })
          }
        >
          Add Experience
        </Button>
        <Button type="submit">Submit</Button>
      </VStack>
    </Box>
  );
}

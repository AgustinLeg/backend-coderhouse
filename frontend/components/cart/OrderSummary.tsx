import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext, CartContext } from "../../context";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
}

export const OrderSummary = () => {
  const { user } = useContext(AuthContext);
  const { total, createOrder } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name,
      lastName: user?.lastName,
      email: user?.email,
    },
  });
  const toast = useToast();
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleCheckout = async (data: FormData) => {
    const resp = await createOrder(data);
    if (resp.hasError) {
      return setError(true);
    }

    toast({
      status: "success",
      title: "Gracias por tu compra",
    });

    router.push("/");
  };

  return (
    <Stack as="form" onSubmit={handleSubmit(handleCheckout)} spacing={4}>
      <HStack>
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            {...register("name", {
              required: "Este campo es requerido",
              minLength: {
                value: 2,
                message: "Este campo es demasiado corto",
              },
            })}
          />
          {errors.name && (
            <FormErrorMessage>{errors.name.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.lastName} isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            {...register("name", {
              required: "Este campo es requerido",
              minLength: {
                value: 2,
                message: "Este campo es demasiado corto",
              },
            })}
          />
          {errors.lastName && (
            <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
          )}
        </FormControl>
      </HStack>
      <FormControl isInvalid={!!errors.email} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.phone} isRequired>
        <FormLabel>Numero de celular</FormLabel>
        <Input
          type="number"
          {...register("phone", {
            required: "Este campo es requerido",
            minLength: {
              value: 10,
              message: "Este numero no parece correcto",
            },
          })}
        />
        {errors.phone && (
          <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.address} isRequired>
        <FormLabel>Direccion</FormLabel>
        <Input
          type="text"
          {...register("address", {
            required: "Este campo es requerido",
          })}
        />
        {errors.address && (
          <FormErrorMessage>{errors.address.message}</FormErrorMessage>
        )}
      </FormControl>

      <Stack spacing={10} pt={2}>
        <HStack pt={6} justify="space-between">
          <Heading as="h4" size="md">
            Total
          </Heading>
          <Text>${total}</Text>
        </HStack>
        <Button variant="brand" isLoading={isSubmitting} type="submit">
          Finalizar Compra
        </Button>
        {error && (
          <Alert>
            <AlertIcon />
            <AlertDescription>
              Hubo un error al finalizar la compra, intenta de nuevo mas tarde.
            </AlertDescription>
          </Alert>
        )}
      </Stack>
    </Stack>
  );
};

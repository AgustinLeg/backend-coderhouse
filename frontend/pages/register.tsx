import { useState, useContext } from "react";
import NextLink from "next/link";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { AuthContext } from "../context";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ShopLayout } from "../components/layouts";
import { UserData } from "../interfaces";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const { registerUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const next = (router.query.next as string) || "/";

  const handleRegister = async (data: FormData) => {
    setError(false);
    const resp = await registerUser(data as UserData);
    if (!resp) {
      return setError(true);
    }
    router.replace(next || "/");
  };
  return (
    <ShopLayout>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                Se ha producido un problema al iniciar sesión. Comprueba el
                correo electrónico y la contraseña o crea una cuenta.
              </AlertDescription>
            </Alert>
          )}

          <Stack
            as="form"
            onSubmit={handleSubmit(handleRegister)}
            spacing={4}
            mt={5}
          >
            <HStack>
              <Box>
                <FormControl isInvalid={!!errors.name} isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={!!errors.lastName} isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    {...register("lastName", {
                      required: "Last Name is required",
                      minLength: {
                        value: 2,
                        message: "Last Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <FormErrorMessage>
                      {errors.lastName.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </Box>
            </HStack>
            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                {...register("email", {
                  required: "Email is required",
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

            <FormControl isInvalid={!!errors.password} isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <InputRightElement h={"full"}>
                  <Button
                    fontSize="20px"
                    size="xl"
                    variant="ghost"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button variant="brand" isLoading={isSubmitting} type="submit">
                Crear Cuenta
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Ya tienes una cuenta?{" "}
                <NextLink
                  href={`/login${next && `?next=%2F${next.slice(1)}`}`}
                  passHref
                >
                  <Link color={"blue.400"}>Iniciar Sesion</Link>
                </NextLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </ShopLayout>
  );
}

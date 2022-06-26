import { useContext, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Center,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { AuthContext } from "../context";
import { useRouter } from "next/router";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const { loginUser } = useContext(AuthContext);

  const next = (router.query.next as string) || "/";
  const handleLogin = async (data: FormData) => {
    setError(false);
    const resp = await loginUser(data.email, data.password);
    if (!resp) {
      return setError(true);
    }
    router.replace(next);
  };

  return (
    <ShopLayout>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Heading fontSize="4xl" textAlign="center">
          Iniciar Sesion
        </Heading>

        <Box rounded="lg" boxShadow="lg" p={8}>
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
            onSubmit={handleSubmit(handleLogin)}
            spacing={5}
            mt={5}
          >
            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Porfavor ingrese un email valido",
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
                    required: "Este campo es requerido",
                    minLength: {
                      value: 6,
                      message: "Minimo 6 caracteres",
                    },
                  })}
                />
                <InputRightElement h="full">
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between"
              >
                <Link color="blue.400">Forgot password?</Link>
              </Stack>

              <Button variant="brand" type="submit" isLoading={isSubmitting}>
                Iniciar Sesion
              </Button>
            </Stack>
          </Stack>
          <Center mt={5}>
            <NextLink
              href={`/register${next && `?next=%2F${next.slice(1)}`}`}
              passHref
            >
              <Link textAlign="center" w="full" color="blue.400">
                Crear cuenta
              </Link>
            </NextLink>
          </Center>
        </Box>
      </Stack>
    </ShopLayout>
  );
}

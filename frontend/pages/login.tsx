import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  toast,
  useToast,
} from "@chakra-ui/react";
import { useAuthContext } from "../context";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuthContext();
  const router = useRouter();
  const toast = useToast({
    duration: 3000,
    isClosable: true,
    position: "top",
  });

  const onSubmit = async (data: FormData) => {
    const isValidLogin = await loginUser(data.email, data.password);
    if (!isValidLogin) {
      return toast({
        title: "Error",
        description: "Invalid email or password",
        status: "error",
      });
    }
    router.push("/");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={5}>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Center mt={5}>
            <NextLink href="/register" passHref>
              <Link textAlign="center" w="full" color={"blue.400"}>
                Create Account
              </Link>
            </NextLink>
          </Center>
        </Box>
      </Stack>
    </Flex>
  );
}

import Router, { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Image,
} from "@chakra-ui/react";
import { IProduct } from "../../../interfaces";
import { useProducts } from "../../../hooks";
const Producto = () => {
  const {
    push,
    query: { slug },
  } = useRouter();
  const { products } = useProducts(`/productos/${slug}`) as {
    products: IProduct;
    isLoading: boolean;
    isError: any;
  };

  const [values, setValues] = useState({
    name: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    setValues((val) => ({
      ...val,
      name: products.name,
      image: products.image,
      price: products.price,
    }));
  }, [products]);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE",
    });

    push("/admin/productos");
  };

  const handleSubmit = async (id: string) => {
    await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
    });

    const response = await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    });
    alert("Producto actualizado");
    push('/admin/productos');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Product details
        </Heading>
        <FormControl id="userName">
          <FormLabel>Image</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center w="full">
              <Image alt={`foto de ${values.name}`} src={values.image} />
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="50"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="image" isRequired>
          <FormLabel>image</FormLabel>
          <Input
            placeholder="image"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="image"
            onChange={handleChange}
            value={values.image}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
            onClick={() => handleDelete(products.id)}
          >
            Delete
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => handleSubmit(products.id)}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Producto;

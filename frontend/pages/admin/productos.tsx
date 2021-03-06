import React, { useEffect, useContext } from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";
import {
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useProducts } from "../../hooks";
import { IProduct } from "../../interfaces";
import NextLink from "next/link";

const Productos = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const { products } = useProducts("/productos") as { products: IProduct[] };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (user && user.role !== "ADMIN_ROLE") {
      router.push("/login");
      return;
    }
    if (user) {
      alert("Bienvenido admin");
    }
  }, [user, router]);

  return (
    <AdminLayout>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td w="25%">
                  <Image
                    w="50%"
                    src={product.images[0]}
                    alt={`producto ${product.title}`}
                  />
                </Td>
                <Td>{product.title}</Td>
                <Td isNumeric>{product.price}</Td>
                <Td>
                  <NextLink href={`/admin/producto/${product.slug}`} passHref>
                    <Link bg="blue" color="white" p={2}>
                      Ver mas
                    </Link>
                  </NextLink>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default Productos;

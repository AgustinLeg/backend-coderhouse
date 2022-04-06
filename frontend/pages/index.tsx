import type { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import { ProductList } from "../components/products/ProductList";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../interfaces";

const Home: NextPage = () => {
  const { products } = useProducts("/productos") as{products: IProduct[]};

  return (
    <MainLayout>
      <div>
        <h2>Productos</h2>
        <ProductList products={products} />
      </div>
    </MainLayout>
  );
};

export default Home;

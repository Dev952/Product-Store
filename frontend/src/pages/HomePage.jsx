import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard'; 

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30px"  // or use "2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Product 🚀
        </Text>

        {Array.isArray(products) && products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w="full"
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="bold"
            color="gray.500"
          >
            NO products found 🥺{" "}
            <Link
              to="/create"
              style={{ color: '#3182CE', textDecoration: 'underline' }}
            >
              Create a product
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const productsUrl = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(productsUrl);
  const products = response.data.data;
  return { products };
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing;
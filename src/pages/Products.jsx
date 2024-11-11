import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

export const loader =
  (queryClient) =>
    async ({ request }) => {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      // console.log(params);
      const response = await customFetch('/products', { params });
      // console.log(response);
      const products = response.data.data;
      const meta = response.data.meta;

      return { products, meta, params };
    };


const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
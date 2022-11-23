import Link from 'next/link';
import {useSWRConfig} from 'swr';

const Product = () => {
  const {mutate} = useSWRConfig();

  const products = [
    {
      id: 1,
      name: 'The last jedi',
      director: 'Rian Johnson'
    },
    {
      id: 2,
      name: 'Fast and furious 4',
      director: 'Michael Bay'
    }
  ];

  const handleButtonClick = () => {
    mutate("https://fakestoreapi.com/products/1");
  };

  return (
    <>
      <h3>Hi it is product list</h3>
      <button onClick={handleButtonClick}>Click me</button>

      <div>
        {products.map((product, i) => {
          if (i === 0)
            return (
              <div key={0}>
                <Link href={`/products/${encodeURIComponent(product.id)}`}>
                  {product.name} - {product.director}
                </Link>
              </div>
            );

          return (
            <div key={1}>
              <Link
                href={{
                  pathname: '/products/[id]',
                  query: {id: product.id}
                }}>
                {product.name} - {product.director}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;

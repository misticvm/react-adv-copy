import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components"
import "../styles/custom-styles.css"
import { products } from "../data/products"

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        className="bg-dark text-white"
        product={product}
        initialValues={{ count: 4, maxCount: 14 }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached ? (
              <button onClick={() => increaseBy(2)}>+2</button>
            ) : null}

            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  )
}

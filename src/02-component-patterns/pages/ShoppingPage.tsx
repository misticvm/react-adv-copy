import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components"
import "../styles/custom-styles.css"
import { useShoppingCart } from "../hooks/useShoppingCart"

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart, products } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            style={{ width: 100 }}
            product={product}
            className="bg-dark text-white"
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons
              style={{ display: "flex", justifyContent: "center" }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>

      <code>{JSON.stringify(shoppingCart)}</code>
    </div>
  )
}

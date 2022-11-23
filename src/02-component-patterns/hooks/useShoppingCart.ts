import { useState } from "react"
import { products } from "../data/products"
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((preShoppingCart) => {
      // console.log({ count })

      // Producto por defecto en carrito (si no hay producto en el carrito, lo inicializamos a 0)
      const productInCart: ProductInCart = preShoppingCart[product.id] || {
        ...product,
        count: 0,
      }

      // Añadimos producto
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return { ...preShoppingCart, [product.id]: { ...productInCart } }
      }

      // Borramos producto
      const { [product.id]: toDelete, ...restOfObject } = preShoppingCart
      return { ...restOfObject }
    })
  }
  return { products, shoppingCart, onProductCountChange }
}

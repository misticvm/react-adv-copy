import { useState } from "react"
import { products } from "../data/products"
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    // console.log({ count }) // Devuelve 1, 2, 3, 4...n
    setShoppingCart((preShoppingCart) => {
      // Eliminamos producto
      if (count === 0) {
        // Borrar con la destructuración de objetos
        const { [product.id]: toDelete, ...restOfShoppingCart } =
          preShoppingCart
        return { ...restOfShoppingCart }
      }

      // Añadimos producto
      return { ...preShoppingCart, [product.id]: { ...product, count } }
    })
  }
  return { products, shoppingCart, onProductCountChange }
}

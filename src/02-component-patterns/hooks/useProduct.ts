import { useState, useEffect, useRef } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces"

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  // console.log({value})
  const [counter, setCounter] = useState(value)

  // Para saber si el componente donde se llama a la función onChange está controlado o no usamos la función onChange transformándola en un booleano
  const isControlledRef = useRef(!!onChange)

  const increaseBy = (value: number) => {
    // console.log("isControlled", isControlledRef.current)

    if (isControlledRef.current) {
      return onChange!({ count: value, product })
    }
    const newCounter = Math.max(counter + value, 0)
    setCounter(newCounter)
    onChange && onChange({ count: newCounter, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}

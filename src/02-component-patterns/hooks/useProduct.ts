import { useState, useEffect } from "react"
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
  console.log({ value })
  const [counter, setCounter] = useState(value)

  const increaseBy = (num: number) => {
    // console.log("isControlled", isControlledRef.current)

    const newCounter = Math.max(counter + num, 0)
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

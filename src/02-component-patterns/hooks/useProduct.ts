import { useState, useEffect, useRef } from "react"
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces"

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMountedRef = useRef(false)

  // console.log(initialValues?.count)
  console.log(counter)

  const increaseBy = (num: number) => {
    // console.log("isControlled", isControlledRef.current)

    const newCounter = Math.max(counter + num, 0)
    // setCounter(newCounter)
    setCounter((prevCounter) => {
      if (initialValues?.maxCount && newCounter > initialValues?.maxCount)
        return prevCounter
      return newCounter
    })
    onChange && onChange({ count: newCounter, product })
  }

  const reset = () => setCounter(initialValues?.count || value)

  useEffect(() => {
    if (!isMountedRef.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMountedRef.current = true
  }, [])

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }
}

import { useCallback, useState } from 'react'
export const useController = ({ items = [] }) => {
  const [pageIndex, setPageIndex] = useState(1)
  const onChangePage = useCallback((index) => {
    setPageIndex(index)
  }, [])

  const onSwipedLeft = useCallback(() => {
    setPageIndex((prev) => {
      if (prev == 0) {
        return prev
      } else return prev - 1
    })
  }, [items])
  const onSwipedRight = useCallback(() => {
    setPageIndex((prev) => {
      if (prev == items.length - 1) {
        return prev
      } else {
        return prev + 1
      }
    })
  }, [])
  return {
    onChangePage,
    pageIndex,
    onSwipedRight,
    onSwipedLeft,
  }
}

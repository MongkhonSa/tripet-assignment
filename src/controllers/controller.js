import { useCallback, useState } from 'react'
export const useController = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const onChangePage = useCallback((index) => {
    setPageIndex(index)
  }, [])

  return {
    onChangePage,
    pageIndex,
  }
}

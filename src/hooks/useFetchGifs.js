import { useEffect, useState } from "react"
import { getGif } from "../helpers/gifService"

export const useFetchGifs = (category = '') => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  // useEffect is not async - must return a cleanup function or nothing
  useEffect(() => {
    // setState({...state, loading: true})
    getGif(category)
      .then(gifs => setState({
        data: gifs,
        loading: false
      }))
  }, [category])

  return state;
}
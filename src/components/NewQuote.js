import { useDispatch, useSelector } from 'react-redux'
import { getQuote } from '../features/quote/quoteSlice'
import { changeIndex } from '../features/colors/colorsSlice'

export default function NewQuote () { 
  const index = useSelector( state => state.colors.index )
  const dispatch = useDispatch()
  const newQuote = ()=>{
    dispatch( changeIndex() )
    dispatch(getQuote())
  }
  return ( <button onClick={newQuote} id="new-quote">New Quote</button> )
}

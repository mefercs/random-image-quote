import { useSelector } from "react-redux"

export default function Text () { 
  const content = useSelector( state => state.quote.content );
  const color = useSelector( state => state.colors.color )
  return ( <h1 id="text" style={{color:color}}>{content}</h1> )
}

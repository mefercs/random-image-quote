import {useSelector} from 'react-redux'

export default function Author(){ 
  const author = useSelector( state => state.quote.author )
  return ( <div id="author">~{author}</div> )
}

import NewQuote from "./components/NewQuote"
import Text from "./components/Text"
import TweetQuote from "./components/TweetQuote"
import Author from "./components/Author"
import React,{ useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuote } from "./features/quote/quoteSlice"
import { changeIndex } from "./features/colors/colorsSlice"

export default function App(){
  const dispatch = useDispatch()

  useEffect(()=>{ 
    dispatch( getQuote() )
    dispatch( changeIndex() )
  },[])
    
  const color = useSelector( state => state.colors.color )
  const mainStyle = { 
    background: color
  }

  return ( 
  <div id="main" style={mainStyle}>
  <div id="quote-box">
    <Text/>
    <Author/>
    <div className="buttons">
     <TweetQuote/>
     <NewQuote/>
    </div>
  </div>
    </div> )

}

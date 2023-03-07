

import React , {useState} from 'react'

export default function Header(props) {
  const [nameStyle , setNameStyle] = useState({backgroundColor:"red" , color:"white"});
  const objectList = [{
    id:1,
    name : "Aryan",
    lastName : "kaushik"
  },
  {
    id:2,
    name:"yoi",
    lastName:";hf"
  }
]
    function handleClick(){
      setNameStyle(
          {
            ...nameStyle,
            backgroundColor: "black"  // change js object value 
          }
      )
    }

  return (
        <>
        </>
  )

}

Header.defaultProps = {
  name : "default name",
  title : "default title",
  age : 3
}
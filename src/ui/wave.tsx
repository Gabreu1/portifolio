import React from "react"
import Wave from "react-wavify"

export function Onda(){
  return(
<div className="bg">{/* div da função */}
      <div className= ''> {/* div da classe wave */}
        <div className="">
           <Wave className="absolute justify-center bottom-0 h-160" fill='#a2d2ff '// nao sei como ta funcionando nao mexe
        paused={false}
        
        options={{
          amplitude: 40,
          height:20,
          speed: 0.20,
          points: 3
        }}
         />

        </div>
      </div>

    </div>
  )
}
    
  
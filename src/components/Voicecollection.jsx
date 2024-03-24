import { useProvider } from "../context/provider"
import { useState } from "react"
import { Showmodel } from "./Showmodel"
export const VoiceCollection = () => {
  const [showModel, setShowModel] = useState(false)
  const { user_data } = useProvider()
  const showFalse = () => {
    setShowModel(false)
  }


  return (
    <div className="voice_coll_style">
      {
        user_data.map((elements, index) => (
          <>
            <div key={index}>
              <h1>{elements}</h1>
              <button onClick={() => setShowModel(true)}  >Save</button>
            </div>
            {showModel && <Showmodel closeModal={showFalse} />}
          </>
        ))
      }
      {/* <audio controls>
            <source src={generatedData} type="audio/ogg"/>
         </audio> */}
    </div>
  )


}
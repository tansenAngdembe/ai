import { useState } from "react"
import { useProvider } from "../Componentsdom"

export const Showmodel = ({ closeModal }) => {
    const {dispatch} = useProvider()
    const [value, setValue] = useState({
        inputData: "",
        inputCount: 0,
        mode: true,
       
    })
    // console.log(value.inputData)
    const showModelSubmit = (event) =>{
         event.preventDefault()
         dispatch({type:"SHOW_MODEL_SUBMIT",payload:value.inputData})
    }

    return (
        <>
            <div className="showmodels_fixed" onClick={closeModal} ></div>
            <form className="showModels" onSubmit={showModelSubmit}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <input type="text"
                        placeholder="Audio name"b
                        value={value.inputData}
                        key={value.inputData}
                        onChange={(event) => setValue(event.target.value)}
                        className="show_modal_input" />
                    <input type="submit" onClick={closeModal} disabled={value.mode}  value="Save to assets" />

                </div>
            </form>
        </>
    )

}
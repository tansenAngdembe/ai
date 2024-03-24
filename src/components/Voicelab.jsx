import { useProvider, VoiceCollection } from "../Componentsdom.jsx";


export const Voicelab = () => {
    const {dispatch,text,count,mode} = useProvider()   
   
    function textValue(event) {
        const textVal = event.target.value
        const textLen = textVal.split(/[ ]+/).join("").length
        dispatch({type:"TEXT_AREA",payload:{txt:textVal,cnt:textLen}})       
        
        if (textLen >= 15) {           
           dispatch({type:"MODE_FALSE"})
        } else {
            dispatch({type:"MODE_TRUE"})
        }
    }
    function formSubmit(event) {
        event.preventDefault(); 
        dispatch({type:"FORM_SUBMIT",payload:text})    
    }

    return (
        <div className="my-features">
            <div className="intro-feature">
                <h2>Wellcome to the power of ai voice lab</h2>
                <span>Unleash the power of our ai tool to convert you text to audio with different character.</span>
            </div>
            <div className="features-details">
                <div>
                    <div className="create-voice">
                        <div className="txt-sech">
                            <p>Text to Speech/audio</p>
                        </div>
                        <div className="setting">
                            <div className="selectAvater">
                                <p>Jack</p>
                            </div>
                            <div className="selectLang">
                                <p>eng</p>
                            </div>
                        </div>
                        <form onSubmit={formSubmit} >
                            <div className="addText">
                                <textarea name="textValue"
                                    className="userData"
                                    cols="80"
                                    rows="40"
                                    placeholder="Type or past text here."
                                    value={text}                              
                                    onChange={textValue}
                                ></textarea>

                                <div>
                                    <span>{count}</span><span>/</span><span>2000</span>
                                </div>
                            </div>
                            <div>

                                <input type="submit"
                                    className="submitButton"
                                    disabled={mode}
                                    style={{ backgroundColor:mode ? "black" : "green" }}
                                    value="Generated"
                                />

                            </div>
                        </form>
                    </div>
                </div>
                <div className="created-voice">
                    <h2>Your generate file will appear here.</h2>
                    <VoiceCollection />

                </div>
            </div >
        </div >
    );
}


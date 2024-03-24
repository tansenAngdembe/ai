import image2 from "../assets/ailadybg.png"
import audioFile from "../assets/better-day.mp3"
export const Models =(data)=>{
    return (
        <div className="models">
            <h2 className="short-dis">Voice Library</h2>
            <div className="library">
                <div className="avater-details">
                    <img src={image2} className="avater" alt="library image" />
                    <div className="av-detail">
                      <span className="avater-name">Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls className="audioTrack">
                            <source src={audioFile} type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
                <div>
                    <img src={image2} className="avater" alt="library image" />
                    <div>
                      <span>Jack</span>
                      <span>Male</span>
                      <span>Lang</span>
                    </div>
                    <div>
                        <audio controls>
                            <source src="" type="audio/ogg"/>
                        </audio>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
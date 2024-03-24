import Image from "../assets/image2.png"
import Image2 from "../assets/image.png"
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import { NavLink } from "react-router-dom"
export const Hero = () => {
    return (
        <div className="hero">
            <div className="top-hero">
                <div>
                    <div>Toolbox</div>
                    <h1>AI Toolbox Central</h1>
                    <div>With Speechtext AI, communication barriers dissolve as text can be effortlessly transformed into spoken words, offering accessibility to those with visual impairments and revolutionizing the way we interact with technology</div>
                </div>
                <div className="hero-image">
                    <img className="image" src={Image} alt="Voice image" />

                </div>
            </div>
            <div className="mid-hero">
                <h1 className="short-dis">Available features</h1>
                <div className="mid-hero-img">
                    <NavLink to="/voicelab">
                        <img className="image3" src={Image3} alt="text-to-speech img" />
                    </NavLink>
                    <img className="image3" src={Image4} alt="video gen img" />
                </div>
            </div>
            <div className="last-hero">
                <h1 className="short-dis">Ai tools for all creators</h1>
                <img className="image" src={Image2} alt="Voice image" />
            </div>
        </div>
    );
}


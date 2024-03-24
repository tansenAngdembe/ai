export const Footer = () => {
    return (
        <div>
            <footer >
                <div className="footer-info">
                    <h3>Contact Information</h3>
                    <p>123 Street Name, City, Country</p>
                    <p>Phone: 000000003</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p>Terms and conditions</p>
                    <small>Copyright © 2024 powered by Rapid-API. All Rights Reserved.</small>
                    {/* <marquee behavior="scroll" direction="right">Sudip</marquee> */}
                </div>

            </footer>
        </div>
    )
}
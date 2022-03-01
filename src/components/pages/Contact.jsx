
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa"

function Contact() {
    return (
        <main className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <div className="adress-box">
                        <h3><FaMapMarkerAlt /> Adress:</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
                            eligendi sapiente corrupti aperiam sed. Corrupti!
                        </p>
                    </div>
                    <div className="work-hours-box">
                        <h3><FaClock /> Work Hours:</h3>
                        <p>
                            Mon-Thurs:8am-8pm <br/>
                            Fri-Sun:8am-11pm
                        </p>
                    </div>
                    <div className="telephone-box">
                        <h3><FaPhone /> Telephone:</h3>
                        <p>
                            (+44) 444 44 44
                        </p>
                    </div>
                    <form className="contact-form">
                        <h3><FaEnvelope /> Message Us</h3>
                        <input type="text" placeholder="Full Name" required /><br/>
                        <input type="email" placeholder="Email" required /><br/>
                        <input type="text" placeholder="Message..." required /><br/>
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Contact
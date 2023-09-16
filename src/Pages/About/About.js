import { Footer } from "../../Components/Footer/Footer"
import image from '../../Assets/team.webp';
import './About.css';

export const About = () => {
    return (
        <>
            <div id="about">
                <div className="content">
                    <h2>Onilab, an eCommerce Website</h2>
                    <p>For more than a decade, we have been creating and rethinking online stores around the globe. We advocate the user-centric and mobile-first approach as the primary conversion driver in modern eCommerce.
                        Brands from the US, the EU, the UK, and Australia entrust us a 360-degree store development, comprising the customer experience, store management, customer acquisition & retention, and data analysis.</p>
                </div>
                <div className="profile">
                    <img src={image} alt="about" />
                </div>

            </div>
            <Footer />
        </>
    )
}
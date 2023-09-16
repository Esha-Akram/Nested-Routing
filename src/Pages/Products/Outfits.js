import { Footer } from "../../Components/Footer/Footer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Content } from '../../Components/Content/Content';
import outfit1 from '../../Assets/3am - na jaemin.jpg';
import outfit2 from '../../Assets/Winter Outfit _ Outfit _ Casual Winter Outfits _ Casual Winter Outfits Ideas _ _ Business.jpg';
import outfit3 from '../../Assets/How to be aesthetic in winters 🌨☃️ - YouTube.jpg';
import outfit4 from '../../Assets/Ootd hijab style ala korean.jpg';
import outfit5 from '../../Assets/hijab - kebaya modern hijab wisuda,kebaya modern hijab bridesmaid, kebaya bali.jpg';
import outfit6 from '../../Assets/black.jpg';
import './Products.css';

export const Outfit = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className="content">
                    <Content image={outfit4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit5} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit3} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit6} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
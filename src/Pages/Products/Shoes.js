import { Footer } from "../../Components/Footer/Footer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Content } from '../../Components/Content/Content';
import shoes1 from '../../Assets/QWEEK Women Platform Flat Canvas Sport Sneakers Shoes Kawaii Korean Spring Casual Basket Tennis Athletic Trainers Anime Lolita - lan _ 39.jpg';
import shoes2 from '../../Assets/Asterisk - Two Tone Lace-Up Sneakers _ YesStyle.jpg';
import shoes3 from '../../Assets/Butterfly Print Lace-up Front Skate Shoes.png';
import shoes4 from '../../Assets/Women Platform Sandals.jpg';
import shoes5 from '../../Assets/Raven White Booties - 35 _ White.jpg'
import './Products.css';

export const Shoes = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className="content">
                    <Content image={shoes1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={shoes2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={shoes3} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={shoes4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={shoes5} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
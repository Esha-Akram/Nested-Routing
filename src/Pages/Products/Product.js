import { Footer } from "../../Components/Footer/Footer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Content } from '../../Components/Content/Content';
import shoes1 from '../../Assets/QWEEK Women Platform Flat Canvas Sport Sneakers Shoes Kawaii Korean Spring Casual Basket Tennis Athletic Trainers Anime Lolita - lan _ 39.jpg';
import Perfume1 from '../../Assets/Victorias Secret.jpg';
import Perfume2 from '../../Assets/Gucci bloom kissed by the sun.jpg';
import outfit1 from '../../Assets/3am - na jaemin.jpg';
import outfit4 from '../../Assets/Ootd hijab style ala korean.jpg';
import makeup1 from '../../Assets/9 Lengthening Mascaras That Make Mile-Long Lashes.jpg';
import makeup2 from '../../Assets/ColourPop Bare Necessities Eyeshadow Palette Review & Swatches.jpg';
import makeup4 from '../../Assets/Rare Beauty by Selena Gomez Soft Pinch Liquid Blush Happy.png';
import Jewellery1 from '../../Assets/Necklace.jpeg';
import Jewellery4 from '../../Assets/nec.jpg';
import './Products.css';

export const Product = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className="content">
                    <Content image={shoes1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery1} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
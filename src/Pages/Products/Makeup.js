import { Footer } from "../../Components/Footer/Footer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Content } from '../../Components/Content/Content';
import makeup1 from '../../Assets/9 Lengthening Mascaras That Make Mile-Long Lashes.jpg';
import makeup2 from '../../Assets/ColourPop Bare Necessities Eyeshadow Palette Review & Swatches.jpg'
import makeup4 from '../../Assets/Rare Beauty by Selena Gomez Soft Pinch Liquid Blush Happy.png';
import makeup5 from '../../Assets/We Tested 23 of the Most Popular Under-Eye Concealers—These Are the Only Ones Worth Buying.jpg';
import './Products.css';

export const Makeup = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className="content">
                    <Content image={makeup1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup5} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
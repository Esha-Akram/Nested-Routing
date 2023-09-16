import { Footer } from "../../Components/Footer/Footer"
import { Content } from '../../Components/Content/Content';
import shoes1 from '../../Assets/QWEEK Women Platform Flat Canvas Sport Sneakers Shoes Kawaii Korean Spring Casual Basket Tennis Athletic Trainers Anime Lolita - lan _ 39.jpg';
import Perfume1 from '../../Assets/Victorias Secret.jpg';
import outfit1 from '../../Assets/3am - na jaemin.jpg';
import makeup1 from '../../Assets/9 Lengthening Mascaras That Make Mile-Long Lashes.jpg';
import Jewellery1 from '../../Assets/Necklace.jpeg';
import { SideMenu } from '../../Components/Sidmenu/SideMenu';

export const Blog = () => {
    return (
        <>
            <div id="products">
                <SideMenu />
                <div className="content">
                    <Content image={shoes1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={makeup1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={outfit1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery1} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
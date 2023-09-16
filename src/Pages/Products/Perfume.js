import { Footer } from "../../Components/Footer/Footer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Content } from '../../Components/Content/Content';
import Perfume1 from '../../Assets/Victorias Secret.jpg';
import Perfume2 from '../../Assets/Gucci bloom kissed by the sun.jpg';
import Perfume3 from '../../Assets/download.jpg';
import Perfume4 from '../../Assets/Perfume J’adore Dior Personalizado _.jpg';

export const Perfume = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className="content">
                    <Content image={Perfume4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume3} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Perfume3} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}
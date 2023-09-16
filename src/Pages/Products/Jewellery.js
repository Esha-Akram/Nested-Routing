import { Footer } from '../../Components/Footer/Footer';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import Jewellery1 from '../../Assets/Necklace.jpeg';
import Jewellery2 from '../../Assets/necl.jpg'
import Jewellery4 from '../../Assets/nec.jpg';
import Jewellery5 from '../../Assets/necla.webp';
import './Products.css';
import { Content } from '../../Components/Content/Content';
export const Jewellery = () => {
    return (
        <>
            <div id="products">
                <Sidebar />
                <div className='content'>
                    <Content image={Jewellery1} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery2} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery5} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery4} disc="Gold Neclace" price="Rs. 235" />
                    <Content image={Jewellery2} disc="Gold Neclace" price="Rs. 235" />
                </div>
            </div>
            <Footer />
        </>
    )
}

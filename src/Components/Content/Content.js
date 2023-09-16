import './Content.css';
export const Content = (props) => {
    return (
        <>
            <div id='product'>
                <img src={props.image} alt="products" />
                <p className='disc'>{props.disc}</p>
                <p className='price'>{props.price}</p>
            </div>
        </>
    )
}

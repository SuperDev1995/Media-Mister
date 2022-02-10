import { connect } from "react-redux";
import InputBoxes from "./InputBoxes";

const BuyForm = ({current, name, pName, ratings}) =>  {
    const Ratings = ratings;
    return(
        <>
        {console.log(pName), console.log(current)}
        <div className="product-details">
            <h1 className="product-title" style={{textTransform: "capitalize"}}>{ name }</h1>
            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: Ratings[pName][current] * 20 + '%' } }></div>
                    
                </div>
                <span className="ratings-text">( 2 Reviews )</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="product-price">$72.00</span>
            </div>
            <InputBoxes key={pName}/>
            <div className="product-details-action">
                <a
                    href="#"
                    className={ `btn-product btn-cart` }
                >
                    <span>add to cart</span>
                </a>
                <div className="details-action-wrapper">
                    <a href="#" className="btn-product btn-wishlist" ><span>Buy Now</span></a>
                </div>
            </div >
        </div>
        </>
    );
}

const mapStateToProps = (state) =>  ({
    ratings: state.ratings
})

export default connect(mapStateToProps, null)(BuyForm);
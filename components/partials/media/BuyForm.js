import { connect } from "react-redux";
import SelectBox from "~/components/partials/media/selectBox";
import InputBoxes from "./InputBoxes";

const BuyForm = (props) =>  {
    const Ratings = props.ratings;
    return(
        <>
        {console.log(props.pName), console.log(props.current)}
        <div className="product-details">
            <h1 className="product-title" style={{textTransform: "capitalize"}}>{ props.name }</h1>
            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: Ratings[props.pName][props.current] * 20 + '%' } }></div>
                    
                </div>
                <span className="ratings-text">( 2 Reviews )</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="product-price">$72.00</span>
            </div>
            <InputBoxes key={props.pName}/>
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
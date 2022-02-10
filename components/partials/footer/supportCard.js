import { LazyLoadImage } from "react-lazy-load-image-component";

const SupportCard = ({img, number, content}) => {
    return (
        <>
        <div className="col-sm-4 d-flex justify-content-around">
            <LazyLoadImage
                alt="Post"
                width="100"
                src={"images/support/" + img}
                threshold={ 500 }
                effect="blur"
            />
            <div>
                <p style={{fontSize: "30px"}}><strong>{number} +</strong></p>
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}

export default SupportCard;
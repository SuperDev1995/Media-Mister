import { LazyLoadImage } from "react-lazy-load-image-component";

const Payment = ({img}) =>  {
    return (
        <LazyLoadImage
        alt="Post"
        src={"images/logos/" + img}
        threshold={ 500 }
        effect="blur"
    />
    )
}

export default Payment;
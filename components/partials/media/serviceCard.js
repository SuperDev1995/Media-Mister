import ALink from "~/components/features/alink"

const ServiceCard = ({title, service}) =>  {
    return (
        <>
            <div className="text-center d-flex align-items-center flex-column justify-content-center" style={{width: "100%"}}>
                <span className="icon-box-icon">
                    <i className="icon-info-circle"></i>
                </span>
                <div className="icon-box-content d-flex align-items-center flex-column justify-content-center">
                    <h3 className="icon-box-title">Buy {title} {service}</h3>

                    <p className="product-price">Price starts from <b>$2.0</b></p>
                </div>
                <ALink href="#" className="btn btn-outline-primary btn-round">ORDER NOW</ALink>
            </div>
        </>
    )

}

export default ServiceCard
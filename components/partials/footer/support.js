
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SupportCard from './supportCard';

const Support = () =>   {
    return (
        <>
        
        <div className="row align-items-center justify-content-center">
            
            <p className="text-center"> You can find all the answers to all of your questions about our social media services in a fast way. Live and fast support for everyone! </p>
            <div className="col-sm-6 d-flex align-items-center flex-column justify-content-center">
                    
                    <LazyLoadImage
                        alt="Post"
                        width="100"
                        src="images/support/EmailSupport.png"
                        threshold={ 500 }
                        effect="blur"
                    />
                    <a href='#'><i className="icon-phone"></i>Call: +0123 456 789</a>
                    <a href='#' style={{fontSize: '20px'}}>info@mediamister.com</a>
                </div>
            <div className="col-sm-4">
                <LazyLoadImage
                    alt="Post"
                    src="images/support/ExcellentCustomerSupport.png"
                    threshold={ 300 }
                    effect="blur"
                />
            </div>
        </div>
        <hr/>
        <div className='row align-items-center mb-5 pt-3'>
            <SupportCard img="HappyCustomers.png" number="75317" content="Happy Customers"/>
            <SupportCard img="OrdersDelivered.png" number="104095" content="Orders Delivered"/>
            <SupportCard img="CountriesServed.png" number="190" content="Countries Served"/>
        </div>

        </>
    )
}

export default Support;
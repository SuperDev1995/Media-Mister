import { navItems } from "~/contents/navbar";
import OwlCarousel from "~/components/features/owl-carousel";
import { mainSlider8 } from "~/utils/data";
import ServiceCard from "./serviceCard";

const RelateServices = ({
    title,
    current
}) =>   {
    const relateServices = navItems[title].content.filter(name => name !== current);
    console.log(current);

    return (
        <>
        <h2 className="title text-center mb-5">Related Products</h2>
        {
            <OwlCarousel adClass="d-flext align-items-center owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-4 cols-xs-2 cols-1 mb-5" isTheme={ false } options={ mainSlider8 }>
                
                {
                    relateServices.map((service,idx) => <ServiceCard key={idx} title={title} service={service}/>)
                }
            </OwlCarousel>
        }
        </>
    )
}

export default RelateServices;
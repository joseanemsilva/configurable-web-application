import SectionTitle from "../Common/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";
import { ServiceListProps } from "@/types/ServiceType";

const ServiceList = (service: ServiceListProps) => {
    const {title, description, serviceList} = service;

    const midWay = Math.ceil(serviceList.length / 2);

    return (
        <>
            < div className = "w-full px-4 lg:w-1/2" >
                <SectionTitle
                    title={title}
                    paragraph={description}
                    mb="44px"
                />

                <div className="mb-12 max-w-142.5 lg:mb-0" data-wow-delay=".15s">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                            {serviceList.slice(0, midWay).map((serviceItem, index) =>(
                                 <p key={`${service.id}-${index}`} className="text-body-color mb-5 flex items-center text-lg font-medium">
                                    <span className=" text-primary mr-4 flex h-7.5 w-7.5 items-center justify-center">
                                        <FaCheckCircle />
                                    </span>
                                    {serviceItem}
                                </p>
                            ))}
                        </div>
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                            {serviceList.slice(midWay).map((serviceItem, index) =>(
                                <p key={`${service.id}-${index}`} className="text-body-color mb-5 flex items-center text-lg font-medium">
                                    <span className=" text-primary mr-4 flex h-7.5 w-7.5 items-center justify-center">
                                        <FaCheckCircle />
                                    </span>
                                    {serviceItem}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ServiceList;
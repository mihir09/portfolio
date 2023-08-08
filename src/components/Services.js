import "./ServicesStyles.css";
import ServiceData from "./ServiceData.js";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-title" data-aos="fade-up">
        <h2>What I bring?</h2>
      </div>

      <div className="service-row">
        {ServiceData &&
          ServiceData.map((service) => (
            <div
              className=" service"
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <img
                src={service.service_logo}
                alt="software_development_logo"
                className="service-logo"
              />
              <h2 className="service-name">{service.service_name}</h2>
              <p className="service-info">{service.service_description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;

import React, { useEffect, useState } from "react";
import "./resultcard.css";

export default function ResultCard({ info }) {
  const [streamingServices, setStreamingServices] = useState(null);

  useEffect(() => {
    console.log(info);
    if (info !== null || info !== undefined) {
      if (info.streamingInfo.us) {
        const services = Object.keys(info?.streamingInfo?.us);
        setStreamingServices(services);
      }
    }
  }, []);

  return (
    <div className="resultcard">
      <div className="resultcard__image">
        <img src={info?.posterURLs?.original} alt="" draggable="false" />
      </div>
      <div className="resultcard__info">
        <div className="resultcard__info__streaming">
          <h3>{`${info.title}`}</h3>
          <div className="resultcard__info__streaming__service">
            {info.type}
          </div>
          {info.year && (
            <div className="resultcard__info__streaming__service">
              {info.year}
            </div>
          )}
        </div>
        <p>{info?.overview}</p>
        <div className="resultcard__info__streaming">
          {streamingServices !== null &&
            streamingServices.map((service) => (
              <a
                key={service}
                target="_blank"
                href={info.streamingInfo.us[`${service}`][0].link}
              >
                <div className="resultcard__info__streaming__service">
                  {service}
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

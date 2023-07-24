import React from "react";
import "./Conclusion.scss";

const Conclusion = ({ weather }) => {

  return (
    <>


      {typeof weather.main != "undefined" && (  // e  && aşağısını çalıştırır. undefined'a eşitse aşağısını yani içini çalıştırmayacak && işaretinden önceki koşul doğruysa aşağısı çalışır.
        <div className="conclusion">       
          <div className="city">{weather.name} ,{weather.sys.country} </div>
          <div className="detail">
            <div className="degree">{Math.round(weather.main.temp)} C° </div>
            <div className="status">{weather.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Conclusion;

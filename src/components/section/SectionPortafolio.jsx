import { useState, useEffect } from "react";
import Card from "../card/Card";

function SectionPortafolio(props) {
  const [jsonPortafolio, setJson] = useState([]);


  function getJsonPortafolio() {
    fetch("https://aisakk.github.io/json-repository/portafolio.json")
      .then((response) => {
        if (!response.ok) {
          // Handle error: Set error state and return a rejected promise
          setJson(`Hubo un error en la peticion ${response.status}`);
          return Promise.reject(response); // Explicitly reject the promise
        } else {
          return response.json(); // Process successful response
        }
      })
      .then((data) => {
        setJson(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log the error for debugging
      });
  }

  useEffect(() => {
    getJsonPortafolio();
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Portafolio</h2>
                <p>
                Adjunto los enlaces de trabajos realizados, algunas son aplicaciones, pdf con imagenes,
                videos, para mostrar dicho trabajo, espero les guste.
              </p>
            </div>
            <div className="row">
              <div className="portfolio-container" data-aos="fade-up">
              {typeof jsonPortafolio == "string" ? (
                
                  <div className="col-lg-12 d-flex flex-column justify-content-center text-center">
                     <p className="font-weight-bold h2">{jsonPortafolio}</p>
                     <button className="btn btn-primary" onClick={getJsonPortafolio}>Reiniciar Peticion</button>
                  </div>
               
                // Display error message if present
              )  : jsonPortafolio.length === 0 ? (
                // Display loading indicator
                <div className="col-lg-12 d-flex justify-content-center text-center">
                  <p>Cargando portafolio...</p>
                </div>
              )
               : jsonPortafolio.map((data,index) => (
                <Card
                  title={data.title}
                  description={data.description}
                  banner={data.banner}
                  clase={data.className}
                  link={data.link}
                  key={index} // Add unique key for each item
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>


 {/*      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portafolio</h2>
            <p>
              Adjunto los enlaces de trabajos realizados, algunas son aplicaciones, pdf con imagenes,
              videos, para mostrar dicho trabajo, espero les guste.
            </p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">Escritorio</li>
                <li data-filter=".filter-mobile">Movil</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
            <div className="portfolio-container" data-aos="fade-up">
              {typeof jsonPortafolio == "string" ? (
                
                  <div className="col-lg-12 d-flex flex-column justify-content-center text-center">
                     <p className="font-weight-bold h2">{jsonPortafolio}</p>
                     <button className="btn btn-primary" onClick={getJsonPortafolio}>Reiniciar Peticion</button>
                  </div>
               
                // Display error message if present
              )  : jsonPortafolio.length === 0 ? (
                // Display loading indicator
                <div className="col-lg-12 d-flex justify-content-center text-center">
                  <p>Cargando portafolio...</p>
                </div>
              )
               : jsonPortafolio.map((data,index) => (
                <Card
                  title={data.title}
                  description={data.description}
                  banner={data.banner}
                  clase={data.className}
                  link={data.link}
                  key={index} // Add unique key for each item
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default SectionPortafolio;

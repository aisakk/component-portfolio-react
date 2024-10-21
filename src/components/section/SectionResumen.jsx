function SectionResumen(props) {
    const startDate = new Date('2018'); // Replace with actual start date

    return (
        <>
 {/* <!-- ======= Resume Section ======= --> */}
 <section id="resume" className="resume">
    <div className="container">
      <div className="section-title">
        <h2>Resumen</h2>
        <p>
          Empeze a trabajar en el año {startDate.getFullYear()}, primero fue como vendedor despues progrese 
          más en mi rubro y en el ambito profesional, 
          el cual trato de mantenerme actualizado. 
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Educación</h3>
          <div className="resume-item">
            <h4>Técnico Medio en Informática</h4>
            <h5>2014 - 2016</h5>
            <p><em>E.T.C "Dr Jesus Muñoz Tebar"</em></p>
            <p>
              Termine el bachiller (secundaria), con conocimiento tecnicos y programacion
              y de alli me oriente a la profesión.
            </p>
          </div>
          <div className="resume-item">
            <h4>Técnico Superior en Informática</h4>
            <h5>2017 - 2019</h5>
            <p><em>Universidad Politécnica Territorial de los Altos Mirandinos "Cecilio Acosta"</em></p>
            <p>
              Termine el tecnico superior con mas amplitud de la carrera y añadiendo conocimientos previos.
            </p>
          </div>
          <div className="resume-item">
            <h4>Ingeniería en Informática</h4>
            <h5>2019 - 2021</h5>
            <p><em>Universidad Politécnica Territorial de los Altos Mirandinos "Cecilio Acosta"</em></p>
            <p>
              Finalize la carrera en el ambito institucional, el cual pude lograr mi objetivo a corto plazo. 
            </p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Experiencia Profesional</h3>
          <div className="resume-item">
            <h4>Yahcrea</h4>
            <h5>2016-2018 (Wordpress)</h5>
            <p><em>Venezuela, Miranda, Los Teques</em></p>
            <ul>
              <li>
                Ventas de paquetes de Diseño 
              </li>
              <li>
                Desarrollo de aplicaciones Web
              </li>
              <li>
                Adquisicion de Clientes
              </li>
              <li>
                <a href="https://www.behance.net/eibram_crtv" target="_blank" rel="noopener noreferrer" title="eibram_crtv">Enlace</a>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Facturalo Peru (Freelance)</h4>
            <h5>2019 - Laravel/Vue</h5>
            <ul>
              <li>
                Desarrollo de aplicacion con una arquitectura multitenat con tenancy.dev 
              </li>
              <li>
                <a href="https://facturaloperu.com/" target="_blank" rel="noopener noreferrer" title="facturaloperu">Enlace</a>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Pasantias (PDVSA)</h4>
            <h5>2019 - Python/Web2py</h5>
            <ul>
              <li>
                Diseño de un sistema de gestion documental.               
              </li>
              <li>
                Desarrollo de un sistema de gestion documental.               
              </li>
              <li>
              <a href="https://aisakk.github.io/json-repository/pdvsa/pantallas-intevep.pdf" target="_blank" rel="noopener noreferrer" title="eibram_crtv">Enlace</a>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Leveltech (Freelance) </h4>
            <h5>2020-2021 - Nodejs/Vuejs </h5>
            <ul>
              <li>Diseñador web</li>
             <li> Desarrollo de aplicacion con threejs</li>
             <li>
              <a href="https://level-tech.co/sitio/" target="_blank" rel="noopener noreferrer" title="eibram_crtv">Enlace</a>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Kunaisoft (Freelance) </h4>
            <h5>2021-2022 - Laravel/Vuejs </h5>
            <ul>
             <li> Desarrollo de aplicacion con laravel y vuejs, mejorando features a clientes</li>
             <li>
              <a href="http://homepooling.com/" target="_blank" rel="noopener noreferrer" title="eibram_crtv">Enlace</a>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Octonove (Freelance) </h4>
            <h5>2023 - Laravel/Inertia/React </h5>
            <ul>
             <li> Desarrollo de aplicacion con laravel Inertia y Reactjs, gestor de plugins para wordpress</li>
             <li>
                <a href="https://octonove.com/" target="_blank" rel="noopener noreferrer" title="eibram_crtv">Enlace</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>{/* <!-- End Resume Section -->  */} 
        </>
    );
}

export default SectionResumen;
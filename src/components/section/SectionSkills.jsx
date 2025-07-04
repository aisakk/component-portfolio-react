function SectionSkills(props) {
  return (
    <>
      {/*  <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Habilidades</h2>
                <p>
                  He practicado con diversas tecnologias en el frontend como en
                  el backend pero decidi especializarme en estas tecnologias el
                  cual mayormente uso, ya que me permiten desarrollar el
                  producto con mas agilidad, las cuales son:
                </p>
                <br />
                <div className="row">
                  <div className="col-lg-4 col-md-3 col-sm-3">
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JAVASCRIPT</li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-3">
                    <ul>
                      <li>REACTJS</li>
                      <li>VUEJS</li>
                      <li>ANGULAR</li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-3">
                    <ul>
                      <li>PHP (Laravel)</li>
                      <li>JAVA (Spring Boot)</li>
                      <li>C#</li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-3">
                    <ul>
                      <li>WORDPRESS</li>
                      <li>POSTGRESQL</li>
                      <li>MYSQL</li>
                      <li>MONGODB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 skills-content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row row-img">
                <div className="container-img">
                  <img src="imagenes/icons8-html.svg" alt="icono html5" />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-css.svg" alt="icono css3" />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-javascript.svg"
                    alt="icono javascript"
                  />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-reaccionar-nativo.svg"
                    alt="icono react"
                  />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-ver-js.svg" alt="icono vue" />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-angular.svg" alt="icono angular" />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-php-48.png" alt="icono php" />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-c-sharp-logotipo.svg" alt="icono csharp" />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-spring-boot-48.png"
                    alt="icono spring-boot"
                  />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-logotipo-de-java-coffee-cup.svg"
                    alt="icono java"
                  />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-laravel-64.png"
                    alt="icono laravel"
                  />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-wordpress.svg"
                    alt="icono wordpress"
                  />
                </div>
                <div className="container-img">
                  <img
                    src="imagenes/icons8-postgresql.svg"
                    alt="icono postgresql"
                  />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-mysql.svg" alt="icono mysql" />
                </div>
                <div className="container-img">
                  <img src="imagenes/icons8-mongodb.svg" alt="icono mongodb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Skills Section -->  */}
    </>
  );
}

export default SectionSkills;

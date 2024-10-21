

const SectionAbout = () => {
const startDate = new Date('2017'); // Replace with actual start date
  const endDate = new Date(); // Replace with actual end date
  const yearsWorked = endDate.getFullYear() - startDate.getFullYear();
  const birthday = endDate.getFullYear() - 1998;
    return (
        <>
{/*   <!-- ======= About Section ======= --> */}
  <section id="about" className="about">
    <div className="container">
      <div className="section-title">
        <h2>Sobre mi</h2>
        <p>
          Soy un apasionado de la tecnología con {yearsWorked} años de experiencia en el campo. 
          He trabajado en una variedad de proyectos, en desarrollo de software. desarrollo web y desarrollo movil.
           Me gusta aprender nuevas tecnologías y compartir mi conocimiento con los demás
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="imagenes/isaacCompress.jpg" className="img-fluid" alt="Foto de Isaac Santaella" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Diseñador UI &amp; Desarrollador web.</h3>
          <p className="fst-italic">
            Me gusta diseñar aplicaciones y el modelo logico de la Base de datos, tambien desarrollar aplicaciones web, 
            con la capacidad de resolver un problema en especifico, 
            el cual permita al cliente estar satisfecho con el producto. 
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Cumpleaños:</strong>
                  <span>4 de Mayo de 1998</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Ciudad:</strong>
                  <span>Los Teques, Miranda, Venezuela</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Edad:</strong>
                  <span>{birthday}</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
               
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Grado Universitario:</strong>
                  <span>Ingeniero en Informática</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Correo:</strong>
                  <span>santaellaisaac2@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Freelance:</strong>
                  <span>Disponible</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Soy el tipo de persona que le gusta resolver el problema principal desglozandolo en tareas mas pequeñas para ir avanzando y permita ver el progreso del proyecto. Puedo trabajar de modo Freelance y presencial, dependiendo de las circunstancias y el tiempo que requiera dicho proyecto.

            Soy una persona introspectiva, el cual prefiere siempre decir y que le digan la verdad, para que el crecimiento de ambos lados pueda ser equitativo, cualitativo y cuantitativo. 
          </p>
        </div>
      </div>
    </div>
  </section>{/* <!-- End About Section --> */}
        </>
    );
};

export default SectionAbout;
function Card({ title, description, banner, link, clase }) {
  const imgStyle = {
    objectFit: "cover",
    height: "250px",
  };
  return (
  <div style={{ height: "250px", width: "100%"}}>
    <a href={link} target="_blank">
      <div className={`portfolio-item ` + clase}>
        <div className="portfolio-wrap rounded d-flex justify-content-center align-items-center">
          <img
            style={imgStyle}
            src={`${banner}`}
            className="img-fluid rounded"
            alt={`${banner}`}

          />
          <div className="portfolio-info">
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
          </div>
          <div className="portfolio-links">
            <a href={`${link}`} title={`${link}`} target="_blank" >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}

export default Card;

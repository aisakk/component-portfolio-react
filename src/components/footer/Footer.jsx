function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
          </div>
          <div className="credits">
            Diseñado por <a href="https://github.com/aisakk">Isaac Santaella</a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Footer;

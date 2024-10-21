import SectionAbout from "../section/SectionAbout";
import SectionSkills from "../section/SectionSkills";
import SectionResumen from "../section/SectionResumen";
import SectionPortafolio from "../section/SectionPortafolio";

function Main() {
  return (
    <>
      <main id="main">
        <SectionAbout />
        <SectionSkills />
        <SectionResumen />
        <SectionPortafolio />
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Main;

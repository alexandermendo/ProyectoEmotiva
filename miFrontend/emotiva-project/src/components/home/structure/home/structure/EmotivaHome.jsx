import { Entertainment } from "../entertainment/Entertainment";
import { Footer } from "../footer/Footer";
import { NavbarUsuario } from "../navbar/usuario/NavbarUsuario";
import { Relevante } from "../relevante/Relevante";
import { Slider } from "../slider/Slider";
import { SportEnt } from "../sportEnt/SportEnt";
import { Staff } from "../staff/Staff"
import { StyleTop } from "../styletop/StyleTop";

export const EmotivaHome = () => {
  return (
    <div>
      <NavbarUsuario />
      <Slider/>
      <Staff/>
      <Relevante/>
      <StyleTop/>
      <SportEnt/>
      <Entertainment/>
      <Footer/>
    </div>
  );
};
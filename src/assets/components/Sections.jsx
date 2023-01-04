import { Component } from "react";
import Section1 from "./Section1";
import "./Sections.css";

class Sections extends Component {
  render() {
    return (
      <>
        <Section1 />
        <Section1 />
        <Section1 />
        <Section1 />
      </>
    );
  }
}
export default Sections;

import HeroSection from "../components/HeroSection";
import "./accelerator.scss";
export default function ecoaccelerator() {
  return(
  <>
    <HeroSection
      title="Athena Accelerators"
      description="Speed up your Engineering Change workflows with intelligent automation. Our ECO Accelerators handle every step—tracking, redlining, approvals, and execution—while ensuring traceability and compliance. Built to support MES environments and scale with your needs."
      image="/assets/images/eco-accelerators.png"
      align="center"
      buttonText="Contact Us"
      buttonLink="/contact"
    />
    <section className="accelerator-intro">
      <div className="container">
        <h2>Reimagining ECO Change with Automation</h2>

        <p>
          Engineering changes are a part of growth—but executing them shouldn’t
          slow you down.
        </p>

        <p>
          At Athena, we’ve developed a suite of automation accelerators
          <strong>
            {" "}
            specifically engineered to work seamlessly within MES environments
          </strong>
          , streamlining every step of the ECO process.
        </p>

        <p>
          From smart validations to cross-system data migration and automated
          testing, our tools bring precision, speed, and transparency to change
          implementation— while also generating downloadable reports for audit,
          compliance, and traceability.
        </p>
      </div>
    </section>
  </>
  );
}

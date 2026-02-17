import Image from "next/image";
import "./siemens.scss";

export default function SiemensOpcenter() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="soc-hero">
        <Image
          src="/assets/images/siemens-opcenter-hero.png"
          alt="Siemens Opcenter Hero"
          fill
          priority
          className="soc-hero__img"
        />

        <div className="soc-hero__overlay" />

        <div className="soc-hero__content">
          <h1>Siemens Opcenter MES</h1>
          <p>
            Experienced in implementing and upgrading Opcenter MES across
            versions, from Camstar 3.2 to Opcenter 2410.
          </p>

          <button className="soc-hero__btn">Contact Us</button>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="soc-description">
        <div className="soc-description__card">
          <p>
            Siemens Opcenter (formally known as Siemens Camstar) is a
            comprehensive Manufacturing Solution enabling a complete
            digitalization of manufacturing operations.   All Opcenter MES
            Solutions provide end-to-end control and visibility into the
            production manufacturing process. As a Siemens Alliance Partner,
            Athena leverages Industry specific Opcenter solutions for;
            Semiconductor, Electronics, Medical Devices and Discrete
            Manufacturing.   A typical MES Implementation will replace multiple
            disconnected point solutions with one, fully integrated and
            centralized MES factory system. Ultimately, MES Opcenter seamlessly
            operates across multiple functional areas and roles with built-in
            integration capabilities with all factory equipment types, as well
            as both ancillary factory and business systems.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="soc-services">
        <div className="soc-services__container">
          <h2 className="soc-services__title">The Best Service</h2>

          <div className="soc-services__grid">
            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens Opcenter Execution – Semiconductor</h3>
                <p>
                  Opcenter Execution Semiconductor replaces legacy manufacturing
                  systems that haven’t kept pace with semiconductor demands.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>

            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens Opcenter Execution – Electronics</h3>
                <p>
                  A comprehensive manufacturing solution for the electronics
                  industry.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>

            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens Opcenter Execution – Medical Devices</h3>
                <p>
                  A unified and holistic application to drive digital
                  initiatives and Industry 4.0 benefits.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>

            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens Opcenter Execution – Discrete</h3>
                <p>
                  Global MES platform for production and quality management.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>

            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens APS – Advance Planning & Scheduling</h3>
                <p>
                  Optimizes jobs on the shop floor considering variability and
                  resource constraints.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>

            <div className="soc-card">
              <div className="soc-card__img" />
              <div className="soc-card__content">
                <h3>Siemens Mendix</h3>
                <p>
                  Low-code and analytics platform to design KPIs and dashboards
                  for better visibility.
                </p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXPERTISE SECTION */}
      <section className="soc-expertise">
        <div className="soc-expertise__container">
          <div className="soc-expertise__content">
            <h2>Athena Opcenter Siemens Expertise</h2>

            <p>
              Since 2011, Athena’s expertise in Camstar/Opcenter has expanded
              across diverse industries such as Semi Conductors, Medical
              Devices, Electronics, and Clean energy. Our experience includes
              working with product versions ranging from v3.x to v8.9, and
              versions 2304, 2310, and 2404 of Opcenter, MIO, and APS.
            </p>

            <p>
              Our team possesses specialized skills in Designer, Portal Studio,
              APS, and Mendix.
            </p>
            {/*  */}

            <ul className="soc-expertise__list">
              <li>Delivering Camstar / Opcenter solutions since 2011</li>
              <li>
                Experience across multiple regulated and high-tech industries
              </li>
              <li>
                Deep version coverage: 3.x → 8.x, 2304 → 2504 (Opcenter, MIO,
                APS){" "}
              </li>
            </ul>
          </div>

          <div className="soc-expertise__timeline">
            <img
              src="/assets/images/Seimens-Roadmap.png"
              alt="Opcenter Timeline"
            />
          </div>
        </div>
      </section>
      {/* TEAM SECTION */}
      <section className="soc-team">
        <div className="soc-team__container">
          <h2 className="soc-team__title">
            Athena Opcenter Siemens Expertise Team
          </h2>

          <div className="soc-team__image">
            <img
              src="https://athenatec.com/wp-content/uploads/2024/08/siemens-img.jpg"
              alt="Athena Opcenter Team"
            />
          </div>
        </div>
      </section>

      {/* FACTORY OVERVIEW SECTION */}
      <section className="soc-factory">
        <div className="soc-factory__container">
          <h2 className="soc-factory__title">
            Factory System Overview and Integration
          </h2>

          <div className="soc-factory__grid">
            <div className="soc-factory__card">
              <div className="soc-factory__stars">★★★★★</div>
              <p>
                The Factory MES System has become the heart of the Industry 4.0
                / Smart Factory trend. Unlike ERP / SFC systems, MES Systems
                effectively Control and Track the flow of Product in the factory
                with full traceability. MES Systems also intelligently
                communicate with Factory Equipment, Automation Cells and a
                variety of Quality and other Factory Applications, resulting in
                a more Automated Production Process. At Athena, Siemens Opcenter
                MES is the Centerpiece of our MOM Consulting Practice. With
                Siemens, a well established leader in MOM / Manufacturing
                Operations Management, we are likewise proud to be a Siemens
                Strategic Alliance Partner.
              </p>
            </div>

            <div className="soc-factory__card">
              <div className="soc-factory__stars">★★★★★</div>
              <p>
                Factory Systems Integration creates intelligent connections
                between Factory Systems and Factory Assets. The key is to first
                align around the Production Life Cycle and then to digitally
                connect all the Digitally capable Assets within for each
                Operational step. In the Smart Factory, PLM, ERP, MES and CMMS
                are integrated along their respective process life Cycles.
                Likewise, to gain the value of a Smart Factory, the MES System
                is also integrated with; Factory Equipment, Quality Systems,
                Automation Controls and other Digitally capable Factory Systems
                to achieve orders of magnitude in Production benefits. These
                include; Higher Yield, Increased Production output, reduced
                human dependencies and Product cost.
                In Summary, The Smart Factory is essentially a ‘Connected Factory’.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* ENTERPRISE PRACTICE SECTION */}
<section className="soc-practice">
  <div className="soc-practice__wrapper">

    <h2 className="soc-practice__title">
      Enterprise Systems Practice MES and Factory Systems
    </h2>

    <div className="soc-practice__grid">

      {/* Card 1 */}
      <div className="soc-practice__card">
        <div className="soc-practice__icon">
          <img src="/assets/icons/implementation1.svg" alt="" />
        </div>
        <h3>Implementation</h3>
        <ul>
          <li>WIP Workflow Management</li>
          <li>Asset and Durables</li>
          <li>Dispatching</li>
          <li>Product Costing</li>
          <li>ERP / PLM Integration</li>
          <li>Equipment Integration</li>
        </ul>
      </div>

      {/* Card 2 (Highlighted like screenshot) */}
      <div className="soc-practice__card soc-practice__card--active">
        <div className="soc-practice__icon">
          <img src="/assets/icons/implementation2.svg" alt="" />
        </div>
        <h3>Implementation</h3>
        <ul>
          <li>Project Management</li>
          <li>Requirements / Design</li>
          <li>Process Reengineering</li>
          <li>Systems Integration Test</li>
          <li>Custom Development</li>
          <li>Automated Testing</li>
          <li>User Training</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="soc-practice__card">
        <div className="soc-practice__icon">
          <img src="/assets/icons/support.svg" alt="" />
        </div>
        <h3>Application Support</h3>
        <ul>
          <li>Support all MES Modules</li>
          <li>Ticket based Tracking</li>
          <li>Troubleshooting</li>
          <li>Enhancements / Reporting</li>
        </ul>
      </div>

    </div>
  </div>
</section>


    </main>
  );
}

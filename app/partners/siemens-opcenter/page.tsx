import Image from "next/image";
import "./siemens.scss";
import ScrollReveal from "@/app/components/ScrollReveal";
// import { Link } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/app/components/CTASection";
const services = [
  {
    title: "Siemens Opcenter Execution – Semiconductor",
    desc: `Opcenter Execution Semiconductor replaces legacy manufacturing
systems that haven’t kept pace with semiconductor demands.`,
    video:
      "https://athenatec.com/wp-content/uploads/2024/07/Semi-conductor-1.mp4",
  },
  {
    title: "Siemens Opcenter Execution – Electronics",
    desc: `A comprehensive manufacturing solution for the electronics industry.`,
    video: "https://athenatec.com/wp-content/uploads/2024/07/electronics.mp4",
  },
  {
    title: "Siemens Opcenter Execution – Medical Devices",
    desc: `A unified and holistic application to drive digital initiatives and Industry 4.0 benefits.`,
    video:
      "https://athenatec.com/wp-content/uploads/2024/07/Siemens-Medical.mp4",
  },
  {
    title: "Siemens Opcenter Execution – Discrete",
    desc: `Global MES platform for production and quality management.`,
    video: "https://athenatec.com/wp-content/uploads/2024/07/Discrete-1-1.mp4",
  },
  {
    title: "Siemens APS – Advance Planning & Scheduling",
    desc: `Optimizes jobs on the shop floor considering variability and resource constraints.`,
    video: "https://athenatec.com/wp-content/uploads/2024/07/aps.mp4",
  },
  {
    title: "Siemens Mendix",
    desc: `Low-code and analytics platform to design KPIs and dashboards.`,
    video:
      "https://athenatec.com/wp-content/uploads/2024/11/6747645_Animation_Diagrams_1280x720.mp4",
  },
];
const testimonials = [
  {
    company: "InnovaFlex Foundry",
    name: "Jon Baker",
    role: "IT Manager – InnovaFlex Foundry",
    image: "https://athenatec.com/wp-content/uploads/2024/10/innova.jpg",
    text: `Athena provides expertise in MES and beyond.  They have proven extremely easy to work with, offering project management, SW development, integration, support and expertise ensuring projects are completed successfully.  I strongly recommend Athena for MES implementations or Opcenter upgrades.`,
  },
  {
    company: "Nevro",
    name: "Alonso Moya",
    role: "Site Director, Nevro",
    image: "/assets/Clients/Nevro.png",
    text: `Having a commercial partner is vital for an exemplary, seamless implementation, and throughout the development and setup of MES in Nevro Costa Rica, Athena has been a critical piece. With high support for our needs, Athena was always proactive in looking for critical and strategic solutions to the Business’s needs and taking care of the integrity and structure of the systems. It was a satisfactory experience to our liking due to all the knowledge transmitted during this journey of implementing MES in our plant.
An excellent partner for us.`,
  },
  {
    company: "Dexcom",
    name: "Wei Wu",
    role: "Senior Manager, IT",
    image: "/assets/Clients/Dexcom.png",
    text: `“I strongly recommend Athena based on their exceptional performance and successful completion of our recent Camstar v8.9 launch. Their dedication, expertise, and professionalism have greatly contributed to the success of our project and have exceeded our expectations.
Throughout the project, Athena demonstrated an in-depth understanding of our unique requirements and objectives. They showcased their comprehensive knowledge of manufacturing processes, industry best practices, and Camstar latest version 8.9 solutions. Their ability to translate our complex needs into an efficient and tailored manufacturing execution system was truly remarkable. We have experienced improved productivity, streamlined workflows, enhanced quality control, and real-time visibility into our manufacturing processes. Their commitment to transparency and open communication fostered a strong working relationship, allowing us to have full confidence in their abilities.
Moreover, the post-implementation hypercare support provided by Athena has been exceptional. They have been responsive to our ongoing needs, promptly addressing any questions or concerns that arise. Their dedication to customer satisfaction and their commitment to ensuring the software’s continued optimal performance are highly commendable`,
  },
  {
    company: "Marki Microwave",
    name: "Marki Microwave",
    role: "",
    image: "/assets/Clients/Marki.png",
    text: `We reviewed several MES suppliers and selected Siemens Opscenter MES / APS as the best fit for Marki Microwave. Selecting the platform is part of the journey but a successful implementation requires an experienced system integrator.
We choose Athena Technologies as our implementation partner as they had several successful implementations in the electronics / medical devices customers. The company resourced our project with an experienced project manager and technical team who were flexible and collaborated well with our small internal team to ensure we get the solution that fits the needs of our manufacturing operations. We used a phase and sprint approach to complete our implementation in a 9-month time frame.
We will continue to work together with Athena to carry out continuous process improvement and harmonization to deliver greater efficiency and quality to meet our customers’ demands today and well into the more digital future.`,
  },
  {
    company: "Viavi",
    name: "Viavi",
    role: "",
    image: "/assets/Clients/VLAVI.png",
    text: `Through Athena’s exhaustive efforts and deep domain expertise, we were able to implement a ‘Viavi Aligned Solution’ of Siemens Opcenter 8.x that met our complex MES System requirements. This was done via streamlined manufacturing processes, user friendly UI/ UX, seamless integration with our factory equipment / metrology and a single source for factory insights. Athena utilized Industry 4.0 foundations and architected a cookie-cutter approach that is ready for all our global factories.`,
  },
  {
    company: "MiaSolé Hi-Tech",
    name: "Siva Papaiya",
    role: "Senior Director, MiaSolé Hi-Tech",
    image: "/assets/Clients/Miasole.png",
    text: `Athena team has unrivalled proficiency in manufacturing and their commitment towards successful execution has been a very positive experience.`,
  },

  {
    company: "Emcore",
    name: "Jamie Lohrungruang",
    role: "VP of Information Technology",
    image: "/assets/Clients/Emcore.png",

    text: `We were very fortunate to have found Athena as they helped us turnaround our Opcenter Semi 8.9 MES project after our initial attempt working with a different Solution Integrator was unsuccessful. Their expertise of the OpCenter product along with their experience in semiconductor allowed them to help us completely change the design of the solution to better leverage best practices and meet our business needs. We cannot be happier working with Athena, and can see that they went above and beyond what was documented to make sure we are happy with the solution. They really came through for us. You will not be disappointed working with them.`,
  },

  {
    company: "Conformis",
    name: "Conformis",
    role: "",
    image: "/assets/Clients/Conformis.png",
    text: `A few years ago, Conformis was looking for a boutique Camstar consulting SI. Athena was selected and has continuously delivered on all projects, There was no red tape. as with larger organizations, and while still receiving all the proper documentation and validation.
“I am happy to consider Athena a Conformis partner”.`,
  },
  {
    company: "Neophotonics",
    name: "Aim Khan",
    role: "CIO / VP Neophotonics",
    image: "/assets/Clients/Neophotonics.png",
    text: `Athena consistently exceeds our business targets, overcomes challenges and goes the extra mile.~ Great Company, Excellent Team and Partner.`,
  },
];

const logos = [
  "/assets/Clients/Conformis.png",
  "/assets/Clients/Dexcom.png",
  "/assets/Clients/Edtech.jpg",
  "/assets/Clients/Emcore.png",
  "/assets/Clients/Enovix.png",
  "/assets/Clients/Finisar.png",
  "https://athenatec.com/wp-content/uploads/2024/10/innova.jpg",
  "/assets/Clients/Lumentum.png",
  "/assets/Clients/Marki.png",
  "/assets/Clients/Miasole.png",
  "https://athenatec.com/wp-content/uploads/2024/12/06.png",
  "/assets/Clients/Neophotonics.png",
  "/assets/Clients/Nevro.png",
  "/assets/Clients/Penumbra.png",
  "/assets/Clients/PSi-Quantum.png",
  "/assets/Clients/View-Dynamic-Glass.png",
  "/assets/Clients/VLAVI.png",
];
const caseStudies = [
  {
    id: 1,
    title: "Surgical Plan Approval",
    tag: "Case Study #1",
    description:
      "Our Medical device customer had an external system to get approval for Surgical Plans from the surgeon which had to be integrated to Opcenter in several Operations.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/12/freepik-export-202412191322302WRy-1920x1280.jpeg",
  },
  {
    id: 2,
    title: "Factory Separation",
    tag: "Case Study #2",
    description:
      "Customer has Multiple Factories where they manufacture different devices. Required to Display Modeling and WIP Data based on the Employee Role and Factory.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/12/factory-worker-uniform-presenting-new-products-manager-1920x1280.jpg",
  },
  {
    id: 3,
    title: "Manage Shipper Case",
    tag: "Case Study #3",
    description:
      "Customer had a requirement to implement Shipper case association to the Container during Packaging Process​.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/12/freepik-export-20241219133957E1bW-1920x1280.jpeg",
  },
  {
    id: 4,
    title: "Optimize Opcenter Execution Electronics Production Client",
    tag: "Case Study #4",
    description:
      "Production Client which is a main UI for Operator in Electronics Suite was Optimized to cover maximum WIP transactions​.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/12/close-up-computer-keyboard-1920x1280.jpg",
  },
  {
    id: 5,
    title: "Optimize Opcenter Execution Semiconductor Suite WIP Main",
    tag: "Case Study #5",
    description:
      "WIP Main page which is Key UI for all the WIP transactions in Semi Suite was optimized to reduce clicks and scrolls and enhanced color codes for better user experience and quick navigations​.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-10.11.32-e1734616151384.jpeg",
  },
  {
    id: 6,
    title: "Data Correction",
    tag: "Case Study #6",
    description:
      "Data Correction: Customer had a requirement to correct the collected data and also record Audit Trail for the same.",
    image:
      "https://athenatec.com/wp-content/uploads/2024/12/businessman-compliance-rules-law-regulation-policy-virtual-screen-documents-with-checkbox-lists-1920x1277.jpg",
  },
];
const galleryItems = [
  {
    title: "Realize Live Americas 2025",
    image: "https://athenatec.com/wp-content/uploads/2025/06/Media-9-768x576.jpeg",
    slug: "/gallery/realize-live-americas-2025",
  },
  {
    title: "Americas Partner Conference 2025",
    image: "https://athenatec.com/wp-content/uploads/2024/11/Media-2-768x576.jpg",
    slug: "/gallery/americas-partner-conference-2025",
  },
  {
    title: "Realize Live Americas 2024",
    image: "https://athenatec.com/wp-content/uploads/2024/11/Media-26-768x576.jpg",
    slug: "/gallery/realize-live-americas-2024",
  },
  {
    title: "Realize Live Europe 2024",
    image: "https://athenatec.com/wp-content/uploads/2024/11/Media-17-768x1024.jpg",
    slug: "/gallery/realize-live-europe-2024",
  },
  {
    title: "Realize Live Americas 2023",
    image: "https://athenatec.com/wp-content/uploads/2024/12/shared-image-8-1-768x576.jpg",
    slug: "/gallery/realize-live-americas-2023",
  },
];
export default function SiemensOpcenter() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="soc-hero">
        <Image
          src="/assets/images/siemens.webp"
          alt="Siemens Opcenter Hero"
          fill
          priority
          className="soc-hero__img"
        />

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

      <section className="soc-services">
        <div className="soc-services__container">
          <h2 className="soc-services__title">The Best Service</h2>

          <div className="soc-services__grid">
            {services.map((service, index) => (
              <div className="soc-card" key={index}>
                <div className="soc-card__media">
                  <video
                    src={service.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                </div>

                <div className="soc-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#">Learn More →</a>
                </div>
              </div>
            ))}
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
                human dependencies and Product cost. In Summary, The Smart
                Factory is essentially a ‘Connected Factory’.
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
                <img src="/assets/icons/process.png" alt="" />
              </div>
              <h3>Process / Modules</h3>
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
            <div className="soc-practice__card">
              <div className="soc-practice__icon">
                <img
                  src="/assets/icons/Implementation.png"
                  alt="Application-Support"
                />
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
                <img src="/assets/icons/Application-Support.png" alt="" />
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
      <section className="siemens-analytics">
        <div className="container">
          {/* Top Process Flow Image */}
          <div className="analytics-diagram">
            <Image
              src="https://athenatec.com/wp-content/uploads/2024/11/07-4.png"
              alt="Manufacturing Process Flow"
              width={1200}
              height={600}
              priority
            />
          </div>

          {/* Title */}
          <div className="analytics-content">
            <h2 className="analytics-title">Analytics</h2>

            <p>
              Industry 4.0 Smart Factory Analytics add enormous value to the
              Manufacturing Enterprise versus historical reporting platforms.
              Smart Factory Analytics collect data from factory digital assets
              and systems enabling production visibility in real-time,
              trend-based, descriptive and predictive formats.
            </p>

            <p>
              One of the key benefits is driving production toward KPI targets
              and enabling accurate root cause analysis. Organizations strive
              for yield, equipment utilization, and quality performance.
            </p>

            <p>
              Smart Factory Analytics provide daily cycles of learning with
              rapid issue identification to support faster remediation.
            </p>
          </div>

          {/* Title */}
          <h2 className="analytics-main-title">Smart Factory Analytics</h2>

          {/* Top Infographic */}
          <div className="analytics-block">
            <Image
              src="https://athenatec.com/wp-content/uploads/2024/11/10-1.png"
              alt="Smart Factory Analytics"
              width={1400}
              height={700}
            />
          </div>

          {/* DMAIC Section */}
          <div className="analytics-block dmaic-section">
            <Image
              src="https://athenatec.com/wp-content/uploads/2024/11/04-6.jpg"
              alt="DMAIC Process"
              width={1200}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <h2 className="clients-title">Our Customer</h2>
          </div>
          <div className="logos-grid">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <Image src={logo} alt="client logo" width={180} height={100} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="siemens-testimonial-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="testimonial-title">Testimonial</h2>
          </ScrollReveal>

          <div className="testimonial-grid">
            {testimonials.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="testimonial-card">
                  <div className="card-header">
                    <div className="company-info">
                      <h4>{item.company}</h4>
                    </div>

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.company}
                        className="testimonial-logo"
                      />
                    )}
                  </div>

                  <div className="card-body">
                    <p>{item.text}</p>
                  </div>

                  <div className="card-footer">
                    <strong>{item.name || ""}</strong>
                    {item.role && <span>{item.role}</span>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="case-studies-section">
        <div className="container">
          <h2 className="section-title">Case Studies</h2>

          <div className="case-grid">
            {caseStudies.map((item) => (
              <div key={item.id} className="case-card">
                <div className="case-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                  />
                </div>

                <div className="case-content">
                  <h3>{item.title}</h3>
                  <span className="case-tag">{item.tag}</span>
                  <p>{item.description}</p>
                  <Link href="#" className="case-link">
                    Download Now
                    <ArrowUpRight className="arrow" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Link href={item.slug} key={index} className="gallery-card">
                <div className="image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <div className="overlay">
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={
          <>
            A New <br /> Requirement?
          </>
        }
        description="Connect us for expert solutions in MES, PLM, ERP, and more. Reach out today."
        buttonText="Contact Us"
        buttonLink="/contact"
        note="We typically respond within 24 hours."
        backgroundImage="/assets/images/new-req.jpg"
      />
    </main>
  );
}

import Image from "next/image";
import "./about.scss";

export default function AboutPage() {
  const journey = [
    {
      year: "2011",
      title: "Established Foundations in Fremont California",
      image: "/images/journey-2011.jpg",
    },
    {
      year: "2015",
      title: "Expanding Capabilities",
      image: "/images/journey-2015.jpg",
    },
    {
      year: "2017",
      title: "Achieved ISO 9001 Certification",
      image: "/images/journey-2017.jpg",
    },
    {
      year: "2020",
      title: "Global Growth and Expanded Expertise",
      image: "/images/journey-2020.jpg",
    },
  ];

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/about-hero.jpg"
          alt="About Hero"
          fill
          className="hero-img"
        />
        <div className="overlay" />
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Delivering innovative solutions that drive measurable business
            growth.
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS & ABOUT */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Achievements and Success</h2>

          <div className="about-grid">
            <div className="about-text">
              <h3>About Us</h3>
              <p>
                Athena Technology Solutions provides advanced MES solutions
                tailored for industries such as Medical devices, Semiconductors,
                Discrete manufacturing, and Electronics manufacturing.
              </p>
              <p>
                Athena is an Industry 4.0 Enterprise Manufacturing Solutions
                Provider, assisting companies and driving their Industry 4.0
                roadmap centered on Digital Transformation.
              </p>
              <p>
                Our practice includes a full suite of Professional Services
                implementing PLM, MES, ERP, CMMS, and Smart Factory Analytics.
              </p>
            </div>

            <div className="about-image">
              <Image
                src="/images/about-team.jpg"
                alt="Team"
                fill
                className="img"
              />
            </div>
          </div>

          <h3 className="journey-title">Our Journey of Growth & Excellence</h3>

          <div className="journey-grid">
            {journey.map((item, i) => (
              <div key={i} className="journey-card">
                <div className="card-img">
                  <Image
                    src={item.image}
                    alt={item.year}
                    fill
                    className="img"
                  />
                </div>
                <h4>{item.year}</h4>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* VISION & MISSION */}
      <section className="vision-section">
        <div className="container vision-grid">
          <div className="vision-image">
            <Image src="/images/vision.jpg" alt="Vision" fill className="img" />
          </div>

          <div className="vision-content">
            <h3>Our Vision & Mission</h3>
            <p>
              At Athena, we aspire to be a trusted leader in the realms of IIoT
              and Industry 4.0. Our goal is to empower businesses by digitally
              connecting their enterprises, enabling them to thrive in an
              increasingly competitive landscape.
            </p>
            <p>
              We are committed to delivering transformative digital
              manufacturing solutions that enhance operational efficiency and
              drive innovation.
            </p>
            <p>
              Through our dedication to excellence and passion for technology,
              we aim to redefine the future of manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="services-section">
        <div className="container">
          <h4 className="small-heading">What we do</h4>
          <h2 className="big-heading">
            Comprehensive Solutions and Tailored Services
          </h2>
          <p className="section-desc">
            The core of our practice includes a full Suite of Professional
            Services, implementing integrated PLM, MES, ERP, CMMS, and Smart
            Factory Analytics, as well as Managed Services tailored to fit
            Customer needs.
          </p>

          <div className="services-grid">
            {[
              "Industries Semiconductor",
              "Electronics",
              "MED Devices",
              "LED / Battery Manufacturing (Clean energy)",
              "Solar",
            ].map((item, i) => (
              <div key={i} className="service-card">
                <div className="card-top" />
                <div className="card-bottom">
                  <h4>{item}</h4>
                  <span>See More &gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* OUR CUSTOMERS */}
      <section className="customers-section">
        <div className="container">
          <h2 className="customers-title">Our Customers</h2>

          <div className="customers-grid">
            {[
              "siemens.png",
              "critical.png",
              "penumbra.png",
              "nevco.png",
              "dexcom.png",
              "conformis.png",
              "marki.png",
              "innova.png",
              "psi.png",
              "entegis.png",
              "lumetum.png",
              "emcore.png",
              "viavi.png",
              "areva.png",
              "intel.png",
              "philips.png",
              "micron.png",
              "honeywell.png",
              "tdk.png",
              "daikin.png",
            ].map((logo, i) => (
              <div key={i} className="customer-logo">
                <img src={`/images/customers/${logo}`} alt="Customer Logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title">Testimonial</h2>

          <div className="testimonial-grid">
            {[
              {
                company: "InnovaFlex Foundry",
                name: "Jon Baker",
                role: "IT Manager – InnovaFlex Foundry",
                text: "Athena provides expertise in MES and beyond. They have proven extremely easy to work with, offering project management, development, integration and support ensuring projects are completed successfully.",
              },
              {
                company: "Nevro",
                name: "Alonso Moya",
                role: "Site Director – Nevro",
                text: "Having a commercial partner is vital for seamless implementation. Athena was proactive in providing strategic solutions and supporting business needs.",
              },
              {
                company: "Dexcom",
                name: "Wei Wu",
                role: "Senior Manager – IT",
                text: "Athena demonstrated exceptional expertise and professionalism throughout our Camstar launch.",
              },
              {
                company: "MiaSole",
                name: "Siva Papaiya",
                role: "Senior Director – MiaSole",
                text: "Athena’s team has unrivalled proficiency in manufacturing and commitment towards successful execution.",
              },
              {
                company: "Neophotonics",
                name: "Aim Khan",
                role: "CIO / VP",
                text: "Athena consistently exceeds business targets and overcomes challenges with excellence.",
              },
              {
                company: "Marki Microwave",
                name: "Operations Team",
                role: "Manufacturing Operations",
                text: "Selecting Athena as our implementation partner was the right decision. Professional and reliable team.",
              },
              {
                company: "Conformis",
                name: "Leadership Team",
                role: "Manufacturing Systems",
                text: "Athena delivered all projects efficiently with proper documentation and validation.",
              },
              {
                company: "Viavi",
                name: "Engineering Head",
                role: "Manufacturing",
                text: "Athena delivered streamlined processes and seamless integration across our systems.",
              },
              {
                company: "GLO-USA",
                name: "Plant Director",
                role: "Operations",
                text: "Great partnership with Athena. Their dedication and innovative approach improved our shop floor management.",
              },
              {
                company: "Emcore",
                name: "Jamie Lohrungruang",
                role: "VP of Information Technology",
                text: "Athena completely transformed our MES implementation and exceeded expectations.",
              },
            ].map((item, i) => (
              <div key={i} className="testimonial-card">
                <div className="card-header">
                  <h4>{item.company}</h4>
                </div>

                <div className="card-body">
                  <p>{item.text}</p>
                </div>

                <div className="card-footer">
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="cta-wrapper">
          <div className="cta-overlay" />

          <Image
            src="/images/cta-bg.jpg"
            alt="CTA Background"
            fill
            className="cta-bg"
          />

          <div className="cta-content">
            <h2>
              A New <br /> Requirement?
            </h2>

            <p>
              Connect us for expert solutions in MES, PLM, ERP, and more. Reach
              out today. Our dedicated team is here to assist you!
            </p>

            <button className="cta-button">Contact Us</button>

            <span className="cta-note">
              We typically respond within 24 hours.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

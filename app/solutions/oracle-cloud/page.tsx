    import HeroSection from "@/app/components/HeroSection";
import PracticeSection from "@/app/components/PracticeSection";
import CTASection from "@/app/components/CTASection";
import type { Metadata } from "next";
import "./cloud.scss";

export const metadata: Metadata = {
  title: "Oracle Cloud Solutions | Athenatec",
  description:
    "Athenatec delivers premier Oracle Cloud implementation and managed services across ERP, SCM, and HCM Cloud for enterprise organizations.",
  alternates: {
    canonical: "https://athenatec.com/solutions/oracle-cloud",
  },
  openGraph: {
    title: "Oracle Cloud Solutions | Athenatec",
    description:
      "Oracle Certified Consultants delivering ERP Cloud, SCM Cloud, and HCM Cloud implementation and migration services.",
    url: "https://athenatec.com/solutions/oracle-cloud",
    type: "website",
    images: [
      {
        url: "https://athenatec.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle Cloud Solutions",
      },
    ],
  },
};

const practiceData = [
  {
    title: "ERP Cloud",
    icon: "/assets/icons/process.png",
    items: [
      "Financial Management",
      "Project Portfolio Operations",
      "Procurement & Payables",
      "Revenue Management",
      "Enterprise Performance",
      "Risk & Compliance",
    ],
  },
  {
    title: "SCM Cloud",
    icon: "/assets/icons/Implementation.png",
    items: [
      "Supply Chain Planning",
      "Inventory Management",
      "Order Management",
      "Digital Logistics",
      "Manufacturing Execution",
      "End-to-End Visibility",
    ],
  },
  {
    title: "HCM Cloud",
    icon: "/assets/icons/Application-Support.png",
    items: [
      "Human Resources",
      "Talent Management",
      "Payroll Processing",
      "Workforce Management",
      "Learning & Development",
      "HR Analytics",
    ],
  },
];

export default function OracleCloud() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Oracle Cloud Solutions",
            provider: {
              "@type": "Organization",
              name: "Athenatec",
              url: "https://athenatec.com",
            },
            description:
              "Oracle Cloud ERP, SCM, and HCM implementation and managed services by Oracle Certified Consultants.",
            serviceType: "Oracle Cloud Implementation",
            areaServed: "Worldwide",
          }),
        }}
      />

      {/* ── Hero ── */}
      <HeroSection
        title="Oracle Cloud"
        description="Comprehensive cloud applications built for performance, security, and enterprise-scale growth."
        image="/assets/images/PLM.jpg"
        align="center"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* ── Overview Card ── */}
      <section className="oracle-description">
        <div className="oracle-description__card">
          <p>
            Oracle Cloud delivers a comprehensive suite of integrated business
            applications designed to help organizations operate more efficiently
            and respond quickly to change. Built on Oracle Cloud Infrastructure,
            it provides the performance, security, and scalability required to
            run mission-critical enterprise operations. With continuous
            innovation delivered through quarterly release cycles, Oracle Cloud
            enables businesses to simplify operations, gain better visibility,
            and support sustainable growth. Oracle embeds Modern Best Practices
            across Oracle Cloud applications helping the organization's business
            processes to automatically align with industry-leading standards.
          </p>
        </div>
      </section>

      {/* ── Athenatec Expertise ── */}
      <section className="oracle-expertise">
        <div className="oracle-expertise__container">
          <h2 className="oracle-expertise__title">
            Athenatec's Oracle Cloud Expertise
          </h2>
          <p className="oracle-expertise__subtitle">
            Athenatec's team of Oracle Certified Consultants delivers premier
            implementation and managed services for cloud-based environments. We
            leverage deep domain expertise to help organizations transition to
            the Cloud with confidence, offering comprehensive support across the
            following pillars.
          </p>
        </div>
      </section>

      {/* ── Practice Cards ── */}
      <PracticeSection
        title="Our Oracle Cloud Service Pillars"
        cards={practiceData}
      />

      {/* ── Path to Success ── */}
      <section className="oracle-path">
        <div className="oracle-path__container">
          <h2 className="oracle-path__title">Our Structured Path to Success</h2>
          <p className="oracle-path__subtitle">
            Whether you are a new customer launching a cloud initiative or an
            existing user transitioning from on-prem systems, we provide a
            structured path to success.
          </p>

          <div className="oracle-path__grid">
            <div className="oracle-path__card">
              <div className="oracle-path__card-icon">🚀</div>
              <h3>For Net New Implementations</h3>
              <p>
                We conduct rigorous pre-implementation assessments, develop
                strategic project roadmaps, and perform detailed gap analyses to
                ensure your cloud environment is built for success from day one.
              </p>
            </div>
            <div className="oracle-path__card">
              <div className="oracle-path__card-icon">☁️</div>
              <h3>For Cloud Migrations</h3>
              <p>
                Our consultants manage the transition from your legacy on-prem
                systems, ensuring your new platform is scalable, secure, and
                perfectly aligned with your long-term business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title={
          <>
            Ready to Move
            <br /> to the Cloud?
          </>
        }
        description="Let Athenatec's Oracle Certified Consultants design and deploy the right Oracle Cloud strategy for your business."
        buttonText="Contact Us"
        buttonLink="/contact"
        note="We typically respond within 24 hours."
        backgroundImage="/assets/images/new-req.webp"
      />
    </>
  );
}
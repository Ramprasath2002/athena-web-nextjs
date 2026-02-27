import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import "./plm.scss";
import PracticeSection from "@/app/components/PracticeSection";
import CTASection from "@/app/components/CTASection";

const practiceData = [
  {
    title: "Solutions / Modules",
    icon: "/assets/icons/process.png",
    items: [
      "Product Portfolio Management",
      "Product Collaboration",
      "Design Center / CAD",
      "Product Quality / Defects",
      "Change Management",
      "Product Costing",
      "Supplier Management",
      "Compliance / Governance",
    ],
  },
  {
    title: "Implementation",
    icon: "/assets/icons/Implementation.png",
    items: [
      "Project Management",
      "Requirements / Design",
      "Process Reengineering",
      "Systems Integration (ERP / MES)",
      "Custom Development",
      "Automated Testing",
      "User Training",
    ],
  },
  {
    title: "Application Support",
    icon: "/assets/icons/Application-Support.png",
    items: [
      "Support all PLM Modules",
      "Ticket Based Tracking",
      "Troubleshooting",
      "Minor Enhancements",
      "Reporting",
    ],
  },
];
export default function PlmSolution() {
  return (
    <>
      <HeroSection
        title="PLM Solutions"
        description="Leave us a little info, and we’ll be in touch."
        image="/assets/images/PLM.jpg"
        align="center"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <section className="plm-description">
        <div className="plm-description__card">
          <p>
            PLM is considered an essential to most Manufacturing companies. This
            is because Product companies need to have a controlled and
            centralized process to manage the life of their products. A typical
            PLM will manage the Products Life from Concept (MRD), Design (PDM),
            Parts and BOMs (ERP) Manufacturing. (MES), Distribution (ERP/ SCM/
            WMS) with Change Control for same, through the Product’s EOL /
            Retirement. At Athena, we provide Oracle / Agile PLM Implementation
            Services, including; integration with ERP and MES systems to
            accomplish Process Automation along the Product and Production life
            Cycles. Athena also has considerable expertise with Agile PLM
            Migrations and Upgradations.
          </p>
        </div>
      </section>
      <section className="plm-team">
        <div className="plm-team__container">
          <h2 className="plm-team__title">Agile PLM Close Loop System</h2>

          <div className="plm-team__image">
            <img
              src="/assets/images/05-6.webp"
              alt="Athena Opcenter Team"
            />
          </div>
        </div>
      </section>
      <PracticeSection
        title="Professional Agile PLM Solutions"
        cards={practiceData}
     
      />
      <CTASection
        title={
          <>
            Let’s talk
            <br /> Got an enquiry?
          </>
        }
        description="At Athena, our team guides your Industry 4.0 journey with deep expertise in digital transformation and manufacturing solutions. "
        buttonText="Contact Us"
        buttonLink="/contact"
        note="We typically respond within 24 hours."
        backgroundImage="/assets/images/new-req.jpg"
      />
    </>
  );
}

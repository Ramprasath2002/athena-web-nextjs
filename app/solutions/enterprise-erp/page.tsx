import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import "./erp.scss";
import PracticeSection from "@/app/components/PracticeSection";
import CTASection from "@/app/components/CTASection";

const practiceData = [
  {
    title: "Process / Modules",
    icon: "/assets/icons/process.png",
    items: [
      "Order-to-Cash (O2C)",
      "Procure-to-Pay (P2P)",
      "Project Costing",
      "Product Costing",
      "Warehouse Management (WMS)",
      "Inventory Management",
      "Fixed Assets Management",
      "General Ledger (GL)",
    ],
  },
  {
    title: "Implementation",
    icon: "/assets/icons/Implementation.png",
    items: [
      "Project Management",
      "Requirements Analysis & Design",
      "Business Process Reengineering",
      "System Integration Testing (SIT)",
      "Custom Development",
      "Automated Testing",
      "End-User Training",
    ],
  },
  {
    title: "Application Support",
    icon: "/assets/icons/Application-Support.png",
    items: [
      "Support for All ERP Modules",
      "Ticket-Based Tracking",
      "Issue Troubleshooting",
      "Minor Enhancements",
      "Custom Reporting",
    ],
  },
];
export default function EnterpriseErp() {
  return (
    <>
      <HeroSection
        title="Enterprise ERP"
        description="Leave us a little info, and we’ll be in touch."
        image="/assets/images/ERP.webp"
        align="center"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <section className="plm-description">
        <div className="plm-description__card">
          <p>
            Enterprise ERP Systems are still the core system for most
            Manufacturing companies. To assist Clients on their Digital
            Transformation Journey, Athena provides best practice Implementation
            of all core EBS modules, as well as Process Automation through the
            Integration of Oracle EBS with the various systems involved in each
            Life Cycle process. These frequently include, CRM, PLM, SCM, WMS and
            MES. This level of Process Automation is not only a key construct of
            Industry 4.0, but provides immense Business value, including; Lower
            Human Labor Costs,Increased Process Performance, Data Integrity, and
            the ability to scale Operations with ease.
          </p>
        </div>
      </section>
     
      <PracticeSection
        title="Enterprise Systems Practice MES and Factory Systems"
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

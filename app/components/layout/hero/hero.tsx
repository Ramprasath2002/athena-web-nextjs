import HeroCarousel from "./HeroCarousel";
// import HeroContent from "./HeroContent";
import "./hero.scss";

export default function HeroSection() {
  return (
    <>
      {/* HERO + STATS WRAPPER */}
   <section className="relative min-h-screen flex flex-col overflow-hidden pt-[62px]">
        {/* HERO */}
        <div className="relative flex-1">
          <HeroCarousel />
        </div>

        {/* STATS */}
        <div className="bg-[#F5FAFD] py-5">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 text-black">
              A Decade of Delivering Manufacturing Excellence
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black">
              <StatCard
                title="Founded"
                value="2011"
                
                subtitle="13+ years experience"
              />
              <StatCard
                title="Team Strength"
                value="150+"
                subtitle="Industry experts"
              />
              <StatCard title="Global HQ" value="USA" subtitle="California" />
              <StatCard
                title="Delivery Centers"
                value="India"
                subtitle="Bangalore, Hyderabad, Chennai & Trichy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="relative  bg-white py-16 overflow-hidden">
        <div className="mx-auto px-6 mb-8">
          <h3 className="text-center text-lg text-gray-600 font-bold">
            Trusted by Global Manufacturing Leaders
          </h3>
        </div>

        {/* OUTER CLIP */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="h-22 w-auto object-contain opacity-80"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

 

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 md:p-6 text-center shadow-sm">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-3xl font-semibold mb-2">{value}</p>
      <p className="text-sm text-gray-600 leading-snug">{subtitle}</p>
    </div>
  );
}

const logos = [
  "/assets/Clients/ALRA-LAVAL.png",
  "/assets/Clients/AMU1-OSRAM.png",
  "/assets/Clients/Areva.png",
  "/assets/Clients/Atmel.png",
  "/assets/Clients/Conformis.png",
  "/assets/Clients/Critical-Manufacturing.png",
  "/assets/Clients/Daikin.png",
  "/assets/Clients/Dexcom.png",
  "/assets/Clients/Edtech.jpg",
  "/assets/Clients/ELO.png",
  "/assets/Clients/Emcore.png",
  "/assets/Clients/Enovix.png",
  "/assets/Clients/Entrgris.jpg",
  "/assets/Clients/Finisar.png",
  "/assets/Clients/GLO.png",
  "/assets/Clients/Honeywell.png",
  "/assets/Clients/HSC.png",
  "https://athenatec.com/wp-content/uploads/2024/10/innova.jpg",
  "/assets/Clients/Intel.png",
  "/assets/Clients/Lumentum.png",
  "/assets/Clients/Marki.png",
  "/assets/Clients/Miasole.png",
  "/assets/Clients/Micron.png",
  "https://athenatec.com/wp-content/uploads/2024/12/06.png",
  "/assets/Clients/Neophotonics.png",
  "/assets/Clients/Nevro.png",
  "/assets/Clients/Penumbra.png",
  "/assets/Clients/Philips.png",
  "/assets/Clients/PSi-Quantum.png",
  "https://athenatec.com/wp-content/uploads/2024/12/03.png",
  "/assets/Clients/SK-Siltron.png",
  "/assets/Clients/Skywater.png",
  "/assets/Clients/Swissbit.png",
  "/assets/Clients/TDK.jpg",
  "/assets/Clients/Teledyne.png",
  "/assets/Clients/View-Dynamic-Glass.png",
  "/assets/Clients/VLAVI.png",
  "/assets/Clients/Wolfspeed.png",
];

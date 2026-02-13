import Hero from '@/app/components/layout/hero/hero';
import WhoWeAre from './components/layout/who-we-are/WhoWeAre';
import Services from './components/layout/services/services';
import Leadership from './components/layout/services/Leadership';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Leadership />
      <Services />
    </>
  );
}

import Hero from '@/app/components/home/hero/hero';
import WhoWeAre from './components/home/who-we-are/WhoWeAre';
import Services from './components/home/services/services';
import Leadership from './components/home/services/Leadership';

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

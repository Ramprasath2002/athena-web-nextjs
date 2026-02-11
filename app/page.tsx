import Hero from '@/app/components/layout/hero/hero';
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';
import WhoWeAre from './components/layout/who-we-are/WhoWeAre';
import Services from './components/layout/services/services';
import Leadership from './components/layout/services/Leadership';
 
export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
    <WhoWeAre/>
    <Leadership/>
    <Services/>
      <Footer/>
    </>
  );
}

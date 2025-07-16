import FlavorShowcase from './flavor-showcase';
import Hero from './Hero';
import './motion.css';
import { flavors } from '../data/flavors';
import Footer from '../components/layout/footer';

const Motion = () => {
  return (
    <>
        <Hero />
        { flavors.map((flavor, index) => {
            return (
              <FlavorShowcase
                flavor={flavor}
                key={index}
                index={index}
              />
            )
          })
        }
        <Footer />
    </>
  );
};

export default Motion;

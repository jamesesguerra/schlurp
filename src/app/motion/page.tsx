import FlavorShowcase from './flavor-showcase';
import Hero from './Hero';
import './motion.css';
import { flavors } from '../data/flavors';

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
    </>
  );
};

export default Motion;

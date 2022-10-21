import { AboutProducts } from "../../Constants";
import './About.scss';

const About = () => (
  <section id="About" className="About">
      {AboutProducts.map(({img,title,price}) => (
        <div key={title} className="card">
          <img src={img} alt={title} />
          <div className="info">
            <h2>{title}</h2>
            <h4>{price}</h4>
          </div>
        </div>
      ))}
  </section>
)

export default About;
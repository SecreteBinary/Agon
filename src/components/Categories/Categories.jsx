import { category, popular } from "../../Constants"
import './Categories.scss';

const Categories = () => (
  <section className='Categories'>
    <h1>Explore by Categories.</h1>
    <p>We provide many categories, choose a category according to
      your expertise to make it easier to find a job.</p>
    <div className="container">
      <div className="popular">
        <h2>Popular Categories</h2>
        <div className="popular-categories">
          {popular.map(({ title, qy },id) => (
            <div key={id} className='popular-categories-item'>
              <h4>{title}</h4>
              <h5>{qy}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="types">
        {category.map(({img,title},id) => (
          <div key={id} className="type">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Categories
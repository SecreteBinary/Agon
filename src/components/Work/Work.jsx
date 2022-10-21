import { WorkCards } from "../../Constants"
import './Work.scss';

const Work = () => (
  <section className='work'>
    <h5>How It Work ?</h5>
    <h1>Cross-border ordering has
      never been easier</h1>
    <div className="cards">
      {WorkCards.map(({img,title,info,color}) => (
        <div key={title} className="card" style={{backgroundColor: color}}>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Work
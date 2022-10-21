/* eslint-disable jsx-a11y/anchor-is-valid */

import { ProductItems } from '../../Constants'
import './Products.scss';
import { star,starActive } from '../../assets/images';

const Products = () => (
  <section className='Products'>
    <h1>Featured Products
      For Pre-Order</h1>
    <div className="cards">
      {ProductItems.map(({ img, company, title, rate, price, sale },id) => (
        <div key={id} className="card">
          <div className="img">
            <img src={img} alt={title} />
          </div>
          {sale !== '' ? (<h4>{sale}</h4>) : ''}
          <h5>{company}</h5>
          <h2>{title}</h2>
          <div className="stars">
            <img src={starActive} alt="" />
            <img src={starActive} alt="" />
            <img src={starActive} alt="" />
            <img src={starActive} alt="" />
            <img src={star} alt="" />
          </div>
          <div className="buy">
            <h3>{price}</h3>
            <a href="">Add +</a>
          </div>
        </div>
      ))}
    </div>
  </section>
)


export default Products
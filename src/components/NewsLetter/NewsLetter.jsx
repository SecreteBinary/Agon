import { arrowLight,newsletter } from "../../assets/images"
import './NewsLetter.scss';


const NewsLetter = () => (
  <section className='NewsLetter'>
    <div className="container">
      <div>
        <h2>Subscribe our newsletter</h2>
        <p>By clicking the button, you are agreeing with our Term & Conditions</p>
        <form action="">
          <input type="email" name="" id="" placeholder="Enter Your mail..." />
          <button type='submit'><img src={arrowLight} alt="" /></button>
        </form>
      </div>
      <img className="img" src={newsletter} alt="" />
    </div>
  </section>
)

export default NewsLetter
/* eslint-disable jsx-a11y/anchor-is-valid */
import { logo, arrowLight } from "../../assets/images"
import { FooterLinks, socialMedia } from "../../Constants"
import './Footer.scss';

const Footer = () => (
  <footer>
    <div className="bar">
      <img src={logo} alt="" />
      <div>
        <h3>Ready to get started?</h3>
        <a href="">Create an Account <img src={arrowLight} alt="" /></a>
      </div>
    </div>
    <hr />
    <div className="footer">
      <div className="col">
        <h2>Contact</h2>
        <p>4517 Washington Ave.
          Manchester, Kentucky 39495</p>
        <h5>(239) 555-0108</h5>
        <h6>contact@agon.com</h6>
        <div className="media">
          {socialMedia.map((item, id) => (
            <img key={id} src={item} alt="" />
          ))}
        </div>
      </div>
      {FooterLinks.map(({ title, links }, id) => (
        <div key={id} className="col">
          <h2>{title}</h2><ul>
            {links.map((link, id) => (
              <li key={id}><a href="">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <hr />
    <div className="policy">
      <p>©Agon Official 2022</p>
      <p><span>Privacy policy</span>
        <span>Cookies</span>
        <span>Terms of service</span></p>
    </div>
  </footer>
)

export default Footer;

import PropTypes from 'prop-types';
import background from "../../assets/images/bg-shadow.png";
import banner from "../../assets/images/banner-main.png";
import "./Hero.css"


const Hero = ({addBalance}) => {

  return (
    <div
  className="hero min-h-[700px]"
  style={{
    backgroundImage: `url(${background})`,
  }}>
  <div className="hero-overlay custom-hero-overlay"></div>
  <div className="text-neutral-content text-center">
    <img className='mx-auto mb-12' src={banner}></img>
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5 text-xl text-white">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={addBalance} className="btn custom-btn text-lg">Claim Free Credit</button>
    </div>
  </div>
</div>
  )
}

Hero.propTypes = {}

export default Hero
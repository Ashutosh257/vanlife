
import aboutHero from "../assets/about-hero.svg"

import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="about-container">

      <img src={aboutHero} alt="about hero" className="about-hero-img" />

      <div className="about-content">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>

        <div>
          Our mission is to enliven your road trip with the perfect travel van rental. 
          Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>

      </div>

        <div className="explore-vans">
          <h3>
              Your destination is waiting.
              <br />
              Your van is ready.
          </h3>

          <Link to="/vans" className="btn btn-explore-van">Explore our vans</Link>
        </div>


      
    </section>
  )
}

export default About
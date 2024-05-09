import nurseImage from '../assets/nurse1.jpeg';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <img id='nursee' src={nurseImage} alt="nurse" />
        <p className='paragraph'>
        ""Welcome to Red Drip, where every drop counts! Our blood donation website is designed to make saving lives as simple as possible. Here, you'll find everything you need to know about donating blood and the profound impact it can have.

Discover the power of your generosity by learning about the importance of blood donation, eligibility requirements, and the life-changing difference your donation can make. With just a few clicks, you can locate nearby donation centers or events, book your donation appointment, and keep track of your donation history effortlessly.

Join us in our vital mission to ensure a steady supply of blood for patients in hospitals and medical facilities. Your donation can be the difference between life and death for someone in need. Together, we can create a ripple effect of positive change in the lives of others.

Embark on your journey with us today and become a hero in someone's story. Your generosity and willingness to give the gift of life are deeply appreciated. Thank you for being a part of our life-saving community at Red Drip!"
        
</p>
        
        
        <div className="hero-content">
          <h1>REACH US ON:</h1>
          <div>
            <h2> Whatsapp</h2> 
            <p>0707499607</p>
          </div>
          <div>
            <h3> Instagram</h3> 
            <p>@_reddrip</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
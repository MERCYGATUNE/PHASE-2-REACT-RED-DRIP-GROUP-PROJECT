import nurseImage from '../assets/nurse1.jpeg';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <img id='nursee' src={nurseImage} alt="nurse" />
        <p className='paragraph'>"Welcome to red drip our blood! blood Donation website Here, we make it easy for you to save lives through the simple act of donating blood. Our platform serves as your go-to resource for all things related to blood donation.

Discover the power you hold to make a difference by learning about the importance of blood donation, eligibility requirements, and the impact it can have on those in need. With just a few clicks, you can find nearby blood donation centers or events, schedule your donation appointment, and even track your donation history.

Join us in our mission to ensure a steady supply of blood for patients in hospitals and medical facilities. Your donation can make a life-saving difference for someone in need. Together, we can make a positive impact on the lives of others.

Start your journey with us today and be a hero in someone's story. Thank you for your generosity and willingness to give the gift of life."</p>
        <div className="hero-content">
          <h1>Reach Us On</h1>
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
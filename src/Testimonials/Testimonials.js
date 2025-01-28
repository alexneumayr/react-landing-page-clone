import ellen from '../images/ellen.jpg';
import fanar from '../images/fanar.png';
import jens from '../images/jens.png';
import laura from '../images/laura.jpg';
import rene from '../images/rene.jpg';
import tim from '../images/tim.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard.js';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={styles.root}>
      <div className={styles.testimonialsContainer}>
        <h2>What people say about me</h2>
        <div className={styles.testimonialsArea}>
          <TestimonialCard
            testimonialText="Bob convinced WeightWatchers of his knowledge and expertise from the 1st
        moment of contact. The results exceeded expectations!"
            instaLink="/"
            customerName="Jens Riga"
            customerDescription="Head of Digital at WeightWatchers"
            photo={jens}
          />
          <TestimonialCard
            testimonialText="Bob has provided results quickly with a structured approach. He also offered a more professional basis for further optimizing our campaigns."
            instaLink="/"
            customerName="Tima Nota"
            customerDescription="Director at WisMon"
            photo={tim}
          />
          <TestimonialCard
            testimonialText="We have been working with Bob for quite some time, and his expertise in Google Ads has become indispensable. We are extremely satisfied!"
            instaLink="/"
            customerName="Fanar Al-Obaidy"
            customerDescription="Founder at NOX Sleep Drink"
            photo={fanar}
          />
          <TestimonialCard
            testimonialText="We have experienced your service as very nice and enlightening. You work fast, are flexible and always advise us well. Our target group now knows how to find us much better."
            instaLink="/"
            customerName="Laura Wever"
            customerDescription="Online Marketeer at Brünen"
            photo={laura}
          />
          <TestimonialCard
            testimonialText="The number of conversions has more than tripled compared to the previous year. I think it needs no further explanation that I am very satisfied with that."
            instaLink="/"
            customerName="Ellen Das"
            customerDescription="Owner at Love, Peace & Joy"
            photo={ellen}
          />
          <TestimonialCard
            testimonialText="We felt we could get more out of Google Ads. Since switching to Bob, things have been going much better. We are getting more bookings for less budget, great!"
            instaLink="/"
            customerName="René Speelman"
            customerDescription="Founder at NOX Sleep"
            photo={rene}
          />
        </div>
      </div>
    </div>
  );
}

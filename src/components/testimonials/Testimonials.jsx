import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="AVATAR One" />
          </div>
          <h5>Ernets Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusamus consectetur nesciunt illum magni enim fugiat explicabo
            deleniti eius fugit beatae, reiciendis pariatur nisi similique, iure
            exercitationem voluptatibus molestias sit.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="AVATAR Two" />
          </div>
          <h5>Ernets Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusamus consectetur nesciunt illum magni enim fugiat explicabo
            deleniti eius fugit beatae, reiciendis pariatur nisi similique, iure
            exercitationem voluptatibus molestias sit.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="AVATAR Three" />
          </div>
          <h5>Ernets Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusamus consectetur nesciunt illum magni enim fugiat explicabo
            deleniti eius fugit beatae, reiciendis pariatur nisi similique, iure
            exercitationem voluptatibus molestias sit.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;

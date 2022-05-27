import "./testimonials.scss";
import { useContext } from "react";
import { PortfolioContext } from "./../../context/PortfolioContext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "../Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
  const { testimonials, activeTestimonial, setActiveTestimonial } =
    useContext(PortfolioContext);

  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-content">
        <div className="testimonial-image-container">
          <img
            src={testimonials[activeTestimonial].image}
            alt="profile-pic"
            className="testimonial-pic"
          />
          {testimonials[activeTestimonial].designation}
          <a
            href={testimonials[activeTestimonial].linkedin_profile}
            id="linkedin-link"
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
          >
            <LinkedInIcon fontSize="large" />
            Linkedin Profile
          </a>
        </div>
        <div className="testimonial-text-container">
          <FormatQuoteIcon />
          {testimonials[activeTestimonial].text}
          <FormatQuoteIcon />
        </div>
      </div>
      <div className="testimonial-button-container">
        <Button
          key="left-button"
          onClick={() =>
            setActiveTestimonial(
              (testimonials.length + activeTestimonial - 1) %
                testimonials.length
            )
          }
        >
          {"<"}
        </Button>
        <span> </span>
        <Button
          key="right-button"
          onClick={() =>
            setActiveTestimonial(
              (testimonials.length + activeTestimonial + 1) %
                testimonials.length
            )
          }
        >
          {">"}
        </Button>
      </div>
    </div>
  );
}

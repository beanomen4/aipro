import Slider from "react-slick";
import styled from "styled-components";

import capabilitiesIcon from "/src/assets/slider/capabilities.svg";
import efficiencyIcon from "/src/assets/slider/efficiency.svg";
import guaranteeIcon from "/src/assets/slider/guarantee.svg";
import adaptationIcon from "/src/assets/slider/adaptation.svg";

const StyledSlider = styled.div`
  width: 130%;
  /* margin-top: 2.5rem; */

  .slick-slide {
    padding: 0 2rem;
  }

  .slick-arrow.slick-next {
    width: 5rem;
    height: 5rem;
    margin-right: 30rem;
    border-radius: 10px;
    background: #24a1df;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.21);
    z-index: 10;

    &:before {
      content: "˲";
      position: relative;
      top: -2.15rem;
      left: 0.15rem;
      font-size: 6rem;
    }
  }

  .slick-arrow.slick-prev {
    width: 5rem;
    height: 5rem;
    margin-left: 30rem;
    border-radius: 10px;
    background: #24a1df;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.21);
    z-index: 10;

    &:before {
      content: "˱";
      position: relative;
      top: -2.15rem;
      right: 0.15rem;
      font-size: 6rem;
    }
  }

  .slick-slide:not(.slick-center) {
    opacity: 0.3;
  }
`;

const Slide = styled.div`
  height: 22rem;
  padding: 2rem;
  border: 1px solid #24a1df;
  border-radius: 15px;
  background: linear-gradient(
    93deg,
    rgba(36, 161, 223, 0.32) 0%,
    rgba(30, 48, 58, 0) 100%
  );
`;

const SlideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
`;

const SlideImg = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 15px;
  background: #1c1c1c;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.21);

  display: grid;
  place-content: center;

  & img {
    width: 3.5rem;
  }
`;

const SlideHeading = styled.div`
  color: var(--color-grey-200);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
`;

const SlideDescription = styled.div`
  padding: 0 0.75rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
`;

function CentralSlider() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 700,
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        <Slide>
          <SlideHeader>
            <SlideImg>
              <img src={capabilitiesIcon} alt="Capabilities icon" />
            </SlideImg>
            <SlideHeading>Unique capabilities</SlideHeading>
          </SlideHeader>
          <SlideDescription>
            AiPro programs enhance tasks by introducing innovative features,
            capabilities, and boosting productivity.
          </SlideDescription>
        </Slide>
        <Slide>
          <SlideHeader>
            <SlideImg>
              <img src={efficiencyIcon} alt="Efficiency icon" />
            </SlideImg>
            <SlideHeading>Maximum efficiency</SlideHeading>
          </SlideHeader>
          <SlideDescription>
            Our solutions are designed for maximum productivity, helping you
            focus on key tasks without unnecessary effort.
          </SlideDescription>
        </Slide>
        <Slide>
          <SlideHeader>
            <SlideImg>
              <img src={guaranteeIcon} alt="Guarantee icon" />
            </SlideImg>
            <SlideHeading>Quality Guarantee</SlideHeading>
          </SlideHeader>
          <SlideDescription>
            We guarantee stability in every process. AiPro are not just
            programs, but reliable partners in your business.
          </SlideDescription>
        </Slide>
        <Slide>
          <SlideHeader>
            <SlideImg>
              <img src={adaptationIcon} alt="Adaptation icon" />
            </SlideImg>
            <SlideHeading>Adaptation for any projects</SlideHeading>
          </SlideHeader>
          <SlideDescription>
            Each software solution is tailored to your unique needs, providing
            flexibility and a personalized approach.
          </SlideDescription>
        </Slide>
      </Slider>
    </StyledSlider>
  );
}

export default CentralSlider;

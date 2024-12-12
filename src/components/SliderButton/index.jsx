import leftArrow from '../../assets/Vector-1.svg';
import rightArrow from '../../assets/Vector.svg';
import "../../styles/components/SliderButton/sliderButton.css";

function SliderButton({ direction, goTo }) {
      return (
            <button
                  onClick={goTo}
                  type="button"
                  className={
                        direction === 'next'
                              ? 'slider-button next'
                              : 'slider-button previous'
                  }
            >
                  <img
                        src={direction === 'next' ? leftArrow : rightArrow}
                        alt={
                              direction === 'next'
                                    ? 'Next image'
                                    : 'Previous image'
                        }
                  />
            </button>
      );
}
export default SliderButton;

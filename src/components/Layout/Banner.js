import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../../styles/Banner.css';
import food1 from '../../images/food1.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';
import food4 from '../../images/food4.jpg';
import food5 from '../../images/food5.jpg';
import food6 from '../../images/food6.jpg';

export const EmblaCarousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container ">
				<div className="embla__slide ">
					<img src={food1} alt="food" />
				</div>
				<div className="embla__slide ">
					<img src={food2} alt="food" />
				</div>

				<div className="embla__slide ">
					<img src={food4} alt="food" />
				</div>
				<div className="embla__slide ">
					<img src={food5} alt="food" />
				</div>
				<div className="embla__slide ">
					<img src={food6} alt="food" />
				</div>
			</div>
		</div>
	);
};

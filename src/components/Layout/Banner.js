import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../../styles/Banner.css';
import food1 from '../../images/food1.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';

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
					<img src={food3} alt="food" />
				</div>
			</div>
		</div>
	);
};

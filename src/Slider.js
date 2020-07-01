import AutoplaySlider from "react-awesome-slider/src/hoc/autoplay";

const Slider = () => {
	return (
		<AutoplaySlider
			play={true}
			cancelOnInteraction={false}
			interval={6000}
			cssModule={AwesomeSliderStyles}>
			<div data-src='/images/image-0.jpg' />
			<div data-src='/images/image-02.png' />
			<div data-src='/images/image-03.png' />
		</AutoplaySlider>
	);
};

export default Slider;

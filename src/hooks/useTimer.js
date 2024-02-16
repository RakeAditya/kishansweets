import React from 'react';

const useTimer = () => {
	const [seconds, setSeconds] = React.useState(59);
	const [minutes, setMinutes] = React.useState(2);
	const [reset, setReset] = React.useState(false);
	const timer = React.useRef();
	const stop = () => {
		clearInterval(timer.current);
	};
	React.useEffect(() => {
		timer.current = setInterval(() => {
			setSeconds((pre) => pre - 1);
		}, 1000);
		return () => clearInterval(timer.current);
	}, []);
	React.useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			stop();
			setReset(true);
		}
		if (seconds === 0) {
			console.log('hello');
			setMinutes((pre) => pre - 1);
			setSeconds(59);
		}
	}, [minutes, seconds]);

	return { seconds, minutes, reset };
};

export default useTimer;

document.addEventListener('DOMContentLoaded', () => {
  	const newGeneration = new Date('Jan 1 2022 00:00:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
	  const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	  const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	  const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	  const timeCount = () => {
      let now = new Date();
		  let leftUntil = newGeneration - now;

		  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		  let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		  let seconds = Math.floor(leftUntil / 1000) % 60;

		  daysVal.textContent = days;
	   	hoursVal.textContent =	hours;
		  minutesVal.textContent = minutes;
		  secondsVal.textContent = seconds;
    };
    timeCount();
	  setInterval(timeCount, 1000);
});

const circle = document.querySelector('.js-animation');
const rect = document.querySelector('.rect');
const topTransition = circle.offsetHeight / 2;
const leftTransition = circle.offsetWidth / 2;
const frames = [
  { top: `${-topTransition}px`, left: `${-leftTransition}px` },
  {
    top: `${-topTransition}px`,
    left: `${rect.offsetWidth - leftTransition}px`,
  },
  {
    top: `${rect.offsetHeight - leftTransition}px`,
    left: `${rect.offsetWidth - topTransition}px`,
  },
  {
    top: `${rect.offsetHeight - topTransition}px`,
    left: `${-leftTransition}px`,
  },
  {
    top: `${-topTransition}px`,
    left: `${-leftTransition}px`,
  },
];
circle.animate(frames, {
  duration: 20000,
  iterations: Infinity,
  delay: 0,
});

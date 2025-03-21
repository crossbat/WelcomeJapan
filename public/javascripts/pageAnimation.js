const observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
      console.log(item)
    }
  });
});

// navigation
const navigation = document.querySelector('nav');
observer.observe(navigation);

//section1
const sec1Background = document.querySelector('#section1');
const sec1MainText = document.querySelector('#sec1MainText');
const sec1SubText = document.querySelector('#sec1SubText');
const sec1Des = document.querySelector('#sec1Des');

observer.observe(sec1Background);
observer.observe(sec1MainText);
observer.observe(sec1SubText);
observer.observe(sec1Des);

//section2
const sec2MainText = document.querySelector('sec2MainText');
const sec2SubText = document.querySelector('sec2SubText');
const sec2Main = document.querySelector('section2Main');

observer.observe(sec2MainText);
observer.observe(sec2SubText);
observer.observe(sec2Main);

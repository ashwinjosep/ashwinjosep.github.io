function scrollOnClick(id) {
  console.log("Inside scroller function");
  var element = document.getElementById(id.id);
  var screenWidth = screen.width;
  var headerOffset = 250;
  if(screenWidth>597)
  {
    headerOffset = 40;
  }
  else if (screenWidth>321) {
    headerOffset =70;
  }
  else if (screenWidth>290) {
    headerOffset =100;
  }
  else if (screenWidth>215) {
    headerOffset =140;
  }
  else if (screenWidth>183) {
    headerOffset =190;
  }
  else if (screenWidth>156) {
    headerOffset =220;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
   });
}

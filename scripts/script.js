function scrollOnClick(id) {
  console.log("Inside scroller function");
  var element = document.getElementById(id.id);
  var headerOffset = 65;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
   });
}

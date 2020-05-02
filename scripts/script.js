
// function to scroll to div
const scrollOnClick = (id) => {
  var element = document.getElementById(id.id);
  var headerOffset = 30;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
   });
}

// function to be called on loading the window
const load = () => {

  // function to view scroll button based on scrolling
  const viewScrollButton = () => {
    mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = viewScrollButton;
}

window.onload = load;

// function to scroll to the top
function topFunction() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
}

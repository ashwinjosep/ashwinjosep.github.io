function scrollOnClick(id) {
  console.log("Inside scroller function");
  let elt = document.getElementById(id.id);
  elt.scrollIntoView({behavior:"smooth"});

}

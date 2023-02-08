"use strict";

var outFirstName = document.querySelector('.pre-first-name');
var inFirstName = document.querySelector('.first-name');
var outLastName = document.querySelector('.pre-last-name');
var inLastName = document.querySelector('.last-name');
var outImg = document.querySelector('.img-prev');
var inImg = document.querySelector('.imgInp');
var inImgClick = document.querySelector('.imgInp1');

// let sendOff = document.querySelector('.submit')
// const screenshotTarget = document.querySelector('.badge');

// sendOff.addEventListener('click', function(event) {
//   html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     window.location.href = base64image;
// });
// })

window.addEventListener('keyup', function (event) {
  var firstName = inFirstName.value;
  var lastName = inLastName.value;
  outFirstName.setAttribute('value', firstName);
  outLastName.setAttribute('value', lastName);
});
inImg.onchange = function () {
  var reader = new FileReader();
  reader.readAsDataURL(inImg.files[0]);
  reader.onload = function () {
    outImg.setAttribute('src', reader.result);
  };
};
inImgClick.onchange = function () {
  var reader = new FileReader();
  reader.readAsDataURL(inImgClick.files[0]);
  reader.onload = function () {
    outImg.setAttribute('src', reader.result);
  };
};
//# sourceMappingURL=main.js.map

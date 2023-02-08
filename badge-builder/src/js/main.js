
let outFirstName = document.querySelector('.pre-first-name')
let inFirstName = document.querySelector('.first-name')

let outLastName = document.querySelector('.pre-last-name')
let inLastName = document.querySelector('.last-name')

let outImg = document.querySelector('.img-prev')
let inImg = document.querySelector('.imgInp')
let inImgClick = document.querySelector('.imgInp1')

// let sendOff = document.querySelector('.submit')
// const screenshotTarget = document.querySelector('.badge');

// sendOff.addEventListener('click', function(event) {
//   html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     window.location.href = base64image;
// });
// })

window.addEventListener('keyup', function(event) {
    let firstName = inFirstName.value
    let lastName = inLastName.value
    outFirstName.setAttribute('value', firstName)
    outLastName.setAttribute('value', lastName)
 })

inImg.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(inImg.files[0])
    reader.onload = () => {
        outImg.setAttribute('src', reader.result)
    }
  }

 inImgClick.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(inImgClick.files[0])
    reader.onload = () => {
        outImg.setAttribute('src', reader.result)
    }
  }



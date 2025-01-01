const images=[
  "img/picture-1.jpg",
  "img/picture-2.jpg",
  "img/picture-3.jpg",
  "img/picture-4.jpg",
  "img/picture-5.jpg",
  "img/picture-6.jpg",
  "img/picture-7.jpg",
  "img/picture-8.jpg",
  "img/picture-9.jpg",
  "img/picture-10.jpg"
]

let imgIndex=0;
setInterval(
  function() {
    if(imgIndex===images.length){
      imgIndex=0;
    }
    document.getElementById('imgField').setAttribute('src', images[imgIndex])
    console.log(images[imgIndex]);
    imgIndex++;
  }
,1300);
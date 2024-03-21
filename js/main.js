const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById('fullImg');


fullImgBox.addEventListener(`click`, ()=>{
	fullImgBox.style.display = "none";
});

function openImg(ref){
	fullImgBox.style.display = "flex";
	fullImg.src = ref;
}
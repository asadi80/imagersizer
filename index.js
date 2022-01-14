
function imagersizer(){
    let images = document.querySelectorAll('.imageresizer');
    images.forEach(image=>{
        image.style={
            width: "1080px",
            height: "1080px"
        }
    })


}
module.exports.imagersizer= imagersizer;
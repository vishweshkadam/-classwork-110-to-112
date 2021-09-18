Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }

});
camera=document.getElementById("camera");
Webcam.attach("#camera")

function takesnapshot(){
    Webcam.snap(function (image){
    document.getElementById("snapshot").innerHTML="<img id='img_diplay' src=' "+image+"'>" 
      
    });
}
console.log("ml5 version "+ ml5.version )

classifier=ml5.imageClassifier("mobileNet", molding)

function molding(){
    console.log("model loded")
}

function identification_image(){
myimg=document.getElementById("img_diplay");
classifier.classify(myimg,result_img)

}
function result_img(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("result_img").innerHTML=result[0].label;
    }

}
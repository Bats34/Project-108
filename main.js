var classifier;
function Classifation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hdTkrhF3b/model.json",model_loaded);
}
function model_loaded() {
    console.log("Model loaded");
   classifier.classify(GotResults);
}
function GotResults(error, results){
if (error) {
    console.error(error);
} 
else{
    console.log(results);
    document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
   
 img1=document.getElementById("img");  

 if (results[0].label == "cat") {
    img1.src="https://static.vecteezy.com/system/resources/thumbnails/002/787/928/small_2x/cute-orange-cat-paws-up-over-wall-cartoon-illustration-vector.jpg";
 }
  else if (results[0].label == "dog") {
    img1.src="https://static.vecteezy.com/system/resources/previews/006/940/182/original/simple-minimalist-cute-dog-cartoon-illustration-drawing-premium-vector.jpg";
 }
  else if (results[0].label == "Background Noise") {
    img1.src="https://thumbs.dreamstime.com/b/cartoon-ear-line-icon-drawing-human-ear-line-icon-simple-cartoon-drawing-black-white-outline-isolated-vector-clip-art-224724158.jpg";
  }
 else  {
    img1.src="https://www.shutterstock.com/image-vector/cute-baby-cow-sitting-cartoon-260nw-1929034604.jpg";
 }
}
}




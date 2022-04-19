function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o0pR4EkEm/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(){
    console.log("gotResults");
}
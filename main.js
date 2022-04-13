function dance()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fyX1sgRWY/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

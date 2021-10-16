function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/EjxY7HJ03/model.json",modelReady);   
}

function modelReady() {
    classifier.classify(gotResults);
}

function  gotResults(error,results) {
  if (error) {
      console.error(error);    
  } else {
    console.log(results);
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = 'I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy-'+ (results[0].confidence *100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
    
    img1 = document.getElementById("alien-01");
    img2 = document.getElementById("alien-02");
    img3 = document.getElementById("alien-03");
    img4 = document.getElementById("alien-04");

    if (results[0].label =="clap") {
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
        
    } else if(results[0].label == "snap") {
        img2.src = "aliens-02.gif";
        img1.src = "aliens-01.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
          
    }
    else if(results[0].label == "bell") {
        img3.src = "aliens-03.gif";
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img4.src = "aliens-04.png";
  }
  else{
    img4.src = "aliens-04.gif";
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
  }
}
}
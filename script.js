var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
document.getElementById("animal").innerHTML = animals;

function convert() {
  animals.sort(function(a, b) {return 0.5 - Math.random()});
  
  document.getElementById("animal").innerHTML = animals;
}

function whatisit() {
  var result;
  var animals2 = ["dog", "fish", "cat", "shark", "cat", "dog"]
  if (animals2 == "dog") {
    result = "Borf Borf";
  } else if (animals2 == "cat"){
    result = "I am a cat";
  } else if (animals2 == "shark"){
    result = "I am Jaws";
  } else if (animals2 == "fish"){
    result = "I am Nemo"; 
  }
  document.getElementById("animal2").innerHTML = result;
}
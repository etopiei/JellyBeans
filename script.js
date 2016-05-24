function getData () {
    
    var height =document.getElementById('height').value;
    var radius=document.getElementById('radius').value;
    var radiusUnits = document.getElementById('radiusSelection').value;
    var heightUnits = document.getElementById('heightSelection').value;
    var percentPackingFactor = document.getElementById('slider').value;
    var packingFactor = (0.11*(percentPackingFactor/100))+0.6
    
    if (radiusUnits === "in") {
        
        radius = convertFromInchesToCm(radius);
        
    }
    
    if (heightUnits === "in") {
        
        height = convertFromInchesToCm(height);
        
    }
    
    calculateResult(height,radius,packingFactor);
    
}

function calculateResult (height, radius, packingFactor) {
    
    var volumeOfJar = radius*radius;
    volumeOfJar *= Math.PI;
    volumeOfJar *= height;
    var volumeOfBeans = volumeOfJar * packingFactor;
    var NumberOfBeans = Math.floor(volumeOfBeans/1.64);
    
    $(".result").html("Estimated number of jelly beans is: " + NumberOfBeans);

};

function convertFromInchesToCm (number) {
    
      number *= 2.54;
      return number;
    
};
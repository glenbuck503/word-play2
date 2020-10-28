$(document).ready(function() {
  $("#wordplay").submit(function(event) {
    event.preventDefault();

    let userInput = $("input#sentence").val();
    let threeList = [];
    let sentence = userInput.split(" ");
    sentence.forEach(function(element) {
      threeList.push(element = element.length > 3);
    });
    console.log(threeList);
    
    
    

    const results = [];

    array.push(userInput);
    
  
     $("output").show()
    
  });
});
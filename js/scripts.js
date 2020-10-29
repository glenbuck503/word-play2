$(document).ready(function() {
  $("#wordplay").submit(function(event) {
    event.preventDefault();

    let userInput = $("input#sentence").val();
    let threeList = [];
    let notThree = [];
    let sentence = userInput.split(" ");
    sentence.forEach(function(element) {
      if (element.length > 3) {
        threeList.push(element)
      } else {
        notThree.push(element);
      }
    });
    console.log(threeList);
    let results = threeList.join(" ");
    console.log(results);

    
     $(".output").show();
     $(".output").text(results);
    
  });
});
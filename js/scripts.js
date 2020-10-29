$(document).ready(function() {
  $("#wordplay").submit(function(event) {
    event.preventDefault();

    $(".output").hide();
    let userInput = $("input#sentence").val();
    let threeList = [];
    let notThree = [];
    let finalArray = [];
    let sentence = userInput.split(" ");
    sentence.forEach(function(element) {
      if (element.length > 3) {
        threeList.push(element)
      } else {
        notThree.push(element);
      }
    });

    let reverse = threeList.reverse();
    
    let final = reverse.join(" ");
    let finalResult = finalArray.push(final);
    console.log(finalArray);
   
    $(".output").show();
     $("p").text(finalArray);
    
  });
});
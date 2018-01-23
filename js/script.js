// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
	 $("#button").click(function(){
        var message = $("input").val();
        var Userinput = ay(message)
     $("#result").text(Userinput);
     $("#result").empty();
      var words= message.split(" ");
      
     for (var i=0; i < words.length; i++) {
      	$("#result").append(ay(words[i]));
     }
     
	 });
     
    function ay(words) {
    	 var firstL = words.slice(0,1);
         var lastL  = words.slice(1,words.length);
         
     if (firstL === "a" || firstL === "e" || firstL === "i" || firstL === "o" || firstL === "u"){
       return (words + "yay")
      }
       else {
        return(lastL + firstL + "ay")
       }
 
 
      return words + "ay";
      
    }

  
   
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance



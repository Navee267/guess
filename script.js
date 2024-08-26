var input = document.getElementById("inputbox")
    var totalScore = 10
    var score = document.getElementById("score")
    var result = document.getElementById("result")
    var rand = Math.random()
    var randomnumber = Math.floor(rand*10)+1
    console.log(randomnumber);
    
    function Check(){
        var inputvalue = input.value
        if(inputvalue == randomnumber){
            result.textContent = "You Won";
            console.log("Right");
        }
        else{

            result.textContent = "You Lose";
            totalScore = totalScore - 1;
            score.textContent =" Score :" + totalScore;
            console.log("wrong");

            if(totalScore<0){
                alert("You Lose ,Try Again !");
                window.location.reload();
            }
        }
    }
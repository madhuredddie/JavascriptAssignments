function check(playerOne,playerTwo)
{
    if(playerOne=="paper")
    {
        if(playerTwo=="rock")
        {
            return "Player1 wins"
        }
        else if(playerTwo=="paper")
        {
            return "Tie"
        }
        else{
              return "Player2 wins"
        }
    }
    else if(playerOne=="rock")
    {
        if(playerTwo=="rock")
        {
            return "Tie"
        }
        else if(playerTwo=="paper")
        {
            return "Player2 wins"
        }
        else{
              return "Player1 wins"
        }
    }
    else{
        if(playerTwo=="rock")
        {
            return "Player2 wins"
        }
        else if(playerTwo=="paper")
        {
            return "Player1 wins"
        }
        else{
              return "Tie"
        }
    }
}

function test(name,actual,expected)
{
    if(actual===expected){
        console.log(name+" Test passed ,"+actual+"  equals to "+expected)
    }
    else{
        console.log(name+"  Test failed! ,"+actual+"  not equals to "+expected)

    }
    
}
test("player1 is scissors, player2 is paper","Player1 wins",check("scissor","paper"))
test("player1 is scissors, player2 is scissors","Tie",check("scissors","scissors"))
test("player1 is scissors, player2 isrock","Player2 wins",check("scissors","rock"))
test("player1 is rock, player2 is paper","Player2 wins",check("rock","paper"))
test("player1 is rock, player2 is scissors","Player1 wins",check("rock","scissors"))
test("player1 is rock, player2 is rock","Tie",check("rock","rock"))
test("player1 is paper, player2 is paper","Tie",check("paper","paper"))
test("player1 is paper, player2 is scissors","Player2 wins",check("paper","scissors"))
test("player1 is paper, player2 is rock","Player1 wins",check("paper","rock"))
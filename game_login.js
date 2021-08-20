function addUser()
{
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="game_page.html";
}

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_word="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML= row ;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase="+word);

    charAt1=word.charAt1(1);
    console.log(charAt1);

    lenght_divide_2=Math.floor(word.lenght/2);
    charAt2=word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1=word.lenght-1;
    charAt3=word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'>Q . "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
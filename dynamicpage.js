
// var quest = {
// 	question : "what is the sum of these A,B where A=10 and B=12",
// 	ans1:'22',
// 	ans2:'11',
// 	ans3:'33',
// 	ans4:'44',
// }

// var linebreak = "</br>"

function testStart() {
	document.getElementById("form_change").innerHTML = "<h1>Your test begin Now....!</h1>";
	}

function myFunction() {
  alert('Your Test has been completed');
}
function validate(){
		var username = document.getElementById("username");
		var password = document.getElementById("password");
			alert ("Login successfully");
			document.getElementById("hello").innerHTML = "<input type='button' onclick='test_func()' class='cancelbtn' value='start'/>";

		}

	function openForm() {
  // document.getElementById("myForm").style.display = "block";
  document.getElementById("hello").innerHTML = "<div class='form-popup' id='myForm'>"+
  													"<form action='/action_page.php' class='form-container'>"+
  													"<h1>Login</h1>"+
  													"<label>User Name :</label>"+
  													"<input type='text' name='username' id='usernameid'/>"+
  													"<br/><label>Password : </label>"+
  													"<input type='password' name='password' id='password'/><br/>"+
  													"<button type='button' class='btn' onclick='validate()'> login </button>"+
  													"<button type='button' class='btn cancel' onclick='closeForm()'>Close</button>"+
  													"</form></div>";
}

function Question_print(i,Solution_data,data) {
	var text = "";
	text += "Question : " + data[i.toString()] + linebreak;
	for (var j = 0; j < 4; j++){
		text += "<input type='radio' name='solution"+i.toString()+"'>"+"Question : " + Solution_data[i.toString()][j.toString()] + linebreak;
	}
	
	text += "<input type='button' value='next' />";
	text += "<input type='submit' onclick='myFunction()' />";

	i += 1;

	document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";
}

function submit_option() {
	  var txt;
	  var person = prompt("Do you want tosubmit test than enter your email and press ok:", "abc@gmail.com");
	  if (person == null || person == "") {
	    txt = "User continue the quiz.";
	    test_func()
	  } else {
	    txt = "Hello " + person + " you result submitted to your email address";
	  }
	  document.getElementById("page_context").innerHTML = text;
}

function test_func() {
	var mydata = JSON.parse(Solution_data);
	var mydata1 = JSON.parse(data);
	var question_Id = ['q1','q2','q3','q4','q5'];
	var rand = question_Id[(Math.random() * question_Id.length) | 0];
	var text = "";
	var linebreak = "</br>"
	text +=  mydata1[rand] + linebreak;
	var newvar = mydata[rand];
	for (var j = 0; j < (newvar).length; j++){
		var x = j.toString();
		var trying = newvar;
		var tryu = trying[x]
		text += "<input type='radio' name='solution"+"'>" + tryu + linebreak;
	}
	
	text += "<input type='button' value='next' onclick='test_func()' />";
	text += "<input type='submit' onclick='submit_option()' />";

	document.getElementById("hello").innerHTML = text


}

// var start = {}

// function testContent(start) {
	
// 	var mydata = JSON.parse(Solution_data);
// 	var mydata1 = JSON.parse(data);

// }
// var text = "";
// 	var rand = ['q1','q2','q3','q4','q5'] 
// 	var show = rand[Math.floor(Math.random()*rand.length)];
// 	text +=  mydata1[rand] + linebreak;
// 	text += "Question : " + mydata1.rand + linebreak;


// 		for (var j = 0; j < 3; j++){
// 			var variable = mydata[f];
// 			var f = j;
// 		text += "<input type='radio' name='solution"+"' />"+ mydata0
// 	text += "<input type='button' value='next' onclick='test_func()' />";
// 	text += "<input type='submit' onclick='submit_option()' />";

// 	document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";








// function myFunction() {
//   var myWindow = window.open("", "MsgWindow", "width=200,height=100");
//   myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");



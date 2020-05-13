//calculator.html

<html> 
   <head> 
   <h4><b><center>CALCULATOR</center></b></h4>
      <script src="calc.js"> 
      </script>
   </head> 
   <body> 
        <center>
        <table border="1"> 
		<tr>
			<td colspan='4'><input type='text' id='result'/></td>
		</tr>
         <tr> 
            <td><input type="button" value="1" onclick="num('1')"/> </td> 
            <td><input type="button" value="2" onclick="num('2')"/> </td> 
            <td><input type="button" value="3" onclick="num('3')"/> </td> 
            <td><input type="button" value="/" onclick="num('/')"/> </td> 
         </tr> 
         <tr> 
            <td><input type="button" value="4" onclick="num('4')"/> </td> 
            <td><input type="button" value="5" onclick="num('5')"/> </td> 
            <td><input type="button" value="6" onclick="num('6')"/> </td> 
            <td><input type="button" value="-" onclick="num('-')"/> </td> 
         </tr> 
         <tr> 
            <td><input type="button" value="7" onclick="num('7')"/> </td> 
            <td><input type="button" value="8" onclick="num('8')"/> </td> 
            <td><input type="button" value="9" onclick="num('9')"/> </td> 
            <td><input type="button" value="+" onclick="num('+')"/> </td> 
         </tr> 
         <tr> 
            <td><input type="button" value="." onclick="num('.')"/> </td> 
            <td><input type="button" value="0" onclick="num('0')"/> </td> 
            <td><input type="button" value="=" onclick="solve()"/> </td> 
            <td><input type="button" value="*" onclick="num('*')"/> </td> 
         </tr> 
      </table> 
	  </center>
   </body> 
</html>    

//calc.js

function num(val) 
{ 
document.getElementById("result").value+=val 
}  
function solve() 
{ 
let x = document.getElementById("result").value 
let y = eval(x) 
document.getElementById("result").value = y 
} 
function clear() 
{ 
document.getElementById("result").value = "" 
} 

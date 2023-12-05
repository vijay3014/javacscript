/* operator
    arithmatic => + - * / % ** ++ --
    relational => == != === !== < > <= >= for if-else use ?:
    assingment => += -= /= %= **=
    logical    => && || ! ^(XOR)
    chack variable type(typeof)
*/     

//    console.log(5**3);
//    console.log(10=="10")  only value chaeck
//    console.log(10==="10") value chaeck and data type cheack
//    console.log(5!="5")
//    console.log(5!=="5")
//    console.log(0^0)
//    console.log(0^1)
//    console.log(1^0)
//    console.log(1^1)
//    console.log((10<3)?"true":"false") cheack if else
//    console.log(typeof(10))
//    console.log(typeof("10"))
//    console.log(typeof(true))
//    console.log(10+"5")
//    console.log(typeof(10+"5"))
//    console.log(10-"5")
//    console.log(typeof(10-"5"))
//    console.log("100"-5)
//    console.log(typeof("100"-5))
//    * and / are the same of the above

// if else

let x = Number(prompt("enter x: "));
let y = Number(prompt("enter y: "));

if (x<2000 || x>3000)
{
    console.log("value of x is: "+x);
}
if(100<y && y<500)
{
    console.log("value of y is: "+y);
}
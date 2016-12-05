var s1 = "2 + 2"; //Creates a string literal value// 
 var s2 = new String("2 + 2"); // Creates a String 
 console.log(eval(s1));  
 console.log(eval(s2)); // Returns the string // 
	//charAt//
	    var str = "HELLO WORLD";
	    var res = str.charAt(6)
	    console.log(res);
//charcodeat//
var st = "SOMETHING IS THERE";
 var rs = st.charCodeAt(2)
 console.log(rs);

 //codePointAt//
//var str="how are you";
  //  var res=str.codePointAt(6)
    //console.log(res)

//indexof
var strr = "Hello world, welcome to the universe.";
    var n = strr.indexOf("u");
    console.log(n);

    //lastIndexOf
    var sot = "Hello world, welcome to the universe.";
    var s = sot.lastIndexOf("o");
    console.log(s)

    //concat

    var first = ["sol","mol"];
    var last =["thop","thop", "mjol"];
    var full = first.concat(last);
    console.log(full)

    //fromCharCode

    var re = String.fromCharCode(68);
    console.log(re)

    //fromCodePoint

 var rest = String.fromCodePoint(66);
 console.log(rest)


//split
var re = "what is your question";
 var rs = re.split(" ");
 console.log(rs)
 
//slice
var rd = ["how", "can", "you", "define", "this"];
var re = rd.slice(1,4);
console.log(re)

//substring
var 


















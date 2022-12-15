let a=prompt("enter the first value");
let b=prompt("enter the second value");
let c;
function myFunc(a,b){
    c=a;
    a=b;
    b=c;
    document.write("first value "+a+"<br>");
    document.write("second value "+b);
}
myFunc(a,b);
x=[];
function submit(){
var y=[];
for(var j=1; j<=4; j++){
var z=document.getElementById("name_of_the_student_"+j).value;
console.log(z);
x.push(z);
}
console.log(x);
var l=x.length;
console.log(l);

for(var k=0; k<l; k++){
y.push("<h4>name- "+x[k]+"</h4>");
console.log(y);
}
console.log(y);
document.getElementById("display_name_with_commas").innerHTML=y;

var r=y.join(" ");
console.log(r);
document.getElementById("display_name_without_commas").innerHTML=r;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    x.sort();
    console.log(x);

    var y1=[];

    var l1=x.length;
console.log(l1);

for(var k1=0; k1<l1; k1++){
y1.push("<h4>name- "+x[k1]+"</h4>");
console.log(y1);
}
console.log(y1);
document.getElementById("display_name_with_commas").innerHTML=y1;

var r1=y1.join(" ");
console.log(r1);
document.getElementById("display_name_without_commas").innerHTML=r1;
}
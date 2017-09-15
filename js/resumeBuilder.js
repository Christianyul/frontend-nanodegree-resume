/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["ladron","traficante","pelotero","programador"]

//$("#main").append(skills.length)

var bio = {
    "name":"Christian",
    "role": "Developer",
    "contactinfo":8092998585,
    "urlpic":"images/me.jpg",
    "welcomemsg":"Hi there! I'm using this.",
    "skills":skills
}
for(key in bio){
    //console.log(key);
    $("#main").append(bio[key]);
    $("#main").append("<br>");
}
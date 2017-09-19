/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ['ladron','traficante','pelotero','programador']

//$('#main').append(skills.length)

var bio = {
    'name':'Christian',
    'role': 'Developer',
    'contactinfo':8092998585,
    'urlpic':'images/fry.jpg',
    'welcomemsg':'Hi there! I\'m using this.',
    'skills':skills
}

var work={}

work.currentposition = 'Developer';
work.employer = 'Samuel Jackson';
work.yearsworked = 3;
work.city='Manhattan';

var education={}

education['lastschool']='ITESA';
education['years']=2;
education['schoolcity']='Santo Domingo'
//console.log(key);
$('#header').prepend(HTMLheaderRole.replace('%data%',bio['role']));
$('#header').prepend(HTMLheaderName.replace('%data%',bio['name']));

$('#topContacts').append(HTMLmobile.replace('%data%',bio['contactinfo']));

$('#header').append(HTMLbioPic.replace('%data%',bio['urlpic']));
$('#header').append(HTMLwelcomeMsg.replace('%data%',bio['welcomemsg']));
$('#header').append(HTMLskillsStart);
bio['skills'].forEach(function(element) {
    $('#skills').append(HTMLskills.replace('%data%',element));
});



/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ['ladron','traficante','pelotero','programador']

//$('#main').append(skills.length)

var bio = {
    'name':'Christian',
    'role': 'Developer',
    'contactinfo':8092998585,
    'urlpic':'images/me.jpg',
    'welcomemsg':'Hi there! I\'m using this.',
    'skills':skills
}
//console.log(key);
$('#header').prepend(HTMLheaderRole.replace('%data%',bio['role']));
$('#header').prepend(HTMLheaderName.replace('%data%',bio['name']));
$('#topContacts').prepend(HTMLmobile.replace('%data%',bio['contactinfo']));
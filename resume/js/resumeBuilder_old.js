/*
This is empty on purpose! Your code to build the resume will go here.

 $("#main").append("Gökhan");

 var awesomeThoughts = "I am Gökhan and i am AWESOME."

 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);
 */

//name = "Gökhan";
//role = "Web Developer"

/*
var skills = ["Typography", "Web Development"];

$("#main").append("Skills: " + skills[1]);
*/

var bio = {
    "name" : "Gökhan Apaydın",
    role : "Front-end Web Developer",
    email : "gapay84@gmail.com",
    bioPic : "images/propic.jpg",
    welcomeMsg : "Welcome",
    skills : ["HTML", "CSS", "Javascript", "Typography"]
}

bio.twitter = "twitter.com/gokhanap";
//bio["twitter"] =  "twitter.com/gokhanap";


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLworkTitle.replace("%data%", bio.role);
var formattedContactInfo = HTMLemail.replace("%data%", bio.email);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.twitter);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#lets-connect").append(formattedContactInfo);
$("#lets-connect").append(formattedtwitter);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedbioPic);
$("#header").append(formattedSkills);

var work = {
    currentJob : {}
}
work.currentJob.position = "Research Assistant";
work.currentJob.employer = "Anadolu University";
work.currentJob.yearsWorked = "2014-2017";
work.currentJob.city = "Eskişehir";

var education = {};

education["lastSchool"] = "Anadolu University, Fine Arts Institute";
education["yearsAttended"] = "2014-2017";
education["city"] = "Eskişehir";

var formattedschoolName = HTMLschoolName.replace("%data%", education["lastSchool"]);


$("#header").append(work["currentJob"]["position"]);
$("#header").append(education["lastSchool"]);
$("#header").append(formattedschoolName);



var education = {
    "schools" : [
    {
        "name" : "Anadolu University",
        "field" : "Graphic Design Master Programme",
        "years" : "2014-2017"
    },
    {
        "name" : "Anadolu University",
        "field" : "Graphic Design Bachelor",
        "years" : "2008-2010"
    }
    ]
};







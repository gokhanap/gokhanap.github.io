// WORK OBJECT
var work = {
    "jobs" : [
    {
        "employer" : "Anadolu University",
        "title" : "Research Assistant",
        "location" : "Eskişehir",
        "dates" : "2014-2017",
        "description" : "Research assistant at graphic design department. Assisted typography, interactive graphic design and web design courses."
    },
    {
        "employer" : "Akira Works",
        "title" : "Art Director",
        "location" : "Eskişehir",
        "dates" : "2012-2014",
        "description" : "Responsible for companies design project and coordination with clients. Worked on print and motion graphic projects."
    },
    {
        "employer" : "Gap Creative",
        "title" : "Graphic Designer",
        "location" : "Eskişehir",
        "dates" : "2011-2012",
        "description" : "Worked mostly on print media. Package design, poster, corporate identity materials."
    }],

    //DISPLAY FUNCTION FOR WORK
    display : function() {
    work.jobs.forEach(function(job){
        $("#workExperience").append(HTMLworkStart);
        formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
        formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
        formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
        formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle + formattedHTMLworkLocation + formattedHTMLworkDates + formattedHTMLworkDescription);
    });
    }
    }

//PROJECTS OBJECT
var projects = {
    "projects" : [
    {
        "title" : "Project1",
        "dates" : "2017",
        "description" : "International Anadolu Calligraphy & Typography Event Website",
        "images" : "images/caltyp.jpg"
    }/*,
    {
        "title" : "Project2",
        "dates" : "2014",
        "description" : "description",
        "images" : "images/197x148.gif"
    },
    {
        "title" : "Project3",
        "dates" : "2013",
        "description" : "description",
        "images" : "images/197x148.gif"
    }*/
    ],

    //DISPLAY FUNCTION FOR PROJECTS
    display : function() {
        projects.projects.forEach(function(x){
            $("#projects").append(HTMLprojectStart);
            formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", x.title);
            formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", x.dates);
            formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", x.description);
            formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", x.images);
            $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription + formattedHTMLprojectImage);
        });
    }
    }

//BIO OBJECT
var bio = {
    "name" : "Gökhan Apaydın",
    "role" : "Front-end Web Developer",
    "welcomeMsg" : "Hello! My name is Gökhan.</br>I am a front-end web developer</br>equiped with design skills.",
    "biopic" : "images/propic.jpg",
    "contacts" : {
        "mobile" : "",
        "email" : "gapay84@gmail.com",
        "github" : "gokhanap",
        "linkedin" : "gapaydin",
        "website" : "http://www.gokhanapaydin.com/",
        "location" : "Eskişehir, Turkey"},
    "skills" : ["HTML/CSS/Javascript", "Adobe Illustrator/Indesign/Photoshop", "Git/Github"],

    //DISPLAY FUNCTION FOR BIO
    display : function(x) {

        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedContactEmail);
        $("#footerContacts").append(formattedContactEmail);

        formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedContactGithub = formattedContactGithub.replace("#", bio.contacts.github);
        $("#topContacts").append(formattedContactGithub);
        $("#footerContacts").append(formattedContactGithub);

        formattedContactLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        formattedContactLinkedin = formattedContactLinkedin.replace("#", bio.contacts.linkedin);
        $("#topContacts").append(formattedContactLinkedin);
        $("#footerContacts").append(formattedContactLinkedin);

        formattedContactWebsite = HTMLwebsite.replace("%data%", bio.contacts.website.slice(11, 28));
        formattedContactWebsite = formattedContactWebsite.replace("#", bio.contacts.website);
        $("#topContacts").append(formattedContactWebsite);
        $("#footerContacts").append(formattedContactWebsite);

        formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedContactLocation);
        $("#footerContacts").append(formattedContactLocation);

        formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#bio").append(formattedbioPic);

        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#bio").append(formattedWelcomeMsg);
        /*
        formattedSkills = HTMLskills.replace("%data%", bio.skills);
        formattedtwitter = HTMLtwitter.replace("%data%", bio.twitter);
        */
        if (bio.skills.length > 0) {
            $("#bio").append(HTMLskillsStart);
            formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedskills);
            formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedskills);
            formattedskills = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedskills);
        };
    }
    }

// EDUCATION OBJECT
var education = {
    "schools" : [
    {
        "name" : "Anadolu University",
        "location" : "Eskişehir",
        "degree" : "Bachelors",
        "dates" : "2008-2011",
        "url" : "http://www.anadolu.edu.tr/en/",
        "majors" : ["Graphic Design"]
    },
    {
        "name" : "Anadolu University",
        "location" : "Eskişehir",
        "degree" : "Master",
        "dates" : "2014-2017",
        "url" : "http://www.anadolu.edu.tr/en/",
        "majors" : ["Graphic Design"]
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Front-end Developer Nanodegree Program",
        "school" : "Udacity",
        "dates" : "2017",
        "url" : "http://www.udacity.com/"
    }/*, PLANNED FOR FUTURE
    {
        "title" : "Full stack",
        "school" : "Udacity",
        "dates" : "2017",
        "url" : "http://www.udacity.com/"
    }*/
    ],

    //DISPLAY FUNCTION FOR EDUCATION
    display : function() {

        //DISPLAYS SCHOOLS ARRAY
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            formattedschoolName = HTMLschoolName.replace("%data%", school.name);
            formattedschoolName = formattedschoolName.replace("#", school.url);
            formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolMajor + formattedschoolLocation);
        });
            $("#education").append(HTMLonlineClasses);

        //DISPLAYS ONLINECOURSES ARRAY
        education.onlineCourses.forEach(function(onlineCourse){
            $("#education").append(HTMLschoolStart);
            formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
        });
        }
    }



work.display();

projects.display();

bio.display();

education.display();




/*
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/



//  APPEND MAP
//$("#mapDiv").append(googleMap);


/* INTERNATIONALIZE BUTTON
$("#main").append("<button>Internationalize me");


function inName(name) {
    namein = bio.name.split (" ");
    namein = namein[0] + " " +namein[1].toUpperCase()
    return namein;
}
*/






/*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
})
*/



/*
----------------------
// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locations = [];
    work.jobs.forEach(function(array){
      locations.push(array.location);
    });

    return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
----------------------------
*/



/*if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedskills);
var formattedskills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedskills);
}
*/
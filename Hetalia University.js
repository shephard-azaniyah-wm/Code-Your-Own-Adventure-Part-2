/**
 * Created by session1 on 10/1/15.
 */
confirm("Greetings fellow country. Thank you for choosing our significant school of history to learn.");
var name = prompt ("Yo, yo, yooo! I am America here to save and lead you around this amazing campus!");
confirm("Nice to meet you!");
var age = prompt ("I can guess your age right now, but Britain says its rude behaviour or whatever. Anyway how old are you friend?");
if(age < 12)
{
    console.log("Oh really? You must be one heck of a smart nation!");
}
else {
    console.log("Well at least you're not as old as China. Sheesh he is old!");
}
alert("Just then a blond fellow walked up and hit America with a news paper. He lectures America about the fowl things he had stated. After so much" +
    "yelling he turns to face you now with a shocked face at all the craziness.")

var userAnswer = prompt ("This must be new to you, huh?");
if(userAnswer == "yes")
{
    console.log("Sweet! Well don't worry you'll get the hang of it.");
}
else {
    console.log("Oh so you must be a very wise nation.");
}

var text;
var favCharacter = prompt("Hey so check it! These 3 powerful and generous countries want to show you around! However only one can " +
    "be your trusty guide. Their names are Austria, Switzerland, and Belgium.");
switch(favCharacter) {
    case "Austria":
        text = "Hello, Austria here I'll show you to your class! Ending:Austria shows you the orchestra classroom. You are thrilled to be in such a room with all of your favorite musical instruments!" +
            "Austria was very surprised and asked if you would like to join the club for music lovers. You graciously smile at Austria and agree happily.";

        break;
    case "Switzerland":
        text = "Alright hurry up. We're waisting daylight standing here. Ending:You and Switzerland head over to wellness. You explain to switzerland how active of a country you are." +
            "Switzerland is shocked by what you have explained. He asks you in a stern voice if you would join the track team. You agree to join and Switzerland pats you on the back excited to see you there.";
        break;
    case "Belgium":
        text = "Hey friend! I will happily take you there! Ending: Belgium leads you to the culinary class. You tell her about all your favorite recipes. Belgium jumps with joy and without hesitation invites you into the competitive cooking team." +
            "You give a big thumbs up and agree. Both of you laugh and cheer before the bell rang. ";
        break;
    default:
        text = "Come again? I don't believe they're available right now.";
        break;
}
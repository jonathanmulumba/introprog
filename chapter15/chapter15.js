var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

todoButton.addEventListener("click", displayActivity);
var d = new Date();
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    var dayOfweek = d.getDay();
    var youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }
    document.getElementById("thingToDO").innerHTML = youShould;
}
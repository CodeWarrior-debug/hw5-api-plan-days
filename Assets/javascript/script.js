// GIVEN I am using a daily planner to create a schedule // WHEN I open the planner// THEN the current day is displayed at the top of the calendar
    var buttonListEl = $('#buttons');
    var savedNotes;
    var newNotes={};
    // var t9={}; var t10={}; var t11={}; var t12={}; var t13={}; var t14={}; var t15={}; var t16={}; var t17={}; var t18={};

    //var timeArray=[t9, t10, t11, t12, t13, t14, t15, t16, t17, t18]
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
    
// THEN  timeblocks for standard business hours//THEN each timeblock is color coded to indicate whether it is in the past, present, or future//// WHEN I click into a timeblockI can enter an event
//stack overflow question 25498082

function buildWorkDay() {
    for (i=9 ; i < 19 ; i++){
        
        var timeTense;
        var timeHrInterval = parseInt(moment(i,'hour').format('H'));
        var hourNow=parseInt(moment().format('H'));

            //Check if workday hour is past,present,future

        if (timeHrInterval < hourNow){
            timeTense='past';
        } else if (timeHrInterval===hourNow) { 
            timeTense='present';
        } else {timeTense='future'};

            //Send timeblock html code to index.html with id's and classes being added dynamically

        var timeBlockHtml = '<div class="row time-block" id="' + i + '">' +
        '<div class="hour col-1 p-3">' + moment(i,'hour').format('h A') + '</div>' +
        '<textarea class="description txt '+ timeTense +'" group="' + i + '"cols="100" rows="3"></textarea>' +
        '<button class="btn saveBtn col" group="' + i + '"> <i class="fas fa-unlock-alt"> </i> </button>' +
        '</div>';

            //add to page within container
        $(timeBlockHtml).appendTo('.container');
    }
}                    
    //build HTML
buildWorkDay();
    //add listeners via delegation
var buttonListEl = $('.saveBtn');
    
$('.saveBtn').click(function(){
    
    var thisBtn=$(this);
    var btnNumber = thisBtn.attr('group');
    var textareaOrdered= thisBtn.parent().children(1);
    var textareaText=textareaOrdered[1].value;
    // localStorage.setItem['savedNotes'];
    recordNotes();
    function recordNotes(){
        myNotes = {
            text: [textareaText],
            hour: [btnNumber],
        }
        savedNotes();
                    }
        function savedNotes() {
        savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];
        if (savedNotes.length===0) {
            localStorage.setItem("savedNotes", JSON.stringify(myNotes));
        } else 
        {
            savedNotes.text.push(myNotes.text[0]);
            savedNotes.hour.push(myNotes.hour[0]);
            localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
        };
                            }
})
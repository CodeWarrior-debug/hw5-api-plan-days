    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY')); //display current day at top
    
// THEN  timeblocks for standard business hours//THEN each timeblock is color coded to indicate whether it is in the past, present, or future//// WHEN I click into a timeblockI can enter an event
//stack overflow question 25498082

function buildWorkDay() {
    for (i=9 ; i < 18 ; i++){ 
        var timeTense;
        var timeString =('#text' + i).toString();
        var timeHrInterval = parseInt(moment(i,'hour').format('H'));
        var hourNow=parseInt(moment().format('H'));

        if (timeHrInterval < hourNow){  //Check if workday hour is past,present,future
            timeTense='past';
        } else if (timeHrInterval===hourNow) { 
            timeTense='present';
        } else {timeTense='future'};

        var timeBlockHtml = '<div class="row time-block" id="' + i + '">' + //design timeblock html code to index.html dynamically
        '<div class="hour col-1 p-3">' + moment(i,'hour').format('h A') + '</div>' +
        '<textarea class="description txt '+ timeTense +'" id="text' + i + '"cols="100" rows="3">' + (JSON.parse(localStorage.getItem('text'+ i)) || "") + '</textarea>' +
        '<button class="btn saveBtn col" group="' + i + '"> <i class="fas fa-unlock-alt"> </i> </button>' +
        '</div>';
        $(timeBlockHtml).appendTo('.container'); //add to page within container
        // $(timeString).value='halleluha'; //JSON.parse(localStorage.getItem('text'+ i));
    }
}                    
buildWorkDay();

    var buttonListEl = $('.saveBtn'); //add listeners via delegation
    $('.saveBtn').click(function(){
    var thisBtn=$(this);
    var saveTag=( 'text' + thisBtn.attr('group')); //develop storage object tag
    var textareaOrdered= thisBtn.parent().children(1);
    var textareaText=textareaOrdered[1].value;
    localStorage.setItem(saveTag, JSON.stringify(textareaText));
    });
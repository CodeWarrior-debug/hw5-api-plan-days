$('#currentDay').text(moment().format('dddd, MMMM Do YYYY')); //display current day at top

function buildWorkDay() {  //set loop to military hours of 9-5 working day, then declare variables using moment about the present time
    for (i=9 ; i < 18 ; i++){ 
        var timeTense;
        var timeString =('#text' + i).toString();
        var timeHrInterval = parseInt(moment(i,'hour').format('H'));
        var hourNow=parseInt(moment().format('H'));

        if (timeHrInterval < hourNow){  //Check if workday hour is past,present,future and class accordingly
            timeTense='past';
        } else if (timeHrInterval===hourNow) { 
            timeTense='present';
        } else {timeTense='future'};

        var timeBlockHtml = '<div class="row time-block" id="' + i + '">' + //timeblock html code to index.html dynamically -stack oflow? 25498082
        '<div class="hour col-1 p-3">' + moment(i,'hour').format('h A') + '</div>' +
        '<textarea class="description txt '+ timeTense +'" id="text' + i + '"cols="100" rows="3">' + (JSON.parse(localStorage.getItem('text'+ i)) || "") + '</textarea>' +
        '<button class="btn saveBtn col" group="' + i + '"> <i class="fas fa-unlock-alt"> </i> </button>' +
        '</div>';
        $(timeBlockHtml).appendTo('.container');}} //add to page within container object
    buildWorkDay(); // execute the build

    var buttonListEl = $('.saveBtn'); //now all buttons are present, add button listeners via delegation
    $('.saveBtn').click(function(){ // when button clicked, save text to local storage (ctd below.)
    var thisBtn=$(this);
    var saveTag=( 'text' + thisBtn.attr('group')); //develop storage object tag
    var textareaOrdered= thisBtn.parent().children(1); //traverse DOM
    var textareaText=textareaOrdered[1].value; //get text from textarea
    localStorage.setItem(saveTag, JSON.stringify(textareaText));}); //pass to storage
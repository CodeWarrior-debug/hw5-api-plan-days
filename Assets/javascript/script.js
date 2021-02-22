    // works for hour, am/pm  ***************RESOURCE**************************
    //$('#currentDay').text(moment().format('hh a'));

// ***************BEGIN**************************
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
    

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//stack overflow question 25498082


function buildWorkDay() {
    for (i=9 ; i < 19 ; i++){
        
        var timeBlockHtml = '<div class="row time-block" id="' + i + '">' +
        '<div class="hour col-1 p-3">' + moment(i,'hour').format('hh a') + '</div>' +
        '<textarea class="description" cols="100" rows="3"></textarea>' +
        '<button class="btn saveBtn col"> <i class="fas fa-unlock-alt"> </i> </button>' +
        '</div>';
        $(timeBlockHtml).appendTo('.container');
        
        // '<div class="description"></div>' +
        // '<div class="hour">' + moment(i.toString()).format('hh a')  + '</div>' +
        // '<div class="time-block" >'+
        // '<textarea class="future"></textarea>'+
        // '</div>'+
        // '<div class="saveBtn"></div>'+
        // '</div>'+
        // '</div>';
    }
}                    

buildWorkDay();

// var today = new Date();
// var now;

// var test=moment(8);
// console.log(test);

// now=moment(today)

// moment().format('hA');

// console.log((now).format('hh a'));
// console.log((now).format('hh a'));


//            '<div class="parent">' + 
//                '<div class="loadimg"></div>' +
//                '<div class="header"></div>' +
//                '<div class="msg"></div>' +
//            '</div>';
// $(document.body).append(html);


//     // Create button
//     var letterBtn = $('<button>');
//     // Assign style to the button
//     letterBtn.addClass('letter-button btn btn-info');
//     // Assign the letter to the data-letter attribute
//     letterBtn.attr('data-letter', letters[i]);
//     // Display the letter
//     letterBtn.text(letters[i]);
//     // Attach the letter element
//     buttonListEl.append(letterBtn);
//   }





// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist



// console.log(moment("13:00", 'HH:mm').format('hh:mm a'));






// Dynamically create buttons
  // Create a for-loop to iterate through the timeblocks.


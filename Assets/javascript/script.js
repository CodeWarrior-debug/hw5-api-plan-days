
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    var nowHR = moment();
    $('#currentDay').text(moment().format('dddd'));
    
    // =('Wednesday'); //moment().format('dd')


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//stack overflow question 25498082
 var timeBlockHtml = '<div class="row">' +
                    '<div class="description"></div>'+
                    '<div class="hour"></div>'+
                    '<div class="time-block" >'+
                    '<textarea class="future"></textarea>'+
                    '</div>'+
                    '<div class="saveBtn"></div>'+
                    '</div>'+
                    '</div>';

function buildWorkDay() {
    for (i=8; i < 18; i++){
        $(timeBlockHtml).appendTo('.container')
        }
}                    



buildWorkDay();

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


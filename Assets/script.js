var timeBlocks = [
  {
    time: "9:00am",
    note: "",
  },
  {
    time: "10:00am",
    note: "",
  },
  {
    time: "11:00am",
    note: "",
  },
  {
    time: "12:00pm",
    note: "",
  },
  {
    time: "1:00pm",
    note: "",
  },
  {
    time: "2:00pm",
    note: "",
  },
  {
    time: "3:00pm",
    note: "",
  },
  {
    time: "4:00pm",
    note: "",
  },
  {
    time: "5:00pm",
    note: "",
  },
];

// function to create each block of time of the HTML

function loadTimeblocks() {
  var layout = "";
  timeBlocks.forEach(function (timeBlock) {
    var className = timeChecker(timeBlock.time);
    var note = timeBlockSavedData(timeBlock.time);
    layout =
      layout +
      `  <div class="time-block">
      <div class="row">
        <div class="hour">
          ${timeBlock.time}
        </div>
          <textarea name="" id="${timeBlock.time}" class="${className}">${note}</textarea>
           <button class="saveBtn" onclick="saveNote('${timeBlock.time}')"><i class="fas fa-save"></i>
</button>
      </div>
    </div>`;
  });
  document.getElementById("time-block").innerHTML = layout;
}

loadTimeblocks();

// Creating the curecnt date at the header and using moment JS for the correct format
function currentDate() {
  var newDate = moment().format("dddd, MMMM Do");
  document.getElementById("currentDay").innerHTML = newDate;
}
currentDate();

// Creating the background color that that changes color based on currect time.  Pass the returns to update the class name of the loadTimeblocks function.
function timeChecker(time) {
  var currentHour = moment().format("h");
  var currentAmOrPm = moment().format("a");
  var chunks = time.split(":");
  var timeBlockHour = parseInt(chunks[0]);
  var timeBlockamOrpm = chunks[1].replaceAll("00", "");
  //  changing the time to zero to make the function work properly. Not affecting our HTML display
  if (currentHour == 12) {
    currentHour = 0;
  }
  if (timeBlockHour == 12) {
    timeBlockHour = 0;
  }
  // checking different time comparions
  if (currentHour == timeBlockHour && currentAmOrPm == timeBlockamOrpm) {
    return "present";
  } else if (currentAmOrPm == "pm" && timeBlockamOrpm == "am") {
    return "past";
  } else if (currentAmOrPm == timeBlockamOrpm && currentHour > timeBlockHour) {
    return "past";
  } else if (currentAmOrPm == "am" && timeBlockamOrpm == "pm") {
    return "future";
  } else if (currentAmOrPm == timeBlockamOrpm && currentHour < timeBlockHour) {
    return "future";
  }
}

//  Save notes to local storage and matching the note time with time block
function saveNote(time) {
  var note = document.getElementById(time).value;
  var key = "schaduler-" + moment().format("DMY");
  var oldData = localStorage.getItem(key);
  var newData = [];
  // When there is no data saved
  if (oldData == null) {
    newData.push({
      note: note,
      time: time,
    });
    localStorage.setItem(key, JSON.stringify(newData));
  } else {
    // if there is existing data
    oldData = JSON.parse(oldData);
    var match = false;
    oldData.forEach(function (obj) {
      if (obj.time == time) {
        // replace the note if it exits with new
        match = true;
        obj.time = time;
        obj.note = note;
      }
    });
    if (match == false) {
      oldData.push({
        note: note,
        time: time,
      });
    }
    localStorage.setItem(key, JSON.stringify(oldData));
  }
  alert("Note Saved");
}

// To make the  saved events persist

function timeBlockSavedData(time) {
  var key = "schaduler-" + moment().format("DMY");
  var oldData = localStorage.getItem(key);
  if (oldData == null) {
    return "";
  } else {
    oldData = JSON.parse(oldData);
    var note = "";
    oldData.forEach(function (data) {
      if (data.time == time) {
        note = data.note;
      }
    });
    return note;
  }
}

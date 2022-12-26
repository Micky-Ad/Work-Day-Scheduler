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
    time: "12:00am",
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
    layout =
      layout +
      `  <div class="time-block">
      <div class="row">
        <div class="hour">
          ${timeBlock.time}
        </div>
        <textarea name="" id="${timeBlock.time}" class="${className}">${timeBlock.note}</textarea>
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

// Creating the background color that that changes color based on currect time

function timeChecker(time) {
  var status = moment(time, "h:ma").fromNow();
  if (status.includes("in ") == true && status.includes("hour")) {
    return "future";
  } else if (status.includes("ago") == true && status.includes("hour")) {
    return "past";
  } else {
    return "present";
  }
}

//  Save note function

function saveNote(time) {
  var note = document.getElementById(time).value;
  alert(note);
}

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

function loadTimeblocks() {
  var layout = "";
  timeBlocks.forEach(function (timeBlock) {
    layout =
      layout +
      `  <div class="time-block">
      <div class="row">
        <div class="hour">
          ${timeBlock.time}
        </div>
        <textarea name="" id="" class="present">${timeBlock.note}</textarea>
        <button class="saveBtn"><i class="fas fa-save"></i>
</button>
      </div>
    </div>`;
  });
  document.getElementById("time-block").innerHTML = layout;
}

loadTimeblocks();

function currentDate() {
  var newDate = moment().format("dddd, MMMM Do");
  document.getElementById("currentDay").innerHTML = newDate;
}

currentDate();

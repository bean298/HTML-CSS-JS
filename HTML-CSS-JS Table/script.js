//Search: Start

var search = document.querySelector(".table_header-input input");
var table_rows = document.querySelectorAll("tbody tr");

search.addEventListener("input", searchTable);

function searchTable() {
  //Loop each row in the table, if true add class hide
  table_rows.forEach((row, i) => {
    //Get all the data of the table (textContent)
    var table_data = row.textContent.toLowerCase();
    // console.log(row.textContent);

    //Get the data you enter in the search
    var search_data = search.value.toLowerCase();

    //If (have value in search)
    //row have the value in the search check to see if it matches any value in the table: matchFound = true
    //row dont have any value matches the value in search: matchFound = false
    //Else (dont have value in search)
    var matchFound = false;
    if (search_data.length > 0) {
      matchFound = table_data.includes(search_data);
    } else {
      matchFound = true;
    }

    //!matchFound: opposite
    //If matchFound = false: dont add class hide to that row
    //Else matchFound = true: add the class hide to that row
    row.classList.toggle("hide", !matchFound);

    //Edit for the delay of single row when search
    //i is the index of row
    //divide 25 because edit the delay of single row Ex: 0/25=0s; 1/25=0.04s
    //s is string to set value is second
    row.style.setProperty("--delay", i / 25 + "s");
  });
}

//Search: End

//Sort: Start

var table_headings = document.querySelectorAll("thead th");

table_headings.forEach((head, i) => {
  var sort_asc = true;

  head.onclick = () => {
    //Click on any th in thead add class actice
    //Click other th: romve class active from previous th, add class active to class present
    table_headings.forEach((head) => head.classList.remove("active"));
    head.classList.add("active");

    //Take all value of the column in the td you click
    //Add and remove class active from td
    document
      .querySelectorAll("td")
      .forEach((td) => td.classList.remove("active"));
    table_rows.forEach((row) => {
      row.querySelectorAll("td")[i].classList.add("active");
      //console.log(row.querySelectorAll("td")[i])
    });

    //First click: sort_asc = true: add class asc to rotate 180deg the arrow
    head.classList.toggle("asc", sort_asc);

    //Second click if td contains class asc, sort_asc return false.
    sort_asc = head.classList.contains("asc") ? false : true;

    sortTable(i, sort_asc);
  };
});

function sortTable(column, sort_asc) {
  //Loop every rows in the table
  [...table_rows]
    .sort((a, b) => {
      //Take first_row and second_row to compare to each other
      var first_row = a
        .querySelectorAll("td")
        [column].textContent.toLowerCase();
      var second_row = b
        .querySelectorAll("td")
        [column].textContent.toLowerCase();

      return sort_asc
        ? first_row < second_row
          ? 1
          : -1
        : first_row < second_row
        ? -1
        : 1;
    })
    .map((sorted_row) =>
      document.querySelector("tbody").appendChild(sorted_row)
    );
}

//Sort: End

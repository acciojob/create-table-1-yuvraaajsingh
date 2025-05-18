// function insert_Row() {
//     //Write your code here
	
// 	let table= document.getElementById("sampleTable");
// 	  let newRow = document.createElement("tr");
// 	  let newC1 = document.createElement("td");
// 	  let newC2 = document.createElement("td");

// 	newC1.innerText="New Cell1";
// 	newC2.innerText="New Cell2";

// 	newRow.appendChild(newC1);
// 	newRow.appendChild(newC2);

// 	table.appendChild(newRow);
	

  
  
// }
function insert_Row() {
var table = document.getElementById("sampleTable");

    // Insert a new row at index 0
    var newRow = table.insertRow(0);

    // Insert two cells in the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the content of the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
}
function insert_Row() {
    //Write your code here
	let table= document.getElementById("sampleTable");
	  let newRow = document.createElement("tr");
	  let newC1 = document.createElement("td");
	  let newC2 = document.createElement("td");

	newC1.innerText="New Cell1";
	newC2.innerText="New Cell2";

	newRow.appendChild(newC1);
	newRow.appendChild(newC2);

	table.appendChild(newRow);
  
  
}

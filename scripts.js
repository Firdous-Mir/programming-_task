var myList = document.getElementById("myList");
var addButton = document.getElementById("nextPerson");
let currentIndex = 0;
let jsonData = [
    {
        "name": "John Smith",
        "location": "New York, NY"
    }
];
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data; 
    });
addButton.onclick = fetchData;
window.onload = fetchData;
  function fetchData() {
    if (currentIndex < jsonData.length) {
    var newItem = document.createElement("li");
      document.getElementById("no-of-persons-shown").innerHTML= `CURRENTLY ${currentIndex+1} PEOPLE SHOWING`;

        const currentData = jsonData[currentIndex];
        newItem.innerHTML = `<a href="#">
        <span><strong>Name: </strong> ${currentData.name}</span><br/>
        <span><strong>Location:</strong> ${currentData.location}</span>
    </a>`;
    myList.appendChild(newItem);
    currentIndex++
       
      document.getElementById("no-of-persons-shown").innerHTML= `CURRENTLY ${currentIndex} PEOPLE SHOWING`;
    }
      else {
        alert('No more people!');
        return false
      }
  };

 




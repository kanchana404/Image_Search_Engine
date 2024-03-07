// Define the number of instances you want to create
var numberOfInstances = 8;

// Reference the parent container where the instances will be appended
var parentContainer = document.getElementById('box');

// Loop to create and append instances
for (var i = 0; i < numberOfInstances; i++) {
    // Create elements
    var columnDiv = document.createElement('div');
    columnDiv.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');
    columnDiv.style.paddingBottom = '15px';

    var containerDiv1 = document.createElement('div');
    containerDiv1.classList.add('container');
    containerDiv1.id = 'content';

    var containerDiv2 = document.createElement('div');
    containerDiv2.classList.add('container');

    var image = document.createElement('img');
    image.src = './layered-waves-haikei.svg';
    image.alt = '';

    // Append elements to each other
    containerDiv2.appendChild(image);
    containerDiv1.appendChild(containerDiv2);
    columnDiv.appendChild(containerDiv1);
    parentContainer.appendChild(columnDiv);
}

function search() {
    let query = document.getElementById('keyword').value.trim(); // Remove leading and trailing whitespaces

    // If query contains more than one word, replace spaces with underscores
    if (query.split(' ').length > 1) {
        query = query.split(' ').join('_');
    }

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=NfurjGmLWkHYg7ndGK7mE-6-LhNcy8ic1f26lsBz2Zo`)
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            // Access the photos array in the response
            const photos = data.results;

            // Define the parent container where the instances will be appended
            var parentContainer = document.getElementById('sectionss');

            // Clear the existing content in the parent container
            parentContainer.innerHTML = '';

            // Create a new row element
            var newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.id = 'box'; // Set the id of the new row
            newRow.style.paddingTop = '15px'; // Add padding top
            newRow.style.paddingBottom = '25px'; // Add padding bottom

            // Append the new row to the parent container
            parentContainer.appendChild(newRow);

            // Loop through each photo
            photos.forEach(photo => {
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
                image.src = photo.urls.regular;
                image.alt = '';

                // Append elements to each other
                containerDiv2.appendChild(image);
                containerDiv1.appendChild(containerDiv2);
                columnDiv.appendChild(containerDiv1);
                newRow.appendChild(columnDiv); // Append to the new row
            });

            // Log the number of image links
            console.log('Number of image links:', photos.length);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

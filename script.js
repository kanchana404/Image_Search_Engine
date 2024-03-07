let perPage = 12; // Initial number of images per page
let currentPage = 1; // Initial page number

const accessKey = "{Your Unslpash key}"

function search() {
    let query = document.getElementById('keyword').value.trim();

    // Check if query is empty
    if (query === '') {
        alert('Please enter a keyword to start the search.');
        return; // Exit the function if no keyword is entered
    }

    if (query.split(' ').length > 1) {
        query = query.split(' ').join('_');
    }

    fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${accessKey}_page=${perPage}`)
        .then(response => response.json())
        .then(data => {
            const photos = data.results;
            var parentContainer = document.getElementById('sectionss');
            parentContainer.innerHTML = '';

            var newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.id = 'box';
            newRow.style.paddingTop = '15px';
            newRow.style.paddingBottom = '25px';
            parentContainer.appendChild(newRow);

            photos.forEach(photo => {
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

                containerDiv2.appendChild(image);
                containerDiv1.appendChild(containerDiv2);
                columnDiv.appendChild(containerDiv1);
                newRow.appendChild(columnDiv);
            });

            var loadMoreButton = document.createElement('button');
            loadMoreButton.innerHTML = 'Load More';
            loadMoreButton.classList.add('btn', 'btn-dark', 'btn-lg', 'btn-block');
            loadMoreButton.onclick = addMore;
            newRow.appendChild(loadMoreButton);

            console.log('Number of image links:', photos.length);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function addMore() {
    // Increment perPage by 4
    perPage += 4;
    // Increment currentPage
    currentPage++;
    
    search(); // Call search function to load more images
}

let input = document.getElementById('search-input');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bd90c4cffmsh2788964981ec641p113417jsn3d0aff3880f5',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

document.getElementById('search').addEventListener('click', (e) => {
    e.preventDefault();
    let endpoint = `https://shazam.p.rapidapi.com/search?term=${input.value}&locale=en-US&offset=0&limit=5`;

    fetch(endpoint, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.artists.hits)
        })
        .catch(err => console.log(err))
})


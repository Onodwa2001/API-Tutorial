let input = document.getElementById('search-input');
let cardContainer = document.getElementById('card-section')
let loading = document.getElementById('loading');

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
    loading.style.display = "block";

    fetch(endpoint, options)
        .then(response => response.json())
        .then(data => {
            let hitsArr = data.artists.hits

            cardContainer.innerHTML = '';

            hitsArr.forEach(element => {
                console.log(element.artist)

                cardContainer.innerHTML += `
                    <div class="card">
                        <div class="img">
                            <img height="200px" width="200px" src="${element.artist.avatar}" alt="">
                        </div>
                        <div class="description">
                            <h3>${element.artist.name}</h3>
                            <a href="${element.artist.weburl}" target="_blank">Link to the song</a>
                        </div>
                    </div>
                `;
            });

            loading.style.display = "none";

        })
        .catch(err => console.log(err))
})


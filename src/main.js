fetch("https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json")
    .then(result => result.json())
    .then(parksParsed => {
        var parks = parksParsed.parks;
        console.log(parks);
        parks.map(createHtml);
    });
function createHtml(park) {
    var article = document.createElement("article");
    document.body.appendChild(article);
    article.setAttribute("class", "park-article");

    var articleName = document.createElement("h3");
    var articleContent = document.createElement("p");
    var listWeather = document.createElement("ul");
    var weatherItemCurent = document.createElement("li");
    var weatherItemToday = document.createElement("li");
    var weatherItemWeek = document.createElement("li");

    articleName.innerHTML = `${park.name}`;
    articleContent.innerHTML = `Latitude: ${park.latitude} Longitude: ${park.longitude}`;


    fetch(`https://blooming-mesa-53816.herokuapp.com/${park.latitude},${park.longitude}`)
        .then(result => result.json())
        .then(weather => {
            console.log(weather);
            weatherItemCurent.innerHTML = `${weather.currently.summary}`;
            weatherItemToday.innerHTML = `${weather.hourly.summary}`;
            weatherItemWeek.innerHTML = `${weather.daily.summary}`;
        });

    article.appendChild(articleName);
    article.appendChild(articleContent);
    article.appendChild(listWeather);
    listWeather.appendChild(weatherItemCurent);
    listWeather.appendChild(weatherItemToday);
    listWeather.appendChild(weatherItemWeek);
}

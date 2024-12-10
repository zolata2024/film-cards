let filmArray = [
    {
        name: "spider man",
        releaseDate: 2019,
        country: "USA",
        poster:"https://filmartgallery.com/cdn/shop/products/Spider-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1667624487"
    },
    {
        name: "Avatar",
        releaseDate: 2009,
        country: "USA, UK",
        poster:"https://m.media-amazon.com/images/I/61-78pi5iKL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name: "scooby Doo",
        releaseDate: 2002,
        country: "UK",
        poster:"https://cdn.europosters.eu/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/scooby-doo-classic-i8131.jpg"
    }
]

let divFilms = document.querySelector(".films")

filmArray.forEach(film =>{
    divFilms.innerHTML +=`
    <div class="film-card">
    <img src="${film.poster}"/>
    <h2>${film.name}</h2>
    <p>${film.country} </p>
    <p>${film.releaseDate}</p>
    </div>
    `
})


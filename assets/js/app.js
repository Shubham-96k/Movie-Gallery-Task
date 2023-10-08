const cl = console.log;

const addMovie = document.getElementById('addMovie');
const backdropcontrol = document.getElementById('backdrop');
const ourModalcontrol = document.getElementById('ourModal')

const cancelbtn = [...document.querySelectorAll('.cancel')];

const movieform = document.getElementById('movieform');
const movieTitle = document.getElementById('movieTitle');
const imageUrl = document.getElementById('imageUrl');
const addmoviecard = document.getElementById('addmoviecard')

let emptyArray = [];

const onsubmitform = eve => {
    eve.preventDefault();
    let newobj = {
        title : movieTitle.value,
        imageUrl: imageUrl.value,
        movieRating : movieRating.value,
    }
    emptyArray.unshift(newobj);
    cl(emptyArray)
    movieform.reset();
    onAddMovie();

    let result = '';

    emptyArray.forEach(arr => {
        result += `
        <div class="col-md-4">
        <div class="card mb-4">
            <div class="card-header bg-dark text-white">
                <h1 class="m-0">${arr.title}</h1>
            </div>
            <div class="card-body moviecard">
                <img src="${arr.imageUrl}" alt="">
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center bg-dark text-white">
                <span class='rating ${rating(arr.movieRating)}' id="rating">${arr.movieRating}</span>
                <div>
                    <button class="btn btn-outline-primary">Edit</button>
                    <button class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>        
        `
    })
    addmoviecard.innerHTML = result;
}

function rating(num){
    if(num > 3 && num <= 5){
        return "bg-success"
    }else if(num == 3){
        return "bg-warning"
    }else if(num < 3){
        return "bg-danger"
    }
}


const onAddMovie = () => {
    backdropcontrol.classList.toggle('active');
    ourModalcontrol.classList.toggle('active');
}

cancelbtn.forEach(arr => {
    arr.addEventListener('click', onAddMovie)
});


addMovie.addEventListener('click', onAddMovie);

movieform.addEventListener('submit', onsubmitform);
let generate_btn = document.querySelector('.generate_btn')

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
    let catImageDiv = document.querySelector(".catImage")
    //pour suprimer l'image precedente
    catImageDiv.innerHTML = ''
    //recuperation de l'image
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((Response) => Response.json())
    .then((data) => {
        let catUrl = data[0].url
        let catImg = document.createElement("img")
        catImg.setAttribute('src', `${catUrl}`)
        catImg.classList.add("showcase")
        catImageDiv.appendChild(catImg)
       })
       .catch(err => console.log(er))
}
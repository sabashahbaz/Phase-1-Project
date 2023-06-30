//json-server --watch db.json --routes routes.json

let currentLikes ; 
fetch ('http://localhost:3000/harry-potter-characters')
.then(response => response.json())
.then(dataArray => {
    dataArray.forEach(data =>loadCharacters(data))
    displayCharacters(dataArray[0])
});

function loadCharacters(characters) {
    const div = document.querySelector('#character-list')
    const image = document.createElement('img')
    image.src = characters.image
    div.appendChild(image)

    image.addEventListener('click', () => displayCharacters(characters))
}

function displayCharacters(wizard) {
   
    currentLikes = wizard

    const name = document.querySelector('#name')
    name.textContent = "Name:    "  +  wizard.name 

    const house = document.querySelector('#house')
    house.textContent = "House:   "  +  wizard.house

    const zodiac = document.querySelector('#ancestry')
    zodiac.textContent = "zodiac sign:    " + wizard.zodiac

    const imageTitle = document.querySelector('#card-title')
    imageTitle.textContent = wizard.title

    const picture = document.querySelector('#card-image')
    picture.src = wizard.picture

    const likes = document.querySelector('#like-count')
    likes.textContent = wizard.likes + "  likes"

    const likesSection = document.querySelector('#comments-list')

    const form = document.querySelector('#comment-form')
    form.addEventListener("submit", (e) => {
    e.preventDefault()
    const entry = e.target['comment'].value
    e.target.reset()
    alert(" Message Sent!")
});



    const InstaPic = document.querySelector('#card-image')
    const images = [wizard.picture, wizard.pet];
    let currentImageIndex = 0;

    InstaPic.addEventListener('mouseover', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        InstaPic.src = images[currentImageIndex];
    });
};

    const heartButton = document.querySelector('#like-button')
    heartButton.addEventListener('click', increaseLikes) 
        function increaseLikes (e) {
        const likeCount = document.querySelector('#like-count')
        currentLikes.likes += 1
        likeCount.textContent = currentLikes.likes + " likes"
        }

       
    

        const comments = document.createElement('span')
        comments.textContent=wizard.caption
        const list = document.querySelector('#comments-list')
        list.appendChild(comments)
    



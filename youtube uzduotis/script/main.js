function displayCard(cardData) {
    const card = document.querySelector('.card');

    card.querySelector('img').src = cardData.imageUrl;
    card.querySelector('.name').textContent = cardData.name;
    card.querySelector('.time').textContent = cardData.time;
    card.querySelector('.creator-icon').src = cardData.creatorIcon;
    card.querySelector('.views').textContent = cardData.views;
}

fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayCard(data.cards[0]);
    });


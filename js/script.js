window.addEventListener('DOMContentLoaded', () => {
    function init() {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
            } else {
                console.error("Что-то пошло не так");     
            }
        });

        this.remove();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');
        
            card.classList.add('card');
            
            let icon;
            if (item.language === "deutsch") {
                icon = "icons/Germany.png";
            } else {
                icon = "icons/UnitedKingdom.png";
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="book">
                <div class="name">${item.name} ${item.author}</div>
                <div class="language">
                    <img src=${icon} alt=${item.language}>
                </div>
                <div class="amount">${item.amount}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }
    document.querySelector('button').addEventListener('click', init), {"once": true};
});
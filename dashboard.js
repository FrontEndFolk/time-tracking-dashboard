const jsonURL = 'data.json';

function getJSON(url) {
    return fetch(url).then(response => response.json());
}

class dashBoardItem {
    constructor(data, container = '.dashboard__body', view = 'daily') {
        this.data = data;
        this.container = document.querySelector(container);
        this.view = view;

        this.createMarkUp()
    }

    createMarkUp() {
        const { title, timeframes } = this.data;
        const { current, previous } = timeframes[this.view];
        this.container.insertAdjacentHTML('beforeend', `
        <div class='dashboard__item'>
        <p class='dashboard__title'>${title}</p>
        <p class='dashboard__cur'>${current}hrs</p>
        <p class='dashboard__prev'>last week ${previous}hrs</p>
        </div>
        `);

    }

}


document.addEventListener('DOMContentLoaded', () => {
    getJSON(jsonURL).then(data => {
        const activities = data.map(el => new dashBoardItem(el));
    })
})


const jsonURL = 'data.json';
const selectors = document.querySelectorAll('.card__selectors');

function getJSON(url) {
    return fetch(url).then(response => response.json());
}

class dashBoardItem {
    static PERIODS = {
        daily: 'day',
        weekly: 'week',
        monthly: 'month',
    }
    constructor(data, container = '.dashboard__body', view = 'daily') {
        this.data = data;
        this.container = document.querySelector(container);
        this.view = view;

        this.createMarkUp()
    }

    createMarkUp() {
        const { title, timeframes } = this.data;
        const { current, previous } = timeframes[this.view];
        const id = title.toLowerCase().replace(' ', '-');
        this.container.insertAdjacentHTML('beforeend', `
        <div class='dashboard__item dashboard__item--${id} tracking-card'>
            <section class="tracking-card__body">
                <header class="tracking-card__header">
                    ${title}
                </header>
                <p class='dashboard__cur'>${current}</p>
                <p class='dashboard__prev'>last ${dashBoardItem.PERIODS[this.view]} ${previous} hrs</p>
            </section>
        </div>
        `);

        this.curr = document.querySelector(`.dashboard__item--${id} .dashboard__cur`);
        this.prev = document.querySelector(`.dashboard__item--${id} .dashboard__prev`);

    }



    changeView(view) {
        view = view.trim().toLowerCase();
        const { current, previous } = this.data.timeframes[view];
        this.view = view;
        this.curr.textContent = `${current} hrs`;
        this.prev.textContent = `last ${this.view} ${previous}hrs`
    }

}


document.addEventListener('DOMContentLoaded', () => {
    getJSON(jsonURL).then(data => {
        const activities = data.map(el => new dashBoardItem(el));
        selectors.forEach(e => e.addEventListener('click', (event) => {
            activities.forEach(act => act.changeView(event.target.textContent));
        }));
    })

})


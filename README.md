# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: [Add live site URL here](https://frontendfolk.github.io/time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

 I've learned how to use fetch and classes


```js
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
                    <img src="images/icon-ellipsis.svg">
                </header>
                <p class='tracking-card__cur'>${current}hrs</p>
                <p class='tracking-card__prev'>last ${dashBoardItem.PERIODS[this.view]} - ${previous} hrs</p>
            </section>
        </div>
        `);

        this.curr = document.querySelector(`.dashboard__item--${id} .tracking-card__cur`);
        this.prev = document.querySelector(`.dashboard__item--${id} .tracking-card__prev`);

    }



    changeView(view) {
        view = view.trim().toLowerCase();
        const { current, previous } = this.data.timeframes[view];
        this.view = view;
        this.curr.textContent = `${current} hrs`;
        this.prev.textContent = `last ${dashBoardItem.PERIODS[this.view]} - ${previous}hrs`
    }

}
```
- Frontend Mentor - [@TheStudent](https://www.frontendmentor.io/home)


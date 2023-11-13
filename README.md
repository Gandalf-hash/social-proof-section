# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![Screenshot 2023-11-13 at 13-49-50 Frontend Mentor Social proof section](https://github.com/Gandalf-hash/social-proof-section/assets/53972152/1f05edad-bc59-4f33-baa9-80df13047c24)


### Links

- Solutions URL: [Solution](https://www.frontendmentor.io/solutions/responsive-social-proof-with-user-reviews-pt0q6l-_Ct)
- Live Site URL: [Live Site](https://social-proof-section-six-taupe.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Mobile-first workflow
- JavaScript
- [React](https://reactjs.org/) - JS library

### What I learned

#### Responsive Background Images:
I've learned how to set different background images for desktop and mobile views using media queries.

#### Tailwind CSS Integration:
I've used Tailwind CSS utility classes to style my React components and manage the layout and appearance.

#### Media Queries for Responsive Design:
I've used media queries to conditionally apply styles based on the screen size, allowing for a responsive design.

#### File Path Handling:
I've encountered and addressed issues related to file paths, ensuring that the correct paths are used for background images.

#### CSS Background Properties:
I've utilized CSS background properties (background-image, background-repeat, background-position, etc.) to control the appearance of the background images.

#### Understanding Body Element Styling:
I've applied styles directly to the body element to set a global background for the project.

#### Overall Project Structure:
I've gained experience in structuring a React project, including creating components and styling them using Tailwind CSS.

```html
<div className="flex flex-row gap-2">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={item.icon} alt="" />
    ))}
  </div>
```

```css
@media (min-width: 768px) {
  body {
    background-image: url("/public/images/bg-pattern-top-desktop.svg"),
      url("/public/images/bg-pattern-bottom-desktop.svg");
    background-position: left top, right bottom;
    background-repeat: no-repeat;
  }
}
```

```js
@media (max-width: 767px) {
  body {
    background-image: url("/public/images/bg-pattern-top-mobile.svg");
    background-position: top;
    background-repeat: no-repeat;
  }
}

```

### Continued development

In future projects, I aim to continue refining and perfecting my design choices, specifically in the areas of fonts and colors. While working on my current project, I independently selected fonts and colors without relying on design tools like Figma. Moving forward, I want to delve deeper into typography, exploring a wider range of fonts and refining my eye for selecting typefaces that harmonize well. Additionally, I plan to enhance my understanding of color theory, experimenting with different color palettes to create visually appealing and cohesive designs. This focus on design elements will contribute to creating more polished and aesthetically pleasing user interfaces in my future projects

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.
- [ReactJs](https://react.dev/) - The library for web and native user interfaces

## Author

- Website - [Johannes](https://www.your-site.com)
- Frontend Mentor - [@Gandalf-hash](https://www.frontendmentor.io/profile/Gandalf-hash)
- LinkedIn - [@Tshepiso J. Phetoane](https://www.linkedin.com/in/tshepiso-johannes/)

## Acknowledgments

I would like to express my gratitude to Frontend Mentor for providing an invaluable platform that facilitated my learning and growth in web development. The challenges offered by Frontend Mentor not only honed my skills but also inspired creative solutions. Additionally, I extend my thanks to the broader web development community for the wealth of resources and insights that have been instrumental in shaping my approach to this project. This project wouldn't have been possible without the collective knowledge shared by fellow developers, tutorials, and documentation that I consulted along the way. Thank you to everyone who has contributed to my journey in web development

function template(image) {
    return /*html*/`
    <li>
        <img src="${image.url}" alt="${image.description}">
        <h3 class="title">${image.title}</h3>
    </li>
    `;
}

export default template;

const test = QUnit.test;

QUnit.module('templating');

function template(image) {
    return /*html*/`
    <li>
        <img src="${image.url}" alt="${image.description}">
        <h3 class="title">${image.title}</h3>
    </li>
    `;
}

test('testing template function', (assert) => {
    //Arrange
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns'
    };

    const expected = /*html*/ `
    <li>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        <h3 class="title">UniWhal</h3>
    </li>
    `;
 

    //Act 
    const html = template(image);
   
    //Assert
    assert.htmlEqual(html, expected);
});
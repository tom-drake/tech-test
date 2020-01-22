const { generateMarkup } = require('./generateMarkup');

test("['div'] generates <div/>", () => {
	expect(generateMarkup(['div'])).toEqual('<div/>');
});

test("['h1', 'Text'] generates <h1>Text</h1>", () => {
	expect(generateMarkup(['h1', 'Text'])).toEqual('<h1>Text</h1>');
});

test("['span', 'More', 'Text'] generates <span>MoreText</span>", () => {
	expect(generateMarkup(['span', 'More', 'Text'])).toEqual('<span>MoreText</span>');
});

test("['a', ['b', 'More'], ' Text'] generates <a><b>More</b> Text</a>", () => {
	expect(generateMarkup(['a', ['b', 'More'], ' Text'])).toEqual('<a><b>More</b> Text</a>');
});

test("['p', '<b>Text</b>'] generates <p>&lt;b&gt;Text&lt;/b&gt;</p>", () => {
	expect(generateMarkup(['p', '<b>Text</b>'])).toEqual('<p>&lt;b&gt;Text&lt;/b&gt;</p>');
});

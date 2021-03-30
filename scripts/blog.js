//make an array and loop over it
const blogs = [
	{
		headline:"Traveling With Your Dog",
		text: "Iduciendisite quo magnatem iuntum quid quaest ea am, is dolenem quidustrum fuga.",
		image: "./images/blog-1.jpg",
		alt: "a person is walking four dogs on leashes"
	},

	{
		headline: "How To Walk Multiple Dog",
		text: "Iduciendisite quo magnatem iuntum quid quaest ea am, dolenem quidustrum fuga.",
		image: "./images/blog-2.jpg",
		alt: "a person is walking four dogs on leashes"
	},

	{
		headline: "Teach Your Dog To Fetch!",
		text: "Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis.",
		image: "./images/blog-3.jpg",
		alt: "a woman is teaching a dog to fetch"
	},
];

const blogsContainer = document.getElementById('blogs-container');
console.log(blogsContainer);

for (let i = 0; i < blogs.length; i++) {
	const blog = blogs[i];

	const dogArticle = document.createElement('article');

	const template = `
	<img src=${blog.image} alt=${blog.alt}>
	<div>
		<h2 class="margintop">${blog.headline}</h2>
		<p>${blog.text}</p>
	</div>
	`;

	dogArticle.innerHTML = template;

	blogsContainer.appendChild(dogArticle);
}

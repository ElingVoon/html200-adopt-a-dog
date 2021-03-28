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
	dogArticle.setAttribute('class', 'blog-article');

		const dogImage = document.createElement('img');
		dogImage.setAttribute('src', blog.image);
		dogImage.setAttribute('alt', blog.alt);
		dogImage.setAttribute('class', 'blog-image');


		console.log(dogImage);

		dogArticle.appendChild(dogImage);

		blogsContainer.appendChild(dogArticle);

		const textBox = document.createElement('div');
		textBox.setAttribute('class', 'blogheader');
		dogArticle.appendChild(textBox);

		const headline = document.createElement('h2');
		headline.setAttribute('class', 'margintop');
		headline.textContent = blog.headline;
		textBox.appendChild(headline);

		const text = document.createElement('p');
		text.setAttribute('class', 'p');
		text.textContent = blog.text;
		textBox.appendChild(text);

		blogsContainer.appendChild(dogArticle);
		}

		// // <div>
		// 		<h2 class="margintop">Traveling With Your Dog</h2>
		// 		<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.
		// // </div>

// <img class="blog-image" src="images/blog-1.jpg"  alt="a woman holding a dog facing the grand canyon">

	// console.log(dogArticle);
	// const blog = blogs[i];
// console.log(blog.headline);



// console.log(blogs);
// for (let i = 0; i < blogs.length; i++) {
// console.log(blogs[i]);
// }

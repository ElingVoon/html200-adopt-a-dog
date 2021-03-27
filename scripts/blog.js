//make an array and loop over it
const blogs = [
	{
		headline:"Teach dogs to walk",
		text: "Iduciendisite quo magnatem iuntum quid quaest ea am, is dolenem quidustrum fuga.",
		image: "./images/blog-1.jpg",
		alt: "a woman holding a dog facing the grand canyon"
	},
	{
		headline: "Teach dogs to walk....",
		text: "Iduciendisite quo magnatem iuntum quid quaest ea am, dolenem quidustrum fuga.",
		image: "./images/blog-2.jpg",
		alt: "a woman holding a dog facing the grand canyon"
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

	console.log(dogImage);

// <img class="blog-image" src="images/blog-1.jpg"  alt="a woman holding a dog facing the grand canyon">

	// console.log(dogArticle);
	// const blog = blogs[i];
// console.log(blog.headline);
blogsContainer.appendChild(dogArticle);
}


// console.log(blogs);
// for (let i = 0; i < blogs.length; i++) {
// console.log(blogs[i]);
// }

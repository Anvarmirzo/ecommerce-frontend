// Products
(async () => {
	const productsWrapper = document.querySelector('.products');
	const response = await fetch('http://localhost:9000/api/v1/products');
	const products = await response.json();

	const fragment = document.createDocumentFragment();
	products.forEach((p) => {
		const article = document.createElement('article');
		article.textContent = p.name;
		fragment.appendChild(article);
	});
	productsWrapper.appendChild(fragment);
})();

// Categories
(async () => {
	const categoriesWrapper = document.querySelector('.categories');
	const response = await fetch('http://localhost:9000/api/v1/categories');
	const categories = await response.json();

	const fragment = document.createDocumentFragment();
	categories.forEach((p) => {
		const article = document.createElement('article');
		article.innerHTML = `<h3>${p.name}</h3><p style="color:${p.color}">${p.icon}</p>`;
		fragment.appendChild(article);
	});
	categoriesWrapper.appendChild(fragment);
})();

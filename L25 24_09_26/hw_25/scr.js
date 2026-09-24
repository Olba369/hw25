const list = document.querySelector("ul");

const createProductCard = (
  id,
  title,
  category,
  price,
  discount,
  inStock,
  rating,
  image,
  tags,
) => {
  const item = `
<li id = "${id}" >
<h2 class = 'product_title'>${title} </h2>
<h3 class = 'product_category'>${category} </h3>
<div class = "product__price">${price}</div>
<h4 class = 'product_discount'>${discount} </h4>
<h5 class = 'product_inStock'>${inStock} </h5>
<h6 class = 'product_rating'>${rating} </h6>
<div class = 'product_image'>${image ? `<img src="${image}" alt="${title}" width="150">` : "<p>Нет фото</p>"} </div>
<h6 class="product_tags">Tags: ${tags.join(", ")}</h6></li>`;

  list.insertAdjacentHTML("beforeend", item);
};

const products = [
  {
    id: 1,
    title: "Механічна клавіатура Keychron K2",
    category: "keyboards",
    price: 3899,
    discount: 15,
    inStock: true,
    rating: 4.8,
    image: "https://picsum.photos/seed/k2/300/200",
    tags: ["bluetooth", "hot-swap"],
  },
  {
    id: 2,
    title: "Миша Logitech MX Master 3S",
    category: "mice",
    price: 4299,
    discount: null,
    inStock: true,
    rating: 4.9,
    image: "https://picsum.photos/seed/mx/300/200",
    tags: ["wireless"],
  },
  {
    id: 3,
    title: "Монітор Dell U2723QE",
    category: "monitors",
    price: 24999,
    discount: 10,
    inStock: false,
    rating: 4.7,
    image: "https://picsum.photos/seed/dell/300/200",
    tags: ["4k", "usb-c", "ips"],
  },
  {
    id: 4,
    title: "Навушники Sony WH-1000XM5",
    category: "audio",
    price: 13499,
    discount: null,
    inStock: true,
    rating: 4.6,
    image: null,
    tags: [],
  },
  {
    id: 5,
    title: "Вебкамера Logitech C920",
    category: "video",
    price: 2799,
    discount: 5,
    inStock: false,
    rating: 4.3,
    image: "https://picsum.photos/seed/c920/300/200",
    tags: ["full-hd"],
  },
  {
    id: 6,
    title: "Килимок для миші XXL",
    category: "mice",
    price: 599,
    discount: null,
    inStock: true,
    rating: 3.9,
    image: null,
    tags: ["xxl"],
  },
];

products.forEach((product) => {
  // product =  { id: 1, name: "Product name 1", price: 100 },
  createProductCard(
    product.id,
    product.title,
    product.category,
    product.price,
    product.discount,
    product.inStock,
    product.rating,
    product.image,
    product.tags,
  );
});

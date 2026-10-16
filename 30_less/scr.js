// const regexp = /cat/;
// const str = "My cat, your cat.";
// console.log(str.replace(regexp, "dog")); // My dog, your cat.

// const regexp = /cat/;
// const str = "My cat, your cat.";
// console.log(str.replaceAll(regexp, "dog")); // My dog, your cat.

// const callback = () => {
//     console.log("hello");
// };
// setTimeout(callback, 1000);

// const callback = () => {
//     console.log("hello");
// };
// setTimeout(() => {console.log("hello");}, 2000);

////////////
// fetch("https://jsonplaceholder.typicode.com/users");
////////////

// const user = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const data = JSON.stringify(user);// into json
// console.log(data);

// const obj = JSON.parse(data);// into object
// console.log(obj);
// ////////////

// const user = {
//   name: "Kotik",
//   age: 56,
//   admin: false,
// };

// const jsonData = JSON.stringify(user); // Convert object to JSON string
// fetch("https://6ad2305466cd28aed82dc060.mockapi.io/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: jsonData,
// });

fetch("https://6ad2305466cd28aed82dc060.mockapi.io/data/1", { method: "DELETE" });

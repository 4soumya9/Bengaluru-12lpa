const user1 = {
  name: "Soumya",
  role: "fe",
};

function greet(greeting, location) {
  console.log(
    `${greeting} this is ${this.name} , a ${this.role} from ${location}`
  );
}

greet.call(user1, "Hello", "Kolkata");
greet.apply(user1, ["Hello", "Kolkataaaas"]);

// const soumyaIntro = greet.bind(user1, "Hello", "Kolkata");
// soumyaIntro();

// <!-- What is this?

// this is a JavaScript keyword that refers to the object that is currently using the function. -->

// <!-- Template literal simple words

// 👉 It’s a JavaScript template literal that creates a readable sentence by inserting variable values at runtime instead of hardcoding text. -->

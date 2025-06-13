//used for temporary objects that do not need a named class

const MyDynamicClass = class {
  sayHello() {
    console.log("Hello from dynamic class");
  }
};

new MyDynamicClass().sayHello();

function createNewUser() {
  let firstName = prompt("Введіть своє ім'я");
  let lastName = prompt("введіть своє призвище");
  return {
    name: firstName,
    "last name": lastName,
    getLogin() {
      console.log((this.name[0] + this["last name"]).toLowerCase());
    },
  };
}

let newUser = createNewUser();
console.log(newUser.getLogin());

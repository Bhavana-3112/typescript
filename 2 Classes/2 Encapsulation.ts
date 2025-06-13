class User {
  private _password: string = "";

  get password(): string {
    return this._password;
  }

  set password(newPassword: string) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    } else {
      console.log("Password too short");
    }
  }
}
const encapsulatedUser = new User();
encapsulatedUser.password
    = "123456"; // valid
encapsulatedUser.password
    = "123"; // Password too short
console.log
(encapsulatedUser.password); // 123456
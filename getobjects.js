/* var userone = {
    email: 'rehanghq@gmail.com',
    mobile: '03469200752',
    login() { this.email, 'User login' },
    logout() { this.email, 'User logout' },
};


var usertwo = {
    email: 'alikhan@gmail.com',
    mobile: '034698522',
    login() { this.email, 'User login' },
    logout() { this.email, 'User logout' },
};

console.log(userone.email); */

class User {

    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

}

var classobj1 = new User("rehanghq@gmail.com", 'Rehan');
var classobj2 = new User("sohailkhan@gmail.com", 'Sohail Khan');

console.log(classobj1);
console.log(classobj2);
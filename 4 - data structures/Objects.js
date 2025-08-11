var user = {
    firstName: "Kamil",
    lastName: "Programist",
    skill: "junior Javascript developer",
    isActive: true,
    age: 24,
    getUserInfo: function(role) {
        return `${this.firstName} has full user access to the system, and his role is ${role}.`;
    }
}

console.log(user.getUserInfo("Super Admin")); // konsola w formie tabeli
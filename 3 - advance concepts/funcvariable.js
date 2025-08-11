var userRole = function (name,role)
{
    switch(role)
    {
        case "Super Admin":
            console.log(`${name} is ${role} and its has all access.`);
            break;

        case "Admin":
            console.log(`${name} is ${role} and its has all access except creating new admin.`);
            break;

        case "DEO":
            console.log(`${name} is ${role} and its has all access to add records.`);
            break;

        default:
            console("Invalid User Role");
    }
}
userRole("Kamil","Super Admin");
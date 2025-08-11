var user = "default";

switch (user)
{
        case "Super Admin":
        console.log("You have full access to the system.");
        break;

        case "Admin":
        console.log("You have full access to the system, but you can't delete anything");
        break;

        case "DEO":
        console.log("You have access to enter and update the records");
        break;

        case "User":
        console.log("You have access to view the records.");
        break;
    default:
        console.log("You don't have access to the system.");
        break;
}
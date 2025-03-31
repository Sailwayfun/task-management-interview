/**
 * @param users User[]
 * @description Sort users by "firstName, lastName, customerID"
 * My thought is to concat the three fields into one string, and use String.prototype.localeCompare() as compareFn for array.sort()
 */
function sortUserName(users) {
  const sortedUsers = users.sort((a, b) => {
    return (a.firstName + a.lastName + a.customerID).localeCompare(
      b.firstName + b.lastName + b.customerID
    );
  });

  console.log("[sortUserName]", sortedUsers);
}

class User {
  constructor(props) {
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.note = props.note;
    this.profession = props.profession;
    this.customerID = props.customerID;
  }
}

const users = [
  new User({
    firstName: "John",
    lastName: "Doe",
    note: "",
    profession: "student",
    customerID: 1,
  }),
  new User({
    firstName: "Allen",
    lastName: "Walker",
    note: "",
    profession: "student",
    customerID: 2,
  }),
  new User({
    firstName: "Amy",
    lastName: "",
    note: "",
    profession: "freelancer",
    customerID: 3,
  }),
  new User({
    firstName: "Tom",
    lastName: "Hank",
    note: "Today is Monday",
    profession: "productOwner",
    customerID: 4,
  }),
  new User({
    firstName: "Emma",
    lastName: "Watson",
    note: "Tomorrow is another day",
    profession: "engineer",
    customerID: 5,
  }),
  new User({
    firstName: "Tom",
    lastName: "Riddle",
    note: "I'm Valdimmort",
    profession: "systemAnalytics",
    customerID: 6,
  }),
];

console.log({ users });

sortUserName(users);

//firstName: string
//lastName: string | undefined
//customerID: number
//note: string | undefined
//profession: ‘student’ |‘freelancer’ | ‘productOwner’ | ‘engineer’ | 'systemAnalytics'

//sortBy (‘firstName’ + ‘lastName’ + ‘customerID’)

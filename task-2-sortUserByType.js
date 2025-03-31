const professionArr = [
  "systemAnalytics",
  "engineer",
  "productOwner",
  "freelancer",
  "student",
];

function sortUserByType(users) {
  const sortedUsers = users.sort((a, b) => {
    return (
      professionArr.indexOf(a.profession) - professionArr.indexOf(b.profession)
    );
  });

  console.log("[sortUserByType]", sortedUsers);

  return sortedUsers;
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

sortUserByType(users);

/**
 * (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
 */

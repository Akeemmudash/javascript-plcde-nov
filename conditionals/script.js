function authorize(role) {
  switch (role) {
    case "admin":
      return "Full Access";
    case "editor":
      return "Limited Access";
    case "viewer":
      return "View Only";
    default:
      return "No access";
  }
}

function createPerson(name, role, yearsOfExperience) {
  return {
    name: name,
    role: role,
    yearsOfExperience: yearsOfExperience,
  };
}

function logEmployeeAccess(employee) {
  const levelAccess = authorize(employee.role);
  console.log(
    `${employee.name}, who is an ${employee.role} with ${employee.yearsOfExperience} years of experience has ${levelAccess}`,
  );
}

const person1 = createPerson("Mobolaji Martins", "admin", 25);
const person2 = createPerson("John Doe", "viewer", 5);
const person3 = createPerson("Joseph Oluwaseun", "editor", 10);

logEmployeeAccess(person3);

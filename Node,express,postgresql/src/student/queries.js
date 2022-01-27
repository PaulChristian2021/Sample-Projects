const getStudents = "SELECT * FROM students";

const getStudentById = (id) => `SELECT * FROM students WHERE id = ${id}`;

const checkEmailExists = `SELECT s FROM students s WHERE s.email = $1`;

const addStudent = `INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *`;

const removeStudent = `DELETE FROM students WHERE id = $1`;


const updateStudent = (column, val, id) => {
  if (column === "age") {
    return `UPDATE students SET ${column} = ${val} WHERE id = ${id} RETURNING *`;
  } else if (column === "email" || column === "name" || column === "dob") {
    let cleanedVal = "";
    if (val.includes("'")) {
      cleanedVal = val.replace(/'/g, "''");
    } else {
      cleanedVal = val;
    }
    return `UPDATE students SET ${column} = '${cleanedVal}' WHERE id = ${id} RETURNING *`;
  }
};

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
};

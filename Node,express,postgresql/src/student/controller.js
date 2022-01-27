const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  pool.query(queries.getStudentById(id), (err, results) => {
    if (!results.rows.length) {
      res.status(404).send("Email doesn't exist.");
    }
    if (err) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.status(403).send("Email already exists.");
    } else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (err, results) => {
          if (err) throw err;
          res.status(201).send("Student created successfully");
        }
      );
    }
  });
};

const removeStudent = (req, res) => {
  const { id } = req.params;
  console.log(id);
  pool.query(queries.getStudentById(id), (err, results) => {
    const noStudentFound = results.rows.length;
    if (noStudentFound < 1) res.send("Student doesn't exist");
    else {
      pool.query(queries.removeStudent, [id], (err, results) => {
        if (err) throw err;
        else res.status(200).send("Student deleted successfully");
      });
    }
  });
};

const updateStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  const { id } = req.params;

  if (!!name) {
    pool.query(queries.updateStudent("name", name, id), queryCallback);
  }
  if (!!age) pool.query(queries.updateStudent("age", age, id), queryCallback);
  if (!!dob) pool.query(queries.updateStudent("dob", dob, id), queryCallback);
  if (!!email) {
    pool.query(queries.updateStudent("email", email, id), queryCallback);
  }
  
  function queryCallback(err, results) {
    if (err) throw err;
    else {
      console.log(results.rows);
    }
  }
  res.send({ name, email, age, dob });
};

//exports functions to interact with Postgresql
module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};

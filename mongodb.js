use("CollegeDB");

db.createCollection("students");

db.students.insertMany([
  { roll_no: 101, name: "Akon", department: "CSE", age: 20 },
  { roll_no: 102, name: "Riya", department: "IT", age: 19 },
  { roll_no: 103, name: "Rahul", department: "CSE", age: 21 }
]);

// Display all students
db.students.find();

// Find CSE students
db.students.find({ department: "CSE" });

// Update Riya's age
db.students.updateOne(
  { roll_no: 102 },
  { $set: { age: 20 } }
);

// Display updated record
db.students.findOne({ roll_no: 102 });

// Delete Rahul's record
db.students.deleteOne({ roll_no: 103 });

// Sort by age
db.students.find().sort({ age: 1 });

// Count remaining students
db.students.countDocuments();
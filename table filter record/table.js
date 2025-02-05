let record = [
  {
    RollNo: 1,
    Name: "Jay",
    Gender: "male",
    Maths: 90,
    Physics: 75,
    Chemistry: 62,
    Percentage: "79.52%",
    Grade: "B"
  },
  {
    RollNo: 2,
    Name: "Priya",
    Gender: "female",
    Maths: 88,
    Physics: 80,
    Chemistry: 76,
    Percentage: "81.33%",
    Grade: "B"
  },
  {
    RollNo: 3,
    Name: "Arjun",
    Gender: "male",
    Maths: 55,
    Physics: 60,
    Chemistry: 50,
    Percentage: "55.00%",
    Grade: "C"
  },
  {
    RollNo: 4,
    Name: "Anjali",
    Gender: "female",
    Maths: 95,
    Physics: 92,
    Chemistry: 90,
    Percentage: "92.33%",
    Grade: "A+"
  },
  {
    RollNo: 5,
    Name: "Ravi",
    Gender: "male",
    Maths: 65,
    Physics: 70,
    Chemistry: 80,
    Percentage: "71.67%",
    Grade: "B"
  },
  {
    RollNo: 6,
    Name: "Simran",
    Gender: "female",
    Maths: 85,
    Physics: 65,
    Chemistry: 60,
    Percentage: "70.00%",
    Grade: "B"
  },
  {
    RollNo: 7,
    Name: "Sameer",
    Gender: "male",
    Maths: 45,
    Physics: 50,
    Chemistry: 52,
    Percentage: "49.00%",
    Grade: "Fail"
  },
  {
    RollNo: 8,
    Name: "Meera",
    Gender: "female",
    Maths: 88,
    Physics: 82,
    Chemistry: 76,
    Percentage: "82.00%",
    Grade: "B"
  },
  {
    RollNo: 9,
    Name: "Karan",
    Gender: "male",
    Maths: 98,
    Physics: 92,
    Chemistry: 93,
    Percentage: "94.33%",
    Grade: "A+"
  },
  {
    RollNo: 10,
    Name: "Neha",
    Gender: "female",
    Maths: 78,
    Physics: 70,
    Chemistry: 80,
    Percentage: "76.00%",
    Grade: "B"
  },
  {
    RollNo: 11,
    Name: "Aarav",
    Gender: "male",
    Maths: 55,
    Physics: 50,
    Chemistry: 48,
    Percentage: "51.00%",
    Grade: "Fail"
  },
  {
    RollNo: 12,
    Name: "Ria",
    Gender: "female",
    Maths: 91,
    Physics: 89,
    Chemistry: 80,
    Percentage: "86.67%",
    Grade: "A"
  },
  {
    RollNo: 13,
    Name: "Raj",
    Gender: "male",
    Maths: 66,
    Physics: 60,
    Chemistry: 70,
    Percentage: "65.33%",
    Grade: "C"
  },
  {
    RollNo: 14,
    Name: "Sonali",
    Gender: "female",
    Maths: 45,
    Physics: 40,
    Chemistry: 45,
    Percentage: "43.33%",
    Grade: "Fail"
  },
  {
    RollNo: 15,
    Name: "Rahul",
    Gender: "male",
    Maths: 80,
    Physics: 70,
    Chemistry: 75,
    Percentage: "75.00%",
    Grade: "B"
  },
  {
    RollNo: 16,
    Name: "Aisha",
    Gender: "female",
    Maths: 92,
    Physics: 80,
    Chemistry: 88,
    Percentage: "86.67%",
    Grade: "A"
  },
  {
    RollNo: 17,
    Name: "Nikhil",
    Gender: "male",
    Maths: 77,
    Physics: 73,
    Chemistry: 80,
    Percentage: "76.67%",
    Grade: "B"
  },
  {
    RollNo: 18,
    Name: "Kavita",
    Gender: "female",
    Maths: 62,
    Physics: 58,
    Chemistry: 60,
    Percentage: "60.00%",
    Grade: "C"
  },
  {
    RollNo: 19,
    Name: "Vikram",
    Gender: "male",
    Maths: 98,
    Physics: 98,
    Chemistry: 92,
    Percentage: "96.00%",
    Grade: "A+"
  },
  {
    RollNo: 20,
    Name: "Aarti",
    Gender: "female",
    Maths: 62,
    Physics: 65,
    Chemistry: 60,
    Percentage: "62.33%",
    Grade: "C"
  },
  {
    RollNo: 21,
    Name: "Manish",
    Gender: "male",
    Maths: 35,
    Physics: 42,
    Chemistry: 38,
    Percentage: "38.33%",
    Grade: "Fail"
  },
  {
    RollNo: 22,
    Name: "Komal",
    Gender: "female",
    Maths: 70,
    Physics: 65,
    Chemistry: 80,
    Percentage: "71.67%",
    Grade: "B"
  },
  {
    RollNo: 23,
    Name: "Sameer",
    Gender: "male",
    Maths: 50,
    Physics: 47,
    Chemistry: 45,
    Percentage: "47.33%",
    Grade: "Fail"
  },
  {
    RollNo: 24,
    Name: "Alisha",
    Gender: "female",
    Maths: 83,
    Physics: 76,
    Chemistry: 88,
    Percentage: "82.33%",
    Grade: "B"
  },
  {
    RollNo: 25,
    Name: "Deepak",
    Gender: "male",
    Maths: 78,
    Physics: 79,
    Chemistry: 80,
    Percentage: "79.00%",
    Grade: "B"
  }
];

const Reset = () => {
  let tbl = "";
  record.map((val) => {
    tbl += `
                    <tr>
                        <td>${val.RollNo}</td>
                        <td>${val.Name}</td>
                        <td>${val.Gender}</td>
                        <td>${val.Maths}</td>
                        <td>${val.Physics}</td>
                        <td>${val.Chemistry}</td>
                        <td>${val.Percentage}</td>
                        <td>${val.Grade}</td>
                    </tr>`
    document.getElementById(`tableData`).innerHTML = tbl;
  })
}

Reset();

// name

const Name = () => {

  let name = document.getElementById(`name`).value;

  let filterName = record.filter((val, index) => {
    return name == val.Name;
  })

  document.getElementById(`name`).value = "";

  let tbl = "";
  filterName.map((val) => {
    tbl += `
                <tr>
                    <td>${val.RollNo}</td>
                    <td>${val.Name}</td>
                    <td>${val.Gender}</td>
                    <td>${val.Maths}</td>
                    <td>${val.Physics}</td>
                    <td>${val.Chemistry}</td>
                    <td>${val.Percentage}</td>
                    <td>${val.Grade}</td>
                </tr>`
    document.getElementById(`tableData`).innerHTML = tbl;
  })

}
// gender 
const Gender = () => {
  let gender = document.getElementById(`gender`).value;

  let filterGender = record.filter((val, index) => {
    return gender == val.Gender;
  })

  document.getElementById(`gender`).value = "";

  let tbl = "";
  filterGender.map((val) => {
    tbl += `
                    <tr>
                        <td>${val.RollNo}</td>
                        <td>${val.Name}</td>
                        <td>${val.Gender}</td>
                        <td>${val.Maths}</td>
                        <td>${val.Physics}</td>
                        <td>${val.Chemistry}</td>
                        <td>${val.Percentage}</td>
                        <td>${val.Grade}</td>
                    </tr>`
    document.getElementById(`tableData`).innerHTML = tbl;
  })
}

// grade
const Grade = () => {

  let grade = document.getElementById(`grade`).value;

  let filterGrade = record.filter((val, index) => {
    return grade == val.Grade;
  })

  document.getElementById(`grade`).value = "";

  let tbl = "";
  filterGrade.map((val) => {
    tbl += `
                  <tr>
                      <td>${val.RollNo}</td>
                      <td>${val.Name}</td>
                      <td>${val.Gender}</td>
                      <td>${val.Maths}</td>
                      <td>${val.Physics}</td>
                      <td>${val.Chemistry}</td>
                      <td>${val.Percentage}</td>
                      <td>${val.Grade}</td>
                  </tr>`
    document.getElementById(`tableData`).innerHTML = tbl;
  })
}


// percentage
const percentagee = () => {

  let percentage = document.getElementById(`percentage`).value;
  let percentage1 = document.getElementById(`percentage1`).value;

  let filterpercentage = record.filter((val, index) => {
    return val.Percentage >= percentage  && val.Percentage <= percentage1;
  })

  // document.getElementById(`percentage`).value = "";

  let tbl = "";
  filterpercentage.map((val) => {
    tbl += `
                  <tr>
                      <td>${val.RollNo}</td>
                      <td>${val.Name}</td>
                      <td>${val.Gender}</td>
                      <td>${val.Maths}</td>
                      <td>${val.Physics}</td>
                      <td>${val.Chemistry}</td>
                      <td>${val.Percentage}</td>
                      <td>${val.Grade}</td>
                  </tr>`

  })
  document.getElementById(`tableData`).innerHTML = tbl;
}


const STUDENTS = [
    {
        name: "Nidhi",
        city: "Pune",
        id: 2,
    },
    {
        name: "Arpit",
        city: "Nagpure",
        id: 4,
    },
    {
        name: "Nidhi",
        city: "Pune",
        id: 1,
    },

    {
        name: "Arpit",
        city: "Nagpure",
        id: 5
    },
];
const gethealth = (req, res) => {
    console.log("Server is running");
}


const getStudents = (req, res) => {
    res.status(200).json({
        success: true,
        data: STUDENTS, // call empty array
        message: "students fetched successfully"
    })
};

const postStudents = (req, res) => {
    //const name = req.body.name;
    //const city=req.body.city; // read for json backend
    const { id, name, city } = req.body; // destucturing 

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "id is required",
        });
    };

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "name is required",
        });
    };

    for (const students of STUDENTS) {
        if (id == students.id) {
            return res.status(400).json({
                success: false,
                message: "id already exists",
            })
        }
    };

    const studentObj = {
        // if key and value is same , there name, city is create
        "id": id,
        "name": name,
        "city": city,
    }; // create object

    STUDENTS.push(studentObj);

    return res.status(201).json({
        success: true,
        data: studentObj,
        message: "students create successfully",
    })
};


const deleteStudents = (req, res) => {

    // const { id } = req.body;
    const { id } = req.params

    const studentsIndex = STUDENTS.findIndex(stud => stud.id == id);

    let studentsminus = -1;


    if (studentsIndex == studentsminus) { // when use params triple equal to is not use because params is in string forward
        return res.status(400).json({
            success: false,
            message: "This id does not exits"
        });
    }
    else {
        STUDENTS.splice(studentsIndex, 1)
        return res.status(200).json({
            success: true,
            message: "Id delete successfully"
        })
    }
};
/*const { id } = req.body;

let studentIndex = -1;

STUDENTS.forEach((stud, i) => {
    if(stud.id === id) {
        studentIndex = i;
    }
    })


if(studentIndex === -1) {
return res.json({
    success:false,
    message:`Students with this id ${id} does not exist`,
});
} else {
 STUDENTS.splice(studentIndex,1);
 return res.json ({
     success:true,
    message:"student id delete successfully"
 })
};*/


const putStudents = (req, res) => {
    const { id } = req.params;

    const { name, city } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    };

    if (!city) {
        return res.status(400).json({
            success: false,
            message: "city is required"
        });
    };

    const studentIndex = STUDENTS.findIndex(stud => stud.id == id);

    let studentsminus = -1;

    if (studentIndex == studentsminus) {
        return res.status(404).json({
            success: false,
            message: `This is does not ${id} exits`
        });
    };

    STUDENTS[studentIndex] = {
        id: parseInt(id),
        name: name,
        city: city
    };

    return res.status(200).json({
        success: true,
        data: STUDENTS[studentIndex],
        message: `This id ${id} update successfully`,
    });
};

const patchStudents = (req, res) => {
    const { id } = req.params;
    const { city } = req.body;

    if (!city) {
        return res.status(400).json({
            success: false,
            message: "City is required"
        });
    }

    const studentIndex = STUDENTS.findIndex(stud => stud.id == id);

    const studentminus = -1;

    if (studentIndex == studentminus) {
        return res.status(404).json({
            success: false,
            message: `This ${id} does not exits`
        });
    }

    const exitstingStudents = STUDENTS[studentIndex];

    const updateStudents = {
        ...exitstingStudents,
        city,
    };

    STUDENTS[studentIndex] = updateStudents;

    return res.status(201).json({
        success: true,
        data: updateStudents,
        message: `city updated successfully`
    });

}

const getStudentsById = (req, res) => {
    const { id } = req.params
    const studentIndex = STUDENTS.findIndex(stud => stud.id == id);

    let studentsminus = -1;

    if (studentIndex == studentsminus) {
        return res.status(404).json({
            success: false,
            message: `This is does not ${id} exits`
        });
    } else {
        return res.status(200).json({
            success: true,
            data: STUDENTS[studentIndex],
            message: `Students with id: ${id} fetch succesfully`
        });
    }

};


export {
    gethealth,
    getStudents,
    postStudents,
    deleteStudents,
    putStudents,
    patchStudents,
    getStudentsById,
}
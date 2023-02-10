import StudentModel from "../Models/studentModel.js";
import TeacherModel from "../Models/teacherModel.js";
import AdminModel from "../Models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//register a student
export const studentregister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newStudent = new StudentModel(req.body);
        const { studentId } = req.body;

        const oldStudent = await StudentModel.findOne({ studentId: studentId });
        if (oldStudent) return res.status(400).json({ error: "Student already exists" });

        const savedStudent = await newStudent.save();
        res.status(200).json({ student: savedStudent });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

//login of student
export const studentlogin = async (req, res) => {
    try {

        const { studentId, password } = req.body;
        console.log(studentId, password);

        const student = await StudentModel.findOne({ studentId: studentId });
        console.log(student);

        if (!student) {
            return res.status(400).json({ error: "Student not found" });
        }
        console.log(student.password);

        const validPassword = await bcrypt.compare(password, student.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid Password" });
        }
        else {
            const token = jwt.sign({
                id: student._id,
                studentId: student.studentId
            },
                process.env.JWT_SECRET, { expiresIn: "24h" });
            res.status(200).json({ token: token, student: student });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


//register a teacher
export const teacherregister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPaasword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPaasword;

        const newTeacher = new TeacherModel(req.body);
        const { teacherId } = req.body;

        const oldTeacher = await TeacherModel.findOne({ teacherId: teacherId });
        if (oldTeacher) return res.status(400).json({ error: "Teacher already exists" });

        const savedTeacher = await newTeacher.save();
        res.status(200).json({ teacher: savedTeacher });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }

}

//login of teacher
export const teacherlogin = async (req, res) => {
    try {
        const { teacherId, password } = req.body;

        const teacher = TeacherModel.findOne({ teacherId: teacherId });
        if (!teacher) return res.status(400).json({ error: "Teacher not found" });

        const validPassword = await bcrypt.compare(password, teacher.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid Password" });

        const token = jwt.sign({
            id: teacher._id,
            teacherId: teacher.teacherId
        },
            process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ token: token, teacher: teacher });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: err.message });
    }
};

//register a admin
export const adminregister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newAdmin = new AdminModel(req.body);
        const { adminId } = req.body;
        
        const oldAdminId = await AdminModel.findOne({ adminId: adminId });
        if (oldAdminId) return res.status(400).json({ error: "Admin already exists" });

        const savedAdmin = await newAdmin.save();
        res.status(200).json({ admin: savedAdmin });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

//login a admin
export const adminlogin = async (req, res) => {
    try {
        const { adminId, password } = req.body;
        const admin = AdminModel.findOne({ adminId: adminId });
        if (!admin) return res.status(400).json({ error: "Admin not found" });

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid Password" });
        const token = jwt.sign({
            id: admin._id,
            adminId: admin.adminId
        },
            process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ token: token, admin: admin });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}
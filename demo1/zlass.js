/**
 *
 * @author lonecloud
 * @date 2017/9/26
 * @version v1.0
 */
var student=require('./student')
var teacher=require('./teacher')

student.add("student1")
teacher.add("teacher1")

function add(teacherName,students) {
    teacher.add(teacherName)
    students.forEach(function (item,index) {
        student.add(item);
    })
}

exports.add=add

// module.exports=add
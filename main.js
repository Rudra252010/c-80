var name_of_students_array=[];
var display_students_array=[];
function submit(){
    for(var j=1;j<=4;j++){
        var name_of_students=document.getElementById("name_of_the_student_"+j).value;
       console.log(name_of_students); 
        name_of_students_array.push(name_of_students);
var length_of_stu_array=name_of_students_array.length;
console.log(length_of_stu_array);
    }
for(var k=0;k<length_of_stu_array;k++){
    display_students_array.push("<h4>Name: "+name_of_students_array[k]+"</h4>");
    console.log(display_students_array);
document.getElementById("display_name_with_commas").innerHTML=display_students_array;
var remove_com=display_students_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_com;
}
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);
var display_sort_array=[];
var length_of_stu_array=name_of_students_array.length;
for(var k=0;k<length_of_stu_array;k++){
    display_sort_array.push("<h4>Name: "+name_of_students_array[k]+"</h4>");
    console.log(display_sort_array);
var remove_com=display_sort_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_com;
}

}

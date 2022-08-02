name_of_the_student_array=[];

function submit()
{


var display_studentarray=[];
for(var j=1;j<=4;j++){
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);

}
console.log(name_of_the_student_array);
var length_of_name_of_studen_array=name_of_the_student_array.length;
console.log(length_of_name_of_studen_array);
for(var k=0;k<length_of_name_of_studen_array;k++){
    display_studentarray.push("<h4>NAME - "+name_of_the_student_array[k]+"</h4>");
    console.log(display_studentarray);


    
}
console.log(display_studentarray);
document.getElementById("display_name_with_commas").innerHTML=display_studentarray;
var remove_commas=display_studentarray.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    name_of_the_student_array.sort();
    var display_studentarray_sorting=[];
    var length_of_name_of_studen_array=name_of_the_student_array.length;
    for(var k=0;k<length_of_name_of_studen_array;k++){
        display_studentarray_sorting.push("<h4>NAME - "+name_of_the_student_array[k]+"</h4>");
        console.log(display_studentarray_sorting); 
    }
    var remove_commas=display_studentarray_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

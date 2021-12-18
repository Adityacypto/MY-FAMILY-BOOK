var images = ["blob:https://web.whatsapp.com/ca37804d-8898-47c6-89f8-5379989b5272","https://web.whatsapp.com/9e2b0028-1729-43cb-8b04-adc8d141f6e8","https://web.whatsapp.com/e2d062ff-ef21-423f-9848-1db70551dbd5"];

var names = ["Aditya","Aradhya","Jyoti"];


var i = 0;
function next() {

    i++;
    var number_of_family_members_in_array = 3;
    if(i> number_of_family_members_in_array ){

        i=0;
    }
    var updated_image = images[i];
    var updated_name = names[i];

    document.getElementById("family_member_name").innerHTML = updated_name;
    document.getElementById("family_member_img").src = updated_image;
}

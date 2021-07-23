var images=["https://static1.bigstockphoto.com/9/6/4/large1500/46913023.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_Happy_Working_Mom_Cartoon.svg/488px-A_Happy_Working_Mom_Cartoon.svg.png","https://www.clipartkey.com/mpngs/m/268-2684271_sunglasses-clipart-kid-boy-with-specs-cartoon.png","https://th.bing.com/th/id/OIP.dfUWLufYkMlGV7sUMJH_-gHaJ9?pid=ImgDet&rs=1"];
var names=["Ram", "Vashnavi","Shiva","Samyuktha"];
var i=0;
function update() {
    i++;
    if(i>3){
        i=0;
    }
    var updated_img= images[i];
    var updated_name= names[i];
    document.getElementById("Family_img").src=updated_img;
    document.getElementById("family_name").innerHTML=updated_name;
}
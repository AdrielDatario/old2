menu_list_array = ["Veg Margherita Pizza","Meaty Pizza","EX large","1 slice small"
                    ];

function getmenu(){
var htmldata;
html="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+'<div class="card">'
    +'<h4>' +menu_list_array[i]+' </h4>'
    +'<img id="pizza1" src="images/pizzaImg.png"/>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
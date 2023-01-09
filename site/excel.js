const arr =[["entanglement","quantum chemistry","India","Kmit","2022-11-19","Ongoing","hallo"],
            ["dis-entanglement","chemistry","USA","Kmit","2022-09-01","Completed","hallo"],
            ["re-entanglement","physical chemistry","UK","Harvard","2022-07-05","Ongoing","hallo"],
            ["dis-entanglement","quantum chemistry","Australia","Kmec","2022-03-08","Completed","hallo"],
            ["re-entanglement","quantum chemistry","India","Kmit","2022-08-03","Ongoing","hallo"],
            ["entanglement","inorganic chemistry","Sri-Lanka","Ngit","2020-11-31","Ongoing","hallo"],
            ["dis-entanglement","quantum chemistry","India","Kmit","2022-01-01","Completed","hallo"],
            ["entanglement","organic chemistry","India","Kmit","2021-11-31","Stopped","hallo"]];

const dummy = arr;
const table = document.getElementById("tabul");
const all_img = document.getElementsByClassName("im");
const input = document.getElementsByClassName("form-control");

// changes images to diasbled
function reset_img(){
    Array.from(all_img).forEach(item => item.src="images/disabled.png");
}

// deletes all rows except header
function del_rows(){
    let row = table.rows.length;
    for(i=1;i<row;i++){
        table.deleteRow(-1);
    }
}

//reset function
function reset_table(){
    reset_img();
    del_rows();
}

//fills specific array passed to it
function fill_rows(array){
    let array_length = array.length;
    for(i=0;i<array.length;i++){
        let row = table.insertRow();
        for(j=0;j<7;j++){
            row.insertCell().innerHTML = array[i][j];
        }
    }
}

function fill_singular(example){
    let row = table.insertRow();
    for(i=0;i<7;i++){
        row.insertCell().innerHTML = example[i];
    }
}

function change_img(id_ele){
    let changee = document.getElementById(id_ele);
    let comp = changee.src.split("/").at(-1);

    if(comp=="disabled.png"){
        reset_img();
        changee.src = "images/down.png";
        sort(id_ele,"down");
    }

    if(comp=="down.png"){
        reset_img();
        changee.src = "images/up.png";
        sort(id_ele,"up");
    }

    if(comp=="up.png"){
        reset_img();
        changee.src = "images/down.png";
        sort(id_ele,"down");
    }
    
}


function search(){
    reset_img();
    del_rows();
    fill_rows(dummy);
}


function sort(id,direc){
    let col = id.slice(-1);
    del_rows();

    if(col!=5){
        dummy.sort(function(a,b){return a[col-1].localeCompare(b[col-1]);});

        if(direc=="down"){
            fill_rows(dummy.reverse());
        }
        else{
            fill_rows(dummy);
        }
    }

    else{
        dummy.sort(function(a,b){return new Date(a).getTime() - new Date(b).getTime()});

        if(direc=="down"){
            fill_rows(dummy);
        }
        else{
            dummy.reverse();
            fill_rows(dummy);
        }
    }
}

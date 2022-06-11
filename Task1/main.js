


const numbers = [];
let e,id,usertaskid;
document.getElementById('add').addEventListener('click', clicked)





function donebtn(id1,id2){

id=id1;
usertaskid=id2;
   
}
function deletebtn(id,usertaskid){

    document.getElementById(id).addEventListener('click', deleteclicked(usertaskid))
}


function clicked() {
    e = document.getElementById('taskname').value;
    numbers.push(e);
    loadata(e)
    // document.getElementById("myList").appendChild(node);

}

function deleteclicked(usertaskid) {
    // document.getElementById(usertaskid).remove();
    console.log('yash');


}



function loadata(e) {

    if (e) {

        let node = document.createElement("div");
        node.className = 'tasks';
        node.id = e + 'task';
        

        let text = document.createElement("i");
        text.className = 'text';
        text.innerHTML = e;

        node.appendChild(text);

        let iconClass = document.createElement("i");
        iconClass.className = 'icons';

        let icon1 = document.createElement("i");
        icon1.className = 'fa-solid fa-circle-check pad';
        icon1.id = 'done'+e ;



        let icon2 = document.createElement("i");
        icon2.className = 'fa-solid fa-circle-xmark';
        icon2.id = 'delete'+e ;


        iconClass.appendChild(icon1);
        iconClass.appendChild(icon2);
        node.appendChild(iconClass);

        document.getElementById("yash").appendChild(node);
        document.getElementById('taskname').value = null;
        let id='done'+e;
        let deleteid='delete'+e;
        let usertaskid= e + 'task';
        // donebtn(id,usertaskid);
        // deletebtn(deleteid,usertaskid);

        let icon1Id='done'+e;
        let icon2Id='delete'+e;
        document.getElementById(icon1Id).addEventListener('click', (e) => {
		document.getElementById(usertaskid).style.background='#85e385';	
		});

        document.getElementById(icon2Id).addEventListener('click', (e) => {
            document.getElementById(usertaskid).remove();
		});




    }


}


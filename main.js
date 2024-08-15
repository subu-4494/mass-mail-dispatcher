

//--------------------------------------------validating emails--------------------------------------------------//

let upload=document.getElementById('upload');
upload.addEventListener('change',()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload=function(){
        let Arr = fr.result.split(/\r?\n|\n/).map(e =>{
            return e.split(',');
        });
        Window.valNo=0;
        let invalNo=0;
        Window.valMail=[];
        Arr.forEach(e =>{
            let em=String(e);
            let m=e.map(e =>{
                return `<td>${e}</td>`; //table-data
            })
            let creEle=document.createElement("tr"); //tr=tablerow
            creEle.innerHTML=m;
            if(em!=""){//so that blank row will not be printed as well as counted
            //if (em.indexOf('@')!=0{
            //document.queryselector("table#val").appendChild(creEle);
            //return false
            //}
            //below conditions are used for valid and invalid mails
        
                if(em.charAt(em.length - 4)=='.'){   //.com //valid mail
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo=Window.valNo + 1;
                    return false;
                }

                else if(em.charAt(em.length - 3)=='.'){   //.in //valid mail
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo=Window.valNo + 1;
                    return false;
                }

                else{
                    document.querySelector("table#inval").appendChild(creEle); //invalid mail
                    invalNo=invalNo + 1;
                    return false;
                }
            }
        });

        document.querySelector('#valCount').innerHTML=Window.valNo;
        document.querySelector('#invalCount').innerHTML=invalNo;
    };
});

//-----------------------------------------sending emails---------------------------------------------------//

function sendEmail(){
    Email.send({
        Host:"smtp.elasticemail.com",
        Username:"ad8385666@gmail.com",
        Password:"Ankita@1234",
        To:"ad8385666@gmail.com",
        From: "ad8385666@gmail.com",
        Subject:document.querySelector('#subject').value,
        Body:document.getElementById('msg').value
    }).then(
        message =>alert(Window.valNo + "mails has been sent succesfully, press" + message + "to continue.")
    );

    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);
}


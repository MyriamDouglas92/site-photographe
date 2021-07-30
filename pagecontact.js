function cleary ()
{
// Ici je vais chercher l'id de la div qui contient le formulaire 
// sur laquelle je lui applique un display none pour lui faire disparaître.

  document.getElementById('tg2').style.display = 'none';

}

function view ()
{

 let text1 ="Merci pour votre message.";   
 let text2 = "Vous venez de nous adresser un mail de contact, nous accusons sa bonne réception et nous vous confirmons que nous reprendrons contact avec vous dans les plus bref délais.";
 let text3 ="Cordialement, l'équipe service client.";
 let br="br";

 
 let d = document.getElementById('d1');
 let b = document.createTextNode(text1);
 let t = document.createTextNode(text2);
 let e = document.createTextNode(text3);
 let s = document.createElement("br");
 let m = document.createElement("br");
 let n = document.createElement("br");
 let o = document.createElement("br");
 
 d.appendChild(b);
 d.appendChild(m);
 d.appendChild(n);
 d.appendChild(t);
 d.appendChild(s);
 d.appendChild(o);
 d.appendChild(e);
 
 

}

let decl = document.getElementById('tri');
decl.addEventListener('click', function(e){

  e.preventDefault();
  cleary();
  view();


})


const retour = document.querySelector(".RetourEnHaut");

retour.addEventListener('click',() =>{

     window.scrollTo({
         top: 0,
         left:0,
     })

})
       


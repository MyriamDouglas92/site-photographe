  function cleary ()
  {

    document.getElementById('tg2').style.display = 'none';
  
  }

  function view ()
  
  {

   let d = document.getElementById('d1');
   d.innerText= "Merci pour votre message de contact Vous venez de nous adresser un message de contact, nous accusons sa bonne réception et nous vous confirmons la reprise de contact avec vous dans les plus bref délais.Cordialement,l'équipe service client";
   return d.classList.toggle('appear');
  }
  
  let decl = document.getElementById('tri');
  decl.addEventListener('click', function(e){

    e.preventDefault();
    cleary();
    view();


  })
 
  


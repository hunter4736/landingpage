
const navMenu = () => {
  const mobilemenu = document.querySelector(".mobilemenu");
  const nav = document.querySelector(".nav-links");

  mobilemenu.addEventListener('click', ()=> {
    nav.classList.toggle('nav-links-active')
  })
}

navMenu();


var html="";

function navbar(){
  var links=[
  ["Home", "home.html"],
  ["shop", "shop.html"],
  ["Our Story", "ourstory.html"]
  ["Contact", "contact.html"]
  ];
  for (var i=0; i<links.length; i++)
  {
    var str=""+links[i];
    str=str.split(',');
    html=html+"<span class='link'><a onmouseover=\"this.className='onhover'"
      onmouseout="this.className='onout'\" href='"+str[1]+"'>"+str[0]+"</a>";
    document.getElementsByClassName('nav-links').innerHTML=html;
  }
}
navbar(); 
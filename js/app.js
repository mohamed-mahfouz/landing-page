
//Global variables.
const sections = document.querySelectorAll("section");
const navBar = document.getElementById('navbar__list');


//Create links and add them dynamically to navbar.
for(const section of sections)
{
  const sectionId = section.getAttribute('id');
  const sectionName = section.getAttribute('data-nav');
  const link = document.createElement('a');
  link.textContent = sectionName;
  link.setAttribute('href',`#${sectionId}`);
  link.className = 'menu__link';
  const listItem = document.createElement('li');
  listItem.appendChild(link);
  navBar.appendChild(listItem);
}


//Remove highlight class from navbar links.
function removeHightlightClass(){
    const navListItem = document.querySelectorAll("nav ul li");
      navListItem.forEach(item=>{
      item.classList.remove('highlight');
    });
}

//Add highlight class to list item in navbar for highligting.
function addHighlightClass(id){
  const selectorForNavLinks = `nav a[href="#${id}"]`;
  document.querySelector(selectorForNavLinks).parentElement.classList.add("highlight");
}

//Add active class to current section that in viewport.
function AddActiveClass(id){
  document.querySelector(`#${id}`).classList.add("active");
}

//Remove class atribute that had active class at section element.
function removeActiveClass()
{ 
    sections.forEach(function(section){
      section.classList.remove("active");
    });
     
}

window.addEventListener("scroll", ()=>{
 
  sections.forEach(function(section)
  {    
    if(section.getBoundingClientRect().top < window.innerHeight)
    {
      
      //get current section id that apperas in browser viewport.
      const currentSectionId= section.attributes.id.value;
      removeActiveClass();
      removeHightlightClass();
      addHighlightClass(currentSectionId);
      AddActiveClass(currentSectionId);
    }
           
  });
});


//Get links that are in my navigation menu using querySelectorAll.
const links =  document.querySelectorAll('a[href^="#"]');

//Register event handler to all links.
for (const link of links) {
  link.addEventListener("click", clickHandler);
}


//Click event handler which made smooth effect when clicked in navbar links using scroll function.
function clickHandler(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  console.log(href);
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}











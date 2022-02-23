
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


// Add class active to section that user scrolled to.
window.onscroll = () => {
  const scrollPosition = document.body.scrollTop;
  
    sections.forEach((section) => 
    {
    if (scrollPosition+10 >= section.offsetTop && 
        scrollPosition < section.offsetTop + section.offsetHeight) 
    {
        const currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
    }
  });
};

//Remove active class if it is not viewed in my current viewport.
function removeAllActiveClasses(){
    const navListItem = document.querySelectorAll("nav ul li");
    navListItem.forEach(item=>{
      item.classList.remove('active');
    });
}

//add active class to list item in nav bar.
function addActiveClass(id){
  const selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).parentElement.classList.add('active');
}
 

//Get links that are in my navigation menu using querySelectorAll.
const links =  document.querySelectorAll('a[href^="#"]');

//Register event handler to all links.
for (const link of links) {
  console.log(link);
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







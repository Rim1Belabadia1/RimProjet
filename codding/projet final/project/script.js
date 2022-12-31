var content = document.querySelector('.courses');

function creationCours(path, title, price) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    
    p.innerText = title
    p.setAttribute('class', 'card-title');
    let contenu2 = document.createTextNode(price);
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content.append(div)
}


courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price);
})


function handleSearch() {
    const query = document.getElementById('searchbar').value;
    content.innerHTML = '';
    const filteredCourses = courses.filter(course => course.title.includes(query));
    filteredCourses.forEach(function(element) {
      creationCours(element.image, element.title, element.price);
    });
  }


const input = document.getElementById('searchbar');
input.addEventListener('input', handleSearch);

// <li> dyal html
const lihtml = document.getElementById('htmlli');

function handleclickhtml() {
   
    content.innerHTML = '';
  
    const filteredcourseshtml = courses.filter(course => course.title.includes('html'));
  
   
    filteredcourseshtml.forEach(function(course) {
      const div = document.createElement('div');
      div.setAttribute('class', 'card');
  
      const img = document.createElement('img');
      img.src = course.image;
      img.setAttribute('class', 'card-img');
      div.appendChild(img);
  
      const h5 = document.createElement('h5');
      h5.innerText = course.title;
      h5.setAttribute('class', 'card-title');
      div.appendChild(h5);
  
      const p = document.createElement('p');
      p.innerText = course.price;
      p.setAttribute('class', 'card-text');
      div.appendChild(p);
  
      content.appendChild(div);
    });
  }

lihtml.addEventListener('click', handleclickhtml);

// <li> dyal CSS

const licss = document.getElementById('cssli');

function handleclickcss() {
   
    content.innerHTML = '';
  
    const filteredcoursescss = courses.filter(course => course.title.includes('css'));
  
   
    filteredcoursescss.forEach(function(course) {
      const div = document.createElement('div');
      div.setAttribute('class', 'card');
  
      const img = document.createElement('img');
      img.src = course.image;
      img.setAttribute('class', 'card-img');
      div.appendChild(img);
  
      const h5 = document.createElement('h5');
      h5.innerText = course.title;
      h5.setAttribute('class', 'card-title');
      div.appendChild(h5);
  
      const p = document.createElement('p');
      p.innerText = course.price;
      p.setAttribute('class', 'card-text');
      div.appendChild(p);
  
      content.appendChild(div);
    });
  }

licss.addEventListener('click', handleclickcss);

// <li> dyal js

const lijs = document.getElementById('jsli');

function handleclickjs() {
   
    content.innerHTML = '';
  
    const filteredcoursescss = courses.filter(course => course.title.includes('java'));
  
   
    filteredcoursescss.forEach(function(course) {
      const div = document.createElement('div');
      div.setAttribute('class', 'card');
  
      const img = document.createElement('img');
      img.src = course.image;
      img.setAttribute('class', 'card-img');
      div.appendChild(img);
  
      const h5 = document.createElement('h5');
      h5.innerText = course.title;
      h5.setAttribute('class', 'card-title');
      div.appendChild(h5);
  
      const p = document.createElement('p');
      p.innerText = course.price;
      p.setAttribute('class', 'card-text');
      div.appendChild(p);
  
      content.appendChild(div);
    });
  }

lijs.addEventListener('click', handleclickjs);

// <li> dyal PHP

const liphp = document.getElementById('phpli');

function handleclickphp() {
   
    content.innerHTML = '';
  
    const filteredcoursescss = courses.filter(course => course.title.includes('php'));
  
   
    filteredcoursescss.forEach(function(course) {
      const div = document.createElement('div');
      div.setAttribute('class', 'card');
  
      const img = document.createElement('img');
      img.src = course.image;
      img.setAttribute('class', 'card-img');
      div.appendChild(img);
  
      const h5 = document.createElement('h5');
      h5.innerText = course.title;
      h5.setAttribute('class', 'card-title');
      div.appendChild(h5);
  
      const p = document.createElement('p');
      p.innerText = course.price;
      p.setAttribute('class', 'card-text');
      div.appendChild(p);
  
      content.appendChild(div);
    });
  }

liphp.addEventListener('click', handleclickphp);

// LFLOS AKHAY


var t = courses.map(function(l){return l.price});
var allprices = [...new Set(t)];
var m = allprices[0];
for (var i = 1; i < allprices.length; i++) {
    if (allprices[i] > m) {
        m = allprices[i];
      }
}


var inputPrice = document.getElementById("PriceInput");
var prix = document.getElementById("valPrice");
inputPrice.setAttribute('max', m);



inputPrice.addEventListener('change', function(){
    prix.innerHTML = inputPrice.value;
    const filteredCourses = courses.filter(course => course.price < inputPrice.value);
    console.log(filteredCourses);
    content.innerHTML = ''
    filteredCourses.forEach(course => creationCours(course.image, course.title, course.price));
})








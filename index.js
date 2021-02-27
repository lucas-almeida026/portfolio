const renderHabilitie = h => {
  if(!h) throw new Error('Data not found')
  const parent = document.getElementsByClassName('habilitiesCntn')[0]
  const child = document.createElement('div')
  child.classList.add('habilitiesItem')
  child.classList.add('toAnimate')
  child.innerHTML = `
  <div class="name">${h[0]}</div>
  <div class="progressBar">
    <div class="fill">
      <div class="percent">${h[1]}%</div>
    </div>
  </div>`
  parent.appendChild(child)
}

const renderCourse = c => {
  if(!c) throw new Error('Data not found')
  const parent = document.getElementsByClassName('coursesCntn')[0]
  const child = document.createElement('div')
  child.classList.add('coursesItem')
  child.classList.add('toAnimate')
  if(c.finished){
    child.innerHTML = `
    <h2>${c.name}</h2>
    <p class="conclusionDate">Concluído em: ${c.conclusionDate}</p>
    <p class="level">Tipo: ${c.level}</p>
    `
  }else{
    child.innerHTML = `
    <h2>${c.name}</h2>
    <p class="conclusionDate">Previsão de conclusão: ${c.conclusionDate}</p>
    <p class="status">Progresso: ${c.status}</p>
    <p class="level">Tipo: ${c.level}</p>
    `
  }
  parent.appendChild(child)
}


const renderProject = p => {
  if(!p) throw new Error('Data not found')
  const parent = document.getElementsByClassName('projectsCntn')[0]
  const child = document.createElement('div')
  child.classList.add('projectItem')
  child.classList.add('toAnimate')
  const techList = p.technology.reduce((acm, curr) => `${acm}<li>${curr}</li>`, '')
  child.innerHTML = `
  <h2>${p.name}</h2>
  <p class="description">${p.description}</p>
  <div class="technologies">
    <p>Tecnologias utilizadas:</p>
    <ul>
      ${techList}
    </ul>
  </div>
  <a href="${p.link}" target="_blank"><div class="btn">Ver Projeto</div></a>
  `
  parent.appendChild(child)
}

const renderOtherCourses = c => {
  if(!c) throw new Error('Data not found')
  const parent = document.getElementsByClassName('otherCoursesCntn')[0]
  const child = document.createElement('div')
  child.classList.add('otherCoursesItem')
  child.classList.add('toAnimate')
  child.innerHTML = `
  <h2>${c.name}</h2>
  <p>${c.institution}</p>
  <p>${c.completion} concluído</p>
  <p class="date">Inicado em ${c.year}</p>
  `
  parent.appendChild(child)
}

const renderContacts = c => {
  if(!c) throw new Error('Data not found')
  const parent = document.getElementsByClassName('contactCntn')[0]
  const child = document.createElement('div')
  child.classList.add('contactItem')
  child.classList.add('toAnimate')
  child.innerHTML = `
  <div class="itemBody">
    <div class="bodyIcon"><img src="${c.icon}"></div>
    <div class="bodyText">
      <h2>${c.title}</h2>
      <p>${c.paragraph}</p>
    </div>
  </div>
  <div class="itemBottomBorder">
    <p>${c.callToAction}</p>
  </div>
  `
  child.onclick = c.onClick ? c.onClick : undefined
  parent.appendChild(child)
}

//----- loading data
const habilitiesList = Object.entries(data.habilities)
habilitiesList.forEach(e => renderHabilitie(e))
data.courses.forEach(e => renderCourse(e))
data.projects.forEach(e => renderProject(e))
data.otherCourses.forEach(e => renderOtherCourses(e))
data.contacts.forEach(e => renderContacts(e))
//---

let showingMenu = false
const wHeight = window.innerHeight
const screenPercent = 0.85

const btnMenu = document.getElementById('floatingMenu')
const menuBg = document.getElementsByClassName('menuBg')[0]
const mobileMenu = document.getElementsByClassName('mobileMenu')[0]
const popup = document.getElementsByClassName('popup')[0]
const progressBarList = []
const toAnimateList = []

function getScreenPercent(h) {
  return h < 700 ? 0.85 : 0.9
}

setTimeout(() => mobileMenu.style.display = 'flex' , 50)
for(let i = 0; i < document.getElementsByClassName('progressBar').length; i++)
  progressBarList.push(document.getElementsByClassName('progressBar')[i])

progressBarList.forEach(e => e.children[0].style.width = e.innerText)

for(let i = 0; i < document.getElementsByClassName('toAnimate').length; i++)
  toAnimateList.push(document.getElementsByClassName('toAnimate')[i])

window.addEventListener('scroll', () => onScroll())

btnMenu.addEventListener('click', () => {
  showingMenu ? closeMenu() : openMenu()
  showingMenu = !showingMenu
})

menuBg.addEventListener('click', () => closeMenu())

function openMenu() {
  btnMenu.classList.add('floatingMenuClose')
  menuBg.style.display = 'block'
  setTimeout(() => menuBg.style.backgroundColor = 'rgba(0, 0, 0, .7)', 10)
  mobileMenu.style.transform = 'translateY(0px)'
}

function closeMenu() {
  btnMenu.classList.remove('floatingMenuClose')
  menuBg.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  setTimeout(() => menuBg.style.display = 'none', 300)
  mobileMenu.style.transform = 'translateY(-100%)'
}

function getCurrentScrollPosition() {return document.documentElement.scrollTop}

function onScroll() {
  toAnimateList.forEach(e => {
    const trigger = e.offsetTop < getCurrentScrollPosition() + (wHeight * getScreenPercent(wHeight))
    trigger ? e.classList.remove('toAnimate') : e.classList.add('toAnimate')
  })
}

function showPopup(text, time = 1000){
  const body = document.getElementsByTagName('body')[0]
  const popup = document.createElement('div')
  popup.classList.add('popup')
  if(text) popup.innerText = text
  body.appendChild(popup)
  setTimeout(() => popup.classList.add('popupShow'), 10)
  setTimeout(() => popup.classList.remove('popupShow'), time)
}
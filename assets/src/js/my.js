// Инициализация wow.js
let wow = new WOW({
    mobile: false
  })

  wow.init()

  window.onload = () => {

  //Services
  const [...service] = document.querySelectorAll('.services__item')
  const btnService = document.querySelector('.services__btn')

  const lastService = service[service.length - 1]

  let serviceNumber = 0
  btnService.addEventListener('click', function() {
	const route = `http://localhost:3008/services`

	let response = $.ajax({
		method: "GET",
		url: route
	})

	response.done(function(data){
		data = data.slice(serviceNumber, serviceNumber + 1); 

		data.map(function(elem){
			let serviceItem = document.createElement('div')
			serviceItem.classList = 'col-lg-4 d-flex services__item wow bounceInLeft'

      serviceItem.innerHTML = `
                  <div class="col-lg-4 d-flex services__item">
                    <div>
                        <div class="services__item__icon">
                            <div class="services__item__icon__inner">
                              <img width="40" height="40" src=${elem.img}>
                            </div>   
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center ml-sm-5 mt-lg-5">
                        <div class="services__item__title">
                        ${elem.title}
                        </div>
                        <div class="services__item__text">
                        ${elem.text}
                        </div>
                    </div>
                  </div>
			`
			lastService.insertAdjacentElement('afterend', serviceItem)
		})

		serviceNumber = serviceNumber + 1
	})
	// response.fail(function(data, status){
	// 	console.log(status)
	// })
	

})

//Projects
const [...projects] = document.querySelectorAll('.projects__item')
  const btnProjects = document.querySelector('.projects__btn')

  const lastProjects = projects[projects.length - 1]

  let projectsNumber = 0
  btnProjects.addEventListener('click', function() {
	const link = `http://localhost:3008/projects`

	let response = $.ajax({
		method: "GET",
		url: link
	})

	response.done(function(data){
		data = data.slice(projectsNumber, projectsNumber + 1); 

		data.map(function(elem){
			let projectsItem = document.createElement('div')
			projectsItem.classList = 'row mobile-wrap'

      projectsItem.innerHTML = `
                <div class="projects__item col-lg-3">
                    <a href="${elem.src}">
                        <img class="projects__img mr-2" src=${elem.img} alt="">
                    </a>
                </div>
			`
			lastProjects.insertAdjacentElement('afterend', projectsItem)
		})

		projectsNumber = projectsNumber + 1
	})
	// response.fail(function(data, status){
	// 	console.log(status)
	// })
	

})

//Validation

const form = document.querySelector('.form-control')
const formLenght = form.value.length
console.log(formLenght)
const btnForm = document.querySelector('.form__btn')














}
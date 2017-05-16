const personForm = document.querySelector('form')


const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `<div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>`

  //details.innerHTML = `
    //<ul>
      //<li>Name: ${personName}</li>
      //<li>Hair Color: ${colorDiv}</li>
      //<li>Age: ${age}</li>
      //<li>Birthplace: ${birthplace}</li>
    //</ul>

    const info = document.createElement('ul')
    details.appendChild(info)
    const name = document.createElement('li')
    name.innerHTML = `name: ${personName}`
    info.appendChild(name)
    const hair = document.createElement('li')
    hair.innerHTML = `hair: ${colorDiv}`
    info.appendChild(hair)
    const age = document.createElement('li')
    age.innerHTML = `age: ${age}`
    info.appendChild(age)
    const birth = document.createElement('li')
    birth.innerHTML = `birth: ${birthplace}`
    info.appendChild(birth)

    


}

personForm.addEventListener('submit', handleSubmit)
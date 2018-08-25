document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  // when page is loaded, do these actions:
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  renderList(); //this function loads the local storage info and shows it
})

//loop to get array from local storage (getList)
const getList = function(){  // get array back from local storage
  if (JSON.parse(localStorage.getItem("heroes")) !== null){
    return JSON.parse(localStorage.getItem("heroes"));
  } else {
    return [];
  }
};

//handle form submit (user insertion into JSON object) (handleFormSubmit)
const handleFormSubmit = function(event){
  event.preventDefault(); //this needed to prevent the standard post-request from a form
  heroList = getList(); // get array back from local storage
  const newHero = {   //new JavaScript(JSON) object, in the function since no other function in need of this info. could also be outside of the handleFormSubmit function
    heroName: event.target.heroname.value,
    realName: event.target.realname.value,
    age: event.target.age.value,
    superPower: event.target.superpower.value,
    gender: event.target.gender.value,
    category: event.target.category.value,
  };

  heroList.push(newHero); //push the newHero into the heroList array

  localStorage.setItem("heroes", JSON.stringify(heroList));
  //setItem takes in a key (heroes), and takes in the data you want to save (JSON.stringify(heroList)) --> stored in Devtools --> application --> local storage
  renderList();
  event.target.reset();
}

// buildList to show user insertion in list (buildList)
const buildList = function(hero){
      // create new element
  const heroUl = document.createElement("ul"); //create new html element what it needs to be --> append inside out!
  const heroNameLi = document.createElement("li");
  heroNameLi.textContent = `Superhero name: ${hero.heroName}`; //linked via NewHero to the actual browswer navigation of event.target.heroname.value
  const realNameLi = document.createElement("li");
  realNameLi.textContent = `Real name (shhh don't tell): ${hero.realName}`;
  const ageLi = document.createElement("li");
  ageLi.textContent = `Age: ${hero.age}`;
  const superPowerLi = document.createElement("li");
  superPowerLi.textContent = `Superpower: ${hero.superPower}`;
  const genderLi = document.createElement("li");
  genderLi.textContent = `Gender: ${hero.gender}`;
  const categoryLi = document.createElement("li");
  categoryLi.textContent = `Category: ${hero.category}`;

  heroUl.appendChild(heroNameLi); //add the child to the parent element
  heroUl.appendChild(realNameLi);
  heroUl.appendChild(ageLi);
  heroUl.appendChild(superPowerLi);
  heroUl.appendChild(genderLi);
  heroUl.appendChild(categoryLi);

  return heroUl;
}

// renderList
const renderList = function(){
    // repopulates the hero list
    const heroDiv = document.querySelector('#superhero-list'); //parent element
    heroDiv.innerHTML = "";
    const heroList = getList();  // get array back from local storage
    heroList.forEach((hero) => {
    heroUl = buildList(hero);
    heroDiv.appendChild(heroUl);
  });
}

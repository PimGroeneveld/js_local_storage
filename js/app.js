document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  // when page is loaded, do these actions:
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  renderList(); //this function loads the local storage info and shows it
})

//loop to get array from local storage (getList)


//handle form submit (user insertion into JSON object) (handleFormSubmit)


// buildList to show user insertion in list (buildList)


// renderList

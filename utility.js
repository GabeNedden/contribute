const visibleList = document.querySelector(".visible-list");
const contributorList = document.querySelector(".contributor-list");

visibleList.innerHTML = `Click here to view ${contributors.length} contributors`;


visibleList.addEventListener("click", () => {
    if(contributorList.innerHTML === "") {
         
        for (let contributor of contributors) {
        const test = document.createElement("li");
        test.innerHTML = `${contributor.name} <a href="${contributor.github}"><i class="fab fa-github-square fa-1x"></i><a/> `
        contributorList.appendChild(test);
        visibleList.style.display = "none";
      }
    }
});




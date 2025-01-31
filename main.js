import { getRoles, getCompanies } from "./modules/salaryData.js";

console.log(getCompanies());
const companies = getCompanies();
const roles = getRoles();


const renderRadioInputBtnsAndLabels = (labels, idAttributeValue) =>{
    const sectionContainer = document.createElement("section");
    sectionContainer.setAttribute("id", `${idAttributeValue}Container`);
    let heading = document.createElement("h3");
    heading.innerText = `Select a ${idAttributeValue}`;
    sectionContainer.appendChild(heading);

    /* Now let's create radio buttons for each company or role
       This fuction accepts an array as parameter, we will create radio buttons
       as many elements 
    */
   labels.forEach( label => {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "option");

        let radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("name", `${idAttributeValue}`);
        radioButton.setAttribute("value", `${label}`);
        divElement.append(radioButton);

        let labelName = document.createElement("label");
        labelName.setAttribute("for", `${label}`);
        labelName.innerText = label;
        divElement.appendChild(labelName);

        sectionContainer.appendChild(divElement);
   });
   
   document.querySelector("main").prepend(sectionContainer);
}

renderRadioInputBtnsAndLabels(companies, 'company');
renderRadioInputBtnsAndLabels(roles, 'role');
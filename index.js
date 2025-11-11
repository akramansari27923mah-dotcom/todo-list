let form = document.querySelector(".input-btn")
let ad_task = document.querySelector(".add-task")
let input = document.querySelector(".inp")
let error = document.querySelector(".error")
let h3 = document.querySelector(".toto-text h3")


form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    let inpValue = input.value
   
    if (inpValue === "") {
        error.innerHTML = "please enter your task"

    }
    else if (inpValue === " ") {
        error.innerHTML = "please enter your task"
    }
    else {
        error.innerHTML = ""
        addCard()
    }

    form.reset()

    function addCard() {



        let task = document.createElement("div");
        task.className = "task";


        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "check";


        let textDiv = document.createElement("div");
        textDiv.className = "task-text";


        let h3 = document.createElement("h3");
        h3.innerText = inpValue;


        textDiv.appendChild(h3);

        let closeIcon = document.createElement("i");
        closeIcon.className = "ri-close-large-line";



        task.appendChild(checkbox);
        task.appendChild(textDiv);
        task.appendChild(closeIcon);

       
       ad_task.appendChild(task);



        checkbox.addEventListener("click", function () {
            h3.classList.toggle("line-through");

        });

        closeIcon.addEventListener("click", function () {

            ad_task.removeChild(task)

        })

    }

})



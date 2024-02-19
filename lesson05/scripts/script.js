const input = document.querySelector("favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", () => {
    if (input.value != "")
    {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");

        li.textContent = input.value;
        delBtn.textContent = "❌";

        li.append(delBtn);
        list.appendChild();


        delBtn.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();

            input.value="";
        })



    }
    else {
        message.innerHTML = `Please enter a chapter.`;
      }


})

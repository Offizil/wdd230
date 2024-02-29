const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let error = document.querySelector("#error-msg");

const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { 
    displayList(chapter);
    
});




input.focus();


button.addEventListener("click", () => {
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArray.push(input.value); //add the chapter to the array
        setChapterList();  // update the localStorage with the new array
        input.value = "";
        input.focus();


    }
   


})

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}



// Define the getChapterList function
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}


function displayList(item){
    // error.textContent = "";   
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = item;
    delBtn.textContent = "❌";
    delBtn.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(delBtn);
    list.appendChild(li);
    
    delBtn.addEventListener("click", function (){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus
    })


}


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
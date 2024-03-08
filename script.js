console.log("hello data")
console.log(emojiList);
let emojeContainer = document.getElementById("emoje_container");
let search_field = document.getElementById("search_field");

const  displayEmojee = (query='')=> {
    let filteredData = emojiList.filter(e=> {
        if(e.description.indexOf(query) != -1){
            return true;
        }
        if(e.aliases.find (elem=>elem===query)){
            return true;
        }
        if(e.tags.find(elem=>elem===query)){
            return true;}
    })
    
    emojeContainer.innerHTML='';
    if(filteredData.length === 0){
        alert("No Emoji FOund");
        return;
    }
    filteredData.forEach(e=>{
    let new_row = document.createElement("tr");
    let new_emojee= document.createElement("td");
    new_emojee.style.width ="210px"
    new_emojee.style.height = "10px"
    

    new_emojee.style.fontSize="30px";
    let new_aliases = document.createElement("td");
    new_aliases.style.width ="210px"
    new_aliases.style.fontSize="30px";
    new_aliases.style.height = "10px"
    let new_description = document.createElement("td");
    new_description.style.width ="410px"
    new_description.style.fontSize="30px";
    new_description.style.height = "10px"

    new_emojee.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description.innerText = e.description;

    new_row.appendChild(new_emojee);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);

    emoje_container.appendChild(new_row);

        console.log(emoje_container);
    //console.log(new_aliases, new_row, new_description,new_emojee);
    

    })

}
function searchData(e){
    let value = e.target.value;
    console.log(value);
    displayEmojee(value);
}
//window.addEventListener('load' , displayEmojee);
search_field.addEventListener('keyup', searchData );

window.onload = () => displayEmojee();


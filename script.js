const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes);

let lastchecked;



function handleCheck(e){
    let inBetween = false;
   if(e.shiftKey && this.checked){

checkboxes.forEach(checkbox =>{
    console.log(checkbox);
    if(checkbox === this || checkbox===lastchecked){
        inBetween = !inBetween;
        console.log('dcdsh ');
    }
    if(inBetween){
        checkbox.checked = true;
    }
})

   }
   lastchecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
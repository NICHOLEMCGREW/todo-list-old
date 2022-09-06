const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
    // check if they had shift key down
    // and check that they are checking it
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox to look for the first and last checked
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
//             if (this.checkbox.checked) {
//     document.querySelector('p').style.textDecoration = "line-through";
// } else {
//     document.querySelector('p').style.textDecoration = "none";
// }
        });
    }
    lastChecked = this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))


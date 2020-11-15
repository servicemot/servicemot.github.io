

(function (){

    const inputs = Array.from(document.getElementsByTagName('input'))

    inputs.forEach(input=>{
        const storageValue = window.localStorage.getItem(input.name) == 'true';
        input.addEventListener('change',checkboxChanged);

        if(storageValue){
            input.checked = storageValue;
        }
    })


})();

function checkboxChanged(e){
    const name = e.target.name;
    const value = e.target.checked;

    console.log(value)
    window.localStorage.setItem(name, value)
}
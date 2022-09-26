function validateForm() {
    let x = documentforms["myForm"]["fname"].value;
    if (x == "") {
        alert("No name");
        return false
    }
}
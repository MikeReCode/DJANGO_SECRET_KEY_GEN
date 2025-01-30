function copyKey() {
    const keyOutput = document.getElementById('key-output');
    navigator.clipboard.writeText(keyOutput.textContent)
        .then(() => alert('Key copied to clipboard!'))
        .catch(err => alert('Failed to copy key.'));
}

var length_inp = document.getElementById("key-length");
var generate_btn = document.getElementById("custom-url-call");
var url = `http://127.0.0.1:8000/api/generate-key/${length_inp.value}`;
generate_btn.setAttribute("hx-post", url);
htmx.process(generate_btn);

length_inp.addEventListener("change", function() {
    // Get the value of the key length from the input field
    var length = this.value;
    
    // Dynamically set the hx-get URL with the length value
    var url = `http://127.0.0.1:8000/api/generate-key/${length}`;
    
    // Set the hx-post attribute to the dynamically generated URL
    generate_btn.setAttribute("hx-post", url);

     // Reinitialize htmx for the updated element
    htmx.process(generate_btn);  
});


length_inp.addEventListener("input", function() {
    const min = parseInt(this.min);
    const max = parseInt(this.max);
    const value = parseInt(this.value);

    if (value < min) {
        this.value = min; // Automatically set to minimum if below range
    } else if (value > max) {
        this.value = max; // Automatically set to maximum if above range
    }
});

length_inp.addEventListener("keypress", function(event) {
    if (event.key < '0' || event.key > '9') {
        event.preventDefault(); // Block non-numeric input
    }
});
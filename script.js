function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var ciphertext = "";
    for (var i = 0; i < plaintext.length; i++) {
        var char = plaintext[i];
        if (char.match(/[a-z]/i)) {
            var code = plaintext.charCodeAt(i);
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        }
        ciphertext += char;
    }
    document.getElementById("ciphertext").value = ciphertext;
}
function decrypt() {
    var ciphertext = document.getElementById("ciphertext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var plaintext = "";
    for (var i = 0; i < ciphertext.length; i++) {
        var char = ciphertext[i];
        if (char.match(/[a-z]/i)) {
            var code = ciphertext.charCodeAt(i);
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
            else {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            }
        }
        plaintext += char;
    }
    document.getElementById("plaintext").value = plaintext;
}
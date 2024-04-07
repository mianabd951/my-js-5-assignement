let originalText = "I love my country Pakistan.<br>I like my city Faisalabad. <br>I love my Homeland."
let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Peshawar', 'Burewala', 'Quetta'];

// Lower Case
function lowerCase() {

    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    Toastify({
        text: "The Text Has LowerCased",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

//  Upper Case
function upperCase() {

    let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;

    Toastify({
        text: "The Text Has UpperCased",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Capitalize
function capitalize() {
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = originalText;

    Toastify({
        text: "The Text Has Capitalized",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

// Better Formating

function betterFormating() {

    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please type your text")
        return;
    }
    text = text.toLowerCase();

    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text;

    Toastify({
        text: "The Text Has Better Formatted",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

}

// Print All cities
function printCities() {

    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br/>'

    }

    Toastify({
        text: "All Cities Printed",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Add Your City

function addCity() {

    let city = document.getElementById("inputText").value;


    if (city.length < 3) {
        alert('Please type your city name correctly');
        return;
    }
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {

            cityFound = true
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            document.getElementById("output").innerHTML = html;

            Toastify({
                text: "The City Is Already in the List",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // top or bottom
                position: "left", // left, center or right
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #222831, #FF204E)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }
    if (cityFound === false) {

        cities.push(cityWordInCapitalize);
        let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.&#x2665;';
        document.getElementById("output").innerHTML = html;
        Toastify({
            text: "Your City Has Successfully Added",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top", // top or bottom
            position: "left", // left, center or right
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #222831, #FF204E)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }

}

// Check City In The List 
function checkCity() {
    let city = document.getElementById("inputText").value;

    if (!city) {
        alert("Please type your city name")
        return;
    }

    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> found in list. &#128151;';
            document.getElementById("output").innerHTML = html;

            Toastify({
                text: "The City Found in the list",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // top or bottom
                position: "left", // left, center or right
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #222831, #FF204E)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }

    if (cityFound === false) {
        let html = "SORRY &#128524; We couldn't find your city <span style='color: red; font-size: 20px;'>" + '"' + cityWordInCapitalize + '"</span>';
        document.getElementById("output").innerHTML = html;
        Toastify({
            text: "The City is not Found in the list",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top", // top or bottom
            position: "left", // left, center or right
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #222831, #FF204E)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}

//   Find the word 
function findWord() {


    let newOriginalText = originalText.toLowerCase();

    let word = document.getElementById("inputText").value;

    if (!word) {

        alert('Pleace type a word for find.');

        return;
    }

    word = word.toLowerCase();

    let findWord = newOriginalText.indexOf(word);

    console.log(findWord)

    if (findWord !== -1) {
        let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '" </span> found at index:  ' + findWord;
        document.getElementById("output").innerHTML = html;
        Toastify({
            text: "The word found in the original document",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top", // top or bottom
            position: "left", // left, center or right
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #222831, #FF204E)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        } else {
            let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '" </span> does not exist in the Original String';
            document.getElementById("output").innerHTML = html;
            Toastify({
                text: "The word not found in the original document",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // top or bottom
                position: "left", // left, center or right
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #222831, #FF204E)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
}

// Replace word in the original string
function replaceWord() {

    let newOriginalText = originalText.toLocaleLowerCase();

    let word = document.getElementById("inputText").value;

    if (!word) {
        alert('Pleace type a word for replacing')
        return;
    }

    let replaceWith = prompt('Enter a word that you want to replace');
    if (!replaceWith) {
        alert('Please type a word to replace it with ' + word + ".");

        return;
    }
    word = word.toLowerCase();

    word = new RegExp(word, 'g')

    replaceWith = replaceWith.toLowerCase();

    let replaceWord = newOriginalText.replace(word, replaceWith);

    document.getElementById("output").innerHTML = replaceWord;
    Toastify({
        text: "The Word Is Replaced",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // top or bottom
        position: "left", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #222831, #FF204E)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


// Clear Input 
function clearBtn() {
    document.getElementById("inputText").value = ""
}

// Clear Output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}
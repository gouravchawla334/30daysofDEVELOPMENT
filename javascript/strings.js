const name = "Gourav";
const greating = "Good morning";
console.log(name + " "+ greating);

let html;
html = "<h1> This is heading </h1> " + 
        "<p> This is paragraph tag</p>";
    
        console.log(html);
        //this will concatinate string in html string
        console.log(html.concat(" this", ' sr'))

        //To find out the length of html string
        console.log(html.length)

        //to change complete string in lower case
        console.log(html.toLowerCase())

        //to change the given string in upper case
        console.log(html.toUpperCase())

        //to find the index of particular string
        console.log(html.indexOf('t'))

        //to find whether the given character is present in the given index we use charAt()
        console.log(html.charAt(3))

        console.log(html.endsWith('ffff'))

        console.log(html.includes( 'fg'))

        //to print substring from a range 
        console.log(html.substring(1,6))

        // slice() is use to split the given string
        console.log(html.slice(0,16))

        console.log(html.split( ' '));

        //replace() is used to replace 
        console.log(html.replace('This' , "that"))


let fruit1 = 'orange';
let fruit2 = 'apple';
let newfruit = `Hello ${name}
                <h1>This is heading</h1>
                <b>this is bold too much</b>
                <p>you like <strong> ${fruit1}</strong> and <strong>${fruit2}</strong></p>
`;
document.body.innerHTML = newfruit;
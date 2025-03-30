const form = document.querySelector('form')
//this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit',function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)  //value is always given in string form so we need to change its required datatype
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}` 
}
else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}` 
}
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result

    // results.innerHTML = `<span>${bmi}</span>`
}
let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Display BMI and category
        results.innerHTML = `<span>Your BMI is: ${bmi}</span><br><span>Category: ${category}</span>`;
    

})

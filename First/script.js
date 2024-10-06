    let heightInput = document.getElementById('height');
    let weightInput = document.getElementById('weight');
    let heightError = document.getElementById('height-error');
    let weightError = document.getElementById('weight-error');
    let bmiValue = document.getElementById('result');

    function calculateBMI(event) {
        event.preventDefault();

    heightError.textContent = '';
    weightError.textContent = '';

    let valid = true;
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // console.log(isNaN(height));
    // console.log(isNaN(weight));
    // console.log(weight);
    // console.log(height);
    
   
    if (isNaN(height) || height <= 0) {
        heightError.innerText = 'Please enter a valid height in cm.';
        valid = false;
    }

    if (isNaN(weight) || weight <= 0) {
        weightError.innerText = 'Please enter a valid weight in kg.';
        valid = false;
    }

    if (valid) {
        height = height / 100; 
        let  bmi = weight / (height * height);
        bmi =  bmi.toFixed(2);

        document.getElementById('result').innerText = bmi;

        let comment = '';

        if(bmi < 18.5){
            comment = 'Underweight';
        }
        if(bmi >= 18.5 && bmi < 25){
            comment = 'Normal';
        }
        if(bmi >= 25 && bmi <30){
            comment = 'Overweight';
        }
        if(bmi >= 30){
            comment = 'Obese';
        }

        document.getElementById('status').innerHTML = `You are <span id ="comment">${comment}</span>`;
    }
}

document.getElementById('calculate').addEventListener('click' , calculateBMI);

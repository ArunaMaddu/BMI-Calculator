function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
  const weight = parseFloat(document.getElementById('weight').value);
  
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').textContent = "Please enter valid values!";
    document.getElementById('category').textContent = "";
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(1);
  
  document.getElementById('result').textContent = `Your BMI: ${roundedBMI}`;
  
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  
  document.getElementById('category').textContent = `Category: ${category}`;
}
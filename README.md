# BMI Calculator

![BMI Calculator Preview](https://via.placeholder.com/800x400?text=BMI+Calculator+Preview)

A responsive BMI (Body Mass Index) calculator web application that calculates and categorizes your BMI based on height and weight inputs.

## Features

- ⚖️ **Accurate BMI Calculation**: BMI = weight(kg) / (height(m))²
- 📊 **BMI Classification**: Underweight, Normal, Overweight, Obesity
- 🌍 **Unit Flexibility**: Works with both metric (kg/cm) and imperial (lbs/feet) units
- 📱 **Mobile-Friendly**: Responsive design for all devices
- 🎨 **Visual Feedback**: Color-coded results and progress indicator
- 📈 **History Tracking**: Optional local storage of previous calculations

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6+)
- Chart.js (for visualization - optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ArunaMaddu/bmi-calculator.git
Open index.html in your browser:

bash
open index.html  # Or just double-click the file
How to Use
Enter your height (in cm or feet/inches)

Enter your weight (in kg or lbs)

Select your unit system (Metric/Imperial)

Click "Calculate BMI"

View your BMI result and category

Customization
Change Color Scheme
Modify in css/style.css:

css
:root {
  --underweight: #3498db;   /* Blue */
  --normal: #2ecc71;        /* Green */
  --overweight: #f39c12;    /* Orange */
  --obese: #e74c3c;         /* Red */
}
Adjust BMI Categories
Edit in js/script.js:

javascript
const bmiCategories = [
  { name: "Underweight", max: 18.5, color: "var(--underweight)" },
  { name: "Normal", max: 24.9, color: "var(--normal)" },
  { name: "Overweight", max: 29.9, color: "var(--overweight)" },
  { name: "Obese", max: Infinity, color: "var(--obese)" }
];
Project Structure
bmi-calculator/
├── index.html          # Main application page
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Media queries
├── js/
│   ├── script.js       # Main calculation logic
│   └── chart.js        # Visualization (optional)
├── assets/             # Images/icons
│   ├── icons/          # SVG icons
│   └── preview.png     # Screenshot
└── README.md
Live Demo
View Live Demo

Future Enhancements
Add weight trend tracking

Implement user profiles

Add BMI chart over time

Include ideal weight range calculation

Contributing
Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/NewFeature)

Commit your changes (git commit -m 'Add NewFeature')

Push to the branch (git push origin feature/NewFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Disclaimer
This BMI calculator is for informational purposes only. Consult a healthcare professional for medical advice.

Contact
Your Name - @ArunaMaddu - madduaruna134@example.com

Project Link: https://arunamaddu.github.io/BMI-Calculator/

## 🌟 Show Your Support

If you like this project, feel free to ⭐ star it and share it with others!


 
👨‍💻 Created by ArunaMaddu

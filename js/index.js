const questions = [
   
    { 
        question: "In The Impact-RSV study, SYNAGIS significantly reduced RSV hospitalisations …….% lower vs placebo in high-risk infants", 
        answer: [55],
        min1: 0,
        // min2: 0,
        max1: 100,
        // max2: 120,
        image: "./images/q1.png",
        // image_que:"./images/image1.png",
        // label1: "50% improvement",
        // label2: "100% improvement",

        type: "circles",
        color1: "#F08886",  
        // color2: "#49A942",
        reference:["References: 1. Synagis® (palivizumab). Summary of Product Characteristics. 2. The IMpact-RSV Study Group. 1998;102(3):531-537."
        ]
       
        
    },
    { 
        question: "In The Impact-RSV study, monthly immunoprophylaxis with SYNAGIS for a total of 5 doses successfully reduced the length of hospital stay vs placebo to…", 
        answer: [36.4],
        min1: 0,
        max1: 100,
        image_que:"./images/Frame1.svg",
        image: "./images/q2.png",
        type: "circles",
        color1: "#F08886",  
        reference:["References: 1. The IMpact-RSV Study Group. 1998;102(3):531-537. 2. Synagis® (palivizumab). Summary of Product Characteristics."
            
        ]
        
    },
    { 
        question: "In The Impact-RSV study, monthly immunoprophylaxis with SYNAGIS for a total of 5 doses successfully reduced days on increased supplemental oxygen vs placebo to…", 
        answer: [33.3],
        min1: 0,
        max1: 100,
        // min2: 0,
        // max2: 10,
        image_que:"./images/Frame1.svg",
        image: "./images/q3.png",
        // label1: "Complete skin clearance (PASI 100)",
        // label2: "Almost complete skin clearance (PASI 90)",
        type: "circles",
        color1: "#F08886",  
        // color2: "#49A942",
        reference:["References: 1. The IMpact-RSV Study Group. 1998;102(3):531-537. 2. Synagis® (palivizumab). Summary of Product Characteristics."
            
        ]
    },
    { 
        question: "Prophylaxis with Synagis® (Palivizumab) had a Proven Protection with ….X lower rate of hospitalization due to bronchiolitis compared to subjects who did not receive prophylaxis.", 
        answer: [2],
        min1: 1,
        max1: 10,
        image_que:"./images/Frame2.svg",
        // min2: 0,
        // max2: 100,
        // min3: 0,
        // max3: 100,
        image: "./images/q4.png",
        // label1: "Taltz",
        // label2: "Risankizumab",
        // label3:"Secukinumab",
        type: "circles",
        color1: "#F08886",  
        // color2: "#5370D9",
        // color3: "#B89855",  
        // note:"* durability is defined as having a rapid and lasting response that was measured by % of patients achieving PASI 90 at week 12, and maintained it at week 24 and 52",
        reference:["Reference: 1. Pongiglione G, et al. Pediatr Cardiol. 2016 ;37(8):1581-1589."
        ]

    },
    { 
        question: "Prophylaxis with Synagis® (Palivizumab) had a Proven Protection by lowering RSV Wheezing days by….", 
        answer: [73],
        min1: 0, 
        max1: 100,
        // min2: 0,
        // max2: 10,
        // label1: "Taltz",
        // label2: "Guselkumab",
        // image: "./images/q5.png",
        image_que:"./images/Frame2.svg",
        type: "circles",
        color1: "#F08886",  
        reference:["References: 1. The IMpact-RSV Study Group. 1998;102(3):531-537. 2. Blanken MO, et al. N Engl J Med. 2013;368(19):1791-9."
        ]
    },
    { 
        question: "Monthly immunoprophylaxis with SYNAGIS for a total of 5 doses in the CHD-1 multicentre phase 3 pivotal trial resulted in …..relative reduction of RSV hospitalization in high risk infants", 
        answer: [45],
        min1: 0, 
        max1: 100,
        image: "./images/q6.png",
        image_que:"./images/Frame3.svg",
        type: "circles",
        color1: "#F08886",  
        reference:["References: 1. Synagis® (palivizumab). Summary of Product Characteristics. 2. Feltes TF, et al. J Pediatr. 2003;143(4):532-540."]

    }
    ,
    { 
        question: "In the CHD-1 multicentre phase 3 pivotal trial testing 1214 children <2 years of age with risk factors during eight seasons indicated for palivizumab, 142 children attended consultation due to acute respiratory symptoms, How many child was RSV negative?", 
        answer: [107],
        min1: 1, 
        max1: 142,
        // image: "./images/q6.png",
        image_que:"./images/Frame3.svg",
        type: "persons",
        color1: "#F08886",  
        reference:["Reference: 1. Viguria N, et al. Hum Vaccin Immunother. 2021 Jun 3;17(6):1867-1872."]

    }
    ,
    { 
        question: "AAP recommends considering more than…….consecutive doses of palivizumab for eligible children in regions with high RSV activity through fall and winter.", 
        answer: [5],
        min1: 0, 
        max1: 10,
        // image: "./images/q6.png",
        image_que:"./images/Frame4.svg",
        type: "circles",
        color1: "#F08886",  
        reference:["References: 1. Use of Palivizumab Prophylaxis to Prevent Hospitalization From Severe Respiratory Syncytial Virus Infection During the 2022-2023 RSV Season. American Academy of Pediatrics. 2022. Available at: https://www.aap.org/en/pages/2019-novel-coronavirus-covid-19-infections/clinical-guidance/interim-guidance-for-use-of-palivizumab-prophylaxis-to-prevent-hospitalization/  Accessed February 2025"]

    }
    
    ,
    { 
        question: "What is the RSV Hospitalisation rate per 1000 children in 33-35 wGA infants?", 
        answer: [79.8],
        min1: 0, 
        max1: 100,
        image: "./images/q10.png",
        image_que:"./images/Frame4.svg",
        type: "circles",
        color1: "#F08886",  
        reference:["Reference: 1. Boyce TG, et al. J Pediatr. 2000;137(6):865-70."]

    }
    ,
    { 
        question: "In the SENTINEL 1 study, What is the percentage of infants that required ICU admission?", 
        answer: [42],
        min1: 0, 
        max1: 100,
        // image: "./images/q10.png",
        image_que:"./images/Frame5.svg",
        type: "persons",
        color1: "#F08886",  
        reference:["Reference: 1. Boyce TG, et al. J Pediatr. 2000;137(6):865-70."]

    },
    { 
        question: "In the SENTINEL 1 study, What is the percentage of infants that required invasive mechanical ventilation?", 
        answer: [20],
        min1: 0, 
        max1: 100,
        // image: "./images/q10.png",
        image_que:"./images/Frame5.svg",
        type: "persons",
        color1: "#F08886",  
        reference:["Reference: 1. Anderson EJ, et al. Am J Perinatol. 2017;34(1):51-61."]

    }
    ,
    { 
        question: "In a retrospective descriptive study conducted in KSA measuring the compliance of Synagis in children (<2 years)with CHD for the prevention of severe RSV infection, What was the average compliance rate?", 
        answer: [97],
        min1: 0, 
        max1: 100,
        image: "./images/q13.png",
        image_que:"./images/Frame6.svg",
        type: "circles",
        color1: "#F08886",  
        reference:["†The compliance rate was measured by the total number of doses received divided by the total number of doses required.1","Reference: 1. Mohammed MHA, et al. Ann Saudi Med. 2021;41(1):31-35."]

    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
 
    const superscripts = ["¹,²","¹,²","¹,²","¹","¹,²","¹,²","¹","¹","¹","¹","¹","¹"];

    // Set the question text
    document.getElementById('question').textContent = currentQuestion.question + (superscripts[currentQuestionIndex] || '');

    // Update the references section with clickable links
    const references = document.getElementById('references');
    references.innerHTML = currentQuestion.reference.map(ref => {
        // Regular expression to find URLs in the reference text
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return ref.replace(urlRegex, url => `<a href="${url}" target="_blank" style="color: #fff; text-decoration: underline;">${url}</a>`);
    }).join('<br>');

    // Set up the first slider
    const range1 = document.getElementById('range1');
    range1.min = currentQuestion.min1; 
    range1.max = currentQuestion.max1; 
    range1.value = 0;
    updateLabelColor('label1', currentQuestion.color1);
    updateSliderValue(range1, document.getElementById('sliderValue1'));

    // Set slider labels
    if (currentQuestionIndex === 1 || currentQuestionIndex === 2) {
        document.getElementById('startLabel').textContent = "0 Days";
        document.getElementById('endLabel').textContent = "100 Days";
    }
    else if (currentQuestionIndex === 6 ) {
        document.getElementById('startLabel').textContent = "1 children";
        document.getElementById('endLabel').textContent = "142 children";
    }
    else if (currentQuestion.min1 === 0 && currentQuestion.max1 === 100) {
        document.getElementById('startLabel').textContent = "0%";
        document.getElementById('endLabel').textContent = "100%";
    } else {
        document.getElementById('startLabel').textContent = currentQuestion.min1;
        document.getElementById('endLabel').textContent = currentQuestion.max1;
    }

    document.getElementById('label1').textContent = currentQuestion.label1 || '';
    document.getElementById('title1').textContent = currentQuestion.title1 || '';
    range1.style.background = currentQuestion.color1;

    // Check if there is a second slider
    if (currentQuestion.answer.length > 1) {
        document.getElementById('secondSliderContainer').style.display = 'block';
        const range2 = document.getElementById('range2');
        range2.min = currentQuestion.min2; 
        range2.max = currentQuestion.max2; 
        range2.value = 0;
        updateSliderValue(range2, document.getElementById('sliderValue2'));

        // Set second slider labels
        if (currentQuestion.min2 === 0 && currentQuestion.max2 === 100) {
            document.getElementById('startLabel2').textContent = "0%";
            document.getElementById('endLabel2').textContent = "100%";
        } else {
            document.getElementById('startLabel2').textContent = currentQuestion.min2;
            document.getElementById('endLabel2').textContent = currentQuestion.max2;
        }

        document.getElementById('label2').textContent = currentQuestion.label2 || '';
        range2.style.background = currentQuestion.color2;
    } else {
        document.getElementById('secondSliderContainer').style.display = 'none';
    }

    // Check if there is a third slider
    if (currentQuestion.answer.length > 2) {
        document.getElementById('thirdSliderContainer').style.display = 'block';
        const range3 = document.getElementById('range3');
        range3.min = currentQuestion.min3; 
        range3.max = currentQuestion.max3; 
        range3.value = 0;
        updateSliderValue(range3, document.getElementById('sliderValue3'));

        // Set third slider labels
        if (currentQuestion.min3 === 0 && currentQuestion.max3 === 100) {
            document.getElementById('startLabel3').textContent = "0%";
            document.getElementById('endLabel3').textContent = "100%";
        } else {
            document.getElementById('startLabel3').textContent = currentQuestion.min3;
            document.getElementById('endLabel3').textContent = currentQuestion.max3;
        }

        document.getElementById('label3').textContent = currentQuestion.label3 || '';
        range3.style.background = currentQuestion.color3 || currentQuestion.color2;
    } else {
        document.getElementById('thirdSliderContainer').style.display = 'none';
    }

    // Generate icons based on the type and number of answers
    generateIcons(currentQuestion.type, 'icon-person', '.slider-container', currentQuestion.color1);
    if (currentQuestion.answer.length > 1) {
        generateIcons(currentQuestion.type, 'icon-person2', '#secondSliderContainer', currentQuestion.color2);
    }
    if (currentQuestion.answer.length > 2) {
        generateIcons(currentQuestion.type, 'icon-person3', '#thirdSliderContainer', currentQuestion.color3);
    }

    // Handle notes if available
    if (currentQuestion.note) {
        document.getElementById('note').style.display = 'block';
        document.getElementById('note').textContent = currentQuestion.note;
    } else {
        document.getElementById('note').style.display = 'none';
    }

    // Set question image
    const questionImageContainer = document.getElementById('questionImageContainer');
    const questionImage = document.getElementById('questionImage');
    if (currentQuestion.image_que) {
        questionImage.src = currentQuestion.image_que;
        questionImageContainer.style.display = 'block'; // Show the image
    } else {
        questionImageContainer.style.display = 'none'; // Hide if no image
    }
}

// Add this CSS to your existing styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    #references a {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
        transition: opacity 0.2s;
    }
    
    #references a:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(styleSheet);

function generateIcons(type, iconClass, containerSelector) {
    const container = document.querySelector(containerSelector);
    const existingIcons = container.querySelectorAll(`.${iconClass}`);
    
    existingIcons.forEach(icon => icon.remove());

    const totalIcons = 20;
    for (let i = 0; i < totalIcons; i++) {
        const icon = document.createElement('i');
        icon.className = type === "circles" ? `fa-solid fa-circle ${iconClass}` : `fa-solid fa-person ${iconClass}`; 
        container.appendChild(icon);
    }
}

function updateSliderValue(slider, display) {
    const value = slider.value;
    const min = parseInt(slider.min, 10);
    const max = parseInt(slider.max, 10);
    let unit = "";

    
    if (currentQuestionIndex === 1 ||currentQuestionIndex === 2) {
        unit = " Days";
    }
    else if (currentQuestionIndex === 6) {
        unit = " children";
    }
    else if (min === 0 && max === 100) {
        unit = "%";
    }
    

    display.textContent = `${value}${unit}`;
    const percentage = ((value - min) / (max - min)) * 100;
    display.style.left = `${percentage}%`;
}

document.getElementById('range1').addEventListener('input', function() {
    updateSliderValue(this, document.getElementById('sliderValue1'));
    updatePersonIcons(this.value, 20, questions[currentQuestionIndex].color1);
    updateSliderAccentColor(this, questions[currentQuestionIndex].color1);
});

document.getElementById('range2').addEventListener('input', function() {
    updateSliderValue(this, document.getElementById('sliderValue2'));
    updatePersonIcons2(this.value, 20, questions[currentQuestionIndex].color2);
    updateSliderAccentColor(this, questions[currentQuestionIndex].color2);
});

document.getElementById('range3').addEventListener('input', function() {
    updateSliderValue(this, document.getElementById('sliderValue3'));
    updatePersonIcons3(this.value, 20, questions[currentQuestionIndex].color3);
    updateSliderAccentColor(this, questions[currentQuestionIndex].color3);
});

function updateLabelColor(labelId, color) {
    const label = document.getElementById(labelId);
    if (label) {
        label.style.color = color;
    }
}

function updatePersonIcons(value, totalIcons, color) {
    const min = parseFloat(document.getElementById('range1').min);
    const max = parseFloat(document.getElementById('range1').max);
    const range = max - min;
    
    const iconsPerUnit = range / totalIcons;
    const iconCount = Math.floor((value - min) / iconsPerUnit);
    
    const icons = document.querySelectorAll('.icon-person');
    icons.forEach((icon, index) => {
        if (index < iconCount) {
            icon.classList.add('active');
            icon.style.color = color;
        } else {
            icon.classList.remove('active');
            icon.style.color = "gray";
        }
    });
}

function updatePersonIcons2(value, totalIcons, color) {
    const min = parseFloat(document.getElementById('range2').min);
    const max = parseFloat(document.getElementById('range2').max);
    const range = max - min;
    
    const iconsPerUnit = range / totalIcons;
    const iconCount = Math.floor((value - min) / iconsPerUnit);
    
    const icons = document.querySelectorAll('.icon-person2');
    icons.forEach((icon, index) => {
        if (index < iconCount) {
            icon.classList.add('active');
            icon.style.color = color;
        } else {
            icon.classList.remove('active');
            icon.style.color = "gray";
        }
    });
}

function updatePersonIcons3(value, totalIcons, color) {
    const min = parseFloat(document.getElementById('range3').min);
    const max = parseFloat(document.getElementById('range3').max);
    const range = max - min;
    
    const iconsPerUnit = range / totalIcons;
    const iconCount = Math.floor((value - min) / iconsPerUnit);
    
    const icons = document.querySelectorAll('.icon-person3');
    icons.forEach((icon, index) => {
        if (index < iconCount) {
            icon.classList.add('active');
            icon.style.color = color;
        } else {
            icon.classList.remove('active');
            icon.style.color = "gray";
        }
    });
}

function updateSliderAccentColor(slider, color) {
    slider.style.accentColor = color;
}

document.getElementById('submit').addEventListener('click', function() {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer1 = parseFloat(document.getElementById('range1').value);
    const correctAnswer1 = currentQuestion.answer[0];
    let isCorrect = true;

    // Check first answer validity
    if (currentQuestion.max1 !== 10) {
        isCorrect = Math.abs(userAnswer1 - correctAnswer1) <= 5;
    } else {
        isCorrect = userAnswer1 === correctAnswer1; // Exact match for max 10
    }

    // Function to add appropriate unit based on question index first, then min/max values
    const addUnit = (value, questionIndex, min, max) => {
        if (questionIndex === 1 || questionIndex === 2) {
            return `${value} Days`;
        } else if (questionIndex === 6) {
            return `${value} children`;
        } else if (min === 0 && max === 100) {
            return `${value}%`;
        }
        return `${value}`;
    };

    // Build the correct answer text
    let correctAnswerText = `Correct answer: ${addUnit(correctAnswer1, currentQuestionIndex, currentQuestion.min1, currentQuestion.max1)}`;

    // Check additional answers if they exist
    if (currentQuestion.answer.length > 1) {
        const userAnswer2 = parseFloat(document.getElementById('range2').value);
        const correctAnswer2 = currentQuestion.answer[1];

        if (currentQuestion.max2 !== 10) {
            isCorrect = isCorrect && Math.abs(userAnswer2 - correctAnswer2) <= 5;
        } else {
            isCorrect = isCorrect && userAnswer2 === correctAnswer2;
        }
        correctAnswerText += ` & ${addUnit(correctAnswer2, currentQuestionIndex, currentQuestion.min2, currentQuestion.max2)}`;
    }

    if (currentQuestion.answer.length > 2) {
        const userAnswer3 = parseFloat(document.getElementById('range3').value);
        const correctAnswer3 = currentQuestion.answer[2];

        if (currentQuestion.max3 !== 10) {
            isCorrect = isCorrect && Math.abs(userAnswer3 - correctAnswer3) <= 5;
        } else {
            isCorrect = isCorrect && userAnswer3 === correctAnswer3;
        }
        correctAnswerText += ` & ${addUnit(correctAnswer3, currentQuestionIndex, currentQuestion.min3, currentQuestion.max3)}`;
    }

    document.getElementById('modal-text').innerHTML = isCorrect
        ? '<span style="color: #49A942; font-weight:bold">Correct answer!</span> '
        : '<span style="color: red; font-weight:bold">Oh!</span><br><br>' +
          `<span style="color: green;">${correctAnswerText}</span>`;

    document.getElementById('modal-img').src = isCorrect ? "./images/like.png" : "./images/sad.png";

    if (currentQuestion.image) {
        document.getElementById("modal-img2").src = currentQuestion.image;
        document.getElementById("modal-img2").style.display = "block";
    } else {
        document.getElementById("modal-img2").style.display = "none";
    }

    document.getElementById('modal').style.display = 'block';
});

document.getElementById("modal-btn").addEventListener("click", function() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Move to the next question
        loadQuestion();
    } else {
        window.location.href = "restart.html"; 
    }
    document.getElementById('modal').style.display = 'none'; 
});

loadQuestion();
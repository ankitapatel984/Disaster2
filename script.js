// Language translations
const translations = {
    en: {
        'page-title': 'SafeGuard - Disaster Prediction & Safe Shelter Navigation',
        'logo': '🛡️ SafeGuard',
        'nav-home': 'Home',
        'nav-predictions': 'Predictions',
        'nav-safe-routes': 'Safe Routes',
        'nav-alerts': 'Alerts',
        'nav-game': 'Preparedness Quiz',
        'nav-donation': 'Donate',
        'nav-kit': 'Emergency Kit',
        'hero-title': 'Stay Safe, Stay Prepared',
        'hero-description': 'Get real-time disaster predictions, find safe evacuation routes, and prepare for emergencies with our comprehensive disaster management platform.',
        'hero-btn-predictions': 'Check Predictions',
        'hero-btn-routes': 'Find Safe Route',
        'predictions-title': 'Disaster Predictions',
        'search-placeholder': 'Enter city or location...',
        'search-btn': 'Search',
        'routes-title': 'Safe Routes & Shelters',
        'map-placeholder': '🗺️ Interactive Map Placeholder',
        'map-description': 'This would show real-time safe routes and shelter locations',
        'find-route-btn': 'Get Safe Route to Nearest Shelter',
        'alerts-title': 'Emergency Alerts',
        'quiz-title': 'Disaster Preparedness Quiz',
        'quiz-q1': 'What should you do first when you hear a tornado warning?',
        'quiz-q1-a': 'Go to the basement or lowest floor',
        'quiz-q1-b': 'Look outside to see the tornado',
        'quiz-q1-c': 'Drive away from the area',
        'quiz-q1-d': 'Open all windows',
        'quiz-score': 'Score:',
        'quiz-next': 'Next Question',
        'quiz-restart': 'Restart Quiz',
        'donation-title': 'Support Disaster Relief',
        'donation-subtitle': 'Help Communities in Need',
        'donation-description': 'Your donation helps provide emergency supplies, shelter, and support to communities affected by natural disasters.',
        'amount-25': '$25',
        'amount-50': '$50',
        'amount-100': '$100',
        'amount-250': '$250',
        'custom-amount-placeholder': 'Custom amount',
        'name-placeholder': 'Full Name',
        'email-placeholder': 'Email Address',
        'donate-btn': 'Donate Now',
        'kit-title': 'Emergency Preparedness Kit',
        'kit-basic': 'Basic Supplies',
        'kit-food': 'Food & Water',
        'kit-medical': 'Medical Supplies',
        'kit-progress': 'Progress:',
        'footer-about': 'About SafeGuard',
        'footer-description': 'Protecting communities through advanced disaster prediction and emergency preparedness.',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2025 SafeGuard. All rights reserved.'
    },
    hi: {
        'page-title': 'सेफगार्ड - आपदा पूर्वानुमान और सुरक्षित आश्रय नेविगेशन',
        'logo': '🛡️ सेफगार्ड',
        'nav-home': 'होम',
        'nav-predictions': 'पूर्वानुमान',
        'nav-safe-routes': 'सुरक्षित रास्ते',
        'nav-alerts': 'अलर्ट',
        'nav-game': 'तैयारी प्रश्नोत्तरी',
        'nav-donation': 'दान करें',
        'nav-kit': 'आपातकालीन किट',
        'hero-title': 'सुरक्षित रहें, तैयार रहें',
        'hero-description': 'हमारे व्यापक आपदा प्रबंधन प्लेटफॉर्म के साथ वास्तविक समय आपदा पूर्वानुमान प्राप्त करें, सुरक्षित निकासी मार्ग खोजें, और आपातकाल के लिए तैयार रहें।',
        'hero-btn-predictions': 'पूर्वानुमान जांचें',
        'hero-btn-routes': 'सुरक्षित रास्ता खोजें',
        'predictions-title': 'आपदा पूर्वानुमान',
        'search-placeholder': 'शहर या स्थान दर्ज करें...',
        'search-btn': 'खोजें',
        'routes-title': 'सुरक्षित रास्ते और आश्रय',
        'map-placeholder': '🗺️ इंटरैक्टिव मैप प्लेसहोल्डर',
        'map-description': 'यह वास्तविक समय सुरक्षित रास्ते और आश्रय स्थान दिखाएगा',
        'find-route-btn': 'निकटतम आश्रय का सुरक्षित रास्ता प्राप्त करें',
        'alerts-title': 'आपातकालीन अलर्ट',
        'quiz-title': 'आपदा तैयारी प्रश्नोत्तरी',
        'quiz-q1': 'जब आप तूफान की चेतावनी सुनते हैं तो पहले क्या करना चाहिए?',
        'quiz-q1-a': 'तहखाने या सबसे निचली मंजिल पर जाएं',
        'quiz-q1-b': 'तूफान देखने के लिए बाहर देखें',
        'quiz-q1-c': 'क्षेत्र से दूर ड्राइव करें',
        'quiz-q1-d': 'सभी खिड़कियां खोलें',
        'quiz-score': 'स्कोर:',
        'quiz-next': 'अगला प्रश्न',
        'quiz-restart': 'प्रश्नोत्तरी पुनः आरंभ करें',
        'donation-title': 'आपदा राहत का समर्थन करें',
        'donation-subtitle': 'जरूरतमंद समुदायों की मदद करें',
        'donation-description': 'आपका दान प्राकृतिक आपदाओं से प्रभावित समुदायों को आपातकालीन आपूर्ति, आश्रय और सहायता प्रदान करने में मदद करता है।',
        'amount-25': '₹2000',
        'amount-50': '₹4000',
        'amount-100': '₹8000',
        'amount-250': '₹20000',
        'custom-amount-placeholder': 'कस्टम राशि',
        'name-placeholder': 'पूरा नाम',
        'email-placeholder': 'ईमेल पता',
        'donate-btn': 'अभी दान करें',
        'kit-title': 'आपातकालीन तैयारी किट',
        'kit-basic': 'बुनियादी आपूर्ति',
        'kit-food': 'भोजन और पानी',
        'kit-medical': 'चिकित्सा आपूर्ति',
        'kit-progress': 'प्रगति:',
        'footer-about': 'सेफगार्ड के बारे में',
        'footer-description': 'उन्नत आपदा पूर्वानुमान और आपातकालीन तैयारी के माध्यम से समुदायों की सुरक्षा।',
        'footer-links': 'त्वरित लिंक',
        'footer-contact': 'संपर्क',
        'footer-copyright': '© 2025 सेफगार्ड। सभी अधिकार सुरक्षित।'
    },
    es: {
        'page-title': 'SafeGuard - Predicción de Desastres y Navegación de Refugios Seguros',
        'logo': '🛡️ SafeGuard',
        'nav-home': 'Inicio',
        'nav-predictions': 'Predicciones',
        'nav-safe-routes': 'Rutas Seguras',
        'nav-alerts': 'Alertas',
        'nav-game': 'Quiz de Preparación',
        'nav-donation': 'Donar',
        'nav-kit': 'Kit de Emergencia',
        'hero-title': 'Mantente Seguro, Mantente Preparado',
        'hero-description': 'Obtén predicciones de desastres en tiempo real, encuentra rutas de evacuación seguras y prepárate para emergencias con nuestra plataforma integral de gestión de desastres.',
        'hero-btn-predictions': 'Ver Predicciones',
        'hero-btn-routes': 'Encontrar Ruta Segura',
        'predictions-title': 'Predicciones de Desastres',
        'search-placeholder': 'Ingresa ciudad o ubicación...',
        'search-btn': 'Buscar',
        'routes-title': 'Rutas Seguras y Refugios',
        'map-placeholder': '🗺️ Marcador de Mapa Interactivo',
        'map-description': 'Esto mostraría rutas seguras en tiempo real y ubicaciones de refugios',
        'find-route-btn': 'Obtener Ruta Segura al Refugio Más Cercano',
        'alerts-title': 'Alertas de Emergencia',
        'quiz-title': 'Quiz de Preparación para Desastres',
        'quiz-q1': '¿Qué debes hacer primero cuando escuches una advertencia de tornado?',
        'quiz-q1-a': 'Ir al sótano o piso más bajo',
        'quiz-q1-b': 'Mirar afuera para ver el tornado',
        'quiz-q1-c': 'Conducir lejos del área',
        'quiz-q1-d': 'Abrir todas las ventanas',
        'quiz-score': 'Puntuación:',
        'quiz-next': 'Siguiente Pregunta',
        'quiz-restart': 'Reiniciar Quiz',
        'donation-title': 'Apoyar el Alivio de Desastres',
        'donation-subtitle': 'Ayudar a Comunidades Necesitadas',
        'donation-description': 'Tu donación ayuda a proporcionar suministros de emergencia, refugio y apoyo a comunidades afectadas por desastres naturales.',
        'amount-25': '$25',
        'amount-50': '$50',
        'amount-100': '$100',
        'amount-250': '$250',
        'custom-amount-placeholder': 'Cantidad personalizada',
        'name-placeholder': 'Nombre Completo',
        'email-placeholder': 'Dirección de Correo',
        'donate-btn': 'Donar Ahora',
        'kit-title': 'Kit de Preparación de Emergencia',
        'kit-basic': 'Suministros Básicos',
        'kit-food': 'Comida y Agua',
        'kit-medical': 'Suministros Médicos',
        'kit-progress': 'Progreso:',
        'footer-about': 'Acerca de SafeGuard',
        'footer-description': 'Protegiendo comunidades a través de predicción avanzada de desastres y preparación de emergencias.',
        'footer-links': 'Enlaces Rápidos',
        'footer-contact': 'Contacto',
        'footer-copyright': '© 2025 SafeGuard. Todos los derechos reservados.'
    }
};

// Current language
let currentLanguage = 'en';

// Quiz data
const quizData = [
    {
        question: 'What should you do first when you hear a tornado warning?',
        options: [
            'Go to the basement or lowest floor',
            'Look outside to see the tornado',
            'Drive away from the area',
            'Open all windows'
        ],
        correct: 0
    },
    {
        question: 'How much water should you store per person per day for emergencies?',
        options: [
            '1 liter',
            '2 liters',
            '4 liters',
            '6 liters'
        ],
        correct: 2
    },
    {
        question: 'What is the safest place to be during an earthquake?',
        options: [
            'In a doorway',
            'Under a heavy table',
            'Near a window',
            'On the top floor'
        ],
        correct: 1
    },
    {
        question: 'How often should you test your smoke detectors?',
        options: [
            'Once a year',
            'Every 6 months',
            'Every month',
            'Never'
        ],
        correct: 2
    },
    {
        question: 'What should you do if caught in a flood while driving?',
        options: [
            'Drive faster through the water',
            'Turn around and find another route',
            'Stop and wait in the car',
            'Open the windows'
        ],
        correct: 1
    }
];

// Emergency kit items
const kitItems = {
    'basic-supplies': [
        'Flashlight with extra batteries',
        'Battery-powered or hand crank radio',
        'First aid kit',
        'Whistle for signaling help',
        'Dust masks and plastic sheeting',
        'Moist towelettes and garbage bags',
        'Wrench or pliers to turn off utilities',
        'Manual can opener',
        'Local maps',
        'Cell phone with chargers'
    ],
    'food-water': [
        '3-day supply of water (4 liters per person per day)',
        '3-day supply of non-perishable food',
        'Canned goods',
        'Energy bars',
        'Dried fruits and nuts'
    ],
    'medical-supplies': [
        'Prescription medications',
        'Medical supplies and equipment',
        'Personal hygiene items',
        'Copies of important documents',
        'Emergency contact information'
    ]
};

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = -1;

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Initialize page-specific content
        if (pageId === 'predictions') {
            initPredictions();
        } else if (pageId === 'alerts') {
            initAlerts();
        } else if (pageId === 'prepare-kit') {
            initKitChecklist();
        }
    }
    
    // Close mobile menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Initialize default content
    initPredictions();
    initAlerts();
    initKitChecklist();
});

// Language switching
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageText();
}

function updatePageText() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Predictions functionality
function initPredictions() {
    const grid = document.getElementById('predictions-grid');
    grid.innerHTML = `
        <div class="prediction-card">
            <h3>New York, NY</h3>
            <div class="risk-level risk-medium">Flood Risk: Medium</div>
            <p>Heavy rainfall expected in the next 48 hours. Monitor local conditions.</p>
            <small>Last updated: 2 hours ago</small>
        </div>
        <div class="prediction-card">
            <h3>Los Angeles, CA</h3>
            <div class="risk-level risk-high">Wildfire Risk: High</div>
            <p>Dry conditions and strong winds increase fire danger. Stay alert.</p>
            <small>Last updated: 30 minutes ago</small>
        </div>
        <div class="prediction-card">
            <h3>Miami, FL</h3>
            <div class="risk-level risk-low">Hurricane Risk: Low</div>
            <p>Current conditions are stable. Continue monitoring weather updates.</p>
            <small>Last updated: 1 hour ago</small>
        </div>
    `;
}

function searchPredictions() {
    const searchInput = document.getElementById('city-search');
    const query = searchInput.value.trim();
    
    if (!query) {
        alert('Please enter a city or location to search.');
        return;
    }
    
    // Simulate search with loading
    const grid = document.getElementById('predictions-grid');
    grid.innerHTML = '<div class="loading"></div>';
    
    setTimeout(() => {
        grid.innerHTML = `
            <div class="prediction-card">
                <h3>${query}</h3>
                <div class="risk-level risk-medium">Earthquake Risk: Medium</div>
                <p>Seismic activity detected in the region. Recommended to review emergency plans.</p>
                <small>Last updated: Just now</small>
            </div>
            <div class="prediction-card">
                <h3>${query} - Weather</h3>
                <div class="risk-level risk-low">Storm Risk: Low</div>
                <p>Weather conditions are currently stable with no immediate threats.</p>
                <small>Last updated: Just now</small>
            </div>
        `;
    }, 1000);
}

// Safe routes functionality
function findSafeRoute() {
    const resultDiv = document.getElementById('route-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h4>🛡️ Safe Route Found</h4>
        <p><strong>Nearest Shelter:</strong> Community Emergency Center</p>
        <p><strong>Distance:</strong> 2.3 miles</p>
        <p><strong>Estimated Time:</strong> 8 minutes by car, 25 minutes walking</p>
        <p><strong>Route:</strong> Take Main St north → Turn right on Oak Ave → Shelter will be on your left</p>
        <p><strong>Shelter Capacity:</strong> Available (150/300)</p>
        <div style="margin-top: 1rem;">
            <button class="btn btn-primary" onclick="alert('Navigation started! Follow the highlighted route.')">Start Navigation</button>
        </div>
    `;
}

// Alerts functionality
function initAlerts() {
    const container = document.getElementById('alerts-container');
    container.innerHTML = `
        <div class="alert-item alert-urgent">
            <div class="alert-header">
                <span class="alert-title">🚨 Flash Flood Warning</span>
                <span class="alert-time">2 hours ago</span>
            </div>
            <p>Flash flooding possible in low-lying areas. Avoid driving through flooded roads.</p>
            <p><strong>Location:</strong> Downtown area and surrounding valleys</p>
        </div>
        <div class="alert-item alert-moderate">
            <div class="alert-header">
                <span class="alert-title">⚠️ High Wind Advisory</span>
                <span class="alert-time">4 hours ago</span>
            </div>
            <p>Winds up to 45 mph expected. Secure outdoor objects and avoid driving high-profile vehicles.</p>
            <p><strong>Location:</strong> Citywide</p>
        </div>
        <div class="alert-item alert-info">
            <div class="alert-header">
                <span class="alert-title">ℹ️ Emergency Drill Scheduled</span>
                <span class="alert-time">1 day ago</span>
            </div>
            <p>Monthly emergency siren test scheduled for tomorrow at 12:00 PM.</p>
            <p><strong>Location:</strong> All areas</p>
        </div>
        <div class="alert-item alert-info">
            <div class="alert-header">
                <span class="alert-title">📢 Shelter Update</span>
                <span class="alert-time">2 days ago</span>
            </div>
            <p>New emergency shelter opened at Community Center. Capacity: 200 people.</p>
            <p><strong>Location:</strong> 123 Community Drive</p>
        </div>
    `;
}

// Quiz functionality
function selectAnswer(answerIndex) {
    if (selectedAnswer !== -1) return; // Already answered
    
    selectedAnswer = answerIndex;
    const options = document.querySelectorAll('.quiz-option');
    const currentQuestion = quizData[currentQuestionIndex];
    
    options.forEach((option, index) => {
        if (index === currentQuestion.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && index !== currentQuestion.correct) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });
    
    if (answerIndex === currentQuestion.correct) {
        score++;
    }
    
    document.getElementById('score').textContent = score;
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    selectedAnswer = -1;
    
    if (currentQuestionIndex >= quizData.length) {
        // Quiz finished
        showQuizResults();
        return;
    }
    
    const question = quizData[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove('correct', 'incorrect');
        option.disabled = false;
    });
    
    document.getElementById('next-btn').style.display = 'none';
}

function showQuizResults() {
    const quizContainer = document.querySelector('.quiz-question');
    const percentage = Math.round((score / quizData.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = '🎉 Excellent! You\'re well prepared for disasters.';
    } else if (percentage >= 60) {
        message = '👍 Good job! Consider reviewing emergency procedures.';
    } else {
        message = '📚 Keep learning! Emergency preparedness is important.';
    }
    
    quizContainer.innerHTML = `
        <div class="text-center">
            <h3>Quiz Complete!</h3>
            <p class="mb-2">${message}</p>
            <p class="mb-3">Final Score: ${score}/${quizData.length} (${percentage}%)</p>
        </div>
    `;
    
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = -1;
    
    const question = quizData[0];
    document.getElementById('question-text').textContent = question.question;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove('correct', 'incorrect');
        option.disabled = false;
    });
    
    document.getElementById('score').textContent = '0';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';
}

// Donation functionality
function selectAmount(amount) {
    // Remove previous selections
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Select new amount
    event.target.classList.add('selected');
    document.getElementById('custom-amount').value = amount;
}

// Handle donation form
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your donation! This would normally process the payment.');
        });
    }
});

// Kit checklist functionality
function initKitChecklist() {
    Object.keys(kitItems).forEach(categoryId => {
        const container = document.getElementById(categoryId);
        if (container) {
            container.innerHTML = kitItems[categoryId].map((item, index) => `
                <div class="checklist-item">
                    <input type="checkbox" id="${categoryId}-${index}" onchange="updateProgress()">
                    <label for="${categoryId}-${index}">${item}</label>
                </div>
            `).join('');
        }
    });
    updateProgress();
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    
    const total = checkboxes.length;
    const checked = checkedBoxes.length;
    const percentage = total > 0 ? (checked / total) * 100 : 0;
    
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');
    
    if (progressText) {
        progressText.textContent = `${checked}/${total}`;
    }
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');
    
    // Initialize language
    updatePageText();
});
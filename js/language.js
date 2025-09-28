// 90-Day English Mastery Program - Working Version
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for Day 1 - Morning Session (for testing)
    const learningData = {
        1: {
            morning: {
                vocabulary: [
                    { word: "Hello", phonetic: "/həˈloʊ/", pos: "interjection", meaning: "မင်္ဂလာပါ", explanation: "A greeting used when meeting someone", example: "Hello, how are you today?", exampleBurmese: "မင်္ဂလာပါ၊ ဒီနေ့ ဘယ်လိုနေလဲ?" },
                    { word: "Goodbye", phonetic: "/ɡʊdˈbaɪ/", pos: "interjection", meaning: "သွားတော့မယ်", explanation: "A farewell used when leaving", example: "Goodbye, see you tomorrow!", exampleBurmese: "သွားတော့မယ်၊ မနက်ဖြန် တွေ့မယ်!" },
                    { word: "Thank you", phonetic: "/ˈθæŋk juː/", pos: "interjection", meaning: "ကျေးဇူးတင်ပါတယ်", explanation: "Expression of gratitude", example: "Thank you for your help.", exampleBurmese: "ကျေးဇူးတင်ပါတယ်။" },
                    { word: "Please", phonetic: "/pliːz/", pos: "interjection", meaning: "ကျေးဇူးပြု၍", explanation: "Polite expression for requests", example: "Please come in.", exampleBurmese: "ကျေးဇူးပြု၍ ဝင်ပါ။" },
                    { word: "Yes", phonetic: "/jes/", pos: "adverb", meaning: "ဟုတ်ကဲ့", explanation: "Affirmative response", example: "Yes, I understand.", exampleBurmese: "ဟုတ်ကဲ့၊ နားလည်ပါတယ်။" },
                    { word: "No", phonetic: "/noʊ/", pos: "adverb", meaning: "မဟုတ်ပါ", explanation: "Negative response", example: "No, thank you.", exampleBurmese: "မဟုတ်ပါ၊ ကျေးဇူးတင်ပါတယ်။" },
                    { word: "Water", phonetic: "/ˈwɔːtər/", pos: "noun", meaning: "ရေ", explanation: "Clear liquid essential for life", example: "I drink water every day.", exampleBurmese: "ကျွန်တော် နေ့တိုင်း ရေသောက်တယ်။" },
                    { word: "Food", phonetic: "/fuːd/", pos: "noun", meaning: "အစားအစာ", explanation: "What people and animals eat", example: "The food is delicious.", exampleBurmese: "အစားအစာက အင်မတန်မွှေးပါတယ်။" },
                    { word: "House", phonetic: "/haʊs/", pos: "noun", meaning: "အိမ်", explanation: "Building where people live", example: "My house is near the school.", exampleBurmese: "ကျွန်တော့်အိမ်က ကျောင်းနားမှာပါ။" },
                    { word: "Family", phonetic: "/ˈfæməli/", pos: "noun", meaning: "မိသားစု", explanation: "Group of related people", example: "I love my family.", exampleBurmese: "ကျွန်တော် ကျွန်တော့်မိသားစုကို ချစ်တယ်။" }
                ],
                phrasalVerbs: [
                    { word: "Look up", phonetic: "/lʊk ʌp/", meaning: "ရှာဖွေသည်", explanation: "To search for information", example: "I need to look up that word in the dictionary.", exampleBurmese: "ကျွန်တော် အဲဒီစကားလုံးကို အဘိဓာန်ထဲမှာ ရှာဖွေဖို့လိုတယ်။" },
                    { word: "Give up", phonetic: "/ɡɪv ʌp/", meaning: "စွန့်လွှတ်သည်", explanation: "To stop trying", example: "Don't give up on your dreams.", exampleBurmese: "မင်းရဲ့ အိပ်မက်တွေကို မစွန့်လွှတ်နဲ့။" },
                    { word: "Take off", phonetic: "/teɪk ɒf/", meaning: "ပျံသန်းသည်/ချွတ်သည်", explanation: "To leave the ground (plane) or remove", example: "The plane will take off in 10 minutes.", exampleBurmese: "လေယာဉ်က ၁၀ မိနစ်အတွင်း ပျံသန်းမယ်။" }
                ],
                idioms: [
                    { word: "Break a leg", phonetic: "/breɪk ə leɡ/", meaning: "ကံကောင်းပါစေ", explanation: "Good luck (especially for performers)", example: "Break a leg in your performance tonight!", exampleBurmese: "ဒီည မင်းရဲ့ဖျော်ဖြေပွဲမှာ ကံကောင်းပါစေကွာ!" },
                    { word: "Piece of cake", phonetic: "/piːs əv keɪk/", meaning: "အလွန်လွယ်ကူသည်", explanation: "Very easy", example: "The exam was a piece of cake.", exampleBurmese: "စာမေးပွဲက အရမ်းလွယ်တယ်။" },
                    { word: "Hit the books", phonetic: "/hɪt ðə bʊks/", meaning: "စာကြည့်သည်", explanation: "To study hard", example: "I need to hit the books for my final exams.", exampleBurmese: "ကျွန်တော် နောက်ဆုံးစာမေးပွဲအတွက် စာကြည့်ဖို့လိုတယ်။" }
                ]
            }
        }
    };

    // DOM Elements
    const sessionBtns = document.querySelectorAll('.session-btn');
    const learningSession = document.getElementById('learningSession');
    const backToDashboard = document.getElementById('backToDashboard');
    const sessionTitle = document.getElementById('sessionTitle');
    const sessionProgress = document.getElementById('sessionProgress');
    const sessionTimer = document.getElementById('sessionTimer');
    
    // Flashcard elements
    const mainFlashcard = document.getElementById('mainFlashcard');
    const flipBtn = document.getElementById('flipBtn');
    const flipBackBtn = document.getElementById('flipBackBtn');
    
    // Control buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pronounceBtn = document.getElementById('pronounceBtn');
    const knowBtn = document.getElementById('knowBtn');
    const practiceBtn = document.getElementById('practiceBtn');
    
    // Navigation dots
    const vocabDots = document.getElementById('vocabDots');
    const phrasalDots = document.getElementById('phrasalDots');
    const idiomDots = document.getElementById('idiomDots');
    const phrasalCount = document.getElementById('phrasalCount');
    const idiomCount = document.getElementById('idiomCount');

    // State variables
    let currentDay = 1;
    let currentSession = '';
    let currentCardIndex = 0;
    let currentCards = [];
    let userProgress = JSON.parse(localStorage.getItem('englishProgress')) || {};
    let timerInterval = null;

    // Initialize the app
    function init() {
        console.log('Initializing Language Learning App...');
        setupEventListeners();
        loadUserProgress();
        updateDashboard();
    }

    // Set up event listeners
    function setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Session buttons
        sessionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const session = e.target.dataset.session;
                console.log('Starting session:', session);
                startLearningSession(session);
            });
        });

        // Back to dashboard
        backToDashboard.addEventListener('click', showDashboard);

        // Flashcard controls
        flipBtn.addEventListener('click', flipCard);
        flipBackBtn.addEventListener('click', flipCard);
        prevBtn.addEventListener('click', showPreviousCard);
        nextBtn.addEventListener('click', showNextCard);
        pronounceBtn.addEventListener('click', pronounceWord);
        knowBtn.addEventListener('click', () => markCardAsKnown(true));
        practiceBtn.addEventListener('click', () => markCardAsKnown(false));

        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);
        
        console.log('Event listeners setup completed');
    }

    // Start a learning session
    function startLearningSession(session) {
        currentSession = session;
        currentCardIndex = 0;
        
        console.log('Starting session:', session, 'for day:', currentDay);
        
        // Get session data
        const sessionData = learningData[currentDay]?.[session];
        if (!sessionData) {
            alert('Session data not available yet!');
            return;
        }

        // Combine all cards for the session
        currentCards = [
            ...sessionData.vocabulary.map(card => ({ ...card, type: 'vocabulary' })),
            ...sessionData.phrasalVerbs.map(card => ({ ...card, type: 'phrasal' })),
            ...sessionData.idioms.map(card => ({ ...card, type: 'idiom' }))
        ];

        console.log('Total cards for session:', currentCards.length);

        // Update UI
        sessionTitle.textContent = `${capitalizeFirst(session)} Session - Day ${currentDay}`;
        updateCardCounts(sessionData);
        createNavigationDots(sessionData);
        showLearningSession();
        showCurrentCard();
        startSessionTimer();
    }

    // Show learning session view
    function showLearningSession() {
        document.querySelector('.program-overview').style.display = 'none';
        document.querySelector('.progress-dashboard').style.display = 'none';
        learningSession.style.display = 'block';
    }

    // Show dashboard view
    function showDashboard() {
        document.querySelector('.program-overview').style.display = 'block';
        document.querySelector('.progress-dashboard').style.display = 'block';
        learningSession.style.display = 'none';
        stopSessionTimer();
        updateDashboard();
    }

    // Show current card
    function showCurrentCard() {
        if (currentCards.length === 0) {
            console.error('No cards available');
            return;
        }

        const card = currentCards[currentCardIndex];
        const totalCards = currentCards.length;

        console.log('Showing card:', currentCardIndex, card);

        // Update card content
        updateCardContent(card);
        
        // Update progress
        sessionProgress.textContent = `${currentCardIndex + 1}/${totalCards} items`;
        
        // Update navigation dots
        updateNavigationDots();
        
        // Update button states
        updateButtonStates();
    }

    // Update card content
    function updateCardContent(card) {
        if (!card) {
            console.error('No card data available');
            return;
        }

        console.log('Updating card content:', card);

        // Front of card
        document.getElementById('wordMain').textContent = card.word;
        document.getElementById('wordPhonetic').textContent = card.phonetic;
        document.getElementById('wordPOS').textContent = card.pos || '';
        
        // Back of card
        document.getElementById('wordMainBack').textContent = card.word;
        document.getElementById('burmeseMeaning').textContent = card.meaning;
        document.getElementById('wordExplanation').textContent = card.explanation;
        document.getElementById('englishExample').textContent = card.example;
        document.getElementById('burmeseExample').textContent = card.exampleBurmese;
        
        // Update card type
        const cardType = capitalizeFirst(card.type === 'phrasal' ? 'phrasal verb' : card.type);
        document.getElementById('cardType').textContent = cardType;
        document.getElementById('cardTypeBack').textContent = cardType;
        
        // Update card number
        const cardNumber = `${currentCardIndex + 1}/${currentCards.length}`;
        document.getElementById('cardNumber').textContent = cardNumber;
        document.getElementById('cardNumberBack').textContent = cardNumber;
        
        // Reset card to front
        mainFlashcard.classList.remove('flipped');
    }

    // Flip card
    function flipCard() {
        mainFlashcard.classList.toggle('flipped');
    }

    // Show previous card
    function showPreviousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showCurrentCard();
        }
    }

    // Show next card
    function showNextCard() {
        if (currentCardIndex < currentCards.length - 1) {
            currentCardIndex++;
            showCurrentCard();
        } else {
            // Session completed
            completeSession();
        }
    }

    // Mark card as known or needs practice
    function markCardAsKnown(known) {
        const card = currentCards[currentCardIndex];
        const cardId = `${currentDay}-${currentSession}-${card.type}-${currentCardIndex}`;
        
        // Save progress
        if (!userProgress[currentDay]) userProgress[currentDay] = {};
        if (!userProgress[currentDay][currentSession]) userProgress[currentDay][currentSession] = {};
        userProgress[currentDay][currentSession][cardId] = known;
        
        localStorage.setItem('englishProgress', JSON.stringify(userProgress));
        
        // Move to next card
        showNextCard();
    }

    // Pronounce current word
    function pronounceWord() {
        const card = currentCards[currentCardIndex];
        if (card && card.word) {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(card.word);
                utterance.lang = 'en-US';
                utterance.rate = 0.8;
                speechSynthesis.speak(utterance);
            } else {
                alert('Speech synthesis not supported in this browser');
            }
        }
    }

    // Update button states
    function updateButtonStates() {
        prevBtn.disabled = currentCardIndex === 0;
        nextBtn.disabled = currentCardIndex === currentCards.length - 1;
    }

    // Create navigation dots
    function createNavigationDots(sessionData) {
        vocabDots.innerHTML = '';
        phrasalDots.innerHTML = '';
        idiomDots.innerHTML = '';
        
        // Vocabulary dots
        for (let i = 0; i < sessionData.vocabulary.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot vocab';
            dot.dataset.index = i;
            dot.addEventListener('click', () => navigateToCard(i));
            vocabDots.appendChild(dot);
        }
        
        // Phrasal verb dots
        for (let i = 0; i < sessionData.phrasalVerbs.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot phrasal';
            dot.dataset.index = i + sessionData.vocabulary.length;
            dot.addEventListener('click', () => navigateToCard(dot.dataset.index));
            phrasalDots.appendChild(dot);
        }
        
        // Idiom dots
        for (let i = 0; i < sessionData.idioms.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot idiom';
            dot.dataset.index = i + sessionData.vocabulary.length + sessionData.phrasalVerbs.length;
            dot.addEventListener('click', () => navigateToCard(dot.dataset.index));
            idiomDots.appendChild(dot);
        }
    }

    // Update navigation dots
    function updateNavigationDots() {
        const allDots = document.querySelectorAll('.nav-dot');
        allDots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentCardIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Navigate to specific card
    function navigateToCard(index) {
        currentCardIndex = parseInt(index);
        showCurrentCard();
    }

    // Update card counts
    function updateCardCounts(sessionData) {
        phrasalCount.textContent = sessionData.phrasalVerbs.length;
        idiomCount.textContent = sessionData.idioms.length;
    }

    // Session timer
    function startSessionTimer() {
        let timeLeft = 15 * 60; // 15 minutes in seconds
        updateTimerDisplay(timeLeft);
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft);
            
            if (timeLeft <= 0) {
                stopSessionTimer();
                alert('Time\'s up! Session completed.');
                completeSession();
            }
        }, 1000);
    }

    function stopSessionTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        sessionTimer.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Complete session
    function completeSession() {
        // Mark session as completed
        if (!userProgress[currentDay]) userProgress[currentDay] = {};
        userProgress[currentDay][`${currentSession}_completed`] = true;
        localStorage.setItem('englishProgress', JSON.stringify(userProgress));
        
        // Show completion message
        alert(`Congratulations! You've completed the ${currentSession} session for Day ${currentDay}.`);
        showDashboard();
    }

    // Load user progress
    function loadUserProgress() {
        const savedProgress = localStorage.getItem('englishProgress');
        if (savedProgress) {
            userProgress = JSON.parse(savedProgress);
            console.log('Loaded user progress:', userProgress);
        } else {
            console.log('No saved progress found');
        }
    }

    // Update dashboard
    function updateDashboard() {
        updateOverallProgress();
        updateDailyProgress();
        updateStreak();
    }

    // Update overall progress
    function updateOverallProgress() {
        const totalSessions = 90 * 3; // 90 days * 3 sessions per day
        let completedSessions = 0;
        
        for (let day in userProgress) {
            for (let session in userProgress[day]) {
                if (session.endsWith('_completed') && userProgress[day][session]) {
                    completedSessions++;
                }
            }
        }
        
        const progressPercent = Math.round((completedSessions / totalSessions) * 100);
        const progressCircle = document.querySelector('.progress-circle');
        if (progressCircle) {
            progressCircle.style.background = `conic-gradient(var(--primary-color) ${progressPercent}%, #e9ecef ${progressPercent}%)`;
            progressCircle.querySelector('.progress-text').textContent = `${progressPercent}%`;
        }
    }

    // Update daily progress
    function updateDailyProgress() {
        const todayProgress = userProgress[currentDay] || {};
        
        ['morning', 'afternoon', 'evening'].forEach(session => {
            const progressFill = document.querySelector(`.progress-fill[data-session="${session}"]`);
            if (progressFill) {
                if (todayProgress[`${session}_completed`]) {
                    progressFill.style.width = '100%';
                } else {
                    progressFill.style.width = '0%';
                }
            }
        });
    }

    // Update streak
    function updateStreak() {
        // Calculate current streak
        let streak = 0;
        
        for (let day = 1; day <= 90; day++) {
            const dayData = userProgress[day];
            if (dayData && (dayData.morning_completed || dayData.afternoon_completed || dayData.evening_completed)) {
                streak++;
            } else {
                break;
            }
        }
        
        const streakElement = document.querySelector('.streak-count');
        if (streakElement) {
            streakElement.textContent = streak;
        }
    }

    // Keyboard shortcuts
    function handleKeyboardShortcuts(e) {
        if (learningSession.style.display === 'none') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                showPreviousCard();
                break;
            case 'ArrowRight':
            case ' ':
                if (e.key === ' ') e.preventDefault();
                showNextCard();
                break;
            case 'f':
                flipCard();
                break;
            case 'p':
                pronounceWord();
                break;
            case 'k':
                markCardAsKnown(true);
                break;
            case 'l':
                markCardAsKnown(false);
                break;
            case 'Escape':
                showDashboard();
                break;
        }
    }

    // Utility function
    function capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Initialize the application
    init();
});
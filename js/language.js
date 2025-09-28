// 90-Day English Mastery Program - Final Working Version
document.addEventListener('DOMContentLoaded', function() {
    // -------------------------------------------------------------------
    // Flashcard Data Structure (YOU MUST COMPLETE DAYS 2-90 HERE)
    // Day 1 contains 10 vocab + 3 phrasal verbs + 3 idioms per session.
    // Total per day: 30 vocab, 10 phrasal, 10 idioms (50 cards total).
    // -------------------------------------------------------------------
    const learningData = {
        // Day 1
        1: {
            morning: {
                // 10 Vocabulary:
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
                // 3 Phrasal Verbs:
                phrasalVerbs: [
                    { word: "Look up", phonetic: "/lʊk ʌp/", meaning: "ရှာဖွေသည်", explanation: "To search for information", example: "I need to look up that word in the dictionary.", exampleBurmese: "ကျွန်တော် အဲဒီစကားလုံးကို အဘိဓာန်ထဲမှာ ရှာဖွေဖို့လိုတယ်။" },
                    { word: "Give up", phonetic: "/ɡɪv ʌp/", meaning: "စွန့်လွှတ်သည်", explanation: "To stop trying", example: "Don't give up on your dreams.", exampleBurmese: "မင်းရဲ့ အိပ်မက်တွေကို မစွန့်လွှတ်နဲ့။" },
                    { word: "Take off", phonetic: "/teɪk ɒf/", meaning: "ပျံသန်းသည်/ချွတ်သည်", explanation: "To leave the ground (plane) or remove", example: "The plane will take off in 10 minutes.", exampleBurmese: "လေယာဉ်က ၁၀ မိနစ်အတွင်း ပျံသန်းမယ်။" }
                ],
                // 3 Idioms:
                idioms: [
                    { word: "Break a leg", phonetic: "/breɪk ə leɡ/", meaning: "ကံကောင်းပါစေ", explanation: "Good luck (especially for performers)", example: "Break a leg in your performance tonight!", exampleBurmese: "ဒီည မင်းရဲ့ဖျော်ဖြေပွဲမှာ ကံကောင်းပါစေကွာ!" },
                    { word: "Piece of cake", phonetic: "/piːs əv keɪk/", meaning: "အလွန်လွယ်ကူသည်", explanation: "Very easy", example: "The exam was a piece of cake.", exampleBurmese: "စာမေးပွဲက အရမ်းလွယ်တယ်။" },
                    { word: "Hit the books", phonetic: "/hɪt ðə bʊks/", meaning: "စာကြည့်သည်", explanation: "To study hard", example: "I need to hit the books for my final exams.", exampleBurmese: "ကျွန်တော် နောက်ဆုံးစာမေးပွဲအတွက် စာကြည့်ဖို့လိုတယ်။" }
                ]
            },
            afternoon: {
                // 10 Vocabulary, 4 Phrasal Verbs, 4 Idioms - ADD DATA HERE
                vocabulary: [/* ... */],
                phrasalVerbs: [/* ... */],
                idioms: [/* ... */]
            },
            evening: {
                // 10 Vocabulary, 3 Phrasal Verbs, 3 Idioms - ADD DATA HERE
                vocabulary: [/* ... */],
                phrasalVerbs: [/* ... */],
                idioms: [/* ... */]
            }
        },
        // Day 2 (Intermediate Vocab Starts here, if desired)
        // 2: { ... } 
        // Continue for days 2-90...
    };
    
    // Total number of days in the program
    const TOTAL_DAYS = 90;

    // DOM Elements (Selectors are more robust now)
    const sessionBtns = document.querySelectorAll('.session-btn');
    const learningSession = document.getElementById('learningSession');
    const backToDashboard = document.getElementById('backToDashboard');
    const sessionTitle = document.getElementById('sessionTitle');
    const sessionProgress = document.getElementById('sessionProgress');
    const sessionTimer = document.getElementById('sessionTimer');
    const mainFlashcard = document.getElementById('mainFlashcard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pronounceBtn = document.getElementById('pronounceBtn');
    const knowBtn = document.getElementById('knowBtn');
    const practiceBtn = document.getElementById('practiceBtn');
    const vocabDots = document.getElementById('vocabDots');
    const phrasalDots = document.getElementById('phrasalDots');
    const idiomDots = document.getElementById('idiomDots');
    const phrasalCount = document.getElementById('phrasalCount');
    const idiomCount = document.getElementById('idiomCount');

    // State variables
    let currentDay = 1; // Assuming Day 1 for now
    let currentSession = '';
    let currentCardIndex = 0;
    let currentCards = [];
    let userProgress = JSON.parse(localStorage.getItem('englishProgress')) || {};
    let timerInterval = null;

    // --- Core Functions ---

    function init() {
        setupEventListeners();
        loadUserProgress();
        updateDashboard();
        // Check if there is a day parameter in the URL and set currentDay
        const urlParams = new URLSearchParams(window.location.search);
        currentDay = parseInt(urlParams.get('day')) || findLatestActiveDay() || 1;
    }

    function setupEventListeners() {
        sessionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const session = e.target.dataset.session;
                startLearningSession(session);
            });
        });

        backToDashboard.addEventListener('click', showDashboard);
        document.getElementById('flipBtn').addEventListener('click', flipCard);
        document.getElementById('flipBackBtn').addEventListener('click', flipCard);
        prevBtn.addEventListener('click', showPreviousCard);
        nextBtn.addEventListener('click', showNextCard);
        pronounceBtn.addEventListener('click', pronounceWord);
        knowBtn.addEventListener('click', () => markCardAsKnown(true));
        practiceBtn.addEventListener('click', () => markCardAsKnown(false));
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    function startLearningSession(session) {
        currentSession = session;
        currentCardIndex = 0;
        
        const sessionData = learningData[currentDay]?.[session];
        if (!sessionData || (sessionData.vocabulary.length + sessionData.phrasalVerbs.length + sessionData.idioms.length) === 0) {
            alert(`Session data for Day ${currentDay} - ${capitalizeFirst(session)} is incomplete. Please add data.`);
            return;
        }

        currentCards = [
            ...sessionData.vocabulary.map((card, i) => ({ ...card, type: 'vocabulary', card_i: i })),
            ...sessionData.phrasalVerbs.map((card, i) => ({ ...card, type: 'phrasal', card_i: i })),
            ...sessionData.idioms.map((card, i) => ({ ...card, type: 'idiom', card_i: i }))
        ];

        // Filter cards that were marked as 'known' in a previous session (simple SRS)
        const sessionProgress = userProgress[currentDay]?.[currentSession] || {};
        currentCards = currentCards.filter(card => {
             const cardId = `${card.type}-${card.card_i}`;
             return !sessionProgress[cardId];
        });
        
        if (currentCards.length === 0) {
            alert(`You have already completed the ${capitalizeFirst(session)} session for Day ${currentDay}!`);
            return;
        }
        
        sessionTitle.textContent = `${capitalizeFirst(session)} Session - Day ${currentDay}`;
        updateCardCounts(sessionData);
        createNavigationDots(sessionData);
        showLearningSession();
        showCurrentCard();
        startSessionTimer(session);
    }

    function showLearningSession() {
        document.querySelector('.program-overview').style.display = 'none';
        document.querySelector('.progress-dashboard').style.display = 'none';
        learningSession.style.display = 'block';
    }

    function showDashboard() {
        document.querySelector('.program-overview').style.display = 'block';
        document.querySelector('.progress-dashboard').style.display = 'block';
        learningSession.style.display = 'none';
        stopSessionTimer();
        updateDashboard();
    }

    function showCurrentCard() {
        if (currentCards.length === 0) return;

        const card = currentCards[currentCardIndex];
        const totalCards = currentCards.length;

        updateCardContent(card);
        sessionProgress.textContent = `${currentCardIndex + 1}/${totalCards} items`;
        updateNavigationDots();
        updateButtonStates();
    }

    function updateCardContent(card) {
        // Front
        document.getElementById('wordMain').textContent = card.word;
        document.getElementById('wordPhonetic').textContent = card.phonetic;
        document.getElementById('wordPOS').textContent = card.pos || '';
        
        // Back
        document.getElementById('wordMainBack').textContent = card.word;
        document.getElementById('burmeseMeaning').textContent = card.meaning;
        document.getElementById('wordExplanation').textContent = card.explanation;
        document.getElementById('englishExample').textContent = card.example;
        document.getElementById('burmeseExample').textContent = card.exampleBurmese;
        
        // Info
        const cardTypeDisplay = capitalizeFirst(card.type === 'phrasal' ? 'phrasal verb' : card.type);
        document.getElementById('cardType').textContent = cardTypeDisplay;
        document.getElementById('cardTypeBack').textContent = cardTypeDisplay;
        
        const cardNumber = `${currentCardIndex + 1}/${currentCards.length}`;
        document.getElementById('cardNumber').textContent = cardNumber;
        document.getElementById('cardNumberBack').textContent = cardNumber;
        
        mainFlashcard.classList.remove('flipped');
    }

    function flipCard() {
        mainFlashcard.classList.toggle('flipped');
    }

    function showPreviousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            showCurrentCard();
        }
    }

    function showNextCard() {
        if (currentCardIndex < currentCards.length - 1) {
            currentCardIndex++;
            showCurrentCard();
        } else {
            completeSession();
        }
    }

    function markCardAsKnown(known) {
        const card = currentCards[currentCardIndex];
        const cardId = `${card.type}-${card.card_i}`;
        
        if (!userProgress[currentDay]) userProgress[currentDay] = {};
        if (!userProgress[currentDay][currentSession]) userProgress[currentDay][currentSession] = {};
        
        // Mark the actual data index as known
        userProgress[currentDay][currentSession][cardId] = known;
        localStorage.setItem('englishProgress', JSON.stringify(userProgress));
        
        // Visually update the quick nav dot
        const dot = document.querySelector(`.nav-dot[data-original-index="${card.card_i}"][data-type="${card.type}"]`);
        if (dot) {
            dot.classList.add('completed');
        }

        // Remove the card from the current session for this round (simple dismissal)
        currentCards.splice(currentCardIndex, 1);
        
        // Adjust index for next card
        if (currentCardIndex >= currentCards.length) {
            currentCardIndex = currentCards.length - 1;
        }

        if (currentCards.length === 0) {
            completeSession();
        } else {
            showCurrentCard();
        }
    }

    function pronounceWord() {
        const card = currentCards[currentCardIndex];
        if (card && card.word && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(card.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        } else if (!('speechSynthesis' in window)) {
             // Fallback for browsers without speech synthesis
        }
    }

    function updateButtonStates() {
        prevBtn.disabled = currentCardIndex <= 0;
        nextBtn.disabled = currentCardIndex >= currentCards.length - 1;
    }

    function createNavigationDots(sessionData) {
        vocabDots.innerHTML = '';
        phrasalDots.innerHTML = '';
        idiomDots.innerHTML = '';
        
        const sessionProgress = userProgress[currentDay]?.[currentSession] || {};

        // Helper to create and append dots
        const createDots = (dataArray, dotContainer, type, startIndex) => {
            dataArray.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.className = `nav-dot ${type}`;
                dot.dataset.index = i;
                dot.dataset.type = type;
                dot.dataset.originalIndex = i; // Store original index for tracking
                
                // Check if this card was completed in this session before
                const cardId = `${type}-${i}`;
                if (sessionProgress[cardId]) {
                    dot.classList.add('completed');
                }
                
                dot.addEventListener('click', () => {
                    const globalIndex = currentCards.findIndex(c => c.type === type && c.card_i === i);
                    if (globalIndex !== -1) {
                         navigateToCard(globalIndex);
                    }
                });
                dotContainer.appendChild(dot);
            });
        };

        phrasalCount.textContent = sessionData.phrasalVerbs.length;
        idiomCount.textContent = sessionData.idioms.length;

        createDots(sessionData.vocabulary, vocabDots, 'vocab', 0);
        createDots(sessionData.phrasalVerbs, phrasalDots, 'phrasal', sessionData.vocabulary.length);
        createDots(sessionData.idioms, idiomDots, 'idiom', sessionData.vocabulary.length + sessionData.phrasalVerbs.length);
    }

    function updateNavigationDots() {
        document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'));
        
        if (currentCards.length > 0) {
            const currentCard = currentCards[currentCardIndex];
            const activeDot = document.querySelector(`.nav-dot[data-original-index="${currentCard.card_i}"][data-type="${currentCard.type}"]`);
            if (activeDot) {
                activeDot.classList.add('active');
            }
        }
    }

    function navigateToCard(index) {
        currentCardIndex = index;
        showCurrentCard();
    }

    function startSessionTimer(session) {
        const timeLimit = (session === 'morning' || session === 'evening') ? 15 : 20;
        let timeLeft = timeLimit * 60; 
        updateTimerDisplay(timeLeft);
        stopSessionTimer(); // Clear any existing timer
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft);
            
            if (timeLeft <= 0) {
                stopSessionTimer();
                // Optionally call completeSession() or just let the user continue manually
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

    function completeSession() {
        // Mark session as completed only if all cards were successfully viewed/marked
        const sessionData = learningData[currentDay][currentSession];
        const totalOriginalCards = sessionData.vocabulary.length + sessionData.phrasalVerbs.length + sessionData.idioms.length;
        
        // This check is flawed because cards are removed from currentCards.
        // A better check is to see if all original cards are marked as known in localStorage.

        let allCompleted = true;
        for (let i = 0; i < sessionData.vocabulary.length; i++) {
             if (!userProgress[currentDay][currentSession][`vocabulary-${i}`]) allCompleted = false;
        }
        for (let i = 0; i < sessionData.phrasalVerbs.length; i++) {
             if (!userProgress[currentDay][currentSession][`phrasal-${i}`]) allCompleted = false;
        }
        for (let i = 0; i < sessionData.idioms.length; i++) {
             if (!userProgress[currentDay][currentSession][`idiom-${i}`]) allCompleted = false;
        }

        if (allCompleted) {
             userProgress[currentDay][`${currentSession}_completed`] = true;
             localStorage.setItem('englishProgress', JSON.stringify(userProgress));
             alert(`Congratulations! You've completed the ${capitalizeFirst(currentSession)} session for Day ${currentDay}.`);
        } else {
             alert(`Session complete, but you still need to practice some cards.`);
        }
        
        showDashboard();
    }

    // --- Dashboard/Progress Functions ---

    function loadUserProgress() {
        const savedProgress = localStorage.getItem('englishProgress');
        if (savedProgress) {
            userProgress = JSON.parse(savedProgress);
        }
    }
    
    // Find the latest day where at least one session is not completed
    function findLatestActiveDay() {
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const dayProgress = userProgress[day] || {};
            const isDayComplete = dayProgress.morning_completed && dayProgress.afternoon_completed && dayProgress.evening_completed;
            if (!isDayComplete) {
                return day;
            }
        }
        return TOTAL_DAYS; // If all days are completed, stay on the last day
    }

    function updateDashboard() {
        updateOverallProgress();
        updateDailyProgress();
        updateStreak();
    }

    function updateOverallProgress() {
        const totalSessions = TOTAL_DAYS * 3; 
        let completedSessions = 0;
        
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const dayProgress = userProgress[day] || {};
            if (dayProgress.morning_completed) completedSessions++;
            if (dayProgress.afternoon_completed) completedSessions++;
            if (dayProgress.evening_completed) completedSessions++;
        }
        
        const progressPercent = Math.round((completedSessions / totalSessions) * 100);
        const progressCircle = document.querySelector('.progress-circle');
        if (progressCircle) {
            progressCircle.style.background = `conic-gradient(var(--primary-color) ${progressPercent}%, #e9ecef ${progressPercent}%)`;
            progressCircle.querySelector('.progress-text').textContent = `${progressPercent}%`;
        }
    }

    function updateDailyProgress() {
        const todayProgress = userProgress[currentDay] || {};
        
        // Update current day display
        const currentDayElement = document.querySelector('.progress-dashboard h2');
        if (currentDayElement) currentDayElement.textContent = `Day ${currentDay} - Your Learning Journey`;

        // Update session progress bars
        ['morning', 'afternoon', 'evening'].forEach(session => {
            const progressFill = document.querySelector(`.progress-fill[data-session="${session}"]`);
            if (progressFill) {
                if (todayProgress[`${session}_completed`]) {
                    progressFill.style.width = '100%';
                    progressFill.style.backgroundColor = '#28a745'; // Green for completion
                } else {
                    progressFill.style.width = '0%';
                    progressFill.style.backgroundColor = 'var(--primary-color)';
                }
            }
        });
    }

    function updateStreak() {
        let streak = 0;
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const dayData = userProgress[day];
            if (dayData && dayData.morning_completed && dayData.afternoon_completed && dayData.evening_completed) {
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

    function handleKeyboardShortcuts(e) {
        if (learningSession.style.display === 'none') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                showPreviousCard();
                break;
            case 'ArrowRight':
            case ' ':
                if (e.key === ' ') e.preventDefault(); // Prevent scrolling on space bar
                showNextCard();
                break;
            case 'f':
                flipCard();
                break;
            case 'p':
                pronounceWord();
                break;
            case 'k': // 'K' for Know
                markCardAsKnown(true);
                break;
            case 'l': // 'L' for Learn (or 'Practice More')
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
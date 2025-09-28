// 90-Day English Mastery Program - FINAL CODE
document.addEventListener('DOMContentLoaded', function() {
    
    // -------------------------------------------------------------------
    // Flashcard Data Structure (YOU MUST COMPLETE DAYS 2-90 HERE)
    // Day 1 Morning Session is complete for testing.
    // -------------------------------------------------------------------
    const learningData = {
        1: {
            morning: { // 10 vocab + 3 phrasal verbs + 3 idioms = 16 cards
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
            },
            afternoon: { // 10 vocab + 4 phrasal verbs + 4 idioms = 18 cards (ADD DATA)
                vocabulary: [], phrasalVerbs: [], idioms: [] 
            },
            evening: { // 10 vocab + 3 phrasal verbs + 3 idioms = 16 cards (ADD DATA)
                vocabulary: [], phrasalVerbs: [], idioms: [] 
            }
        },
        // Continue for days 2-90...
    };

    const TOTAL_DAYS = 90;

    // --- DOM Elements & State Variables ---
    const sessionBtns = document.querySelectorAll('.session-btn');
    const learningSession = document.getElementById('learningSession');
    const backToDashboard = document.getElementById('backToDashboard');
    const sessionTitle = document.getElementById('sessionTitle');
    const sessionProgress = document.getElementById('sessionProgress');
    const sessionTimer = document.getElementById('sessionTimer');
    const mainFlashcard = document.getElementById('mainFlashcard');
    const overview = document.querySelector('.program-overview');
    const dashboard = document.querySelector('.progress-dashboard');
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

    let currentDay = 1; 
    let currentSession = '';
    let currentCardIndex = 0;
    let currentCards = [];
    let userProgress = JSON.parse(localStorage.getItem('englishProgress')) || {};
    let timerInterval = null;

    // --- Core Functions ---

    function init() {
        setupEventListeners();
        loadUserProgress();
        // Determine the current day user should be on
        currentDay = findLatestActiveDay() || 1;
        updateDashboard();
    }

    function setupEventListeners() {
        sessionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => startLearningSession(e.target.dataset.session));
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
        const allCards = sessionData ? [
            ...sessionData.vocabulary.map((card, i) => ({ ...card, type: 'vocab', card_i: i })),
            ...sessionData.phrasalVerbs.map((card, i) => ({ ...card, type: 'phrasal', card_i: i })),
            ...sessionData.idioms.map((card, i) => ({ ...card, type: 'idiom', card_i: i }))
        ] : [];
        
        // Data check
        if (allCards.length === 0) {
            alert(`Session data for Day ${currentDay} - ${capitalizeFirst(session)} is incomplete. Please add data to js/language.js.`);
            return;
        }

        // Filter cards already marked as known for this session
        const sessionProgress = userProgress[currentDay]?.[currentSession] || {};
        currentCards = allCards.filter(card => {
             const cardId = `${card.type}-${card.card_i}`;
             return !sessionProgress[cardId];
        });
        
        if (currentCards.length === 0) {
            alert(`You have already completed the ${capitalizeFirst(session)} session for Day ${currentDay}. Try another session or proceed to the next day!`);
            return;
        }
        
        // Update UI
        sessionTitle.textContent = `${capitalizeFirst(session)} Session - Day ${currentDay}`;
        updateCardCounts(sessionData);
        createNavigationDots(sessionData);
        showLearningSession();
        showCurrentCard();
        startSessionTimer(session);
    }

    function showLearningSession() {
        if (overview) overview.style.display = 'none';
        if (dashboard) dashboard.style.display = 'none';
        learningSession.style.display = 'block';
    }

    function showDashboard() {
        if (overview) overview.style.display = 'block';
        if (dashboard) dashboard.style.display = 'block';
        learningSession.style.display = 'none';
        stopSessionTimer();
        updateDashboard();
    }

    function showCurrentCard() {
        if (currentCards.length === 0) return;

        const card = currentCards[currentCardIndex];
        const totalCards = currentCards.length;

        // Update card content fields
        document.getElementById('wordMain').textContent = card.word;
        document.getElementById('wordPhonetic').textContent = card.phonetic;
        document.getElementById('wordPOS').textContent = card.pos || '';
        document.getElementById('wordMainBack').textContent = card.word;
        document.getElementById('burmeseMeaning').textContent = card.meaning;
        document.getElementById('wordExplanation').textContent = card.explanation;
        document.getElementById('englishExample').textContent = card.example;
        document.getElementById('burmeseExample').textContent = card.exampleBurmese;
        
        const cardTypeDisplay = capitalizeFirst(card.type === 'phrasal' ? 'Phrasal Verb' : card.type);
        document.getElementById('cardType').textContent = cardTypeDisplay;
        document.getElementById('cardTypeBack').textContent = cardTypeDisplay;
        
        const cardNumber = `${currentCardIndex + 1}/${totalCards}`;
        document.getElementById('cardNumber').textContent = cardNumber;
        document.getElementById('cardNumberBack').textContent = cardNumber;
        sessionProgress.textContent = `${currentCardIndex + 1}/${totalCards} items`;
        
        mainFlashcard.classList.remove('flipped');
        updateNavigationDots();
        updateButtonStates();
    }

    function markCardAsKnown(known) {
        const card = currentCards[currentCardIndex];
        const cardId = `${card.type}-${card.card_i}`;
        
        if (!userProgress[currentDay]) userProgress[currentDay] = {};
        if (!userProgress[currentDay][currentSession]) userProgress[currentDay][currentSession] = {};
        
        // Mark the card in the persistent progress data
        userProgress[currentDay][currentSession][cardId] = known;
        localStorage.setItem('englishProgress', JSON.stringify(userProgress));
        
        // Visually mark the dot as completed
        const dot = document.querySelector(`.nav-dot[data-original-index="${card.card_i}"][data-type="${card.type}"]`);
        if (dot) {
            dot.classList.add('completed');
        }

        // Remove card from the current session array
        currentCards.splice(currentCardIndex, 1);
        
        if (currentCardIndex >= currentCards.length) {
            currentCardIndex = currentCards.length - 1; // Adjust index if last card was removed
        }

        if (currentCards.length === 0) {
            completeSession();
        } else {
            showCurrentCard();
        }
    }
    
    // --- Utility Functions ---

    function flipCard() { mainFlashcard.classList.toggle('flipped'); }
    function showPreviousCard() { if (currentCardIndex > 0) { currentCardIndex--; showCurrentCard(); } }
    function showNextCard() { if (currentCardIndex < currentCards.length - 1) { currentCardIndex++; showCurrentCard(); } else { completeSession(); } }

    function pronounceWord() {
        const card = currentCards[currentCardIndex];
        if (card && card.word && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(card.word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }

    function updateButtonStates() {
        prevBtn.disabled = currentCardIndex <= 0;
        nextBtn.disabled = currentCardIndex >= currentCards.length - 1;
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
    
    function createNavigationDots(sessionData) {
        vocabDots.innerHTML = ''; phrasalDots.innerHTML = ''; idiomDots.innerHTML = '';
        const sessionProgress = userProgress[currentDay]?.[currentSession] || {};

        const createDots = (dataArray, dotContainer, type) => {
            dataArray.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.className = `nav-dot ${type}`;
                dot.dataset.type = type;
                dot.dataset.originalIndex = i;
                
                if (sessionProgress[`${type}-${i}`]) {
                    dot.classList.add('completed');
                }
                
                dot.addEventListener('click', () => {
                    const globalIndex = currentCards.findIndex(c => c.type === type && c.card_i === i);
                    if (globalIndex !== -1) { navigateToCard(globalIndex); }
                });
                dotContainer.appendChild(dot);
            });
        };

        phrasalCount.textContent = sessionData.phrasalVerbs.length;
        idiomCount.textContent = sessionData.idioms.length;

        createDots(sessionData.vocabulary, vocabDots, 'vocab');
        createDots(sessionData.phrasalVerbs, phrasalDots, 'phrasal');
        createDots(sessionData.idioms, idiomDots, 'idiom');
    }

    function navigateToCard(index) { currentCardIndex = index; showCurrentCard(); }

    function startSessionTimer(session) {
        const timeLimit = (session === 'morning' || session === 'evening') ? 15 : 20;
        let timeLeft = timeLimit * 60; 
        stopSessionTimer(); 
        
        timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            sessionTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                stopSessionTimer();
            }
        }, 1000);
    }

    function stopSessionTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }

    function completeSession() {
        const sessionData = learningData[currentDay][currentSession];
        let allCompleted = true;
        
        const checkCompletion = (dataArray, type) => {
            for (let i = 0; i < dataArray.length; i++) {
                 if (!userProgress[currentDay][currentSession][`${type}-${i}`]) {
                     allCompleted = false;
                     break;
                 }
            }
        };

        checkCompletion(sessionData.vocabulary, 'vocab');
        if(allCompleted) checkCompletion(sessionData.phrasalVerbs, 'phrasal');
        if(allCompleted) checkCompletion(sessionData.idioms, 'idiom');

        if (allCompleted) {
             userProgress[currentDay][`${currentSession}_completed`] = true;
             localStorage.setItem('englishProgress', JSON.stringify(userProgress));
             alert(`Congratulations! Day ${currentDay} - ${capitalizeFirst(currentSession)} is 100% complete!`);
        } else {
             alert(`Session completed. Return to the dashboard to track your progress.`);
        }
        
        showDashboard();
    }

    function findLatestActiveDay() {
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const dayProgress = userProgress[day] || {};
            const isDayComplete = dayProgress.morning_completed && dayProgress.afternoon_completed && dayProgress.evening_completed;
            if (!isDayComplete) {
                return day;
            }
        }
        return TOTAL_DAYS;
    }

    function updateDashboard() {
        const todayProgress = userProgress[currentDay] || {};
        
        // Update Overall Progress
        const totalSessions = TOTAL_DAYS * 3; 
        let completedSessions = 0;
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const p = userProgress[day] || {};
            if (p.morning_completed) completedSessions++;
            if (p.afternoon_completed) completedSessions++;
            if (p.evening_completed) completedSessions++;
        }
        const progressPercent = Math.round((completedSessions / totalSessions) * 100);
        const progressCircle = document.querySelector('.progress-circle');
        if (progressCircle) {
            progressCircle.style.background = `conic-gradient(var(--primary-color) ${progressPercent}%, #e9ecef ${progressPercent}%)`;
            progressCircle.querySelector('.progress-text').textContent = `${progressPercent}%`;
        }
        
        // Update Daily Progress Bars and Streak
        document.querySelector('.progress-dashboard h2').textContent = `Day ${currentDay} - Your Learning Journey`;
        ['morning', 'afternoon', 'evening'].forEach(session => {
            const progressFill = document.querySelector(`.progress-fill[data-session="${session}"]`);
            if (progressFill) {
                progressFill.style.width = todayProgress[`${session}_completed`] ? '100%' : '0%';
                progressFill.style.backgroundColor = todayProgress[`${session}_completed`] ? '#28a745' : 'var(--primary-color)';
            }
        });
        
        let streak = 0;
        for (let day = 1; day <= TOTAL_DAYS; day++) {
            const p = userProgress[day];
            if (p && p.morning_completed && p.afternoon_completed && p.evening_completed) {
                streak++;
            } else { break; }
        }
        document.querySelector('.streak-count').textContent = streak;
    }
    
    function handleKeyboardShortcuts(e) {
        if (learningSession.style.display === 'none') return;
        switch(e.key) {
            case 'ArrowLeft': showPreviousCard(); break;
            case 'ArrowRight': case ' ': if (e.key === ' ') e.preventDefault(); showNextCard(); break;
            case 'f': flipCard(); break;
            case 'p': pronounceWord(); break;
            case 'k': markCardAsKnown(true); break;
            case 'l': markCardAsKnown(false); break;
            case 'Escape': showDashboard(); break;
        }
    }

    function capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    init();
});
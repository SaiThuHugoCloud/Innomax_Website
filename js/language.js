// 90-Day English Learning Program
document.addEventListener('DOMContentLoaded', function() {
    // Complete 90-day learning data
    const learningData = [
        // Day 1
        {
            day: 1,
            level: "basic",
            vocabulary: [
                {
                    word: "Hello",
                    phonetic: "/həˈloʊ/",
                    partOfSpeech: "interjection",
                    meaning: "မင်္ဂလာပါ",
                    explanation: "A greeting used when meeting someone",
                    example: "Hello, how are you today?",
                    exampleBurmese: "မင်္ဂလာပါ၊ ဒီနေ့ ဘယ်လိုနေလဲ?"
                },
                {
                    word: "Goodbye",
                    phonetic: "/ɡʊdˈbaɪ/",
                    partOfSpeech: "interjection",
                    meaning: "သွားတော့မယ်",
                    explanation: "A farewell used when leaving",
                    example: "Goodbye, see you tomorrow!",
                    exampleBurmese: "သွားတော့မယ်၊ မနက်ဖြန် တွေ့မယ်!"
                },
                {
                    word: "Thank you",
                    phonetic: "/ˈθæŋk juː/",
                    partOfSpeech: "interjection",
                    meaning: "ကျေးဇူးတင်ပါတယ်",
                    explanation: "Expression of gratitude",
                    example: "Thank you for your help.",
                    exampleBurmese: "ကျေးဇူးတင်ပါတယ်။"
                }
            ],
            phrasalVerb: {
                word: "Look up",
                phonetic: "/lʊk ʌp/",
                meaning: "ရှာဖွေသည်",
                explanation: "To search for information",
                example: "I need to look up that word in the dictionary.",
                exampleBurmese: "ကျွန်တော် အဲဒီစကားလုံးကို အဘိဓာန်ထဲမှာ ရှာဖွေဖို့လိုတယ်။"
            },
            idiom: {
                word: "Break a leg",
                phonetic: "/breɪk ə leɡ/",
                meaning: "ကံကောင်းပါစေ",
                explanation: "Good luck (especially for performers)",
                example: "Break a leg in your performance tonight!",
                exampleBurmese: "ဒီည မင်းရဲ့ဖျော်ဖြေပွဲမှာ ကံကောင်းပါစေကွာ!"
            }
        },
        // Day 2
        {
            day: 2,
            level: "basic",
            vocabulary: [
                {
                    word: "Please",
                    phonetic: "/pliːz/",
                    partOfSpeech: "interjection",
                    meaning: "ကျေးဇူးပြု၍",
                    explanation: "Polite expression for requests",
                    example: "Please come in.",
                    exampleBurmese: "ကျေးဇူးပြု၍ ဝင်ပါ။"
                },
                {
                    word: "Yes",
                    phonetic: "/jes/",
                    partOfSpeech: "adverb",
                    meaning: "ဟုတ်ကဲ့",
                    explanation: "Affirmative response",
                    example: "Yes, I understand.",
                    exampleBurmese: "ဟုတ်ကဲ့၊ နားလည်ပါတယ်။"
                },
                {
                    word: "No",
                    phonetic: "/noʊ/",
                    partOfSpeech: "adverb",
                    meaning: "မဟုတ်ပါ",
                    explanation: "Negative response",
                    example: "No, thank you.",
                    exampleBurmese: "မဟုတ်ပါ၊ ကျေးဇူးတင်ပါတယ်။"
                }
            ],
            phrasalVerb: {
                word: "Give up",
                phonetic: "/ɡɪv ʌp/",
                meaning: "စွန့်လွှတ်သည်",
                explanation: "To stop trying",
                example: "Don't give up on your dreams.",
                exampleBurmese: "မင်းရဲ့ အိပ်မက်တွေကို မစွန့်လွှတ်နဲ့။"
            },
            idiom: {
                word: "Piece of cake",
                phonetic: "/piːs əv keɪk/",
                meaning: "အလွန်လွယ်ကူသည်",
                explanation: "Very easy",
                example: "The exam was a piece of cake.",
                exampleBurmese: "စာမေးပွဲက အရမ်းလွယ်တယ်။"
            }
        },
        // Day 3
        {
            day: 3,
            level: "basic",
            vocabulary: [
                {
                    word: "Water",
                    phonetic: "/ˈwɔːtər/",
                    partOfSpeech: "noun",
                    meaning: "ရေ",
                    explanation: "Clear liquid essential for life",
                    example: "I drink water every day.",
                    exampleBurmese: "ကျွန်တော် နေ့တိုင်း ရေသောက်တယ်။"
                },
                {
                    word: "Food",
                    phonetic: "/fuːd/",
                    partOfSpeech: "noun",
                    meaning: "အစားအစာ",
                    explanation: "What people and animals eat",
                    example: "The food is delicious.",
                    exampleBurmese: "အစားအစာက အင်မတန်မွှေးပါတယ်။"
                },
                {
                    word: "House",
                    phonetic: "/haʊs/",
                    partOfSpeech: "noun",
                    meaning: "အိမ်",
                    explanation: "Building where people live",
                    example: "My house is near the school.",
                    exampleBurmese: "ကျွန်တော့်အိမ်က ကျောင်းနားမှာပါ။"
                }
            ],
            phrasalVerb: {
                word: "Take off",
                phonetic: "/teɪk ɒf/",
                meaning: "ပျံသန်းသည်/ချွတ်သည်",
                explanation: "To leave the ground (plane) or remove",
                example: "The plane will take off in 10 minutes.",
                exampleBurmese: "လေယာဉ်က ၁၀ မိနစ်အတွင်း ပျံသန်းမယ်။"
            },
            idiom: {
                word: "Hit the books",
                phonetic: "/hɪt ðə bʊks/",
                meaning: "စာကြည့်သည်",
                explanation: "To study hard",
                example: "I need to hit the books for my final exams.",
                exampleBurmese: "ကျွန်တော် နောက်ဆုံးစာမေးပွဲအတွက် စာကြည့်ဖို့လိုတယ်။"
            }
        }
        // Continue this pattern for all 90 days...
        // Days 4-30: Basic level
        // Days 31-60: Intermediate level  
        // Days 61-90: Advanced level
    ];

    // DOM Elements
    const calendar = document.getElementById('calendar');
    const progressFill = document.getElementById('progressFill');
    const currentDay = document.getElementById('currentDay');
    const progressPercent = document.getElementById('progressPercent');
    const sessionTitle = document.getElementById('sessionTitle');
    
    // Flashcard elements
    const navBtns = document.querySelectorAll('.nav-btn');
    const flashcards = document.querySelectorAll('.flashcard');
    const flipBtns = document.querySelectorAll('.flip-btn');
    
    // Control buttons
    const prevCardBtn = document.getElementById('prev-card');
    const nextCardBtn = document.getElementById('next-card');
    const pronounceBtn = document.getElementById('pronounce-btn');
    const knowBtn = document.getElementById('know-btn');
    const practiceBtn = document.getElementById('practice-btn');
    
    // Progress dots
    const vocabDots = document.querySelector('.progress-item.vocabulary .progress-dots');
    const phrasalDot = document.querySelector('.progress-item.phrasal .dot');
    const idiomDot = document.querySelector('.progress-item.idiom .dot');

    // State variables
    let currentDayIndex = 0;
    let currentCardType = 'vocabulary';
    let currentVocabIndex = 0;
    let completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
    let todayProgress = JSON.parse(localStorage.getItem('todayProgress')) || {
        vocabulary: [false, false, false],
        phrasal: false,
        idiom: false
    };

    // Initialize the app
    function init() {
        setupEventListeners();
        renderCalendar();
        loadDay(currentDayIndex);
        updateProgress();
        updateDailyProgress();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Navigation buttons
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                switchCardType(type);
            });
        });

        // Flip buttons
        flipBtns.forEach(btn => {
            btn.addEventListener('click', flipCurrentCard);
        });

        // Control buttons
        prevCardBtn.addEventListener('click', previousCard);
        nextCardBtn.addEventListener('click', nextCard);
        pronounceBtn.addEventListener('click', pronounceCurrentWord);
        knowBtn.addEventListener('click', () => markAsKnown(true));
        practiceBtn.addEventListener('click', () => markAsKnown(false));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') previousCard();
            if (e.key === 'ArrowRight') nextCard();
            if (e.key === ' ') flipCurrentCard();
            if (e.key === 'p') pronounceCurrentWord();
            if (e.key === 'k') markAsKnown(true);
            if (e.key === 'l') markAsKnown(false);
            
            // Number keys for direct navigation
            if (e.key >= '1' && e.key <= '3') {
                const cardTypes = ['vocabulary', 'phrasal', 'idiom'];
                switchCardType(cardTypes[parseInt(e.key) - 1]);
            }
        });
    }

    // Load a specific day
    function loadDay(dayIndex) {
        const dayData = learningData[dayIndex];
        if (!dayData) return;

        // Update session title
        sessionTitle.textContent = `Day ${dayData.day} - ${dayData.level.charAt(0).toUpperCase() + dayData.level.slice(1)} Level`;

        // Reset progress for new day
        if (dayIndex !== currentDayIndex) {
            todayProgress = {
                vocabulary: [false, false, false],
                phrasal: false,
                idiom: false
            };
            currentVocabIndex = 0;
            currentCardType = 'vocabulary';
        }

        currentDayIndex = dayIndex;
        updateCardContent();
        switchCardType('vocabulary');
        updateDailyProgress();
        updateButtonStates();
    }

    // Update card content based on current type and index
    function updateCardContent() {
        const dayData = learningData[currentDayIndex];
        
        if (currentCardType === 'vocabulary') {
            const vocab = dayData.vocabulary[currentVocabIndex];
            updateVocabularyCard(vocab);
        } else if (currentCardType === 'phrasal') {
            updatePhrasalCard(dayData.phrasalVerb);
        } else if (currentCardType === 'idiom') {
            updateIdiomCard(dayData.idiom);
        }
    }

    // Update vocabulary card
    function updateVocabularyCard(vocab) {
        if (!vocab) return;

        // Front of card
        document.getElementById('vocab-word').textContent = vocab.word;
        document.getElementById('vocab-word-back').textContent = vocab.word;
        document.getElementById('vocab-phonetic').textContent = vocab.phonetic;
        document.getElementById('vocab-pos').textContent = vocab.partOfSpeech;

        // Back of card
        document.getElementById('vocab-meaning').textContent = vocab.meaning;
        document.getElementById('vocab-explanation').textContent = vocab.explanation;
        document.getElementById('vocab-example').textContent = vocab.example;
        document.getElementById('vocab-example-burmese').textContent = vocab.exampleBurmese;

        // Update counter
        document.querySelectorAll('.card-counter').forEach(counter => {
            counter.textContent = `${currentVocabIndex + 1}/3`;
        });
    }

    // Update phrasal verb card
    function updatePhrasalCard(phrasal) {
        if (!phrasal) return;

        document.getElementById('phrasal-word').textContent = phrasal.word;
        document.getElementById('phrasal-word-back').textContent = phrasal.word;
        document.getElementById('phrasal-phonetic').textContent = phrasal.phonetic;
        document.getElementById('phrasal-meaning').textContent = phrasal.meaning;
        document.getElementById('phrasal-explanation').textContent = phrasal.explanation;
        document.getElementById('phrasal-example').textContent = phrasal.example;
        document.getElementById('phrasal-example-burmese').textContent = phrasal.exampleBurmese;
    }

    // Update idiom card
    function updateIdiomCard(idiom) {
        if (!idiom) return;

        document.getElementById('idiom-word').textContent = idiom.word;
        document.getElementById('idiom-word-back').textContent = idiom.word;
        document.getElementById('idiom-phonetic').textContent = idiom.phonetic;
        document.getElementById('idiom-meaning').textContent = idiom.meaning;
        document.getElementById('idiom-explanation').textContent = idiom.explanation;
        document.getElementById('idiom-example').textContent = idiom.example;
        document.getElementById('idiom-example-burmese').textContent = idiom.exampleBurmese;
    }

    // Switch between card types
    function switchCardType(type) {
        // Update navigation buttons
        navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.type === type) {
                btn.classList.add('active');
            }
        });

        // Update flashcards
        flashcards.forEach(card => {
            card.classList.remove('active');
            if (card.dataset.type === type) {
                card.classList.add('active');
            }
        });

        currentCardType = type;
        updateCardContent();
        updateButtonStates();
        
        // Reset flip state
        const activeCard = document.querySelector('.flashcard.active');
        activeCard.classList.remove('flipped');
    }

    // Flip current card
    function flipCurrentCard() {
        const activeCard = document.querySelector('.flashcard.active');
        activeCard.classList.toggle('flipped');
    }

    // Navigate to previous card
    function previousCard() {
        if (currentCardType === 'vocabulary' && currentVocabIndex > 0) {
            currentVocabIndex--;
            updateCardContent();
        } else if (currentCardType !== 'vocabulary') {
            switchCardType('vocabulary');
            currentVocabIndex = 2; // Go to last vocabulary card
            updateCardContent();
        }
        updateButtonStates();
    }

    // Navigate to next card
    function nextCard() {
        if (currentCardType === 'vocabulary' && currentVocabIndex < 2) {
            currentVocabIndex++;
            updateCardContent();
        } else if (currentCardType === 'vocabulary' && currentVocabIndex === 2) {
            switchCardType('phrasal');
        } else if (currentCardType === 'phrasal') {
            switchCardType('idiom');
        }
        updateButtonStates();
    }

    // Pronounce current word
    function pronounceCurrentWord() {
        const dayData = learningData[currentDayIndex];
        let wordToPronounce;

        if (currentCardType === 'vocabulary') {
            wordToPronounce = dayData.vocabulary[currentVocabIndex].word;
        } else if (currentCardType === 'phrasal') {
            wordToPronounce = dayData.phrasalVerb.word;
        } else if (currentCardType === 'idiom') {
            wordToPronounce = dayData.idiom.word;
        }

        if (wordToPronounce) {
            const utterance = new SpeechSynthesisUtterance(wordToPronounce);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
        }
    }

    // Mark current item as known or needs practice
    function markAsKnown(known) {
        if (currentCardType === 'vocabulary') {
            todayProgress.vocabulary[currentVocabIndex] = known;
        } else if (currentCardType === 'phrasal') {
            todayProgress.phrasal = known;
        } else if (currentCardType === 'idiom') {
            todayProgress.idiom = known;
        }

        // Save progress
        localStorage.setItem('todayProgress', JSON.stringify(todayProgress));
        updateDailyProgress();

        // Move to next card if known
        if (known) {
            nextCard();
        }
    }

    // Update button states
    function updateButtonStates() {
        const dayData = learningData[currentDayIndex];
        
        prevCardBtn.disabled = currentCardType === 'vocabulary' && currentVocabIndex === 0;
        
        const isLastVocab = currentCardType === 'vocabulary' && currentVocabIndex === 2;
        const isLastPhrasal = currentCardType === 'phrasal';
        nextCardBtn.disabled = isLastPhrasal && currentCardType === 'idiom';
    }

    // Update daily progress display
    function updateDailyProgress() {
        // Update vocabulary dots
        const vocabDots = document.querySelectorAll('.progress-item.vocabulary .dot');
        todayProgress.vocabulary.forEach((completed, index) => {
            vocabDots[index].classList.toggle('completed', completed);
        });

        // Update phrasal verb dot
        phrasalDot.classList.toggle('completed', todayProgress.phrasal);

        // Update idiom dot
        idiomDot.classList.toggle('completed', todayProgress.idiom);
    }

    // Update overall progress
    function updateProgress() {
        const totalDays = learningData.length;
        const completedCount = completedDays.length;
        const percent = Math.round((completedCount / totalDays) * 100);
        
        progressFill.style.width = `${percent}%`;
        progressPercent.textContent = `${percent}% Complete`;
        currentDay.textContent = `Day ${currentDayIndex + 1} of ${totalDays}`;
    }

    // Render calendar view
    function renderCalendar() {
        calendar.innerHTML = '';
        
        for (let day = 1; day <= learningData.length; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.textContent = day;
            
            // Check if this day is completed
            const isCompleted = completedDays.includes(day);
            if (isCompleted) {
                dayCell.classList.add('completed');
            }
            
            // Check if this is the current day
            if (day === currentDayIndex + 1) {
                dayCell.classList.add('current');
            }
            
            // Add click event to jump to day
            dayCell.addEventListener('click', () => {
                loadDay(day - 1);
                renderCalendar();
            });
            
            calendar.appendChild(dayCell);
        }
    }

    // Initialize the application
    init();
});
import { ViralClip } from '../types';

export const INITIAL_VIRAL_CLIPS: ViralClip[] = [
  {
    id: 'clip-1',
    title: 'शादी में जीजाजी का बतंगड़! Blow Out of Proportion',
    hindiHook: 'शादी में जीजाजी क्यों भड़क गए? Aukaat me aa jao wapas! 😂🔥',
    startSeconds: 945, // 15:45
    endSeconds: 988,   // 16:28
    duration: 43,
    viralScore: 99,
    laughterScore: 10,
    aggressionScore: 9,
    energyPace: 'Ultra-Aggressive',
    viralTag: '🔥 Wedding Relative Roast',
    educationalType: 'Viral Idiom',
    targetConcept: 'Blow out of proportion',
    hindiMeaning: 'राई का पहाड़ बनाना / छोटी बात को ज़रूरत से ज़्यादा भाव देना',
    grammarFormula: 'Subject + is/are blowing + [Issue] + out of proportion',
    exampleSentence: 'You are blowing this issue out of proportion!',
    humorContext: 'शादी में टिंकू के बर्थडे का केक कट रहा था। जीजाजी मुंह फुलाकर बैठ गए कि मोमबत्ती मैंने क्यों नहीं बुझाई! सास मनाने लगी तो और नखरे!',
    teacherAction: 'सर ने जीजाजी के मुंह फुलाने, नखरे करने और "औकात में आ जाओ वापस" कहने की आक्रामक कॉमेडी की!',
    subtitles: [
      { text: 'हुआ क्या था?', startOffset: 0.2, duration: 1.2, highlight: false },
      { text: 'केक के ऊपर से मोमबत्ती...', startOffset: 1.5, duration: 1.8, highlight: false },
      { text: 'वो चाह रहा था कि वो बुझाए!', startOffset: 3.4, duration: 2.2, highlight: true, emoji: '🎂' },
      { text: 'अब टिंकू का बर्थडे है, टिंकू नहीं बुझाएगा?', startOffset: 5.8, duration: 2.6, highlight: false },
      { text: 'कहते टिंकू देखो, मेरे बगैर मोमबत्ती बुझा दी!', startOffset: 8.5, duration: 3.2, highlight: true, emoji: '😡' },
      { text: 'और जीजा खड़ा है मुंह फुला के!', startOffset: 11.8, duration: 2.2, highlight: true, emoji: '😤' },
      { text: 'सो ही इज़ ब्लोइंग द इशू...', startOffset: 14.2, duration: 1.8, highlight: false },
      { text: 'OUT OF PROPORTION!', startOffset: 16.2, duration: 2.6, highlight: true, emoji: '💥' },
      { text: 'ज़रूरत से ज़्यादा भाव दे रहे हो भाई!', startOffset: 19.0, duration: 2.4, highlight: true },
      { text: 'औकात में आ जाओ, पैंट में आ जाओ वापस!', startOffset: 21.6, duration: 3.2, highlight: true, emoji: '🥊' },
      { text: 'YOU ARE BLOWING THIS ISSUE', startOffset: 25.0, duration: 2.2, highlight: true },
      { text: 'OUT OF PROPORTION!', startOffset: 27.4, duration: 2.2, highlight: true, emoji: '🔥' },
      { text: 'राई का पहाड़ मत बनाओ!', startOffset: 29.8, duration: 2.4, highlight: true },
      { text: 'जब भी कोई दामाद या जीजा नखरे करे,', startOffset: 32.4, duration: 2.8, highlight: false },
      { text: 'सीधे बोलो: Stop blowing it out of proportion!', startOffset: 35.4, duration: 4.2, highlight: true, emoji: '🎯' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Hook Zoom' },
      { timeOffset: 3.5, type: 'laughter', label: 'Class Laugh' },
      { timeOffset: 12.0, type: 'punch', label: 'Jiju Punchline' },
      { timeOffset: 16.4, type: 'ding', label: 'Idiom Reveal Ding' },
      { timeOffset: 22.2, type: 'laughter', label: 'Explosive Laughter' },
      { timeOffset: 27.6, type: 'ding', label: 'Rule Memory Ding' },
    ],
    youtubeKit: {
      title: 'शादी में जीजाजी क्यों भड़क गए? 😂 Blow out of proportion Meaning in Hindi #Shorts',
      description: `शादी में टिंकू के केक की मोमबत्ती बुझने पर जीजाजी ने किया तमाशा!

💡 Learn this Viral Idiom:
👉 "Blow out of proportion"
🇮🇳 हिंदी अर्थ: राई का पहाड़ बनाना / छोटी बात को ज़रूरत से ज़्यादा भाव देना।
📝 Example: "You are blowing this issue out of proportion!" (इस बात का बतंगड़ बनाना बंद करो!)

#Shorts #LearnEnglish #EnglishIdioms #SpokenEnglish #EnglishInHindi #FunnyTeacher #IndianWeddingRoast #GrammarRules`,
      tags: ['Shorts', 'EnglishSpeaking', 'IdiomsInHindi', 'LearnEnglish', 'BlowOutOfProportion', 'FunnyTeacher', 'IndianWeddingHumor', 'EnglishVocabulary'],
      pinnedComment: '👉 क्या आपकी शादी में भी किसी जीजाजी/फूफाजी ने बतंगड़ बनाया था? "Blow out of proportion" का यूज़ करके कमेंट करें! 👇😂',
      hookVariations: [
        { type: 'Roast Hook', text: 'शादी में जीजाजी ने अपनी ही बेइज्जती करा ली?! Aukaat me aa jao wapas! 😂🔥', ctrScore: 99 },
        { type: 'Curiosity Hook', text: 'अंग्रेजी में "बात का बतंगड़ बनाना" को एक शब्द में क्या कहते हैं? 🤔💡', ctrScore: 96 },
        { type: 'Family Relatable', text: 'हर भारतीय शादी में एक रिश्तेदार ऐसा ज़रूर होता है! Blow out of proportion 😂', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'SSC और Bank परीक्षा में 10 बार आ चुका ये Idiom कभी नहीं भूलोगे! 🎯', ctrScore: 95 },
      ],
    },
  },
  {
    id: 'clip-2',
    title: 'ओ साले! समझदार को इशारा, मूर्ख को लट्ठ! A Nod to a Wise',
    hindiHook: 'ओ साले, तेरा दिमाग खराब है? समझदार को इशारा, मूर्ख को लट्ठ! 🏏😂',
    startSeconds: 1662, // 27:42
    endSeconds: 1704,   // 28:24
    duration: 42,
    viralScore: 98,
    laughterScore: 10,
    aggressionScore: 10,
    energyPace: 'Ultra-Aggressive',
    viralTag: '🥊 High-Energy Teacher Roast',
    educationalType: 'English Proverb',
    targetConcept: 'A nod to a wise, and a rod to a fool',
    hindiMeaning: 'समझदार को सिर्फ इशारा काफी, मूर्ख को केवल डंडे की भाषा समझ आती है',
    grammarFormula: 'Proverb: A nod to a wise, and a rod to a fool',
    exampleSentence: 'A nod to a wise and a rod to a fool.',
    humorContext: 'पार्किंग का नियम समझदार बच्चा एक बार में समझ जाता है, पर कुछ ऐसे ढीठ होते हैं जो केवल लट्ठ की भाषा समझते हैं! सर ने लट्ठ लेकर क्लास में आने का ऐलान कर दिया!',
    teacherAction: 'सर ने आक्रामक पंजाबी स्टाइल में "ओ साले, मेंटल है तू?" बोलते हुए छात्रों को हंसा-हंसा कर लोटपोट कर दिया!',
    subtitles: [
      { text: 'समझदार आदमी होता है, उसको इशारा काफी है!', startOffset: 0.5, duration: 2.8, highlight: false },
      { text: 'लेकिन जो लट्ठ की भाषा समझते हैं...', startOffset: 3.5, duration: 2.4, highlight: false },
      { text: 'उन्हें एक ही बात कितनी बार कहनी पड़ती है?', startOffset: 6.0, duration: 2.5, highlight: false },
      { text: 'ओ साले! तेरा दिमाग खराब है? मेंटल है तू?', startOffset: 8.8, duration: 2.5, highlight: true, emoji: '🥊' },
      { text: 'इसलिए इंग्लिश में एक जबरदस्त कहावत है:', startOffset: 11.5, duration: 2.5, highlight: false },
      { text: 'A NOD TO A WISE...', startOffset: 14.2, duration: 2.0, highlight: true, emoji: '💡' },
      { text: 'AND A ROD TO A FOOL!', startOffset: 16.4, duration: 2.2, highlight: true, emoji: '🏏' },
      { text: 'A nod to a wise, and a rod to a fool!', startOffset: 18.8, duration: 3.2, highlight: true },
      { text: 'Nod मतलब सिर्फ सिर का इशारा!', startOffset: 22.2, duration: 2.2, highlight: true },
      { text: 'और Rod मतलब लट्ठ, डंडा!', startOffset: 24.6, duration: 2.2, highlight: true, emoji: '🪵' },
      { text: 'तो कल मेरे लिए लट्ठ ले आना क्लास में! 😂', startOffset: 27.0, duration: 3.0, highlight: true, emoji: '🤣' },
      { text: 'समझदार को इशारा, मूर्ख को लट्ठ!', startOffset: 30.2, duration: 2.8, highlight: true },
      { text: 'याद हुआ कि नहीं? Nod to a wise, rod to a fool!', startOffset: 33.2, duration: 4.2, highlight: true, emoji: '🔥' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Proverb Hook' },
      { timeOffset: 9.0, type: 'punch', label: 'Saale Roasting Punch' },
      { timeOffset: 14.4, type: 'ding', label: 'Nod Wise Ding' },
      { timeOffset: 16.6, type: 'punch', label: 'Rod Fool Punch' },
      { timeOffset: 27.5, type: 'laughter', label: 'Explosive Laugh' },
      { timeOffset: 33.5, type: 'ding', label: 'Proverb Memory Ding' },
    ],
    youtubeKit: {
      title: 'ओ साले, मेंटल है तू? 😂 A nod to a wise, a rod to a fool Meaning #Shorts',
      description: `हिंदी की मशहूर कहावत "समझदार को इशारा काफी और मूर्ख को लट्ठ" को English में क्या बोलते हैं?

💡 Viral English Proverb:
👉 "A nod to a wise, and a rod to a fool."
🇮🇳 हिंदी अर्थ: बुद्धिमान व्यक्ति को केवल एक इशारा समझ आ जाता है, जबकि मूर्ख केवल डंडे की भाषा समझता है।

#Shorts #EnglishProverbs #ANodToAWise #LearnEnglish #SpokenEnglish #FunnyTeacher #EnglishInHindi #ClassroomRoast`,
      tags: ['Shorts', 'EnglishProverbs', 'ANodToAWise', 'LearnEnglish', 'SpokenEnglish', 'FunnyTeacher', 'EnglishRoast', 'DailyEnglish'],
      pinnedComment: '👉 क्या आपकी क्लास में भी कोई ऐसा है जिसके लिए लट्ठ मंगवाना पड़े? टैग करें! 😂👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'ओ साले, तेरा दिमाग खराब है? सर ने क्लास में लट्ठ मंगा लिया! 🏏😂', ctrScore: 99 },
        { type: 'Curiosity Hook', text: '"समझदार को इशारा, मूर्ख को लट्ठ" को अंग्रेजी में क्या कहते हैं? 💡', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'इंग्लिश का ये Proverb हर सरकारी एग्जाम में पूछा जाता है! 🎯', ctrScore: 94 },
        { type: 'Family Relatable', text: 'जब छोटा भाई बिना मार खाए कोई बात न समझे तो ये बोलो! 🥊', ctrScore: 96 },
      ],
    },
  },
  {
    id: 'clip-3',
    title: 'शादी में चिल्ली पनीर की प्लेट छूटी! Miss the Boat',
    hindiHook: 'शादी में चिल्ली पनीर की प्लेट निकल गई! Oh my God, Miss the boat! 😭🧀',
    startSeconds: 2238, // 37:18
    endSeconds: 2282,   // 38:02
    duration: 44,
    viralScore: 98,
    laughterScore: 10,
    aggressionScore: 8,
    energyPace: 'High-Octane',
    viralTag: '🤣 Peak Food Regret Comedy',
    educationalType: 'Viral Idiom',
    targetConcept: 'Miss the boat',
    hindiMeaning: 'हाथ से मौका निकल जाना / देर करने से अवसर गंवाना',
    grammarFormula: 'Subject + missed the boat + on [Action/Decision]',
    exampleSentence: 'They missed the boat on deciding this issue.',
    humorContext: 'शादी में भूखे खड़े थे, वेटर चिल्ली पनीर की थाली लेकर आया। रोहन के सामने थोड़ा स्टाइल मारा कि बाद में लेंगे, वेटर प्लेट लेकर रफूचक्कर हो गया! फिर सिर पकड़ कर चिल्लाए!',
    teacherAction: 'सर ने शादी में भूखे लड़के के स्टाइल मारने और फिर पनीर चले जाने पर सिर पीटने की जबरदस्त कॉमेडी की!',
    subtitles: [
      { text: 'शादी में गए हो और वेटर आता है थाली लेके...', startOffset: 0.4, duration: 2.8, highlight: false },
      { text: '"मैडम जी, चिल्ली पनीर लोगे?"', startOffset: 3.4, duration: 2.2, highlight: true, emoji: '🧀' },
      { text: 'और उस समय स्टाइल मारा, देखा रोहन देख रहा है!', startOffset: 5.8, duration: 3.0, highlight: false },
      { text: '"अरे नहीं, बाद में..." और वेटर चला गया!', startOffset: 9.0, duration: 2.4, highlight: false },
      { text: 'OH MY GOD! I MISSED THE BOAT!', startOffset: 11.8, duration: 2.8, highlight: true, emoji: '😱' },
      { text: 'अब दूसरा दिख भी नहीं रहा, साले एक ही रखा हुआ है!', startOffset: 14.8, duration: 3.2, highlight: true, emoji: '😭' },
      { text: 'यू मिस्ड द बोट!', startOffset: 18.2, duration: 1.8, highlight: true },
      { text: 'तेरे को मैंने कहा था, आया था तो पकड़ लेती!', startOffset: 20.2, duration: 3.2, highlight: false },
      { text: 'मौका हाथ से निकल गया!', startOffset: 23.6, duration: 2.4, highlight: true, emoji: '🚤' },
      { text: 'They missed the boat on deciding this issue.', startOffset: 26.2, duration: 3.5, highlight: true },
      { text: 'याद रखना: Miss the boat = अवसर खो देना!', startOffset: 30.0, duration: 3.0, highlight: true },
      { text: 'अगली बार पनीर दिखे तो बोट मिस मत करना!', startOffset: 33.2, duration: 3.8, highlight: true, emoji: '😋' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Hook Intro' },
      { timeOffset: 4.0, type: 'ding', label: 'Paneer Tray Ding' },
      { timeOffset: 12.0, type: 'scratch', label: 'Record Scratch Scream' },
      { timeOffset: 15.2, type: 'laughter', label: 'Huge Laugh Track' },
      { timeOffset: 26.5, type: 'ding', label: 'Sentence Rule Ding' },
    ],
    youtubeKit: {
      title: 'शादी में चिल्ली पनीर की प्लेट निकल गई! 😂 Miss the boat Meaning in Hindi #Shorts',
      description: `शादी में स्टाइल मारने के चक्कर में चिल्ली पनीर हाथ से निकल गया? 

सीखिए ये सुपर-इंपोर्टेंट English Idiom:
👉 "Miss the boat"
🇮🇳 हिंदी अर्थ: मौका हाथ से निकल जाना / सही समय पर फैसला न लेने से अवसर चूक जाना।
📝 Example: "They missed the boat on deciding this issue." (फैसला लेने में उन्होंने बहुत देर कर दी और मौका खो दिया!)

#Shorts #LearnEnglish #MissTheBoat #IdiomsInHindi #EnglishSpeaking #SpokenEnglish #IndianMemes #EnglishClass`,
      tags: ['Shorts', 'MissTheBoat', 'EnglishIdioms', 'SpokenEnglish', 'LearnEnglish', 'FunnyTeacher', 'IndianWeddingHumor', 'EnglishVocabulary'],
      pinnedComment: '👉 क्या आपके साथ भी कभी ऐसा हुआ है कि स्टाइल मारने में मौका हाथ से निकल गया? कमेंट करके बताएं! 😂👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'शादी में स्टाइल मारने के चक्कर में चिल्ली पनीर की प्लेट चली गई! 😭🧀', ctrScore: 98 },
        { type: 'Curiosity Hook', text: '"मौका हाथ से निकल गया" को जहाज/नाव से जोड़कर क्या कहते हैं? 🚤', ctrScore: 95 },
        { type: 'Family Relatable', text: 'शादी के स्नैक्स में जो देर करता है वो जीवन भर पछताता है! Miss the boat 😂', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'SSC CGL और Banking में बार-बार आने वाला Idiom: Miss the boat! 🎯', ctrScore: 94 },
      ],
    },
  },
  {
    id: 'clip-4',
    title: 'क्या "I loves you" सही है? Always और -s/-es का ग्रामर नियम',
    hindiHook: 'क्या "I loves you" कभी सही हो सकता है? सर का जवाब सुनो! 🍻😂',
    startSeconds: 232, // 03:52
    endSeconds: 276,   // 04:36
    duration: 44,
    viralScore: 97,
    laughterScore: 10,
    aggressionScore: 8,
    energyPace: 'Fast-Banter',
    viralTag: '⚡ Rapid-Fire Grammar Roast',
    educationalType: 'Core Grammar Rule',
    targetConcept: 'Subject-Verb Agreement + Adverb "Always"',
    hindiMeaning: 'Always एक Adverb है! Verb में \'s\' केवल He/She/It के साथ लगता है',
    grammarFormula: 'He/She (Singular) + Verb+s | Always is an Adverb (Not a verb!)',
    exampleSentence: 'He always sweeps little things under the rug.',
    humorContext: 'छात्र ने पूछा: "Always में S है तो Sweeps में भी S क्यों लगा?" सर ने समझाया: "Always Adverb है भाई! क्या कभी I loves you बोल सकते हो? केवल जब बहुत ज्यादा पी रखी हो तब!"',
    teacherAction: 'सर ने ड्रंक होकर "I loves you" बोलने की नकल की और छात्रों के ठहाके गूंज उठे!',
    subtitles: [
      { text: 'Always के बाद sweep नहीं है, sweeps है!', startOffset: 0.5, duration: 2.8, highlight: false },
      { text: 'कारण बताइए क्यों है?', startOffset: 3.5, duration: 1.8, highlight: false },
      { text: 'क्योंकि Subject \'HE\' है!', startOffset: 5.5, duration: 2.2, highlight: true },
      { text: 'आप कहोगे Always के साथ तो \'S\' है...', startOffset: 7.8, duration: 2.4, highlight: false },
      { text: 'नहीं! Always एक ADVERB है!', startOffset: 10.4, duration: 2.2, highlight: true, emoji: '💡' },
      { text: 'यहाँ पर \'S\' चाहिए VERB को!', startOffset: 12.8, duration: 2.2, highlight: true },
      { text: 'क्या "I loves you" हो सकता है कभी?', startOffset: 15.2, duration: 2.4, highlight: true, emoji: '❤️' },
      { text: 'हाँ, जब बहुत ज्यादा पी रखी हो! 🍻', startOffset: 17.8, duration: 2.8, highlight: true, emoji: '🥴' },
      { text: '"I loves you... hic!" नहीं होता ना?', startOffset: 20.8, duration: 2.4, highlight: true },
      { text: 'तो I के साथ S कभी नहीं लगेगा!', startOffset: 23.4, duration: 2.2, highlight: true },
      { text: 'He/She/It या कोई नाम हो, तब Verb+S!', startOffset: 25.8, duration: 3.2, highlight: true, emoji: '📝' },
      { text: 'He always sweeps under the rug!', startOffset: 29.2, duration: 3.0, highlight: true },
      { text: 'और "I love you" ही बोलना, "I loves" नहीं!', startOffset: 32.5, duration: 3.5, highlight: true, emoji: '😂' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Grammar Rule Alert' },
      { timeOffset: 10.6, type: 'ding', label: 'Adverb Rule Ding' },
      { timeOffset: 15.4, type: 'punch', label: 'I loves you Hook' },
      { timeOffset: 18.2, type: 'laughter', label: 'Big Class Laugh' },
      { timeOffset: 26.0, type: 'ding', label: 'Golden Rule Ding' },
    ],
    youtubeKit: {
      title: 'क्या "I loves you" बोलना सही है? 😂 Subject-Verb Rule by Funny Sir #Shorts',
      description: `English Grammar का सबसे बड़ा कन्फ्यूजन 40 सेकंड में खत्म!

💡 Core Grammar Rule:
- "Always" एक Adverb है, Verb नहीं!
- 3rd Person Singular (He, She, It, Name) के साथ Present Tense में Verb में 's/es' लगता है।
- "I love you" सही है, "I loves you" केवल नशे में बोला जाता है! 😂

📝 Example: "He always sweeps little things under the rug."

#Shorts #EnglishGrammar #GrammarTricks #SubjectVerbAgreement #LearnEnglish #EnglishInHindi #FunnyTeacher #SSCPreparation`,
      tags: ['Shorts', 'EnglishGrammar', 'SubjectVerbAgreement', 'GrammarRules', 'SpokenEnglish', 'AlwaysAdverb', 'FunnyTeacher', 'EnglishTricks'],
      pinnedComment: '👉 क्या आपको पहले पता था कि Always एक Adverb है? नीचे दिए वाक्य को सही करें: "She always go to school" सही है या "She always goes"? 👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'क्या शराब पीकर "I loves you" बोलना व्याकरण के हिसाब से सही है?! 🍻😂', ctrScore: 99 },
        { type: 'Curiosity Hook', text: '99% भारतीय इस व्याकरण नियम में गलती करते हैं! He sweeps vs I sweep 🤔', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'Subject-Verb Agreement का ये नियम SSC CGL में हर साल आता है! 🎯', ctrScore: 96 },
        { type: 'Family Relatable', text: 'जब कोई गलत अंग्रेजी झाड़े तो ये वीडियो दिखाकर उसकी क्लास लो! 📚', ctrScore: 94 },
      ],
    },
  },
  {
    id: 'clip-5',
    title: 'विशाल का सपना: पूरे गाँव का नागिन डांस! Doesn\'t Add Up',
    hindiHook: 'गाँव ने कुएं का पानी पीकर नागिन डांस शुरू कर दिया! Doesn\'t add up! 🐍😂',
    startSeconds: 1255, // 20:55
    endSeconds: 1298,   // 21:38
    duration: 43,
    viralScore: 96,
    laughterScore: 10,
    aggressionScore: 8,
    energyPace: 'High-Octane',
    viralTag: '🐍 Absurdist Comedy Story',
    educationalType: 'Spoken English Phrase',
    targetConcept: 'Doesn\'t add up',
    hindiMeaning: 'कोई सिर-पैर न होना / कोई तर्क या लॉजिक समझ में न आना',
    grammarFormula: 'Subject/Story + doesn\'t add up (Present) | didn\'t add up (Past)',
    exampleSentence: 'His idea doesn\'t add up at all.',
    humorContext: 'जब कोई ऐसी कहानी सुनाए जिसका कोई सिर-पैर ही न हो—जैसे कि विशाल का सपना कि पूरे गाँव ने कुएं का पानी पीकर नागिन डांस शुरू कर दिया और डॉक्टर बड़ी कैंची लेकर दिमाग का ऑपरेशन करने आ गया!',
    teacherAction: 'सर ने बिना सिर-पैर की कहानी का लॉजिक समझाते हुए नागिन डांस की नकल की और क्लास हंसते-हंसते लोटपोट हो गई!',
    subtitles: [
      { text: 'जब कोई ऐसी बात बोले जिसका कोई सेंस न बने...', startOffset: 0.5, duration: 2.8, highlight: false },
      { text: 'कुछ समझ नहीं आ रहा, तुम बोल क्या रहे हो?', startOffset: 3.5, duration: 2.8, highlight: false },
      { text: 'मुझे तुम्हारी बात में कोई लॉजिक नहीं लग रहा!', startOffset: 6.5, duration: 2.8, highlight: false },
      { text: 'DOES NOT ADD UP!', startOffset: 9.5, duration: 2.2, highlight: true, emoji: '🤷‍♂️' },
      { text: 'डज़न ऐड अप! कोई सिर-पैर की बात नहीं कर रहे!', startOffset: 12.0, duration: 3.2, highlight: true },
      { text: 'It doesn\'t add up, it doesn\'t make sense!', startOffset: 15.4, duration: 3.0, highlight: true },
      { text: 'जैसे विशाल की कहानी: पूरे गाँव ने पानी पिया...', startOffset: 18.6, duration: 3.0, highlight: false },
      { text: 'और सब नागिन डांस करने लगे! 😂', startOffset: 21.8, duration: 2.5, highlight: true, emoji: '🐍' },
      { text: 'डॉक्टर बड़ी कैंची लेके आ गया खोपड़ी काटने!', startOffset: 24.5, duration: 3.0, highlight: true, emoji: '✂️' },
      { text: 'HIS IDEA DOESN\'T ADD UP AT ALL!', startOffset: 27.8, duration: 3.0, highlight: true },
      { text: 'जब भी किसी बात का सिर-पैर न लगे, कहो:', startOffset: 31.0, duration: 2.5, highlight: false },
      { text: '"Your story doesn\'t add up!"', startOffset: 33.8, duration: 3.0, highlight: true, emoji: '🔥' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Logic Hook Intro' },
      { timeOffset: 9.6, type: 'ding', label: 'Phrase Reveal Ding' },
      { timeOffset: 22.0, type: 'laughter', label: 'Nagin Dance Laugh' },
      { timeOffset: 28.0, type: 'punch', label: 'Punchline Thud' },
      { timeOffset: 34.0, type: 'ding', label: 'Sentence Master Ding' },
    ],
    youtubeKit: {
      title: 'इस बात का कोई सिर-पैर नहीं है! 😂 Doesn\'t add up Meaning in Hindi #Shorts',
      description: `जब कोई बिना सिर-पैर की बात करे या कोई कहानी हजम न हो, तो English में क्या कहें?

💡 Spoken English Phrase:
👉 "Doesn't add up"
🇮🇳 हिंदी अर्थ: बात का कोई सिर-पैर न होना / कोई लॉजिक या तर्क समझ में न आना।
📝 Example: "His idea doesn't add up at all." (उसकी बात बिल्कुल भी समझ में नहीं आती!)

#Shorts #DoesntAddUp #SpokenEnglish #DailyEnglishPhrases #LearnEnglish #EnglishInHindi #FunnyTeacher #EnglishTricks`,
      tags: ['Shorts', 'DoesntAddUp', 'SpokenEnglish', 'DailyEnglishPhrases', 'LearnEnglishInHindi', 'FunnyTeacher', 'EnglishGrammar'],
      pinnedComment: '👉 क्या आपको भी कभी किसी की बात सुनकर लगा कि "इसका कोई सिर-पैर नहीं है"? कमेंट में लिखें: "This doesn\'t add up!" 👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'विशाल के सपने में पूरे गाँव ने कुएं का पानी पीकर नागिन डांस शुरू कर दिया! 🐍😂', ctrScore: 98 },
        { type: 'Curiosity Hook', text: '"इस बात का कोई सिर-पैर नहीं है" को अंग्रेजी में क्या बोलेंगे? 🤷‍♂️', ctrScore: 96 },
        { type: 'Family Relatable', text: 'जब दोस्त कोई फर्जी कहानी सुनाए तो अंग्रेजी में ऐसे बेइज्जत करो! 😂', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'Everyday Spoken English का सबसे जरूरी Phrase: Doesn\'t add up! 🎯', ctrScore: 93 },
      ],
    },
  },
  {
    id: 'clip-6',
    title: 'बुफे में 2 प्लेट भरकर ढोंग रचना! Put On a Front',
    hindiHook: 'शादी के बुफे में 2 प्लेट भरकर ढोंग करना! Put on a front! 😂🧁',
    startSeconds: 1095, // 18:15
    endSeconds: 1138,   // 18:58
    duration: 43,
    viralScore: 95,
    laughterScore: 9,
    aggressionScore: 7,
    energyPace: 'Fast-Banter',
    viralTag: '🧁 Buffet Gluttony Roast',
    educationalType: 'Viral Idiom',
    targetConcept: 'Put on a front',
    hindiMeaning: 'अपनी असलियत या भावनाएं छिपाना / दिखावा व ढोंग रचना',
    grammarFormula: 'Subject + is/are putting on a front',
    exampleSentence: 'I know he is putting on a front.',
    humorContext: 'पार्टी में लोग कहते हैं "अरे मैं तो बहुत कम खाती हूँ, बस एक गोलगप्पा!" और अंदर से भूख से जान निकल रही होती है। वैंकूवर के बुफे में सर ने खुद दो-दो प्लेटें बर्फी और जलेबी से भर लीं!',
    teacherAction: 'सर ने पार्टी में नकली नजाकत दिखाने और फिर प्लेट भरने की मजेदार मिमिक्री की!',
    subtitles: [
      { text: 'पार्टी में भूख लगी है, सब पूछ रहे हैं क्या खाओगे?', startOffset: 0.5, duration: 3.0, highlight: false },
      { text: '"नहीं एक्चुअली, मैं बहुत कम खाती हूँ... यू नो!"', startOffset: 3.8, duration: 3.0, highlight: true, emoji: '💅' },
      { text: '"बस एक गोलगप्पा... थोड़ा-सा चलेगा!"', startOffset: 7.0, duration: 2.8, highlight: false },
      { text: 'और अंदर से भावना कर रही है इतने बड़े थाल की! 😂', startOffset: 10.0, duration: 3.2, highlight: true, emoji: '🤤' },
      { text: 'क्योंकि दिखाना है लोगों को!', startOffset: 13.5, duration: 2.0, highlight: false },
      { text: 'इसको बोलते हैं: PUT ON A FRONT!', startOffset: 15.8, duration: 2.4, highlight: true, emoji: '🎭' },
      { text: 'यानी नकलीपन आगे ले आना, असलियत छुपाना!', startOffset: 18.5, duration: 3.2, highlight: true },
      { text: 'वैंकूवर के बुफे में मैंने भी दो-दो प्लेटें भर लीं!', startOffset: 22.0, duration: 3.5, highlight: true },
      { text: 'एक तरफ फल-फ्रूट, दूसरी तरफ बर्फी और जलेबियां!', startOffset: 25.8, duration: 3.5, highlight: false, emoji: '🍬' },
      { text: 'I know he is putting on a front!', startOffset: 29.5, duration: 3.0, highlight: true },
      { text: 'अपनी असलियत छुपाने का ढोंग मत करो!', startOffset: 32.8, duration: 3.0, highlight: true, emoji: '🔥' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Intro Hook' },
      { timeOffset: 10.2, type: 'laughter', label: 'Buffet Comedy Laugh' },
      { timeOffset: 16.0, type: 'ding', label: 'Idiom Reveal Bell' },
      { timeOffset: 26.0, type: 'laughter', label: 'Jalebi Story Laugh' },
      { timeOffset: 30.0, type: 'ding', label: 'Sentence Practice Ding' },
    ],
    youtubeKit: {
      title: 'शादी में "कम खाने" का ढोंग करने वाले! 😂 Put on a front Meaning in Hindi #Shorts',
      description: `पार्टी में "मैं तो बहुत कम खाता हूँ" बोलकर बाद में 2 प्लेटें भरने वालों को अंग्रेजी में क्या कहेंगे?

💡 Learn this Idiom:
👉 "Put on a front"
🇮🇳 हिंदी अर्थ: अपनी असलियत या असली भावनाएं छिपाना / झूठा दिखावा करना।
📝 Example: "I know he is putting on a front." (मुझे पता है कि वो सिर्फ दिखावा कर रहा है!)

#Shorts #PutOnAFront #EnglishIdioms #SpokenEnglish #DailyEnglish #FunnyTeacher #EnglishInHindi #VocabularyTricks`,
      tags: ['Shorts', 'PutOnAFront', 'EnglishVocabulary', 'IdiomsInHindi', 'SpokenEnglish', 'FunnyTeacher', 'LearnEnglishInHindi'],
      pinnedComment: '👉 क्या आपका कोई दोस्त पार्टी में ऐसा ढोंग करता है? उसे टैग करें और बताएं! 😂👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'बुफे में 2 प्लेटें भरकर खुद को डाइट पर बताने वाले ढोंगी! Put on a front 😂', ctrScore: 98 },
        { type: 'Curiosity Hook', text: '"झूठा दिखावा करना" को अंग्रेजी में क्या कहते हैं? 🎭', ctrScore: 94 },
        { type: 'Family Relatable', text: 'रिश्तेदारों के सामने शरीफ बनने की नौटंकी को अंग्रेजी में क्या कहें? 🧁', ctrScore: 96 },
        { type: 'Exam Challenge', text: 'IELTS Speaking में 8 Band लाने वाला Phrasal Idiom: Put on a front! 🎯', ctrScore: 95 },
      ],
    },
  },
  {
    id: 'clip-7',
    title: 'मरे हुए घोड़े को पीटना! Beat a Dead Horse',
    hindiHook: 'मरे हुए घोड़े को पीटने से क्या फायदा? Beat a dead horse! 🐴😂',
    startSeconds: 2322, // 38:42
    endSeconds: 2364,   // 39:24
    duration: 42,
    viralScore: 94,
    laughterScore: 9,
    aggressionScore: 9,
    energyPace: 'High-Octane',
    viralTag: '🐴 Whining Family Roast',
    educationalType: 'Viral Idiom',
    targetConcept: 'Beat a dead horse',
    hindiMeaning: 'बीती बात को लेकर बेकार में बहस करना / व्यर्थ सिर खपाना',
    grammarFormula: 'There is no point in + beating a dead horse',
    exampleSentence: 'There\'s no point in beating a dead horse now.',
    humorContext: 'कई रिश्तेदार 10 साल पुरानी बात को लेकर 24 घंटे रोते रहते हैं: "मम्मी तुमने मुझे तब साइकिल नहीं दिलाई!" अब घोड़ा मर चुका है भाई, उसे पीटने से क्या मिलेगा?',
    teacherAction: 'सर ने मरे हुए घोड़े को लट्ठ मारने की एक्टिंग करते हुए पुरानी बातों पर रोने वाले रिश्तेदारों को जमकर रोस्ट किया!',
    subtitles: [
      { text: 'बीत गई सो बात गई, निपटा लिया...', startOffset: 0.5, duration: 2.2, highlight: false },
      { text: 'कुछ लोग पुरानी बात को लेके बैठे रहते हैं!', startOffset: 2.8, duration: 2.5, highlight: false },
      { text: 'BEAT A DEAD HORSE!', startOffset: 5.5, duration: 2.0, highlight: true, emoji: '🐴' },
      { text: 'घोड़ा मर चुका है, उसे पीट के कोई लाभ मिलेगा?', startOffset: 7.8, duration: 3.0, highlight: false },
      { text: 'साले रोते ही रहेंगे 24 घंटे!', startOffset: 11.0, duration: 2.2, highlight: true, emoji: '😤' },
      { text: '"मम्मी तूने मुझे उस समय नहीं लेके दिया था!"', startOffset: 13.5, duration: 2.8, highlight: true, emoji: '😭' },
      { text: 'और मरे हुए घोड़े को पत्थर मारने लगे: चल!', startOffset: 16.5, duration: 3.2, highlight: true, emoji: '💀' },
      { text: 'Don\'t beat a dead horse, he is already dead!', startOffset: 20.0, duration: 3.0, highlight: true },
      { text: 'अब उससे उम्मीद मत करो कि वो दोबारा दौड़ेगा!', startOffset: 23.2, duration: 3.0, highlight: false },
      { text: 'There\'s no point in beating a dead horse.', startOffset: 26.5, duration: 3.2, highlight: true },
      { text: 'पुरानी बात पर रोना बंद करो और आगे बढ़ो!', startOffset: 30.0, duration: 3.0, highlight: true, emoji: '🔥' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Hook Intro' },
      { timeOffset: 5.6, type: 'ding', label: 'Idiom Ding' },
      { timeOffset: 11.2, type: 'punch', label: 'Relative Roast Punch' },
      { timeOffset: 17.0, type: 'laughter', label: 'Dead Horse Laugh' },
      { timeOffset: 26.8, type: 'ding', label: 'Rule Ding' },
    ],
    youtubeKit: {
      title: 'मरे हुए घोड़े को पीटना बंद करो! 😂 Beat a dead horse Meaning in Hindi #Shorts',
      description: `पुरानी बातों को लेकर 24 घंटे रोने वाले रिश्तेदारों के लिए ये Idiom सीखें:

💡 Learn this Idiom:
👉 "Beat a dead horse"
🇮🇳 हिंदी अर्थ: बीती बात पर बेकार में बहस करना या व्यर्थ में सिर खपाना।
📝 Example: "There's no point in beating a dead horse now." (अब इस पर बहस करने का कोई फायदा नहीं है!)

#Shorts #BeatADeadHorse #EnglishIdioms #SpokenEnglish #DailyEnglish #FunnyTeacher #EnglishInHindi`,
      tags: ['Shorts', 'BeatADeadHorse', 'EnglishIdioms', 'SpokenEnglish', 'FunnyTeacher', 'LearnEnglishInHindi', 'ViralShorts'],
      pinnedComment: '👉 क्या आपके घर में भी कोई पुरानी बातों को लेकर बैठा रहता है? कमेंट करके बताएं! 😂👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'पुरानी बातों पर 24 घंटे रोने वाले रिश्तेदार! Beat a dead horse 😂🐴', ctrScore: 97 },
        { type: 'Curiosity Hook', text: '"बीती बात पर व्यर्थ सिर खपाना" को अंग्रेजी में मरे हुए घोड़े से क्यों जोड़ते हैं? 🤔', ctrScore: 95 },
        { type: 'Family Relatable', text: '"मम्मी तूने मुझे 10 साल पहले वो क्यों नहीं दिलाया!" मरे घोड़े को पीटना बंद करो! 😭', ctrScore: 96 },
        { type: 'Exam Challenge', text: 'SSC CGL और NDA में बार-बार पूछा जाने वाला Idiom! 🎯', ctrScore: 94 },
      ],
    },
  },
  {
    id: 'clip-8',
    title: 'नॉर्थ इंडिया के प्रभुदेवा! On Top of the World',
    hindiHook: 'बत्ती आ गई, जनरेटर ऑन! पूरी दुनिया मेरे नीचे थी! On top of the world! ⚡🕺',
    startSeconds: 490, // 08:10
    endSeconds: 532,   // 08:52
    duration: 42,
    viralScore: 96,
    laughterScore: 10,
    aggressionScore: 8,
    energyPace: 'High-Octane',
    viralTag: '🕺 High-Paced Energy Celebration',
    educationalType: 'Viral Idiom',
    targetConcept: 'On top of the world',
    hindiMeaning: 'अत्यधिक खुश और आत्मविश्वास से भरा होना',
    grammarFormula: 'Subject + is/was + on top of the world',
    exampleSentence: 'You are on top of the world today.',
    humorContext: 'जैसे ही तरक्की मिली, प्रमोशन हुआ, गाड़ी मिली, जनरेटर ऑन हुआ और बिजली आ गई—आदमी कहता है "पूरी दुनिया मेरे नीचे थी!" सर ने प्रभुदेवा स्टाइल में डांस करके पूरी क्लास को हिला दिया!',
    teacherAction: 'सर ने दोनों हाथ ऊपर उठाकर जश्न मनाने और डांस करने की धमाकेदार एक्टिंग की!',
    subtitles: [
      { text: 'जब कभी भी खुश होना है, तो ऐसे बोलते हैं:', startOffset: 0.5, duration: 2.5, highlight: false },
      { text: 'माई गॉड, जैसे ही मुझे तरक्की मिली...', startOffset: 3.2, duration: 2.4, highlight: false },
      { text: 'जैसे ही गाड़ी मिली, जैसे ही जनरेटर ऑन हुआ!', startOffset: 5.8, duration: 2.8, highlight: true, emoji: '⚡' },
      { text: 'जैसे ही बत्ती आ गई! I WAS...', startOffset: 8.8, duration: 2.4, highlight: false },
      { text: 'ON TOP OF THE WORLD!', startOffset: 11.4, duration: 2.4, highlight: true, emoji: '🕺' },
      { text: 'पूरी दुनिया मेरे नीचे थी!', startOffset: 14.0, duration: 2.2, highlight: true },
      { text: 'आज तुम बहुत खुश और आत्मविश्वास से भरे हो!', startOffset: 16.5, duration: 3.0, highlight: false },
      { text: 'यू आर ऑन टॉप ऑफ द वर्ल्ड टुडे!', startOffset: 19.8, duration: 2.5, highlight: true },
      { text: 'YOU ARE ON TOP OF THE WORLD!', startOffset: 22.5, duration: 2.8, highlight: true, emoji: '🌍' },
      { text: 'नॉर्थ इंडिया के प्रभुदेवा बन जाओ!', startOffset: 25.5, duration: 2.5, highlight: true, emoji: '🕺' },
      { text: 'जब भी बेहद खुशी हो, बोलो:', startOffset: 28.2, duration: 2.2, highlight: false },
      { text: '"I am feeling on top of the world!"', startOffset: 30.6, duration: 3.8, highlight: true, emoji: '🔥' },
    ],
    soundCues: [
      { timeOffset: 0.2, type: 'whoosh', label: 'Energy Intro' },
      { timeOffset: 6.0, type: 'punch', label: 'Generator On Punch' },
      { timeOffset: 11.6, type: 'ding', label: 'Idiom Ding' },
      { timeOffset: 14.5, type: 'laughter', label: 'Prabhudeva Laugh' },
      { timeOffset: 23.0, type: 'ding', label: 'Memory Rule Ding' },
    ],
    youtubeKit: {
      title: 'बत्ती आ गई, जनरेटर ऑन! 😂 On top of the world Meaning in Hindi #Shorts',
      description: `जब कोई खुशी से झूम उठे तो English में क्या कहें?

💡 Learn this Idiom:
👉 "On top of the world"
🇮🇳 हिंदी अर्थ: अत्यधिक खुश और आत्मविश्वास से भरा होना।
📝 Example: "You are on top of the world today." (आज तुम बहुत खुश और आत्मविश्वास से भरे हो!)

#Shorts #OnTopOfTheWorld #EnglishIdioms #SpokenEnglish #DailyEnglish #FunnyTeacher #EnglishInHindi`,
      tags: ['Shorts', 'OnTopOfTheWorld', 'EnglishIdioms', 'SpokenEnglish', 'FunnyTeacher', 'LearnEnglishInHindi', 'PrabhudevaHumor'],
      pinnedComment: '👉 आखिरी बार आप "On top of the world" कब महसूस कर रहे थे? कमेंट में बताओ! 🕺👇',
      hookVariations: [
        { type: 'Roast Hook', text: 'बत्ती आ गई, जनरेटर ऑन! प्रभुदेवा बनकर नाचना शुरू! 🕺⚡', ctrScore: 98 },
        { type: 'Curiosity Hook', text: '"पूरी दुनिया मेरे कदमों में है" को अंग्रेजी में क्या कहें? 🌍', ctrScore: 95 },
        { type: 'Family Relatable', text: 'जब बिजली कटने के बाद अचानक एसी चालू हो जाए तो ये बोलो! ❄️', ctrScore: 97 },
        { type: 'Exam Challenge', text: 'Daily English Speaking में खुशी जताने का सबसे पॉपुलर Idiom! 🎯', ctrScore: 94 },
      ],
    },
  },
];

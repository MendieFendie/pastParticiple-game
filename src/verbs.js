const listOfWords = [
  {
    base: "arise",
    past: "arose",
    pastParticiple: "arisen",
    ukrainian: "виникати",
  },
  {
    base: "awake",
    past: "awoke",
    pastParticiple: "awoken",
    ukrainian: "прокидатися",
  },
  { base: "be", past: "was/were", pastParticiple: "been", ukrainian: "бути" },
  {
    base: "bear",
    past: "bore",
    pastParticiple: "borne",
    ukrainian: "народжувати",
  },
  { base: "beat", past: "beat", pastParticiple: "beaten", ukrainian: "бити" },
  {
    base: "become",
    past: "became",
    pastParticiple: "become",
    ukrainian: "ставати",
  },
  {
    base: "begin",
    past: "began",
    pastParticiple: "begun",
    ukrainian: "починати",
  },
  { base: "bend", past: "bent", pastParticiple: "bent", ukrainian: "згинати" },
  { base: "bet", past: "bet", pastParticiple: "bet", ukrainian: "ставити" },
  {
    base: "bind",
    past: "bound",
    pastParticiple: "bound",
    ukrainian: 'зв"язувати',
  },
  { base: "bite", past: "bit", pastParticiple: "bitten", ukrainian: "кусати" },
  {
    base: "bleed",
    past: "bled",
    pastParticiple: "bled",
    ukrainian: "кровоточити",
  },
  { base: "blow", past: "blew", pastParticiple: "blown", ukrainian: "дути" },
  {
    base: "break",
    past: "broke",
    pastParticiple: "broken",
    ukrainian: "ламати",
  },
  {
    base: "bring",
    past: "brought",
    pastParticiple: "brought",
    ukrainian: "приносити",
  },
  {
    base: "build",
    past: "built",
    pastParticiple: "built",
    ukrainian: "будувати",
  },
  {
    base: "buy",
    past: "bought",
    pastParticiple: "bought",
    ukrainian: "купувати",
  },
  {
    base: "catch",
    past: "caught",
    pastParticiple: "caught",
    ukrainian: "ловити",
  },
  {
    base: "choose",
    past: "chose",
    pastParticiple: "chosen",
    ukrainian: "вибирати",
  },
  {
    base: "come",
    past: "came",
    pastParticiple: "come",
    ukrainian: "приходити",
  },
  {
    base: "cost",
    past: "cost",
    pastParticiple: "cost",
    ukrainian: "коштувати",
  },
  { base: "cut", past: "cut", pastParticiple: "cut", ukrainian: "різати" },
  {
    base: "deal",
    past: "dealt",
    pastParticiple: "dealt",
    ukrainian: "мати справу",
  },
  { base: "dig", past: "dug", pastParticiple: "dug", ukrainian: "копати" },
  { base: "do", past: "did", pastParticiple: "done", ukrainian: "робити" },
  {
    base: "draw",
    past: "drew",
    pastParticiple: "drawn",
    ukrainian: "малювати",
  },
  {
    base: "dream",
    past: "dreamt/dreamed",
    pastParticiple: "dreamt/dreamed",
    ukrainian: "мріяти",
  },
  { base: "drink", past: "drank", pastParticiple: "drunk", ukrainian: "пити" },
  {
    base: "drive",
    past: "drove",
    pastParticiple: "driven",
    ukrainian: "водити",
  },
  { base: "eat", past: "ate", pastParticiple: "eaten", ukrainian: "їсти" },
  { base: "fall", past: "fell", pastParticiple: "fallen", ukrainian: "падати" },
  { base: "feed", past: "fed", pastParticiple: "fed", ukrainian: "годувати" },
  {
    base: "feel",
    past: "felt",
    pastParticiple: "felt",
    ukrainian: "відчувати",
  },
  {
    base: "fight",
    past: "fought",
    pastParticiple: "fought",
    ukrainian: "битися",
  },
  {
    base: "find",
    past: "found",
    pastParticiple: "found",
    ukrainian: "знаходити",
  },
  { base: "fly", past: "flew", pastParticiple: "flown", ukrainian: "літати" },
  {
    base: "forget",
    past: "forgot",
    pastParticiple: "forgotten",
    ukrainian: "забувати",
  },
  {
    base: "forgive",
    past: "forgave",
    pastParticiple: "forgiven",
    ukrainian: "прощати",
  },
  {
    base: "freeze",
    past: "froze",
    pastParticiple: "frozen",
    ukrainian: "заморожувати",
  },
  {
    base: "get",
    past: "got",
    pastParticiple: "gotten",
    ukrainian: "отримувати",
  },
  { base: "give", past: "gave", pastParticiple: "given", ukrainian: "давати" },
  { base: "go", past: "went", pastParticiple: "gone", ukrainian: "йти" },
  { base: "grow", past: "grew", pastParticiple: "grown", ukrainian: "рости" },
  { base: "hang", past: "hung", pastParticiple: "hung", ukrainian: "висіти" },
  { base: "have", past: "had", pastParticiple: "had", ukrainian: "мати" },
  { base: "hear", past: "heard", pastParticiple: "heard", ukrainian: "чути" },
  { base: "hide", past: "hid", pastParticiple: "hidden", ukrainian: "ховати" },
  { base: "hit", past: "hit", pastParticiple: "hit", ukrainian: "ударити" },
  { base: "hold", past: "held", pastParticiple: "held", ukrainian: "тримати" },
  { base: "hurt", past: "hurt", pastParticiple: "hurt", ukrainian: "боліти" },
  {
    base: "keep",
    past: "kept",
    pastParticiple: "kept",
    ukrainian: "зберігати",
  },
  { base: "know", past: "knew", pastParticiple: "known", ukrainian: "знати" },
  { base: "lay", past: "laid", pastParticiple: "laid", ukrainian: "класти" },
  { base: "lead", past: "led", pastParticiple: "led", ukrainian: "вести" },
  {
    base: "learn",
    past: "learnt/learned",
    pastParticiple: "learnt/learned",
    ukrainian: "вчитися",
  },
  {
    base: "leave",
    past: "left",
    pastParticiple: "left",
    ukrainian: "залишати",
  },
  { base: "lend", past: "lent", pastParticiple: "lent", ukrainian: "позичати" },
  { base: "let", past: "let", pastParticiple: "let", ukrainian: "дозволяти" },
  { base: "lie", past: "lay", pastParticiple: "lain", ukrainian: "лежати" },
  {
    base: "light",
    past: "lit/lighted",
    pastParticiple: "lit/lighted",
    ukrainian: "запалювати",
  },
  { base: "lose", past: "lost", pastParticiple: "lost", ukrainian: "губити" },
  {
    base: "make",
    past: "made",
    pastParticiple: "made",
    ukrainian: "робити, створювати",
  },
  {
    base: "mean",
    past: "meant",
    pastParticiple: "meant",
    ukrainian: "означати",
  },
  { base: "meet", past: "met", pastParticiple: "met", ukrainian: "зустрічати" },
  { base: "pay", past: "paid", pastParticiple: "paid", ukrainian: "платити" },
  { base: "put", past: "put", pastParticiple: "put", ukrainian: "класти" },
  { base: "read", past: "read", pastParticiple: "read", ukrainian: "читати" },
  { base: "ride", past: "rode", pastParticiple: "ridden", ukrainian: "їхати" },
  { base: "ring", past: "rang", pastParticiple: "rung", ukrainian: "дзвонити" },
  {
    base: "rise",
    past: "rose",
    pastParticiple: "risen",
    ukrainian: "підніматися",
  },
  { base: "run", past: "ran", pastParticiple: "run", ukrainian: "бігти" },
  { base: "say", past: "said", pastParticiple: "said", ukrainian: "говорити" },
  { base: "see", past: "saw", pastParticiple: "seen", ukrainian: "бачити" },
  {
    base: "sell",
    past: "sold",
    pastParticiple: "sold",
    ukrainian: "продавати",
  },
  {
    base: "send",
    past: "sent",
    pastParticiple: "sent",
    ukrainian: "надсилати",
  },
  {
    base: "set",
    past: "set",
    pastParticiple: "set",
    ukrainian: "встановлювати",
  },
  {
    base: "shake",
    past: "shook",
    pastParticiple: "shaken",
    ukrainian: "трясти",
  },
  {
    base: "shine",
    past: "shone",
    pastParticiple: "shone",
    ukrainian: "світити",
  },
  {
    base: "shoot",
    past: "shot",
    pastParticiple: "shot",
    ukrainian: "стріляти",
  },
  {
    base: "show",
    past: "showed",
    pastParticiple: "shown",
    ukrainian: "показувати",
  },
  {
    base: "shut",
    past: "shut",
    pastParticiple: "shut",
    ukrainian: "закривати",
  },
  { base: "sing", past: "sang", pastParticiple: "sung", ukrainian: "співати" },
  { base: "sit", past: "sat", pastParticiple: "sat", ukrainian: "сидіти" },
  { base: "sleep", past: "slept", pastParticiple: "slept", ukrainian: "спати" },
  {
    base: "speak",
    past: "spoke",
    pastParticiple: "spoken",
    ukrainian: "говорити",
  },
  {
    base: "spend",
    past: "spent",
    pastParticiple: "spent",
    ukrainian: "витрачати",
  },
  {
    base: "stand",
    past: "stood",
    pastParticiple: "stood",
    ukrainian: "стояти",
  },
  {
    base: "steal",
    past: "stole",
    pastParticiple: "stolen",
    ukrainian: "красти",
  },
  { base: "swim", past: "swam", pastParticiple: "swum", ukrainian: "плавати" },
  { base: "take", past: "took", pastParticiple: "taken", ukrainian: "брати" },
  {
    base: "teach",
    past: "taught",
    pastParticiple: "taught",
    ukrainian: "вчити",
  },
  {
    base: "tell",
    past: "told",
    pastParticiple: "told",
    ukrainian: "розповідати",
  },
  {
    base: "think",
    past: "thought",
    pastParticiple: "thought",
    ukrainian: "думати",
  },
  {
    base: "throw",
    past: "threw",
    pastParticiple: "thrown",
    ukrainian: "кидати",
  },
  {
    base: "understand",
    past: "understood",
    pastParticiple: "understood",
    ukrainian: "розуміти",
  },
  {
    base: "wake",
    past: "woke",
    pastParticiple: "woken",
    ukrainian: "прокидатися",
  },
  { base: "wear", past: "wore", pastParticiple: "worn", ukrainian: "носити" },
  { base: "win", past: "won", pastParticiple: "won", ukrainian: "вигравати" },
  {
    base: "write",
    past: "wrote",
    pastParticiple: "written",
    ukrainian: "писати",
  },
];

export default listOfWords;

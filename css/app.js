const quotes = [
  "Believe say you fit, you don reach half way.",
  "Success no be final, failure no go kill you: Na the courage to continue na him dey count.",
  "No matter as e be, if you no stop, you go reach there.",
  "If you no shoot shot, you go miss all the time.",
  "The only way to do better work na to love wetin you dey do.",
  "I no fail, I just find 10,000 ways wey no go work.",
  "If you wan chop life belleful, tie your life to your goal, no be to people or things.",
  "The best way to predict your future na to create am.",
  "Your time dey limited, no waste am to dey live another person life.",
  "Life no be only to get good card, but to play the one wey you hold well.",
  "The biggest wealth na to dey happy with wetin you get.",
  "You go soon hear good tori from person wey you love.",
  "You get power to achieve anything wey you put for your mind.",
  "Trust yourself, others go come follow trust you too.",
  "No dey fear to take risk for life; e fit bring better thing.",
  "You go soon find the love of your life.",
  "Believe for your dreams, dem go come true.",
  "Your hard work go pay you las las",
  "Good things dey come to people wey sabi wait, but better things dey come to people wey sabi work for am.",
  "Make your light shine well well, others go follow you.",
  "One smile fit pass message wey pass one thousand words.",
  "Don't make fear hold you back; face am and overcome am.",
  "You go soon start new adventure.",
  "Live for present, but plan for future.",
  "You get strength to overcome any obstacle.",
  "Your positive mindset go attract success.",
  "One kind word fit change plenty things.",
  "You go soon dey recognized for your hard work and dedication.",
  "Every day na opportunity to make difference.",
  "Believe for yourself, others go believe for you too.",
  "You go soon achieve great success.",
  "Your hard work and dedication go pay you for the end.",
  "People love you well well, and dem appreciate your kindness.",
  "Make you let go of the past and face future.",
  "Success dey your front; all you need to do na to reach am.",
  "Your determination go lead you to greatness.",
  "Life dey full of surprises; embrace dem with open arm.",
  "You go reach greatness.",
  "You go soon find peace and happiness.",
  "Positive attitude na key to success.",
  "Your creativity go lead you to success.",
  "You get power to achieve anything wey you put for your mind.",
  "You go soon experience major breakthrough for your life.",
  "Believe for your dreams, dem go come true.",
  "You go soon find the love of your life.",
  "Your hard work go pay you for the end.",
  "Good things dey come to people wey sabi work hard.",
  "Make you let go of the past and face future.",
  "You na valuable member of society.",
  "Your intelligence and talent go lead you to success.",
  "People go appreciate your generosity.",
  "You go soon hear good tori from person wey you love.",
  "Your dreams go soon become reality.",
  "If you believe for yourself, anything fit happen.",
  "You go soon find inner peace and contentment.",
  "Positive mindset go attract success and happiness.",
  "You go reach greatness.",
  "Your creativity go lead you to success.",
  "Your hard work and dedication go pay you for the end.",
  "You go soon start new adventure.",
  "People love you well well and dem appreciate you.",
  "Your confidence go lead you to success.",
  "Put mind for your dreams, dem go come true.",
  "Your determination go lead you to greatness.",
  "You get power to achieve anything wey you put for your mind.",
  "Your hard work and dedication go pay you for the end.",
  "Every day na opportunity to make difference.",
  "People go appreciate your generosity and kindness well well.",
  "Great things dey come to people wey sabi wait and persist.",
  "You go soon achieve big breakthrough for your career.",
  "Your generosity go dey rewarded.",
  "The universe dey work for your favor.",
  "No dey fear to take bold step.",
  "You get bright future wey dey front.",
  "Your positive mindset go attract success and happiness.",
  "The best dey come.",
  "You na natural leader and influencer.",
  "Success and happiness dey your front.",
  "Your intelligence and creativity go carry you far.",
  "Good things dey come to people wey sabi work hard and believe for themselves.",
  "You go soon find your true calling for life.",
  "Your persistence go pay you for the end.",
  "People go reward you for your kindness and compassion.",
  "You go reach greatness and success.",
  "Believe say e sure  yourself and everything wey you be.",
  "You get power to achieve anything wey you put for your mind.",
  "Opportunity for success and growth dey around you.",
  "You get power to make positive impact for the world.",
  "Your life dey about to better.",
  "You na special person wey get unique gifts wey you fit offer.",
  "Your creativity and ingenuity go lead you to great things.",
  "Good luck and prosperity dey come your way.",
  "Your hard work and dedication go lead you to success and happiness.",
  "You go soon meet person wey go change your life for the better.",
  "Your dreams dey within your reach if you dey ready to work for them.",
  "You get power to overcome any challenge wey come your way.",
  "Success and abundance dey follow you.",
  "Your positive energy go attract positive results.",
  "You dey on the right track to achieve your goals.",
  "Your success go inspire and motivate others.",
  "You get endless possibilities and opportunities for your life.",
  "You get power to create the life wey you want.",
  "You fit achieve greatness wey pass your wildest dreams.",
  "Your dedication and commitment go pay you for the end.",
  "You dey surrounded by love and positive energy.",
  "Your intuition and instincts go guide you to success.",
  "You be visionary, you get power to manifest wetin you want.",
  "Your talents and handwork go lead you to great success.",
  "Your positive attitude and perseverance go lead you to success.",
  "You go soon receive recognition wey you deserve for your hard work.",
  "Your hard work and dedication go lead you to financial stability.",
  "You go soon blow",
  "Your kindness and generosity go bring you many blessings.",
  "You get power to create the life wey you want.",
  "You go soon experience significant positive change for your life.",
  "Your optimism and positivity go attract abundance and success.",
  "You get endless possibilities and opportunities for your life.",
  "You dey destined for greatness and success.",
  "Your hard work and determination go lead you to your goals.",
  "You get power to turn your dreams to reality.",
  "You go soon achieve long-awaited goal.",
  "Your creativity and ingenuity go lead you to great things.",
  "You be natural leader wey fit inspire others.",
  "Believe say you fit, and you don dey halfway there.",
  "You miss all the shots wey you no take.",
  "Success no be final, failure no be fatal: na the courage to continue dey count.",
  "The future belong to people wey believe in the beauty of their dreams.",
  "Believe for yourself and everything wey you be. Know say something dey inside you wey pass any obstacle.",
  "The only way wey you fit to do great work na to love wetin you dey do.",
  "Chase your dreams until you catch am...and then dream, catch, and dream again!",
  "no loose guard dey watch the clock; do wetin e dey do. Dey move.",
  "Dey Believe in your ability to succeed. Remember, the only limitation wey you get na the ones wey you put for yourself.",
  "The only limit wey no go make us blow tomorrow go be our doubts of today.",
  "Strive not to be a success, but rather to be of value.",
  "Believe for yourself, face your challenges, and conquer your fears. No let anybody bring you down. You fit do am.",
  "Success no be the key to happiness. Happiness na the key to success. If you love wetin you dey do, you go succeed.",
  "Believe in your dreams and e fit come true; believe in yourself and e go come true.",
  "I no fit change the direction of the wind, but I fit adjust my sails to always reach my destination.",
  "Believe say you fit, and you don dey halfway already.",
  "Success no be final, failure no be death: Na courage to continue dey count.",
  "Future belong to those wey believe for the beauty of their dreams.",
  "Believe for yourself and all wey you be. Know say something dey inside you wey pass any obstacle.",
  "The only way to do great work na to love wetin you dey do.",
  "Chase your dreams until you catch them...and then dream, catch, and dream again!",
  "No dey look clock; do wetin e dey do. Continue dey go.",
  "Believe for your ability to succeed. Remember, the only limitations wey you get na the ones wey you put for yourself.",
  "The only limit wey we fit get for our tomorrow na our doubts for today.",
  "No be to dey pursue success dey important, but to be of value.",
  "Believe for yourself, face your challenges, dig deep inside yourself to conquer fear. No ever let anybody bring you down. You don get am.",
  "Success no be key to happiness. Happiness na key to success. If you love wetin you dey do, you go successful.",
  "Believe for your dreams and dem fit come true; believe for yourself and dem go come true.",
  "I no fit change the direction of the wind, but I fit adjust my sails to always reach my destination.",
  "Believe say you fit and you don already reach halfway.",
  "Success no be how high you don climb, but how you fit make positive difference for the world.",
  "Believe for yourself and all wey you be. Know say something dey inside you wey pass any obstacle.",
  "Believe for the power of your dreams and the universe go help you achieve dem.",
  "The biggest adventure wey you fit carry go na to live the life of your dreams.",
  "You no ever too old to set another goal or to dream new dream.",
  "Your time dey limited, no waste am to live another person life.",
  "Believe for your dreams, no matter how impossible dem you think say dem be.",
  "No ever give up on wetin you really want to do. The person wey get big dreams dey more powerful pass the one wey get all the facts.",
  "Believe for yourself and all wey you be. Know say something dey inside you wey pass any obstacle.",
  "Believe say you fit and you don already reach halfway.",
  "No dey wait for opportunity. Create am.",
  "The only way to do great work na to love wetin you dey do.",
  "Believe for yourself and all wey you be. Know say something dey inside you wey pass any obstacle.",
  "No matter how the road be, if you get mind, you go reach your destination.",
  "No be where you start, na where you finish.",
"E no dey too late to start to pursue your dreams.",
"Every disappointment na blessing in disguise.",
"No let fear hold you back; gather courage, face your fears and conquer them.",
"The only limit to your success na the limit wey you put for your own mind.",
"If you fit see am for your mind, you fit hold am for your hand.",
"E get as you be and e get as you take carry yourself. So carry yourself with confidence and believe in yourself.",
"No let anybody tell you say you no fit make am. Na only you fit limit yourself.",
"Every day na opportunity to do better and be better.",
"No matter how small your steps be, as long as you dey move forward, you go reach your destination.",
"No be how many times you fall down matter, na how many times you stand up and keep moving.",
"The only way to do great work na to love wetin you dey do.",
"You be special person with unique talents and abilities. Make you use am to achieve greatness.",
"Believe in yourself and all wey you fit do. No dey give up, na small-small you go reach your destination.",
"No matter how small your progress be, keep moving forward, success go meet you for road.",
"Na courage dey make ordinary person turn to extraordinary.",
"No let the fear of failure stop you from pursuing your dreams.",
"If plan A no work, na to go plan B, or C, or D, or E...",
"No let anybody tell you say you no fit achieve greatness. You get the power to make am happen.",
"Every setback na chance to come back stronger.",
"Na your mindset dey determine your success.",
"E no matter how the road long, with determination and hard work, you go reach your destination.",
"Believe for yourself and you go conquer the world.",
"No matter how impossible the dream be, with hard work and perseverance, e fit become reality.",
"No be who get leg pass, na who sabi use am well.",
"Believe say you go succeed and e go come true.",
"No let failure define you. Use am as stepping stone to greater success.",
"Na small-small steps dey lead to big achievements.",
"No let anybody make you feel say your dreams dey too big. Dey big for a reason.",
"Believe say everything wey you need to succeed dey inside you.",
"No matter how the rain dey beat you, you fit always find shelter.",
"Na determination dey make small fish become big fish.",
"E no matter how many times people write you off, as long as you believe for yourself, you go always bounce back.",
"No let anybody make you feel say you no fit achieve your dreams because of your background.",
"Believe say you deserve the best, and you go attract the best.",
"No matter how hard the work be, with dedication and passion, e go become play.",
"Na one step at a time dey take person to the top.",
"Believe say you fit overcome any challenge wey come your way.",
"No matter how many times you don fall, na how many times you stand back up matter pass.",
"Na the way you see yourself na him others go see you.",
"No matter how bad the situation be, with determination and positive mindset, e go become better.",
"No let anybody talk you out of your dreams. Keep chasing am.",
"Believe say your destiny dey your hands and you go create am.",
"No matter how dark the night be, with hope and faith, morning go always come.",
"No let anybody make you feel say you no fit succeed because of your age.",
"Na the people wey believe for you go help you achieve your dreams.",
"Believe say you go make am, and nothing go fit stop you.",
"No matter how rough the road be, keep moving forward, you go reach your destination.",
"Na the people wey no give up na him achieve greatness.",
"Believe say you deserve success, and you go attract am.",
"No matter how long the journey be, with determination and focus, you go reach your destination.",
"No let anybody make you feel say you no fit succeed because of your gender.",
"Na who get the willpower na him go achieve greatness.",
"Believe say you go get everything wey you want for life, and you go get am.",
"No matter how the market scarce, with determination and smart work, you go sell your market.",
"E no too late to start to dey make positive changes for your life.",
"No matter how impossible the dream be, with belief and action, e fit become possible.",
"No let anybody make you feel say you no fit make am because of your race.",
"Believe say you deserve love, happiness, and success, and you go attract dem.",
"No matter how tough the climb be, with faith and perseverance, you go make am to the top.",
"Life na like bicycle, if you no dey move, you go fall.",
"No be who first start race dey win am, na who run am pass.",
"No allow fear hold you back, face am and conquer am.",
"Success no be magic, na hard work and determination.",
"Every problem get solution, na for you to find am.",
"If you fit dream am, you fit achieve am.",
"No dey compare yourself with anybody, you get your own path.",
"Believe in yourself, others go follow you.",
"Na small small win big race.",
"If opportunity no dey come, create am.",
"Your life dey your hand, shape am.",
"No let negative people control your life.",
"Believe say you fit do am, you go do am.",
"No give up on your dreams, even when people doubt you.",
"E no go easy, but e go worth am.",
"Your hard work go pay you, just dey patient.",
"Life no dey balance, na you go balance am.",
"Small small, you go climb the ladder of success.",
"If one door close, another go open.",
"Your mindset go determine your success.",
"Believe in your potential, na the first step to success.",
"Don't be afraid to try new things, na so success dey come.",
"E fit no easy, but e no impossible.",
"If you no believe in yourself, who go believe for you?",
"No be by mouth, na by action.",
"You get the power to shape your life.",
"Believe say you deserve good things for life.",
"No let small small challenges make you give up.",
"Na through perseverance you go reach your destination.",
"Never underestimate your abilities.",
"Take risks, sometimes na the only way to succeed.",
"If you no make mistake, you no go learn.",
"Learn from your past, but no let am define your future.",
"Your attitude go determine your altitude.",
"No be who first start journey go reach first.",
"No be every time you go get support from people, believe in yourself.",
"Success dey sweet, but the journey fit dey hard.",
"No let obstacles make you forget your goals.",
"Every experience dey teach you something.",
"Your journey no go be the same as anybody own.",
"Your destiny dey your hand, shape am.",
"You fit achieve anything you want for life.",
"If you believe am, you fit achieve am.",
"Believe say you deserve the best, and work for am.",
"Your hard work go pay you, no matter how long e take.",
"E no matter how many times you fall, na how many times you stand up.",
"The future dey bright for you, just dey believe.",
"You fit inspire others with your success.",
"No dey compare your beginning with somebody else middle.",
"Keep moving, no dey look back."




  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = quote;
  }
  
  function saveQuote() {
    // Get the container element
    const container = document.querySelector(".container");
  
    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  
    // Get the canvas context
    const context = canvas.getContext("2d");
  
    // Draw the container onto the canvas
    context.drawWindow(window, container.offsetLeft, container.offsetTop, container.offsetWidth, container.offsetHeight, "rgb(255,255,255)");
  
    // Convert the canvas to a base64 encoded image URL
    const imageURL = canvas.toDataURL("image/jpeg");
  
    // Create an anchor tag and set its attributes
    const link = document.createElement("a");
    link.download = "quote.jpg";
    link.href = imageURL;
  
    // Simulate a click on the anchor tag to initiate the download
    link.click();
  }

  function shareTextOnTwitter() {
    const textToShare = document.getElementById('quote').innerText;
    if (textToShare.length === 0) {
      alert("Please select some text to share.");
      return;
    }
  
    const tweetText = encodeURIComponent(`"${textToShare}"`);
    const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
  
    window.open(url, '_blank', 'width=575,height=400,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no');
  }

  const shareButton = document.getElementById('share-btn');
shareButton.addEventListener('click', shareTextOnTwitter);
  // Usage:
  // Call the function shareTextOnTwitter() when a button is clicked or an event is triggered
  
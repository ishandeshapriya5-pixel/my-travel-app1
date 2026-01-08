// භාෂා පරිවර්තන දත්ත
const translations = {
    'si': { 
        title: "අපේ ලංකා Guide 🇱🇰", search: "ස්ථානයක් සොයන්න...", view: "විස්තර බලන්න", 
        n1: "හදිසි ඇමතුම්", n2: "මුදල් ඒකක", n3: "කාලගුණය", t1: "හදිසි ඇමතුම් සේවා", 
        t2: "මුදල් පරිවර්තකය", t3: "සජීවී කාලගුණය 🌤️", map: "Google Map එකෙන් බලන්න 📍",
        c0: "සියල්ල", c1: "🏛️ සංස්කෘතික", c2: "⛰️ සොබාදහම", c3: "🏖️ වෙරළ", c4: "🐘 වනජීවී",
        loc: "ස්ථානය:", about: "ස්ථානය ගැන:", how: "ලඟා වන ආකාරය:", contact: "ප්‍රදේශයේ හදිසි අංක 📞",
        loading: "පූරණය වෙමින් පවතී..."
    },
    'en': { 
        title: "Visit Sri Lanka 🇱🇰", search: "Search locations...", view: "View Details", 
        n1: "Emergency", n2: "Currency", n3: "Weather", t1: "Emergency Services", 
        t2: "Currency Converter", t3: "Live Weather 🌤️", map: "View on Google Map 📍",
        c0: "All", c1: "🏛️ Culture", c2: "⛰️ Nature", c3: "🏖️ Beach", c4: "🐘 Wildlife",
        loc: "Location:", about: "About:", how: "How to reach:", contact: "Regional Emergency 📞",
        loading: "Loading..."
    }
};

const locations = [
    // --- මධ්‍යම පළාත (Central Province) ---
    { 
        id: 1, cat: "culture", 
        name_si: "සීගිරිය", name_en: "Sigiriya", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/20563456/pexels-photo-20563456.jpeg", 
        desc_si: "සීගිරිය යනු පස්වන සියවසේ කාශ්‍යප රජු විසින් ඉදිකරන ලද ලෝක උරුම අඩවියකි. මීටර් 200ක් පමණ උසැති පර්වතය මත මාලිගා සංකීර්ණයක් පවතී.",
        desc_en: "Sigiriya is a UNESCO World Heritage site built by King Kasyapa. It's a massive rock fortress rising 200 meters high.", 
        reach_si: "දඹුල්ල සිට බස් රථයකින් හෝ කුලී රථයකින් පැමිණිය හැක.", 
        reach_en: "Reach via bus or taxi from Dambulla town.",
        fee_si: "රු. 100", fee_en: "Rs. 100", best_si: "ජනවාරි - අප්‍රේල්", best_en: "Jan - April", do_si: "කඳු නැගීම", do_en: "Climbing",
        lat: 7.9570, lon: 80.7603, police: "066-2284722" 
    },
    { 
        id: 2, cat: "culture", 
        name_si: "ශ්‍රී දළදා මාලිගාව", name_en: "Temple of the Tooth", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/11054359/pexels-photo-11054359.jpeg", 
        desc_si: "බුදුරජාණන් වහන්සේගේ ශ්‍රී දන්ත ධාතූන් වහන්සේ වැඩසිටින අති පූජනීය සිද්ධස්ථානයයි.",
        desc_en: "The sacred temple that houses the relic of the tooth of the Buddha.", 
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ බස් රථයෙන් මහනුවර නගරයට පැමිණිය හැක.", 
        reach_en: "Can be reached by train or bus from Colombo to Kandy city.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම කාලයක", best_en: "Anytime", do_si: "වන්දනා කිරීම", do_en: "Worship",
        lat: 7.2936, lon: 80.6413, police: "081-2222222" 
    },
    { 
        id: 3, cat: "nature", 
        name_si: "ඇල්ල", name_en: "Ella", 
        district_si: "බදුල්ල", district_en: "Badulla", 
        img: "https://images.pexels.com/photos/17260580/pexels-photo-17260580.jpeg", 
        desc_si: "ආරුක්කු නවයේ පාලම සහ සුන්දර කඳු පන්ති නිසා දෙස් විදෙස් සංචාරකයන් අතර ඉතා ජනප්‍රියයි.",
        desc_en: "Famous for Nine Arch Bridge and stunning mountain views, a backpacker paradise.", 
        reach_si: "නුවර සිට ඇල්ල දක්වා දිවෙන සුන්දර දුම්රිය ගමන නිර්දේශ කෙරේ.", 
        reach_en: "The scenic train ride from Kandy to Ella is highly recommended.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "දෙසැම්බර් - මාර්තු", best_en: "Dec - March", do_si: "කඳු නැගීම", do_en: "Hiking",
        lat: 6.8715, lon: 81.0450, police: "057-2228522" 
    },

    // --- දකුණු පළාත (Southern Province) ---
    { 
        id: 4, cat: "beach", 
        name_si: "මිරිස්ස", name_en: "Mirissa", 
        district_si: "මාතර", district_en: "Matara", 
        img: "https://images.pexels.com/photos/10041267/pexels-photo-10041267.jpeg", 
        desc_si: "නිල් පැහැති මුහුද සහ තල්මසුන් නැරඹීම සඳහා ලොව ප්‍රසිද්ධ වෙරළ තීරයකි.",
        desc_en: "World-famous beach for whale watching and its iconic Parrot Rock.", 
        reach_si: "දක්ෂිණ අධිවේගී මාර්ගය හරහා පැය 2කින් පමණ ළඟා විය හැක.", 
        reach_en: "Accessible within 2 hours via the Southern Expressway.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "නොවැම්බර් - අප්‍රේල්", best_en: "Nov - April", do_si: "සර්ෆින්", do_en: "Surfing",
        lat: 5.9483, lon: 80.4716, police: "041-2250222" 
    },
    { 
        id: 5, cat: "wild", 
        name_si: "යාල ජාතික උද්‍යානය", name_en: "Yala National Park", 
        district_si: "තිස්සමහාරාමය", district_en: "Tissamaharama", 
        img: "https://images.pexels.com/photos/5699105/pexels-photo-5699105.jpeg", 
        desc_si: "ලොව වැඩිම දිවියන් සාන්ද්‍රණයක් සහිත වනජීවී උද්‍යානයකි.",
        desc_en: "Home to the highest density of leopards in the world.", 
        reach_si: "තිස්සමහාරාම නගරයේ සිට ජීප් රථ මගින් ඇතුළු විය හැක.", 
        reach_en: "Entrance via safari jeeps from Tissamaharama town.",
        fee_si: "රු. 500", fee_en: "Rs. 500", best_si: "පෙබරවාරි - ජුනි", best_en: "Feb - June", do_si: "සෆාරි", do_en: "Safari",
        lat: 6.3683, lon: 81.5204, police: "047-2220150" 
    },

    // --- උතුරු මැද පළාත (North Central) ---
    { 
        id: 6, cat: "culture", 
        name_si: "අනුරාධපුරය", name_en: "Anuradhapura", 
        district_si: "අනුරාධපුරය", district_en: "Anuradhapura", 
        img: "https://images.pexels.com/photos/15317377/pexels-photo-15317377.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ ප්‍රථම අගනගරය සහ යුනෙස්කෝ ලෝක උරුම අඩවියකි.",
        desc_en: "The first capital of Sri Lanka and a UNESCO World Heritage site.", 
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ බස් රථයෙන් සෘජුව පැමිණිය හැක.", 
        reach_en: "Direct trains and buses available from Colombo.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම කාලයක", best_en: "Anytime", do_si: "වන්දනා මාන", do_en: "Pilgrimage",
        lat: 8.3114, lon: 80.4037, police: "025-2222222" 
    },

    // --- නැගෙනහිර පළාත (Eastern Province) ---
    { 
        id: 7, cat: "beach", 
        name_si: "නිලාවෙලි වෙරළ", name_en: "Nilaveli Beach", 
        district_si: "ත්‍රිකුණාමලය", district_en: "Trincomalee", 
        img: "https://images.pexels.com/photos/12530138/pexels-photo-12530138.jpeg", 
        desc_si: "පිරිසිදු වැලි සහිත නොගැඹුරු මුහුදක් පවතින සුන්දර වෙරළ තීරයකි.",
        desc_en: "Crystal clear water and white sandy beaches, ideal for relaxation.", 
        reach_si: "ත්‍රිකුණාමලය නගරයේ සිට කි.මී. 15ක් පමණ දුරින් පිහිටා ඇත.", 
        reach_en: "Located about 15km away from Trincomalee town.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "මැයි - සැප්තැම්බර්", best_en: "May - Sept", do_si: "පිහිනීම", do_en: "Swimming",
        lat: 8.6882, lon: 81.1895, police: "026-2222222" 
    }
];

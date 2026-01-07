// භාෂා පරිවර්තන දත්ත (පැරණි දත්ත එලෙසම පවතී)
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
        name_si: "මහනුවර", name_en: "Kandy", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/11054359/pexels-photo-11054359.jpeg", 
        desc_si: "ශ්‍රී දළදා මාලිගාව පිහිටි පූජනීය නගරයකි. සුන්දර වැව සහ සංස්කෘතික උරුමයන්ගෙන් පොහොසත්ය.",
        desc_en: "The sacred city home to the Temple of the Tooth Relic, beautiful lake, and rich cultural heritage.", 
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ බස් රථයෙන් පැමිණිය හැක.", 
        reach_en: "Accessible by train or bus from Colombo Fort.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම කාලයක", best_en: "Anytime", do_si: "සංස්කෘතික නැරඹුම්", do_en: "Culture Tour",
        lat: 7.2906, lon: 80.6337, police: "081-2222222" 
    },
    { 
        id: 3, cat: "beach", 
        name_si: "හිකඩුව", name_en: "Hikkaduwa", 
        district_si: "ගාල්ල", district_en: "Galle", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "කොරල් පර සහ සර්ෆින් ක්‍රීඩාව සඳහා ප්‍රසිද්ධ දකුණු වෙරළ තීරයේ සුන්දර නගරයකි.",
        desc_en: "Famous for coral sanctuary and surfing on the vibrant southern coast.", 
        reach_si: "කොළඹ සිට දක්ෂිණ අධිවේගී මාර්ගය හෝ මුහුදු බඩ දුම්රිය මාර්ගයෙන් පැමිණිය හැක.", 
        reach_en: "Reach via Southern Expressway or the coastal train line.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "නොවැම්බර් - අප්‍රේල්", best_en: "Nov - April", do_si: "ජල ක්‍රීඩා", do_en: "Water Sports",
        lat: 6.1395, lon: 80.1058, police: "091-2277222" 
    },
    {
        id: 4, cat: "nature",
        name_si: "නුවරඑළිය", name_en: "Nuwara Eliya",
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya",
        img: "https://images.pexels.com/photos/15113401/pexels-photo-15113401.jpeg",
        desc_si: "ලංකාවේ කුඩා එංගලන්තය ලෙස හඳුන්වන සීතල දේශගුණයක් සහ තේ වතු සහිත සුන්දර නගරයකි.",
        desc_en: "Known as Little England, featuring a cool climate, tea plantations, and scenic landscapes.",
        reach_si: "කොළඹ සිට බස් රථයකින් හෝ නානුඔය දක්වා දුම්රියෙන් පැමිණිය හැක.",
        reach_en: "Take a bus from Colombo or a train to Nanu Oya station.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "අප්‍රේල් - ජුනි", best_en: "April - June", do_si: "විනෝද චාරිකා", do_en: "Sightseeing",
        lat: 6.9497, lon: 80.7891, police: "052-2222222"
    },
    {
        id: 5, cat: "nature",
        name_si: "ඇල්ල", name_en: "Ella",
        district_si: "බදුල්ල", district_en: "Badulla",
        img: "https://images.pexels.com/photos/17260580/pexels-photo-17260580.jpeg",
        desc_si: "සුප්‍රසිද්ධ ආරුක්කු නවයේ පාලම සහ කුඩා ශ්‍රී පාදය පිහිටි කඳුකරයේ ඉතා ජනප්‍රිය සංචාරක ස්ථානයකි.",
        desc_en: "Home to the Nine Arch Bridge and Little Adam's Peak, a must-visit mountain village.",
        reach_si: "නුවර සිට ලෝකයේ සුන්දරම දුම්රිය ගමනක් හරහා ඇල්ලට පැමිණිය හැක.",
        reach_en: "Take the scenic train ride from Kandy to Ella station.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ජනවාරි - අගෝස්තු", best_en: "Jan - August", do_si: "ඇවිදීම", do_en: "Hiking",
        lat: 6.8715, lon: 81.0450, police: "057-2228522"
    },
    {
        id: 6, cat: "wild",
        name_si: "යාල ජාතික උද්‍යානය", name_en: "Yala National Park",
        district_si: "තිස්සමහාරාමය", district_en: "Tissamaharama",
        img: "https://images.pexels.com/photos/5699105/pexels-photo-5699105.jpeg",
        desc_si: "දිවියන් සහ වන අලින් බහුල ලංකාවේ වැඩිම සංචාරක ආකර්ෂණයක් ඇති ජාතික උද්‍යානයයි.",
        desc_en: "The most visited national park, famous for leopards, elephants, and diverse wildlife.",
        reach_si: "තිස්සමහාරාම නගරයට පැමිණ එතැන් සිට සෆාරි ජීප් රථයක් මගින් ඇතුළු විය හැක.",
        reach_en: "Reach Tissamaharama and book a safari jeep to explore the park.",
        fee_si: "රු. 250", fee_en: "Rs. 250", best_si: "පෙබරවාරි - ජුනි", best_en: "Feb - June", do_si: "වනජීවී සෆාරි", do_en: "Wildlife Safari",
        lat: 6.3683, lon: 81.5204, police: "047-2220150"
    },
    {
        id: 7, cat: "culture",
        name_si: "අනුරාධපුරය", name_en: "Anuradhapura",
        district_si: "අනුරාධපුරය", district_en: "Anuradhapura",
        img: "https://images.pexels.com/photos/15317377/pexels-photo-15317377.jpeg",
        desc_si: "ලංකාවේ ප්‍රථම අගනගරයයි. මෙහි මහා ස්තූප සහ ඓතිහාසික නටබුන් රාශියක් දැකගත හැක.",
        desc_en: "The first capital of Sri Lanka, known for massive stupas and ancient ruins.",
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ බස් රථයෙන් සෘජුව පැමිණිය හැක.",
        reach_en: "Direct trains and buses available from Colombo.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම කාලයක", best_en: "Anytime", do_si: "වන්දනා මාන", do_en: "Pilgrimage",
        lat: 8.3114, lon: 80.4037, police: "025-2222222"
    },
    {
        id: 8, cat: "beach",
        name_si: "මිරිස්ස", name_en: "Mirissa",
        district_si: "මාතර", district_en: "Matara",
        img: "https://images.pexels.com/photos/10041267/pexels-photo-10041267.jpeg",
        desc_si: "තල්මසුන් නැරඹීමට සහ සුන්දර හිරු බැසීම නැරඹීමට ඇති දකුණු වෙරළේ නිස්කලංක ස්ථානයකි.",
        desc_en: "A peaceful spot on the south coast famous for whale watching and beautiful sunsets.",
        reach_si: "මාතර බස් රථයකින් හෝ දක්ෂිණ දුම්රියෙන් පැමිණිය හැක.",
        reach_en: "Accessible via Matara bound buses or the coastal train.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "දෙසැම්බර් - මාර්තු", best_en: "Dec - March", do_si: "තල්මසුන් නැරඹීම", do_en: "Whale Watching",
        lat: 5.9483, lon: 80.4716, police: "041-2250222"
    }
];

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

// සංචාරක ස්ථාන දත්ත (මෙහි ඔබට ඕනෑම ස්ථාන ප්‍රමාණයක් එක් කළ හැක)
const locations = [
    { 
        id: 1, cat: "culture", 
        name_si: "සීගිරිය", name_en: "Sigiriya", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/20563456/pexels-photo-20563456.jpeg", 
        desc_si: "ඓතිහාසික අහස් මාලිගය සහ ලෝක උරුමයකි.", desc_en: "Ancient Sky Palace and a World Heritage site.", 
        reach_si: "දඹුල්ල නගරයේ සිට බස් රථයකින් හෝ කුලී රථයකින් පැමිණිය හැක.", reach_en: "Can be reached by bus or taxi from Dambulla town.", 
        lat: 7.9570, lon: 80.7603, police: "066-2284722" 
    },
    { 
        id: 2, cat: "culture", 
        name_si: "මහනුවර", name_en: "Kandy", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/11054359/pexels-photo-11054359.jpeg", 
        desc_si: "ශ්‍රී දළදා මාලිගාව පිහිටි පූජනීය නගරය.", desc_en: "The sacred city home to the Temple of the Tooth.", 
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ බස් රථයෙන් ළඟා විය හැක.", reach_en: "Accessible by train or bus from Colombo.", 
        lat: 7.2906, lon: 80.6337, police: "081-2222222" 
    },
    { 
        id: 3, cat: "beach", 
        name_si: "හිකඩුව", name_en: "Hikkaduwa", 
        district_si: "ගාල්ල", district_en: "Galle", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "කොරල් පර සහ මුහුදු ක්‍රීඩා සඳහා ප්‍රසිද්ධ වෙරළ තීරය.", desc_en: "Famous beach for coral reefs and water sports.", 
        reach_si: "ගාලු පාර ඔස්සේ බස් රථයෙන් හෝ දුම්රියෙන්.", reach_en: "By bus or train via Galle Road.", 
        lat: 6.1395, lon: 80.1058, police: "091-2277222" 
    },
        { 
        id: 4, cat: "nature", 
        name_si: "නුවරඑළිය", name_en: "Nuwara Eliya", 
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya", 
        img: "https://images.pexels.com/photos/11252119/pexels-photo-11252119.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ සිසිල්ම නගරය වන මෙය 'පුංචි එංගලන්තය' ලෙසද හැඳින්වේ.", desc_en: "The coolest city in Sri Lanka, also known as 'Little England'.", 
        reach_si: "නනුවඔය දුම්රිය ස්ථානය හරහා හෝ බස් රථයකින්.", reach_en: "Via Nanu Oya railway station or by bus.", 
        lat: 6.9497, lon: 80.7891, police: "052-2222222" 
    },
    { 
        id: 5, cat: "nature", 
        name_si: "ඇල්ල", name_en: "Ella", 
        district_si: "බදුල්ල", district_en: "Badulla", 
        img: "https://images.pexels.com/photos/13442111/pexels-photo-13442111.jpeg", 
        desc_si: "සුන්දර දිය ඇලි සහ ආරුක්කු නවයේ පාලම මෙහි පිහිටා ඇත.", desc_en: "Beautiful waterfalls and Nine Arch Bridge are located here.", 
        reach_si: "උඩරට දුම්රිය මාර්ගය හරහා පැමිණීම වඩාත් සුන්දර වේ.", reach_en: "The Upcountry railway line is the most scenic route.", 
        lat: 6.8744, lon: 81.0439, police: "057-2222222" 
    },
    { 
        id: 6, cat: "wild", 
        name_si: "යාල ජාතික උද්‍යානය", name_en: "Yala National Park", 
        district_si: "හම්බන්තොට", district_en: "Hambantota", 
        img: "https://images.pexels.com/photos/12027236/pexels-photo-12027236.jpeg", 
        desc_si: "දිවියන් සහ අලි ඇතුන් නැරඹීමට ලොව ප්‍රසිද්ධ උද්‍යානයකි.", desc_en: "World-famous park for spotting leopards and elephants.", 
        reach_si: "තිස්සමහාරාම නගරයේ සිට සෆාරි රථයකින්.", reach_en: "Via a safari jeep from Tissamaharama town.", 
        lat: 6.3911, lon: 81.4870, police: "047-2222222" 
    },
    { 
        id: 7, cat: "culture", 
        name_si: "අනුරාධපුරය", name_en: "Anuradhapura", 
        district_si: "අනුරාධපුරය", district_en: "Anuradhapura", 
        img: "https://images.pexels.com/photos/20563456/pexels-photo-20563456.jpeg", 
        desc_si: "පැරණිතම රාජධානිය සහ බෞද්ධ පූජනීය නගරය.", desc_en: "The oldest kingdom and sacred Buddhist city.", 
        reach_si: "දුම්රියෙන් හෝ බස් රථයෙන් කොළඹ සිට සෘජුව පැමිණිය හැක.", reach_en: "Direct access from Colombo by train or bus.", 
        lat: 8.3122, lon: 80.4131, police: "025-2222222" 
    },
    { 
        id: 8, cat: "culture", 
        name_si: "පොළොන්නරුව", name_en: "Polonnaruwa", 
        district_si: "පොළොන්නරුව", district_en: "Polonnaruwa", 
        img: "https://images.pexels.com/photos/11054359/pexels-photo-11054359.jpeg", 
        desc_si: "දෙවන පැරණිතම රාජධානිය සහ ඓතිහාසික නටබුන් සහිත නගරය.", desc_en: "Second oldest kingdom with historical ruins.", 
        reach_si: "බස් රථයෙන් හෝ දුම්රියෙන් ළඟා විය හැක.", reach_en: "Accessible via bus or train.", 
        lat: 7.9403, lon: 81.0188, police: "027-2222222" 
    },
    { 
        id: 9, cat: "culture", 
        name_si: "යාපනය", name_en: "Jaffna", 
        district_si: "යාපනය", district_en: "Jaffna", 
        img: "https://images.pexels.com/photos/7311181/pexels-photo-7311181.jpeg", 
        desc_si: "සුවිශේෂී සංස්කෘතියක් සහිත ශ්‍රီ ලංකාවේ උතුරු අගනගරය.", desc_en: "Northern capital of Sri Lanka with a unique culture.", 
        reach_si: "යාල් දේවි දුම්රියෙන් හෝ බස් රථයෙන් පැමිණිය හැක.", reach_en: "Accessible via Yal Devi train or bus.", 
        lat: 9.6615, lon: 80.0255, police: "021-2222222" 
    },
    { 
        id: 10, cat: "beach", 
        name_si: "මිරිස්ස", name_en: "Mirissa", 
        district_si: "මාතර", district_en: "Matara", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "තල්මසුන් නැරඹීම සඳහා ලොව ප්‍රසිද්ධ වෙරළකි.", desc_en: "World-famous beach for whale watching.", 
        reach_si: "ගාල්ලේ සිට බස් රථයකින් විනාඩි 45 කින් ළඟා විය හැක.", reach_en: "45 minutes from Galle by bus.", 
        lat: 5.9483, lon: 80.4533, police: "041-2222222" 
    },
    { 
        id: 11, cat: "beach", 
        name_si: "නිලාවේලි", name_en: "Nilaveli", 
        district_si: "ත්‍රිකුණාමලය", district_en: "Trincomalee", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "සුදු වැලි සහිත ඉතාමත් පිරිසිදු සහ සුන්දර වෙරළ තීරයකි.", desc_en: "A pristine beach with white sand and clear water.", 
        reach_si: "ත්‍රිකුණාමලය නගරයේ සිට බස් රථයකින් හෝ ත්‍රිරෝද රථයකින්.", reach_en: "By bus or tuk-tuk from Trincomalee town.", 
        lat: 8.6853, lon: 81.1897, police: "026-2222222" 
    },
    { 
        id: 12, cat: "wild", 
        name_si: "උඩවලව", name_en: "Udawalawe", 
        district_si: "රත්නපුර", district_en: "Ratnapura", 
        img: "https://images.pexels.com/photos/12027236/pexels-photo-12027236.jpeg", 
        desc_si: "අලි ඇතුන් බහුලව දැකගත හැකි වනජීවී උද්‍යානයකි.", desc_en: "A wildlife park famous for large herds of elephants.", 
        reach_si: "ඇඹිලිපිටිය හරහා බස් රථයෙන් හෝ කුලී රථයකින්.", reach_en: "Via Embilipitiya by bus or taxi.", 
        lat: 6.4741, lon: 80.8988, police: "047-2233222" 
    },
    { 
        id: 13, cat: "nature", 
        name_si: "සිංහරාජය", name_en: "Sinharaja", 
        district_si: "රත්නපුර", district_en: "Ratnapura", 
        img: "https://images.pexels.com/photos/13442111/pexels-photo-13442111.jpeg", 
        desc_si: "ලෝක උරුමයක් බඳු වූ ශ්‍රී ලංකාවේ ප්‍රධානතම වැසි වනාන්තරය.", desc_en: "The primary rainforest of Sri Lanka and a World Heritage site.", 
        reach_si: "කලවාන හෝ දෙනියාය නගර හරහා ළඟා විය හැක.", reach_en: "Accessible via Kalawana or Deniyaya towns.", 
        lat: 6.3989, lon: 80.4181, police: "041-2222222" 
    }

    // මින් ඉදිරියට තවත් ස්ථාන මේ ආකාරයටම (Comma එකක් දමා) පහළට ඇතුළත් කරන්න...
];

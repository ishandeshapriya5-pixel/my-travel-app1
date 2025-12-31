const translations = {
    'si': { 
        title: "අපේ ලංකා Guide 🇱🇰", search: "ස්ථානයක් සොයන්න...", view: "විස්තර බලන්න", 
        n1: "හදිසි ඇමතුම්", n2: "මුදල් ඒකක", n3: "කාලගුණය", t1: "හදිසි ඇමතුම් සේවා", 
        t2: "මුදල් පරිවර්තකය", t3: "සජීවී කාලගුණය 🌤️", map: "Google Map එකෙන් බලන්න 📍",
        loc: "ස්ථානය:", about: "ස්ථානය ගැන:", how: "ලඟා වන ආකාරය:", contact: "ප්‍රදේශයේ හදිසි අංක 📞"
    },
    'en': { 
        title: "Visit Sri Lanka 🇱🇰", search: "Search locations...", view: "View Details", 
        n1: "Emergency", n2: "Currency", n3: "Weather", t1: "Emergency Services", 
        t2: "Currency Converter", t3: "Live Weather 🌤️", map: "View on Google Map 📍",
        loc: "Location:", about: "About:", how: "How to reach:", contact: "Regional Emergency 📞"
    }
};

const locations = [
    { 
        id: 1, cat: "culture", 
        name_si: "සීගිරිය", name_en: "Sigiriya", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/20563456/pexels-photo-20563456.jpeg", 
        desc_si: "සීගිරිය යනු පස්වන සියවසේ කාශ්‍යප රජු විසින් ඉදිකරන ලද ලෝක උරුම අඩවියකි. මෙහි කැටපත් පවුර සහ බිතුසිතුවම් ඉතා ප්‍රසිද්ධය.",
        desc_en: "Sigiriya is a UNESCO World Heritage site built by King Kasyapa in the 5th century. Famous for its mirror wall and frescoes.", 
        reach_si: "කොළඹ සිට දඹුල්ල හරහා බස් රථයකින් හෝ දුම්රියෙන් හබරණ දක්වා පැමිණිය හැක.", 
        reach_en: "Take a bus to Dambulla or a train to Habarana from Colombo.",
        fee_si: "රු. 100", fee_en: "Rs. 100", best_si: "ජනවාරි - අප්‍රේල්", best_en: "Jan - April", do_si: "කඳු නැගීම", do_en: "Climbing",
        lat: 7.9570, lon: 80.7603, police: "066-2284722" 
    },
    { 
        id: 2, cat: "culture", 
        name_si: "මහනුවර", name_en: "Kandy", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/11054359/pexels-photo-11054359.jpeg", 
        desc_si: "දළදා මාලිගාව පිහිටි පූජනීය නගරයකි.",
        desc_en: "Home to the Temple of the Sacred Tooth Relic.", 
        reach_si: "කොළඹ සිට දුම්රියෙන් හෝ නුවර පාරේ බස් රථ මගින් පැය 3-4 කින් ළඟා විය හැක.", 
        reach_en: "3-4 hours by train or bus from Colombo via the Kandy road.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම කාලයක", best_en: "Anytime", do_si: "මාලිගාව නැරඹීම", do_en: "Temple Visit",
        lat: 7.2906, lon: 80.6337, police: "081-2222222" 
    },
    { 
        id: 3, cat: "beach", 
        name_si: "හිකඩුව", name_en: "Hikkaduwa", 
        district_si: "ගාල්ල", district_en: "Galle", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "කොරල් පර සහ වෙරළ තීරය සඳහා ප්‍රසිද්ධය.",
        desc_en: "Famous for coral reefs and beaches.", 
        reach_si: "දක්ෂිණ අධිවේගී මාර්ගය හරහා හෝ මුහුදුබඩ දුම්රිය මාර්ගයෙන් ළඟා විය හැක.", 
        reach_en: "Reach via Southern Expressway or coastal railway line.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "නොවැම්බර් - අප්‍රේල්", best_en: "Nov - April", do_si: "ජල ක්‍රීඩා", do_en: "Water Sports",
        lat: 6.1395, lon: 80.1058, police: "091-2277222" 
    }
];

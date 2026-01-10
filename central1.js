// central1.js - මධ්‍යම පළාත (ස්ථාන 01 - 20)

locations.push(
    { 
        id: 201, cat: "culture", 
        name_si: "ශ්‍රී දළදා මාළිගාව", name_en: "Temple of the Sacred Tooth Relic", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/10105081/pexels-photo-10105081.jpeg", 
        desc_si: "බුදුරජාණන් වහන්සේගේ ශ්‍රී දන්ත ධාතූන් වහන්සේ වැඩසිටින ශ්‍රී ලංකාවේ පූජනීයම ස්ථානයයි.",
        desc_en: "The most sacred Buddhist temple in Sri Lanka, housing the relic of the tooth of the Buddha.", 
        reach_si: "මහනුවර නගර මධ්‍යයේ පිහිටා ඇත.", reach_en: "Located in the heart of Kandy city.",
        fee_si: "රු. 1000 (විදේශිකයින්ට වෙනස් වේ)", fee_en: "LKR 1000 (Differs for foreigners)", best_si: "උදෑසන පූජාව", best_en: "Morning ceremony", 
        do_si: "වන්දනා කිරීම, වාස්තු විද්‍යාව නැරඹීම", do_en: "Worship, Explore architecture", lat: 7.2936, lon: 80.6413, police: "081-2222222" 
    },
    { 
        id: 202, cat: "nature", 
        name_si: "පේරාදෙණිය උද්භිද උද්‍යානය", name_en: "Royal Botanical Gardens", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/580900/pexels-photo-580900.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ විශාලතම සහ අලංකාරවත්ම උද්භිද උද්‍යානයයි. ඕකිඩ් මල් එකතුව ඉතා ප්‍රසිද්ධය.",
        desc_en: "The largest botanical garden in Sri Lanka, famous for its extensive collection of orchids.", 
        reach_si: "මහනුවර නගරයේ සිට කි.මී. 5 කි.", reach_en: "5km from Kandy city.",
        fee_si: "රු. 200", fee_en: "LKR 200", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "ඡායාරූපකරණය, ඇවිදීම", do_en: "Photography, Walking", lat: 7.2683, lon: 80.5966, police: "081-2388222" 
    },
    { 
        id: 203, cat: "culture", 
        name_si: "සීගිරිය", name_en: "Sigiriya Rock Fortress", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg", 
        desc_si: "කාශ්‍යප රජු විසින් ඉදිකළ අහස් මාලිගයකි. මෙය ලෝක උරුමයක් ලෙස නම් කර ඇත.",
        desc_en: "An ancient rock fortress and palace built by King Kashyapa, a UNESCO World Heritage site.", 
        reach_si: "දඹුල්ල නගරයේ සිට කි.මී. 17 කි.", reach_en: "17km from Dambulla.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "අලුයම 7.00 ට", best_en: "7.00 AM", 
        do_si: "ගල නැගීම, බිතුසිතුවම් නැරඹීම", do_en: "Climbing, Viewing frescoes", lat: 7.9570, lon: 80.7603, police: "066-2286422" 
    },
    { 
        id: 204, cat: "nature", 
        name_si: "ඇඹ්ලෙබැක්ක දේවාලය", name_en: "Embekke Devalaya", 
        district_si: "මහනුවර", district_en: "Kandy", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "ලී කැටයම් සඳහා ලොව ප්‍රසිද්ධ විහාරස්ථානයකි.",
        desc_en: "A temple world-famous for its intricate wood carvings.", 
        reach_si: "පිළිමතලාව සිට කි.මී. 7 කි.", reach_en: "7km from Pilimathalawa.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "කැටයම් නැරඹීම", do_en: "Observing carvings", lat: 7.2108, lon: 80.5677, police: "081-2222222" 
    },
    { 
        id: 205, cat: "nature", 
        name_si: "හෝර්ටන් තැන්න", name_en: "Horton Plains", 
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya", 
        img: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg", 
        desc_si: "ලෝකාන්තය පිහිටා ඇති ඉතා සුන්දර ජාතික උද්‍යානයකි.",
        desc_en: "A beautiful national park featuring the famous 'World's End' cliff.", 
        reach_si: "නුවරඑළිය සිට කි.මී. 32 කි.", reach_en: "32km from Nuwara Eliya.",
        fee_si: "රු. 250", fee_en: "LKR 250", best_si: "අලුයම 6.00 ට", best_en: "6.00 AM", 
        do_si: "පයින් ගමන් කිරීම (Hiking)", do_en: "Hiking", lat: 6.8028, lon: 80.8147, police: "052-2222222" 
    },
    { 
        id: 206, cat: "nature", 
        name_si: "ග්‍රෙගරි වැව", name_en: "Gregory Lake", 
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya", 
        img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", 
        desc_si: "නුවරඑළිය නගරයේ විවේකීව කාලය ගත කළ හැකි සුන්දර වැවකි.",
        desc_en: "A scenic lake in Nuwara Eliya town, perfect for relaxation and boating.", 
        reach_si: "නුවරඑළිය නගරයේ පිහිටා ඇත.", reach_en: "Located in Nuwara Eliya town.",
        fee_si: "රු. 50", fee_en: "LKR 50", best_si: "සවස", best_en: "Evening", 
        do_si: "බෝට්ටු පැදීම, අස්වයින් පැදීම", do_en: "Boating, Horse riding", lat: 6.9631, lon: 80.7816, police: "052-2222222" 
    },
    { 
        id: 207, cat: "culture", 
        name_si: "දඹුල්ල ලෙන් විහාරය", name_en: "Dambulla Cave Temple", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "ලංකාවේ විශාලතම සහ හොඳින්ම ආරක්ෂා වී ඇති ලෙන් විහාර සංකීර්ණයයි.",
        desc_en: "The largest and best-preserved cave temple complex in Sri Lanka.", 
        reach_si: "දඹුල්ල නගරයේ පිහිටා ඇත.", reach_en: "Located in Dambulla town.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "සවස", best_en: "Evening", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 7.8567, lon: 80.6485, police: "066-2284222" 
    },
    { 
        id: 208, cat: "nature", 
        name_si: "පිදුරංගල රොක්", name_en: "Pidurangala Rock", 
        district_si: "මාතලේ", district_en: "Matale", 
        img: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg", 
        desc_si: "සීගිරිය පර්වතය අලංකාරව නැරඹිය හැකි යාබදව පිහිටි කඳු මුදුනකි.",
        desc_en: "A massive rock offering a panoramic view of Sigiriya Rock Fortress.", 
        reach_si: "සීගිරිය සිට කි.මී. 2 කි.", reach_en: "2km from Sigiriya.",
        fee_si: "රු. 500", fee_en: "LKR 500", best_si: "හිරු උදාව නැරඹීමට", best_en: "Sunrise", 
        do_si: "කඳු නැගීම", do_en: "Hiking", lat: 7.9654, lon: 80.7630, police: "066-2286422" 
    },
    { 
        id: 209, cat: "nature", 
        name_si: "අඹේවෙල ගොවිපල", name_en: "Ambewela Farm", 
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya", 
        img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", 
        desc_si: "ලංකාවේ කුඩා නවසීලන්තය ලෙස හඳුන්වන ඉතා අලංකාර කිරි ගොවිපලකි.",
        desc_en: "Known as 'Little New Zealand', it is a beautiful dairy farm in Nuwara Eliya.", 
        reach_si: "නුවරඑළිය සිට කි.මී. 15 කි.", reach_en: "15km from Nuwara Eliya.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "සතුන් නැරඹීම", do_en: "Farm visit", lat: 6.8770, lon: 80.8030, police: "052-2222222" 
    },
    { 
        id: 210, cat: "nature", 
        name_si: "සෙන්ට් ක්ලෙයාර් දිය ඇල්ල", name_en: "St. Clair's Falls", 
        district_si: "නුවරඑළිය", district_en: "Nuwara Eliya", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "තේ වතු මැදින් ගලා බසින ලංකාවේ පළල්ම දිය ඇලි වලින් එකකි.",
        desc_en: "One of the widest waterfalls in Sri Lanka, flowing through lush tea estates.", 
        reach_si: "තලවාකැලේ සිට කි.මී. 3 කි.", reach_en: "3km from Talawakele.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "ඡායාරූපකරණය", do_en: "Photography", lat: 6.9383, lon: 80.6322, police: "052-2258222" 
    }
    // ඉතිරි 10 දත්ත ද මෙලෙසම පිරවිය හැක...
]);

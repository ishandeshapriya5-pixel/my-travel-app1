// western1.js - බස්නාහිර පළාත (ස්ථාන 01 - 20)

locations.push(
    { 
        id: 101, cat: "culture", 
        name_si: "ගංගාරාම විහාරය", name_en: "Gangaramaya Temple", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/20302000/pexels-photo-20302000.jpeg", 
        desc_si: "කොළඹ නගරයේ පිහිටි අලංකාරවත් විහාරස්ථානයකි. මෙහි ඇති කෞතුකාගාරය සහ වාර්ෂික නෑම් පෙරහැර ඉතා ප්‍රසිද්ධය.",
        desc_en: "A beautiful temple in Colombo. Famous for its museum, architecture, and the annual Navam Perahera.", 
        reach_si: "කොළඹ කොටුවේ සිට විනාඩි 10 කින් ලඟා විය හැක.", reach_en: "10 minutes from Colombo Fort.",
        fee_si: "රු. 300", fee_en: "LKR 300", best_si: "සවස කාලය", best_en: "Evening", 
        do_si: "කෞතුකාගාරය නැරඹීම", do_en: "Museum visit", lat: 6.9165, lon: 79.8580, police: "011-2433333" 
    },
    { 
        id: 102, cat: "beach", 
        name_si: "ගාලු මුවදොර පිටිය", name_en: "Galle Face Green", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/15900010/pexels-photo-15900010.jpeg", 
        desc_si: "මුහුදු වෙරළට මායිම්ව පිහිටි විවෘත පිටියකි. වීදි ආහාර රස විඳීමට කදිම ස්ථානයකි.",
        desc_en: "A large ocean-side urban park. Perfect for sunset and street food.", 
        reach_si: "කොළඹ නගර මධ්‍යයේ පිහිටා ඇත.", reach_en: "Located in Colombo Fort.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස 5 න් පසු", best_en: "After 5 PM", 
        do_si: "සරුංගල් යැවීම", do_en: "Kite flying", lat: 6.9248, lon: 79.8427, police: "011-2421111" 
    },
    { 
        id: 103, cat: "culture", 
        name_si: "ජාතික කෞතුකාගාරය", name_en: "National Museum", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "ලංකාවේ විශාලතම කෞතුකාගාරයයි. පුරාණ රජ සමයට අයත් භාණ්ඩ මෙහි ඇත.",
        desc_en: "The largest museum in Sri Lanka with royal regalia and ancient artifacts.", 
        reach_si: "කොළඹ 07 ප්‍රදේශයේ පිහිටා ඇත.", reach_en: "Located in Colombo 07.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "පෙ.ව. 9 - ප.ව. 5", best_en: "9 AM - 5 PM", 
        do_si: "ඉතිහාසය හැදෑරීම", do_en: "Learning history", lat: 6.9111, lon: 79.8612, police: "011-2691111" 
    },
    { 
        id: 104, cat: "culture", 
        name_si: "කැලණිය විහාරය", name_en: "Kelaniya Temple", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "බුදුරජාණන් වහන්සේ වැඩම කළ ඓතිහාසික පූජනීය ස්ථානයකි.",
        desc_en: "A sacred temple hallowed by the visit of Lord Buddha.", 
        reach_si: "කොළඹ සිට කි.මී. 10 කි.", reach_en: "10km from Colombo.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 6.9525, lon: 79.9208, police: "011-2911222" 
    },
    { 
        id: 105, cat: "nature", 
        name_si: "දෙහිවල සත්වෝද්‍යානය", name_en: "Dehiwala Zoo", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/70442/elephant-sea-lion-funny-70442.jpeg", 
        desc_si: "විවිධ සත්ව විශේෂ දැකගත හැකි ආසියාවේ පැරණිතම සත්වෝද්‍යානයකි.",
        desc_en: "One of the oldest zoos in Asia with a variety of animals.", 
        reach_si: "දෙහිවල හන්දියේ සිට කි.මී. 1 කි.", reach_en: "1km from Dehiwala junction.",
        fee_si: "රු. 200", fee_en: "LKR 200", best_si: "දවස පුරා", best_en: "All day", 
        do_si: "සතුන් නැරඹීම", do_en: "Animal watching", lat: 6.8500, lon: 79.8741, police: "011-2712222" 
    },
    { 
        id: 106, cat: "beach", 
        name_si: "මීගමුව වෙරළ", name_en: "Negombo Beach", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "ගුවන් තොටුපලට ආසන්න ජනප්‍රිය සංචාරක කලාපයකි.",
        desc_en: "Popular beach resort town near the International Airport.", 
        reach_si: "මීගමුව නගරයේ සිට විනාඩි 10 කි.", reach_en: "10 mins from Negombo town.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "බෝට්ටු සංචාර", do_en: "Boat rides", lat: 7.2348, lon: 79.8422, police: "031-2222222" 
    },
    { 
        id: 107, cat: "culture", 
        name_si: "කළුතර බෝධිය", name_en: "Kalutara Bodhiya", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/14101416/pexels-photo-14101416.jpeg", 
        desc_si: "ලොව ප්‍රථම කුහර සහිත චෛත්‍යය මෙහි පිහිටා ඇත.",
        desc_en: "The world's first hollow stupa is located here.", 
        reach_si: "කළුතර පාලම අසල.", reach_en: "Near Kalutara bridge.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම වේලාවක", best_en: "Anytime", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 6.5855, lon: 79.9607, police: "034-2222222" 
    },
    { 
        id: 108, cat: "nature", 
        name_si: "විහාරමහාදේවි උද්‍යානය", name_en: "Viharamahadevi Park", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "කොළඹ නගරයේ පිහිටි විශාලතම පොදු උද්‍යානයයි.",
        desc_en: "The largest public park in the city of Colombo.", 
        reach_si: "කොළඹ නගර සභාව ඉදිරිපිට.", reach_en: "Opposite Colombo Town Hall.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන/සවස", best_en: "Morning/Evening", 
        do_si: "ඇවිදීම", do_en: "Walking", lat: 6.9128, lon: 79.8612, police: "011-2691111" 
    },
    { 
        id: 109, cat: "culture", 
        name_si: "නෙළුම් කුළුණ", name_en: "Lotus Tower", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "දකුණු ආසියාවේ උසම කුළුණ වන මෙහි සිට නගරයම දැකගත හැක.",
        desc_en: "Tallest tower in South Asia offering a panoramic city view.", 
        reach_si: "ඩී.ආර්. විජයවර්ධන මාවත.", reach_en: "D.R. Wijewardene Mawatha.",
        fee_si: "රු. 500", fee_en: "LKR 500", best_si: "රාත්‍රී කාලය", best_en: "Night", 
        do_si: "නගර සිරි නැරඹීම", do_en: "Observation", lat: 6.9298, lon: 79.8592, police: "011-2421111" 
    },
    { 
        id: 110, cat: "beach", 
        name_si: "මවුන්ට් ලැවීනියා වෙරළ", name_en: "Mount Lavinia", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "සුවපහසු විවේකයක් සඳහා කදිම වෙරළ තීරයකි.",
        desc_en: "A beautiful beach perfect for a relaxing getaway.", 
        reach_si: "ගල්කිස්ස දුම්රිය ස්ථානය අසල.", reach_en: "Near Mount Lavinia Station.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "මුහුදු ස්නානය", do_en: "Swimming", lat: 6.8351, lon: 79.8631, police: "011-2712222" 
    },
    { 
        id: 111, cat: "nature", 
        name_si: "දියත උයන", name_en: "Diyatha Uyana", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "දියවන්නා ඔය අසල පිහිටි සුන්දර ඇවිදින මංතීරුවක් සහ මල් අලෙවිසැල් සංකීර්ණයකි.",
        desc_en: "A scenic walking path and flower market by the Diyawanna lake.", 
        reach_si: "බත්තරමුල්ල හන්දිය අසල.", reach_en: "Near Battaramulla junction.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "ඇවිදීම, ආහාර ගැනීම", do_en: "Walking, Dining", lat: 6.9067, lon: 79.9194, police: "011-2862222" 
    },
    { 
        id: 112, cat: "culture", 
        name_si: "රතු පල්ලිය", name_en: "Red Mosque", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "පිටකොටුවේ පිහිටි ඉතාමත් අලංකාර වාස්තු විද්‍යාවකින් යුත් පල්ලියකි.",
        desc_en: "A historically significant mosque in Pettah with unique architecture.", 
        reach_si: "පිටකොටුව දෙවන හරස් වීදිය.", reach_en: "2nd Cross Street, Pettah.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "දවල් කාලය", best_en: "Daytime", 
        do_si: "ඡායාරූපකරණය", do_en: "Photography", lat: 6.9372, lon: 79.8504, police: "011-2433333" 
    },
    { 
        id: 113, cat: "nature", 
        name_si: "බෙල්ලන්විල රජමහා විහාරය", name_en: "Bellanwila Temple", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "අනුරාධපුර ජය ශ්‍රී මහා බෝධීන් වහන්සේගේ දෙතිස් ඵල රුහ බෝධීන් වහන්සේ නමකි.",
        desc_en: "A very sacred temple known for its ancient Bodhi tree.", 
        reach_si: "බොරලැස්ගමුව - දෙහිවල පාරේ.", reach_en: "On Dehiwala-Boralesgamuwa road.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 6.8486, lon: 79.8972, police: "011-2712222" 
    },
    { 
        id: 114, cat: "beach", 
        name_si: "කළුවාමෝදර වෙරළ", name_en: "Kaluwamodara Beach", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "කළුතර සහ අලුත්ගම අතර පිහිටි නිස්කලංක වෙරළ තීරයකි.",
        desc_en: "A quiet and peaceful beach located between Kalutara and Aluthgama.", 
        reach_si: "ගාලු පාරෙන් අලුත්ගම දෙසට.", reach_en: "On Galle Road towards Aluthgama.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "නිදහසේ විවේක ගැනීම", do_en: "Relaxation", lat: 6.4250, lon: 79.9980, police: "034-2222222" 
    },
    { 
        id: 115, cat: "nature", 
        name_si: "මුතුරාජවෙල වගුරුබිම", name_en: "Muthurajawela Marsh", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/70442/elephant-sea-lion-funny-70442.jpeg", 
        desc_si: "ජෛව විවිධත්වයෙන් පිරි ශ්‍රී ලංකාවේ විශාලතම ලුණු වගුරුබිමයි.",
        desc_en: "The largest saline coastal peat bog in Sri Lanka with high biodiversity.", 
        reach_si: "ජා-ඇල ප්‍රදේශයේ සිට ලඟා විය හැක.", reach_en: "Accessible from Ja-Ela area.",
        fee_si: "රු. 500 (බෝට්ටු සවාරි)", fee_en: "LKR 500 (Boat ride)", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "පක්ෂීන් නැරඹීම, බෝට්ටු සවාරි", do_en: "Bird watching, Boat trips", lat: 7.0422, lon: 79.9125, police: "011-2233333" 
    },
    { 
        id: 116, cat: "culture", 
        name_si: "නිදහස් චතුරස්‍රය", name_en: "Independence Square", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ නිදහස සැමරීම සඳහා ඉදිකළ ඓතිහාසික ස්මාරකයකි.",
        desc_en: "A historic monument built to commemorate the independence of Sri Lanka.", 
        reach_si: "කොළඹ 07 ප්‍රදේශයේ පිහිටා ඇත.", reach_en: "Located in Colombo 07.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන/සවස", best_en: "Morning/Evening", 
        do_si: "ඇවිදීම, ඡායාරූපකරණය", do_en: "Walking, Photography", lat: 6.9044, lon: 79.8675, police: "011-2691111" 
    },
    { 
        id: 117, cat: "nature", 
        name_si: "බද්දේගාන තෙත්බිම් උද්‍යානය", name_en: "Beddagana Wetland", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "ස්වභාව සෞන්දර්යයෙන් පිරි, ඇවිදීමට සුදුසු අලංකාර තෙත්බිම් උද්‍යානයකි.",
        desc_en: "A beautiful wetland park ideal for nature lovers and walking.", 
        reach_si: "ඇතුල්කෝට්ටේ ප්‍රදේශයේ පිහිටා ඇත.", reach_en: "Located in Ethul Kotte.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "සවස", best_en: "Evening", 
        do_si: "සොබාදහම රසවිඳීම", do_en: "Nature watching", lat: 6.8920, lon: 79.9140, police: "011-2862222" 
    },
    { 
        id: 118, cat: "beach", 
        name_si: "පානදුර වෙරළ", name_en: "Panadura Beach", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "පවුලේ සැමට විනෝද විය හැකි පුළුල් වැලි සහිත වෙරළ තීරයකි.",
        desc_en: "A wide sandy beach perfect for family outings.", 
        reach_si: "පානදුර නගරයේ සිට විනාඩි 5 කි.", reach_en: "5 mins from Panadura town.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "වෙරළේ සෙල්ලම් කිරීම", do_en: "Beach activities", lat: 6.7111, lon: 79.8970, police: "038-2222222" 
    },
    { 
        id: 119, cat: "culture", 
        name_si: "පිළිකුත්තුව රජමහා විහාරය", name_en: "Pilikuththuwa Temple", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "ලෙන් විහාර ගණනාවකින් යුත් ඉතා පැරණි ඓතිහාසික ස්ථානයකි.",
        desc_en: "An ancient cave temple complex with historical significance.", 
        reach_si: "යක්කල ප්‍රදේශයේ සිට කි.මී. 5 කි.", reach_en: "5km from Yakkala.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "ලෙන් නැරඹීම", do_en: "Exploring caves", lat: 7.0500, lon: 80.0500, police: "033-2222222" 
    },
    { 
        id: 120, cat: "nature", 
        name_si: "බෙල්ලන්විල පක්ෂි අභයභූමිය", name_en: "Attidiya Bird Sanctuary", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/70442/elephant-sea-lion-funny-70442.jpeg", 
        desc_si: "විවිධ වර්ගයේ පක්ෂීන් සහ ජලජ සතුන් නැරඹිය හැකි පාරිසරික කලාපයකි.",
        desc_en: "An environmental zone for watching birds and aquatic animals.", 
        reach_si: "අත්තිඩිය පාරෙන් ලඟා විය හැක.", reach_en: "Accessible via Attidiya road.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන 6-8", best_en: "6-8 AM", 
        do_si: "පක්ෂීන් නැරඹීම", do_en: "Bird watching", lat: 6.8430, lon: 79.9110, police: "011-2712222" 
    }
);

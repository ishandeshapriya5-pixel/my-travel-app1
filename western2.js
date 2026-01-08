// western2.js - බස්නාහිර පළාත (ස්ථාන 21 - 40)

locations.push(
    { 
        id: 121, cat: "nature", 
        name_si: "හෙනරත්ගොඩ උද්භිද උද්‍යානය", name_en: "Henarathgoda Botanical Garden", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "ලංකාවේ ප්‍රථම රබර් ගස රෝපණය කරන ලද ඓතිහාසික උද්භිද උද්‍යානයකි.",
        desc_en: "A historic botanical garden where the first rubber tree in Sri Lanka was planted.", 
        reach_si: "ගම්පහ දුම්රිය ස්ථානයේ සිට කි.මී. 1 කි.", reach_en: "1km from Gampaha Railway Station.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "ඇවිදීම, බෝට්ටු පැදීම", do_en: "Walking, Boat rides", lat: 7.0897, lon: 79.9986, police: "033-2222222" 
    },
    { 
        id: 122, cat: "culture", 
        name_si: "රිච්මන්ඩ් කාසල් (ප්‍රාසාදය)", name_en: "Richmond Castle", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "ඉතාමත් අලංකාර කැටයම් සහිත ඉපැරණි වලව්වක් වන මෙය විදේශීය වාස්තු විද්‍යාවට අනුව නිමවා ඇත.",
        desc_en: "A beautiful mansion built in the early 20th century with intricate carvings and foreign architecture.", 
        reach_si: "කළුතර නගරයේ සිට කි.මී. 4 කි.", reach_en: "4km from Kalutara town.",
        fee_si: "රු. 100", fee_en: "LKR 100", best_si: "දවල් කාලය", best_en: "Daytime", 
        do_si: "ඡායාරූපකරණය", do_en: "Photography", lat: 6.5744, lon: 79.9764, police: "034-2222222" 
    },
    { 
        id: 123, cat: "beach", 
        name_si: "බේරුවල ප්‍රදීපාගාරය", name_en: "Beruwala Lighthouse", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "කුඩා දූපතක පිහිටි අලංකාර ප්‍රදීපාගාරයකි. බෝට්ටුවකින් එහි යා යුතුය.",
        desc_en: "A scenic lighthouse located on a small island. Accessible by boat.", 
        reach_si: "බේරුවල වරායේ සිට බෝට්ටු මගින්.", reach_en: "Via boat from Beruwala harbor.",
        fee_si: "රු. 500 (බෝට්ටු ගාස්තු)", fee_en: "LKR 500 (Boat)", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "බෝට්ටු සංචාර", do_en: "Boat tour", lat: 6.4633, lon: 79.9814, police: "034-2276222" 
    },
    { 
        id: 124, cat: "nature", 
        name_si: "තලංගම වැව", name_en: "Thalangama Lake", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "පක්ෂීන් නිරීක්ෂණයට කදිම නිස්කලංක පරිසරයකි.",
        desc_en: "A peaceful environment ideal for bird watching near Colombo.", 
        reach_si: "පැලවත්ත හන්දියේ සිට කි.මී. 2 කි.", reach_en: "2km from Pelawatta junction.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන/සවස", best_en: "Morning/Evening", 
        do_si: "පක්ෂීන් නැරඹීම", do_en: "Bird watching", lat: 6.8900, lon: 79.9400, police: "011-2862222" 
    },
    { 
        id: 125, cat: "culture", 
        name_si: "නාවලෝක වරාය පල්ලිය", name_en: "St. Anthony's Shrine", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "කොළඹ කෝච්චිකඩේ පිහිටි ඉතාමත් පූජනීය සහ ඓතිහාසික කතෝලික දේවස්ථානයකි.",
        desc_en: "A highly sacred and historic Catholic shrine located in Kochchikade, Colombo.", 
        reach_si: "කොළඹ කොටුවේ සිට ඉතා ආසන්නව.", reach_en: "Very close to Colombo Fort.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම වේලාවක", best_en: "Anytime", 
        do_si: "ආගමික වතාවත්", do_en: "Religious activities", lat: 6.9442, lon: 79.8519, police: "011-2433333" 
    },
    { 
        id: 126, cat: "nature", 
        name_si: "ලුම්බිණි උයන", name_en: "Lumbini Garden", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "සොබාදහම රසවිඳිය හැකි කැලණි ගං ඉවුරේ පිහිටි සුන්දර ස්ථානයකි.",
        desc_en: "A scenic spot by the Kelani river to enjoy nature.", 
        reach_si: "කැලණිය විහාරයට නුදුරින්.", reach_en: "Close to Kelaniya Temple.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "විවේක ගැනීම", do_en: "Relaxing", lat: 6.9500, lon: 79.9150, police: "011-2911222" 
    },
    { 
        id: 127, cat: "culture", 
        name_si: "වාරණ රජමහා විහාරය", name_en: "Warana Temple", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "ගල් ලෙන් සහ ඉපැරණි කැටයම් සහිත පර්වත විහාරයකි.",
        desc_en: "A rock temple with ancient caves and inscriptions.", 
        reach_si: "යක්කල - ගිරිදර පාරේ පිහිටා ඇත.", reach_en: "Located on Yakkala-Giridara road.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "ගවේෂණය කිරීම", do_en: "Exploring", lat: 7.0822, lon: 80.0411, police: "033-2222222" 
    },
    { 
        id: 128, cat: "nature", 
        name_si: "ලබුගම කලටුවාව රක්ෂිතය", name_en: "Labugama Forest", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "කොළඹ දිස්ත්‍රික්කයට ජලය සපයන ප්‍රධාන වැව් සහිත රක්ෂිත ප්‍රදේශයකි.",
        desc_en: "A forest reserve with reservoirs that supply water to Colombo.", 
        reach_si: "හංවැල්ල නගරයේ සිට ලඟා විය හැක.", reach_en: "Accessible from Hanwella.",
        fee_si: "අවසර පතක් අවශ්‍යයි", fee_en: "Permit required", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "සොබාදහම අධ්‍යයනය", do_en: "Nature study", lat: 6.8400, lon: 80.1800, police: "011-2333333" 
    },
    { 
        id: 129, cat: "culture", 
        name_si: "ලන්දේසි රෝහල", name_en: "Dutch Hospital", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "කොළඹ කොටුවේ පිහිටි පැරණිතම ගොඩනැගිල්ලක් වන මෙය දැන් වෙළඳ සංකීර්ණයකි.",
        desc_en: "One of the oldest buildings in Fort, now a shopping and dining precinct.", 
        reach_si: "කොළඹ ලෝක වෙළඳ මධ්‍යස්ථානය අසල.", reach_en: "Near World Trade Center.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "රාත්‍රී කාලය", best_en: "Nighttime", 
        do_si: "ආහාර ගැනීම, සාප්පු සවාරි", do_en: "Dining, Shopping", lat: 6.9328, lon: 79.8439, police: "011-2433333" 
    },
    { 
        id: 130, cat: "nature", 
        name_si: "බෙල්ලන්විල ඇවිදින මංතීරුව", name_en: "Bellanwila Path", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "ව්‍යායාම කිරීමට සහ සවස් කාලය ගත කිරීමට සුදුසු මංතීරුවකි.",
        desc_en: "A popular track for exercise and evening relaxation.", 
        reach_si: "බෙල්ලන්විල පන්සල අසල.", reach_en: "Near Bellanwila Temple.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස 5 - 7", best_en: "5 PM - 7 PM", 
        do_si: "ව්‍යායාම, ඇවිදීම", do_en: "Jogging, Walking", lat: 6.8480, lon: 79.9000, police: "011-2712222" 
    },
    { 
        id: 131, cat: "culture", 
        name_si: "පැරණි පාර්ලිමේන්තුව", name_en: "Old Parliament", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "බ්‍රිතාන්‍ය සමයේ ඉදිකළ අලංකාර වාස්තු විද්‍යාව සහිත ගොඩනැගිල්ලකි.",
        desc_en: "A beautiful building from the British era, now housing the Presidential Secretariat.", 
        reach_si: "ගාලු මුවදොර අසල.", reach_en: "Next to Galle Face.",
        fee_si: "පිටතින් නැරඹිය හැක", fee_en: "View from outside", best_si: "දවල් කාලය", best_en: "Daytime", 
        do_si: "ඡායාරූපකරණය", do_en: "Photography", lat: 6.9300, lon: 79.8430, police: "011-2433333" 
    },
    { 
        id: 132, cat: "nature", 
        name_si: "මල්වාන බිබිලේ වැව", name_en: "Malwana Bibile Lake", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "මල්වාන ප්‍රදේශයේ පිහිටි නිස්කලංක ජලාශයකි.",
        desc_en: "A quiet and scenic lake located in Malwana.", 
        reach_si: "මල්වාන නගරයේ සිට කි.මී. 3 කි.", reach_en: "3km from Malwana town.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "විවේක ගැනීම", do_en: "Relaxing", lat: 6.9400, lon: 80.0100, police: "011-2401222" 
    },
    { 
        id: 133, cat: "culture", 
        name_si: "මාලිගාවත්ත රතු පල්ලිය", name_en: "Grand Mosque", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "ඉතා පැරණි ඉතිහාසයක් ඇති මාලිගාවත්ත ප්‍රදේශයේ පිහිටි ප්‍රධාන පල්ලියකි.",
        desc_en: "A major mosque with a long history located in Maligawatte.", 
        reach_si: "මාලිගාවත්ත ප්‍රදේශයේ.", reach_en: "Located in Maligawatte.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "ඕනෑම වේලාවක", best_en: "Anytime", 
        do_si: "නැරඹීම", do_en: "Observation", lat: 6.9350, lon: 79.8650, police: "011-2433333" 
    },
    { 
        id: 134, cat: "beach", 
        name_si: "වැල්ලවත්ත වෙරළ", name_en: "Wellawatte Beach", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "දුම්රිය මාර්ගයට මායිම්ව පිහිටි ජනප්‍රිය වෙරළ තීරයකි.",
        desc_en: "A popular city beach located alongside the railway track.", 
        reach_si: "වැල්ලවත්ත දුම්රිය ස්ථානය අසල.", reach_en: "Near Wellawatte Station.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "ඇවිදීම", do_en: "Walking", lat: 6.8744, lon: 79.8564, police: "011-2588222" 
    },
    { 
        id: 135, cat: "culture", 
        name_si: "කෝට්ටේ රජමහා විහාරය", name_en: "Kotte Temple", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "කෝට්ටේ රාජධානි සමයට අයත් ඉපැරණි පූජනීය ස්ථානයකි.",
        desc_en: "An ancient temple dating back to the Kingdom of Kotte.", 
        reach_si: "පිටකෝට්ටේ හන්දිය අසල.", reach_en: "Near Pita Kotte junction.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 6.8911, lon: 79.9122, police: "011-2862222" 
    },
    { 
        id: 136, cat: "nature", 
        name_si: "දොම්පේ ඉළුක්පැලැස්ස", name_en: "Dompe Nature Area", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/10380018/pexels-photo-10380018.jpeg", 
        desc_si: "ගම්පහ දිස්ත්‍රික්කයේ පිහිටි සුන්දර ගැමි පරිසරයක් සහිත ප්‍රදේශයකි.",
        desc_en: "A beautiful rural environment in the Gampaha district.", 
        reach_si: "දොම්පේ නගරයේ සිට ලඟා විය හැක.", reach_en: "Accessible from Dompe.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "ගැමි සිරිය නැරඹීම", do_en: "Sightseeing", lat: 6.9500, lon: 80.1200, police: "011-2406222" 
    },
    { 
        id: 137, cat: "culture", 
        name_si: "ගංගාරාම සීමාමාලකය", name_en: "Seema Malaka", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/13444391/pexels-photo-13444391.jpeg", 
        desc_si: "බෙයිරේ වැව මැද පිහිටි ජෙෆ්රි බාවා විසින් නිර්මාණය කළ අලංකාර විහාර අංගයකි.",
        desc_en: "A stunning temple structure on Beira Lake, designed by Geoffrey Bawa.", 
        reach_si: "ගංගාරාම විහාරයට පයින් යන දුරින්.", reach_en: "Walking distance from Gangaramaya.",
        fee_si: "රු. 300 (විදේශික)", fee_en: "LKR 300 (Foreign)", best_si: "රාත්‍රී කාලය", best_en: "Nighttime", 
        do_si: "නිදහසේ සිටීම", do_en: "Peaceful meditation", lat: 6.9150, lon: 79.8550, police: "011-2433333" 
    },
    { 
        id: 138, cat: "beach", 
        name_si: "වැඩිකන්ද වෙරළ", name_en: "Wadikanda Beach", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg", 
        desc_si: "කළුතර ප්‍රදේශයේ පිහිටි තවත් නිස්කලංක වෙරළ තීරයකි.",
        desc_en: "Another peaceful beach strip located in Kalutara.", 
        reach_si: "කළුතර සිට දකුණට.", reach_en: "South of Kalutara.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "සවස", best_en: "Evening", 
        do_si: "විවේකය", do_en: "Relaxation", lat: 6.5600, lon: 79.9700, police: "034-2222222" 
    },
    { 
        id: 139, cat: "nature", 
        name_si: "මල්වාන රජමහා විහාරය", name_en: "Malwana Temple", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/14532724/pexels-photo-14532724.jpeg", 
        desc_si: "කැලණි ගඟ අසල පිහිටි ඓතිහාසික පසුබිමක් සහිත විහාරස්ථානයකි.",
        desc_en: "An ancient temple with a historical background near Kelani river.", 
        reach_si: "මල්වාන නගරය අසල.", reach_en: "Near Malwana town.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "උදෑසන", best_en: "Morning", 
        do_si: "වන්දනා කිරීම", do_en: "Worship", lat: 6.9355, lon: 80.0055, police: "011-2401222" 
    },
    { 
        id: 140, cat: "culture", 
        name_si: "විහාරස්ථාන කෞතුකාගාරය", name_en: "Vihara Museum", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/10380022/pexels-photo-10380022.jpeg", 
        desc_si: "කැලණිය රජමහා විහාරය තුළ ඇති පුරාවස්තු පිරි කෞතුකාගාරයයි.",
        desc_en: "The museum within Kelaniya Temple housing many artifacts.", 
        reach_si: "කැලණිය විහාරය තුළ.", reach_en: "Inside Kelaniya Temple.",
        fee_si: "නොමිලේ", fee_en: "Free", best_si: "දවල් කාලය", best_en: "Daytime", 
        do_si: "අධ්‍යයනය කිරීම", do_en: "Studying artifacts", lat: 6.9526, lon: 79.9209, police: "011-2911222" 
    }
);

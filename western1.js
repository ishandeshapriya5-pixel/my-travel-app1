// western1.js - Western Province Locations (Part 1)
const w1 = [
    { 
        id: 1001, cat: "culture", 
        name_si: "ගංගාරාම විහාරය", name_en: "Gangaramaya Temple", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/15104847/pexels-photo-15104847.jpeg", 
        desc_si: "කොළඹ පිහිටි ඉතාමත් ප්‍රසිද්ධ විහාරස්ථානයකි. මෙහි කෞතුකාගාරයක් සහ අලංකාර නිර්මාණ රැසක් පවතී.",
        desc_en: "A famous temple in Colombo, featuring a museum and eclectic architectural styles.",
        lat: 6.9148, lon: 79.8577
    },
    { 
        id: 1002, cat: "culture", 
        name_si: "නෙළුම් කුළුණ", name_en: "Lotus Tower", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/12301323/pexels-photo-12301323.jpeg", 
        desc_si: "දකුණු ආසියාවේ උසම කුළුණ වන මෙය කොළඹ නගරයේ මනරම් දර්ශනයක් ලබා දෙයි.",
        desc_en: "The tallest tower in South Asia, offering a panoramic view of Colombo city.",
        lat: 6.9271, lon: 79.8576
    },
    { 
        id: 1003, cat: "beach", 
        name_si: "ගාලු මුවදොර", name_en: "Galle Face Green", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/16301321/pexels-photo-16301321.jpeg", 
        desc_si: "කොළඹ හදවතේ පිහිටි විශාල විවෘත වෙරළ තීරයකි. හිරු බැසීම නැරඹීමට වඩාත් සුදුසුය.",
        desc_en: "A large urban park along the coast, perfect for sunset watching and street food.",
        lat: 6.9272, lon: 79.8436
    },
    { 
        id: 1004, cat: "culture", 
        name_si: "නිදහස් චතුරශ්‍රය", name_en: "Independence Square", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/14841753/pexels-photo-14841753.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ නිදහස සැමරීම සඳහා ඉදිකරන ලද ඓතිහාසික ස්මාරකයකි.",
        desc_en: "A national monument built to commemorate the independence of Sri Lanka.",
        lat: 6.9042, lon: 79.8675
    },
    { 
        id: 1005, cat: "culture", 
        name_si: "කැළණි රජමහා විහාරය", name_en: "Kelaniya Temple", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/20348737/pexels-photo-20348737.jpeg", 
        desc_si: "බුදුරජාණන් වහන්සේගේ තෙවන ලංකා ගමනයෙන් පාරිශුද්ධ වූ පූජනීය විහාරයකි.",
        desc_en: "A sacred temple hallowed by the third visit of the Buddha to Sri Lanka.",
        lat: 6.9536, lon: 79.9171
    },
    { 
        id: 1006, cat: "beach", 
        name_si: "මීගමුව වෙරළ", name_en: "Negombo Beach", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/12330321/pexels-photo-12330321.jpeg", 
        desc_si: "විදේශීය සංචාරකයන් අතර ඉතා ජනප්‍රිය රන්වන් වැලි සහිත වෙරළ තීරයකි.",
        desc_en: "A popular golden sandy beach, known for its fishing industry and luxury resorts.",
        lat: 7.2215, lon: 79.8407
    },
    { 
        id: 1007, cat: "culture", 
        name_si: "කළුතර බෝධිය", name_en: "Kalutara Bodhi", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/20546321/pexels-photo-20546321.jpeg", 
        desc_si: "ලොව එකම කුහරයක් සහිත චෛත්‍යය ලෙස සැලකෙන පූජනීය සිද්ධස්ථානයකි.",
        desc_en: "A famous Buddhist shrine known for its hollow stupa, one of its kind in the world.",
        lat: 6.5847, lon: 79.9607
    },
    { 
        id: 1008, cat: "culture", 
        name_si: "රිච්මන්ඩ් මාලිගය", name_en: "Richmond Castle", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/20123456/pexels-photo-20123456.jpeg", 
        desc_si: "ඉතා අලංකාර ගෘහ නිර්මාණ ශිල්පයකින් යුතු කළුතර පිහිටි පෞරාණික මාලිගයකි.",
        desc_en: "A grand mansion with Indian and British architectural influence in Kalutara.",
        lat: 6.5925, lon: 79.9702
    },
    { 
        id: 1009, cat: "nature", 
        name_si: "සීතාවක උද්භිද උද්‍යානය", name_en: "Seethawaka Botanical Garden", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/20345678/pexels-photo-20345678.jpeg", 
        desc_si: "අවිස්සාවේල්ල ප්‍රදේශයේ පිහිටි අක්කර 100කින් පමණ යුතු සුන්දර උද්භිද උද්‍යානයකි.",
        desc_en: "A scenic botanical garden in Avissawella, showcasing wet zone plants.",
        lat: 6.9036, lon: 80.2031
    },
    { 
        id: 1010, cat: "wild", 
        name_si: "දෙහිවල සත්වෝද්‍යානය", name_en: "Dehiwala Zoo", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/5699105/pexels-photo-5699105.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ ප්‍රධානතම සත්වෝද්‍යානය වන මෙහි සතුන් රාශියක් නැරඹිය හැක.",
        desc_en: "The national zoological garden, housing a vast collection of animals.",
        lat: 6.8524, lon: 79.8741
    },
    { 
        id: 1011, cat: "nature", 
        name_si: "දියත උයන", name_en: "Diyatha Uyana", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/15103421/pexels-photo-15103421.jpeg", 
        desc_si: "දියවන්නා ඔය අසල පිහිටි ඉතාමත් අලංකාර උද්‍යානයක් සහ මල් අලෙවි මධ්‍යස්ථානයකි.",
        desc_en: "A beautiful park and flower market located on the banks of Diyawanna Lake.",
        lat: 6.9044, lon: 79.9142
    },
    { 
        id: 1012, cat: "beach", 
        name_si: "මවුන්ට් ලැවීනියා වෙරළ", name_en: "Mt. Lavinia Beach", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/10100233/pexels-photo-10100233.jpeg", 
        desc_si: "ඓතිහාසික වටිනාකමක් ඇති සහ විවේකීව කාලය ගත කළ හැකි සුන්දර වෙරළකි.",
        desc_en: "A historic beach destination, perfect for sunbathing and seafood lovers.",
        lat: 6.8344, lon: 79.8631
    },
    { 
        id: 1013, cat: "culture", 
        name_si: "ජාතික කෞතුකාගාරය", name_en: "National Museum", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/15104841/pexels-photo-15104841.jpeg", 
        desc_si: "ශ්‍රී ලංකාවේ ඉතිහාසය හා උරුමය මනාව පිළිබිඹු කරන ප්‍රධානතම කෞතුකාගාරයයි.",
        desc_en: "The largest museum in Sri Lanka, showcasing ancient artifacts and royal regalia.",
        lat: 6.9110, lon: 79.8612
    },
    { 
        id: 1014, cat: "culture", 
        name_si: "කෝට්ටේ රජමහා විහාරය", name_en: "Kotte Rajamaha Viharaya", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/20348731/pexels-photo-20348731.jpeg", 
        desc_si: "කෝට්ටේ යුගයට අයත් ඓතිහාසික වටිනාකමක් ඇති පූජනීය ස්ථානයකි.",
        desc_en: "A historic temple dating back to the Kotte Kingdom era.",
        lat: 6.8916, lon: 79.9073
    },
    { 
        id: 1015, cat: "nature", 
        name_si: "හේන්නෑවත්ත සත්ව උද්‍යානය", name_en: "Wet Zone Zoo", 
        district_si: "ගම්පහ", district_en: "Gampaha", 
        img: "https://images.pexels.com/photos/5699101/pexels-photo-5699101.jpeg", 
        desc_si: "පින්නවල මෙන් සතුන් නිදහසේ සැරිසරන තෙත් කලාපීය සත්වෝද්‍යානයකි.",
        desc_en: "A safari-style zoo dedicated to showcasing wet zone wildlife.",
        lat: 6.9042, lon: 79.9831
    },
    { 
        id: 1016, cat: "culture", 
        name_si: "කොළඹ ජමි උල් අල්ෆාර් පල්ලිය", name_en: "Jami Ul-Alfar Mosque", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/14841751/pexels-photo-14841751.jpeg", 
        desc_si: "රතු පල්ලිය ලෙස හඳුන්වන මෙය ඉතා අලංකාර රටා සහිත පැරණි පල්ලියකි.",
        desc_en: "Also known as the Red Mosque, famous for its striking red and white patterns.",
        lat: 6.9366, lon: 79.8492
    },
    { 
        id: 1017, cat: "nature", 
        name_si: "පාහියන්ගල ලෙන", name_en: "Pahiyangala Cave", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/20123451/pexels-photo-20123451.jpeg", 
        desc_si: "ආසියාවේ විශාලතම ස්වභාවික ලෙනක් වන මෙහි ප්‍රාග් ඓතිහාසික මානව නටබුන් හමුවේ.",
        desc_en: "One of the largest natural caves in Asia, with evidence of prehistoric human life.",
        lat: 6.6431, lon: 80.2117
    },
    { 
        id: 1018, cat: "nature", 
        name_si: "අත්තිඩිය පක්ෂි අභයභූමිය", name_en: "Attidiya Bird Sanctuary", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/15103425/pexels-photo-15103425.jpeg", 
        desc_si: "විවිධ වර්ගයේ පක්ෂීන් රැසක් දැකගත හැකි නගරය ආසන්නයේ ඇති වටිනා තෙත් බිමකි.",
        desc_en: "A biodiversity hotspot near the city, perfect for birdwatching enthusiasts.",
        lat: 6.8431, lon: 79.9112
    },
    { 
        id: 1019, cat: "beach", 
        name_si: "බේරුවල ප්‍රදීපාගාරය", name_en: "Beruwala Lighthouse", 
        district_si: "කළුතර", district_en: "Kalutara", 
        img: "https://images.pexels.com/photos/10100231/pexels-photo-10100231.jpeg", 
        desc_si: "මුහුද මැද කුඩා දූපතක පිහිටි ඉතාමත් අලංකාර ප්‍රදීපාගාරයකි.",
        desc_en: "A picturesque lighthouse located on a small island off the coast of Beruwala.",
        lat: 6.4631, lon: 79.9812
    },
    { 
        id: 1020, cat: "nature", 
        name_si: "විහාරමහාදේවි උද්‍යානය", name_en: "Viharamahadevi Park", 
        district_si: "කොළඹ", district_en: "Colombo", 
        img: "https://images.pexels.com/photos/20345671/pexels-photo-20345671.jpeg", 
        desc_si: "කොළඹ නගර මධ්‍යයේ පිහිටි විශාලතම සහ පැරණිතම උද්‍යානයයි.",
        desc_en: "The largest and oldest park in Colombo, located next to the Town Hall.",
        lat: 6.9125, lon: 79.8617
    }
];

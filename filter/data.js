

var filterList = new Map([
    ["Continent", ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"]],
    ["Signs", new Map([
    ["Chevrons", new Map([])],
    ["City", new Map([])],
    ["Directions", new Map([])],
    ["Pedestrian", new Map([])],
    ["Road Numbering", new Map([])],
    ["Street", new Map([])]])],
    ["Driving side", ["Left", "Right"]],
    ["License Plates", new Map([
    ["Background Color", ["Black", "Blue", "Gold / Yellow", "Green", "Red", "White", "Standard EU"]],
    ["Text Color", ["Black", "Blue", "Green", "Orange / Red", "White"]]])],
    ["Bollards", new Map([
    ["Color", ["Black", "Blue", "Green", "Grey", "Red", "White", "Yellow"]]])],
    ["Flags", new Map([
    ["Colors", ["Black", "Blue", "Gold / Yellow", "Green", "Orange", "Red", "White"]]])],
    ["Road Lines", ["Yellow side, White middle", "White side, White middle", "White side, Yellow middle", "Yellow side, Yellow middle", "White side, White & Yellow middle", "Yellow side, White & Yellow middle", "White side, White & Green middle", "Red side, White middle", "Red side, Yellow middle", "Orange & Blue", "White & Blue", "Red & White", "Blue"]],
    ["Weather", ["Snow"]],
    ["Years", ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]]])


// countries
var countries = [ { "name" : "Botswana", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Blue", "Black", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2012", "2013", "2016", "2017", "2019", "2020", "2021"]],
    ["_Bollards_Color", ["White", "Red"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/bw.png"]]), "textExpostition" : new Map([
    ["Domain", ".bw"],
    ["National Phone", "+267"]]) }, { "name" : "Eswatini", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Gold / Yellow", "White", "Black", "Red", "Blue"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle", "Yellow side, White & Yellow middle"]],
    ["_Years", ["2013", "2017", "2018", "2019", "2020", "2022"]],
    ["_License Plates_Background Color", ["White", "Green"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/sz.png"]]), "textExpostition" : new Map([
    ["Domain", ".sz"],
    ["National Phone", "+268"]]) }, { "name" : "Ghana", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Black", "Gold / Yellow", "Green", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2017", "2019", "2021", "2022"]],
    ["_Bollards_Color", ["White", "Red", "Black", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gh.png"]]), "textExpostition" : new Map([
    ["Domain", ".gh"],
    ["National Phone", "+233"]]) }, { "name" : "Kenya", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Black", "Red", "White", "Green"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2018", "2019", "2022"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ke.png"]]), "textExpostition" : new Map([
    ["Domain", ".ke"],
    ["National Phone", "+254"]]) }, { "name" : "Lesotho", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Black", "Blue", "Green", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2017", "2019", "2021", "2020"]],
    ["_Bollards_Color", ["White", "Black"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ls.png"]]), "textExpostition" : new Map([
    ["Domain", ".ls"],
    ["National Phone", "+266"]]) }, { "name" : "Madagascar", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Green", "Orange", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2020"]],
    ["_License Plates_Background Color", ["Black"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mg.png"]]), "textExpostition" : new Map([
    ["Domain", ".mg"],
    ["National Phone", "+261"]]) }, { "name" : "Nigeria", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Green", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2017", "2019", "2021", "2022"]],
    ["_Bollards_Color", ["Black", "White", "Red"]],
    ["_License Plates_Background Color", ["White", "Green"]],
    ["_License Plates_Text Color", ["Blue", "Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ng.png"]]), "textExpostition" : new Map([
    ["Domain", ".ng"],
    ["National Phone", "+234"]]) }, { "name" : "Rwanda", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Blue", "Gold / Yellow", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2022"]],
    ["_Bollards_Color", ["Red", "White"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/rw.png"]]), "textExpostition" : new Map([
    ["Domain", ".rw"],
    ["National Phone", "+250"]]) }, { "name" : "Senegal", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Gold / Yellow", "Green", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2017", "2019", "2020", "2022"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow", "Green"]],
    ["_License Plates_Background Color", ["Blue"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/sn.png"]]), "textExpostition" : new Map([
    ["Domain", ".sn"],
    ["National Phone", "+221"]]) }, { "name" : "South Africa", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Black", "Blue", "Gold / Yellow", "White", "Red", "Green"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle", "Red side, White middle"]],
    ["_Years", ["2009", "2010", "2011", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]],
    ["_Bollards_Color", ["Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White", "Green"]],
    ["_License Plates_Text Color", ["Black", "Blue", "Green"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/za.png"]]), "textExpostition" : new Map([
    ["Domain", ".za"],
    ["National Phone", "+27"]]) }, { "name" : "Tunisia", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2016", "2019", "2020", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Blue"]],
    ["_License Plates_Background Color", ["Black"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/tn.png"]]), "textExpostition" : new Map([
    ["Domain", ".tn تونس"],
    ["National Phone", "+216"]]) }, { "name" : "Uganda", "filters" : new Map([
    ["_Continent", ["Africa"]],
    ["_Flags_Colors", ["Black", "Gold / Yellow", "Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, Yellow middle", "White side, White middle"]],
    ["_Years", ["2015", "2019"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["Gold / Yellow", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ug.png"]]), "textExpostition" : new Map([
    ["Domain", ".ug"],
    ["National Phone", "+256"]]) }, { "name" : "Bangladesh", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Green", "Red"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2016", "2019", "2020", "2022", "2023"]],
    ["_Bollards_Color", ["Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/bd.png"]]), "textExpostition" : new Map([
    ["Domain", ".bd .বাংলা"],
    ["National Phone", "+880"]]) }, { "name" : "Bhutan", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Gold / Yellow", "Orange", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2014", "2016", "2017", "2018", "2019", "2021", "2022"]],
    ["_Bollards_Color", ["White", "Yellow", "Red", "Black"]],
    ["_License Plates_Background Color", ["Red"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/bt.png"]]), "textExpostition" : new Map([
    ["Domain", ".bt"],
    ["National Phone", "+975"]]) }, { "name" : "Cambodia", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2014", "2015", "2016", "2017", "2019", "2020", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Black"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue", "Orange / Red"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/kh.png"]]), "textExpostition" : new Map([
    ["Domain", ".kh"],
    ["National Phone", "+855"]]) }, { "name" : "Christmas Island", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "Green", "Gold / Yellow", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Bollards_Color", ["Red", "White"]],
    ["_License Plates_Background Color", ["Gold / Yellow", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/cx.png"]]), "textExpostition" : new Map([
    ["Domain", ".cx"],
    ["National Phone", "+61 8 9164 +6189164"]]) }, { "name" : "India", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Green", "Orange", "White", "Blue"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle", "Yellow side, White middle"]],
    ["_Years", ["2013", "2022", "2023"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White", "Blue", "Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/in.png"]]), "textExpostition" : new Map([
    ["Domain", ".in, .भारत, .بھارت, .భారత్, .ભારત, .ਭਾਰਤ, .இந்தியா, .ভারত, .ಭಾರತ, .ഭാരതം, .ଭାରତ"],
    ["National Phone", "+91"]]) }, { "name" : "Indonesia", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2016", "2017", "2019", "2020", "2021", "2022", "2023"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Black"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/id.png"]]), "textExpostition" : new Map([
    ["Domain", ".id"],
    ["National Phone", "+62"]]) }, { "name" : "Israel", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2012", "2013", "2014", "2015", "2016", "2017", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "White", "Grey"]],
    ["_License Plates_Background Color", ["Gold / Yellow", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/il.png"]]), "textExpostition" : new Map([
    ["Domain", ".il"],
    ["National Phone", "+972"]]) }, { "name" : "Japan", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle", "White side, White & Yellow middle"]],
    ["_Years", ["2009", "2014", "2016", "2018", "2019", "2020", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Black", "Grey", "Green"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/jp.png"]]), "textExpostition" : new Map([
    ["Domain", ".jp"],
    ["National Phone", "+81"]]) }, { "name" : "Jordan", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Black", "White", "Green", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2017", "2018", "2019"]],
    ["_Bollards_Color", ["White", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/jo.png"]]), "textExpostition" : new Map([
    ["Domain", ".jo, .الاردن"],
    ["National Phone", "+962"]]) }, { "name" : "Kyrgyzstan", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2016", "2018", "2019"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["White", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/kg.png"]]), "textExpostition" : new Map([
    ["Domain", ".kg"],
    ["National Phone", "+996"]]) }, { "name" : "Laos", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2016", "2018", "2019"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/la.png"]]), "textExpostition" : new Map([
    ["Domain", ".la, .ລາວ"],
    ["National Phone", "+856"]]) }, { "name" : "Malaysia", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["White", "Red", "Gold / Yellow", "Blue"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2018", "2019", "2020", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["Black"]],
    ["_License Plates_Text Color", ["White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/my.png"]]), "textExpostition" : new Map([
    ["Domain", ".my, .مليسيا"],
    ["National Phone", "+60"]]) }, { "name" : "Mongolia", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "Blue", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2016", "2017", "2018", "2019", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White"]],
    ["_License Plates_Background Color", ["White", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mn.png"]]), "textExpostition" : new Map([
    ["Domain", ".mn, .мон"],
    ["National Phone", "+976"]]) }, { "name" : "Philippines", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["White", "Red", "Blue", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle", "White side, White & Yellow middle", "Orange & Blue", "White & Blue"]],
    ["_Years", ["2016", "2017", "2018", "2019", "2020", "2023"]],
    ["_Bollards_Color", ["White", "Yellow", "Black"]],
    ["_License Plates_Background Color", ["White", "Green"]],
    ["_License Plates_Text Color", ["Black", "Green"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ph.png"]]), "textExpostition" : new Map([
    ["Domain", ".ph"],
    ["National Phone", "+63"]]) }, { "name" : "Russia", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2016", "2017", "2018", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "White", "Red"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ru.png"]]), "textExpostition" : new Map([
    ["Domain", ".ru, .рф"],
    ["National Phone", "+7"]]) }, { "name" : "Singapore", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2019", "2021", "2023"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/sg.png"]]), "textExpostition" : new Map([
    ["Domain", ".sg"],
    ["National Phone", "+65"]]) }, { "name" : "South Korea", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Black", "White", "Red", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2019", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Yellow", "Black", "Grey", "Red"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/kr.png"]]), "textExpostition" : new Map([
    ["Domain", ".kr, .한국"],
    ["National Phone", "+82"]]) }, { "name" : "Sri Lanka", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Gold / Yellow", "Green", "Orange", "Red"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle"]],
    ["_Years", ["2016", "2019", "2020", "2021", "2022"]],
    ["_Bollards_Color", ["Black", "White"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/lk.png"]]), "textExpostition" : new Map([
    ["Domain", ".lk, .ලංකා, .இலங்கை"],
    ["National Phone", "+94"]]) }, { "name" : "Taiwan", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Red", "White", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle", "Red side, Yellow middle", "Blue"]],
    ["_Years", ["2011", "2012", "2014", "2015", "2016", "2019", "2021", "2023"]],
    ["_Bollards_Color", ["Black", "Yellow", "Red"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/tw.png"]]), "textExpostition" : new Map([
    ["Domain", ".tw, .台湾, .台灣"],
    ["National Phone", "+886"]]) }, { "name" : "Thailand", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2015", "2016", "2017", "2019", "2020", "2021", "2023"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/th.png"]]), "textExpostition" : new Map([
    ["Domain", ".th, .ไทย"],
    ["National Phone", "+66"]]) }, { "name" : "United Arab Emirates", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Black", "White", "Red", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle", "Yellow side, Yellow middle"]],
    ["_Years", ["2016", "2017", "2019", "2020", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["White", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ae.png"]]), "textExpostition" : new Map([
    ["Domain", ".ae, .امارات"],
    ["National Phone", "+971"]]) }, { "name" : "Vietnam", "filters" : new Map([
    ["_Continent", ["Asia"]],
    ["_Flags_Colors", ["Gold / Yellow", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Years", ["2020", "2021"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/vn.png"]]), "textExpostition" : new Map([
    ["Domain", ".vn"],
    ["National Phone", "+84"]]) }, { "name" : "Albania", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Black", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2016", "2019", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["Standard EU", "Blue", "Red", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/al.png"]]), "textExpostition" : new Map([
    ["Domain", ".al"],
    ["National Phone", "+355"]]) }, { "name" : "Andorra", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2017", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Green", "Yellow"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black", "Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ad.png"]]), "textExpostition" : new Map([
    ["Domain", ".ad"],
    ["National Phone", "+376"]]) }, { "name" : "Austria", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2018", "2019", "2020", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow", "Blue"]],
    ["_License Plates_Background Color", ["Standard EU", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/at.png"]]), "textExpostition" : new Map([
    ["Domain", ".at"],
    ["National Phone", "+43"]]) }, { "name" : "Belgium", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Black", "Gold / Yellow", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2017", "2018", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Yellow", "Grey", "Black", "Red", "Green"]],
    ["_License Plates_Background Color", ["Standard EU", "White"]],
    ["_License Plates_Text Color", ["Orange / Red"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/be.png"]]), "textExpostition" : new Map([
    ["Domain", ".be"],
    ["National Phone", "+32"]]) }, { "name" : "Bulgaria", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["White", "Red", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2015", "2016", "2017", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/bg.png"]]), "textExpostition" : new Map([
    ["Domain", ".bg, .бг"],
    ["National Phone", "+359"]]) }, { "name" : "Croatia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Red & White"]],
    ["_Years", ["2012", "2013", "2016", "2019", "2020", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["Standard EU", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/hr.png"]]), "textExpostition" : new Map([
    ["Domain", ".hr"],
    ["National Phone", "+385"]]) }, { "name" : "Czech Republic", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2009", "2010", "2012", "2013", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Red", "Black", "Green", "Blue", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/cz.png"]]), "textExpostition" : new Map([
    ["Domain", ".cz"],
    ["National Phone", "+420"]]) }, { "name" : "Denmark", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2016", "2017", "2018", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Green"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow", "Blue", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/dk.png"]]), "textExpostition" : new Map([
    ["Domain", ".dk"],
    ["National Phone", "+45"]]) }, { "name" : "Estonia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Black", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2013", "2017", "2019", "2020", "2022"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ee.png"]]), "textExpostition" : new Map([
    ["Domain", ".ee"],
    ["National Phone", "+372"]]) }, { "name" : "Faroe Islands", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "Yellow", "White"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/fo.png"]]), "textExpostition" : new Map([
    ["Domain", ".fo"],
    ["National Phone", "+298"]]) }, { "name" : "Finland", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle", "White side, White & Yellow middle"]],
    ["_Years", ["2013", "2014", "2017", "2019", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "White", "Yellow", "Red"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/fi.png"]]), "textExpostition" : new Map([
    ["Domain", ".fi, .ax (Åland)"],
    ["National Phone", "+358"]]) }, { "name" : "France", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2009", "2010", "2011", "2013", "2014", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Grey", "Green", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/fr.png"]]), "textExpostition" : new Map([
    ["Domain", ".fr"],
    ["National Phone", "+33"]]) }, { "name" : "Germany", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Black", "Gold / Yellow", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle"]],
    ["_Years", ["2017", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Black", "Yellow", "Red"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/de.png"]]), "textExpostition" : new Map([
    ["Domain", ".de"],
    ["National Phone", "+49"]]) }, { "name" : "Gibraltar", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle", "White side, White middle"]],
    ["_Years", ["2016", "2019", "2020", "2021", "2022"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gi.png"]]), "textExpostition" : new Map([
    ["Domain", ".gi"],
    ["National Phone", "+350"]]) }, { "name" : "Greece", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gr.png"]]), "textExpostition" : new Map([
    ["Domain", ".gr, .ελ"],
    ["National Phone", "+30"]]) }, { "name" : "Hungary", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2014", "2016", "2018", "2019", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "Yellow", "Grey", "White", "Black", "Blue"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/hu.png"]]), "textExpostition" : new Map([
    ["Domain", ".hu"],
    ["National Phone", "+36"]]) }, { "name" : "Iceland", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2017", "2018", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/is.png"]]), "textExpostition" : new Map([
    ["Domain", ".is"],
    ["National Phone", "+354"]]) }, { "name" : "Ireland", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["White", "Orange", "Green"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2011", "2013", "2014", "2017", "2019", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black", "Green"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ie.png"]]), "textExpostition" : new Map([
    ["Domain", ".ie"],
    ["National Phone", "+353"]]) }, { "name" : "Isle of Man", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Gold / Yellow"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle", "White side, White middle"]],
    ["_Years", ["2011", "2013", "2016", "2018", "2019", "2020", "2021", "2022"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Blue"]],
    ["_License Plates_Background Color", ["White", "Red", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/im.png"]]), "textExpostition" : new Map([
    ["Domain", ".im"],
    ["National Phone", "+44 1624 +441624"]]) }, { "name" : "Italy", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["White", "Red", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2014", "2016", "2017", "2018", "2019", "2020", "2021", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU", "Blue", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/it.png"]]), "textExpostition" : new Map([
    ["Domain", ".it"],
    ["National Phone", "+39"]]) }, { "name" : "Jersey", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Gold / Yellow"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["Yellow side, White middle"]],
    ["_Years", ["2011", "2013", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Green"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/je.png"]]), "textExpostition" : new Map([
    ["Domain", ".je"],
    ["National Phone", "+44 1534 +441534"]]) }, { "name" : "Latvia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2013", "2014", "2016", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/lv.png"]]), "textExpostition" : new Map([
    ["Domain", ".lv"],
    ["National Phone", "+371"]]) }, { "name" : "Lithuania", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Gold / Yellow", "Green", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle"]],
    ["_Years", ["2013", "2014", "2016", "2018", "2019", "2020", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/lt.png"]]), "textExpostition" : new Map([
    ["Domain", ".lt"],
    ["National Phone", "+370"]]) }, { "name" : "Luxembourg", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "White", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2014", "2017", "2019", "2021", "2022"]],
    ["_Bollards_Color", ["Black", "Red", "White"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/lu.png"]]), "textExpostition" : new Map([
    ["Domain", ".lu"],
    ["National Phone", "+352"]]) }, { "name" : "Malta", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2016", "2019"]],
    ["_Bollards_Color", ["Black", "Red", "White"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mt.png"]]), "textExpostition" : new Map([
    ["Domain", ".mt"],
    ["National Phone", "+356"]]) }, { "name" : "Monaco", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2016", "2019", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Grey"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mc.png"]]), "textExpostition" : new Map([
    ["Domain", ".mc"],
    ["National Phone", "+377"]]) }, { "name" : "Montenegro", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "Gold / Yellow", "Blue", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle"]],
    ["_Years", ["2016", "2019", "2021"]],
    ["_Bollards_Color", ["Black", "Red", "White"]],
    ["_License Plates_Background Color", ["Standard EU", "White", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/me.png"]]), "textExpostition" : new Map([
    ["Domain", ".me"],
    ["National Phone", "+382"]]) }, { "name" : "Netherlands", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, White & Green middle"]],
    ["_Years", ["2009", "2010", "2013", "2015", "2016", "2018", "2019", "2020", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Blue", "Black", "Green"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/nl.png"]]), "textExpostition" : new Map([
    ["Domain", ".nl"],
    ["National Phone", "+31"]]) }, { "name" : "North Macedonia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle"]],
    ["_Years", ["2015", "2016", "2017", "2019"]],
    ["_Bollards_Color", ["Red", "White", "Black"]],
    ["_License Plates_Background Color", ["Standard EU", "White", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mk.png"]]), "textExpostition" : new Map([
    ["Domain", ".mk, .мкд"],
    ["National Phone", "+389"]]) }, { "name" : "Norway", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2010", "2011", "2012", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "White", "Red", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU", "Green"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/no.png"]]), "textExpostition" : new Map([
    ["Domain", ".no"],
    ["National Phone", "+47"]]) }, { "name" : "Poland", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2014", "2017", "2016", "2018", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Green"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/pl.png"]]), "textExpostition" : new Map([
    ["Domain", ".pl"],
    ["National Phone", "+48"]]) }, { "name" : "Portugal", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "Green", "Gold / Yellow", "White", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["Yellow side, White middle", "White side, White middle"]],
    ["_Years", ["2013", "2014", "2015", "2017", "2019", "2020", "2021", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/pt.png"]]), "textExpostition" : new Map([
    ["Domain", ".pt"],
    ["National Phone", "+351"]]) }, { "name" : "Romania", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Gold / Yellow", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle"]],
    ["_Years", ["2013", "2014", "2017", "2019", "2022"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ro.png"]]), "textExpostition" : new Map([
    ["Domain", ".ro"],
    ["National Phone", "+40"]]) }, { "name" : "San Marino", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "White", "Gold / Yellow", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2013", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/sm.png"]]), "textExpostition" : new Map([
    ["Domain", ".sm"],
    ["National Phone", "+378"]]) }, { "name" : "Serbia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Red", "White", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2016", "2017", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "Red", "White"]],
    ["_License Plates_Background Color", ["Standard EU", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/rs.png"]]), "textExpostition" : new Map([
    ["Domain", ".rs, .срб"],
    ["National Phone", "+381"]]) }, { "name" : "Slovakia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2013", "2015", "2018", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow", "Blue"]],
    ["_License Plates_Background Color", ["Standard EU", "Red"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/sk.png"]]), "textExpostition" : new Map([
    ["Domain", ".sk"],
    ["National Phone", "+421"]]) }, { "name" : "Slovenia", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2013", "2014", "2016", "2017", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Standard EU", "Green", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/si.png"]]), "textExpostition" : new Map([
    ["Domain", ".si"],
    ["National Phone", "+386"]]) }, { "name" : "Spain", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "Gold / Yellow", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle"]],
    ["_Years", ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow", "Grey", "Green", "Blue"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/es.png"]]), "textExpostition" : new Map([
    ["Domain", ".es"],
    ["National Phone", "+34"]]) }, { "name" : "Sweden", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Gold / Yellow", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2011", "2013", "2016", "2017", "2018", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow", "Grey", "Blue"]],
    ["_License Plates_Background Color", ["Standard EU", "White", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/se.png"]]), "textExpostition" : new Map([
    ["Domain", ".se"],
    ["National Phone", "+46"]]) }, { "name" : "Switzerland", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2011", "2012", "2014", "2015", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "White", "Red"]],
    ["_License Plates_Background Color", ["White", "Red", "Green"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ch.png"]]), "textExpostition" : new Map([
    ["Domain", ".ch, .swiss"],
    ["National Phone", "+41"]]) }, { "name" : "Turkey", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle", "White side, White & Yellow middle", "White side, Yellow middle"]],
    ["_Years", ["2014", "2015", "2016", "2018", "2019", "2020", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Grey", "Black"]],
    ["_License Plates_Background Color", ["Standard EU"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/tr.png"]]), "textExpostition" : new Map([
    ["Domain", ".tr"],
    ["National Phone", "+90"]]) }, { "name" : "Ukraine", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2012", "2014", "2015", "2017", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black"]],
    ["_License Plates_Background Color", ["Standard EU", "White", "Gold / Yellow", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ua.png"]]), "textExpostition" : new Map([
    ["Domain", ".ua, .укр"],
    ["National Phone", "+380"]]) }, { "name" : "United Kingdom", "filters" : new Map([
    ["_Continent", ["Europe"]],
    ["_Flags_Colors", ["Blue", "White", "Red"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, White middle"]],
    ["_Years", ["2009", "2010", "2013", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black"]],
    ["_License Plates_Background Color", ["Standard EU", "White", "Gold / Yellow", "Green"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gb.png"]]), "textExpostition" : new Map([
    ["Domain", ".uk"],
    ["National Phone", "+44"]]) }, { "name" : "Canada", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2009", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Black", "Grey", "Green", "Blue"]],
    ["_License Plates_Background Color", ["White", "Blue", "Green"]],
    ["_License Plates_Text Color", ["Orange / Red", "Blue", "Black", "Green"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ca.png"]]), "textExpostition" : new Map([
    ["Domain", ".ca"],
    ["National Phone", "+1"]]) }, { "name" : "Curaçao", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Blue", "Gold / Yellow", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2018"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/cw.png"]]), "textExpostition" : new Map([
    ["Domain", ".cw"],
    ["National Phone", "+599 9 +5999"]]) }, { "name" : "Dominican Republic", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Red", "White", "Blue", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2020"]],
    ["_License Plates_Background Color", ["Gold / Yellow", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/do.png"]]), "textExpostition" : new Map([
    ["Domain", ".do"],
    ["National Phone", "+1 809 +1809 +1 829 +1829 +1 849 +1849"]]) }, { "name" : "Greenland", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["White", "Red"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle"]],
    ["_Years", ["2015", "2016", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gl.png"]]), "textExpostition" : new Map([
    ["Domain", ".gl"],
    ["National Phone", "+299"]]) }, { "name" : "Guatemala", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Blue", "White", "Gold / Yellow", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2017", "2019", "2021"]],
    ["_License Plates_Background Color", ["White", "Green"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gt.png"]]), "textExpostition" : new Map([
    ["Domain", ".gt"],
    ["National Phone", "+502"]]) }, { "name" : "Mexico", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["White", "Red", "Green", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle", "Yellow side, White middle", "White side, White middle"]],
    ["_Years", ["2015", "2016", "2017", "2018", "2019", "2020", "2022", "2023"]],
    ["_Bollards_Color", ["Red", "White", "Black", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["White", "Blue", "Gold / Yellow", "Green", "Red"]],
    ["_License Plates_Text Color", ["Black", "Blue", "Green"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mx.png"]]), "textExpostition" : new Map([
    ["Domain", ".mx"],
    ["National Phone", "+52"]]) }, { "name" : "Puerto Rico", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2016"]],
    ["_License Plates_Background Color", ["White", "Blue", "Green"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/pr.png"]]), "textExpostition" : new Map([
    ["Domain", ".pr"],
    ["National Phone", "+1 787 +1787 +1 939 +1939"]]) }, { "name" : "United States", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "Green", "White", "Yellow", "Grey", "Black", "Blue"]],
    ["_License Plates_Text Color", ["Blue", "Black", "Orange / Red", "Green", "White"]],
    ["_License Plates_Background Color", ["Black", "Gold / Yellow", "White", "Red", "Green", "Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/us.png"]]), "textExpostition" : new Map([
    ["Domain", ".us"],
    ["National Phone", "+1"]]) }, { "name" : "US Virgin Islands", "filters" : new Map([
    ["_Continent", ["North America"]],
    ["_Flags_Colors", ["Gold / Yellow", "White", "Blue", "Red", "Green"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2017", "2019"]],
    ["_License Plates_Background Color", ["Blue"]],
    ["_License Plates_Text Color", ["White", "Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/vi.png"]]), "textExpostition" : new Map([
    ["Domain", ".vi"],
    ["National Phone", "+1 340 +1340"]]) }, { "name" : "Argentina", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Blue", "White", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle", "White side, White & Yellow middle"]],
    ["_Years", ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Black", "Blue"]],
    ["_License Plates_Background Color", ["Blue", "White", "Black"]],
    ["_License Plates_Text Color", ["Black", "White"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ar.png"]]), "textExpostition" : new Map([
    ["Domain", ".ar"],
    ["National Phone", "+54"]]) }, { "name" : "Bolivia", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Red", "Gold / Yellow", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2015", "2016", "2017", "2018", "2019", "2020"]],
    ["_Bollards_Color", ["White", "Red", "Yellow"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/bo.png"]]), "textExpostition" : new Map([
    ["Domain", ".bo"],
    ["National Phone", "+591"]]) }, { "name" : "Brazil", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Green", "Gold / Yellow", "Blue", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle", "White side, White middle", "Red & White", "White & Blue"]],
    ["_Years", ["2013", "2014", "2015", "2016", "2018", "2019", "2020", "2022", "2023"]],
    ["_Bollards_Color", ["Black", "Red", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Blue", "White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/br.png"]]), "textExpostition" : new Map([
    ["Domain", ".br"],
    ["National Phone", "+55"]]) }, { "name" : "Chile", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle", "White side, Yellow middle", "Yellow side, White middle"]],
    ["_Years", ["2014", "2015", "2016", "2019", "2020"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Black", "White", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/cl.png"]]), "textExpostition" : new Map([
    ["Domain", ".cl"],
    ["National Phone", "+56"]]) }, { "name" : "Colombia", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Gold / Yellow", "Red", "Blue"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2015", "2016", "2019", "2020"]],
    ["_Bollards_Color", ["Black", "White", "Yellow"]],
    ["_License Plates_Background Color", ["Gold / Yellow"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/co.png"]]), "textExpostition" : new Map([
    ["Domain", ".co"],
    ["National Phone", "+57"]]) }, { "name" : "Ecuador", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Gold / Yellow", "Blue", "Red", "Green"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2015", "2017", "2018", "2019", "2020", "2021"]],
    ["_Bollards_Color", ["Red", "White", "Grey", "Black"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/ec.png"]]), "textExpostition" : new Map([
    ["Domain", ".ec"],
    ["National Phone", "+593"]]) }, { "name" : "Peru", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Red", "White"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle"]],
    ["_Years", ["2013", "2014", "2016", "2017", "2019", "2020", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["White", "Yellow", "Grey", "Black", "Red"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/pe.png"]]), "textExpostition" : new Map([
    ["Domain", ".pe"],
    ["National Phone", "+51"]]) }, { "name" : "Uruguay", "filters" : new Map([
    ["_Continent", ["South America"]],
    ["_Flags_Colors", ["Blue", "White", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, White & Yellow middle"]],
    ["_Years", ["2015", "2016", "2017", "2019", "2020"]],
    ["_Bollards_Color", ["White", "Yellow", "Grey"]],
    ["_License Plates_Background Color", ["White", "Blue"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/uy.png"]]), "textExpostition" : new Map([
    ["Domain", ".uy"],
    ["National Phone", "+598"]]) }, { "name" : "American Samoa", "filters" : new Map([
    ["_Continent", ["Oceania"]],
    ["_Flags_Colors", ["Red", "White", "Blue", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_Years", ["2015", "2019"]],
    ["_License Plates_Background Color", ["Green", "Blue", "White"]],
    ["_License Plates_Text Color", ["Black", "Blue"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/as.png"]]), "textExpostition" : new Map([
    ["Domain", ".as"],
    ["National Phone", "+1 684 +1684"]]) }, { "name" : "Australia", "filters" : new Map([
    ["_Continent", ["Oceania"]],
    ["_Flags_Colors", ["Blue", "Red", "White"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "Yellow side, Yellow middle", "Yellow side, White middle"]],
    ["_Years", ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Black", "Green", "Blue", "Grey"]],
    ["_License Plates_Background Color", ["White", "Gold / Yellow"]],
    ["_License Plates_Text Color", ["Blue", "Black", "Orange / Red"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/au.png"]]), "textExpostition" : new Map([
    ["Domain", ".au"],
    ["National Phone", "+61"]]) }, { "name" : "Guam", "filters" : new Map([
    ["_Continent", ["Oceania"]],
    ["_Flags_Colors", ["Red", "Blue", "Green", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/gu.png"]]), "textExpostition" : new Map([
    ["Domain", ".gu"],
    ["National Phone", "+1 670 +1670"]]) }, { "name" : "New Zealand", "filters" : new Map([
    ["_Continent", ["Oceania"]],
    ["_Flags_Colors", ["Red", "White", "Blue"]],
    ["_Driving side", ["Left"]],
    ["_Road Lines", ["White side, White middle", "White side, Yellow middle", "Yellow side, White middle", "Yellow side, Yellow middle", "White side, White & Yellow middle"]],
    ["_Years", ["2014", "2016", "2017", "2018", "2019", "2020", "2021"]],
    ["_Weather", ["Snow"]],
    ["_Bollards_Color", ["Red", "White", "Yellow", "Green"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/nz.png"]]), "textExpostition" : new Map([
    ["Domain", ".nz"],
    ["National Phone", "+64"]]) }, { "name" : "Northern Mariana Islands", "filters" : new Map([
    ["_Continent", ["Oceania"]],
    ["_Flags_Colors", ["Blue", "White", "Red", "Green", "Gold / Yellow"]],
    ["_Driving side", ["Right"]],
    ["_Road Lines", ["White side, Yellow middle"]],
    ["_License Plates_Background Color", ["White"]],
    ["_License Plates_Text Color", ["Blue", "Black"]]]), "imageExposition" : new Map([
    ["flag", "Images/Flags/mp.png"]]), "textExpostition" : new Map([
    ["Domain", ".mp"],
    ["National Phone", "+1 670 +1670"]]) } ]
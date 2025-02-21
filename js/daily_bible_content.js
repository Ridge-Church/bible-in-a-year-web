// This monstrosity is gorgeous
// Just embedding it bypasses the need to fetch a remote file, and it also means we don't have to use any libraries to fetch stuff in a weird way.
const bible_content = {
  "day": [
    {
      "heading": "Creation and the Fall",
      "day": "1",
      "book": "Genesis ",
      "ch": "1-3",
      "psalm": "1",
      "video_title": "Genesis 1",
      "video_url": "https://bibleproject.com/explore/video/genesis-1/",
      "blog_title": "Genesis and Ancient Cosmic Geography ",
      "blog_url": "https://bibleproject.com/blog/genesis-ancient-cosmic-geography/"
    },
    {
      "heading": "Creation and the Fall",
      "day": "2",
      "book": "Genesis ",
      "ch": "4-7",
      "psalm": "2",
      "video_title": "Torah Series: Genesis 1-11 ",
      "video_url": "https://bibleproject.com/explore/video/torah-genesis-1/"
    },
    {
      "heading": "Creation and the Fall",
      "day": "3",
      "book": "Genesis ",
      "ch": "8-11",
      "psalm": "3",
      "video_title": "OT Overviews: Genesis 1-11 ",
      "video_url": "https://bibleproject.com/explore/video/genesis-1-11/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "4",
      "book": "Genesis ",
      "ch": "12-15",
      "psalm": "4",
      "video_title": "Abraham and Melchizedek ",
      "video_url": "https://bibleproject.com/explore/video/abraham-and-melchizedek/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "5",
      "book": "Genesis ",
      "ch": "16-18",
      "psalm": "5",
      "video_title": "The Covenants",
      "video_url": "https://bibleproject.com/explore/video/covenants/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "6",
      "book": "Genesis ",
      "ch": "19-21",
      "psalm": "6"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "7",
      "book": "Genesis ",
      "ch": "22-24",
      "psalm": "7",
      "video_title": "The Test",
      "video_url": "https://bibleproject.com/explore/video/the-test/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "8",
      "book": "Genesis ",
      "ch": "25-28",
      "psalm": "8",
      "video_title": "Image of God",
      "video_url": "https://bibleproject.com/explore/video/image-of-god/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "9",
      "book": "Genesis ",
      "ch": "29-31",
      "psalm": "9",
      "video_title": "Torah Series: Genesis 12-50 ",
      "video_url": "https://bibleproject.com/explore/video/torah-genesis-2/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "10",
      "book": "Genesis ",
      "ch": "32-34",
      "psalm": "10",
      "video_title": "What Is the Bible?",
      "video_url": "https://bibleproject.com/explore/video/what-is-bible/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "11",
      "book": "Genesis ",
      "ch": "35-37",
      "psalm": "11",
      "video_title": "The Story of the Bible ",
      "video_url": "https://bibleproject.com/explore/video/the-story-of-the-bible/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "12",
      "book": "Genesis ",
      "ch": "38-40",
      "psalm": "12",
      "video_title": "Literary Styles ",
      "video_url": "https://bibleproject.com/explore/video/literary-styles-bible/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "13",
      "book": "Genesis ",
      "ch": "41-42",
      "psalm": "13",
      "video_title": "Ancient Jewish Meditation Literature ",
      "video_url": "https://bibleproject.com/explore/video/bible-jewish-meditation-literature-h2r/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "14",
      "book": "Genesis ",
      "ch": "43-45",
      "psalm": "14",
      "video_title": "Character",
      "video_url": "https://bibleproject.com/explore/video/character-biblical-narrative/",
      "blog_title": "God Has a Name... Many Actually! ",
      "blog_url": "https://bibleproject.com/blog/god-name-many-actually/"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "15",
      "book": "Genesis ",
      "ch": "46-47",
      "psalm": "15"
    },
    {
      "heading": "Abrahamic Covenant ",
      "day": "16",
      "book": "Genesis ",
      "ch": "48-50",
      "psalm": "16",
      "video_title": "OT Overviews: Genesis 12-50 ",
      "video_url": "https://bibleproject.com/explore/video/genesis-12-50/"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "17",
      "book": "Exodus",
      "ch": "1-3",
      "psalm": "17",
      "video_title": "Torah Series: Exodus 1-18 ",
      "video_url": "https://bibleproject.com/explore/video/torah-exodus-1/"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "18",
      "book": "Exodus",
      "ch": "4-6",
      "psalm": "18",
      "video_title": "Moses and Aaron ",
      "video_url": "https://bibleproject.com/explore/video/moses-and-aaron/"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "19",
      "book": "Exodus",
      "ch": "7-9",
      "psalm": "19",
      "blog_title": "When Pharoah's Heart Grew Harder ",
      "blog_url": "https://bibleproject.com/blog/pharaohs-heart-grew-harder/"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "20",
      "book": "Exodus",
      "ch": "10-12",
      "psalm": "20"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "21",
      "book": "Exodus",
      "ch": "13-15",
      "psalm": "21",
      "blog_title": "Biblical Storytelling Techniques: Repetition & Themes ",
      "blog_url": "https://thebibleproject.com/blog/biblical-storytelling-repetition-themes/"
    },
    {
      "heading": "The Exodus from Egypt ",
      "day": "22",
      "book": "Exodus",
      "ch": "16-18",
      "psalm": "22",
      "video_title": "OT Overviews: Exodus 1-18 ",
      "video_url": "https://bibleproject.com/explore/video/exodus-1-18/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "23",
      "book": "Exodus",
      "ch": "19-21",
      "psalm": "23",
      "video_title": "OT Overviews: Exodus 19-40 ",
      "video_url": "https://bibleproject.com/explore/video/exodus-19-40/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "24",
      "book": "Exodus",
      "ch": "22-24",
      "psalm": "24",
      "video_title": "Torah Series: Exodus 19-40 ",
      "video_url": "https://bibleproject.com/explore/video/torah-exodus-2/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "25",
      "book": "Exodus",
      "ch": "25-27",
      "psalm": "25",
      "video_title": "Royal Priests of Eden ",
      "video_url": "https://bibleproject.com/explore/video/priests-of-eden/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "26",
      "book": "Exodus",
      "ch": "28-29",
      "psalm": "26"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "27",
      "book": "Exodus",
      "ch": "30-31",
      "psalm": "27"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "28",
      "book": "Exodus",
      "ch": "32-34",
      "psalm": "28",
      "video_title": "Visual Commentary: Exodus 34:6-7 ",
      "video_url": "https://bibleproject.com/explore/video/character-of-god-exodus/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "29",
      "book": "Exodus",
      "ch": "35-40",
      "psalm": "29",
      "video_title": "Compassion",
      "video_url": "https://bibleproject.com/explore/video/character-of-god-compassion/",
      "blog_title": "Animal Sacrifice? Really? ",
      "blog_url": "https://thebibleproject.com/blog/animal-sacrifice-really/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "30",
      "book": "Leviticus",
      "ch": "1-4",
      "psalm": "30",
      "video_title": "Grace",
      "video_url": "https://bibleproject.com/explore/video/character-of-god-grace/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "31",
      "book": "Leviticus",
      "ch": "5-7",
      "psalm": "31",
      "video_title": "Slow to Anger",
      "video_url": "https://bibleproject.com/explore/video/slow-to-anger/"
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "32",
      "book": "Leviticus",
      "ch": "8-10",
      "psalm": "32",
      "video_title": "Loyal Love ",
      "video_url": "https://bibleproject.com/explore/video/loyal-love/",
      "prayer": "Praise God for raising up more Youth leaders. Pray for wisdom and discernment for them and that they would be a Godly example to all. "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "33",
      "book": "Leviticus",
      "ch": "11-13",
      "psalm": "33",
      "video_title": "Faithful",
      "video_url": "https://bibleproject.com/explore/video/faithful/",
      "prayer": "Pray for the young men who are leading Alpha in their school. Pray for an outpouring of the Holy Spirit and many lives changed. "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "34",
      "book": "Leviticus",
      "ch": "14-15",
      "psalm": "34",
      "video_title": "The Law",
      "video_url": "https://bibleproject.com/explore/video/law/",
      "prayer": "Pray for healing for those in our church family who are dealing with chronic health issues. "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "35",
      "book": "Leviticus",
      "ch": "16-18",
      "psalm": "35",
      "video_title": "Biblical Law",
      "video_url": "https://bibleproject.com/explore/video/reading-biblical-law/",
      "prayer": "Pray for those who will be leading us in worship tomorrow. Pray for protection for them and for their families. We have an enemy who hates to see God glorified."
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "36",
      "book": "Leviticus",
      "ch": "19-20",
      "psalm": "36",
      "video_title": "Torah Series: Leviticus ",
      "video_url": "https://bibleproject.com/explore/video/torah-leviticus/",
      "prayer": "Pray for those who are taking the Starting Point class. Pray for changed hearts and minds as they learn about Jesus. "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "37",
      "book": "Leviticus",
      "ch": "21-23",
      "psalm": "37",
      "video_title": "Sacrifice and Atonement ",
      "video_url": "https://bibleproject.com/explore/video/sacrifice-and-atonement/",
      "prayer": "Pray for the leaders of Celebrate Recovery as they take people through a 12 Step Study tonight. "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "38",
      "book": "Leviticus",
      "ch": "24-25",
      "psalm": "38",
      "prayer": "Pray that we would be filled with the knowledge of God's will in all spiritual wisdom and understanding so as to walk in a manner worthy of the Lord. Col 1: 9b-10a "
    },
    {
      "heading": "The Covenant at Mount Sinai",
      "day": "39",
      "book": "Leviticus",
      "ch": "26-27",
      "psalm": "39",
      "video_title": "OT Overviews: Leviticus ",
      "video_url": "https://bibleproject.com/explore/video/leviticus/",
      "prayer": "Pray for parents to have wisdom and discernment as they teach their children to follow Jesus. Pray for the Young Moms group happening today. "
    },
    {
      "heading": "The Wilderness",
      "day": "40",
      "book": "Numbers",
      "ch": "1-4",
      "psalm": "40",
      "video_title": "Torah Series: Numbers ",
      "video_url": "https://bibleproject.com/explore/video/torah-numbers/",
      "prayer": "Pray that we would all discover our spiritual gifts and use them to serve one another as good stewards of God's varied grace...in order that in everything God may be glorified through Jesus Christ (1Pet 4:10-11)"
    },
    {
      "heading": "The Wilderness",
      "day": "41",
      "book": "Numbers",
      "ch": "5-7",
      "psalm": "41",
      "prayer": "Pray that God would show us where we should be serving our city. Pray that He would open doors and raise up volunteers for His work."
    },
    {
      "heading": "The Wilderness",
      "day": "42",
      "book": "Numbers",
      "ch": "8-10",
      "psalm": "42",
      "prayer": "\"...take the helmet of salvation, and the sword of the Spirit, which is the word of God, praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints...\" (Eph 6:17-18)"
    },
    {
      "heading": "The Wilderness",
      "day": "43",
      "book": "Numbers",
      "ch": "11-13",
      "psalm": "43",
      "blog_title": "Old Rituals & New Realities ",
      "blog_url": "https://thebibleproject.com/blog/old-rituals-new-realities/",
      "prayer": "Pray for hearts prepared to take communion today. Pray for a fresh understanding of all that Christ has done for us."
    },
    {
      "heading": "The Wilderness",
      "day": "44",
      "book": "Numbers",
      "ch": "14-16",
      "psalm": "44",
      "prayer": "Pray for the nominating committee as they discern who God would have them approach with a view to sitting on the Board."
    },
    {
      "heading": "The Wilderness",
      "day": "45",
      "book": "Numbers",
      "ch": "17-18",
      "psalm": "45",
      "prayer": "Pray that the women who come to L.I.F.T. would come to church and seek to know Jesus."
    },
    {
      "heading": "The Wilderness",
      "day": "46",
      "book": "Numbers",
      "ch": "19-21",
      "psalm": "46",
      "prayer": "Pray for safety for Saleh as he travels to Canada. Pray for smooth transfers and the kindness of strangers as he navigates the airport. "
    },
    {
      "heading": "The Wilderness",
      "day": "47",
      "book": "Numbers",
      "ch": "22-24",
      "psalm": "47",
      "prayer": "Pray for our Seniors and give thanks for the blessing that they are to our Church. May God grant them favour. "
    },
    {
      "heading": "The Wilderness",
      "day": "48",
      "book": "Numbers",
      "ch": "25-27",
      "psalm": "48",
      "prayer": "Pray for revival among us and an awakening in our City so that it would be known as a place where God is glorified. "
    },
    {
      "heading": "The Wilderness",
      "day": "49",
      "book": "Numbers",
      "ch": "28-30",
      "psalm": "49",
      "prayer": "Pray for our church finances. May we all give generously so that we can carry out the work that God has called us to and impact our city for Him. "
    },
    {
      "heading": "The Wilderness",
      "day": "50",
      "book": "Numbers",
      "ch": "31-32",
      "psalm": "50",
      "blog_title": "Israel's Rebellion in the Wilderness ",
      "blog_url": "https://bibleproject.com/blog/israels-rebellion-wilderness/",
      "prayer": "Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation! Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise! (Psalm 95:1-2)"
    },
    {
      "heading": "The Wilderness",
      "day": "51",
      "book": "Numbers",
      "ch": "33-34",
      "psalm": "51",
      "prayer": "Pray that the prodigals in our world would be obedient to the promptings of the Holy Spirit and return to God."
    },
    {
      "heading": "The Wilderness",
      "day": "52",
      "book": "Numbers",
      "ch": "35-36",
      "psalm": "52",
      "video_title": "OT Overviews: Numbers ",
      "video_url": "https://bibleproject.com/explore/video/numbers/",
      "prayer": "Today is Shrove Tuesday. ' God, of infinite mercy and boundless pity; forgive us our sin, so that rejoicing in our forgiveness we may forgive others, for the sake of Jesus Christ our Saviour.' "
    },
    {
      "heading": "The Wilderness",
      "day": "53",
      "book": "Deuteronomy",
      "ch": "1-3",
      "psalm": "53",
      "video_title": "Torah Series: Deuteronomy ",
      "video_url": "https://bibleproject.com/explore/video/torah-deuteronomy/",
      "prayer": "Lent begins today. As we look to Easter and to Christ's sacrifice for us, would you ask God to show you what He might have you give up in this season? "
    },
    {
      "heading": "The Wilderness",
      "day": "54",
      "book": "Deuteronomy",
      "ch": "4-6",
      "psalm": "54",
      "video_title": "Shema / Listen",
      "video_url": "https://bibleproject.com/explore/video/shema-listen/",
      "blog_title": "What is the Shema? ",
      "blog_url": "https://thebibleproject.com/blog/what-is-the-shema/",
      "prayer": "The Hoca family will have their interviews in Turkey today. Pray for safe travel to Ankara and that everything goes well. Pray that God would move hearts to support this precious family. "
    },
    {
      "heading": "The Wilderness",
      "day": "55",
      "book": "Deuteronomy",
      "ch": "7-9",
      "psalm": "55",
      "video_title": "YHWH / LORD",
      "video_url": "https://bibleproject.com/explore/video/yhwh-lord/",
      "prayer": "Praise God for the 415,072 OCC shoeboxes from Canada. Pray that each box would go through Customs easily when they reach W. Africa, Latin America, the Philippines or Ukraine. Pray that God would already be preparing the hearts of children who will hear the Gospel."
    },
    {
      "heading": "The Wilderness",
      "day": "56",
      "book": "Deuteronomy",
      "ch": "10-12",
      "psalm": "56",
      "video_title": "Ahavah / Love",
      "video_url": "https://bibleproject.com/explore/video/ahavah-love/",
      "prayer": "Pray for our government (Provincial & Federal). Pray that God would steer them. Pray that Christians in positions of influence would remain steadfast in their faith."
    },
    {
      "heading": "The Wilderness",
      "day": "57",
      "book": "Deuteronomy",
      "ch": "13-14",
      "psalm": "57",
      "video_title": "Lev / Heart",
      "video_url": "https://bibleproject.com/explore/video/lev-heart/",
      "prayer": "This is Missions Sunday. Pray for protection for all those who serve locally and globally. Pray that they would see much fruit for their labours."
    },
    {
      "heading": "The Wilderness",
      "day": "58",
      "book": "Deuteronomy",
      "ch": "15-16",
      "psalm": "58",
      "video_title": "Nephesh / Soul",
      "video_url": "https://bibleproject.com/explore/video/nephesh-soul/",
      "prayer": "Give thanks for the Men's Shed Program. Pray that the men who attend would be curious to come to church and come to saving faith in Jesus. "
    },
    {
      "heading": "The Wilderness",
      "day": "59",
      "book": "Deuteronomy",
      "ch": "17-20",
      "psalm": "59",
      "video_title": "Meod /Strength",
      "video_url": "https://bibleproject.com/explore/video/meod-strength/",
      "prayer": "Pray for Womancare and the women that they serve. Pray that they and other centres in Canada would be able to retain their charitable status. "
    },
    {
      "heading": "The Wilderness",
      "day": "60",
      "book": "Deuteronomy",
      "ch": "21-23",
      "psalm": "60",
      "prayer": "Continue to pray for all affected by the earthquakes in Turkiye and Syria. Pray for all Christian Aid workers in the area and ask that they would be the hands and feet of Jesus at this challenging time."
    },
    {
      "heading": "The Wilderness",
      "day": "61",
      "book": "Deuteronomy",
      "ch": "24-27",
      "psalm": "61",
      "prayer": "Pray that as we continue into this Lenten season, we would have a posture of gratitude and humility as we seek to  grow closer to Jesus."
    },
    {
      "heading": "The Wilderness",
      "day": "62",
      "book": "Deuteronomy",
      "ch": "28-29",
      "psalm": "62",
      "prayer": "Today is OCC Appreciation Day. Pray a blessing on Barb and all her team. Pray that the children beginning The Greatest Journey would come to know Jesus. Pray also for the new OCC director to be blessed in his role. "
    },
    {
      "heading": "The Wilderness",
      "day": "63",
      "book": "Deuteronomy",
      "ch": "30-31",
      "psalm": "63",
      "prayer": "Pray for Pastor Jonathan as he prepares to preach tomorrow. Pray that the Holy Spirit would anoint his words and that our hearts would be changed."
    },
    {
      "heading": "The Wilderness",
      "day": "64",
      "book": "Deuteronomy",
      "ch": "32-34",
      "psalm": "64",
      "video_title": "OT Overviews: Deuteronomy ",
      "video_url": "https://bibleproject.com/explore/video/deuteronomy/",
      "blog_title": "Deuteronomy & Exile Predicted",
      "blog_url": "https://bibleproject.com/blog/exile-predicted/",
      "prayer": "'All the nations you have made shall come and worship before you, O Lord, and shall glorify your name. For you are great and do wondrous things; you alone are God.' Psalm 86:9-10"
    },
    {
      "heading": "The Promised Land",
      "day": "65",
      "book": "Joshua",
      "ch": "1-4",
      "psalm": "65",
      "video_title": "OT Overviews: Joshua ",
      "video_url": "https://bibleproject.com/explore/video/joshua/",
      "blog_title": "Judgment or Cruelty? Conquering the Promised Land ",
      "blog_url": "https://thebibleproject.com/blog/judgement-cruelty-conquering-promised-land/",
      "prayer": "Continue to pray for suitable housing for the Hoca family who will arrive sometime in the next few months. Pray that God would provide the finances needed to support them."
    },
    {
      "heading": "The Promised Land",
      "day": "66",
      "book": "Joshua",
      "ch": "5-8",
      "psalm": "66",
      "video_title": "Design Patterns ",
      "video_url": "https://bibleproject.com/explore/video/design-patterns-biblical-narrative/",
      "prayer": "We have many amazing volunteers at our church. Pray that they would be blessed in all that they do as they serve and that it would bring them great joy."
    },
    {
      "heading": "The Promised Land",
      "day": "67",
      "book": "Joshua",
      "ch": "9-12",
      "psalm": "67",
      "prayer": "Pray that the youth of our church would stand firm in their faith in all circumstances. Pray that God would strengthen them in the power of His Holy Spirit."
    },
    {
      "heading": "The Promised Land",
      "day": "68",
      "book": "Joshua",
      "ch": "13-21",
      "psalm": "68",
      "prayer": "Pray for protection from the enemy  for the youth who are leading Alpha in their school and that God would grant them favour in the eyes of their peers and their teachers."
    },
    {
      "heading": "The Promised Land",
      "day": "69",
      "book": "Joshua",
      "ch": "22-24",
      "psalm": "69",
      "prayer": "Praise God for what He is doing in our church. Pray that all of the new folks attending would feel welcomed and join in community."
    },
    {
      "heading": "The Promised Land",
      "day": "70",
      "book": "Judges",
      "ch": "1-3",
      "psalm": "70",
      "video_title": "OT Overviews: Judges ",
      "video_url": "https://bibleproject.com/explore/video/judges/",
      "blog_title": "Judges & Messianic Hope ",
      "blog_url": "https://thebibleproject.com/blog/judges-messianic-hope/",
      "prayer": "Ask God to prepare hearts for church tomorrow. Pray that any who have been hesitant to come would have all obstacles removed and have hearts ready to receive God's word."
    },
    {
      "heading": "The Promised Land",
      "day": "71",
      "book": "Judges",
      "ch": "4-5",
      "psalm": "71",
      "prayer": "Pray a blessing over the worship and production team who give so willingly of their time to lead us in worship each week."
    },
    {
      "heading": "The Promised Land",
      "day": "72",
      "book": "Judges",
      "ch": "6-8",
      "psalm": "72",
      "video_title": "Plot",
      "video_url": "https://bibleproject.com/explore/video/plot-biblical-narrative/",
      "prayer": "Give thanks for those who serve on our Board. Pray protection over each one of them and over their families. Pray for wisdom and discernment in their decision making."
    },
    {
      "heading": "The Promised Land",
      "day": "73",
      "book": "Judges",
      "ch": "9-12",
      "psalm": "73",
      "prayer": "Pray that the women attending L.I.F.T. would be an encouragement to one another and that Tanya would find someone to come alongside her in this ministry"
    },
    {
      "heading": "The Promised Land",
      "day": "74",
      "book": "Judges",
      "ch": "13-15",
      "psalm": "74",
      "prayer": "Pray for a time of rest and refreshing for the Young Mom's group today. Pray that each one would learn from God's Word and from each other"
    },
    {
      "heading": "The Promised Land",
      "day": "75",
      "book": "Judges",
      "ch": "16-18",
      "psalm": "75",
      "prayer": "Give thanks for the collective wisdom of the Seniors who call our church home. May we learn from each of them what it means to follow Jesus faithfully.     "
    },
    {
      "heading": "The Promised Land",
      "day": "76",
      "book": "Judges",
      "ch": "19-21",
      "psalm": "76",
      "prayer": "Pray for those in our City who don't yet know Jesus. Pray against the schemes of the enemy who hates to see people set free     "
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "77",
      "book": "Ruth",
      "ch": "1-4",
      "psalm": "77",
      "video_title": "OT Overviews: Ruth ",
      "video_url": "https://bibleproject.com/explore/video/ruth/",
      "prayer": "Pray for our Youth Leaders who are on retreat this weekend. Pray for a fresh outpouring of the Spirit on each one"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "78",
      "book": "1 Samuel",
      "ch": "1-3",
      "psalm": "78",
      "video_title": "OT Overviews: 1 Samuel ",
      "video_url": "https://bibleproject.com/explore/video/1-samuel/",
      "prayer": "Pray that 'forgetting what lies behind and straining forward to what lies ahead, we press on toward the goal for the prize of the upward call of God in Christ Jesus. ' Phil 3: 13-14"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "79",
      "book": "1 Samuel",
      "ch": "4-8",
      "psalm": "79",
      "prayer": "Pray for healing and comfort for those in our church family who are dealing with illness and/or broken relationships.  "
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "80",
      "book": "1 Samuel",
      "ch": "9-12",
      "psalm": "80",
      "blog_title": "Saul: A Tale of Self-Deception ",
      "blog_url": "https://thebibleproject.com/blog/saul-tale-self-deception/",
      "prayer": "Pray for blessing on our pastors and their families. Pray for opportunities for rest and relaxation for each of them as well as for time to spend with Jesus.  "
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "81",
      "book": "1 Samuel",
      "ch": "13-14",
      "psalm": "81",
      "prayer": "Family Fun Night happens today. Pray that those attending for the first time would make good connections and feel the love of Jesus."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "82",
      "book": "1 Samuel",
      "ch": "15-17",
      "psalm": "82",
      "video_title": "David the Priestly King ",
      "video_url": "https://bibleproject.com/explore/video/david-priestly-king/",
      "blog_title": "David: What's the Big Deal?",
      "blog_url": "https://thebibleproject.com/blog/david-whats-big-deal/",
      "prayer": "Pray for the Building Committee as they make decisions about renovations going forward. Pray that we would honour the pledges we have made,"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "83",
      "book": "1 Samuel",
      "ch": "18-20",
      "psalm": "83",
      "prayer": "Praise God for His faithfulness to us all. Thank Him for all of the many blessings He has poured out on us as His church."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "84",
      "book": "1 Samuel",
      "ch": "21-24",
      "psalm": "84",
      "prayer": "Pray for protection for Melodie Francis and her family as she cares for the children of Casa Hogar. May they all grow in the knowledge of Jesus."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "85",
      "book": "1 Samuel",
      "ch": "25-27",
      "psalm": "85",
      "prayer": "'Pray that we would do good, be rich in good works, be generous and ready to share thus storing up treasure for ourselves as a good foundation for the future so that we may take hold of that which is truly life.' 1 Tim 6:18-19"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "86",
      "book": "1 Samuel",
      "ch": "28-31",
      "psalm": "86",
      "prayer": "Pray that the men who attend the Shed Program would form good relationships with church staff and volunteers and would consider coming to church."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "87",
      "book": "2 Samuel",
      "ch": "1-3",
      "psalm": "87",
      "video_title": "OT Overviews: 2 Samuel ",
      "video_url": "https://bibleproject.com/explore/video/2-samuel/",
      "prayer": "Pray for wisdom for those in Government. Pray that the sanctity of life would be impressed on their hearts and that there would be no more additions to the MAID act."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "88",
      "book": "2 Samuel",
      "ch": "4-8",
      "psalm": "88",
      "prayer": "Pray for the Holy Spirit to spark revival in all of us and to awaken those in our City who do not know Jesus."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "89",
      "book": "2 Samuel",
      "ch": "9-12",
      "psalm": "89",
      "prayer": "Pray for the Hub and those who volunteer there. Pray that they would have good interactions with all who attend and foster trust in them and in our Church."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "90",
      "book": "2 Samuel",
      "ch": "13-15",
      "psalm": "90",
      "prayer": "Pray for a successful OCC Bottle Drive tomorrow and for good weather as they work hard. The funds they gather are essential for the ministry."
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "91",
      "book": "2 Samuel",
      "ch": "16-18",
      "psalm": "91"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "92",
      "book": "2 Samuel",
      "ch": "19-21",
      "psalm": "92"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "93",
      "book": "2 Samuel",
      "ch": "22-24",
      "psalm": "93"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "94",
      "book": "1 Kings",
      "ch": "1-3",
      "psalm": "94",
      "video_title": "OT Overviews: 1-2 Kings ",
      "video_url": "https://bibleproject.com/explore/video/kings/",
      "blog_title": "Solomon: Love Him or Hate Him? ",
      "blog_url": "https://bibleproject.com/blog/solomon-love-hate/"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "95",
      "book": "1 Kings",
      "ch": "4-7",
      "psalm": "95"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "96",
      "book": "1 Kings",
      "ch": "8-10",
      "psalm": "96"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "97",
      "book": "1 Kings",
      "ch": "11-13",
      "psalm": "97"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "98",
      "book": "1 Kings",
      "ch": "14-16",
      "psalm": "98"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "99",
      "book": "1 Kings",
      "ch": "17-19",
      "psalm": "99"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "100",
      "book": "1 Kings",
      "ch": "20-22",
      "psalm": "100"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "101",
      "book": "2 Kings",
      "ch": "1-3",
      "psalm": "101"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "102",
      "book": "2 Kings",
      "ch": "4-7",
      "psalm": "102"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "103",
      "book": "2 Kings",
      "ch": "8-11",
      "psalm": "103"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "104",
      "book": "2 Kings",
      "ch": "12-14",
      "psalm": "104"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "105",
      "book": "2 Kings",
      "ch": "15-17",
      "psalm": "105"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "106",
      "book": "2 Kings",
      "ch": "18-19",
      "psalm": "106",
      "blog_title": "Kings vs. Prophets ",
      "blog_url": "https://bibleproject.com/blog/kings-vs-prophets/"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "107",
      "book": "2 Kings",
      "ch": "20-22",
      "psalm": "107"
    },
    {
      "heading": "Rise and Fall of Israel's Kingdom",
      "day": "108",
      "book": "2 Kings",
      "ch": "23-25",
      "psalm": "108"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "109",
      "book": "Isaiah",
      "ch": "1-4",
      "psalm": "109",
      "video_title": "OT Overviews: Isaiah 1-39 ",
      "video_url": "https://bibleproject.com/explore/video/isaiah-1-39/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "110",
      "book": "Isaiah",
      "ch": "5-8",
      "psalm": "110"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "111",
      "book": "Isaiah",
      "ch": "9-12",
      "psalm": "111",
      "video_title": "The Prophets",
      "video_url": "https://bibleproject.com/explore/video/the-prophets/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "112",
      "book": "Isaiah",
      "ch": "13-17",
      "psalm": "112",
      "video_title": "Holiness",
      "video_url": "https://bibleproject.com/explore/video/holiness/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "113",
      "book": "Isaiah",
      "ch": "18-22",
      "psalm": "113",
      "video_title": "Intro to Spiritual Beings ",
      "video_url": "https://bibleproject.com/explore/video/intro-spiritual-beings/",
      "blog_title": "Jerusalem Has Fallen: Despair & Hope ",
      "blog_url": "https://bibleproject.com/blog/jerusalem-fallen-despair-hope/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "114",
      "book": "Isaiah",
      "ch": "23-27",
      "psalm": "114",
      "video_title": "Elohim",
      "video_url": "https://bibleproject.com/explore/video/elohim/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "115",
      "book": "Isaiah",
      "ch": "28-30",
      "psalm": "115",
      "video_title": "Divine Council ",
      "video_url": "https://bibleproject.com/explore/video/divine-council/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "116",
      "book": "Isaiah",
      "ch": "31-35",
      "psalm": "116",
      "video_title": "Angels and Cherubim ",
      "video_url": "https://bibleproject.com/explore/video/angels-cherubim/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "117",
      "book": "Isaiah",
      "ch": "36-38",
      "psalm": "117",
      "video_title": "Angel of the Lord ",
      "video_url": "https://bibleproject.com/explore/video/angel-lord/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "118",
      "book": "Isaiah",
      "ch": "39-41",
      "psalm": "118",
      "video_title": "The Satan and Demons ",
      "video_url": "https://bibleproject.com/explore/video/satan-demons/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "119",
      "book": "Isaiah",
      "ch": "42-44",
      "psalm": "119 vv. 1-32",
      "video_title": "The New Humanity ",
      "video_url": "https://bibleproject.com/explore/video/new-humanity/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "120",
      "book": "Isaiah",
      "ch": "45-48",
      "psalm": "119 vv. 33-64",
      "blog_title": "Isaiah and the Messianic King ",
      "blog_url": "https://thebibleproject.com/blog/isaiah-messianic-king/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "121",
      "book": "Isaiah",
      "ch": "49-51",
      "psalm": "119 vv. 65-96"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "122",
      "book": "Isaiah",
      "ch": "52-54",
      "psalm": "119 vv. 97-128",
      "video_title": "Gospel of the Kingdom ",
      "video_url": "https://bibleproject.com/explore/video/gospel-kingdom/",
      "blog_title": "Isaiah and the Suffering King",
      "blog_url": "https://thebibleproject.com/blog/isaiah-and-the-suffering-servant-king/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "123",
      "book": "Isaiah",
      "ch": "55-57",
      "psalm": "119 vv. 129-152"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "124",
      "book": "Isaiah",
      "ch": "58-60",
      "psalm": "119 vv. 153-176"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "125",
      "book": "Isaiah",
      "ch": "61-64",
      "psalm": "120"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "126",
      "book": "Isaiah",
      "ch": "65-66",
      "psalm": "121",
      "video_title": "OT Overviews: Isaiah 40-66 ",
      "video_url": "https://bibleproject.com/explore/video/isaiah-40-66/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "127",
      "book": "Hosea",
      "ch": "1-5",
      "psalm": "122",
      "video_title": "OT Overviews: Hosea ",
      "video_url": "https://bibleproject.com/explore/video/hosea/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "128",
      "book": "Hosea",
      "ch": "6-10",
      "psalm": "123"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "129",
      "book": "Hosea",
      "ch": "11-14",
      "psalm": "124"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "130",
      "book": "Joel",
      "ch": "1-3",
      "psalm": "125",
      "video_title": "OT Overviews: Joel ",
      "video_url": "https://bibleproject.com/explore/video/joel/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "131",
      "book": "Amos",
      "ch": "1-5",
      "psalm": "126",
      "video_title": "OT Overviews: Amos ",
      "video_url": "https://bibleproject.com/explore/video/amos/",
      "blog_title": "Hosea & Amos: Two Sides of Covenant Failure ",
      "blog_url": "https://thebibleproject.com/blog/hosea-amos-two-sides-covenant-failure/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "132",
      "book": "Amos",
      "ch": "6-9",
      "psalm": "127"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "133",
      "book": "Obadiah",
      "ch": "1",
      "psalm": "128",
      "video_title": "OT Overviews: Obadiah ",
      "video_url": "https://bibleproject.com/explore/video/obadiah/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "134",
      "book": "Jonah",
      "ch": "1-4",
      "psalm": "129",
      "video_title": "OT Overviews: Jonah ",
      "video_url": "https://bibleproject.com/explore/video/jonah/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "135",
      "book": "Micah",
      "ch": "1-4",
      "psalm": "130",
      "video_title": "OT Overviews: Micah",
      "video_url": "https://bibleproject.com/explore/video/micah/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "136",
      "book": "Micah",
      "ch": "5-7",
      "psalm": "131"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "137",
      "book": "Nahum",
      "ch": "1-3",
      "psalm": "132",
      "video_title": "OT Overviews: Nahum ",
      "video_url": "https://bibleproject.com/explore/video/nahum/",
      "blog_title": "Nahum's Oracle and Habakkuk's Grievance ",
      "blog_url": "https://thebibleproject.com/blog/nahums-oracle-habakkuks-grievance/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "138",
      "book": "Habakkuk",
      "ch": "1-3",
      "psalm": "133",
      "video_title": "OT Overviews: Habakkuk ",
      "video_url": "https://bibleproject.com/explore/video/habakkuk/"
    },
    {
      "heading": "The Prophets Before the Exile",
      "day": "139",
      "book": "Zephaniah",
      "ch": "1-3",
      "psalm": "134",
      "video_title": "OT Overviews: Zephaniah ",
      "video_url": "https://bibleproject.com/explore/video/zephaniah/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "140",
      "book": "Job",
      "ch": "1-3",
      "psalm": "135",
      "video_title": "Wisdom Series: Job ",
      "blog_title": "Book of Job: What's Going on Here? ",
      "blog_url": "https://bibleproject.com/blog/book-job-whats-going/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "141",
      "book": "Job",
      "ch": "4-7",
      "psalm": "136"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "142",
      "book": "Job",
      "ch": "8-11",
      "psalm": "137"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "143",
      "book": "Job",
      "ch": "12-15",
      "psalm": "138"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "144",
      "book": "Job",
      "ch": "16-19",
      "psalm": "139"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "145",
      "book": "Job",
      "ch": "20-23",
      "psalm": "140"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "146",
      "book": "Job",
      "ch": "24-28",
      "psalm": "141"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "147",
      "book": "Job",
      "ch": "29-31",
      "psalm": "142"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "148",
      "book": "Job",
      "ch": "32-34",
      "psalm": "143"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "149",
      "book": "Job",
      "ch": "35-37",
      "psalm": "144"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "150",
      "book": "Job",
      "ch": "38-39",
      "psalm": "145"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "151",
      "book": "Job",
      "ch": "40-42",
      "psalm": "146",
      "video_title": "OT Overviews: Job ",
      "video_url": "https://bibleproject.com/explore/video/job/",
      "blog_title": "Book of Job: God Gives Job a Virtual Tour of His Wise World",
      "blog_url": "https://thebibleproject.com/blog/gods-gives-job-tour-wise-world/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "152",
      "book": "Psalms",
      "ch": "1-2",
      "psalm": "147",
      "video_title": "Tree of Life",
      "video_url": "https://bibleproject.com/explore/video/tree-of-life/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "153",
      "book": "Proverbs",
      "ch": "1-3",
      "psalm": "148",
      "video_title": "The Books of Solomon",
      "video_url": "https://bibleproject.com/explore/video/books-solomon/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "154",
      "book": "Proverbs",
      "ch": "4-6",
      "psalm": "149",
      "video_title": "Wisdom Series: Proverbs ",
      "video_url": "https://bibleproject.com/explore/video/wisdom-proverbs/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "155",
      "book": "Proverbs",
      "ch": "7-9",
      "psalm": "150",
      "video_title": "The Book of Psalms ",
      "video_url": "https://bibleproject.com/explore/video/book-of-psalms/",
      "blog_title": "How Wisdom Leads to Joy ",
      "blog_url": "https://bibleproject.com/blog/proverbs-8-how-gods-wisdom-leads-to-joy/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "156",
      "book": "Proverbs",
      "ch": "10-12",
      "psalm": "1"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "157",
      "book": "Proverbs",
      "ch": "13-15",
      "psalm": "2",
      "video_title": "Poetry ",
      "video_url": "https://bibleproject.com/explore/video/art-biblical-poetry/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "158",
      "book": "Proverbs",
      "ch": "16-18",
      "psalm": "3",
      "video_title": "Poetic Metaphor ",
      "video_url": "https://bibleproject.com/explore/video/metaphor-biblical-poetry/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "159",
      "book": "Proverbs",
      "ch": "19-21",
      "psalm": "4"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "160",
      "book": "Proverbs",
      "ch": "22-24",
      "psalm": "5"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "161",
      "book": "Proverbs",
      "ch": "25-27",
      "psalm": "6"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "162",
      "book": "Proverbs",
      "ch": "28-31",
      "psalm": "7",
      "video_title": "OT Overviews: Proverbs ",
      "video_url": "https://bibleproject.com/explore/video/proverbs/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "163",
      "book": "Ecclesiastes",
      "ch": "1-4",
      "psalm": "8"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "164",
      "book": "Ecclesiastes",
      "ch": "5-8",
      "psalm": "9",
      "video_title": "Wisdom Series: Ecclesiastes ",
      "video_url": "https://bibleproject.com/explore/video/wisdom-ecclesiastes/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "165",
      "book": "Ecclesiastes",
      "ch": "9-12",
      "psalm": "10",
      "video_title": "OT Overviews: Ecclesiastes ",
      "video_url": "https://bibleproject.com/explore/video/ecclesiastes/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "166",
      "book": "Song of Songs",
      "ch": "1-4",
      "psalm": "11",
      "blog_title": "Song of Solomon ",
      "blog_url": "https://bibleproject.com/blog/song-of-solomon/"
    },
    {
      "heading": "The Wisdom of Israel",
      "day": "167",
      "book": "Song of Songs",
      "ch": "5-8",
      "psalm": "12",
      "video_title": "OT Overviews: Song of Songs ",
      "video_url": "https://bibleproject.com/explore/video/song-songs/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "168",
      "book": "Jeremiah",
      "ch": "1-3",
      "psalm": "13",
      "video_title": "OT Overviews: Jeremiah ",
      "video_url": "https://bibleproject.com/explore/video/jeremiah/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "169",
      "book": "Jeremiah",
      "ch": "4-6",
      "psalm": "14"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "170",
      "book": "Jeremiah",
      "ch": "7-9",
      "psalm": "15",
      "blog_title": "Jeremiah's Famous Temple Sermon ",
      "blog_url": "https://thebibleproject.com/blog/jeremiahs-famous-temple-sermon/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "171",
      "book": "Jeremiah",
      "ch": "10-13",
      "psalm": "16"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "172",
      "book": "Jeremiah",
      "ch": "14-17",
      "psalm": "17"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "173",
      "book": "Jeremiah",
      "ch": "18-22",
      "psalm": "18",
      "video_title": "Justice ",
      "video_url": "https://bibleproject.com/explore/video/justice/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "174",
      "book": "Jeremiah",
      "ch": "23-25",
      "psalm": "19"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "175",
      "book": "Jeremiah",
      "ch": "26-29",
      "psalm": "20"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "176",
      "book": "Jeremiah",
      "ch": "30-32",
      "psalm": "21"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "177",
      "book": "Jeremiah",
      "ch": "33-36",
      "psalm": "22"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "178",
      "book": "Jeremiah",
      "ch": "37-39",
      "psalm": "23"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "179",
      "book": "Jeremiah",
      "ch": "40-44",
      "psalm": "24"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "180",
      "book": "Jeremiah",
      "ch": "45-48",
      "psalm": "25"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "181",
      "book": "Jeremiah",
      "ch": "49-50",
      "psalm": "26"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "182",
      "book": "Jeremiah",
      "ch": "51-52",
      "psalm": "27",
      "blog_title": "Jeremiah & Transformed Hearts ",
      "blog_url": "https://bibleproject.com/blog/jeremiah-transformed-hearts/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "183",
      "book": "Lamentations",
      "ch": "1-2",
      "psalm": "28",
      "video_title": "OT Overviews: Lamentations ",
      "video_url": "https://bibleproject.com/explore/video/lamentations/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "184",
      "book": "Lamentations",
      "ch": "3",
      "psalm": "29"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "185",
      "book": "Lamentations",
      "ch": "4-5",
      "psalm": "30"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "186",
      "book": "Ezekiel",
      "ch": "1-4",
      "psalm": "31",
      "video_title": "OT Overviews: Ezekiel 1-33 ",
      "video_url": "https://bibleproject.com/explore/video/ezekiel-1-33/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "187",
      "book": "Ezekiel",
      "ch": "5-8",
      "psalm": "32",
      "video_title": "Khata / Sin ",
      "video_url": "https://bibleproject.com/explore/video/khata-sin/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "188",
      "book": "Ezekiel",
      "ch": "9-12",
      "psalm": "33",
      "video_title": "Pesha-Transgression ",
      "video_url": "https://bibleproject.com/explore/video/pesha-transgression/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "189",
      "book": "Ezekiel",
      "ch": "13-15",
      "psalm": "34",
      "video_title": "Avon-Iniquity ",
      "video_url": "https://bibleproject.com/explore/video/avon-iniquity/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "190",
      "book": "Ezekiel",
      "ch": "16-18",
      "psalm": "35",
      "blog_title": "Ezekiel's Bizarre Calling",
      "blog_url": "https://bibleproject.com/blog/ezekiels-bizarre-calling/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "191",
      "book": "Ezekiel",
      "ch": "19-21",
      "psalm": "36"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "192",
      "book": "Ezekiel",
      "ch": "22-24",
      "psalm": "37"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "193",
      "book": "Ezekiel",
      "ch": "25-27",
      "psalm": "38"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "194",
      "book": "Ezekiel",
      "ch": "28-30",
      "psalm": "39"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "195",
      "book": "Ezekiel",
      "ch": "31-33",
      "psalm": "40"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "196",
      "book": "Ezekiel",
      "ch": "34-36",
      "psalm": "41"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "197",
      "book": "Ezekiel",
      "ch": "37-39",
      "psalm": "42",
      "blog_title": "The \"Gospel\" of Ezekiel ",
      "blog_url": "https://thebibleproject.com/blog/ezekiels-gospel/"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "198",
      "book": "Ezekiel",
      "ch": "40-44",
      "psalm": "43"
    },
    {
      "heading": "The Prophets of the Exile",
      "day": "199",
      "book": "Ezekiel",
      "ch": "45-48",
      "psalm": "44",
      "video_title": "OT Overviews: Ezekiel 34-48 ",
      "video_url": "https://bibleproject.com/explore/video/ezekiel-34-48/"
    },
    {
      "heading": "Return from Exile",
      "day": "200",
      "book": "Ezra",
      "ch": "1-3",
      "psalm": "45",
      "video_title": "OT Overviews: Ezra-Nehemiah ",
      "video_url": "https://bibleproject.com/explore/video/ezra-nehemiah/"
    },
    {
      "heading": "Return from Exile",
      "day": "201",
      "book": "Ezra",
      "ch": "4-7",
      "psalm": "46",
      "video_title": "Exile ",
      "video_url": "https://bibleproject.com/explore/video/exile/"
    },
    {
      "heading": "Return from Exile",
      "day": "202",
      "book": "Ezra",
      "ch": "8-10",
      "psalm": "47"
    },
    {
      "heading": "Return from Exile",
      "day": "203",
      "book": "Nehemiah",
      "ch": "1-3",
      "psalm": "48"
    },
    {
      "heading": "Return from Exile",
      "day": "204",
      "book": "Nehemiah",
      "ch": "4-6",
      "psalm": "49",
      "blog_title": "Overlooked: Ezra-Nehemiah ",
      "blog_url": "https://thebibleproject.com/blog/overlooked-ezra-nehemiah/"
    },
    {
      "heading": "Return from Exile",
      "day": "205",
      "book": "Nehemiah",
      "ch": "7-9",
      "psalm": "50"
    },
    {
      "heading": "Return from Exile",
      "day": "206",
      "book": "Nehemiah",
      "ch": "10-11",
      "psalm": "51"
    },
    {
      "heading": "Return from Exile",
      "day": "207",
      "book": "Nehemiah",
      "ch": "12-13",
      "psalm": "52"
    },
    {
      "heading": "Return from Exile",
      "day": "208",
      "book": "Esther",
      "ch": "1-5",
      "psalm": "53",
      "video_title": "OT Overviews: Esther ",
      "video_url": "https://bibleproject.com/explore/video/esther/"
    },
    {
      "heading": "Return from Exile",
      "day": "209",
      "book": "Esther",
      "ch": "6-10",
      "psalm": "54",
      "blog_title": "Esther: Secular or Sacred? ",
      "blog_url": "https://bibleproject.com/blog/esther-secular-sacred/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "210",
      "book": "Daniel",
      "ch": "1-3",
      "psalm": "55",
      "video_title": "OT Overviews: Daniel ",
      "video_url": "https://bibleproject.com/explore/video/daniel/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "211",
      "book": "Daniel",
      "ch": "4-6",
      "psalm": "56",
      "video_title": "The Way of Exile ",
      "video_url": "https://bibleproject.com/explore/video/the-way-of-the-exile/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "212",
      "book": "Daniel",
      "ch": "7-9",
      "psalm": "57"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "213",
      "book": "Daniel",
      "ch": "10-12",
      "psalm": "58"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "214",
      "book": "Haggai",
      "ch": "1-2",
      "psalm": "59",
      "video_title": "OT Overviews: Haggai ",
      "video_url": "https://bibleproject.com/explore/video/haggai/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "215",
      "book": "Zechariah",
      "ch": "1-4",
      "psalm": "60",
      "video_title": "OT Overviews: Zechariah ",
      "video_url": "https://bibleproject.com/explore/video/zechariah/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "216",
      "book": "Zechariah",
      "ch": "5-8",
      "psalm": "61"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "217",
      "book": "Zechariah",
      "ch": "9-14",
      "psalm": "62",
      "video_title": "Day of the Lord ",
      "video_url": "https://bibleproject.com/explore/video/day-of-the-lord/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "218",
      "book": "Malachi",
      "ch": "1-2",
      "psalm": "63",
      "video_title": "OT Overviews: Malachi ",
      "video_url": "https://bibleproject.com/explore/video/malachi/",
      "blog_title": "The Land: A Thermometer for Covenantal Faithfulness ",
      "blog_url": "https://thebibleproject.com/blog/land-thermometer-covenantal-faithfulness/"
    },
    {
      "heading": "Prophets After the Exile",
      "day": "219",
      "book": "Malachi",
      "ch": "3-4",
      "psalm": "64"
    },
    {
      "heading": "The Story So Far",
      "day": "220",
      "book": "1 Chronicles",
      "ch": "1-10",
      "psalm": "65",
      "video_title": "OT Overviews: 1-2 Chronicles ",
      "video_url": "https://bibleproject.com/explore/video/chronicles/"
    },
    {
      "heading": "The Story So Far",
      "day": "221",
      "book": "1 Chronicles",
      "ch": "11-14",
      "psalm": "66"
    },
    {
      "heading": "The Story So Far",
      "day": "222",
      "book": "1 Chronicles",
      "ch": "15-17",
      "psalm": "67"
    },
    {
      "heading": "The Story So Far",
      "day": "223",
      "book": "1 Chronicles",
      "ch": "18-21",
      "psalm": "68"
    },
    {
      "heading": "The Story So Far",
      "day": "224",
      "book": "1 Chronicles",
      "ch": "22-24",
      "psalm": "69"
    },
    {
      "heading": "The Story So Far",
      "day": "225",
      "book": "1 Chronicles",
      "ch": "25-29",
      "psalm": "70",
      "blog_title": "Chronicles: Not Just a Repeat ",
      "blog_url": "https://bibleproject.com/blog/chronicles-not-just-repeat/"
    },
    {
      "heading": "The Story So Far",
      "day": "226",
      "book": "2 Chronicles",
      "ch": "1-4",
      "psalm": "71"
    },
    {
      "heading": "The Story So Far",
      "day": "227",
      "book": "2 Chronicles",
      "ch": "5-8",
      "psalm": "72",
      "video_title": "Temple ",
      "video_url": "https://bibleproject.com/explore/video/temple/"
    },
    {
      "heading": "The Story So Far",
      "day": "228",
      "book": "2 Chronicles",
      "ch": "9-12",
      "psalm": "73"
    },
    {
      "heading": "The Story So Far",
      "day": "229",
      "book": "2 Chronicles",
      "ch": "13-17",
      "psalm": "74"
    },
    {
      "heading": "The Story So Far",
      "day": "230",
      "book": "2 Chronicles",
      "ch": "18-20",
      "psalm": "75"
    },
    {
      "heading": "The Story So Far",
      "day": "231",
      "book": "2 Chronicles",
      "ch": "21-24",
      "psalm": "76",
      "blog_title": "The Sense of an Ending: What Is the Real Last Book of the Old Testament?",
      "blog_url": "https://bibleproject.com/blog/sense-ending-real-last-book-old-testament/"
    },
    {
      "heading": "The Story So Far",
      "day": "232",
      "book": "2 Chronicles",
      "ch": "25-27",
      "psalm": "77"
    },
    {
      "heading": "The Story So Far",
      "day": "233",
      "book": "2 Chronicles",
      "ch": "28-31",
      "psalm": "78"
    },
    {
      "heading": "The Story So Far",
      "day": "234",
      "book": "2 Chronicles",
      "ch": "32-34",
      "psalm": "79",
      "video_title": "TaNak / Old Testament ",
      "video_url": "https://bibleproject.com/explore/video/old-testament-tanak/"
    },
    {
      "heading": "The Story So Far",
      "day": "235",
      "book": "2 Chronicles",
      "ch": "35-36",
      "psalm": "80",
      "video_title": "Messiah ",
      "video_url": "https://bibleproject.com/explore/video/messiah/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "236",
      "book": "Matthew",
      "ch": "1-2",
      "psalm": "81",
      "video_title": "The Gospel ",
      "video_url": "https://bibleproject.com/explore/video/how-to-read-gospel/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "237",
      "book": "Matthew",
      "ch": "3-4",
      "psalm": "82",
      "video_title": "NT Overviews: Matthew 1-13 ",
      "video_url": "https://bibleproject.com/explore/video/matthew-1-13/",
      "blog_title": "Jesus & Genealogies ",
      "blog_url": "https://thebibleproject.com/blog/Jesus-genealogies/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "238",
      "book": "Matthew",
      "ch": "5-6",
      "psalm": "83",
      "video_title": "Setting",
      "video_url": "https://bibleproject.com/explore/video/setting-biblical-narrative/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "239",
      "book": "Matthew",
      "ch": "7-8",
      "psalm": "84",
      "video_title": "Son of Man ",
      "video_url": "https://bibleproject.com/explore/video/son-of-man/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "240",
      "book": "Matthew",
      "ch": "9-10",
      "psalm": "85",
      "video_title": "God",
      "video_url": "https://bibleproject.com/explore/video/god-video/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "241",
      "book": "Matthew",
      "ch": "11-12",
      "psalm": "86"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "242",
      "book": "Matthew",
      "ch": "13-14",
      "psalm": "87",
      "video_title": "The Parables of Jesus ",
      "video_url": "https://bibleproject.com/explore/video/how-to-read-the-bible-the-parables-of-jesus/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "243",
      "book": "Matthew",
      "ch": "15-16",
      "psalm": "88",
      "video_title": "NT Overviews: Matthew 14-28 ",
      "video_url": "https://bibleproject.com/explore/video/matthew-14-28/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "244",
      "book": "Matthew",
      "ch": "17-18",
      "psalm": "89",
      "video_title": "Jesus the Royal Priest ",
      "video_url": "https://bibleproject.com/explore/video/jesus-the-royal-priest/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "245",
      "book": "Matthew",
      "ch": "19-20",
      "psalm": "90",
      "blog_title": "What is a Gospel? ",
      "blog_url": "https://thebibleproject.com/blog/what-are-the-gospels/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "246",
      "book": "Matthew",
      "ch": "21-22",
      "psalm": "91"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "247",
      "book": "Matthew",
      "ch": "23-24",
      "psalm": "92"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "248",
      "book": "Matthew",
      "ch": "25-26",
      "psalm": "93"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "249",
      "book": "Matthew",
      "ch": "27-28",
      "psalm": "94",
      "video_title": "Witness ",
      "video_url": "https://bibleproject.com/explore/video/martus-witness/",
      "blog_title": "Matthew: Jesus is the Promised Messiah",
      "blog_url": "https://bibleproject.com/blog/gospel-of-matthew/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "250",
      "book": "Mark",
      "ch": "1-2",
      "psalm": "95",
      "video_title": "Mark",
      "video_url": "https://bibleproject.com/explore/video/gospel-mark/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "251",
      "book": "Mark",
      "ch": "3-4",
      "psalm": "96",
      "video_title": "Gospel",
      "video_url": "https://bibleproject.com/explore/video/euangelion-gospel/",
      "blog_title": "Mark: The Gospel of the Servant-Messiah ",
      "blog_url": "https://bibleproject.com/blog/mark-gospel-servant-messiah/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "252",
      "book": "Mark",
      "ch": "5-6",
      "psalm": "97"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "253",
      "book": "Mark",
      "ch": "7-8",
      "psalm": "98"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "254",
      "book": "Mark",
      "ch": "9-10",
      "psalm": "99"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "255",
      "book": "Mark",
      "ch": "11-12",
      "psalm": "100"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "256",
      "book": "Mark",
      "ch": "13-14",
      "psalm": "101"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "257",
      "book": "Mark",
      "ch": "15-16",
      "psalm": "102",
      "video_title": "NT Overviews: Mark ",
      "video_url": "https://bibleproject.com/explore/video/mark/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "258",
      "book": "John",
      "ch": "1-2",
      "psalm": "103",
      "video_title": "John 1",
      "video_url": "https://bibleproject.com/explore/video/john-1/",
      "blog_title": "John: The Gospel of the Eternal Son Who Reveals the Father",
      "blog_url": "https://thebibleproject.com/blog/john-gospel-eternal-son-reveals-father/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "259",
      "book": "John",
      "ch": "3-4",
      "psalm": "104",
      "video_title": "Water of Life ",
      "video_url": "https://bibleproject.com/explore/video/water-of-life/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "260",
      "book": "John",
      "ch": "5-6",
      "psalm": "105"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "261",
      "book": "John",
      "ch": "7-8",
      "psalm": "106"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "262",
      "book": "John",
      "ch": "9-10",
      "psalm": "107"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "263",
      "book": "John",
      "ch": "11-12",
      "psalm": "108",
      "video_title": "NT Overviews: John 1-12 ",
      "video_url": "https://bibleproject.com/explore/video/john-1-12/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "264",
      "book": "John",
      "ch": "13-15",
      "psalm": "109",
      "video_title": "NT Overviews: John 13-21 ",
      "video_url": "https://bibleproject.com/explore/video/john-13-21/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "265",
      "book": "John",
      "ch": "16-18",
      "psalm": "110"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "266",
      "book": "John",
      "ch": "19-21",
      "psalm": "111"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "267",
      "book": "Luke",
      "ch": "1",
      "psalm": "112",
      "video_title": "NT Overviews: Luke 1-9 ",
      "video_url": "https://bibleproject.com/explore/video/luke-1-9/",
      "blog_title": "Luke: The Gospel of the Savior for Lost People Everywhere ",
      "blog_url": "https://bibleproject.com/blog/luke-gospels-savior-lost-people/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "268",
      "book": "Luke",
      "ch": "2-3",
      "psalm": "113",
      "video_title": "The Birth of Jesus: Luke 1-2 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-luke-1/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "269",
      "book": "Luke",
      "ch": "4-5",
      "psalm": "114",
      "video_title": "The Baptism of Jesus: Luke 3-9 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-luke-2/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "270",
      "book": "Luke",
      "ch": "6-7",
      "psalm": "115"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "271",
      "book": "Luke",
      "ch": "8-9",
      "psalm": "116",
      "video_title": "The Prodigal Son: Luke 9-19 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-luke-2/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "272",
      "book": "Luke",
      "ch": "10-11",
      "psalm": "117",
      "video_title": "NT Overviews: Luke 10-24",
      "video_url": "https://bibleproject.com/explore/video/luke-10-24/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "273",
      "book": "Luke",
      "ch": "12-13",
      "psalm": "118"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "274",
      "book": "Luke",
      "ch": "14-16",
      "psalm": "119 vv. 1-32"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "275",
      "book": "Luke",
      "ch": "17-18",
      "psalm": "119 vv. 33-64"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "276",
      "book": "Luke",
      "ch": "19-20",
      "psalm": "119 vv. 65-96",
      "video_title": "The Crucifixion of Jesus: Luke 19-23 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-luke-4/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "277",
      "book": "Luke",
      "ch": "21-22",
      "psalm": "119 vv. 97-128"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "278",
      "book": "Luke",
      "ch": "23-24",
      "psalm": "119 vv. 129-152",
      "video_title": "The Resurrection of Jesus: Luke 24 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-luke-5/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "279",
      "book": "Acts",
      "ch": "1-2",
      "psalm": "119 vv. 153-176",
      "video_title": "NT Overviews: Acts 1-12 ",
      "video_url": "https://bibleproject.com/explore/video/acts-1-12/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "280",
      "book": "Acts",
      "ch": "3-4",
      "psalm": "120",
      "video_title": "Holy Spirit",
      "video_url": "https://bibleproject.com/explore/video/holy-spirit/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "281",
      "book": "Acts",
      "ch": "5-6",
      "psalm": "121",
      "video_title": "The Royal Priesthood ",
      "video_url": "https://bibleproject.com/explore/video/royal-priesthood/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "282",
      "book": "Acts",
      "ch": "7-8",
      "psalm": "122",
      "video_title": "Pentecost: Acts 1-7 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-acts-1/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "283",
      "book": "Acts",
      "ch": "9-10",
      "psalm": "123"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "284",
      "book": "Acts",
      "ch": "11-12",
      "psalm": "124",
      "video_title": "The Apostle Paul: Acts 8-12 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-acts-2/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "285",
      "book": "Acts",
      "ch": "13-14",
      "psalm": "125",
      "video_title": "NT Overviews: Acts 13-28 ",
      "video_url": "https://bibleproject.com/explore/video/acts-13-28/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "286",
      "book": "Acts",
      "ch": "15-16",
      "psalm": "126",
      "video_title": "Paul's Missionary Journeys: Acts 13-20 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-acts-3/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "287",
      "book": "Acts",
      "ch": "17-18",
      "psalm": "127",
      "blog_title": "Presence of God ",
      "blog_url": "https://thebibleproject.com/blog/presence-of-god/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "288",
      "book": "Acts",
      "ch": "19-20",
      "psalm": "128"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "289",
      "book": "Acts",
      "ch": "21-22",
      "psalm": "129",
      "video_title": "Bound for Rome: Acts 21-28 ",
      "video_url": "https://bibleproject.com/explore/video/gospel-acts-3/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "290",
      "book": "Acts",
      "ch": "23-24",
      "psalm": "130",
      "video_title": "Yakhal / Hope ",
      "video_url": "https://bibleproject.com/explore/video/yakhal-hope/"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "291",
      "book": "Acts",
      "ch": "25-26",
      "psalm": "131"
    },
    {
      "heading": "Jesus and the Kingdom",
      "day": "292",
      "book": "Acts",
      "ch": "27-28",
      "psalm": "132"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "293",
      "book": "Romans",
      "ch": "1-2",
      "psalm": "133",
      "video_title": "NT Overviews: Romans 1-4 ",
      "video_url": "https://bibleproject.com/explore/video/romans-1-4/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "294",
      "book": "Romans",
      "ch": "3-4",
      "psalm": "134",
      "blog_title": "Romans: Paul's Magnum Opus ",
      "blog_url": "https://bibleproject.com/blog/romans-paul-magnum-opus/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "295",
      "book": "Romans",
      "ch": "5-6",
      "psalm": "135",
      "video_title": "NT Overviews: Romans 5-16 ",
      "video_url": "https://bibleproject.com/explore/video/romans-5-16/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "296",
      "book": "Romans",
      "ch": "7-8",
      "psalm": "136"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "297",
      "book": "Romans",
      "ch": "9-10",
      "psalm": "137",
      "video_title": "New Testament Letters: Historical Context ",
      "video_url": "https://bibleproject.com/explore/video/new-testament-letters-epistles-historical-context/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "298",
      "book": "Romans",
      "ch": "11-12",
      "psalm": "138",
      "video_title": "New Testament Letters: Literary Context ",
      "video_url": "https://bibleproject.com/explore/video/new-testament-letters-literary-context/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "299",
      "book": "Romans",
      "ch": "13-14",
      "psalm": "139"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "300",
      "book": "Romans",
      "ch": "15-16",
      "psalm": "140"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "301",
      "book": "1 Corinthians",
      "ch": "1-2",
      "psalm": "141",
      "video_title": "NT Overviews: 1 Corinthians ",
      "video_url": "https://bibleproject.com/explore/video/1-corinthians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "302",
      "book": "1 Corinthians",
      "ch": "3-4",
      "psalm": "142"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "303",
      "book": "1 Corinthians",
      "ch": "5-6",
      "psalm": "143"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "304",
      "book": "1 Corinthians",
      "ch": "7-8",
      "psalm": "144"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "305",
      "book": "1 Corinthians",
      "ch": "9-10",
      "psalm": "145"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "306",
      "book": "1 Corinthians",
      "ch": "11-12",
      "psalm": "146"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "307",
      "book": "1 Corinthians",
      "ch": "13-14",
      "psalm": "147"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "308",
      "book": "1 Corinthians",
      "ch": "15-16",
      "psalm": "148",
      "video_title": "Psalm 148",
      "video_url": "https://bibleproject.com/explore/video/psalm-148/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "309",
      "book": "2 Corinthians",
      "ch": "1-2",
      "psalm": "149",
      "video_title": "NT Overviews: 2 Corinthians ",
      "video_url": "https://bibleproject.com/explore/video/2-corinthians/",
      "blog_title": "Second Corinthians: Paradox of the Cross",
      "blog_url": "https://thebibleproject.com/blog/2-corinthians-paradox-cross/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "310",
      "book": "2 Corinthians",
      "ch": "3-4",
      "psalm": "150",
      "video_title": "OT Overviews: Psalms ",
      "video_url": "https://bibleproject.com/explore/video/psalms/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "311",
      "book": "2 Corinthians",
      "ch": "5-6",
      "psalm": "1"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "312",
      "book": "2 Corinthians",
      "ch": "7-8",
      "psalm": "2",
      "video_title": "Generosity ",
      "video_url": "https://bibleproject.com/explore/video/generosity/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "313",
      "book": "2 Corinthians",
      "ch": "9-10",
      "psalm": "3"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "314",
      "book": "2 Corinthians",
      "ch": "11-13",
      "psalm": "4"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "315",
      "book": "Galatians",
      "ch": "1-2",
      "psalm": "5",
      "video_title": "NT Overviews: Galatians ",
      "video_url": "https://bibleproject.com/explore/video/galatians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "316",
      "book": "Galatians",
      "ch": "3-4",
      "psalm": "6"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "317",
      "book": "Galatians",
      "ch": "5-6",
      "psalm": "7"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "318",
      "book": "Ephesians",
      "ch": "1-2",
      "psalm": "8",
      "video_title": "NT Overviews: Ephesians ",
      "video_url": "https://bibleproject.com/explore/video/ephesians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "319",
      "book": "Ephesians",
      "ch": "3-4",
      "psalm": "9",
      "video_title": "Shalom / Peace ",
      "video_url": "https://bibleproject.com/explore/video/shalom-peace/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "320",
      "book": "Ephesians",
      "ch": "5-6",
      "psalm": "10"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "321",
      "book": "Philippians",
      "ch": "1-2",
      "psalm": "11",
      "video_title": "NT Overviews: Philippians ",
      "video_url": "https://bibleproject.com/explore/video/philippians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "322",
      "book": "Philippians",
      "ch": "3-4",
      "psalm": "12",
      "video_title": "Chara / Joy ",
      "video_url": "https://bibleproject.com/explore/video/chara-joy/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "323",
      "book": "Colossians",
      "ch": "1-2",
      "psalm": "13",
      "video_title": "NT Overviews: Colossians ",
      "video_url": "https://bibleproject.com/explore/video/colossians/",
      "blog_title": "Colossians: A Christology Worth Singing ",
      "blog_url": "https://bibleproject.com/blog/colossians-christology-worth-singing/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "324",
      "book": "Colossians",
      "ch": "3-4",
      "psalm": "14"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "325",
      "book": "1 Thessalonians",
      "ch": "1-2",
      "psalm": "15",
      "video_title": "NT Overviews: 1 Thessalonians ",
      "video_url": "https://bibleproject.com/explore/video/1-thessalonians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "326",
      "book": "1 Thessalonians",
      "ch": "3-4",
      "psalm": "16"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "327",
      "book": "1 Thessalonians",
      "ch": "5",
      "psalm": "17"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "328",
      "book": "2 Thessalonians",
      "ch": "1-3",
      "psalm": "18",
      "video_title": "NT Overviews: 2 Thessalonians ",
      "video_url": "https://bibleproject.com/explore/video/2-thessalonians/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "329",
      "book": "1 Timothy",
      "ch": "1-2",
      "psalm": "19",
      "video_title": "NT Overviews: 1 Timothy ",
      "video_url": "https://bibleproject.com/explore/video/1-timothy/",
      "blog_title": "Titus: A Counter-Cultural Gospel for Cretans ",
      "blog_url": "https://thebibleproject.com/blog/titus/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "330",
      "book": "1 Timothy",
      "ch": "3-4",
      "psalm": "20",
      "video_title": "Public Reading of Scripture",
      "video_url": "https://bibleproject.com/explore/video/public-reading-scripture/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "331",
      "book": "1 Timothy",
      "ch": "5-6",
      "psalm": "21"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "332",
      "book": "2 Timothy",
      "ch": "1-4",
      "psalm": "22",
      "video_title": "NT Overviews: 2 Timothy",
      "video_url": "https://bibleproject.com/explore/video/2-timothy/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "333",
      "book": "Titus",
      "ch": "1-3",
      "psalm": "23",
      "video_title": "NT Overviews: Titus",
      "video_url": "https://bibleproject.com/explore/video/titus/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "334",
      "book": "Philemon",
      "ch": "1",
      "psalm": "24",
      "video_title": "NT Overviews: Philemon ",
      "video_url": "https://bibleproject.com/explore/video/philemon/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "335",
      "book": "Hebrews",
      "ch": "1-2",
      "psalm": "25",
      "video_title": "NT Overviews: Hebrews ",
      "video_url": "https://bibleproject.com/explore/video/hebrews/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "336",
      "book": "Hebrews",
      "ch": "3-4",
      "psalm": "26",
      "video_title": "Sabbath ",
      "video_url": "https://bibleproject.com/explore/video/sabbath-video/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "337",
      "book": "Hebrews",
      "ch": "5-6",
      "psalm": "27"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "338",
      "book": "Hebrews",
      "ch": "7-8",
      "psalm": "28"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "339",
      "book": "Hebrews",
      "ch": "9-10",
      "psalm": "29"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "340",
      "book": "Hebrews",
      "ch": "11-13",
      "psalm": "30"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "341",
      "book": "James",
      "ch": "1-3",
      "psalm": "31",
      "video_title": "NT Overviews: James ",
      "video_url": "https://bibleproject.com/explore/video/james/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "342",
      "book": "James",
      "ch": "4-5",
      "psalm": "32"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "343",
      "book": "1 Peter",
      "ch": "1-2",
      "psalm": "33",
      "video_title": "NT Overviews: 1 Peter ",
      "video_url": "https://bibleproject.com/explore/video/1-peter/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "344",
      "book": "1 Peter",
      "ch": "3-5",
      "psalm": "34"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "345",
      "book": "2 Peter",
      "ch": "1-3",
      "psalm": "35",
      "video_title": "NT Overviews: 2 Peter ",
      "video_url": "https://bibleproject.com/explore/video/2-peter/",
      "blog_title": "Second Peter: The Delay of Jesus' Return & the Crisis of Patience",
      "blog_url": "https://thebibleproject.com/blog/2-peter-delay-jesus-return-crisis-of-patience/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "346",
      "book": "1 John",
      "ch": "1-2",
      "psalm": "36",
      "video_title": "NT Overviews: 1-3 John ",
      "video_url": "https://bibleproject.com/explore/video/1-3-john/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "347",
      "book": "1 John",
      "ch": "3-5",
      "psalm": "37",
      "video_title": "Agape / Love ",
      "video_url": "https://bibleproject.com/explore/video/agape-love/"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "348",
      "book": "2 & 3 John",
      "ch": "1, 1",
      "psalm": "38"
    },
    {
      "heading": "The People of the Kingdom",
      "day": "349",
      "book": "Jude",
      "ch": "1",
      "psalm": "39",
      "video_title": "NT Overviews: Jude ",
      "video_url": "https://bibleproject.com/explore/video/jude/"
    },
    {
      "heading": "The Revelation",
      "day": "350",
      "book": "Revelation",
      "ch": "1-3",
      "psalm": "40",
      "video_title": "NT Overviews: Revelation 1-11 ",
      "video_url": "https://bibleproject.com/explore/video/revelation-1-11/"
    },
    {
      "heading": "The Revelation",
      "day": "351",
      "book": "Revelation",
      "ch": "4-6",
      "psalm": "41",
      "video_title": "Apocalyptic Literature ",
      "video_url": "https://bibleproject.com/explore/video/apocalyptic-literature/"
    },
    {
      "heading": "The Revelation",
      "day": "352",
      "book": "Revelation",
      "ch": "7-9",
      "psalm": "42"
    },
    {
      "heading": "The Revelation",
      "day": "353",
      "book": "Revelation",
      "ch": "10-11",
      "psalm": "43"
    },
    {
      "heading": "The Revelation",
      "day": "354",
      "book": "Revelation",
      "ch": "12-13",
      "psalm": "44",
      "video_title": "NT Overviews: Revelation 12-22 ",
      "video_url": "https://bibleproject.com/explore/video/revelation-12-22/"
    },
    {
      "heading": "The Revelation",
      "day": "355",
      "book": "Revelation",
      "ch": "14-16",
      "psalm": "45"
    },
    {
      "heading": "The Revelation",
      "day": "356",
      "book": "Revelation",
      "ch": "17-18",
      "psalm": "46"
    },
    {
      "heading": "The Revelation",
      "day": "357",
      "book": "Revelation",
      "ch": "19-20",
      "psalm": "47",
      "video_title": "NT Overview ",
      "video_url": "https://bibleproject.com/explore/video/new-testament-overview/"
    },
    {
      "heading": "The Revelation",
      "day": "358",
      "book": "Revelation",
      "ch": "21-22",
      "psalm": "48",
      "video_title": "Heaven & Earth ",
      "video_url": "https://bibleproject.com/explore/video/heaven-and-earth/",
      "blog_title": "Revelation 21-22: A New Heaven & New Earth ",
      "blog_url": "https://thebibleproject.com/blog/new-heaven-new-earth/"
    }
  ]
}
//links to printable bookmarks on website
const bookmark = {"January": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvYWU5YTBmYTQtMjQxZi00YThhLThiMTgtZjY3ZDhmNDQxOTFiL3BkZl9qYW51YXJ5LnBkZiJdXQ/pdf_january.pdf?sha=4c29ade421a44340",
"February": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDYvM2FlZWQ4Y2UtNWY1Ni00NjgxLWFkOWEtMGM0NDYxODg5Yzk3L3BkZl9mZWJydWFyeS5wZGYiXV0/pdf_february.pdf?sha=8be5d9ae5930d0ec",
"March": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvZDE0ZTdkNjctYWNmNy00MGI2LWJhYWEtNzBjNGYwMzFlZjhlL3BkZl9tYXJjaC5wZGYiXV0/pdf_march.pdf?sha=19b9edb650fee590",
"April": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDYvYjk3OTgxZmYtZTMzOC00ODNjLTkxMzItZmQ1ZDQyOWQwZGU5L3BkZl9hcHJpbC5wZGYiXV0/pdf_april.pdf?sha=4eed4d315bd03944",
"May": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvM2JkNDYyYjEtMTI1Mi00Nzc4LWEzODUtYjMyZjM0YmQxMzVmL3BkZl9tYXkucGRmIl1d/pdf_may.pdf?sha=2ebbebfa599f1473",
"June": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvNzk1YTJiOTAtY2I2Yy00OGM3LWE1NjItMGE4ZDc2ZTY0YzU1L3BkZl9qdW5lLnBkZiJdXQ/pdf_june.pdf?sha=058a5bb964826c82",
"July": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvYjY4OGNiOTctZmE5Zi00N2Y5LWI2YzItZjY2ZWQwOWVkYjBiL3BkZl9qdWx5LnBkZiJdXQ/pdf_july.pdf?sha=bf7d82c8f64037eb",
"August": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDYvMzg3YjQwMGEtMGZiYy00MjVhLWI2MWUtOWU3Y2FkMWY1YmEzL3BkZl9hdWd1c3QucGRmIl1d/pdf_august.pdf?sha=104049d82aba9bc4",
"September": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDQvYjQ3YTI0MzctOTRhYS00MWUwLWIxMzktZDA3MDExYmZjYmNlL3BkZl9zZXB0ZW1iZXIucGRmIl1d/pdf_september.pdf?sha=3ad3bf55751aa497",
"October": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDQvY2ZjODg0ZTEtOTdmYy00ZjBjLThkMTktYjQyNGVhZjAwMDZhL3BkZl9vY3RvYmVyLnBkZiJdXQ/pdf_october.pdf?sha=f2e9ac215b16a26d",
"November": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDUvYWQ1NzI0YTUtYjMwYi00YjQxLTg0ZGUtY2EyY2E2YzNjYTAxL3BkZl9ub3ZlbWJlci5wZGYiXV0/pdf_november.pdf?sha=3436089b5762ab6b",
"December": "https://ridgechurch.ca/df_media/W1siZiIsIjIwMjMvMDEvMDkvMTIvNTcvMDYvNmI4MDdhODYtZGViNi00NzBmLTgwMGQtMzI4OGI4OWZiYjg4L3BkZl9kZWNlbWJlci5wZGYiXV0/pdf_december.pdf?sha=947b8d72fbb10bab"
}
const prayer_calendar = {"January": "https://ridgechurch.ca/prayer-calendar",
"February": "https://ridgechurch.ca/prayer-calendar",
"March": "https://ridgechurch.ca/prayer-calendar",
"April": "https://ridgechurch.ca/prayer-calendar",
"May": "https://ridgechurch.ca/prayer-calendar",
"June": "https://ridgechurch.ca/prayer-calendar",
"July": "https://ridgechurch.ca/prayer-calendar",
"August": "https://ridgechurch.ca/prayer-calendar",
"September": "https://ridgechurch.ca/prayer-calendar",
"October": "https://ridgechurch.ca/prayer-calendar",
"November": "https://ridgechurch.ca/prayer-calendar",
"December": "https://ridgechurch.ca/prayer-calendar"
}
//get today's date and insert date into webpage
const d = new Date();
let day = d.getDate();
let month = d.toLocaleString('default', {month: 'long'})
let year = d.getFullYear();
document.getElementById("date").innerHTML = month.concat(" ", day, ", ", year);
document.getElementById("bookmark").innerHTML = '<a href="'.concat(bookmark[month],'" target="_blank">',month," bookmark</a>");
//determine what day we're on in the reading plan
let jan1 = new Date('01/01/2023');
let day_in_plan = (d.getTime() - jan1.getTime()) / (1000 * 3600 * 24);
day_in_plan = Math.floor(day_in_plan); //remove remainder from quotient
if (day_in_plan < 0) { //if plan has not yet begun
    document.getElementById("date").style.display = "none";
    document.getElementById("readings_wrapper").style.display = "none";
    document.getElementById("readings_theme").innerHTML = "Check back January 1st for daily video and blog content to enhance your journey through the Holy Bible!";
} else {
    //pull today's theme and readings from json and insert into webpage
    let readings_text = (bible_content.day[day_in_plan].book).concat(" ", bible_content.day[day_in_plan].ch);
    let readings_link = "https://www.biblegateway.com/passage/?search=".concat(bible_content.day[day_in_plan].book,"+",bible_content.day[day_in_plan].ch,"&version=ESV");
    let readings = '<a href="'.concat(readings_link, '" target="_blank">', readings_text, '</a>');
    let psalm_text = "Psalm ".concat(bible_content.day[day_in_plan].psalm);
    let psalm_first3char = (bible_content.day[day_in_plan].psalm).substring(0, 3);
    let psalm_link = "https://www.biblegateway.com/passage/?search=psalm+1&version=ESV";
    if (psalm_first3char == 119) { //deal with incomplete chapters in Psalm 119 in reading plan
        let verses = (bible_content.day[day_in_plan].psalm).replace ("119 vv. ", "");
        psalm_link = "https://www.biblegateway.com/passage/?search=Psalm+119%3A".concat(verses, "&version=ESV");
    } else {
    psalm_link = "https://www.biblegateway.com/passage/?search=Psalm+".concat(bible_content.day[day_in_plan].psalm, "&version=ESV");
    }
    let psalm = '<a href="'.concat(psalm_link, '" target="_blank">', psalm_text, '</a>');
    document.getElementById("readings_theme").innerHTML = bible_content.day[day_in_plan].heading;
    document.getElementById("readings").innerHTML = readings;
    document.getElementById("psalm").innerHTML = psalm;
    //select commentary intro text based on what commentary content there is for a given day
    let readings_wrapper = document.getElementById("readings_wrapper").innerHTML;
    let today_content = Object.keys(bible_content.day[day_in_plan]);
    if (today_content.includes("video_url") && today_content.includes("blog_url")) {
        readings_wrapper = readings_wrapper.concat(" To enhance your learning, check out the video and blog post below.");
    } else if (today_content.includes("video_url")) {
        readings_wrapper = readings_wrapper.concat(" To enhance your learning, check out the video below.");
    } else if (today_content.includes("blog_url")) {
        readings_wrapper = readings_wrapper.concat(" To enhance your learning, check out the blog post below.");
    } else {
        readings_wrapper = readings_wrapper.concat(" We hope you enjoy today's readings! Be sure to check this page regularly for video and blog content to enhance your learning.");
    }
    document.getElementById("readings_wrapper").innerHTML = readings_wrapper;
    //insert video
    if (today_content.includes("video_url")) {
        let video_title = bible_content.day[day_in_plan].video_title;
        if ((video_title.charAt(video_title.length - 1)) === ' ') {
            video_title = video_title.substring(0, video_title.length - 1)
        }
        let video_url = bible_content.day[day_in_plan].video_url;
        let video_html = '<strong>Video: </strong>Watch <a href="';
        video_html = video_html.concat(video_url, '" target="_blank">"');
        video_html = video_html.concat(video_title, '"</a> on the Bible Project website.');
        document.getElementById("commentary_video").innerHTML = video_html;
    } //insert blog post
    if (today_content.includes("blog_url")) {
        let blog_title = bible_content.day[day_in_plan].blog_title;
        if ((blog_title.charAt(blog_title.length - 1)) === ' ') {
            blog_title = blog_title.substring(0, blog_title.length - 1)
        }
        let blog_url = bible_content.day[day_in_plan].blog_url;
        let blog_html = '<strong>Blog Post: </strong>Read <a href="';
        blog_html = blog_html.concat(blog_url, '" target="_blank">"');
        blog_html = blog_html.concat(blog_title, '"</a> on the Bible Project website.');
        document.getElementById("commentary_blog").innerHTML = blog_html;
    }
    if (today_content.includes("prayer")) {
      let prayer = '<strong>Prayer:</strong> ' + bible_content.day[day_in_plan].prayer
      document.getElementById("prayer").innerHTML = prayer;
    }
}

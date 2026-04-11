const RAW_NODES = [
  {
    id: "luke", img: {
      "4": "assets/starwar/luke_4.webp",
      "5": "assets/starwar/luke_5.webp",
      "6": "assets/starwar/luke_6.webp",
      "default": "assets/starwar/luke_4.webp"
    }, mainColor: "#4a90e2", initials: "LS", 
    en: {
      name: "Luke Skywalker",
      quote: "I am a Jedi, like my father before me.",
      summary: "A humble farmboy from Tatooine destined for greatness. Raised by his Aunt Beru and Uncle Owen, Luke's life changed forever when he discovered a hidden message in a droid. Guided by the wise Obi-Wan Kenobi and the ancient Yoda, he embraces his destiny as a Jedi Knight. He ultimately faces the ultimate test: confronting the terrifying Darth Vader, who is revealed to be his father."
    },
    zh: {
      name: "卢克·天行者",
      quote: "我是绝地武士，就像我父亲一样。",
      summary: "在塔图因农庄长大的少年，命中注定要成就非凡。在两个机器人的引导下，他结识了睿智的绝地大师欧比旺和古老的尤达。为了拯救银河系，卢克踏上了成为绝地武士的荆棘之路。他不仅要对抗邪恶的银河帝国，更要面对最残酷的真相——令人闻风丧胆的达斯·维达竟是他的生父。"
    }
  },
  {
    id: "leia", img: {
      "4": "assets/starwar/leia_4.jpg",
      "5": "assets/starwar/leia_5.jpg",
      "6": "assets/starwar/leia_6.jpg",
      "default": "assets/starwar/leia_4.jpg"
    }, mainColor: "#ffffff", initials: "LO",
    en: {
      name: "Leia Organa",
      quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
      summary: "A fierce, decisive leader in the Rebel Alliance. Raised as a princess of Alderaan, she is actually Anakin Skywalker's daughter and Luke's twin sister. Leia is instrumental in securing the Death Star plans and leading the assault against the Empire. Her fearless demeanor and sharp wit command respect across the galaxy, and she ultimately finds an unlikely romance with the smuggler Han Solo."
    },
    zh: {
      name: "莱娅·奥加纳",
      quote: "帮帮我，欧比旺·克诺比，你是我唯一的希望。",
      summary: "义军同盟中果敢坚定的领袖。作为奥德朗的公主长大，但她真实的身份是阿纳金·天行者的女儿，卢克的双胞胎妹妹。莱娅在窃取死星蓝图和反抗帝国的斗争中起到了至关重要的作用。她无所畏惧的性格和敏锐的智慧赢得了全银河的尊重，并在战火中与走私客汉·索罗坠入爱河。"
    }
  },
  {
    id: "han", cropTop: true, img: {
      "4": "assets/starwar/Han_4.jpeg",
      "5": "assets/starwar/Han_5.jpg",
      "6": "assets/starwar/Han_6.jpeg",
      "default": "assets/starwar/Han_4.jpeg"
    }, mainColor: "#f5a623", initials: "HS",
    en: {
      name: "Han Solo",
      quote: "Never tell me the odds.",
      summary: "A cynical, smooth-talking smuggler from Corellia who initially only cared about paying off his massive debt to Jabba the Hutt. Piloting the legendary Millennium Falcon alongside his loyal Wookiee co-pilot Chewbacca, Han was reluctantly drawn into the Rebel Alliance. Over time, his selfish exterior melted away to reveal a fiercely loyal hero, becoming a General in the Rebellion."
    },
    zh: {
      name: "汉·索罗",
      quote: "别跟我说概率。",
      summary: "来自科雷利亚的走私客，言辞狡黠、玩世不恭，最初只关心如何偿还欠赫特人贾巴的巨额债务。他与伍基人副驾驶丘巴卡一同驾驶传奇的\"千年隼号\"。尽管一开始很不情愿，但他最终被卷入了义军对抗帝国的宏大战争。随着时间推移，他褪去自私的外衣，展现出对朋友无比忠诚的英雄本色。"
    }
  },
  {
    id: "vader", img: {
      "4": "https://static.wikia.nocookie.net/starwars/images/a/a3/Vader-ROTJHD.png",
      "5": "https://static.wikia.nocookie.net/starwars/images/a/a3/Vader-ROTJHD.png",
      "6": "https://static.wikia.nocookie.net/starwars/images/8/84/AnakinSkywalkerghost.jpg",
      "default": "https://static.wikia.nocookie.net/starwars/images/a/a3/Vader-ROTJHD.png"
    }, mainColor: "#e24a4a", initials: "DV",
    en: { 
      name: "Darth Vader",
      quote: "I find your lack of faith disturbing.",
      summary: "Once a heroic Jedi Knight named Anakin Skywalker, Vader was seduced by the dark side of the Force. Encased in terrifying black armor and kept alive by cybernetics, he serves as the Emperor's ruthless enforcer. Obsessed with hunting down the Rebels and turning his son to the dark side, Vader's tragic arc culminates in a final, agonizing choice between obedience and love." 
    },
    zh: { 
      name: "达斯·维达",
      quote: "你对原力的缺乏信仰让我感到不安。",
      summary: "曾经也是一位名叫阿纳金·天行者的英勇绝地武士，却不幸被原力的黑暗面所诱惑。全身包裹在高科技的黑色维生装甲中，他化身为皇帝最无情的执行者。他痴迷于追剿义军并企图将自己的儿子卢克拉入黑暗面。维达悲剧般的一生，最终在对主子的绝对服从与对骨肉的深爱之间做出了终极抉择。" 
    } 
  },
  {
    id: "obiwan", img: "https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg", mainColor: "#50e3c2", initials: "OW",
    en: {
      name: "Obi-Wan Kenobi",
      quote: "Use the Force, Luke.",
      summary: "A legendary Jedi Master who served as a General during the Clone Wars. After the fall of the Jedi Order, he went into hiding on Tatooine under the alias 'Ben'. He watched over young Luke Skywalker for decades before finally initiating him into the ways of the Force. He ultimate sacrificed himself in a duel against his former apprentice, Darth Vader, to allow the heroes to escape."
    },
    zh: {
      name: "欧比旺·克诺比",
      quote: "使用原力，卢克。",
      summary: "一位传奇的绝地大师，曾在克隆人战争中担任将军。在绝地武士团覆灭后，他化名\"本\"隐居在塔图因星。几十年来，他一直暗中保护着年幼的卢克·天行者，并最终将他引入原力之道。为了让英雄们逃脱，他在与昔日徒弟达斯·维达的光剑决斗中做出了最终的牺牲。"
    }
  },
  {
    id: "chewie", img: "https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png", mainColor: "#8b572a", initials: "CW",
    en: {
      name: "Chewbacca",
      quote: "*Roars with unwavering loyalty*",
      summary: "A legendary Wookiee warrior and Han Solo's extremely loyal co-pilot. Known for his towering strength, quick temper, and mechanical expertise, Chewie is an essential crew member on the Millennium Falcon. He risks his life countless times for Han and the Rebellion, fighting fiercely in the battles of Yavin, Hoth, and Endor."
    },
    zh: {
      name: "丘巴卡",
      quote: "*一声震天动地的嚎叫*",
      summary: "传奇的伍基人战士，也是汉·索罗极其忠诚的副驾驶。丘巴卡以他惊人的力量、暴躁的脾气以及高超的机械技术而闻名，是千年隼号不可或缺的船员。他曾无数次为汉和义军冒着生命危险，在雅汶、霍斯和恩多战役中都英勇奋战。"
    }
  },
  {
    id: "r2d2", img: "https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png", mainColor: "#4a90e2", initials: "R2",
    en: {
      name: "R2-D2",
      quote: "*Determined beeping and whistling*",
      summary: "An extraordinarily brave and resourceful astromech droid. From carrying the stolen Death Star plans to repairing hyperdrives under heavy fire, R2-D2 has saved his friends from certain death on numerous occasions. Communicating through a series of iconic beeps and whistles, he forms an unbreakable bond with Luke Skywalker and C-3PO."
    },
    zh: {
      name: "R2-D2",
      quote: "*坚定不移的哔哔声*",
      summary: "一个异常勇敢、足智多谋的宇航技工机器人。从携带被盗的死星蓝图，到在猛烈炮火下修理超空间引擎，R2-D2曾无数次将朋友们从必死的险境中拯救出来。他通过一系列标志性的哔哔声交流，与卢克·天行者和C-3PO建立了牢不可破的羁绊。"
    }
  },
  {
    id: "c3po", cropTop: true, img: "https://static.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png", mainColor: "#f8e71c", initials: "3P",
    en: {
      name: "C-3PO",
      quote: "The odds of successfully navigating an asteroid field are approximately 3,720 to 1!",
      summary: "A protocol droid fluent in over six million forms of communication. Built by Anakin Skywalker decades ago, C-3PO often finds himself dragged into terrifying combat situations far beyond his programming. Despite his constant worrying and complaining, his remarkable translation skills and unwavering dedication make him highly valued by the Rebellion."
    },
    zh: {
      name: "C-3PO",
      quote: "成功穿越小行星带的概率大约是3720比1！",
      summary: "一台精通六百多万种交流方式的礼仪机器人，几十年前由阿纳金·天行者制造。C-3PO经常发现自己被卷入远超其程序设定的恐怖战斗中。尽管他总是忧心忡忡、抱怨不断，但他卓越的翻译能力和坚定不移的奉献精神，使他备受义军同盟的珍视。"
    }
  },
  {
    id: "yoda", img: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png", mainColor: "#7ed321", initials: "YD",
    en: {
      name: "Yoda",
      quote: "Do. Or do not. There is no try.",
      summary: "One of the most powerful and wise Jedi Masters in galactic history. After the great Jedi purge, he went into self-imposed exile on the swamp planet of Dagobah. Despite his small stature and eccentric behavior, Yoda possesses an unparalleled mastery of the Force. He reluctantly takes on the task of completing Luke Skywalker's training."
    },
    zh: {
      name: "尤达",
      quote: "做，或者不做，没有尝试这一说。",
      summary: "银河系历史上最强大、最睿智的绝地大师之一。在绝地大清洗之后，他自我流放到沼泽星球达戈巴。尽管他身材矮小、行为古怪，但他对原力的掌控却无人能及。在老友的嘱托下，他勉为其难地承担起了完成卢克·天行者训练的重任。"
    }
  },
  {
    id: "palpatine", img: "https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png", mainColor: "#9013fe", initials: "EP",
    en: {
      name: "Emperor Palpatine",
      quote: "Everything is proceeding as I have foreseen.",
      summary: "The tyrannical ruler of the Galactic Empire and the dark Sith Lord known as Darth Sidious. Behind his aged, scarred appearance lies a master manipulator who orchestrated the fall of the Republic and the Jedi Order. He relentlessly tries to turn Luke Skywalker to the dark side to replace Darth Vader, relying entirely on fear and the absolute power of the Dark Side."
    },
    zh: {
      name: "帕尔帕廷皇帝",
      quote: "一切都在按我预见的轨迹发展。",
      summary: "银河帝国的暴君，也是被称为达斯·西迪厄斯的黑暗西斯尊主。在他苍老、布满疤痕的外表下，隐藏着一个老谋深算的操控者，正是他一手策划了共和国和绝地武士团的覆灭。他无情地试图将卢克·天行者拉入黑暗面以取代达斯·维达，完全依靠恐惧和原力黑暗面的绝对力量。"
    }
  },
  {
    id: "lando", img: "https://static.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png", mainColor: "#417505", initials: "LC",
    en: {
      name: "Lando Calrissian",
      quote: "This deal is getting worse all the time!",
      summary: "A suave, sophisticated gambler and the Baron Administrator of Cloud City. Lando is an old acquaintance of Han Solo and the original owner of the Millennium Falcon. Forced into a corner by the Empire, he betrays his friend to Darth Vader, but immediately suffers deep remorse. He later orchestrates a daring rescue and becomes a pivotal General in the Rebel Alliance."
    },
    zh: {
      name: "兰多·卡瑞辛",
      quote: "这笔交易越来越糟糕了！",
      summary: "云城的男爵管理员，一位文质彬彬、老于世故的赌徒。兰多是汉·索罗的老相识，也是千年隼号最初的主人。在帝国的胁迫下，他出卖了朋友给达斯·维达，但立刻陷入了深深的自责。随后他策划了一场大胆的营救，并最终成为了义军同盟中至关重要的将军。"
    }
  },
  {
    id: "boba", img: "https://static.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png", mainColor: "#5b8a5b", initials: "BF",
    en: {
      name: "Boba Fett",
      quote: "He's no good to me dead.",
      summary: "The galaxy's most feared and deadly bounty hunter. Clad in customized Mandalorian armor and wielding an arsenal of lethal weaponry, Boba Fett tracks the Millennium Falcon to Cloud City on behalf of both Darth Vader and Jabba the Hutt. Quiet, calculating, and absolutely ruthless, he successfully delivers a carbonite-frozen Han Solo to Tatooine."
    },
    zh: {
      name: "波巴·费特",
      quote: "死人对我没用。",
      summary: "银河系中最令人恐惧的致命赏金猎人。波巴·费特身穿定制的曼达洛盔甲，携带了一整套致命武器。受达斯·维达和赫特人贾巴的双重委托，他一路追踪千年隼号到了云城。他沉默寡言、精于算计且绝对残酷，成功地将碳凝状态的汉·索罗送到了塔图因。"
    }
  },
  {
    id: "jabba", img: "https://static.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png", mainColor: "#8b8b00", initials: "JH",
    en: {
      name: "Jabba the Hutt",
      quote: "There will be no bargain.",
      summary: "A massive, slug-like crime lord who operates a vast criminal empire from his palace on Tatooine. Gluttonous and immensely cruel, he surrounds himself with mercenaries, bounty hunters, and enslaved dancers. He places a massive bounty on Han Solo's head, which ultimately leads to a spectacular confrontation with Luke Skywalker over the Sarlacc pit."
    },
    zh: {
      name: "赫特人贾巴",
      quote: "没什么好谈的。",
      summary: "一个庞大的、形似鼻涕虫的犯罪头目，在塔图因的宫殿里掌管着一个庞大的犯罪帝国。他贪婪且极其残忍，周围簇拥着雇佣兵、赏金猎人和被奴役的舞女。他在汉·索罗的人头上悬赏了巨额赏金，这最终导致了他在沙拉克深渊坑上方与卢克·天行者的一场惊天动地的对决。"
    }
  },
  {
    id: "tarkin", img: "https://static.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg", mainColor: "#9b9b9b", initials: "GT",
    en: {
      name: "Grand Moff Tarkin",
      quote: "You may fire when ready.",
      summary: "The cold, calculating regional governor of the Outer Rim and commander of the first Death Star. Tarkin firmly believes in ruling the galaxy through the fear of force, a doctrine that led to the devastating destruction of Alderaan. He holds authority even over Darth Vader during the Death Star's operation, but his hubris proves to be his undoing."
    },
    zh: {
      name: "塔金星区长",
      quote: "准备好了就开火。",
      summary: "外环星区冷酷无情、精于算计的总督，也是第一颗死星的指挥官。塔金坚信通过武力的恐惧来统治银河系，这一信条直接导致了奥德朗星被毁灭的惨剧。在死星的运作期间，他的职权甚至在达斯·维达之上，但他的傲慢最终导致了他的自取灭亡。"
    }
  },
  {
    id: "ackbar", img: "https://static.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png", mainColor: "#c24e38", initials: "AA",
    en: {
      name: "Admiral Ackbar",
      quote: "It's a trap!",
      summary: "A brilliant amphibious Mon Calamari tactician who serves as the Supreme Commander of the Rebel Alliance Fleet. Operating from his flagship, Home One, Ackbar leads the massive space assault against the second Death Star. He is most famous for instantly recognizing the Empire's ambush during the Battle of Endor, declaring 'It's a trap!'"
    },
    zh: {
      name: "阿克巴上将",
      quote: "这是一个陷阱！",
      summary: "一位才华横溢的两栖蒙卡拉马里战术家，担任义军同盟舰队的最高指挥官。阿克巴在他的旗舰\"家园一号\"上，亲自指挥了对第二颗死星的庞大太空突袭。他在恩多战役中瞬间识破帝国的伏击，并喊出那句著名的\"这是一个陷阱！\"，令他闻名遐迩。"
    }
  },
  {
    id: "monmothma", img: "https://static.wikia.nocookie.net/starwars/images/3/30/Mon-Mothma-OT-MP-Square.png", mainColor: "#c1bbae", initials: "MM",
    en: {
      name: "Mon Mothma",
      quote: "Many Bothans died to bring us this information.",
      summary: "The serene, disciplined political leader and founding member of the Rebel Alliance. Once a prominent Senator during the days of the Republic, she secretly organized the factions that opposed Emperor Palpatine's tyranny. She coordinates the overall strategy of the Rebellion, solemnly briefing the strike teams before the Battle of Endor."
    },
    zh: {
      name: "蒙·莫思马",
      quote: "许多博萨人为了带回这份情报而献出了生命。",
      summary: "义军同盟的创始成员和沉稳干练的政治领袖。作为共和国时期的一位杰出参议员，她暗中组织了反对帕尔帕廷皇帝暴政的各个派系。她负责协调义军的整体战略，并在恩多战役前庄重地向突击队下达了作战简报。"
    }
  },
  {
    id: "wedge", img: "https://static.wikia.nocookie.net/starwars/images/b/b2/WedgeAntilles-Masterwork2020.png", mainColor: "#e07826", initials: "WA",
    en: {
      name: "Wedge Antilles",
      quote: "Cut to the left. I'll take the leader.",
      summary: "An extraordinarily skilled Corellian starfighter pilot for the Rebel Alliance. Wedge is one of the few pilots to survive the trench run on the first Death Star alongside Luke. He continues to fly in Rogue Squadron during the Battle of Hoth, and ultimately co-pilots the strike that destroys the second Death Star's reactor core."
    },
    zh: {
      name: "韦奇·安蒂列斯",
      quote: "向左转，我来对付头领。",
      summary: "义军同盟中技术极其精湛的科雷利亚星际战斗机飞行员。韦奇是少数与卢克一同在第一颗死星的壕沟战中幸存下来的飞行员之一。在霍斯战役中，他继续在侠盗中队飞行，并最终在恩多战役中参与了摧毁第二颗死星反应堆核心的致命一击。"
    }
  },
  {
    id: "piett", img: "https://static.wikia.nocookie.net/starwars/images/1/13/FirusPiett-CGSWG.png", mainColor: "#7e8387", initials: "FP",
    en: {
      name: "Admiral Piett",
      quote: "Lord Vader, we have them.",
      summary: "An Imperial officer who surprisingly manages to survive longer than most of Darth Vader's subordinates. Promoted to Admiral of the Executor after Vader executes his predecessor for incompetence, Piett leads the Imperial fleet during the blockade of Hoth and commands the armada during the devastating Battle of Endor."
    },
    zh: {
      name: "皮耶特上将",
      quote: "维达大人，目标已锁定。",
      summary: "一位令人意外地比大多数达斯·维达部下活得都长的帝国军官。在维达因前任的无能而将其处决后，皮耶特被提拔为\"执行者号\"的上将。他指挥了帝国舰队对霍斯的封锁，并在惨烈的恩多战役中统帅了帝国的大部队。"
    }
  },
  {
    id: "veers", img: "https://static.wikia.nocookie.net/starwars/images/7/77/GeneralVeers-BaseSeries1.png", mainColor: "#61685b", initials: "GV",
    en: {
      name: "General Veers",
      quote: "Target: maximum firepower!",
      summary: "A calculating and highly effective Imperial ground force commander. Veers pilots the lead AT-AT walker during the assault on Echo Base during the Battle of Hoth. Unlike many of his peers, his tactical competence earns him the rare respect of Darth Vader, as he successfully destroys the Rebels' main power generator."
    },
    zh: {
      name: "维尔斯将军",
      quote: "目标：以最大火力攻击！",
      summary: "一位精于算计且极其高效的帝国地面部队指挥官。在霍斯战役期间，维尔斯亲自驾驶领头的AT-AT步行机突击回音基地。与他的许多同僚不同，他出色的战术能力为他赢得了达斯·维达罕见的尊重，并成功摧毁了义军的主发电机。"
    }
  },
  {
    id: "greedo", img: "https://static.wikia.nocookie.net/starwars/images/f/f9/Greedo-SWBC32.png", mainColor: "#578f65", initials: "GR",
    en: {
      name: "Greedo",
      quote: "Going somewhere, Solo?",
      summary: "A Rodian bounty hunter who is overconfident and not particularly bright. Hired by Jabba the Hutt to collect the bounty on Han Solo, Greedo tracks him down to the Mos Eisley Cantina. His attempt to threaten the seasoned smuggler ends disastrously, resulting in a sudden and fatal blaster shot across the cantina table."
    },
    zh: {
      name: "格里多",
      quote: "想去哪儿，索罗？",
      summary: "一名极其过度自信且不太聪明的罗迪亚赏金猎人。受雇于赫特人贾巴去索取悬赏在汉·索罗头上的巨额债务，格里多一路追踪他来到了莫斯艾斯利小酒馆。他试图威胁这位经验丰富的走私客，结果却在酒馆的桌子对面被一枪致命毙命。"
    }
  },
  {
    id: "bossk", img: "https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png", mainColor: "#bfa450", initials: "BS",
    en: {
      name: "Bossk",
      quote: "I'll have that bounty. One way or another.",
      summary: "A fearsome and brutal Trandoshan bounty hunter known for his intense rivalry with Boba Fett. Clad in a yellow flight suit, Bossk is one of the elite bounty hunters personally summoned by Darth Vader onto the bridge of the Executor to track down the elusive Millennium Falcon. He is deeply feared across the galaxy."
    },
    zh: {
      name: "博斯克",
      quote: "赏金会归我的，不管以何种方式。",
      summary: "一名令人恐惧的残暴川多尚赏金猎人，以与波巴·费特的激烈竞争而闻名。身穿黄色飞行服的博斯克，是被达斯·维达亲自召唤到执行者号舰桥上的精英赏金猎人之一，奉命去追踪难以捉摸的千年隼号。他在整个银河系都令人闻风丧胆。"
    }
  },
  {
    id: "ig88", img: "https://static.wikia.nocookie.net/starwars/images/f/f2/IG-88.png", mainColor: "#808285", initials: "IG",
    en: {
      name: "IG-88",
      quote: "*Target acquired. Initiating pursuit protocol.*",
      summary: "A tall, terrifying assassin droid who turned to bounty hunting. Programmed with absolute lethal precision, IG-88 stands among the bounty hunters hired by Darth Vader. Known for operating without any moral constraints, its heavily armored skeletal frame is packed with hidden weaponry, making it the perfect mechanical killer."
    },
    zh: {
      name: "IG-88",
      quote: "*目标已锁定，启动追踪程序。*",
      summary: "一台高大、恐怖的转行做赏金猎人的暗杀机器人。被植入了绝对致命的精准程序的IG-88，也站在被达斯·维达雇佣的猎人行列中。它以毫无道德底线的杀戮方式而闻名，其重装甲的骨架内藏着各种武器，堪称完美的机械杀手。"
    }
  },
  {
    id: "owen", img: "https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png", mainColor: "#c2ae91", initials: "OL",
    en: {
      name: "Owen Lars",
      quote: "I need you here, Luke.",
      summary: "A gruff, hard-working moisture farmer on the harsh desert planet of Tatooine. Owen raised his step-nephew Luke Skywalker with strict discipline, desperately trying to shield the boy from his true Jedi heritage and the dark fate of his father, Anakin Skywalker. His quiet life comes to a tragic end at the hands of Imperial stormtroopers."
    },
    zh: {
      name: "欧文·拉尔斯",
      quote: "我需要你留在这里，卢克。",
      summary: "一位性格粗暴但勤劳的塔图因湿气农场主。欧文用极其严格的纪律抚养着他的继侄卢克·天行者，拼命试图保护这个男孩远离他真正的绝地血统，以及其生父阿纳金·天行者那黑暗的命运。他平静的生活最终悲惨地终结在帝国冲锋队的爆能枪下。"
    }
  },
  {
    id: "beru", img: "https://static.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png", mainColor: "#a38268", initials: "BL",
    en: {
      name: "Beru Lars",
      quote: "Luke is not a farmer, Owen. He has too much of his father in him.",
      summary: "A warm and caring woman who practically served as Luke Skywalker's mother on the Tatooine moisture farm. While her husband Owen tried to forcefully ground Luke to the farm, Beru quietly understood that the boy had too much of his father in him to be kept on the desert planet forever. She met the same tragic fate as her husband."
    },
    zh: {
      name: "贝露·拉尔斯",
      quote: "卢克不是农夫，欧文，他身上有太多他父亲的影子。",
      summary: "一位在一个塔图因湿气农场上，实际扮演着卢克·天行者母亲角色的温暖而充满关爱的女人。当她的丈夫欧文试图强行将卢克留在农场时，贝露却默默地理解，这个男孩身上有着太多他父亲的影子，不可能永远被困在这个沙漠星球。她和丈夫遭遇了同样悲惨的命运。"
    }
  },
  {
    id: "wicket", img: "https://static.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png", mainColor: "#8b6240", initials: "WW",
    en: {
      name: "Wicket W. Warrick",
      quote: "Yub nub!",
      summary: "A brave, curious young Ewok warrior from the forest moon of Endor. Initially terrified by the presence of Princess Leia, Wicket quickly overcomes his fear and befriends her. He plays a pivotal role in rallying the entire Ewok tribe to aid the Rebel strike team in ambushing the Imperial forces at the shield generator."
    },
    zh: {
      name: "威基特",
      quote: "呦努！",
      summary: "恩多森林卫星上一名勇敢而充满好奇心的年轻伊沃克人战士。起初，威基特被莱娅公主的出现吓坏了，但他很快克服了恐惧并与她成为了朋友。他在号召整个伊沃克部落协助义军突击队在护盾发生器伏击帝国军队的过程中发挥了关键作用。"
    }
  }
];

const RAW_LINKS = [
  // EPISODE IV
  { source: "luke", target: "leia", movie: 4, weight: 8, type: "ally" },
  { source: "luke", target: "han", movie: 4, weight: 9, type: "ally" },
  { source: "leia", target: "han", movie: 4, weight: 7, type: "tension" },
  { source: "luke", target: "obiwan", movie: 4, weight: 10, type: "mentor" },
  { source: "vader", target: "tarkin", movie: 4, weight: 8, type: "ally" },
  { source: "leia", target: "tarkin", movie: 4, weight: 10, type: "enemy" },
  { source: "obiwan", target: "vader", movie: 4, weight: 10, type: "enemy" },
  { source: "han", target: "chewie", movie: 4, weight: 10, type: "ally" },
  { source: "luke", target: "r2d2", movie: 4, weight: 8, type: "ally" },
  { source: "r2d2", target: "c3po", movie: 4, weight: 10, type: "ally" },
  { source: "leia", target: "vader", movie: 4, weight: 9, type: "enemy" },
  { source: "luke", target: "wedge", movie: 4, weight: 7, type: "ally" },
  { source: "han", target: "greedo", movie: 4, weight: 8, type: "bounty" },
  { source: "luke", target: "owen", movie: 4, weight: 9, type: "family" },
  { source: "luke", target: "beru", movie: 4, weight: 9, type: "family" },
  { source: "owen", target: "beru", movie: 4, weight: 10, type: "romance" },
  { source: "leia", target: "r2d2", movie: 4, weight: 7, type: "ally" },
  { source: "c3po", target: "owen", movie: 4, weight: 5, type: "ally" },
  
  // EPISODE V
  { source: "luke", target: "leia", movie: 5, weight: 8, type: "ally" },
  { source: "luke", target: "han", movie: 5, weight: 9, type: "ally" },
  { source: "leia", target: "han", movie: 5, weight: 10, type: "romance" },
  { source: "luke", target: "yoda", movie: 5, weight: 10, type: "mentor" },
  { source: "vader", target: "luke", movie: 5, weight: 12, type: "family" },
  { source: "lando", target: "han", movie: 5, weight: 8, type: "betrayal" },
  { source: "leia", target: "lando", movie: 5, weight: 7, type: "tension" },
  { source: "lando", target: "vader", movie: 5, weight: 6, type: "enemy" },
  { source: "boba", target: "vader", movie: 5, weight: 7, type: "bounty" },
  { source: "boba", target: "han", movie: 5, weight: 8, type: "bounty" },
  { source: "han", target: "chewie", movie: 5, weight: 10, type: "ally" },
  { source: "palpatine", target: "vader", movie: 5, weight: 9, type: "mentor" },
  { source: "r2d2", target: "c3po", movie: 5, weight: 10, type: "ally" },
  { source: "luke", target: "r2d2", movie: 5, weight: 9, type: "ally" },
  { source: "vader", target: "piett", movie: 5, weight: 8, type: "ally" },
  { source: "vader", target: "veers", movie: 5, weight: 6, type: "ally" },
  { source: "bossk", target: "vader", movie: 5, weight: 5, type: "bounty" },
  { source: "ig88", target: "vader", movie: 5, weight: 5, type: "bounty" },
  { source: "bossk", target: "han", movie: 5, weight: 5, type: "bounty" },
  { source: "luke", target: "wedge", movie: 5, weight: 6, type: "ally" },

  // EPISODE VI
  { source: "luke", target: "leia", movie: 6, weight: 10, type: "family" },
  { source: "vader", target: "leia", movie: 6, weight: 8, type: "family" },
  { source: "leia", target: "han", movie: 6, weight: 10, type: "romance" },
  { source: "luke", target: "vader", movie: 6, weight: 12, type: "family" },
  { source: "palpatine", target: "vader", movie: 6, weight: 11, type: "betrayal" },
  { source: "lando", target: "han", movie: 6, weight: 9, type: "ally" },
  { source: "luke", target: "palpatine", movie: 6, weight: 12, type: "enemy" },
  { source: "jabba", target: "han", movie: 6, weight: 9, type: "enemy" },
  { source: "jabba", target: "leia", movie: 6, weight: 10, type: "enemy" },
  { source: "jabba", target: "luke", movie: 6, weight: 8, type: "enemy" },
  { source: "jabba", target: "boba", movie: 6, weight: 8, type: "ally" },
  { source: "boba", target: "han", movie: 6, weight: 6, type: "enemy" },
  { source: "han", target: "chewie", movie: 6, weight: 10, type: "ally" },
  { source: "luke", target: "yoda", movie: 6, weight: 9, type: "mentor" },
  { source: "r2d2", target: "c3po", movie: 6, weight: 10, type: "ally" },
  { source: "ackbar", target: "lando", movie: 6, weight: 8, type: "ally" },
  { source: "monmothma", target: "ackbar", movie: 6, weight: 7, type: "ally" },
  { source: "leia", target: "wicket", movie: 6, weight: 8, type: "ally" },
  { source: "han", target: "wicket", movie: 6, weight: 5, type: "tension" },
  { source: "c3po", target: "wicket", movie: 6, weight: 9, type: "ally" },
  { source: "piett", target: "vader", movie: 6, weight: 7, type: "ally" },
  { source: "lando", target: "wedge", movie: 6, weight: 8, type: "ally" }
];

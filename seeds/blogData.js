const { Blog } = require('../models');

const blogData = [
  {
    title: 'A Riot as a Snapshot of the Future to Be',
    content: `While the riots occurred due to the very lax sentence given to William Berner (given a manslaughter charge for a premeditated murder,) the other perpetrator Joe Palmer, a man of mixed African and European descent, was not extended the same privilege. He was sentenced to be hanged.
    It's one of countless examples of African-American men not being extended the same legal treatment as white citizens. Palmer's sentencing was so unremarkable at the time that, frankly, it would not surprise this author if Palmer was not guilty of murder at all.

    Additionally, this event shows the discontent of the labor class bubbling up in the post industrial-revolution world. The individual that was murdered was Mr. Berner's boss. It gives us a taste of the momentum the labor movement was gathering, and a prelude to the ideological turns that would come in the early 20th century.`,
    event_id: 15,
    user_id: 2,
  },
  {
    title: 'The Labor Movement as a Burgeoning Dam',
    content: `These riots were born from the discontent of the working class (in more ways than one). In the early stages of the labor movement, there was a growing sense of pressure building up among workers who had long been exploited and mistreated by their employers. Like a dam that has been slowly filling with water, this pressure eventually reached a breaking point, and the labor movement burst forth with incredible force. Just as a burst dam can unleash a torrent of water that can reshape the landscape, the labor movement had a profound impact on the social and economic landscape of the United States and other countries. It brought about major changes in labor laws and regulations, helped to establish workers' rights and protections, and paved the way for the creation of labor unions that continue to fight for fair wages and working conditions to this day. While the early stages of the labor movement were undoubtedly tumultuous and at times violent, they ultimately represented a powerful and necessary force for change in a world that was deeply unequal and unjust.`,
    event_id: 15,
    user_id: 6,
  },
  {
    title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper augue vel risus ultricies, blandit finibus purus aliquam. Nunc accumsan, est at tincidunt cursus, felis nibh pellentesque enim, vel tristique neque mauris at libero. Aliquam faucibus ullamcorper urna, iaculis tristique est elementum id. Cras rhoncus, lectus nec lacinia facilisis, massa nisl consectetur ex, sed hendrerit lacus urna eu purus. Aliquam porttitor at eros ut malesuada. Mauris tellus eros, lobortis eu varius in, tempor ac orci. Proin eget nisi lorem. Nunc vel sem et est lobortis consectetur id vitae dui. Praesent tincidunt in massa quis tristique. Ut nec ipsum fermentum, varius enim quis, bibendum eros.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu purus et risus interdum lobortis. Vivamus fringilla viverra ex, at iaculis purus. Phasellus vitae eros eget elit lobortis pellentesque. In pulvinar convallis commodo. Phasellus molestie lacus fermentum, suscipit nulla ut, aliquet purus. Suspendisse potenti. Proin euismod sagittis nisl, at iaculis neque pellentesque a. Fusce elementum, purus eget pretium cursus, ipsum nunc molestie turpis, quis gravida sapien mauris quis velit. Maecenas tristique rhoncus lacus at varius.
    
    Nam sit amet scelerisque nibh, sed hendrerit lacus. Nunc mattis pharetra ipsum nec vestibulum. Donec et quam volutpat, volutpat ante id, maximus libero. Curabitur sit amet mi magna. Aliquam condimentum dolor id orci sollicitudin, id congue leo suscipit. Phasellus ultrices ullamcorper nisi. Aenean eu hendrerit dui. Cras et pretium dui. Proin ultrices elit ut nisi vehicula, vel eleifend libero aliquam. Duis molestie tortor sit amet erat lacinia, vel suscipit nunc feugiat. Praesent a congue ante. Nam condimentum faucibus tellus blandit rhoncus.
    
    Suspendisse eget augue vehicula, rutrum arcu a, feugiat turpis. Curabitur ullamcorper, libero sit amet imperdiet pellentesque, enim odio malesuada tellus, lobortis gravida purus turpis vitae mi. Sed odio risus, ullamcorper ut iaculis ac, convallis at quam. Proin mi urna, auctor nec condimentum ut, fringilla et justo. Sed in pellentesque urna, non pretium ipsum. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in mi odio. Ut fringilla pharetra hendrerit. Etiam eu libero orci. Vestibulum vel nunc iaculis, porta ex non, rutrum lacus. Vestibulum sed turpis tincidunt augue sagittis volutpat vitae nec massa. Mauris pellentesque efficitur purus vitae mollis. Fusce quis ipsum est. Integer nisi ipsum, euismod nec odio quis, eleifend pulvinar odio.
    
    Suspendisse blandit est eros. Maecenas egestas dolor vel sem imperdiet, a imperdiet augue mattis. Proin ultricies quam eu ligula laoreet, quis vulputate nisi consequat. Quisque a risus scelerisque, dictum magna fringilla, viverra purus. Nulla id diam odio. Proin porta ex turpis, non euismod justo gravida sodales. Aenean aliquam ligula vel nunc mollis, sit amet aliquet lorem interdum. Suspendisse aliquam orci diam, a facilisis nibh fermentum eu. Maecenas metus quam, bibendum vitae quam eu, mattis vehicula lectus. Nullam consequat mi id sodales pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tempor libero sit amet nisl volutpat, vel faucibus nisl aliquam.`,
    event_id: 5,
    user_id: 4,
  },
  {
    title: 'Lorem Ipsum Viginti tres',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, diam feugiat commodo elementum, metus turpis placerat purus, non iaculis lorem augue cursus augue. Nullam lorem augue, iaculis ut lectus eget, ultrices pellentesque velit. Ut consequat lectus eu risus dapibus hendrerit nec at quam. Cras semper ex et massa mattis, vitae aliquam lorem congue. Cras efficitur euismod tellus vel tristique. Quisque nisl lacus, egestas quis augue a, finibus lobortis tellus. Morbi viverra volutpat turpis id rhoncus. Aliquam faucibus ante eu rhoncus rutrum. Pellentesque ornare quam et vestibulum facilisis. Quisque laoreet vulputate nibh.

    Vivamus feugiat odio purus. Nam consectetur nibh a dignissim faucibus. Sed viverra viverra leo, ut fermentum nunc feugiat ut. Nulla varius, leo non pulvinar dictum, dolor mauris congue purus, et molestie ante nisi quis nibh. Maecenas vulputate dignissim magna id finibus. Cras iaculis iaculis lectus. Donec interdum risus ac augue vehicula euismod. Vestibulum placerat metus eu hendrerit dapibus. Etiam facilisis dolor quis ultricies cursus. Nunc quis feugiat tortor, eu ultrices enim. Aenean non metus erat. Vestibulum placerat malesuada malesuada. Nam rhoncus neque in cursus commodo.
    
    Sed non sapien mattis, gravida lacus at, scelerisque mauris. Quisque vestibulum eu nunc vel lobortis. Praesent eu sem ornare, faucibus augue id, dictum augue. Donec ut rhoncus metus, quis dapibus dolor. Phasellus vel tortor nec ipsum ultricies tincidunt. Pellentesque vulputate purus sit amet feugiat commodo. Nam nec leo egestas, eleifend lectus quis, dictum nisi. Aliquam quis ante placerat, efficitur nisl sit amet, venenatis turpis. Suspendisse et ante erat. Vestibulum malesuada nibh sit amet ligula interdum accumsan.
    
    Quisque mauris urna, aliquet vel dolor a, semper lacinia est. Morbi ac orci et libero mattis imperdiet non congue orci. Nunc a feugiat erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent odio augue, accumsan eget tortor nec, elementum efficitur tortor. Nam placerat est tempus nisi varius, eget faucibus erat mollis. Cras dignissim tempus purus. In congue sollicitudin metus finibus consequat. Proin tincidunt, quam vel vehicula euismod, ex justo laoreet dolor, ut finibus ex lorem ut massa. Aenean convallis vestibulum pellentesque. Nunc sollicitudin, sem eget posuere pellentesque, risus nibh fringilla leo, aliquet rutrum eros nisi id est. Phasellus eget magna eu odio fermentum bibendum. Fusce et ullamcorper urna. Aliquam erat volutpat. Nulla et aliquet risus. Fusce semper venenatis ullamcorper.
    
    Vestibulum iaculis porttitor nulla, sit amet varius mauris sagittis at. Ut blandit vehicula turpis, vel hendrerit urna vulputate eget. Aliquam dignissim molestie magna, non porttitor elit. Duis at nisi ultrices, mattis ipsum maximus, pellentesque est. Praesent mattis dapibus gravida. Maecenas sit amet justo diam. Nunc et nunc vel risus accumsan accumsan. Donec id lorem fringilla, bibendum mi ut, iaculis quam. Duis auctor vitae risus dignissim laoreet. Cras efficitur fringilla elit sit amet ultrices.`,
    event_id: 13,
    user_id: 2,
  },
  {
    title: 'ChatGPT on the Pope & Venice',
    content: `In 1606, Pope Clement V issued a decree that excommunicated and interdicted Venice, a powerful city-state in Italy. This action was a response to Venice's refusal to submit to papal authority and its attempts to assert its independence from the Catholic Church. While the decree had significant consequences for Venice and its people, it also revealed larger tensions between the papacy and secular authorities during the early modern period.

    The excommunication and interdiction of Venice were significant because they effectively cut off the city from the rest of the Catholic Church. This meant that Venetians could no longer participate in certain religious rituals or receive sacraments, including the Eucharist. The interdict also meant that Venice's churches were closed and its bells were silenced, which had a profound impact on the daily life of the city's inhabitants. The decree also had economic consequences since Venice's trade relationships with Catholic countries were disrupted.
    
    However, the decree also reflected broader tensions between the papacy and secular authorities during the early modern period. Venice had a long history of resisting papal authority and was known for its attempts to maintain independence from the Catholic Church. The excommunication and interdiction were the culmination of a long-standing conflict between the papacy and Venice over issues such as the appointment of bishops and the church's role in Venetian politics. This conflict was part of a larger struggle between the papacy and secular authorities in Europe over who had ultimate authority over the church.
    
    Moreover, the decree had significant political implications for Venice. By cutting off the city from the Catholic Church, the papacy was able to weaken Venice's position as a powerful city-state. This was particularly important because Venice was a major player in the politics of Italy and Europe at the time. The excommunication and interdiction also had implications for the power dynamics between the papacy and other secular authorities in Italy and Europe.
    
    In conclusion, Pope Clement V's excommunication and interdiction of Venice were significant events that had far-reaching consequences for the city and its people. While the decree had immediate economic and religious consequences for Venice, it also revealed larger tensions between the papacy and secular authorities during the early modern period. Ultimately, the decree reflected the ongoing struggle between the papacy and secular authorities in Europe over who had ultimate authority over the Catholic Church.`,
    event_id: 3,
    user_id: 6,
  },
  {
    title: "I Interviewed an English Goblin about Charles Watson-Wentworth. Here's What They Had to Say!",
    content: `Felthog balthag nygrom zyrgoth. Balthag grothnyg zyrgoth shalnag krygloth. Nygrom shalnag grothnyg felthog krygloth. Zorgoth krygloth balthag shalnag felthog. Grothnyg zyrgoth nygrom balthag krygloth.
    Nargoth zyrgoth balthag grothnyg! Krygloth shalnag felthog! Nygrom zorgoth shalnag krygloth! Felthog grothnyg balthag nygrom! Shalnag zyrgoth krygloth balthag!`,
    event_id: 7,
    user_id: 2,
  },
  {
    title: 'Andrew Johnson was Always a Terrible Pick for Lincolns VP',
    content: `It's pretty remarkable that congress managed to overturn the veto. I guess that's at least one thing reconstruction got right, before it all fell to pieces.`,
    event_id: 13,
    user_id: 2,
  },
  {
    title: 'The Sacking of Troy',
    content: `Sing to me, O Muse, of the great sacking of Troy, that fateful day when the city fell and the once-great walls were reduced to rubble. The Trojan War, that long and bitter struggle between the Achaean forces and the proud defenders of Troy, had raged on for years with no end in sight. But on that day, the Achaeans, led by the cunning Odysseus and the mighty Achilles, breached the walls and poured into the city, sword in hand. The streets were awash with blood, as the Trojans fought with desperate courage to defend their homes and families. But in the end, the Achaean forces proved too powerful, and Troy fell to their relentless assault. And so it was that the great city of Priam, once so mighty and proud, lay in ruins, a testament to the terrible cost of war.`,
    event_id: 44,
    user_id: 1,
  },
  {
    title: 'My Cursed Birthday',
    content: `Perhaps this is something that everyone has (since history is lined with millions of corpses) but my birthday has some really brutal events associated with it. Thich Quang Duc self immolated. Henry VII married Catherine of Aragon, and, in addition to many others, Troy was sacked.`,
    event_id: 44,
    user_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
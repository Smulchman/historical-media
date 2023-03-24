const { Event } = require("../models")

const eventData = [
  {
    month: 2,
    day: 26,
    year: "1914",
    description: "HMHS Britannic, sister to the RMS Titanic, is launched at Harland and Wolff shipyard in Belfast.",
    wikipedia: [
      {
        title: "HMHS Britannic",
        wikipedia: "https://wikipedia.org/wiki/HMHS_Britannic"
      },
      {
        title: "RMS Titanic",
        wikipedia: "https://wikipedia.org/wiki/RMS_Titanic"
      },
      {
        title: "Harland and Wolff",
        wikipedia: "https://wikipedia.org/wiki/Harland_and_Wolff"
      },
      {
        title: "Belfast",
        wikipedia: "https://wikipedia.org/wiki/Belfast"
      }
    ]
  },
  {
    month: 2,
    day: 29,
    year: "1964",
    description: "In Sydney, Australian swimmer Dawn Fraser sets a new world record in the 100-meter freestyle swimming competition (58.9 seconds).",
    wikipedia: [
      {
        title: "Dawn Fraser",
        wikipedia: "https://wikipedia.org/wiki/Dawn_Fraser"
      }
    ]
  },
    {
      month: 3,
      day: 27,
      year: "1309",
      description: "Pope Clement V imposes excommunication and interdiction on Venice, and a general prohibition of all commercial intercourse with Venice, which had seized on Ferrara, a papal fiefdom.",
      wikipedia: [
        {
          title: "Pope Clement V",
          wikipedia: "https://wikipedia.org/wiki/Pope_Clement_V"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1329",
      description: "Pope John XXII issues his In Agro Dominico condemning some writings of Meister Eckhart as heretical.",
      wikipedia: [
        {
          title: "Pope John XXII",
          wikipedia: "https://wikipedia.org/wiki/Pope_John_XXII"
        },
        {
          title: "Meister Eckhart",
          wikipedia: "https://wikipedia.org/wiki/Meister_Eckhart"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1513",
      description: "Spanish explorer Juan Ponce de León reaches the northern end of The Bahamas on his first voyage to Florida.",
      wikipedia: [
        {
          title: "Juan Ponce de León",
          wikipedia: "https://wikipedia.org/wiki/Juan_Ponce_de_Le%C3%B3n"
        },
        {
          title: "The Bahamas",
          wikipedia: "https://wikipedia.org/wiki/The_Bahamas"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1625",
      description: "Charles I becomes King of England, Scotland and Ireland as well as claiming the title King of France.",
      wikipedia: [
        {
          title: "Charles I of England",
          wikipedia: "https://wikipedia.org/wiki/Charles_I_of_England"
        },
        {
          title: "English claims to the French throne",
          wikipedia: "https://wikipedia.org/wiki/English_claims_to_the_French_throne"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1782",
      description: "Charles Watson-Wentworth, 2nd Marquess of Rockingham becomes Prime Minister of the United Kingdom.",
      wikipedia: [
        {
          title: "Charles Watson-Wentworth, 2nd Marquess of Rockingham",
          wikipedia: "https://wikipedia.org/wiki/Charles_Watson-Wentworth,_2nd_Marquess_of_Rockingham"
        },
        {
          title: "Prime Minister of the United Kingdom",
          wikipedia: "https://wikipedia.org/wiki/Prime_Minister_of_the_United_Kingdom"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1794",
      description: "The United States Government establishes a permanent navy and authorizes the building of six frigates.",
      wikipedia: [
        {
          title: "Federal government of the United States",
          wikipedia: "https://wikipedia.org/wiki/Federal_government_of_the_United_States"
        },
        {
          title: "United States Navy",
          wikipedia: "https://wikipedia.org/wiki/United_States_Navy"
        },
        {
          title: "Original six frigates of the United States Navy",
          wikipedia: "https://wikipedia.org/wiki/Original_six_frigates_of_the_United_States_Navy"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1794",
      description: "Denmark and Sweden form a neutrality compact.",
      wikipedia: [
        {
          title: "Country neutrality (international relations)",
          wikipedia: "https://wikipedia.org/wiki/Country_neutrality_(international_relations)"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1809",
      description: "Peninsular War: A combined Franco-Polish force defeats the Spanish in the Battle of Ciudad Real.",
      wikipedia: [
        {
          title: "Peninsular War",
          wikipedia: "https://wikipedia.org/wiki/Peninsular_War"
        },
        {
          title: "First French Empire",
          wikipedia: "https://wikipedia.org/wiki/First_French_Empire"
        },
        {
          title: "Duchy of Warsaw",
          wikipedia: "https://wikipedia.org/wiki/Duchy_of_Warsaw"
        },
        {
          title: "Battle of Ciudad Real",
          wikipedia: "https://wikipedia.org/wiki/Battle_of_Ciudad_Real"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1814",
      description: "War of 1812: In central Alabama, U.S. forces under General Andrew Jackson defeat the Creek at the Battle of Horseshoe Bend.",
      wikipedia: [
        {
          title: "War of 1812",
          wikipedia: "https://wikipedia.org/wiki/War_of_1812"
        },
        {
          title: "Alabama",
          wikipedia: "https://wikipedia.org/wiki/Alabama"
        },
        {
          title: "Andrew Jackson",
          wikipedia: "https://wikipedia.org/wiki/Andrew_Jackson"
        },
        {
          title: "Creek (people)",
          wikipedia: "https://wikipedia.org/wiki/Creek_(people)"
        },
        {
          title: "Battle of Horseshoe Bend (1814)",
          wikipedia: "https://wikipedia.org/wiki/Battle_of_Horseshoe_Bend_(1814)"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1836",
      description: "Texas Revolution: On the orders of General Antonio López de Santa Anna, the Mexican army massacres 342 Texas POWs at Goliad, Texas.",
      wikipedia: [
        {
          title: "Texas Revolution",
          wikipedia: "https://wikipedia.org/wiki/Texas_Revolution"
        },
        {
          title: "Antonio López de Santa Anna",
          wikipedia: "https://wikipedia.org/wiki/Antonio_L%C3%B3pez_de_Santa_Anna"
        },
        {
          title: "Goliad massacre",
          wikipedia: "https://wikipedia.org/wiki/Goliad_massacre"
        },
        {
          title: "Goliad, Texas",
          wikipedia: "https://wikipedia.org/wiki/Goliad,_Texas"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1866",
      description: "President Andrew Johnson vetoes the Civil Rights Act of 1866. His veto is overridden by Congress and the bill passes into law on April 9.",
      wikipedia: [
        {
          title: "Andrew Johnson",
          wikipedia: "https://wikipedia.org/wiki/Andrew_Johnson"
        },
        {
          title: "Civil Rights Act of 1866",
          wikipedia: "https://wikipedia.org/wiki/Civil_Rights_Act_of_1866"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1871",
      description: "The first international rugby football match, when Scotland defeats England in Edinburgh at Raeburn Place.",
      wikipedia: [
        {
          title: "1871 England versus Scotland rugby union match",
          wikipedia: "https://wikipedia.org/wiki/1871_England_versus_Scotland_rugby_union_match"
        },
        {
          title: "Rugby football",
          wikipedia: "https://wikipedia.org/wiki/Rugby_football"
        },
        {
          title: "Scotland national rugby union team",
          wikipedia: "https://wikipedia.org/wiki/Scotland_national_rugby_union_team"
        },
        {
          title: "England national rugby union team",
          wikipedia: "https://wikipedia.org/wiki/England_national_rugby_union_team"
        },
        {
          title: "Edinburgh",
          wikipedia: "https://wikipedia.org/wiki/Edinburgh"
        },
        {
          title: "Raeburn Place",
          wikipedia: "https://wikipedia.org/wiki/Raeburn_Place"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1884",
      description: "A mob in Cincinnati, Ohio, attacks members of a jury which had returned a verdict of manslaughter in what was seen as a clear case of murder; over the next few months the mob would riot and eventually destroy the courthouse.",
      wikipedia: [
        {
          title: "Cincinnati, Ohio",
          wikipedia: "https://wikipedia.org/wiki/Cincinnati,_Ohio"
        },
        {
          title: "Manslaughter",
          wikipedia: "https://wikipedia.org/wiki/Manslaughter"
        },
        {
          title: "Murder",
          wikipedia: "https://wikipedia.org/wiki/Murder"
        },
        {
          title: "Cincinnati riots of 1884",
          wikipedia: "https://wikipedia.org/wiki/Cincinnati_riots_of_1884"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1886",
      description: "Geronimo, Apache warrior, surrenders to the U.S. Army, ending the main phase of the Apache Wars.",
      wikipedia: [
        {
          title: "Geronimo",
          wikipedia: "https://wikipedia.org/wiki/Geronimo"
        },
        {
          title: "Apache",
          wikipedia: "https://wikipedia.org/wiki/Apache"
        },
        {
          title: "Apache Wars",
          wikipedia: "https://wikipedia.org/wiki/Apache_Wars"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1899",
      description: "Emilio Aguinaldo leads Filipino forces for the only time during the Philippine-American War at the Battle of Marilao River.",
      wikipedia: [
        {
          title: "Emilio Aguinaldo",
          wikipedia: "https://wikipedia.org/wiki/Emilio_Aguinaldo"
        },
        {
          title: "Philippine Revolutionary Army",
          wikipedia: "https://wikipedia.org/wiki/Philippine_Revolutionary_Army"
        },
        {
          title: "Philippine-American War",
          wikipedia: "https://wikipedia.org/wiki/Philippine%E2%80%93American_War"
        },
        {
          title: "Battle of Marilao River",
          wikipedia: "https://wikipedia.org/wiki/Battle_of_Marilao_River"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1915",
      description: "Typhoid Mary, the first healthy carrier of disease ever identified in the United States, is put in quarantine, where she would remain for the rest of her life.",
      wikipedia: [
        {
          title: "Typhoid Mary",
          wikipedia: "https://wikipedia.org/wiki/Typhoid_Mary"
        },
        {
          title: "Asymptomatic carrier",
          wikipedia: "https://wikipedia.org/wiki/Asymptomatic_carrier"
        },
        {
          title: "Quarantine",
          wikipedia: "https://wikipedia.org/wiki/Quarantine"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1938",
      description: "Second Sino-Japanese War: The Battle of Taierzhuang begins, resulting several weeks later in the war's first major Chinese victory over Japan.",
      wikipedia: [
        {
          title: "Second Sino-Japanese War",
          wikipedia: "https://wikipedia.org/wiki/Second_Sino-Japanese_War"
        },
        {
          title: "Battle of Taierzhuang",
          wikipedia: "https://wikipedia.org/wiki/Battle_of_Taierzhuang"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1941",
      description: "World War II: Yugoslavian Air Force officers topple the pro-Axis government in a bloodless coup.",
      wikipedia: [
        {
          title: "World War II",
          wikipedia: "https://wikipedia.org/wiki/World_War_II"
        },
        {
          title: "Yugoslavia",
          wikipedia: "https://wikipedia.org/wiki/Yugoslavia"
        },
        {
          title: "Axis powers",
          wikipedia: "https://wikipedia.org/wiki/Axis_powers"
        },
        {
          title: "Yugoslav coup d'état",
          wikipedia: "https://wikipedia.org/wiki/Yugoslav_coup_d%27%C3%A9tat"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1943",
      description: "World War II: Battle of the Komandorski Islands: In the Aleutian Islands the battle begins when United States Navy forces intercept Japanese attempting to reinforce a garrison at Kiska.",
      wikipedia: [
        {
          title: "Battle of the Komandorski Islands",
          wikipedia: "https://wikipedia.org/wiki/Battle_of_the_Komandorski_Islands"
        },
        {
          title: "Aleutian Islands",
          wikipedia: "https://wikipedia.org/wiki/Aleutian_Islands"
        },
        {
          title: "Garrison",
          wikipedia: "https://wikipedia.org/wiki/Garrison"
        },
        {
          title: "Kiska",
          wikipedia: "https://wikipedia.org/wiki/Kiska"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1945",
      description: "World War II: Operation Starvation, the aerial mining of Japan's ports and waterways begins. Argentina declares war on the Axis Powers.",
      wikipedia: [
        {
          title: "Operation Starvation",
          wikipedia: "https://wikipedia.org/wiki/Operation_Starvation"
        },
        {
          title: "Argentina during World War II",
          wikipedia: "https://wikipedia.org/wiki/Argentina_during_World_War_II"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1958",
      description: "Nikita Khrushchev becomes Chairman of the Council of Ministers of the Soviet Union",
      wikipedia: [
        {
          title: "Nikita Khrushchev",
          wikipedia: "https://wikipedia.org/wiki/Nikita_Khrushchev"
        },
        {
          title: "Chairman",
          wikipedia: "https://wikipedia.org/wiki/Chairman"
        },
        {
          title: "Council of Ministers of the Soviet Union",
          wikipedia: "https://wikipedia.org/wiki/Council_of_Ministers_of_the_Soviet_Union"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1964",
      description: "The Good Frimonth earthquake, the most powerful earthquake recorded in North American history at a magnitude of 9.2 strikes Southcentral Alaska, killing 125 people and inflicting massive damage to the city of Anchorage.",
      wikipedia: [
        {
          title: "1964 Alaska earthquake",
          wikipedia: "https://wikipedia.org/wiki/1964_Alaska_earthquake"
        },
        {
          title: "North America",
          wikipedia: "https://wikipedia.org/wiki/North_America"
        },
        {
          title: "Moment magnitude scale",
          wikipedia: "https://wikipedia.org/wiki/Moment_magnitude_scale"
        },
        {
          title: "Southcentral Alaska",
          wikipedia: "https://wikipedia.org/wiki/Southcentral_Alaska"
        },
        {
          title: "Anchorage, Alaska",
          wikipedia: "https://wikipedia.org/wiki/Anchorage,_Alaska"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1975",
      description: "Construction of the Trans-Alaska Pipeline System begins.",
      wikipedia: [
        {
          title: "Trans-Alaska Pipeline System",
          wikipedia: "https://wikipedia.org/wiki/Trans-Alaska_Pipeline_System"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1977",
      description: "Tenerife airport disaster: Two Boeing 747 airliners collide on a foggy runway on Tenerife in the Canary Islands, killing 583 (all 248 on KLM and 335 on Pan Am). Sixty-one survived on the Pan Am flight. This is the worst aviation accident in history.",
      wikipedia: [
        {
          title: "Tenerife airport disaster",
          wikipedia: "https://wikipedia.org/wiki/Tenerife_airport_disaster"
        },
        {
          title: "Boeing 747",
          wikipedia: "https://wikipedia.org/wiki/Boeing_747"
        },
        {
          title: "Airliner",
          wikipedia: "https://wikipedia.org/wiki/Airliner"
        },
        {
          title: "Tenerife",
          wikipedia: "https://wikipedia.org/wiki/Tenerife"
        },
        {
          title: "Canary Islands",
          wikipedia: "https://wikipedia.org/wiki/Canary_Islands"
        },
        {
          title: "KLM",
          wikipedia: "https://wikipedia.org/wiki/KLM"
        },
        {
          title: "Pan Am",
          wikipedia: "https://wikipedia.org/wiki/Pan_Am"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1980",
      description: "The Norwegian oil platform Alexander L. Kielland collapses in the North Sea, killing 123 of its crew of 212.",
      wikipedia: [
        {
          title: "Alexander L. Kielland (platform)",
          wikipedia: "https://wikipedia.org/wiki/Alexander_L._Kielland_(platform)"
        },
        {
          title: "North Sea",
          wikipedia: "https://wikipedia.org/wiki/North_Sea"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1980",
      description: "Silver Thursmonth: A steep fall in silver prices, resulting from the Hunt Brothers attempting to corner the market in silver, leads to panic on commodity and futures exchanges.",
      wikipedia: [
        {
          title: "Silver Thursmonth",
          wikipedia: "https://wikipedia.org/wiki/Silver_Thursmonth"
        },
        {
          title: "Silver",
          wikipedia: "https://wikipedia.org/wiki/Silver"
        },
        {
          title: "Nelson Bunker Hunt",
          wikipedia: "https://wikipedia.org/wiki/Nelson_Bunker_Hunt"
        },
        {
          title: "Corner the market",
          wikipedia: "https://wikipedia.org/wiki/Corner_the_market"
        },
        {
          title: "Futures exchange",
          wikipedia: "https://wikipedia.org/wiki/Futures_exchange"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1981",
      description: "The Solidarity movement in Poland stages a warning strike, in which at least 12 million Poles walk off their jobs for four hours.",
      wikipedia: [
        {
          title: "Solidarity (Polish trade union)",
          wikipedia: "https://wikipedia.org/wiki/Solidarity_(Polish_trade_union)"
        },
        {
          title: "1981 warning strike in Poland",
          wikipedia: "https://wikipedia.org/wiki/1981_warning_strike_in_Poland"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1986",
      description: "A car bomb explodes outside Russell Street Police HQ in Melbourne, Australia, killing one police officer and injuring 21 people.",
      wikipedia: [
        {
          title: "Car bomb",
          wikipedia: "https://wikipedia.org/wiki/Car_bomb"
        },
        {
          title: "Russell Street bombing",
          wikipedia: "https://wikipedia.org/wiki/Russell_Street_bombing"
        },
        {
          title: "Melbourne",
          wikipedia: "https://wikipedia.org/wiki/Melbourne"
        },
        {
          title: "Australia",
          wikipedia: "https://wikipedia.org/wiki/Australia"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1990",
      description: "The United States begins broadcasting TV Martí, an anti-Castro propaganda network, to Cuba.",
      wikipedia: [
        {
          title: "TV Martí",
          wikipedia: "https://wikipedia.org/wiki/TV_Mart%C3%AD"
        },
        {
          title: "Fidel Castro",
          wikipedia: "https://wikipedia.org/wiki/Fidel_Castro"
        },
        {
          title: "Cuba",
          wikipedia: "https://wikipedia.org/wiki/Cuba"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1993",
      description: "Jiang Zemin is appointed President of the People's Republic of China.",
      wikipedia: [
        {
          title: "Jiang Zemin",
          wikipedia: "https://wikipedia.org/wiki/Jiang_Zemin"
        },
        {
          title: "President of the People's Republic of China",
          wikipedia: "https://wikipedia.org/wiki/President_of_the_People%27s_Republic_of_China"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1993",
      description: "Italian former minister and Christian Democracy leader Giulio Andreotti is accused of mafia allegiance by the tribunal of Palermo.",
      wikipedia: [
        {
          title: "Christian Democracy (Italy)",
          wikipedia: "https://wikipedia.org/wiki/Christian_Democracy_(Italy)"
        },
        {
          title: "Giulio Andreotti",
          wikipedia: "https://wikipedia.org/wiki/Giulio_Andreotti"
        },
        {
          title: "Sicilian Mafia",
          wikipedia: "https://wikipedia.org/wiki/Sicilian_Mafia"
        },
        {
          title: "Palermo",
          wikipedia: "https://wikipedia.org/wiki/Palermo"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1998",
      description: "The Food and Drug Administration approves Viagra for use as a treatment for male impotence, the first pill to be approved for this condition in the United States.",
      wikipedia: [
        {
          title: "Food and Drug Administration",
          wikipedia: "https://wikipedia.org/wiki/Food_and_Drug_Administration"
        },
        {
          title: "Viagra",
          wikipedia: "https://wikipedia.org/wiki/Viagra"
        },
        {
          title: "Impotence",
          wikipedia: "https://wikipedia.org/wiki/Impotence"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "1999",
      description: "Kosovo War: An American Lockheed F-117A Nighthawk is shot down by a Yugoslav SAM, the first and only Nighthawk to be lost in combat.",
      wikipedia: [
        {
          title: "Kosovo War",
          wikipedia: "https://wikipedia.org/wiki/Kosovo_War"
        },
        {
          title: "Lockheed F-117A Nighthawk",
          wikipedia: "https://wikipedia.org/wiki/Lockheed_F-117A_Nighthawk"
        },
        {
          title: "1999 F-117A shootdown",
          wikipedia: "https://wikipedia.org/wiki/1999_F-117A_shootdown"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2000",
      description: "A Phillips Petroleum plant explosion in Pasadena, Texas kills one person and injures 71 others.",
      wikipedia: [
        {
          title: "Phillips explosion of 2000",
          wikipedia: "https://wikipedia.org/wiki/Phillips_explosion_of_2000"
        },
        {
          title: "Pasadena, Texas",
          wikipedia: "https://wikipedia.org/wiki/Pasadena,_Texas"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2002",
      description: "Passover massacre: A Palestinian suicide bomber kills 29 people at a Passover seder in Netanya, Israel.",
      wikipedia: [
        {
          title: "Passover massacre",
          wikipedia: "https://wikipedia.org/wiki/Passover_massacre"
        },
        {
          title: "Palestinians",
          wikipedia: "https://wikipedia.org/wiki/Palestinians"
        },
        {
          title: "Suicide bomber",
          wikipedia: "https://wikipedia.org/wiki/Suicide_bomber"
        },
        {
          title: "Passover seder",
          wikipedia: "https://wikipedia.org/wiki/Passover_seder"
        },
        {
          title: "Netanya",
          wikipedia: "https://wikipedia.org/wiki/Netanya"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2002",
      description: "Nanterre massacre: In Nanterre, France, a gunman opens fire at the end of a town council meeting, resulting in the deaths of eight councilors; 19 other people are injured.",
      wikipedia: [
        {
          title: "Nanterre massacre",
          wikipedia: "https://wikipedia.org/wiki/Nanterre_massacre"
        },
        {
          title: "Nanterre",
          wikipedia: "https://wikipedia.org/wiki/Nanterre"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2004",
      description: "HMS Scylla, a decommissioned Leander-class frigate, is sunk as an artificial reef off Cornwall, the first of its kind in Europe.",
      wikipedia: [
        {
          title: "HMS Scylla (F71)",
          wikipedia: "https://wikipedia.org/wiki/HMS_Scylla_(F71)"
        },
        {
          title: "Leander-class frigate",
          wikipedia: "https://wikipedia.org/wiki/Leander-class_frigate"
        },
        {
          title: "Cornwall",
          wikipedia: "https://wikipedia.org/wiki/Cornwall"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2009",
      description: "The dam forming Situ Gintung, an artificial lake in Indonesia, fails, killing at least 99 people.",
      wikipedia: [
        {
          title: "Situ Gintung",
          wikipedia: "https://wikipedia.org/wiki/Situ_Gintung"
        },
        {
          title: "Indonesia",
          wikipedia: "https://wikipedia.org/wiki/Indonesia"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2014",
      description: "Philippines signs a peace accord with the largest Muslim rebel group, the Moro Islamic Liberation Front, ending decades of conflict.",
      wikipedia: [
        {
          title: "Government of the Philippines",
          wikipedia: "https://wikipedia.org/wiki/Government_of_the_Philippines"
        },
        {
          title: "Comprehensive Agreement on the Bangsamoro",
          wikipedia: "https://wikipedia.org/wiki/Comprehensive_Agreement_on_the_Bangsamoro"
        },
        {
          title: "Moro Islamic Liberation Front",
          wikipedia: "https://wikipedia.org/wiki/Moro_Islamic_Liberation_Front"
        },
        {
          title: "Moro insurgency in the Philippines",
          wikipedia: "https://wikipedia.org/wiki/Moro_insurgency_in_the_Philippines"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2015",
      description: "Al-Shabab militants attack and temporarily occupy a Mogadishu hotel leaving at least 20 people dead.",
      wikipedia: [
        {
          title: "Al-Shabaab (militant group)",
          wikipedia: "https://wikipedia.org/wiki/Al-Shabaab_(militant_group)"
        },
        {
          title: "Makka al-Mukarama hotel attack",
          wikipedia: "https://wikipedia.org/wiki/Makka_al-Mukarama_hotel_attack"
        },
        {
          title: "Mogadishu",
          wikipedia: "https://wikipedia.org/wiki/Mogadishu"
        }
      ]
    },
    {
      month: 3,
      day: 27,
      year: "2016",
      description: "A suicide blast in Gulshan-e-Iqbal Park, Lahore claims over 70 lives and leaves almost 300 others injured. The target of the bombing are Christians celebrating Easter.",
      wikipedia: [
        {
          title: "2016 Lahore suicide bombing",
          wikipedia: "https://wikipedia.org/wiki/2016_Lahore_suicide_bombing"
        },
        {
          title: "Gulshan-e-Iqbal Park",
          wikipedia: "https://wikipedia.org/wiki/Gulshan-e-Iqbal_Park"
        },
        {
          title: "Lahore",
          wikipedia: "https://wikipedia.org/wiki/Lahore"
        },
        {
          title: "Christianity in Pakistan",
          wikipedia: "https://wikipedia.org/wiki/Christianity_in_Pakistan"
        },
        {
          title: "Easter",
          wikipedia: "https://wikipedia.org/wiki/Easter"
        }
      ]
    },
    {
      month: 6,
      day: 11,
      // the year in this case is supposed to be 1184 bc
      year: "1184",
      description: "Trojan War: Troy is sacked and burned, according to calculations by Eratosthenes.",
      wikipedia: [
        {
          title: "Trojan War",
          wikipedia: "https://wikipedia.org/wiki/Trojan_War"
        },
        {
          title: "Troy",
          wikipedia: "https://wikipedia.org/wiki/Troy"
        },
        {
          title: "Eratosthenes",
          wikipedia: "https://wikipedia.org/wiki/Eratosthenes"
        }
      ]
    },
    {
      month: 6,
      day: 11,
      year: "1776",
      description: "The Continental Congress appoints Thomas Jefferson, John Adams, Benjamin Franklin, Roger Sherman, and Robert R. Livingston to the Committee of Five to draft a declaration of independence.",
      wikipedia: [
        {
          title: "Continental Congress",
          wikipedia: "https://wikipedia.org/wiki/Continental_Congress"
        },
        {
          title: "Thomas Jefferson",
          wikipedia: "https://wikipedia.org/wiki/Thomas_Jefferson"
        },
        {
          title: "John Adams",
          wikipedia: "https://wikipedia.org/wiki/John_Adams"
        },
        {
          title: "Benjamin Franklin",
          wikipedia: "https://wikipedia.org/wiki/Benjamin_Franklin"
        },
        {
          title: "Roger Sherman",
          wikipedia: "https://wikipedia.org/wiki/Roger_Sherman"
        },
        {
          title: "Robert R. Livingston (chancellor)",
          wikipedia: "https://wikipedia.org/wiki/Robert_R._Livingston_(chancellor)"
        },
        {
          title: "Committee of Five",
          wikipedia: "https://wikipedia.org/wiki/Committee_of_Five"
        },
        {
          title: "United States Declaration of Independence",
          wikipedia: "https://wikipedia.org/wiki/United_States_Declaration_of_Independence"
        }
      ]
    },
    {
      month: 6,
      day: 11,
      year: "1895",
      description: 'Paris-Bordeaux-Paris, sometimes called the first automobile race in history or the "first motor race", takes place.',
      wikipedia: [
        {
          title: "Paris-Bordeaux-Paris",
          wikipedia: "https://wikipedia.org/wiki/Paris%E2%80%93Bordeaux%E2%80%93Paris"
        }
      ]
    },
  ];

  const seedEvents = () => Event.bulkCreate(eventData);

  module.exports = seedEvents;

/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;

  const CUES = [[0.21, 6.93, "In nineteen seventy-nine, two brothers from Texas walked into Wall Street with an idea so crazy that nobody believed they were serious."], [6.93, 11.98, "They decided that paper money was completely worthless, that the government was heading for bankruptcy,"], [11.98, 18.62, "and that the only safe place to put their wealth was inside cold, hard metal."], [18.62, 20.05, "But they did not just buy a little bit."], [20.05, 28.76, "Over twelve months, these two brothers secretly bought one-third of all the privately held silver on planet Earth."], [28.76, 30.89, "They pushed the price of silver up by more than seven hundred percent."], [30.89, 36.43, "They caused people to tear down antique candelabras and melt family heirlooms on street corners."], [36.43, 40.49, "And then, just when they thought they owned the world,"], [40.49, 42.83, "the men who ran the financial system did something the brothers never saw coming."], [42.83, 46.09, "They simply changed the rules."], [46.09, 50.57, "To understand how anyone could attempt something this absurd, you first have to meet their father."], [50.57, 56.21, "His name was Haroldson Lafayette Hunt, better known across Texas simply as H.L. Hunt."], [56.21, 59.13, "In the nineteen thirties, H.L."], [59.13, 61.39, "was quite literally the richest private citizen in the world."], [61.39, 66.77, "He started out as a professional poker player wandering through dusty gambling dens in Arkansas and Louisiana."], [66.77, 72.18, "One afternoon, he won a tiny slice of an oil lease in a card game."], [72.18, 80.74, "He took that lease, traded it for another, and eventually bought the legendary East Texas Oil Field from a broke wildcatter for pennies on the dollar. H.L."], [80.74, 82.41, "Hunt was brilliant, completely eccentric, and deeply paranoid."], [82.41, 86.12, "He carried his lunch in a brown paper bag, drove an old beat-up car,"], [86.12, 93.86, "and firmly believed that paper money was a government scam designed to steal wealth from hardworking families."], [93.86, 96.95, "When he died in nineteen seventy-four, he left behind billions of dollars and a large family."], [96.95, 102.71, "Standing right at the head of the table was his eldest son,"], [102.71, 106.73, "Nelson Bunker Hunt, alongside his younger brother, William Herbert Hunt."], [106.73, 116.72, "Bunker Hunt was a massive, quiet man who wore rumpled off-the-rack suits and looked more like a sleepy cattle rancher than a financial titan."], [116.72, 121.04, "But underneath that calm Texas drawl was his father's absolute obsession with hard assets."], [121.04, 126.34, "Bunker inherited a personal fortune in oil fields, massive cattle ranches, and prize-winning racehorses."], [126.34, 130.35, "But in nineteen seventy-three, disaster struck."], [130.35, 131.93, "Bunker had invested heavily in a massive oil field in Libya."], [131.93, 134.79, "Out of nowhere, Colonel Muammar Gaddafi led a military coup,"], [134.79, 139.22, "seized power, and nationalized Bunker's entire oil operation without paying him a single dime."], [139.22, 142.52, "The Libyan seizure shook Bunker Hunt to his core."], [142.52, 147.29, "He realized that a government could wipe out decades of work with the stroke of a pen."], [147.29, 152.77, "At the exact same time, back home in America, inflation was spiraling out of control."], [152.77, 157.52, "President Richard Nixon had just severed the final link between the dollar and gold."], [157.52, 164.34, "Prices for bread, milk, and gasoline were soaring, and paper money seemed to be melting away like ice under the Texas sun."], [164.34, 170.93, "Bunker turned to his brother Herbert and told him that if they kept their wealth in American dollars,"], [170.93, 173.04, "they were going to end up broke."], [173.04, 174.18, "They needed something real."], [174.18, 177.27, "Naturally, the first thing the Hunt brothers wanted to buy was gold."], [177.27, 181.27, "Gold had been the ultimate store of value for thousands of years."], [181.27, 184.3, "But there was a gigantic legal roadblock."], [184.3, 189.07, "Ever since President Franklin Roosevelt signed an executive order during the Great Depression,"], [189.07, 193.36, "it was strictly illegal for private American citizens to own gold bullion."], [193.36, 198.15, "The government would throw you in federal prison if you hoarded gold bars in your basement."], [198.15, 201.72, "So Bunker and Herbert began looking for an alternative."], [201.72, 206.08, "And sitting right in plain sight was gold's forgotten little brother: silver."], [206.08, 210.68, "Silver was completely legal for any American citizen to buy and hold."], [210.68, 211.86, "Even better, it was shockingly cheap."], [211.86, 219.21, "Throughout the early nineteen seventies, silver traded for around one dollar and fifty cents an ounce."], [219.21, 222.66, "But Bunker Hunt was not just looking at the price tag."], [222.66, 225.34, "He started studying the global supply chain, and what he discovered blew his mind."], [225.34, 232.44, "Back then, the world was consuming far more silver every single year than all the silver mines on Earth were digging up."], [232.44, 241.79, "The photographic giant Eastman Kodak was using millions of ounces of silver every year to manufacture camera film."], [241.79, 242.96, "Electronics manufacturers needed silver for electrical switches."], [242.96, 246.16, "Medical companies needed silver for X-ray sheets."], [246.16, 253.05, "The gap between supply and demand was being filled by governments dumping their old silver coins and stockpiles into the market."], [253.05, 256.36, "But those government reserves were running dry."], [256.36, 259.46, "Bunker Hunt ran the numbers and came to an astonishing conclusion."], [259.46, 263.47, "If someone with enough cash stepped into the market and bought up the remaining supply,"], [263.47, 267.61, "the entire global industrial machine would have to come begging to them for metal."], [267.61, 273.52, "In nineteen seventy-three, the Hunt brothers made their first move."], [273.52, 278.54, "They quietly purchased twenty million ounces of physical silver at roughly three dollars an ounce."], [278.54, 281.18, "But the brothers knew their own fortune, as vast as it was,"], [281.18, 284.52, "could only push the market so far."], [284.52, 286.75, "They needed allies with deep pockets and the exact same hatred for paper currency."], [286.75, 291.49, "So Bunker Hunt boarded an airplane and flew straight to the Middle East."], [291.49, 298.34, "He met with members of the Saudi royal family, including Prince Mohammed bin Fahd."], [298.34, 300.58, "Bunker laid out his theory."], [300.58, 302.93, "He told the Saudis that Western paper currencies were doomed to collapse from runaway inflation,"], [302.93, 308.62, "and that together, they could pool their petrodollars and build an unbeatable position in real silver."], [308.62, 312.83, "The Saudis loved the idea."], [312.83, 315.22, "Together, they formed a secret offshore partnership called the International Metals Investment Company."], [315.22, 320.84, "The trap was set, and the squeeze was about to begin."], [320.84, 324.38, "To understand how the Hunt brothers pulled off their scheme,"], [324.38, 327.44, "you have to understand how commodity futures exchanges actually work."], [327.44, 335.85, "Normally, when big hedge funds or corporations trade silver on exchanges like the Chicago Board of Trade or the New York Commodity Exchange,"], [335.85, 338.36, "nobody actually expects to see a single ounce of real metal."], [338.36, 341.71, "Instead, traders buy futures contracts."], [341.71, 348.23, "A futures contract is simply a legal agreement to buy a certain amount of silver at a specific price on a future date."], [348.23, 353.6, "But when that delivery date arrives, ninety-nine percent of traders do not want heavy silver bars dumped on their front lawn."], [353.6, 360.53, "They simply settle the contract in cash, take their paper profit or loss,"], [360.53, 362.19, "and roll over into the next month."], [362.19, 364.14, "The Hunt brothers, however, had zero interest in paper profits."], [364.14, 368.46, "They did not want paper cash."], [368.46, 368.66, "They wanted the metal."], [368.66, 372.91, "When their contracts expired, the Hunts did something that sent shockwaves through the trading pits."], [372.91, 374.84, "They demanded physical delivery."], [374.84, 378.25, "They told the exchange: do not wire us dollars, bring us our silver."], [378.25, 385.42, "Suddenly, armored trucks began backing up to exchange warehouses across New York and Chicago,"], [385.42, 390.55, "loading up thousands of heavy thirty-two-pound bars of solid silver."], [390.55, 394.2, "But Bunker Hunt was terrified the United States government might try to seize his metal,"], [394.2, 398.71, "just like Roosevelt had seized gold forty years earlier."], [398.71, 401.88, "So he decided to take the silver completely out of the country."], [401.88, 403.26, "In the dead of winter, under the cover of darkness,"], [403.26, 405.76, "Bunker Hunt chartered three Boeing seven hundred and seven cargo jets."], [405.76, 412.45, "He hired a squad of armed Texas ranch hands, dressed in cowboy boots and heavy jackets,"], [412.45, 415.13, "to guard the loading docks."], [415.13, 417.2, "Pallet after pallet of solid silver bullion was loaded onto the planes."], [417.2, 423.23, "The jets took off into the night and flew straight across the Atlantic Ocean,"], [423.23, 424.19, "touching down in Zurich and London."], [424.19, 429.08, "The silver was quietly locked away inside deep Swiss bank vaults."], [429.08, 433.15, "By nineteen seventy-nine, the Hunts and their Saudi partners were not just buying silver with cash."], [433.15, 434.9, "They were using leverage."], [434.9, 440.92, "They would take their physical silver bars, pledge them as collateral to borrow millions of dollars from Wall Street banks,"], [440.92, 446.75, "and then use that borrowed cash to buy even more futures contracts."], [446.75, 450.38, "It was an unstoppable compounding loop."], [450.38, 453.37, "By late nineteen seventy-nine, the Hunt brothers controlled an estimated two hundred million ounces of silver."], [453.37, 459.47, "That was roughly half of all the deliverable silver in the entire Western world."], [459.47, 464.31, "With hundreds of millions of ounces locked away in private vaults,"], [464.31, 467.12, "the open market suddenly experienced an extreme shortage."], [467.12, 472.61, "Industrial companies that desperately needed silver for film, electronics, and medicine could not find enough bars to buy."], [472.61, 476.84, "The price of silver went completely berserk."], [476.84, 479.61, "In January of nineteen seventy-nine, silver was trading around six dollars an ounce."], [479.61, 482.73, "By September, it hit eleven dollars."], [482.73, 484.8, "By December, it blew past twenty-five dollars."], [484.8, 490.9, "And then, in the first two weeks of January nineteen eighty, the market entered full-blown speculative hysteria."], [490.9, 500.64, "On January eighteenth, nineteen eighty, the price of silver touched an all-time record high of fifty dollars and thirty-five cents an ounce."], [500.64, 503.14, "In just one year, the price had skyrocketed by more than seven hundred percent."], [503.14, 509.36, "On paper, Bunker and Herbert Hunt were now sitting on an unrealized profit of several billion dollars."], [509.36, 512.8, "They were, for a few brief weeks, arguably the wealthiest private individuals on Earth."], [512.8, 518.68, "Across the United States, regular citizens went into a state of total mania."], [518.68, 528.83, "People suddenly realized that the dusty antique tea sets sitting in their dining rooms and the silver spoons inherited from their grandparents were worth thousands of dollars."], [528.83, 537.08, "Lines stretched around the block outside jewelry shops, pawn shops, and coin dealers in every major American city."], [537.08, 540.68, "People stood in the freezing winter cold for hours, carrying pillowcases stuffed with silverware,"], [540.68, 546.2, "communion plates, and even silver dental fillings, waiting to have them weighed and paid out in cash."], [546.2, 553.49, "Refineries worked around the clock, melting down irreplaceable nineteenth-century heirlooms into crude silver bricks."], [553.49, 560.11, "Burglars began breaking into suburban homes, ignoring televisions and stereo equipment,"], [560.11, 562.47, "and heading straight for the dining room sideboard to steal the silverware."], [562.47, 571.88, "The iconic luxury jeweler Tiffany and Company was so outraged by the skyrocketing price that their chairman took out a full-page advertisement in The New York Times."], [571.88, 579.73, "The ad publicly blasted the Hunt brothers, calling their actions unconscionable and accusing them of hoarding a vital public resource for private greed."], [579.73, 585.01, "But Bunker Hunt simply laughed off the criticism."], [585.01, 588.39, "When a reporter asked him how it felt to risk his fortune on silver,"], [588.39, 591.83, "Bunker calmly replied that a billion dollars just was not what it used to be."], [591.83, 598.98, "While the Hunt brothers were celebrating their paper billions, panic was sweeping through the executive suites of Wall Street and the commodity exchanges."], [598.98, 607.06, "The leaders of the Chicago Board of Trade and the Commodity Exchange in New York were staring into a financial abyss."], [607.06, 614.33, "Many of the exchange board members and major trading firms were on the short side of the trade,"], [614.33, 617.43, "meaning they had bet that the price of silver would go down."], [617.43, 624.62, "If the Hunts continued demanding physical delivery, there literally was not enough silver on planet Earth to satisfy the contracts."], [624.62, 631.29, "The short sellers would go bankrupt, clearinghouses would fail, and the entire commodities trading system could collapse."], [631.29, 635.38, "So the men in charge decided to do the only thing that could save them."], [635.38, 638.86, "They changed the rules of the game in the middle of the match."], [638.86, 643.08, "First, the exchanges dramatically increased the margin requirements."], [643.08, 650.36, "Previously, an investor only needed to put down a few thousand dollars in cash to control a hundred-thousand-dollar contract of silver."], [650.36, 656.67, "The exchanges suddenly demanded that traders put up tens of thousands of dollars in cash for every single contract."], [656.67, 658.75, "Then came the kill shot."], [658.75, 663.78, "The exchanges enacted a brand-new emergency regulation known as liquidation only."], [663.78, 669.02, "Under this new rule, nobody in the world was allowed to buy new silver futures contracts."], [669.02, 673.08, "You were only allowed to sell existing contracts to close them out."], [673.08, 673.28, "Think about that for a second."], [673.28, 675.52, "Imagine an auction house where buyers are banned from making any bids,"], [675.52, 679.11, "and sellers are only allowed to sell."], [679.11, 683.64, "With buyers legally kicked out of the room, there was only one direction the price could possibly go."], [683.64, 686.8, "To make matters worse, the Federal Reserve stepped in."], [686.8, 694.85, "Chairman Paul Volcker, who was aggressively battling national inflation, issued a direct warning to commercial banks across the country."], [694.85, 698.8, "He told them to immediately stop extending credit and loans for speculative commodity hoarding."], [698.8, 704.24, "Overnight, the Hunt brothers' financial pipeline was completely shut off."], [704.24, 708.69, "They could no longer borrow fresh cash against their silver,"], [708.69, 711.91, "and the market they thought they controlled was suddenly rigged against them."], [711.91, 717.53, "As soon as the new rules took effect, the price of silver began to slide backward."], [717.53, 720.16, "From fifty dollars, it dropped to forty. Then thirty. Then twenty-five."], [720.16, 724.81, "Because the Hunt brothers had built their empire on borrowed money,"], [724.81, 730.07, "every dollar drop in the price of silver triggered an avalanche of margin calls."], [730.07, 738.56, "A margin call is when a broker calls you on the telephone and demands that you deposit millions of dollars in fresh cash immediately to cover your losses."], [738.56, 744.13, "If you cannot produce the cash, the broker has the legal right to sell your assets at any price they can get."], [744.13, 748.18, "For several weeks, the Hunts scrambled."], [748.18, 751.11, "They poured in millions of dollars of their own cash,"], [751.11, 753.81, "sold off family assets, and tried to negotiate new loans."], [753.81, 755.15, "But the decline was relentless."], [755.15, 759.77, "Everything came to a catastrophic head on the morning of March twenty-seventh,"], [759.77, 764.45, "nineteen eighty, a day that financial history will forever remember as Silver Thursday."], [764.45, 777.04, "That morning, the major brokerage firm Bache Halsey Stuart Shields picked up the telephone and issued a massive margin call to the Hunt brothers for one hundred million dollars."], [777.04, 777.24, "The Hunts simply did not have the cash."], [777.24, 783.95, "Bunker Hunt was overseas in Europe trying to arrange emergency financing, but the clock ran out."], [783.95, 785.54, "Bache immediately began liquidating the Hunts' silver positions on the open floor,"], [785.54, 789.97, "dumping millions of ounces onto a market that had zero buyers."], [789.97, 793.41, "The trading pits erupted in absolute pandemonium."], [793.41, 799.25, "The price of silver went into freefall, plunging from twenty-one dollars down to ten dollars and eighty cents in a matter of hours."], [799.25, 810.44, "Rumors spread like wildfire across Wall Street that major brokerage firms were failing and that the Hunt brothers were insolvent."], [810.44, 812.86, "The Dow Jones Industrial Average plunged, and trading in several banking stocks was temporarily halted."], [812.86, 824.58, "Terrified of a systemic banking collapse, Federal Reserve officials and a syndicate of thirteen major commercial banks rushed into emergency meetings."], [824.58, 833.83, "Over the coming weeks, they put together a one-point-one-billion-dollar emergency credit package to bail out the brokerage firms and prevent a domino collapse of the financial system."], [833.83, 835.23, "But in exchange, the banks took total control of the Hunts."], [835.23, 837.82, "The brothers were forced to pledge their vast oil properties,"], [837.82, 842.86, "real estate, ranches, racehorses, and family holdings as collateral."], [842.86, 844.96, "The silver empire had turned into a financial prison."], [844.96, 848.55, "The fallout from the silver squeeze dragged on for nearly a decade."], [848.55, 860.33, "In nineteen eighty-eight, a federal jury found Nelson Bunker Hunt and William Herbert Hunt guilty of civil conspiracy to corner the silver market."], [860.33, 868.63, "The jury ordered the brothers to pay over one hundred and thirty million dollars in damages to a Peruvian state-owned mineral company that had been caught in the crossfire."], [868.63, 873.95, "Faced with astronomical legal bills, bank debts, and penalties from the Internal Revenue Service,"], [873.95, 878.62, "both Bunker and Herbert Hunt were forced to file for Chapter eleven personal bankruptcy."], [878.62, 886.34, "At their bankruptcy hearings, Bunker Hunt sat quietly in a crowded courtroom while auctioneers sold off his prize racehorses,"], [886.34, 889.86, "his father's oil leases, and even his personal coin collections to satisfy creditors."], [889.86, 896.13, "His personal fortune, once estimated to be well over five billion dollars, had almost completely vanished."], [896.13, 905.61, "Decades later, the Hunt brothers' silver gamble stands as one of the most audacious attempts in history to corner a global commodity."], [905.61, 906.62, "They were right about inflation."], [906.62, 909.81, "They were right that industrial demand was outstripping mine supply."], [909.81, 914.22, "And they were right that paper currency loses purchasing power over time."], [914.22, 920.42, "But they forgot the most important rule of high-stakes finance: when the little guy breaks the rules,"], [920.42, 922.45, "he goes to jail."], [922.45, 925.61, "But when the big guy breaks the house, the house simply rewrites the rules."]];

  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));

  // Helper characters
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);

  /* 1 ─ 0.21–6.93  Hook: 1979 Wall Street entrance */
  S(0.21, 6.93, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.city(ctx, FL, PAL.slate, { xs: [120, 360, 1500, 1720] });
    P.bank(ctx, 1280, FL, { s: 1.1, label: 'WALL ST' });
    bunker(ctx, s, { x: 620, y: FL, expr: 'smug' }, [
      { at: 0, slideIn: 'left', dur: 0.7 }, { at: 1.5, pose: 'point', expr: 'confident' }
    ]);
    herbert(ctx, s, { x: 420, y: FL, expr: 'happy' }, [
      { at: 0.2, slideIn: 'left', dur: 0.7 }, { at: 2.0, pose: 'thumbsUp' }
    ]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.5, { size: 80, rot: -0.03 });
  });

  /* 2 ─ 6.93–11.98  Burning dollar bill / bankruptcy */
  S(6.93, 11.98, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.3, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.2, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.8, { col: PAL.red, size: 90 });
    });
    bunker(ctx, s, { x: 450, y: FL, pose: 'shrug', expr: 'disappointed' }, [
      { at: 0.8, expr: 'shock', fx: 'sweat' }
    ]);
  });

  /* 3 ─ 11.98–18.62  Silver bullion drop */
  S(11.98, 18.62, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.2, in: 'drop', from: 400 }, c => {
      CC.rect(c, -200, -120, 400, 120, PAL.grey, 8, 12);
      CC.text(c, 'SILVER .999', 0, -60, 48, PAL.white, { font: 'PMarker' });
    });
    bunker(ctx, s, { x: 1450, y: FL, expr: 'greedy' }, [
      { at: 0.4, pose: 'point', expr: 'smug' }
    ]);
    CC.stamp(ctx, s, 'REAL ASSET', 960, 360, 0.6, { col: PAL.moneyDk, size: 85 });
  });

  /* 4 ─ 18.62–20.05  Clause: "But they did not just buy a little bit...." */
  S(18.62, 20.05, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THEY DID NOT JUST BUY", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 5 ─ 20.05–28.76  Globe + 1/3 silver */
  S(20.05, 28.76, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.charcoal });
    CC.globeSpin(ctx, s, 960, 500, { r: 240 });
    CC.callout(ctx, '1/3 OF ALL SILVER', 960, 180, s.lt, 0.4, { size: 88, rot: 0.02 });
    bunker(ctx, s, { x: 420, y: FL, expr: 'confident' }, [
      { at: 0.2, pose: 'cheer', expr: 'joy' }
    ]);
  });

  /* 6 ─ 28.76–30.89  Rocket chart +700% */
  S(28.76, 30.89, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 480, 260, 960, 480, [[0, 0.1], [0.3, 0.18], [0.6, 0.45], [0.9, 0.95]], CC.prog(CC.q(s.lt), 0.2, 1.2), { col: PAL.green, lw: 9 });
    CC.stamp(ctx, s, '+700%', 1200, 380, 0.7, { col: PAL.red, size: 110 });
    CC.actor(ctx, s, 'analyst', { x: 340, y: FL, pose: 'think', expr: 'shock' }, [
      { at: 0.5, pose: 'face', fx: 'sweat' }
    ]);
  });

  /* 7 ─ 30.89–36.43  Melting antique silver */
  S(30.89, 36.43, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'grandma', { x: 620, y: FL, expr: 'shock' }, [
      { at: 0, slideIn: 'left', dur: 0.5 }, { at: 0.8, pose: 'give', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'worker', { x: 1300, y: FL, pose: 'hold', expr: 'neutral' }, [
      { at: 0.6, pose: 'carry' }
    ]);
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.2, in: 'pop' }, c => {
      P.jar(c, 0, 0, { w: 260, h: 320, fill: 0.8, label: 'MELTING' });
    });
  });

  /* 8 ─ 36.43–40.49  Clause: "And then, just when they thought they ow..." */
  S(36.43, 40.49, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND THEN, JUST WHEN THEY ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 9 ─ 40.49–42.83  The Rule Change slam */
  S(40.49, 42.83, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 500 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 480, 0.3, { col: PAL.red, size: 85 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [
      { at: 0.3, collapse: 'left', fx: 'sweat' }
    ]);
  }, { sfx: [[0.3, 'stamp']] });

  /* 10 ─ 42.83–46.09  The Rule Change slam */
  S(42.83, 46.09, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 500 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 480, 0.3, { col: PAL.red, size: 85 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [
      { at: 0.3, collapse: 'left', fx: 'sweat' }
    ]);
  }, { sfx: [[0.3, 'stamp']] });

  /* 11 ─ 46.09–50.57  Chapter Card: The Gambler's Sons */
  S(46.09, 50.57, (ctx, s) => {
    CC.chapter(ctx, s, "The Gambler's Sons", { kicker: "CHAPTER ONE", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 12 ─ 50.57–56.21  Clause: "His name was Haroldson Lafayette Hunt, b..." */
  S(50.57, 56.21, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "HIS NAME WAS HAROLDSON LA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 13 ─ 56.21–59.13  Clause: "In the nineteen thirties, H.L...." */
  S(56.21, 59.13, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "IN THE NINETEEN THIRTIES,", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 14 ─ 59.13–61.39  Clause: "was quite literally the richest private ..." */
  S(59.13, 61.39, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "WAS QUITE LITERALLY THE R", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 15 ─ 61.39–66.77  H.L. Hunt poker game */
  S(61.39, 66.77, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.desk(ctx, 960, FL + 20, { s: 1.4 });
    hl_hunt(ctx, s, { x: 680, y: FL, pose: 'hold', expr: 'smug' }, [
      { at: 0.5, pose: 'present', expr: 'grin' }
    ]);
    CC.actor(ctx, s, 'crook', { x: 1240, y: FL, pose: 'face', expr: 'shock', look: -0.6 }, [
      { at: 0.8, pose: 'shrug', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'OIL LEASE', 960, 360, s.lt, 0.6, { size: 68 });
  });

  /* 16 ─ 66.77–72.18  H.L. Hunt poker game */
  S(66.77, 72.18, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.desk(ctx, 960, FL + 20, { s: 1.4 });
    hl_hunt(ctx, s, { x: 680, y: FL, pose: 'hold', expr: 'smug' }, [
      { at: 0.5, pose: 'present', expr: 'grin' }
    ]);
    CC.actor(ctx, s, 'crook', { x: 1240, y: FL, pose: 'face', expr: 'shock', look: -0.6 }, [
      { at: 0.8, pose: 'shrug', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'OIL LEASE', 960, 360, s.lt, 0.6, { size: 68 });
  });

  /* 17 ─ 72.18–80.74  East Texas oil gusher */
  S(72.18, 80.74, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    P.mountain(ctx, 960, FL, { w: 600, h: 400, col: PAL.charcoal });
    hl_hunt(ctx, s, { x: 480, y: FL, pose: 'pointUp', expr: 'joy' }, [
      { at: 0.4, pose: 'cheer' }
    ]);
    CC.coinJar(ctx, s, { x: 1400, y: FL, w: 240, h: 360, t0: 0.2, n: 5, fill0: 0.1, fill1: 0.95, label: 'OIL' });
    CC.word(ctx, 'BILLIONS', 960, 200, 96, PAL.moneyDk, s.lt, 0.5);
  });

  /* 18 ─ 80.74–82.41  Clause: "Hunt was brilliant, completely eccentric..." */
  S(80.74, 82.41, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "HUNT WAS BRILLIANT, COMPL", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 19 ─ 82.41–86.12  Clause: "He carried his lunch in a brown paper ba..." */
  S(82.41, 86.12, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "HE CARRIED HIS LUNCH IN A", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 20 ─ 86.12–93.86  Clause: "and firmly believed that paper money was..." */
  S(86.12, 93.86, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND FIRMLY BELIEVED THAT ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 21 ─ 93.86–96.95  Clause: "When he died in nineteen seventy-four, h..." */
  S(93.86, 96.95, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "WHEN HE DIED IN NINETEEN ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 22 ─ 96.95–102.71  Clause: "Standing right at the head of the table ..." */
  S(96.95, 102.71, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "STANDING RIGHT AT THE HEA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 23 ─ 102.71–106.73  Clause: "Nelson Bunker Hunt, alongside his younge..." */
  S(102.71, 106.73, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "NELSON BUNKER HUNT, ALONG", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 24 ─ 106.73–116.72  Clause: "Bunker Hunt was a massive, quiet man who..." */
  S(106.73, 116.72, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER HUNT WAS A MASSIVE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 25 ─ 116.72–121.04  Clause: "But underneath that calm Texas drawl was..." */
  S(116.72, 121.04, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT UNDERNEATH THAT CALM ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 26 ─ 121.04–126.34  Clause: "Bunker inherited a personal fortune in o..." */
  S(121.04, 126.34, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER INHERITED A PERSON", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 27 ─ 126.34–130.35  Clause: "But in nineteen seventy-three, disaster ..." */
  S(126.34, 130.35, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT IN NINETEEN SEVENTY-T", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 28 ─ 130.35–131.93  Libya nationalization */
  S(130.35, 131.93, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [
      { at: 0.6, collapse: 'left', fx: 'sweat' }
    ]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [
      { at: 0, slideIn: 'right', dur: 0.5 }
    ]);
    CC.stamp(ctx, s, 'SEIZED $0', 960, 380, 0.6, { col: PAL.red, size: 95 });
  });

  /* 29 ─ 131.93–134.79  Libya nationalization */
  S(131.93, 134.79, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [
      { at: 0.6, collapse: 'left', fx: 'sweat' }
    ]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [
      { at: 0, slideIn: 'right', dur: 0.5 }
    ]);
    CC.stamp(ctx, s, 'SEIZED $0', 960, 380, 0.6, { col: PAL.red, size: 95 });
  });

  /* 30 ─ 134.79–139.22  Libya nationalization */
  S(134.79, 139.22, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [
      { at: 0.6, collapse: 'left', fx: 'sweat' }
    ]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [
      { at: 0, slideIn: 'right', dur: 0.5 }
    ]);
    CC.stamp(ctx, s, 'SEIZED $0', 960, 380, 0.6, { col: PAL.red, size: 95 });
  });

  /* 31 ─ 139.22–142.52  Libya nationalization */
  S(139.22, 142.52, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [
      { at: 0.6, collapse: 'left', fx: 'sweat' }
    ]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [
      { at: 0, slideIn: 'right', dur: 0.5 }
    ]);
    CC.stamp(ctx, s, 'SEIZED $0', 960, 380, 0.6, { col: PAL.red, size: 95 });
  });

  /* 32 ─ 142.52–147.29  Clause: "He realized that a government could wipe..." */
  S(142.52, 147.29, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "HE REALIZED THAT A GOVERN", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 33 ─ 147.29–152.77  Clause: "At the exact same time, back home in Ame..." */
  S(147.29, 152.77, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "AT THE EXACT SAME TIME, B", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 34 ─ 152.77–157.52  Nixon closes gold window */
  S(152.77, 157.52, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    P.podium(ctx, 960, FL + 30, { label: '1971' });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL - 30, pose: 'present', expr: 'confident' }, [
      { at: 0.5, pose: 'point', expr: 'serious' }
    ]);
    CC.swap(ctx, s, 0.7, 1400, 500, c => P.coin(c, 0, 0, { s: 1.8, col: PAL.gold }), c => P.bill(c, 0, 0, { s: 1.5 }));
    CC.stamp(ctx, s, 'FIAT CURRENCY', 960, 220, 0.8, { col: PAL.red, size: 84 });
  });

  /* 35 ─ 157.52–164.34  Clause: "Prices for bread, milk, and gasoline wer..." */
  S(157.52, 164.34, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "PRICES FOR BREAD, MILK, A", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 36 ─ 164.34–170.93  Clause: "Bunker turned to his brother Herbert and..." */
  S(164.34, 170.93, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER TURNED TO HIS BROT", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 37 ─ 170.93–173.04  Clause: "they were going to end up broke...." */
  S(170.93, 173.04, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WERE GOING TO END UP", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 38 ─ 173.04–174.18  Clause: "They needed something real...." */
  S(173.04, 174.18, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY NEEDED SOMETHING REA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 39 ─ 174.18–177.27  Chapter Card: The Shiny Metal Loophole */
  S(174.18, 177.27, (ctx, s) => {
    CC.chapter(ctx, s, "The Shiny Metal Loophole", { kicker: "CHAPTER TWO", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 40 ─ 177.27–181.27  Clause: "Gold had been the ultimate store of valu..." */
  S(177.27, 181.27, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "GOLD HAD BEEN THE ULTIMAT", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 41 ─ 181.27–184.3  Clause: "But there was a gigantic legal roadblock..." */
  S(181.27, 184.3, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THERE WAS A GIGANTIC ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 42 ─ 184.3–189.07  Gold ownership illegal / jail */
  S(184.3, 189.07, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 520, in: 'none' }, c => P.bars(c, 0, 0, { w: 700, h: 500 }));
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, pose: 'face', expr: 'worried' }, [
      { at: 0.5, pose: 'slump', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, { size: 68 });
  });

  /* 43 ─ 189.07–193.36  Gold ownership illegal / jail */
  S(189.07, 193.36, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 520, in: 'none' }, c => P.bars(c, 0, 0, { w: 700, h: 500 }));
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, pose: 'face', expr: 'worried' }, [
      { at: 0.5, pose: 'slump', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, { size: 68 });
  });

  /* 44 ─ 193.36–198.15  Gold ownership illegal / jail */
  S(193.36, 198.15, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 520, in: 'none' }, c => P.bars(c, 0, 0, { w: 700, h: 500 }));
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, pose: 'face', expr: 'worried' }, [
      { at: 0.5, pose: 'slump', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, { size: 68 });
  });

  /* 45 ─ 198.15–201.72  Clause: "So Bunker and Herbert began looking for ..." */
  S(198.15, 201.72, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "SO BUNKER AND HERBERT BEG", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 46 ─ 201.72–206.08  Clause: "And sitting right in plain sight was gol..." */
  S(201.72, 206.08, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND SITTING RIGHT IN PLAI", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 47 ─ 206.08–210.68  Clause: "Silver was completely legal for any Amer..." */
  S(206.08, 210.68, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "SILVER WAS COMPLETELY LEG", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 48 ─ 210.68–211.86  Clause: "Even better, it was shockingly cheap...." */
  S(210.68, 211.86, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "EVEN BETTER, IT WAS SHOCK", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 49 ─ 211.86–219.21  Clause: "Throughout the early nineteen seventies,..." */
  S(211.86, 219.21, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THROUGHOUT THE EARLY NINE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 50 ─ 219.21–222.66  Clause: "But Bunker Hunt was not just looking at ..." */
  S(219.21, 222.66, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT BUNKER HUNT WAS NOT J", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 51 ─ 222.66–225.34  Clause: "He started studying the global supply ch..." */
  S(222.66, 225.34, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "HE STARTED STUDYING THE G", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 52 ─ 225.34–232.44  Clause: "Back then, the world was consuming far m..." */
  S(225.34, 232.44, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "BACK THEN, THE WORLD WAS ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 53 ─ 232.44–241.79  Industrial silver demand */
  S(232.44, 241.79, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    P.computer(ctx, 640, FL, { s: 1.4, screen: PAL.slate });
    CC.obj(ctx, s, { x: 1280, y: 520, at: 0.3, in: 'pop' }, c => {
      CC.rect(c, -160, -120, 320, 240, PAL.yellow, 6, 8);
      CC.text(c, 'KODAK FILM', 0, 0, 44, PAL.black, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'SUPPLY DEFICIT', 960, 220, 0.7, { col: PAL.red, size: 85 });
  });

  /* 54 ─ 241.79–242.96  Industrial silver demand */
  S(241.79, 242.96, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    P.computer(ctx, 640, FL, { s: 1.4, screen: PAL.slate });
    CC.obj(ctx, s, { x: 1280, y: 520, at: 0.3, in: 'pop' }, c => {
      CC.rect(c, -160, -120, 320, 240, PAL.yellow, 6, 8);
      CC.text(c, 'KODAK FILM', 0, 0, 44, PAL.black, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'SUPPLY DEFICIT', 960, 220, 0.7, { col: PAL.red, size: 85 });
  });

  /* 55 ─ 242.96–246.16  Industrial silver demand */
  S(242.96, 246.16, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    P.computer(ctx, 640, FL, { s: 1.4, screen: PAL.slate });
    CC.obj(ctx, s, { x: 1280, y: 520, at: 0.3, in: 'pop' }, c => {
      CC.rect(c, -160, -120, 320, 240, PAL.yellow, 6, 8);
      CC.text(c, 'KODAK FILM', 0, 0, 44, PAL.black, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'SUPPLY DEFICIT', 960, 220, 0.7, { col: PAL.red, size: 85 });
  });

  /* 56 ─ 246.16–253.05  Clause: "The gap between supply and demand was be..." */
  S(246.16, 253.05, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE GAP BETWEEN SUPPLY AN", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 57 ─ 253.05–256.36  Clause: "But those government reserves were runni..." */
  S(253.05, 256.36, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THOSE GOVERNMENT RESE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 58 ─ 256.36–259.46  Clause: "Bunker Hunt ran the numbers and came to ..." */
  S(256.36, 259.46, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER HUNT RAN THE NUMBE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 59 ─ 259.46–263.47  Clause: "If someone with enough cash stepped into..." */
  S(259.46, 263.47, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "IF SOMEONE WITH ENOUGH CA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 60 ─ 263.47–267.61  Clause: "the entire global industrial machine wou..." */
  S(263.47, 267.61, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE ENTIRE GLOBAL INDUSTR", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 61 ─ 267.61–273.52  Clause: "In nineteen seventy-three, the Hunt brot..." */
  S(267.61, 273.52, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "IN NINETEEN SEVENTY-THREE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 62 ─ 273.52–278.54  Clause: "They quietly purchased twenty million ou..." */
  S(273.52, 278.54, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY QUIETLY PURCHASED TW", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 63 ─ 278.54–281.18  Clause: "But the brothers knew their own fortune,..." */
  S(278.54, 281.18, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THE BROTHERS KNEW THE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 64 ─ 281.18–284.52  Clause: "could only push the market so far...." */
  S(281.18, 284.52, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "COULD ONLY PUSH THE MARKE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 65 ─ 284.52–286.75  Clause: "They needed allies with deep pockets and..." */
  S(284.52, 286.75, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY NEEDED ALLIES WITH D", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 66 ─ 286.75–291.49  Saudi alliance / handshake */
  S(286.75, 291.49, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 67 ─ 291.49–298.34  Saudi alliance / handshake */
  S(291.49, 298.34, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 68 ─ 298.34–300.58  Clause: "Bunker laid out his theory...." */
  S(298.34, 300.58, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER LAID OUT HIS THEOR", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 69 ─ 300.58–302.93  Saudi alliance / handshake */
  S(300.58, 302.93, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 70 ─ 302.93–308.62  Saudi alliance / handshake */
  S(302.93, 308.62, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 71 ─ 308.62–312.83  Saudi alliance / handshake */
  S(308.62, 312.83, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 72 ─ 312.83–315.22  Clause: "Together, they formed a secret offshore ..." */
  S(312.83, 315.22, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "TOGETHER, THEY FORMED A S", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 73 ─ 315.22–320.84  Clause: "The trap was set, and the squeeze was ab..." */
  S(315.22, 320.84, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE TRAP WAS SET, AND THE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 74 ─ 320.84–324.38  Clause: "To understand how the Hunt brothers pull..." */
  S(320.84, 324.38, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "TO UNDERSTAND HOW THE HUN", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 75 ─ 324.38–327.44  Chapter Card: The Midnight Airlift */
  S(324.38, 327.44, (ctx, s) => {
    CC.chapter(ctx, s, "The Midnight Airlift", { kicker: "CHAPTER THREE", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 76 ─ 327.44–335.85  Clause: "Normally, when big hedge funds or corpor..." */
  S(327.44, 335.85, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "NORMALLY, WHEN BIG HEDGE ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 77 ─ 335.85–338.36  Clause: "nobody actually expects to see a single ..." */
  S(335.85, 338.36, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "NOBODY ACTUALLY EXPECTS T", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 78 ─ 338.36–341.71  Clause: "Instead, traders buy futures contracts...." */
  S(338.36, 341.71, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "INSTEAD, TRADERS BUY FUTU", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 79 ─ 341.71–348.23  Clause: "A futures contract is simply a legal agr..." */
  S(341.71, 348.23, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "A FUTURES CONTRACT IS SIM", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 80 ─ 348.23–353.6  Clause: "But when that delivery date arrives, nin..." */
  S(348.23, 353.6, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT WHEN THAT DELIVERY DA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 81 ─ 353.6–360.53  Clause: "They simply settle the contract in cash,..." */
  S(353.6, 360.53, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY SIMPLY SETTLE THE CO", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 82 ─ 360.53–362.19  Clause: "and roll over into the next month...." */
  S(360.53, 362.19, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND ROLL OVER INTO THE NE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 83 ─ 362.19–364.14  Clause: "The Hunt brothers, however, had zero int..." */
  S(362.19, 364.14, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE HUNT BROTHERS, HOWEVE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 84 ─ 364.14–368.46  Clause: "They did not want paper cash...." */
  S(364.14, 368.46, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY DID NOT WANT PAPER C", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 85 ─ 368.46–368.66  Clause: "They wanted the metal...." */
  S(368.46, 368.66, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WANTED THE METAL.", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 86 ─ 368.66–372.91  Clause: "When their contracts expired, the Hunts ..." */
  S(368.66, 372.91, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "WHEN THEIR CONTRACTS EXPI", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 87 ─ 372.91–374.84  Clause: "They demanded physical delivery...." */
  S(372.91, 374.84, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY DEMANDED PHYSICAL DE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 88 ─ 374.84–378.25  Clause: "They told the exchange: do not wire us d..." */
  S(374.84, 378.25, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY TOLD THE EXCHANGE: D", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 89 ─ 378.25–385.42  Clause: "Suddenly, armored trucks began backing u..." */
  S(378.25, 385.42, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "SUDDENLY, ARMORED TRUCKS ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 90 ─ 385.42–390.55  Clause: "loading up thousands of heavy thirty-two..." */
  S(385.42, 390.55, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "LOADING UP THOUSANDS OF H", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 91 ─ 390.55–394.2  Clause: "But Bunker Hunt was terrified the United..." */
  S(390.55, 394.2, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT BUNKER HUNT WAS TERRI", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 92 ─ 394.2–398.71  Gold ownership illegal / jail */
  S(394.2, 398.71, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 520, in: 'none' }, c => P.bars(c, 0, 0, { w: 700, h: 500 }));
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, pose: 'face', expr: 'worried' }, [
      { at: 0.5, pose: 'slump', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, { size: 68 });
  });

  /* 93 ─ 398.71–401.88  Clause: "So he decided to take the silver complet..." */
  S(398.71, 401.88, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "SO HE DECIDED TO TAKE THE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 94 ─ 401.88–403.26  Clause: "In the dead of winter, under the cover o..." */
  S(401.88, 403.26, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "IN THE DEAD OF WINTER, UN", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 95 ─ 403.26–405.76  Boeing 707 midnight airlift */
  S(403.26, 405.76, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.actor(ctx, s, 'worker', { x: 480, y: FL, hat: 'cap', expr: 'neutral' }, [
      { at: 0.3, pose: 'carry' }
    ]);
    CC.obj(ctx, s, { x: 1100, y: 440, at: 0.2, in: 'slide-right', from: -300 }, c => {
      CC.rect(c, -300, -90, 600, 180, PAL.grey, 8, 16);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 50, PAL.white, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'TO SWITZERLAND', 960, 200, 0.7, { col: PAL.gold, size: 84 });
  });

  /* 96 ─ 405.76–412.45  Boeing 707 midnight airlift */
  S(405.76, 412.45, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.actor(ctx, s, 'worker', { x: 480, y: FL, hat: 'cap', expr: 'neutral' }, [
      { at: 0.3, pose: 'carry' }
    ]);
    CC.obj(ctx, s, { x: 1100, y: 440, at: 0.2, in: 'slide-right', from: -300 }, c => {
      CC.rect(c, -300, -90, 600, 180, PAL.grey, 8, 16);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 50, PAL.white, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'TO SWITZERLAND', 960, 200, 0.7, { col: PAL.gold, size: 84 });
  });

  /* 97 ─ 412.45–415.13  Clause: "to guard the loading docks...." */
  S(412.45, 415.13, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "TO GUARD THE LOADING DOCK", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 98 ─ 415.13–417.2  Clause: "Pallet after pallet of solid silver bull..." */
  S(415.13, 417.2, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "PALLET AFTER PALLET OF SO", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 99 ─ 417.2–423.23  Clause: "The jets took off into the night and fle..." */
  S(417.2, 423.23, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE JETS TOOK OFF INTO TH", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 100 ─ 423.23–424.19  Boeing 707 midnight airlift */
  S(423.23, 424.19, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.actor(ctx, s, 'worker', { x: 480, y: FL, hat: 'cap', expr: 'neutral' }, [
      { at: 0.3, pose: 'carry' }
    ]);
    CC.obj(ctx, s, { x: 1100, y: 440, at: 0.2, in: 'slide-right', from: -300 }, c => {
      CC.rect(c, -300, -90, 600, 180, PAL.grey, 8, 16);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 50, PAL.white, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'TO SWITZERLAND', 960, 200, 0.7, { col: PAL.gold, size: 84 });
  });

  /* 101 ─ 424.19–429.08  Boeing 707 midnight airlift */
  S(424.19, 429.08, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.actor(ctx, s, 'worker', { x: 480, y: FL, hat: 'cap', expr: 'neutral' }, [
      { at: 0.3, pose: 'carry' }
    ]);
    CC.obj(ctx, s, { x: 1100, y: 440, at: 0.2, in: 'slide-right', from: -300 }, c => {
      CC.rect(c, -300, -90, 600, 180, PAL.grey, 8, 16);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 50, PAL.white, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'TO SWITZERLAND', 960, 200, 0.7, { col: PAL.gold, size: 84 });
  });

  /* 102 ─ 429.08–433.15  Saudi alliance / handshake */
  S(429.08, 433.15, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL, floorCol: PAL.tanDk });
    bunker(ctx, s, { x: 620, y: FL, pose: 'give', expr: 'smug' }, [
      { at: 0.4, pose: 'wave', expr: 'happy' }
    ]);
    CC.actor(ctx, s, 'tycoon', { x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }, [
      { at: 0.2, slideIn: 'right', dur: 0.5 }, { at: 0.7, pose: 'point' }
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, { size: 76 });
  });

  /* 103 ─ 433.15–434.9  Clause: "They were using leverage...." */
  S(433.15, 434.9, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WERE USING LEVERAGE.", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 104 ─ 434.9–440.92  Clause: "They would take their physical silver ba..." */
  S(434.9, 440.92, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WOULD TAKE THEIR PHY", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 105 ─ 440.92–446.75  Clause: "and then use that borrowed cash to buy e..." */
  S(440.92, 446.75, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND THEN USE THAT BORROWE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 106 ─ 446.75–450.38  Clause: "It was an unstoppable compounding loop...." */
  S(446.75, 450.38, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "IT WAS AN UNSTOPPABLE COM", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 107 ─ 450.38–453.37  Clause: "By late nineteen seventy-nine, the Hunt ..." */
  S(450.38, 453.37, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "BY LATE NINETEEN SEVENTY-", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 108 ─ 453.37–459.47  Clause: "That was roughly half of all the deliver..." */
  S(453.37, 459.47, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "THAT WAS ROUGHLY HALF OF ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 109 ─ 459.47–464.31  Chapter Card: The Silver Fever of 1980 */
  S(459.47, 464.31, (ctx, s) => {
    CC.chapter(ctx, s, "The Silver Fever of 1980", { kicker: "CHAPTER FOUR", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 110 ─ 464.31–467.12  Clause: "the open market suddenly experienced an ..." */
  S(464.31, 467.12, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE OPEN MARKET SUDDENLY ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 111 ─ 467.12–472.61  Industrial silver demand */
  S(467.12, 472.61, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    P.computer(ctx, 640, FL, { s: 1.4, screen: PAL.slate });
    CC.obj(ctx, s, { x: 1280, y: 520, at: 0.3, in: 'pop' }, c => {
      CC.rect(c, -160, -120, 320, 240, PAL.yellow, 6, 8);
      CC.text(c, 'KODAK FILM', 0, 0, 44, PAL.black, { font: 'PMarker' });
    });
    CC.stamp(ctx, s, 'SUPPLY DEFICIT', 960, 220, 0.7, { col: PAL.red, size: 85 });
  });

  /* 112 ─ 472.61–476.84  Clause: "The price of silver went completely bers..." */
  S(472.61, 476.84, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE PRICE OF SILVER WENT ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 113 ─ 476.84–479.61  Clause: "In January of nineteen seventy-nine, sil..." */
  S(476.84, 479.61, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "IN JANUARY OF NINETEEN SE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 114 ─ 479.61–482.73  Clause: "By September, it hit eleven dollars...." */
  S(479.61, 482.73, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "BY SEPTEMBER, IT HIT ELEV", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 115 ─ 482.73–484.8  Clause: "By December, it blew past twenty-five do..." */
  S(482.73, 484.8, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "BY DECEMBER, IT BLEW PAST", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 116 ─ 484.8–490.9  Peak $50.35 record */
  S(484.8, 490.9, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 130, PAL.moneyDk, s.lt, 0.2);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [
      { at: 0.3, pose: 'cheer', expr: 'grin' }
    ]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.6, { size: 72 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.4) });

  /* 117 ─ 490.9–500.64  Peak $50.35 record */
  S(490.9, 500.64, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 130, PAL.moneyDk, s.lt, 0.2);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [
      { at: 0.3, pose: 'cheer', expr: 'grin' }
    ]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.6, { size: 72 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.4) });

  /* 118 ─ 500.64–503.14  Rocket chart +700% */
  S(500.64, 503.14, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 480, 260, 960, 480, [[0, 0.1], [0.3, 0.18], [0.6, 0.45], [0.9, 0.95]], CC.prog(CC.q(s.lt), 0.2, 1.2), { col: PAL.green, lw: 9 });
    CC.stamp(ctx, s, '+700%', 1200, 380, 0.7, { col: PAL.red, size: 110 });
    CC.actor(ctx, s, 'analyst', { x: 340, y: FL, pose: 'think', expr: 'shock' }, [
      { at: 0.5, pose: 'face', fx: 'sweat' }
    ]);
  });

  /* 119 ─ 503.14–509.36  Clause: "On paper, Bunker and Herbert Hunt were n..." */
  S(503.14, 509.36, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "ON PAPER, BUNKER AND HERB", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 120 ─ 509.36–512.8  Clause: "They were, for a few brief weeks, arguab..." */
  S(509.36, 512.8, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WERE, FOR A FEW BRIE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 121 ─ 512.8–518.68  Clause: "Across the United States, regular citize..." */
  S(512.8, 518.68, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "ACROSS THE UNITED STATES,", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 122 ─ 518.68–528.83  Clause: "People suddenly realized that the dusty ..." */
  S(518.68, 528.83, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "PEOPLE SUDDENLY REALIZED ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 123 ─ 528.83–537.08  Clause: "Lines stretched around the block outside..." */
  S(528.83, 537.08, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "LINES STRETCHED AROUND TH", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 124 ─ 537.08–540.68  Clause: "People stood in the freezing winter cold..." */
  S(537.08, 540.68, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "PEOPLE STOOD IN THE FREEZ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 125 ─ 540.68–546.2  Clause: "communion plates, and even silver dental..." */
  S(540.68, 546.2, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "COMMUNION PLATES, AND EVE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 126 ─ 546.2–553.49  Clause: "Refineries worked around the clock, melt..." */
  S(546.2, 553.49, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "REFINERIES WORKED AROUND ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 127 ─ 553.49–560.11  Clause: "Burglars began breaking into suburban ho..." */
  S(553.49, 560.11, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "BURGLARS BEGAN BREAKING I", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 128 ─ 560.11–562.47  Clause: "and heading straight for the dining room..." */
  S(560.11, 562.47, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND HEADING STRAIGHT FOR ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 129 ─ 562.47–571.88  Tiffany & Co. New York Times ad */
  S(562.47, 571.88, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: 500, at: 0.2, in: 'pop' }, c => {
      P.newspaper(ctx, 0, 0, { headline: 'TIFFANY & CO: UNCONSCIONABLE' });
    });
    CC.actor(ctx, s, 'reporter', { x: 420, y: FL, pose: 'point', expr: 'shock' }, [
      { at: 0.4, pose: 'write' }
    ]);
  });

  /* 130 ─ 571.88–579.73  Tiffany & Co. New York Times ad */
  S(571.88, 579.73, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: 500, at: 0.2, in: 'pop' }, c => {
      P.newspaper(ctx, 0, 0, { headline: 'TIFFANY & CO: UNCONSCIONABLE' });
    });
    CC.actor(ctx, s, 'reporter', { x: 420, y: FL, pose: 'point', expr: 'shock' }, [
      { at: 0.4, pose: 'write' }
    ]);
  });

  /* 131 ─ 579.73–585.01  Clause: "But Bunker Hunt simply laughed off the c..." */
  S(579.73, 585.01, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT BUNKER HUNT SIMPLY LA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 132 ─ 585.01–588.39  Clause: "When a reporter asked him how it felt to..." */
  S(585.01, 588.39, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "WHEN A REPORTER ASKED HIM", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 133 ─ 588.39–591.83  Clause: "Bunker calmly replied that a billion dol..." */
  S(588.39, 591.83, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER CALMLY REPLIED THA", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 134 ─ 591.83–598.98  Chapter Card: Changing the Rules */
  S(591.83, 598.98, (ctx, s) => {
    CC.chapter(ctx, s, "Changing the Rules", { kicker: "CHAPTER FIVE", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 135 ─ 598.98–607.06  Clause: "The leaders of the Chicago Board of Trad..." */
  S(598.98, 607.06, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE LEADERS OF THE CHICAG", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 136 ─ 607.06–614.33  Clause: "Many of the exchange board members and m..." */
  S(607.06, 614.33, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "MANY OF THE EXCHANGE BOAR", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 137 ─ 614.33–617.43  Clause: "meaning they had bet that the price of s..." */
  S(614.33, 617.43, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "MEANING THEY HAD BET THAT", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 138 ─ 617.43–624.62  Clause: "If the Hunts continued demanding physica..." */
  S(617.43, 624.62, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "IF THE HUNTS CONTINUED DE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 139 ─ 624.62–631.29  Clause: "The short sellers would go bankrupt, cle..." */
  S(624.62, 631.29, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE SHORT SELLERS WOULD G", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 140 ─ 631.29–635.38  Clause: "So the men in charge decided to do the o..." */
  S(631.29, 635.38, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "SO THE MEN IN CHARGE DECI", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 141 ─ 635.38–638.86  The Rule Change slam */
  S(635.38, 638.86, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 500 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 480, 0.3, { col: PAL.red, size: 85 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [
      { at: 0.3, collapse: 'left', fx: 'sweat' }
    ]);
  }, { sfx: [[0.3, 'stamp']] });

  /* 142 ─ 638.86–643.08  Clause: "First, the exchanges dramatically increa..." */
  S(638.86, 643.08, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "FIRST, THE EXCHANGES DRAM", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 143 ─ 643.08–650.36  Clause: "Previously, an investor only needed to p..." */
  S(643.08, 650.36, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "PREVIOUSLY, AN INVESTOR O", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 144 ─ 650.36–656.67  Clause: "The exchanges suddenly demanded that tra..." */
  S(650.36, 656.67, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE EXCHANGES SUDDENLY DE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 145 ─ 656.67–658.75  Clause: "Then came the kill shot...." */
  S(656.67, 658.75, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEN CAME THE KILL SHOT.", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 146 ─ 658.75–663.78  Liquidation Only rule */
  S(658.75, 663.78, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 600 });
    CC.stamp(ctx, s, 'LIQUIDATION ONLY', 960, 450, 0.2, { col: PAL.red, size: 80 });
    CC.actor(ctx, s, 'judge', { x: 480, y: FL, expr: 'angry' }, [
      { at: 0.4, pose: 'pointUp' }
    ]);
  });

  /* 147 ─ 663.78–669.02  Clause: "Under this new rule, nobody in the world..." */
  S(663.78, 669.02, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "UNDER THIS NEW RULE, NOBO", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 148 ─ 669.02–673.08  Clause: "You were only allowed to sell existing c..." */
  S(669.02, 673.08, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "YOU WERE ONLY ALLOWED TO ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 149 ─ 673.08–673.28  Clause: "Think about that for a second...." */
  S(673.08, 673.28, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "THINK ABOUT THAT FOR A SE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 150 ─ 673.28–675.52  Liquidation Only rule */
  S(673.28, 675.52, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 600 });
    CC.stamp(ctx, s, 'LIQUIDATION ONLY', 960, 450, 0.2, { col: PAL.red, size: 80 });
    CC.actor(ctx, s, 'judge', { x: 480, y: FL, expr: 'angry' }, [
      { at: 0.4, pose: 'pointUp' }
    ]);
  });

  /* 151 ─ 675.52–679.11  Clause: "and sellers are only allowed to sell...." */
  S(675.52, 679.11, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND SELLERS ARE ONLY ALLO", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 152 ─ 679.11–683.64  Clause: "With buyers legally kicked out of the ro..." */
  S(679.11, 683.64, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "WITH BUYERS LEGALLY KICKE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 153 ─ 683.64–686.8  Paul Volcker shuts credit lines */
  S(683.64, 686.8, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL, floorCol: PAL.charcoal });
    P.bank(ctx, 1340, FL, { s: 1.1, label: 'FED RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 620, y: FL, pose: 'cross', expr: 'furious' }, [
      { at: 0.3, pose: 'point', expr: 'furious' }
    ]);
    CC.stamp(ctx, s, 'CREDIT SHUTDOWN', 960, 240, 0.6, { col: PAL.red, size: 84 });
  });

  /* 154 ─ 686.8–694.85  Paul Volcker shuts credit lines */
  S(686.8, 694.85, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL, floorCol: PAL.charcoal });
    P.bank(ctx, 1340, FL, { s: 1.1, label: 'FED RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 620, y: FL, pose: 'cross', expr: 'furious' }, [
      { at: 0.3, pose: 'point', expr: 'furious' }
    ]);
    CC.stamp(ctx, s, 'CREDIT SHUTDOWN', 960, 240, 0.6, { col: PAL.red, size: 84 });
  });

  /* 155 ─ 694.85–698.8  Clause: "He told them to immediately stop extendi..." */
  S(694.85, 698.8, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "HE TOLD THEM TO IMMEDIATE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 156 ─ 698.8–704.24  Clause: "Overnight, the Hunt brothers' financial ..." */
  S(698.8, 704.24, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "OVERNIGHT, THE HUNT BROTH", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 157 ─ 704.24–708.69  Clause: "They could no longer borrow fresh cash a..." */
  S(704.24, 708.69, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY COULD NO LONGER BORR", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 158 ─ 708.69–711.91  Clause: "and the market they thought they control..." */
  S(708.69, 711.91, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND THE MARKET THEY THOUG", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 159 ─ 711.91–717.53  Chapter Card: Silver Thursday and the Fall */
  S(711.91, 717.53, (ctx, s) => {
    CC.chapter(ctx, s, "Silver Thursday and the Fall", { kicker: "CHAPTER SIX", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 160 ─ 717.53–720.16  Peak $50.35 record */
  S(717.53, 720.16, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 130, PAL.moneyDk, s.lt, 0.2);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [
      { at: 0.3, pose: 'cheer', expr: 'grin' }
    ]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.6, { size: 72 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.4) });

  /* 161 ─ 720.16–724.81  Clause: "Because the Hunt brothers had built thei..." */
  S(720.16, 724.81, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "BECAUSE THE HUNT BROTHERS", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 162 ─ 724.81–730.07  Clause: "every dollar drop in the price of silver..." */
  S(724.81, 730.07, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "EVERY DOLLAR DROP IN THE ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 163 ─ 730.07–738.56  Clause: "A margin call is when a broker calls you..." */
  S(730.07, 738.56, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "A MARGIN CALL IS WHEN A B", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 164 ─ 738.56–744.13  Clause: "If you cannot produce the cash, the brok..." */
  S(738.56, 744.13, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "IF YOU CANNOT PRODUCE THE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 165 ─ 744.13–748.18  Clause: "For several weeks, the Hunts scrambled...." */
  S(744.13, 748.18, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "FOR SEVERAL WEEKS, THE HU", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 166 ─ 748.18–751.11  Clause: "They poured in millions of dollars of th..." */
  S(748.18, 751.11, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY POURED IN MILLIONS O", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 167 ─ 751.11–753.81  Clause: "sold off family assets, and tried to neg..." */
  S(751.11, 753.81, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "SOLD OFF FAMILY ASSETS, A", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 168 ─ 753.81–755.15  Clause: "But the decline was relentless...." */
  S(753.81, 755.15, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THE DECLINE WAS RELEN", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 169 ─ 755.15–759.77  Silver Thursday March 27, 1980 */
  S(755.15, 759.77, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 105, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.6, { col: PAL.red, size: 90 });
    bunker(ctx, s, { x: 480, y: FL, expr: 'shock' }, [
      { at: 0.5, collapse: 'left', fx: 'sweat' }
    ]);
  });

  /* 170 ─ 759.77–764.45  Silver Thursday March 27, 1980 */
  S(759.77, 764.45, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 105, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.6, { col: PAL.red, size: 90 });
    bunker(ctx, s, { x: 480, y: FL, expr: 'shock' }, [
      { at: 0.5, collapse: 'left', fx: 'sweat' }
    ]);
  });

  /* 171 ─ 764.45–777.04  Silver Thursday March 27, 1980 */
  S(764.45, 777.04, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 105, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.6, { col: PAL.red, size: 90 });
    bunker(ctx, s, { x: 480, y: FL, expr: 'shock' }, [
      { at: 0.5, collapse: 'left', fx: 'sweat' }
    ]);
  });

  /* 172 ─ 777.04–777.24  Clause: "The Hunts simply did not have the cash...." */
  S(777.04, 777.24, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE HUNTS SIMPLY DID NOT ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 173 ─ 777.24–783.95  Clause: "Bunker Hunt was overseas in Europe tryin..." */
  S(777.24, 783.95, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUNKER HUNT WAS OVERSEAS ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 174 ─ 783.95–785.54  Silver Thursday March 27, 1980 */
  S(783.95, 785.54, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 105, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.6, { col: PAL.red, size: 90 });
    bunker(ctx, s, { x: 480, y: FL, expr: 'shock' }, [
      { at: 0.5, collapse: 'left', fx: 'sweat' }
    ]);
  });

  /* 175 ─ 785.54–789.97  Clause: "dumping millions of ounces onto a market..." */
  S(785.54, 789.97, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "DUMPING MILLIONS OF OUNCE", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 176 ─ 789.97–793.41  Trading pit price collapse */
  S(789.97, 793.41, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    P.lineChart(ctx, 420, 240, 1080, 520, [[0, 0.95], [0.3, 0.6], [0.6, 0.3], [1, 0.1]], CC.prog(CC.q(s.lt), 0.1, 1.0), { col: PAL.red, lw: 10 });
    CC.actor(ctx, s, 'analyst', { x: 1550, y: FL, expr: 'furious' }, [
      { at: 0.2, pose: 'face', fx: 'sweat' }
    ]);
    CC.stamp(ctx, s, 'CRASH', 960, 360, 0.5, { col: PAL.red, size: 130 });
  });

  /* 177 ─ 793.41–799.25  Trading pit price collapse */
  S(793.41, 799.25, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    P.lineChart(ctx, 420, 240, 1080, 520, [[0, 0.95], [0.3, 0.6], [0.6, 0.3], [1, 0.1]], CC.prog(CC.q(s.lt), 0.1, 1.0), { col: PAL.red, lw: 10 });
    CC.actor(ctx, s, 'analyst', { x: 1550, y: FL, expr: 'furious' }, [
      { at: 0.2, pose: 'face', fx: 'sweat' }
    ]);
    CC.stamp(ctx, s, 'CRASH', 960, 360, 0.5, { col: PAL.red, size: 130 });
  });

  /* 178 ─ 799.25–810.44  Clause: "Rumors spread like wildfire across Wall ..." */
  S(799.25, 810.44, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "RUMORS SPREAD LIKE WILDFI", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 179 ─ 810.44–812.86  Clause: "The Dow Jones Industrial Average plunged..." */
  S(810.44, 812.86, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE DOW JONES INDUSTRIAL ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 180 ─ 812.86–824.58  Paul Volcker shuts credit lines */
  S(812.86, 824.58, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL, floorCol: PAL.charcoal });
    P.bank(ctx, 1340, FL, { s: 1.1, label: 'FED RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 620, y: FL, pose: 'cross', expr: 'furious' }, [
      { at: 0.3, pose: 'point', expr: 'furious' }
    ]);
    CC.stamp(ctx, s, 'CREDIT SHUTDOWN', 960, 240, 0.6, { col: PAL.red, size: 84 });
  });

  /* 181 ─ 824.58–833.83  Clause: "Over the coming weeks, they put together..." */
  S(824.58, 833.83, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "OVER THE COMING WEEKS, TH", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 182 ─ 833.83–835.23  Clause: "But in exchange, the banks took total co..." */
  S(833.83, 835.23, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT IN EXCHANGE, THE BANK", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 183 ─ 835.23–837.82  Clause: "The brothers were forced to pledge their..." */
  S(835.23, 837.82, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE BROTHERS WERE FORCED ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 184 ─ 837.82–842.86  Clause: "real estate, ranches, racehorses, and fa..." */
  S(837.82, 842.86, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "REAL ESTATE, RANCHES, RAC", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 185 ─ 842.86–844.96  Gold ownership illegal / jail */
  S(842.86, 844.96, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 520, in: 'none' }, c => P.bars(c, 0, 0, { w: 700, h: 500 }));
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, pose: 'face', expr: 'worried' }, [
      { at: 0.5, pose: 'slump', fx: 'sweat' }
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, { size: 68 });
  });

  /* 186 ─ 844.96–848.55  Chapter Card: The Billion-Dollar Lesson */
  S(844.96, 848.55, (ctx, s) => {
    CC.chapter(ctx, s, "The Billion-Dollar Lesson", { kicker: "FINAL CHAPTER", at: 0.1, dur: 1.20 });
  }, { fadeIn: 0.15, fadeOut: 0.15 });

  /* 187 ─ 848.55–860.33  Clause: "In nineteen eighty-eight, a federal jury..." */
  S(848.55, 860.33, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "IN NINETEEN EIGHTY-EIGHT,", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 188 ─ 860.33–868.63  Clause: "The jury ordered the brothers to pay ove..." */
  S(860.33, 868.63, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "THE JURY ORDERED THE BROT", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 189 ─ 868.63–873.95  Clause: "Faced with astronomical legal bills, ban..." */
  S(868.63, 873.95, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "FACED WITH ASTRONOMICAL L", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 190 ─ 873.95–878.62  Bankruptcy courtroom */
  S(873.95, 878.62, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.podium(ctx, 1320, FL + 30, { label: 'AUCTION' });
    CC.actor(ctx, s, 'judge', { x: 1320, y: FL - 30, expr: 'neutral' }, [
      { at: 0.4, pose: 'point' }
    ]);
    bunker(ctx, s, { x: 540, y: FL, pose: 'slump', expr: 'disappointed' }, [
      { at: 0.5, fx: 'sweat' }
    ]);
    CC.stamp(ctx, s, 'BANKRUPT', 960, 300, 0.6, { col: PAL.red, size: 100 });
  });

  /* 191 ─ 878.62–886.34  Bankruptcy courtroom */
  S(878.62, 886.34, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.podium(ctx, 1320, FL + 30, { label: 'AUCTION' });
    CC.actor(ctx, s, 'judge', { x: 1320, y: FL - 30, expr: 'neutral' }, [
      { at: 0.4, pose: 'point' }
    ]);
    bunker(ctx, s, { x: 540, y: FL, pose: 'slump', expr: 'disappointed' }, [
      { at: 0.5, fx: 'sweat' }
    ]);
    CC.stamp(ctx, s, 'BANKRUPT', 960, 300, 0.6, { col: PAL.red, size: 100 });
  });

  /* 192 ─ 886.34–889.86  Clause: "his father's oil leases, and even his pe..." */
  S(886.34, 889.86, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "HIS FATHER'S OIL LEASES, ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 193 ─ 889.86–896.13  Clause: "His personal fortune, once estimated to ..." */
  S(889.86, 896.13, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "HIS PERSONAL FORTUNE, ONC", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 194 ─ 896.13–905.61  Clause: "Decades later, the Hunt brothers' silver..." */
  S(896.13, 905.61, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'shrug', expr: 'confident' }
    ]);
    CC.callout(ctx, "DECADES LATER, THE HUNT B", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 195 ─ 905.61–906.62  Clause: "They were right about inflation...." */
  S(905.61, 906.62, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'present', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WERE RIGHT ABOUT INF", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 196 ─ 906.62–909.81  Clause: "They were right that industrial demand w..." */
  S(906.62, 909.81, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'wave', expr: 'confident' }
    ]);
    CC.callout(ctx, "THEY WERE RIGHT THAT INDU", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 197 ─ 909.81–914.22  Clause: "And they were right that paper currency ..." */
  S(909.81, 914.22, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'think', expr: 'confident' }
    ]);
    CC.callout(ctx, "AND THEY WERE RIGHT THAT ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 198 ─ 914.22–920.42  Clause: "But they forgot the most important rule ..." */
  S(914.22, 920.42, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 1240, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'thumbsUp', expr: 'confident' }
    ]);
    CC.callout(ctx, "BUT THEY FORGOT THE MOST ", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 199 ─ 920.42–922.45  Clause: "he goes to jail...." */
  S(920.42, 922.45, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 680, y: FL, s: 1.45, expr: 'neutral' }, [
      { at: 0.2, pose: 'point', expr: 'confident' }
    ]);
    CC.callout(ctx, "HE GOES TO JAIL.", 960, 320, s.lt, 0.4, { size: 64, maxW: 800 });
  });

  /* 200 ─ 922.45–925.61  Final punchline: The House Rewrites the Rules */
  S(922.45, 925.61, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 540 });
    bunker(ctx, s, { x: 960, y: FL + 100, s: 1.8, expr: 'disappointed' }, [
      { at: 0.4, expr: 'neutral', turn: true }
    ]);
    CC.stamp(ctx, s, 'THE HOUSE REWRITES THE RULES', 960, 320, 0.6, { col: PAL.white, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.4) });

  TM.config({
    fps: 30,
    duration: 925.61,
    shots,
    phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({ s, e, text })), 6)
  });
  TM.CAPTIONS = false;
})();

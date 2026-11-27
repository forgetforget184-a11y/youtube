/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video — Ultra-Dynamic V2
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;

  const CUES = [[0.21, 6.93, "In nineteen seventy-nine, two brothers from Texas walked into Wall Street with an idea so crazy that nobody believed they were serious."], [6.93, 11.98, "They decided that paper money was completely worthless, that the government was heading for bankruptcy,"], [11.98, 18.62, "and that the only safe place to put their wealth was inside cold, hard metal."], [18.62, 20.05, "But they did not just buy a little bit."], [20.05, 28.76, "Over twelve months, these two brothers secretly bought one-third of all the privately held silver on planet Earth."], [28.76, 30.89, "They pushed the price of silver up by more than seven hundred percent."], [30.89, 36.43, "They caused people to tear down antique candelabras and melt family heirlooms on street corners."], [36.43, 40.49, "And then, just when they thought they owned the world,"], [40.49, 42.83, "the men who ran the financial system did something the brothers never saw coming."], [42.83, 46.09, "They simply changed the rules."], [46.09, 50.57, "To understand how anyone could attempt something this absurd, you first have to meet their father."], [50.57, 56.21, "His name was Haroldson Lafayette Hunt, better known across Texas simply as H.L. Hunt."], [56.21, 59.13, "In the nineteen thirties, H.L."], [59.13, 61.39, "was quite literally the richest private citizen in the world."], [61.39, 66.77, "He started out as a professional poker player wandering through dusty gambling dens in Arkansas and Louisiana."], [66.77, 72.18, "One afternoon, he won a tiny slice of an oil lease in a card game."], [72.18, 80.74, "He took that lease, traded it for another, and eventually bought the legendary East Texas Oil Field from a broke wildcatter for pennies on the dollar. H.L."], [80.74, 82.41, "Hunt was brilliant, completely eccentric, and deeply paranoid."], [82.41, 86.12, "He carried his lunch in a brown paper bag, drove an old beat-up car,"], [86.12, 93.86, "and firmly believed that paper money was a government scam designed to steal wealth from hardworking families."], [93.86, 96.95, "When he died in nineteen seventy-four, he left behind billions of dollars and a large family."], [96.95, 102.71, "Standing right at the head of the table was his eldest son,"], [102.71, 106.73, "Nelson Bunker Hunt, alongside his younger brother, William Herbert Hunt."], [106.73, 116.72, "Bunker Hunt was a massive, quiet man who wore rumpled off-the-rack suits and looked more like a sleepy cattle rancher than a financial titan."], [116.72, 121.04, "But underneath that calm Texas drawl was his father's absolute obsession with hard assets."], [121.04, 126.34, "Bunker inherited a personal fortune in oil fields, massive cattle ranches, and prize-winning racehorses."], [126.34, 130.35, "But in nineteen seventy-three, disaster struck."], [130.35, 131.93, "Bunker had invested heavily in a massive oil field in Libya."], [131.93, 134.79, "Out of nowhere, Colonel Muammar Gaddafi led a military coup,"], [134.79, 139.22, "seized power, and nationalized Bunker's entire oil operation without paying him a single dime."], [139.22, 142.52, "The Libyan seizure shook Bunker Hunt to his core."], [142.52, 147.29, "He realized that a government could wipe out decades of work with the stroke of a pen."], [147.29, 152.77, "At the exact same time, back home in America, inflation was spiraling out of control."], [152.77, 157.52, "President Richard Nixon had just severed the final link between the dollar and gold."], [157.52, 164.34, "Prices for bread, milk, and gasoline were soaring, and paper money seemed to be melting away like ice under the Texas sun."], [164.34, 170.93, "Bunker turned to his brother Herbert and told him that if they kept their wealth in American dollars,"], [170.93, 173.04, "they were going to end up broke."], [173.04, 174.18, "They needed something real."], [174.18, 177.27, "Naturally, the first thing the Hunt brothers wanted to buy was gold."], [177.27, 181.27, "Gold had been the ultimate store of value for thousands of years."], [181.27, 184.3, "But there was a gigantic legal roadblock."], [184.3, 189.07, "Ever since President Franklin Roosevelt signed an executive order during the Great Depression,"], [189.07, 193.36, "it was strictly illegal for private American citizens to own gold bullion."], [193.36, 198.15, "The government would throw you in federal prison if you hoarded gold bars in your basement."], [198.15, 201.72, "So Bunker and Herbert began looking for an alternative."], [201.72, 206.08, "And sitting right in plain sight was gold's forgotten little brother: silver."], [206.08, 210.68, "Silver was completely legal for any American citizen to buy and hold."], [210.68, 211.86, "Even better, it was shockingly cheap."], [211.86, 219.21, "Throughout the early nineteen seventies, silver traded for around one dollar and fifty cents an ounce."], [219.21, 222.66, "But Bunker Hunt was not just looking at the price tag."], [222.66, 225.34, "He started studying the global supply chain, and what he discovered blew his mind."], [225.34, 232.44, "Back then, the world was consuming far more silver every single year than all the silver mines on Earth were digging up."], [232.44, 241.79, "The photographic giant Eastman Kodak was using millions of ounces of silver every year to manufacture camera film."], [241.79, 242.96, "Electronics manufacturers needed silver for electrical switches."], [242.96, 246.16, "Medical companies needed silver for X-ray sheets."], [246.16, 253.05, "The gap between supply and demand was being filled by governments dumping their old silver coins and stockpiles into the market."], [253.05, 256.36, "But those government reserves were running dry."], [256.36, 259.46, "Bunker Hunt ran the numbers and came to an astonishing conclusion."], [259.46, 263.47, "If someone with enough cash stepped into the market and bought up the remaining supply,"], [263.47, 267.61, "the entire global industrial machine would have to come begging to them for metal."], [267.61, 273.52, "In nineteen seventy-three, the Hunt brothers made their first move."], [273.52, 278.54, "They quietly purchased twenty million ounces of physical silver at roughly three dollars an ounce."], [278.54, 281.18, "But the brothers knew their own fortune, as vast as it was,"], [281.18, 284.52, "could only push the market so far."], [284.52, 286.75, "They needed allies with deep pockets and the exact same hatred for paper currency."], [286.75, 291.49, "So Bunker Hunt boarded an airplane and flew straight to the Middle East."], [291.49, 298.34, "He met with members of the Saudi royal family, including Prince Mohammed bin Fahd."], [298.34, 300.58, "Bunker laid out his theory."], [300.58, 302.93, "He told the Saudis that Western paper currencies were doomed to collapse from runaway inflation,"], [302.93, 308.62, "and that together, they could pool their petrodollars and build an unbeatable position in real silver."], [308.62, 312.83, "The Saudis loved the idea."], [312.83, 315.22, "Together, they formed a secret offshore partnership called the International Metals Investment Company."], [315.22, 320.84, "The trap was set, and the squeeze was about to begin."], [320.84, 324.38, "To understand how the Hunt brothers pulled off their scheme,"], [324.38, 327.44, "you have to understand how commodity futures exchanges actually work."], [327.44, 335.85, "Normally, when big hedge funds or corporations trade silver on exchanges like the Chicago Board of Trade or the New York Commodity Exchange,"], [335.85, 338.36, "nobody actually expects to see a single ounce of real metal."], [338.36, 341.71, "Instead, traders buy futures contracts."], [341.71, 348.23, "A futures contract is simply a legal agreement to buy a certain amount of silver at a specific price on a future date."], [348.23, 353.6, "But when that delivery date arrives, ninety-nine percent of traders do not want heavy silver bars dumped on their front lawn."], [353.6, 360.53, "They simply settle the contract in cash, take their paper profit or loss,"], [360.53, 362.19, "and roll over into the next month."], [362.19, 364.14, "The Hunt brothers, however, had zero interest in paper profits."], [364.14, 368.46, "They did not want paper cash."], [368.46, 368.66, "They wanted the metal."], [368.66, 372.91, "When their contracts expired, the Hunts did something that sent shockwaves through the trading pits."], [372.91, 374.84, "They demanded physical delivery."], [374.84, 378.25, "They told the exchange: do not wire us dollars, bring us our silver."], [378.25, 385.42, "Suddenly, armored trucks began backing up to exchange warehouses across New York and Chicago,"], [385.42, 390.55, "loading up thousands of heavy thirty-two-pound bars of solid silver."], [390.55, 394.2, "But Bunker Hunt was terrified the United States government might try to seize his metal,"], [394.2, 398.71, "just like Roosevelt had seized gold forty years earlier."], [398.71, 401.88, "So he decided to take the silver completely out of the country."], [401.88, 403.26, "In the dead of winter, under the cover of darkness,"], [403.26, 405.76, "Bunker Hunt chartered three Boeing seven hundred and seven cargo jets."], [405.76, 412.45, "He hired a squad of armed Texas ranch hands, dressed in cowboy boots and heavy jackets,"], [412.45, 415.13, "to guard the loading docks."], [415.13, 417.2, "Pallet after pallet of solid silver bullion was loaded onto the planes."], [417.2, 423.23, "The jets took off into the night and flew straight across the Atlantic Ocean,"], [423.23, 424.19, "touching down in Zurich and London."], [424.19, 429.08, "The silver was quietly locked away inside deep Swiss bank vaults."], [429.08, 433.15, "By nineteen seventy-nine, the Hunts and their Saudi partners were not just buying silver with cash."], [433.15, 434.9, "They were using leverage."], [434.9, 440.92, "They would take their physical silver bars, pledge them as collateral to borrow millions of dollars from Wall Street banks,"], [440.92, 446.75, "and then use that borrowed cash to buy even more futures contracts."], [446.75, 450.38, "It was an unstoppable compounding loop."], [450.38, 453.37, "By late nineteen seventy-nine, the Hunt brothers controlled an estimated two hundred million ounces of silver."], [453.37, 459.47, "That was roughly half of all the deliverable silver in the entire Western world."], [459.47, 464.31, "With hundreds of millions of ounces locked away in private vaults,"], [464.31, 467.12, "the open market suddenly experienced an extreme shortage."], [467.12, 472.61, "Industrial companies that desperately needed silver for film, electronics, and medicine could not find enough bars to buy."], [472.61, 476.84, "The price of silver went completely berserk."], [476.84, 479.61, "In January of nineteen seventy-nine, silver was trading around six dollars an ounce."], [479.61, 482.73, "By September, it hit eleven dollars."], [482.73, 484.8, "By December, it blew past twenty-five dollars."], [484.8, 490.9, "And then, in the first two weeks of January nineteen eighty, the market entered full-blown speculative hysteria."], [490.9, 500.64, "On January eighteenth, nineteen eighty, the price of silver touched an all-time record high of fifty dollars and thirty-five cents an ounce."], [500.64, 503.14, "In just one year, the price had skyrocketed by more than seven hundred percent."], [503.14, 509.36, "On paper, Bunker and Herbert Hunt were now sitting on an unrealized profit of several billion dollars."], [509.36, 512.8, "They were, for a few brief weeks, arguably the wealthiest private individuals on Earth."], [512.8, 518.68, "Across the United States, regular citizens went into a state of total mania."], [518.68, 528.83, "People suddenly realized that the dusty antique tea sets sitting in their dining rooms and the silver spoons inherited from their grandparents were worth thousands of dollars."], [528.83, 537.08, "Lines stretched around the block outside jewelry shops, pawn shops, and coin dealers in every major American city."], [537.08, 540.68, "People stood in the freezing winter cold for hours, carrying pillowcases stuffed with silverware,"], [540.68, 546.2, "communion plates, and even silver dental fillings, waiting to have them weighed and paid out in cash."], [546.2, 553.49, "Refineries worked around the clock, melting down irreplaceable nineteenth-century heirlooms into crude silver bricks."], [553.49, 560.11, "Burglars began breaking into suburban homes, ignoring televisions and stereo equipment,"], [560.11, 562.47, "and heading straight for the dining room sideboard to steal the silverware."], [562.47, 571.88, "The iconic luxury jeweler Tiffany and Company was so outraged by the skyrocketing price that their chairman took out a full-page advertisement in The New York Times."], [571.88, 579.73, "The ad publicly blasted the Hunt brothers, calling their actions unconscionable and accusing them of hoarding a vital public resource for private greed."], [579.73, 585.01, "But Bunker Hunt simply laughed off the criticism."], [585.01, 588.39, "When a reporter asked him how it felt to risk his fortune on silver,"], [588.39, 591.83, "Bunker calmly replied that a billion dollars just was not what it used to be."], [591.83, 598.98, "While the Hunt brothers were celebrating their paper billions, panic was sweeping through the executive suites of Wall Street and the commodity exchanges."], [598.98, 607.06, "The leaders of the Chicago Board of Trade and the Commodity Exchange in New York were staring into a financial abyss."], [607.06, 614.33, "Many of the exchange board members and major trading firms were on the short side of the trade,"], [614.33, 617.43, "meaning they had bet that the price of silver would go down."], [617.43, 624.62, "If the Hunts continued demanding physical delivery, there literally was not enough silver on planet Earth to satisfy the contracts."], [624.62, 631.29, "The short sellers would go bankrupt, clearinghouses would fail, and the entire commodities trading system could collapse."], [631.29, 635.38, "So the men in charge decided to do the only thing that could save them."], [635.38, 638.86, "They changed the rules of the game in the middle of the match."], [638.86, 643.08, "First, the exchanges dramatically increased the margin requirements."], [643.08, 650.36, "Previously, an investor only needed to put down a few thousand dollars in cash to control a hundred-thousand-dollar contract of silver."], [650.36, 656.67, "The exchanges suddenly demanded that traders put up tens of thousands of dollars in cash for every single contract."], [656.67, 658.75, "Then came the kill shot."], [658.75, 663.78, "The exchanges enacted a brand-new emergency regulation known as liquidation only."], [663.78, 669.02, "Under this new rule, nobody in the world was allowed to buy new silver futures contracts."], [669.02, 673.08, "You were only allowed to sell existing contracts to close them out."], [673.08, 673.28, "Think about that for a second."], [673.28, 675.52, "Imagine an auction house where buyers are banned from making any bids,"], [675.52, 679.11, "and sellers are only allowed to sell."], [679.11, 683.64, "With buyers legally kicked out of the room, there was only one direction the price could possibly go."], [683.64, 686.8, "To make matters worse, the Federal Reserve stepped in."], [686.8, 694.85, "Chairman Paul Volcker, who was aggressively battling national inflation, issued a direct warning to commercial banks across the country."], [694.85, 698.8, "He told them to immediately stop extending credit and loans for speculative commodity hoarding."], [698.8, 704.24, "Overnight, the Hunt brothers' financial pipeline was completely shut off."], [704.24, 708.69, "They could no longer borrow fresh cash against their silver,"], [708.69, 711.91, "and the market they thought they controlled was suddenly rigged against them."], [711.91, 717.53, "As soon as the new rules took effect, the price of silver began to slide backward."], [717.53, 720.16, "From fifty dollars, it dropped to forty. Then thirty. Then twenty-five."], [720.16, 724.81, "Because the Hunt brothers had built their empire on borrowed money,"], [724.81, 730.07, "every dollar drop in the price of silver triggered an avalanche of margin calls."], [730.07, 738.56, "A margin call is when a broker calls you on the telephone and demands that you deposit millions of dollars in fresh cash immediately to cover your losses."], [738.56, 744.13, "If you cannot produce the cash, the broker has the legal right to sell your assets at any price they can get."], [744.13, 748.18, "For several weeks, the Hunts scrambled."], [748.18, 751.11, "They poured in millions of dollars of their own cash,"], [751.11, 753.81, "sold off family assets, and tried to negotiate new loans."], [753.81, 755.15, "But the decline was relentless."], [755.15, 759.77, "Everything came to a catastrophic head on the morning of March twenty-seventh,"], [759.77, 764.45, "nineteen eighty, a day that financial history will forever remember as Silver Thursday."], [764.45, 777.04, "That morning, the major brokerage firm Bache Halsey Stuart Shields picked up the telephone and issued a massive margin call to the Hunt brothers for one hundred million dollars."], [777.04, 777.24, "The Hunts simply did not have the cash."], [777.24, 783.95, "Bunker Hunt was overseas in Europe trying to arrange emergency financing, but the clock ran out."], [783.95, 785.54, "Bache immediately began liquidating the Hunts' silver positions on the open floor,"], [785.54, 789.97, "dumping millions of ounces onto a market that had zero buyers."], [789.97, 793.41, "The trading pits erupted in absolute pandemonium."], [793.41, 799.25, "The price of silver went into freefall, plunging from twenty-one dollars down to ten dollars and eighty cents in a matter of hours."], [799.25, 810.44, "Rumors spread like wildfire across Wall Street that major brokerage firms were failing and that the Hunt brothers were insolvent."], [810.44, 812.86, "The Dow Jones Industrial Average plunged, and trading in several banking stocks was temporarily halted."], [812.86, 824.58, "Terrified of a systemic banking collapse, Federal Reserve officials and a syndicate of thirteen major commercial banks rushed into emergency meetings."], [824.58, 833.83, "Over the coming weeks, they put together a one-point-one-billion-dollar emergency credit package to bail out the brokerage firms and prevent a domino collapse of the financial system."], [833.83, 835.23, "But in exchange, the banks took total control of the Hunts."], [835.23, 837.82, "The brothers were forced to pledge their vast oil properties,"], [837.82, 842.86, "real estate, ranches, racehorses, and family holdings as collateral."], [842.86, 844.96, "The silver empire had turned into a financial prison."], [844.96, 848.55, "The fallout from the silver squeeze dragged on for nearly a decade."], [848.55, 860.33, "In nineteen eighty-eight, a federal jury found Nelson Bunker Hunt and William Herbert Hunt guilty of civil conspiracy to corner the silver market."], [860.33, 868.63, "The jury ordered the brothers to pay over one hundred and thirty million dollars in damages to a Peruvian state-owned mineral company that had been caught in the crossfire."], [868.63, 873.95, "Faced with astronomical legal bills, bank debts, and penalties from the Internal Revenue Service,"], [873.95, 878.62, "both Bunker and Herbert Hunt were forced to file for Chapter eleven personal bankruptcy."], [878.62, 886.34, "At their bankruptcy hearings, Bunker Hunt sat quietly in a crowded courtroom while auctioneers sold off his prize racehorses,"], [886.34, 889.86, "his father's oil leases, and even his personal coin collections to satisfy creditors."], [889.86, 896.13, "His personal fortune, once estimated to be well over five billion dollars, had almost completely vanished."], [896.13, 905.61, "Decades later, the Hunt brothers' silver gamble stands as one of the most audacious attempts in history to corner a global commodity."], [905.61, 906.62, "They were right about inflation."], [906.62, 909.81, "They were right that industrial demand was outstripping mine supply."], [909.81, 914.22, "And they were right that paper currency loses purchasing power over time."], [914.22, 920.42, "But they forgot the most important rule of high-stakes finance: when the little guy breaks the rules,"], [920.42, 922.45, "he goes to jail."], [922.45, 925.61, "But when the big guy breaks the house, the house simply rewrites the rules."]];

  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));

  // Actors
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);
  const analyst = (ctx, s, base, track) => CC.actor(ctx, s, 'analyst', Object.assign({ s: 1.4, expr: 'shock' }, base), track);
  const reporter = (ctx, s, base, track) => CC.actor(ctx, s, 'reporter', Object.assign({ s: 1.4, expr: 'neutral' }, base), track);
  const judge = (ctx, s, base, track) => CC.actor(ctx, s, 'judge', Object.assign({ s: 1.45, expr: 'angry' }, base), track);

  S(0.21, 3.7, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.city(ctx, FL, PAL.slate, { xs: [150, 380, 1520, 1750] });
    P.bank(ctx, 1280, FL, { s: 1.15, label: 'WALL ST' });
    bunker(ctx, s, { x: 640, y: FL, expr: 'smug' }, [{ at: 0, slideIn: 'left', dur: 0.5 }, { at: 0.8, pose: 'point', expr: 'confident' }]);
    herbert(ctx, s, { x: 440, y: FL, expr: 'happy' }, [{ at: 0.15, slideIn: 'left', dur: 0.5 }, { at: 1.0, pose: 'thumbsUp' }]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.3, { size: 85, rot: -0.02 });
  }, { cam: CC.cam.push(960, 480, 1.18, 0, 3.49), sfx: [[0.1, 'whoosh']] });
  S(3.7, 6.93, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 320, h: 540, col: PAL.slateDk, sign: 'EXCHANGE' });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp', expr: 'grin' }]);
    CC.stamp(ctx, s, 'THE MASTERPLAN', 960, 260, 0.3, { col: PAL.moneyDk, size: 88 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.15), sfx: [[0.15, 'stamp']] });
  S(6.93, 9.56, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.2, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.2, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.4, { col: PAL.red, size: 95 });
    });
    bunker(ctx, s, { x: 420, y: FL, pose: 'shrug', expr: 'disappointed' }, [{ at: 0.6, expr: 'shock', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.25, 0.2), sfx: [[0.2, 'stamp']] });
  S(9.56, 11.98, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 12, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 200, s.lt, 0.2, { size: 90, col: PAL.red });
  }, { cam: CC.cam.zoom(1.1), sfx: [[0.1, 'whoosh']] });
  S(11.98, 15.43, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 400 }, c => {
      CC.rect(c, -220, -140, 440, 140, PAL.grey, 8, 14);
      CC.text(c, 'SILVER .999', 0, -70, 52, PAL.white, { font: 'PMarker' });
    });
    bunker(ctx, s, { x: 1450, y: FL, expr: 'greedy' }, [{ at: 0.3, pose: 'point', expr: 'smug' }]);
  }, { cam: CC.cam.punch(960, FL - 70, 1.25, 0.1), sfx: [[0.1, 'thud']] });
  S(15.43, 18.62, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    P.coinStack(ctx, 720, FL, { n: 7, r: 60 });
    P.coinStack(ctx, 1200, FL, { n: 7, r: 60 });
    bunker(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'REAL TANGIBLE ASSET', 960, 240, 0.3, { col: PAL.gold, size: 75 });
  }, { cam: CC.cam.push(960, 480, 1.2, 0, 3.19), sfx: [[0.2, 'clink']] });
  S(18.62, 20.05, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THEY DID NOT JUST BUY A LI", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.43), sfx: [[0.15, 'whoosh']] });
  S(20.05, 24.58, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.charcoal });
    CC.globeSpin(ctx, s, 960, 500, { r: 250 });
    CC.callout(ctx, '1/3 OF ALL SILVER', 960, 180, s.lt, 0.2, { size: 92, rot: 0.02 });
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(24.58, 28.76, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.jar(ctx, 960, FL, { w: 320, h: 420, fill: 0.33, label: '1/3 OF EARTH' });
    bunker(ctx, s, { x: 480, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'point' }]);
    herbert(ctx, s, { x: 1440, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.2), sfx: [[0.2, 'pop']] });
  S(28.76, 30.89, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.3, 0.2], [0.6, 0.5], [0.9, 0.98]], CC.prog(CC.q(s.lt), 0.1, 0.8), { col: PAL.greenDk, lw: 10 });
    CC.stamp(ctx, s, '+700%', 1250, 360, 0.5, { col: PAL.red, size: 120 });
  }, { cam: CC.cam.punch(1250, 360, 1.35, 0.5), sfx: [[0.5, 'stamp']] });
  S(30.89, 33.77, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'grandma', { x: 620, y: FL, expr: 'shock' }, [{ at: 0, slideIn: 'left', dur: 0.4 }, { at: 0.5, pose: 'give', expr: 'happy' }]);
    CC.actor(ctx, s, 'worker', { x: 1300, y: FL, pose: 'hold', expr: 'neutral' }, [{ at: 0.4, pose: 'carry' }]);
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.2, in: 'pop' }, c => P.jar(c, 0, 0, { w: 280, h: 340, fill: 0.85, label: 'MELTING' }));
  }, { cam: CC.cam.punch(960, 480, 1.2, 0.2), sfx: [[0.2, 'pop']] });
  S(33.77, 36.43, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    CC.callout(ctx, 'STREET CORNER MELTDOWNS', 960, 220, s.lt, 0.2, { size: 76 });
    P.coinStack(ctx, 960, FL, { n: 8, r: 65 });
  }, { cam: CC.cam.zoom(1.1), sfx: [[0.1, 'clink']] });
  S(36.43, 38.54, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND THEN, JUST WHEN THEY THOUG", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.11), sfx: [[0.15, 'whoosh']] });
  S(38.54, 40.49, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND THEN, JUST WHEN THEY THOUG", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(40.49, 42.83, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 550 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 460, 0.2, { col: PAL.red, size: 95 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [{ at: 0.3, collapse: 'left', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.35, 0.2), sfx: [[0.2, 'stamp']] });
  S(42.83, 44.53, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 550 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 460, 0.2, { col: PAL.red, size: 95 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [{ at: 0.3, collapse: 'left', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.35, 0.2), sfx: [[0.2, 'stamp']] });
  S(44.53, 46.09, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    judge(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'angry' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'THE HOUSE WINS', 960, 240, 0.3, { col: PAL.white, size: 85 });
  }, { cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  /* CH 1 */ S(46.09, 50.57, (ctx, s) => CC.chapter(ctx, s, "The Gambler's Sons", { kicker: "CHAPTER ONE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(50.57, 53.5, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HIS NAME WAS HAROLDSON LAFAYET", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.93), sfx: [[0.15, 'whoosh']] });
  S(53.5, 56.21, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HIS NAME WAS HAROLDSON LAFAYET", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(56.21, 59.13, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IN THE NINETEEN THIRTIES, H.L.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.92), sfx: [[0.15, 'whoosh']] });
  S(59.13, 61.39, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "WAS QUITE LITERALLY THE RICHES", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.26), sfx: [[0.15, 'whoosh']] });
  S(61.39, 64.19, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.desk(ctx, 960, FL + 20, { s: 1.4 });
    hl_hunt(ctx, s, { x: 680, y: FL, pose: 'hold', expr: 'smug' }, [{ at: 0.3, pose: 'present', expr: 'grin' }]);
    CC.actor(ctx, s, 'crook', { x: 1240, y: FL, pose: 'face', expr: 'shock' }, [{ at: 0.5, pose: 'shrug', fx: 'sweat' }]);
  }, { cam: CC.cam.push(680, FL - 200, 1.2, 0, 2.80), sfx: [[0.1, 'whoosh']] });
  S(64.19, 66.77, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.document(ctx, 960, 480, { s: 1.8, title: 'EAST TEXAS OIL LEASE' });
    CC.stamp(ctx, s, 'WON IN POKER', 960, 480, 0.3, { col: PAL.red, size: 82 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(66.77, 69.58, (ctx, s) => {
    CC.bg(ctx, PAL.wood, { floor: FL, floorCol: PAL.brown });
    P.desk(ctx, 960, FL + 20, { s: 1.4 });
    hl_hunt(ctx, s, { x: 680, y: FL, pose: 'hold', expr: 'smug' }, [{ at: 0.3, pose: 'present', expr: 'grin' }]);
    CC.actor(ctx, s, 'crook', { x: 1240, y: FL, pose: 'face', expr: 'shock' }, [{ at: 0.5, pose: 'shrug', fx: 'sweat' }]);
  }, { cam: CC.cam.push(680, FL - 200, 1.2, 0, 2.81), sfx: [[0.1, 'whoosh']] });
  S(69.58, 72.18, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.document(ctx, 960, 480, { s: 1.8, title: 'EAST TEXAS OIL LEASE' });
    CC.stamp(ctx, s, 'WON IN POKER', 960, 480, 0.3, { col: PAL.red, size: 82 });
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(72.18, 76.63, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE TOOK THAT LEASE, TRADED IT ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.45), sfx: [[0.15, 'whoosh']] });
  S(76.63, 80.74, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE TOOK THAT LEASE, TRADED IT ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(80.74, 82.41, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HUNT WAS BRILLIANT, COMPLETELY", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.67), sfx: [[0.15, 'whoosh']] });
  S(82.41, 84.34, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE CARRIED HIS LUNCH IN A BROW", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.93), sfx: [[0.15, 'whoosh']] });
  S(84.34, 86.12, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE CARRIED HIS LUNCH IN A BROW", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(86.12, 90.14, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND FIRMLY BELIEVED THAT PAPER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.02), sfx: [[0.15, 'whoosh']] });
  S(90.14, 93.86, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND FIRMLY BELIEVED THAT PAPER", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(93.86, 96.95, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "WHEN HE DIED IN NINETEEN SEVEN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.09), sfx: [[0.15, 'whoosh']] });
  S(96.95, 99.95, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "STANDING RIGHT AT THE HEAD OF ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.00), sfx: [[0.15, 'whoosh']] });
  S(99.95, 102.71, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "STANDING RIGHT AT THE HEAD OF ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(102.71, 104.8, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "NELSON BUNKER HUNT, ALONGSIDE ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.09), sfx: [[0.15, 'whoosh']] });
  S(104.8, 106.73, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "NELSON BUNKER HUNT, ALONGSIDE ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(106.73, 111.92, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER HUNT WAS A MASSIVE, QUI", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.19), sfx: [[0.15, 'whoosh']] });
  S(111.92, 116.72, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUNKER HUNT WAS A MASSIVE, QUI", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(116.72, 118.97, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT UNDERNEATH THAT CALM TEXAS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.25), sfx: [[0.15, 'whoosh']] });
  S(118.97, 121.04, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT UNDERNEATH THAT CALM TEXAS", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(121.04, 123.8, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER INHERITED A PERSONAL FO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.76), sfx: [[0.15, 'whoosh']] });
  S(123.8, 126.34, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUNKER INHERITED A PERSONAL FO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(126.34, 128.43, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT IN NINETEEN SEVENTY-THREE,", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.09), sfx: [[0.15, 'whoosh']] });
  S(128.43, 130.35, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT IN NINETEEN SEVENTY-THREE,", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(130.35, 131.93, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [{ at: 0.4, collapse: 'left', fx: 'sweat' }]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [{ at: 0, slideIn: 'right', dur: 0.4 }]);
  }, { cam: CC.cam.punch(920, FL - 200, 1.25, 0.1), sfx: [[0.1, 'whoosh']] });
  S(131.93, 134.79, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [{ at: 0.4, collapse: 'left', fx: 'sweat' }]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [{ at: 0, slideIn: 'right', dur: 0.4 }]);
  }, { cam: CC.cam.punch(920, FL - 200, 1.25, 0.1), sfx: [[0.1, 'whoosh']] });
  S(134.79, 137.09, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [{ at: 0.4, collapse: 'left', fx: 'sweat' }]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [{ at: 0, slideIn: 'right', dur: 0.4 }]);
  }, { cam: CC.cam.punch(920, FL - 200, 1.25, 0.1), sfx: [[0.1, 'whoosh']] });
  S(137.09, 139.22, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.stamp(ctx, s, 'NATIONALIZED: $0', 960, 450, 0.2, { col: PAL.red, size: 95 });
    bunker(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'furious' }, [{ at: 0.2, pose: 'slump', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 450, 1.3, 0.2), sfx: [[0.2, 'thud']] });
  S(139.22, 140.94, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL, floorCol: PAL.tan });
    P.skyscraper(ctx, 1300, FL, { w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' });
    bunker(ctx, s, { x: 500, y: FL, pose: 'cross', expr: 'shock' }, [{ at: 0.4, collapse: 'left', fx: 'sweat' }]);
    CC.actor(ctx, s, 'cop', { x: 920, y: FL, pose: 'point', expr: 'angry' }, [{ at: 0, slideIn: 'right', dur: 0.4 }]);
  }, { cam: CC.cam.punch(920, FL - 200, 1.25, 0.1), sfx: [[0.1, 'whoosh']] });
  S(140.94, 142.52, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.stamp(ctx, s, 'NATIONALIZED: $0', 960, 450, 0.2, { col: PAL.red, size: 95 });
    bunker(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'furious' }, [{ at: 0.2, pose: 'slump', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 450, 1.3, 0.2), sfx: [[0.2, 'thud']] });
  S(142.52, 145.0, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE REALIZED THAT A GOVERNMENT ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.48), sfx: [[0.15, 'whoosh']] });
  S(145.0, 147.29, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE REALIZED THAT A GOVERNMENT ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(147.29, 150.14, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AT THE EXACT SAME TIME, BACK H", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.85), sfx: [[0.15, 'whoosh']] });
  S(150.14, 152.77, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AT THE EXACT SAME TIME, BACK H", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(152.77, 155.24, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PRESIDENT RICHARD NIXON HAD JU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.47), sfx: [[0.15, 'whoosh']] });
  S(155.24, 157.52, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "PRESIDENT RICHARD NIXON HAD JU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(157.52, 161.07, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PRICES FOR BREAD, MILK, AND GA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.55), sfx: [[0.15, 'whoosh']] });
  S(161.07, 164.34, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "PRICES FOR BREAD, MILK, AND GA", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(164.34, 167.77, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER TURNED TO HIS BROTHER H", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.43), sfx: [[0.15, 'whoosh']] });
  S(167.77, 170.93, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUNKER TURNED TO HIS BROTHER H", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(170.93, 173.04, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WERE GOING TO END UP BROK", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.11), sfx: [[0.15, 'whoosh']] });
  S(173.04, 174.18, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY NEEDED SOMETHING REAL.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.14), sfx: [[0.15, 'whoosh']] });
  /* CH 2 */ S(174.18, 177.27, (ctx, s) => CC.chapter(ctx, s, "The Shiny Metal Loophole", { kicker: "CHAPTER TWO", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(177.27, 179.35, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "GOLD HAD BEEN THE ULTIMATE STO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.08), sfx: [[0.15, 'whoosh']] });
  S(179.35, 181.27, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "GOLD HAD BEEN THE ULTIMATE STO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(181.27, 184.3, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THERE WAS A GIGANTIC LEGAL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.03), sfx: [[0.15, 'whoosh']] });
  S(184.3, 186.78, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "EVER SINCE PRESIDENT FRANKLIN ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.48), sfx: [[0.15, 'whoosh']] });
  S(186.78, 189.07, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "EVER SINCE PRESIDENT FRANKLIN ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(189.07, 191.3, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IT WAS STRICTLY ILLEGAL FOR PR", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.23), sfx: [[0.15, 'whoosh']] });
  S(191.3, 193.36, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IT WAS STRICTLY ILLEGAL FOR PR", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(193.36, 195.85, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE GOVERNMENT WOULD THROW YOU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.49), sfx: [[0.15, 'whoosh']] });
  S(195.85, 198.15, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE GOVERNMENT WOULD THROW YOU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(198.15, 200.01, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SO BUNKER AND HERBERT BEGAN LO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.86), sfx: [[0.15, 'whoosh']] });
  S(200.01, 201.72, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "SO BUNKER AND HERBERT BEGAN LO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(201.72, 203.99, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND SITTING RIGHT IN PLAIN SIG", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.27), sfx: [[0.15, 'whoosh']] });
  S(203.99, 206.08, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND SITTING RIGHT IN PLAIN SIG", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(206.08, 208.47, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SILVER WAS COMPLETELY LEGAL FO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.39), sfx: [[0.15, 'whoosh']] });
  S(208.47, 210.68, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "SILVER WAS COMPLETELY LEGAL FO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(210.68, 211.86, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "EVEN BETTER, IT WAS SHOCKINGLY", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.18), sfx: [[0.15, 'whoosh']] });
  S(211.86, 215.68, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THROUGHOUT THE EARLY NINETEEN ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.82), sfx: [[0.15, 'whoosh']] });
  S(215.68, 219.21, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THROUGHOUT THE EARLY NINETEEN ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(219.21, 221.0, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT BUNKER HUNT WAS NOT JUST L", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.79), sfx: [[0.15, 'whoosh']] });
  S(221.0, 222.66, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT BUNKER HUNT WAS NOT JUST L", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(222.66, 225.34, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE STARTED STUDYING THE GLOBAL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.68), sfx: [[0.15, 'whoosh']] });
  S(225.34, 229.03, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BACK THEN, THE WORLD WAS CONSU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.69), sfx: [[0.15, 'whoosh']] });
  S(229.03, 232.44, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BACK THEN, THE WORLD WAS CONSU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(232.44, 237.3, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE PHOTOGRAPHIC GIANT EASTMAN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.86), sfx: [[0.15, 'whoosh']] });
  S(237.3, 241.79, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE PHOTOGRAPHIC GIANT EASTMAN", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(241.79, 242.96, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "ELECTRONICS MANUFACTURERS NEED", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.17), sfx: [[0.15, 'whoosh']] });
  S(242.96, 246.16, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "MEDICAL COMPANIES NEEDED SILVE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.20), sfx: [[0.15, 'whoosh']] });
  S(246.16, 249.74, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE GAP BETWEEN SUPPLY AND DEM", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.58), sfx: [[0.15, 'whoosh']] });
  S(249.74, 253.05, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE GAP BETWEEN SUPPLY AND DEM", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(253.05, 254.77, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THOSE GOVERNMENT RESERVES ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.72), sfx: [[0.15, 'whoosh']] });
  S(254.77, 256.36, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT THOSE GOVERNMENT RESERVES ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(256.36, 259.46, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER HUNT RAN THE NUMBERS AN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.10), sfx: [[0.15, 'whoosh']] });
  S(259.46, 261.55, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IF SOMEONE WITH ENOUGH CASH ST", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.09), sfx: [[0.15, 'whoosh']] });
  S(261.55, 263.47, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IF SOMEONE WITH ENOUGH CASH ST", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(263.47, 265.62, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE ENTIRE GLOBAL INDUSTRIAL M", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.15), sfx: [[0.15, 'whoosh']] });
  S(265.62, 267.61, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE ENTIRE GLOBAL INDUSTRIAL M", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(267.61, 270.68, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IN NINETEEN SEVENTY-THREE, THE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.07), sfx: [[0.15, 'whoosh']] });
  S(270.68, 273.52, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IN NINETEEN SEVENTY-THREE, THE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(273.52, 276.13, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY QUIETLY PURCHASED TWENTY ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.61), sfx: [[0.15, 'whoosh']] });
  S(276.13, 278.54, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY QUIETLY PURCHASED TWENTY ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(278.54, 281.18, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THE BROTHERS KNEW THEIR OW", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.64), sfx: [[0.15, 'whoosh']] });
  S(281.18, 282.92, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "COULD ONLY PUSH THE MARKET SO ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.74), sfx: [[0.15, 'whoosh']] });
  S(282.92, 284.52, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "COULD ONLY PUSH THE MARKET SO ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(284.52, 286.75, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY NEEDED ALLIES WITH DEEP P", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.23), sfx: [[0.15, 'whoosh']] });
  S(286.75, 289.21, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SO BUNKER HUNT BOARDED AN AIRP", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.46), sfx: [[0.15, 'whoosh']] });
  S(289.21, 291.49, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "SO BUNKER HUNT BOARDED AN AIRP", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(291.49, 295.05, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE MET WITH MEMBERS OF THE SAU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.56), sfx: [[0.15, 'whoosh']] });
  S(295.05, 298.34, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE MET WITH MEMBERS OF THE SAU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(298.34, 300.58, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER LAID OUT HIS THEORY.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.24), sfx: [[0.15, 'whoosh']] });
  S(300.58, 302.93, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE TOLD THE SAUDIS THAT WESTER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.35), sfx: [[0.15, 'whoosh']] });
  S(302.93, 305.89, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND THAT TOGETHER, THEY COULD ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.96), sfx: [[0.15, 'whoosh']] });
  S(305.89, 308.62, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND THAT TOGETHER, THEY COULD ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(308.62, 310.81, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE SAUDIS LOVED THE IDEA.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.19), sfx: [[0.15, 'whoosh']] });
  S(310.81, 312.83, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE SAUDIS LOVED THE IDEA.", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(312.83, 315.22, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "TOGETHER, THEY FORMED A SECRET", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.39), sfx: [[0.15, 'whoosh']] });
  S(315.22, 318.14, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE TRAP WAS SET, AND THE SQUE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.92), sfx: [[0.15, 'whoosh']] });
  S(318.14, 320.84, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE TRAP WAS SET, AND THE SQUE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(320.84, 322.68, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "TO UNDERSTAND HOW THE HUNT BRO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.84), sfx: [[0.15, 'whoosh']] });
  S(322.68, 324.38, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "TO UNDERSTAND HOW THE HUNT BRO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  /* CH 3 */ S(324.38, 327.44, (ctx, s) => CC.chapter(ctx, s, "The Midnight Airlift", { kicker: "CHAPTER THREE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(327.44, 331.81, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "NORMALLY, WHEN BIG HEDGE FUNDS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.37), sfx: [[0.15, 'whoosh']] });
  S(331.81, 335.85, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "NORMALLY, WHEN BIG HEDGE FUNDS", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(335.85, 338.36, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "NOBODY ACTUALLY EXPECTS TO SEE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.51), sfx: [[0.15, 'whoosh']] });
  S(338.36, 340.1, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "INSTEAD, TRADERS BUY FUTURES C", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.74), sfx: [[0.15, 'whoosh']] });
  S(340.1, 341.71, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "INSTEAD, TRADERS BUY FUTURES C", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(341.71, 345.1, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "A FUTURES CONTRACT IS SIMPLY A", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.39), sfx: [[0.15, 'whoosh']] });
  S(345.1, 348.23, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "A FUTURES CONTRACT IS SIMPLY A", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(348.23, 351.02, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT WHEN THAT DELIVERY DATE AR", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.79), sfx: [[0.15, 'whoosh']] });
  S(351.02, 353.6, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT WHEN THAT DELIVERY DATE AR", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(353.6, 357.2, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY SIMPLY SETTLE THE CONTRAC", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.60), sfx: [[0.15, 'whoosh']] });
  S(357.2, 360.53, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY SIMPLY SETTLE THE CONTRAC", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(360.53, 362.19, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND ROLL OVER INTO THE NEXT MO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.66), sfx: [[0.15, 'whoosh']] });
  S(362.19, 364.14, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE HUNT BROTHERS, HOWEVER, HA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.95), sfx: [[0.15, 'whoosh']] });
  S(364.14, 366.39, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY DID NOT WANT PAPER CASH.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.25), sfx: [[0.15, 'whoosh']] });
  S(366.39, 368.46, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY DID NOT WANT PAPER CASH.", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(368.46, 368.66, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WANTED THE METAL.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 0.20), sfx: [[0.15, 'whoosh']] });
  S(368.66, 370.87, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "WHEN THEIR CONTRACTS EXPIRED, ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.21), sfx: [[0.15, 'whoosh']] });
  S(370.87, 372.91, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "WHEN THEIR CONTRACTS EXPIRED, ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(372.91, 374.84, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY DEMANDED PHYSICAL DELIVER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.93), sfx: [[0.15, 'whoosh']] });
  S(374.84, 376.61, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY TOLD THE EXCHANGE: DO NOT", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.77), sfx: [[0.15, 'whoosh']] });
  S(376.61, 378.25, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY TOLD THE EXCHANGE: DO NOT", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(378.25, 381.98, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SUDDENLY, ARMORED TRUCKS BEGAN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.73), sfx: [[0.15, 'whoosh']] });
  S(381.98, 385.42, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "SUDDENLY, ARMORED TRUCKS BEGAN", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(385.42, 388.09, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "LOADING UP THOUSANDS OF HEAVY ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.67), sfx: [[0.15, 'whoosh']] });
  S(388.09, 390.55, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "LOADING UP THOUSANDS OF HEAVY ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(390.55, 392.45, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT BUNKER HUNT WAS TERRIFIED ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.90), sfx: [[0.15, 'whoosh']] });
  S(392.45, 394.2, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT BUNKER HUNT WAS TERRIFIED ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(394.2, 396.55, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "JUST LIKE ROOSEVELT HAD SEIZED", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.35), sfx: [[0.15, 'whoosh']] });
  S(396.55, 398.71, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "JUST LIKE ROOSEVELT HAD SEIZED", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(398.71, 401.88, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SO HE DECIDED TO TAKE THE SILV", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.17), sfx: [[0.15, 'whoosh']] });
  S(401.88, 403.26, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IN THE DEAD OF WINTER, UNDER T", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.38), sfx: [[0.15, 'whoosh']] });
  S(403.26, 405.76, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.obj(ctx, s, { x: 1000, y: 400, at: 0.1, in: 'slide-right', from: -400 }, c => {
      CC.rect(c, -340, -100, 680, 200, PAL.grey, 8, 18);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 54, PAL.white, { font: 'PMarker' });
    });
    CC.actor(ctx, s, 'worker', { x: 420, y: FL, hat: 'cap', expr: 'neutral' }, [{ at: 0.3, pose: 'carry' }]);
  }, { cam: CC.cam.zoom(1.15), sfx: [[0.1, 'whoosh']] });
  S(405.76, 409.24, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE HIRED A SQUAD OF ARMED TEXA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.48), sfx: [[0.15, 'whoosh']] });
  S(409.24, 412.45, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE HIRED A SQUAD OF ARMED TEXA", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(412.45, 415.13, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "TO GUARD THE LOADING DOCKS.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.68), sfx: [[0.15, 'whoosh']] });
  S(415.13, 417.2, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PALLET AFTER PALLET OF SOLID S", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.07), sfx: [[0.15, 'whoosh']] });
  S(417.2, 420.34, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE JETS TOOK OFF INTO THE NIG", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.14), sfx: [[0.15, 'whoosh']] });
  S(420.34, 423.23, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE JETS TOOK OFF INTO THE NIG", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(423.23, 424.19, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.obj(ctx, s, { x: 1000, y: 400, at: 0.1, in: 'slide-right', from: -400 }, c => {
      CC.rect(c, -340, -100, 680, 200, PAL.grey, 8, 18);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 54, PAL.white, { font: 'PMarker' });
    });
    CC.actor(ctx, s, 'worker', { x: 420, y: FL, hat: 'cap', expr: 'neutral' }, [{ at: 0.3, pose: 'carry' }]);
  }, { cam: CC.cam.zoom(1.15), sfx: [[0.1, 'whoosh']] });
  S(424.19, 426.73, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL, floorCol: PAL.slateDk });
    CC.obj(ctx, s, { x: 1000, y: 400, at: 0.1, in: 'slide-right', from: -400 }, c => {
      CC.rect(c, -340, -100, 680, 200, PAL.grey, 8, 18);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 54, PAL.white, { font: 'PMarker' });
    });
    CC.actor(ctx, s, 'worker', { x: 420, y: FL, hat: 'cap', expr: 'neutral' }, [{ at: 0.3, pose: 'carry' }]);
  }, { cam: CC.cam.zoom(1.15), sfx: [[0.1, 'whoosh']] });
  S(426.73, 429.08, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'SWISS VAULT' });
    CC.stamp(ctx, s, 'ZURICH SECURED', 960, 260, 0.3, { col: PAL.gold, size: 85 });
  }, { cam: CC.cam.punch(960, 260, 1.3, 0.3), sfx: [[0.3, 'stamp']] });
  S(429.08, 431.2, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BY NINETEEN SEVENTY-NINE, THE ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.12), sfx: [[0.15, 'whoosh']] });
  S(431.2, 433.15, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BY NINETEEN SEVENTY-NINE, THE ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(433.15, 434.9, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WERE USING LEVERAGE.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.75), sfx: [[0.15, 'whoosh']] });
  S(434.9, 438.03, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WOULD TAKE THEIR PHYSICAL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.13), sfx: [[0.15, 'whoosh']] });
  S(438.03, 440.92, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY WOULD TAKE THEIR PHYSICAL", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(440.92, 443.95, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND THEN USE THAT BORROWED CAS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.03), sfx: [[0.15, 'whoosh']] });
  S(443.95, 446.75, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND THEN USE THAT BORROWED CAS", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(446.75, 448.64, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IT WAS AN UNSTOPPABLE COMPOUND", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.89), sfx: [[0.15, 'whoosh']] });
  S(448.64, 450.38, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IT WAS AN UNSTOPPABLE COMPOUND", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(450.38, 453.37, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BY LATE NINETEEN SEVENTY-NINE,", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.99), sfx: [[0.15, 'whoosh']] });
  S(453.37, 456.54, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THAT WAS ROUGHLY HALF OF ALL T", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.17), sfx: [[0.15, 'whoosh']] });
  S(456.54, 459.47, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THAT WAS ROUGHLY HALF OF ALL T", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  /* CH 4 */ S(459.47, 464.31, (ctx, s) => CC.chapter(ctx, s, "The Silver Fever of 1980", { kicker: "CHAPTER FOUR", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(464.31, 467.12, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE OPEN MARKET SUDDENLY EXPER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.81), sfx: [[0.15, 'whoosh']] });
  S(467.12, 469.97, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "INDUSTRIAL COMPANIES THAT DESP", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.85), sfx: [[0.15, 'whoosh']] });
  S(469.97, 472.61, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "INDUSTRIAL COMPANIES THAT DESP", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(472.61, 474.81, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE PRICE OF SILVER WENT COMPL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.20), sfx: [[0.15, 'whoosh']] });
  S(474.81, 476.84, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE PRICE OF SILVER WENT COMPL", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(476.84, 479.61, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IN JANUARY OF NINETEEN SEVENTY", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.77), sfx: [[0.15, 'whoosh']] });
  S(479.61, 482.73, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BY SEPTEMBER, IT HIT ELEVEN DO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.12), sfx: [[0.15, 'whoosh']] });
  S(482.73, 484.8, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BY DECEMBER, IT BLEW PAST TWEN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.07), sfx: [[0.15, 'whoosh']] });
  S(484.8, 487.97, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 135, PAL.moneyDk, s.lt, 0.15);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [{ at: 0.2, pose: 'cheer', expr: 'grin' }]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.4, { size: 75 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.3), sfx: [[0.3, 'ding']] });
  S(487.97, 490.9, (ctx, s) => {
    CC.bg(ctx, PAL.gold, { floor: FL });
    CC.rain(ctx, s, 'coin', { n: 16, speed: 500 });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'PEAK BILLIONS', 960, 250, 0.3, { col: PAL.red, size: 90 });
  }, { cam: CC.cam.zoom(1.15), sfx: [[0.1, 'clink']] });
  S(490.9, 495.96, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 135, PAL.moneyDk, s.lt, 0.15);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [{ at: 0.2, pose: 'cheer', expr: 'grin' }]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.4, { size: 75 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.3), sfx: [[0.3, 'ding']] });
  S(495.96, 500.64, (ctx, s) => {
    CC.bg(ctx, PAL.gold, { floor: FL });
    CC.rain(ctx, s, 'coin', { n: 16, speed: 500 });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'PEAK BILLIONS', 960, 250, 0.3, { col: PAL.red, size: 90 });
  }, { cam: CC.cam.zoom(1.15), sfx: [[0.1, 'clink']] });
  S(500.64, 503.14, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.3, 0.2], [0.6, 0.5], [0.9, 0.98]], CC.prog(CC.q(s.lt), 0.1, 0.8), { col: PAL.greenDk, lw: 10 });
    CC.stamp(ctx, s, '+700%', 1250, 360, 0.5, { col: PAL.red, size: 120 });
  }, { cam: CC.cam.punch(1250, 360, 1.35, 0.5), sfx: [[0.5, 'stamp']] });
  S(503.14, 506.37, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "ON PAPER, BUNKER AND HERBERT H", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.23), sfx: [[0.15, 'whoosh']] });
  S(506.37, 509.36, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "ON PAPER, BUNKER AND HERBERT H", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(509.36, 511.15, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WERE, FOR A FEW BRIEF WEE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.79), sfx: [[0.15, 'whoosh']] });
  S(511.15, 512.8, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY WERE, FOR A FEW BRIEF WEE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(512.8, 515.86, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "ACROSS THE UNITED STATES, REGU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.06), sfx: [[0.15, 'whoosh']] });
  S(515.86, 518.68, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "ACROSS THE UNITED STATES, REGU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(518.68, 523.96, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PEOPLE SUDDENLY REALIZED THAT ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.28), sfx: [[0.15, 'whoosh']] });
  S(523.96, 528.83, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "PEOPLE SUDDENLY REALIZED THAT ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(528.83, 533.12, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "LINES STRETCHED AROUND THE BLO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.29), sfx: [[0.15, 'whoosh']] });
  S(533.12, 537.08, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "LINES STRETCHED AROUND THE BLO", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(537.08, 538.95, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PEOPLE STOOD IN THE FREEZING W", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.87), sfx: [[0.15, 'whoosh']] });
  S(538.95, 540.68, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "PEOPLE STOOD IN THE FREEZING W", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(540.68, 543.55, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "COMMUNION PLATES, AND EVEN SIL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.87), sfx: [[0.15, 'whoosh']] });
  S(543.55, 546.2, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "COMMUNION PLATES, AND EVEN SIL", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(546.2, 549.99, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "REFINERIES WORKED AROUND THE C", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.79), sfx: [[0.15, 'whoosh']] });
  S(549.99, 553.49, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "REFINERIES WORKED AROUND THE C", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(553.49, 556.93, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BURGLARS BEGAN BREAKING INTO S", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.44), sfx: [[0.15, 'whoosh']] });
  S(556.93, 560.11, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BURGLARS BEGAN BREAKING INTO S", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(560.11, 562.47, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND HEADING STRAIGHT FOR THE D", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.36), sfx: [[0.15, 'whoosh']] });
  S(562.47, 567.36, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE ICONIC LUXURY JEWELER TIFF", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.89), sfx: [[0.15, 'whoosh']] });
  S(567.36, 571.88, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE ICONIC LUXURY JEWELER TIFF", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(571.88, 575.96, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE AD PUBLICLY BLASTED THE HU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.08), sfx: [[0.15, 'whoosh']] });
  S(575.96, 579.73, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE AD PUBLICLY BLASTED THE HU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(579.73, 582.48, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT BUNKER HUNT SIMPLY LAUGHED", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.75), sfx: [[0.15, 'whoosh']] });
  S(582.48, 585.01, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT BUNKER HUNT SIMPLY LAUGHED", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(585.01, 586.77, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "WHEN A REPORTER ASKED HIM HOW ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.76), sfx: [[0.15, 'whoosh']] });
  S(586.77, 588.39, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "WHEN A REPORTER ASKED HIM HOW ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(588.39, 590.18, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER CALMLY REPLIED THAT A B", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.79), sfx: [[0.15, 'whoosh']] });
  S(590.18, 591.83, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUNKER CALMLY REPLIED THAT A B", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  /* CH 5 */ S(591.83, 598.98, (ctx, s) => CC.chapter(ctx, s, "Changing the Rules", { kicker: "CHAPTER FIVE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(598.98, 603.18, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE LEADERS OF THE CHICAGO BOA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.20), sfx: [[0.15, 'whoosh']] });
  S(603.18, 607.06, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE LEADERS OF THE CHICAGO BOA", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(607.06, 610.84, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "MANY OF THE EXCHANGE BOARD MEM", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.78), sfx: [[0.15, 'whoosh']] });
  S(610.84, 614.33, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "MANY OF THE EXCHANGE BOARD MEM", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(614.33, 617.43, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "MEANING THEY HAD BET THAT THE ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.10), sfx: [[0.15, 'whoosh']] });
  S(617.43, 621.17, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IF THE HUNTS CONTINUED DEMANDI", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.74), sfx: [[0.15, 'whoosh']] });
  S(621.17, 624.62, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IF THE HUNTS CONTINUED DEMANDI", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(624.62, 628.09, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE SHORT SELLERS WOULD GO BAN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.47), sfx: [[0.15, 'whoosh']] });
  S(628.09, 631.29, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE SHORT SELLERS WOULD GO BAN", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(631.29, 633.42, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SO THE MEN IN CHARGE DECIDED T", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.13), sfx: [[0.15, 'whoosh']] });
  S(633.42, 635.38, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "SO THE MEN IN CHARGE DECIDED T", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(635.38, 637.19, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 550 });
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 460, 0.2, { col: PAL.red, size: 95 });
    bunker(ctx, s, { x: 450, y: FL, expr: 'shock' }, [{ at: 0.3, collapse: 'left', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.35, 0.2), sfx: [[0.2, 'stamp']] });
  S(637.19, 638.86, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    judge(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'angry' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'THE HOUSE WINS', 960, 240, 0.3, { col: PAL.white, size: 85 });
  }, { cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(638.86, 641.05, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "FIRST, THE EXCHANGES DRAMATICA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.19), sfx: [[0.15, 'whoosh']] });
  S(641.05, 643.08, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "FIRST, THE EXCHANGES DRAMATICA", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(643.08, 646.87, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "PREVIOUSLY, AN INVESTOR ONLY N", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.79), sfx: [[0.15, 'whoosh']] });
  S(646.87, 650.36, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "PREVIOUSLY, AN INVESTOR ONLY N", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(650.36, 653.64, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE EXCHANGES SUDDENLY DEMANDE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.28), sfx: [[0.15, 'whoosh']] });
  S(653.64, 656.67, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE EXCHANGES SUDDENLY DEMANDE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(656.67, 658.75, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEN CAME THE KILL SHOT.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.08), sfx: [[0.15, 'whoosh']] });
  S(658.75, 661.37, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE EXCHANGES ENACTED A BRAND-", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.62), sfx: [[0.15, 'whoosh']] });
  S(661.37, 663.78, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE EXCHANGES ENACTED A BRAND-", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(663.78, 666.5, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "UNDER THIS NEW RULE, NOBODY IN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.72), sfx: [[0.15, 'whoosh']] });
  S(666.5, 669.02, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "UNDER THIS NEW RULE, NOBODY IN", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(669.02, 671.13, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "YOU WERE ONLY ALLOWED TO SELL ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.11), sfx: [[0.15, 'whoosh']] });
  S(671.13, 673.08, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "YOU WERE ONLY ALLOWED TO SELL ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(673.08, 673.28, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THINK ABOUT THAT FOR A SECOND.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 0.20), sfx: [[0.15, 'whoosh']] });
  S(673.28, 675.52, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IMAGINE AN AUCTION HOUSE WHERE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.24), sfx: [[0.15, 'whoosh']] });
  S(675.52, 677.39, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND SELLERS ARE ONLY ALLOWED T", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.87), sfx: [[0.15, 'whoosh']] });
  S(677.39, 679.11, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND SELLERS ARE ONLY ALLOWED T", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(679.11, 681.47, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "WITH BUYERS LEGALLY KICKED OUT", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.36), sfx: [[0.15, 'whoosh']] });
  S(681.47, 683.64, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "WITH BUYERS LEGALLY KICKED OUT", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(683.64, 686.8, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "TO MAKE MATTERS WORSE, THE FED", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.16), sfx: [[0.15, 'whoosh']] });
  S(686.8, 690.99, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "CHAIRMAN PAUL VOLCKER, WHO WAS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.19), sfx: [[0.15, 'whoosh']] });
  S(690.99, 694.85, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "CHAIRMAN PAUL VOLCKER, WHO WAS", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(694.85, 696.9, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE TOLD THEM TO IMMEDIATELY ST", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.05), sfx: [[0.15, 'whoosh']] });
  S(696.9, 698.8, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HE TOLD THEM TO IMMEDIATELY ST", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(698.8, 701.63, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "OVERNIGHT, THE HUNT BROTHERS' ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.83), sfx: [[0.15, 'whoosh']] });
  S(701.63, 704.24, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "OVERNIGHT, THE HUNT BROTHERS' ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(704.24, 706.55, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY COULD NO LONGER BORROW FR", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.31), sfx: [[0.15, 'whoosh']] });
  S(706.55, 708.69, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THEY COULD NO LONGER BORROW FR", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(708.69, 710.36, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND THE MARKET THEY THOUGHT TH", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.67), sfx: [[0.15, 'whoosh']] });
  S(710.36, 711.91, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND THE MARKET THEY THOUGHT TH", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  /* CH 6 */ S(711.91, 717.53, (ctx, s) => CC.chapter(ctx, s, "Silver Thursday and the Fall", { kicker: "CHAPTER SIX", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(717.53, 720.16, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.word(ctx, '$50.35 / OZ', 960, 320, 135, PAL.moneyDk, s.lt, 0.15);
    bunker(ctx, s, { x: 960, y: FL, expr: 'joy' }, [{ at: 0.2, pose: 'cheer', expr: 'grin' }]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.4, { size: 75 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.3), sfx: [[0.3, 'ding']] });
  S(720.16, 722.58, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BECAUSE THE HUNT BROTHERS HAD ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.42), sfx: [[0.15, 'whoosh']] });
  S(722.58, 724.81, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BECAUSE THE HUNT BROTHERS HAD ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(724.81, 727.55, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "EVERY DOLLAR DROP IN THE PRICE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.74), sfx: [[0.15, 'whoosh']] });
  S(727.55, 730.07, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "EVERY DOLLAR DROP IN THE PRICE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(730.07, 734.48, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "A MARGIN CALL IS WHEN A BROKER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.41), sfx: [[0.15, 'whoosh']] });
  S(734.48, 738.56, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "A MARGIN CALL IS WHEN A BROKER", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(738.56, 741.46, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IF YOU CANNOT PRODUCE THE CASH", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.90), sfx: [[0.15, 'whoosh']] });
  S(741.46, 744.13, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IF YOU CANNOT PRODUCE THE CASH", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(744.13, 746.24, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "FOR SEVERAL WEEKS, THE HUNTS S", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.11), sfx: [[0.15, 'whoosh']] });
  S(746.24, 748.18, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "FOR SEVERAL WEEKS, THE HUNTS S", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(748.18, 751.11, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY POURED IN MILLIONS OF DOL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.93), sfx: [[0.15, 'whoosh']] });
  S(751.11, 753.81, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "SOLD OFF FAMILY ASSETS, AND TR", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.70), sfx: [[0.15, 'whoosh']] });
  S(753.81, 755.15, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THE DECLINE WAS RELENTLESS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.34), sfx: [[0.15, 'whoosh']] });
  S(755.15, 757.55, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 110, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.4, { col: PAL.red, size: 92 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.35), sfx: [[0.35, 'stamp']] });
  S(757.55, 759.77, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, collapse: 'left', fx: 'sweat' }]);
    CC.stamp(ctx, s, 'INSUFFICIENT FUNDS', 960, 240, 0.3, { col: PAL.red, size: 85 });
  }, { cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(759.77, 762.2, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 110, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.4, { col: PAL.red, size: 92 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.35), sfx: [[0.35, 'stamp']] });
  S(762.2, 764.45, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, collapse: 'left', fx: 'sweat' }]);
    CC.stamp(ctx, s, 'INSUFFICIENT FUNDS', 960, 240, 0.3, { col: PAL.red, size: 85 });
  }, { cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(764.45, 771.0, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 110, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.4, { col: PAL.red, size: 92 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.35), sfx: [[0.35, 'stamp']] });
  S(771.0, 777.04, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, collapse: 'left', fx: 'sweat' }]);
    CC.stamp(ctx, s, 'INSUFFICIENT FUNDS', 960, 240, 0.3, { col: PAL.red, size: 85 });
  }, { cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(777.04, 777.24, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE HUNTS SIMPLY DID NOT HAVE ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 0.20), sfx: [[0.15, 'whoosh']] });
  S(777.24, 780.73, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUNKER HUNT WAS OVERSEAS IN EU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.49), sfx: [[0.15, 'whoosh']] });
  S(780.73, 783.95, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUNKER HUNT WAS OVERSEAS IN EU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(783.95, 785.54, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, { size: 110, rot: -0.04 });
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.4, { col: PAL.red, size: 92 });
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.35), sfx: [[0.35, 'stamp']] });
  S(785.54, 787.84, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "DUMPING MILLIONS OF OUNCES ONT", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.30), sfx: [[0.15, 'whoosh']] });
  S(787.84, 789.97, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "DUMPING MILLIONS OF OUNCES ONT", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(789.97, 791.76, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE TRADING PITS ERUPTED IN AB", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.79), sfx: [[0.15, 'whoosh']] });
  S(791.76, 793.41, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE TRADING PITS ERUPTED IN AB", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(793.41, 796.45, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE PRICE OF SILVER WENT INTO ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.04), sfx: [[0.15, 'whoosh']] });
  S(796.45, 799.25, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE PRICE OF SILVER WENT INTO ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(799.25, 805.07, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "RUMORS SPREAD LIKE WILDFIRE AC", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.82), sfx: [[0.15, 'whoosh']] });
  S(805.07, 810.44, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "RUMORS SPREAD LIKE WILDFIRE AC", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(810.44, 812.86, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE DOW JONES INDUSTRIAL AVERA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.42), sfx: [[0.15, 'whoosh']] });
  S(812.86, 818.95, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "TERRIFIED OF A SYSTEMIC BANKIN", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.09), sfx: [[0.15, 'whoosh']] });
  S(818.95, 824.58, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "TERRIFIED OF A SYSTEMIC BANKIN", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(824.58, 829.39, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "OVER THE COMING WEEKS, THEY PU", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.81), sfx: [[0.15, 'whoosh']] });
  S(829.39, 833.83, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "OVER THE COMING WEEKS, THEY PU", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(833.83, 835.23, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT IN EXCHANGE, THE BANKS TOO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.40), sfx: [[0.15, 'whoosh']] });
  S(835.23, 837.82, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE BROTHERS WERE FORCED TO PL", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.59), sfx: [[0.15, 'whoosh']] });
  S(837.82, 840.44, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "REAL ESTATE, RANCHES, RACEHORS", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.62), sfx: [[0.15, 'whoosh']] });
  S(840.44, 842.86, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "REAL ESTATE, RANCHES, RACEHORS", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(842.86, 844.96, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE SILVER EMPIRE HAD TURNED I", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.10), sfx: [[0.15, 'whoosh']] });
  /* CH 7 */ S(844.96, 848.55, (ctx, s) => CC.chapter(ctx, s, "The Billion-Dollar Lesson", { kicker: "FINAL CHAPTER", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(848.55, 854.68, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "IN NINETEEN EIGHTY-EIGHT, A FE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.13), sfx: [[0.15, 'whoosh']] });
  S(854.68, 860.33, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "IN NINETEEN EIGHTY-EIGHT, A FE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(860.33, 864.65, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THE JURY ORDERED THE BROTHERS ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.32), sfx: [[0.15, 'whoosh']] });
  S(864.65, 868.63, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "THE JURY ORDERED THE BROTHERS ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(868.63, 871.4, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "FACED WITH ASTRONOMICAL LEGAL ", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.77), sfx: [[0.15, 'whoosh']] });
  S(871.4, 873.95, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "FACED WITH ASTRONOMICAL LEGAL ", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(873.95, 876.38, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.2, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.2, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.4, { col: PAL.red, size: 95 });
    });
    bunker(ctx, s, { x: 420, y: FL, pose: 'shrug', expr: 'disappointed' }, [{ at: 0.6, expr: 'shock', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.25, 0.2), sfx: [[0.2, 'stamp']] });
  S(876.38, 878.62, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 12, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 200, s.lt, 0.2, { size: 90, col: PAL.red });
  }, { cam: CC.cam.zoom(1.1), sfx: [[0.1, 'whoosh']] });
  S(878.62, 882.63, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.2, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.2, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.4, { col: PAL.red, size: 95 });
    });
    bunker(ctx, s, { x: 420, y: FL, pose: 'shrug', expr: 'disappointed' }, [{ at: 0.6, expr: 'shock', fx: 'sweat' }]);
  }, { cam: CC.cam.punch(960, 460, 1.25, 0.2), sfx: [[0.2, 'stamp']] });
  S(882.63, 886.34, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 12, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 200, s.lt, 0.2, { size: 90, col: PAL.red });
  }, { cam: CC.cam.zoom(1.1), sfx: [[0.1, 'whoosh']] });
  S(886.34, 888.17, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HIS FATHER'S OIL LEASES, AND E", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.83), sfx: [[0.15, 'whoosh']] });
  S(888.17, 889.86, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HIS FATHER'S OIL LEASES, AND E", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(889.86, 893.12, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HIS PERSONAL FORTUNE, ONCE EST", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.26), sfx: [[0.15, 'whoosh']] });
  S(893.12, 896.13, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "HIS PERSONAL FORTUNE, ONCE EST", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(896.13, 901.06, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'think', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "DECADES LATER, THE HUNT BROTHE", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.93), sfx: [[0.15, 'whoosh']] });
  S(901.06, 905.61, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "DECADES LATER, THE HUNT BROTHE", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(905.61, 906.62, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'analyst', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'thumbsUp', expr: 'confident' }]);
    P.coinStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WERE RIGHT ABOUT INFLATIO", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.01), sfx: [[0.15, 'whoosh']] });
  S(906.62, 909.81, (ctx, s) => {
    CC.bg(ctx, PAL.slate, { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'cross', expr: 'confident' }]);
    P.skyscraper(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "THEY WERE RIGHT THAT INDUSTRIA", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.19), sfx: [[0.15, 'whoosh']] });
  S(909.81, 912.1, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "AND THEY WERE RIGHT THAT PAPER", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.29), sfx: [[0.15, 'whoosh']] });
  S(912.1, 914.22, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'reporter', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "AND THEY WERE RIGHT THAT PAPER", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(914.22, 917.44, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'shrug', expr: 'confident' }]);
    P.document(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT THEY FORGOT THE MOST IMPOR", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.22), sfx: [[0.15, 'whoosh']] });
  S(917.44, 920.42, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.actor(ctx, s, 'techceo', { x: 960, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.2, pose: 'pointUp' }]);
    CC.stamp(ctx, s, "BUT THEY FORGOT THE MOST IMPOR", 960, 250, 0.25, { col: PAL.charcoal, size: 70 });
  }, { cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] });
  S(920.42, 922.45, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'tycoon', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'present', expr: 'confident' }]);
    P.cashStack(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "HE GOES TO JAIL.", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.03), sfx: [[0.15, 'whoosh']] });
  S(922.45, 925.61, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 640, y: FL, s: 1.45, expr: 'neutral' }, [{ at: 0.15, pose: 'wave', expr: 'confident' }]);
    P.bill(ctx, 1280, FL, { s: 1.3 });
    CC.callout(ctx, "BUT WHEN THE BIG GUY BREAKS TH", 960, 260, s.lt, 0.3, { size: 66, maxW: 820 });
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.16), sfx: [[0.15, 'whoosh']] });
  TM.config({
    fps: 30,
    duration: 925.61,
    shots,
    phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({ s, e, text })), 6)
  });
  TM.CAPTIONS = false;
})();

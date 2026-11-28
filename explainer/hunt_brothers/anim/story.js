/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video — Full Narrative Edition
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;

  const CUES = [[0.18, 7.73, "In nineteen seventy-nine, two brothers from Texas walked into Wall Street with an idea so crazy that nobody believed they were serious."], [7.73, 16.43, "They decided that paper money was completely worthless, that the government was heading for bankruptcy,"], [16.43, 20.16, "and that the only safe place to put their wealth was inside cold, hard metal."], [20.16, 21.8, "But they did not just buy a little bit."], [21.8, 26.94, "Over twelve months, these two brothers secretly bought one-third of all the privately held silver on planet Earth."], [26.94, 31.22, "They pushed the price of silver up by more than seven hundred percent."], [31.22, 38.32, "They caused people to tear down antique candelabras and melt family heirlooms on street corners."], [38.32, 44.55, "And then, just when they thought they owned the world,"], [44.55, 47.12, "the men who ran the financial system did something the brothers never saw coming."], [47.12, 50.51, "They simply changed the rules."], [50.51, 55.14, "To understand how anyone could attempt something this absurd, you first have to meet their father."], [55.14, 60.04, "His name was Haroldson Lafayette Hunt, better known across Texas simply as H.L. Hunt."], [60.04, 63.99, "In the nineteen thirties, H.L."], [63.99, 65.99, "was quite literally the richest private citizen in the world."], [65.99, 72.0, "He started out as a professional poker player wandering through dusty gambling dens in Arkansas and Louisiana."], [72.0, 76.88, "One afternoon, he won a tiny slice of an oil lease in a card game."], [76.88, 85.76, "He took that lease, traded it for another, and eventually bought the legendary East Texas Oil Field from a broke wildcatter for pennies on the dollar. H.L."], [85.76, 88.81, "Hunt was brilliant, completely eccentric, and deeply paranoid."], [88.81, 93.07, "He carried his lunch in a brown paper bag, drove an old beat-up car,"], [93.07, 101.17, "and firmly believed that paper money was a government scam designed to steal wealth from hardworking families."], [101.17, 107.84, "When he died in nineteen seventy-four, he left behind billions of dollars and a large family."], [107.84, 110.77, "Standing right at the head of the table was his eldest son,"], [110.77, 114.27, "Nelson Bunker Hunt, alongside his younger brother, William Herbert Hunt."], [114.27, 123.39, "Bunker Hunt was a massive, quiet man who wore rumpled off-the-rack suits and looked more like a sleepy cattle rancher than a financial titan."], [123.39, 129.5, "But underneath that calm Texas drawl was his father's absolute obsession with hard assets."], [129.5, 136.79, "Bunker inherited a personal fortune in oil fields, massive cattle ranches, and prize-winning racehorses."], [136.79, 138.17, "But in nineteen seventy-three, disaster struck."], [138.17, 141.04, "Bunker had invested heavily in a massive oil field in Libya."], [141.04, 145.04, "Out of nowhere, Colonel Muammar Gaddafi led a military coup,"], [145.04, 150.92, "seized power, and nationalized Bunker's entire oil operation without paying him a single dime."], [150.92, 154.33, "The Libyan seizure shook Bunker Hunt to his core."], [154.33, 159.28, "He realized that a government could wipe out decades of work with the stroke of a pen."], [159.28, 165.28, "At the exact same time, back home in America, inflation was spiraling out of control."], [165.28, 170.19, "President Richard Nixon had just severed the final link between the dollar and gold."], [170.19, 178.02, "Prices for bread, milk, and gasoline were soaring, and paper money seemed to be melting away like ice under the Texas sun."], [178.02, 182.84, "Bunker turned to his brother Herbert and told him that if they kept their wealth in American dollars,"], [182.84, 184.72, "they were going to end up broke."], [184.72, 186.94, "They needed something real."], [186.94, 191.23, "Naturally, the first thing the Hunt brothers wanted to buy was gold."], [191.23, 195.45, "Gold had been the ultimate store of value for thousands of years."], [195.45, 198.47, "But there was a gigantic legal roadblock."], [198.47, 203.29, "Ever since President Franklin Roosevelt signed an executive order during the Great Depression,"], [203.29, 207.52, "it was strictly illegal for private American citizens to own gold bullion."], [207.52, 212.41, "The government would throw you in federal prison if you hoarded gold bars in your basement."], [212.41, 216.12, "So Bunker and Herbert began looking for an alternative."], [216.12, 220.98, "And sitting right in plain sight was gold's forgotten little brother: silver."], [220.98, 225.76, "Silver was completely legal for any American citizen to buy and hold."], [225.76, 228.71, "Even better, it was shockingly cheap."], [228.71, 234.82, "Throughout the early nineteen seventies, silver traded for around one dollar and fifty cents an ounce."], [234.82, 238.34, "But Bunker Hunt was not just looking at the price tag."], [238.34, 243.43, "He started studying the global supply chain, and what he discovered blew his mind."], [243.43, 251.67, "Back then, the world was consuming far more silver every single year than all the silver mines on Earth were digging up."], [251.67, 258.89, "The photographic giant Eastman Kodak was using millions of ounces of silver every year to manufacture camera film."], [258.89, 263.44, "Electronics manufacturers needed silver for electrical switches."], [263.44, 264.25, "Medical companies needed silver for X-ray sheets."], [264.25, 274.43, "The gap between supply and demand was being filled by governments dumping their old silver coins and stockpiles into the market."], [274.43, 274.98, "But those government reserves were running dry."], [274.98, 277.52, "Bunker Hunt ran the numbers and came to an astonishing conclusion."], [277.52, 286.06, "If someone with enough cash stepped into the market and bought up the remaining supply,"], [286.06, 290.31, "the entire global industrial machine would have to come begging to them for metal."], [290.31, 294.79, "In nineteen seventy-three, the Hunt brothers made their first move."], [294.79, 300.77, "They quietly purchased twenty million ounces of physical silver at roughly three dollars an ounce."], [300.77, 303.09, "But the brothers knew their own fortune, as vast as it was,"], [303.09, 304.54, "could only push the market so far."], [304.54, 312.32, "They needed allies with deep pockets and the exact same hatred for paper currency."], [312.32, 316.83, "So Bunker Hunt boarded an airplane and flew straight to the Middle East."], [316.83, 319.74, "He met with members of the Saudi royal family, including Prince Mohammed bin Fahd."], [319.74, 322.18, "Bunker laid out his theory."], [322.18, 329.65, "He told the Saudis that Western paper currencies were doomed to collapse from runaway inflation,"], [329.65, 335.08, "and that together, they could pool their petrodollars and build an unbeatable position in real silver."], [335.08, 337.5, "The Saudis loved the idea."], [337.5, 343.39, "Together, they formed a secret offshore partnership called the International Metals Investment Company."], [343.39, 344.95, "The trap was set, and the squeeze was about to begin."], [344.95, 347.1, "To understand how the Hunt brothers pulled off their scheme,"], [347.1, 354.34, "you have to understand how commodity futures exchanges actually work."], [354.34, 362.49, "Normally, when big hedge funds or corporations trade silver on exchanges like the Chicago Board of Trade or the New York Commodity Exchange,"], [362.49, 366.12, "nobody actually expects to see a single ounce of real metal."], [366.12, 367.32, "Instead, traders buy futures contracts."], [367.32, 376.57, "A futures contract is simply a legal agreement to buy a certain amount of silver at a specific price on a future date."], [376.57, 383.81, "But when that delivery date arrives, ninety-nine percent of traders do not want heavy silver bars dumped on their front lawn."], [383.81, 386.54, "They simply settle the contract in cash, take their paper profit or loss,"], [386.54, 388.47, "and roll over into the next month."], [388.47, 392.67, "The Hunt brothers, however, had zero interest in paper profits."], [392.67, 395.32, "They did not want paper cash."], [395.32, 397.9, "They wanted the metal."], [397.9, 401.86, "When their contracts expired, the Hunts did something that sent shockwaves through the trading pits."], [401.86, 405.68, "They demanded physical delivery."], [405.68, 408.21, "They told the exchange: do not wire us dollars, bring us our silver."], [408.21, 413.03, "Suddenly, armored trucks began backing up to exchange warehouses across New York and Chicago,"], [413.03, 418.78, "loading up thousands of heavy thirty-two-pound bars of solid silver."], [418.78, 422.71, "But Bunker Hunt was terrified the United States government might try to seize his metal,"], [422.71, 427.46, "just like Roosevelt had seized gold forty years earlier."], [427.46, 430.92, "So he decided to take the silver completely out of the country."], [430.92, 434.85, "In the dead of winter, under the cover of darkness,"], [434.85, 437.97, "Bunker Hunt chartered three Boeing seven hundred and seven cargo jets."], [437.97, 442.2, "He hired a squad of armed Texas ranch hands, dressed in cowboy boots and heavy jackets,"], [442.2, 445.39, "to guard the loading docks."], [445.39, 449.75, "Pallet after pallet of solid silver bullion was loaded onto the planes."], [449.75, 454.42, "The jets took off into the night and flew straight across the Atlantic Ocean,"], [454.42, 458.57, "touching down in Zurich and London."], [458.57, 460.79, "The silver was quietly locked away inside deep Swiss bank vaults."], [460.79, 465.4, "By nineteen seventy-nine, the Hunts and their Saudi partners were not just buying silver with cash."], [465.4, 467.38, "They were using leverage."], [467.38, 473.95, "They would take their physical silver bars, pledge them as collateral to borrow millions of dollars from Wall Street banks,"], [473.95, 480.27, "and then use that borrowed cash to buy even more futures contracts."], [480.27, 481.77, "It was an unstoppable compounding loop."], [481.77, 487.25, "By late nineteen seventy-nine, the Hunt brothers controlled an estimated two hundred million ounces of silver."], [487.25, 493.89, "That was roughly half of all the deliverable silver in the entire Western world."], [493.89, 498.76, "With hundreds of millions of ounces locked away in private vaults,"], [498.76, 501.62, "the open market suddenly experienced an extreme shortage."], [501.62, 507.34, "Industrial companies that desperately needed silver for film, electronics, and medicine could not find enough bars to buy."], [507.34, 511.82, "The price of silver went completely berserk."], [511.82, 514.74, "In January of nineteen seventy-nine, silver was trading around six dollars an ounce."], [514.74, 517.98, "By September, it hit eleven dollars."], [517.98, 520.68, "By December, it blew past twenty-five dollars."], [520.68, 528.29, "And then, in the first two weeks of January nineteen eighty, the market entered full-blown speculative hysteria."], [528.29, 537.65, "On January eighteenth, nineteen eighty, the price of silver touched an all-time record high of fifty dollars and thirty-five cents an ounce."], [537.65, 540.51, "In just one year, the price had skyrocketed by more than seven hundred percent."], [540.51, 547.6, "On paper, Bunker and Herbert Hunt were now sitting on an unrealized profit of several billion dollars."], [547.6, 552.48, "They were, for a few brief weeks, arguably the wealthiest private individuals on Earth."], [552.48, 557.92, "Across the United States, regular citizens went into a state of total mania."], [557.92, 568.77, "People suddenly realized that the dusty antique tea sets sitting in their dining rooms and the silver spoons inherited from their grandparents were worth thousands of dollars."], [568.77, 577.86, "Lines stretched around the block outside jewelry shops, pawn shops, and coin dealers in every major American city."], [577.86, 581.22, "People stood in the freezing winter cold for hours, carrying pillowcases stuffed with silverware,"], [581.22, 588.32, "communion plates, and even silver dental fillings, waiting to have them weighed and paid out in cash."], [588.32, 593.7, "Refineries worked around the clock, melting down irreplaceable nineteenth-century heirlooms into crude silver bricks."], [593.7, 598.9, "Burglars began breaking into suburban homes, ignoring televisions and stereo equipment,"], [598.9, 603.62, "and heading straight for the dining room sideboard to steal the silverware."], [603.62, 612.96, "The iconic luxury jeweler Tiffany and Company was so outraged by the skyrocketing price that their chairman took out a full-page advertisement in The New York Times."], [612.96, 624.93, "The ad publicly blasted the Hunt brothers, calling their actions unconscionable and accusing them of hoarding a vital public resource for private greed."], [624.93, 627.29, "But Bunker Hunt simply laughed off the criticism."], [627.29, 630.61, "When a reporter asked him how it felt to risk his fortune on silver,"], [630.61, 637.91, "Bunker calmly replied that a billion dollars just was not what it used to be."], [637.91, 645.4, "While the Hunt brothers were celebrating their paper billions, panic was sweeping through the executive suites of Wall Street and the commodity exchanges."], [645.4, 652.81, "The leaders of the Chicago Board of Trade and the Commodity Exchange in New York were staring into a financial abyss."], [652.81, 656.86, "Many of the exchange board members and major trading firms were on the short side of the trade,"], [656.86, 661.91, "meaning they had bet that the price of silver would go down."], [661.91, 668.21, "If the Hunts continued demanding physical delivery, there literally was not enough silver on planet Earth to satisfy the contracts."], [668.21, 676.79, "The short sellers would go bankrupt, clearinghouses would fail, and the entire commodities trading system could collapse."], [676.79, 680.21, "So the men in charge decided to do the only thing that could save them."], [680.21, 684.28, "They changed the rules of the game in the middle of the match."], [684.28, 688.88, "First, the exchanges dramatically increased the margin requirements."], [688.88, 700.13, "Previously, an investor only needed to put down a few thousand dollars in cash to control a hundred-thousand-dollar contract of silver."], [700.13, 706.97, "The exchanges suddenly demanded that traders put up tens of thousands of dollars in cash for every single contract."], [706.97, 709.18, "Then came the kill shot."], [709.18, 711.86, "The exchanges enacted a brand-new emergency regulation known as liquidation only."], [711.86, 716.27, "Under this new rule, nobody in the world was allowed to buy new silver futures contracts."], [716.27, 720.43, "You were only allowed to sell existing contracts to close them out."], [720.43, 724.6, "Think about that for a second."], [724.6, 727.01, "Imagine an auction house where buyers are banned from making any bids,"], [727.01, 731.14, "and sellers are only allowed to sell."], [731.14, 736.24, "With buyers legally kicked out of the room, there was only one direction the price could possibly go."], [736.24, 739.42, "To make matters worse, the Federal Reserve stepped in."], [739.42, 747.99, "Chairman Paul Volcker, who was aggressively battling national inflation, issued a direct warning to commercial banks across the country."], [747.99, 751.89, "He told them to immediately stop extending credit and loans for speculative commodity hoarding."], [751.89, 757.55, "Overnight, the Hunt brothers' financial pipeline was completely shut off."], [757.55, 762.42, "They could no longer borrow fresh cash against their silver,"], [762.42, 765.85, "and the market they thought they controlled was suddenly rigged against them."], [765.85, 771.97, "As soon as the new rules took effect, the price of silver began to slide backward."], [771.97, 774.83, "From fifty dollars, it dropped to forty. Then thirty. Then twenty-five."], [774.83, 779.57, "Because the Hunt brothers had built their empire on borrowed money,"], [779.57, 785.06, "every dollar drop in the price of silver triggered an avalanche of margin calls."], [785.06, 794.22, "A margin call is when a broker calls you on the telephone and demands that you deposit millions of dollars in fresh cash immediately to cover your losses."], [794.22, 799.98, "If you cannot produce the cash, the broker has the legal right to sell your assets at any price they can get."], [799.98, 804.17, "For several weeks, the Hunts scrambled."], [804.17, 807.37, "They poured in millions of dollars of their own cash,"], [807.37, 810.44, "sold off family assets, and tried to negotiate new loans."], [810.44, 812.13, "But the decline was relentless."], [812.13, 817.03, "Everything came to a catastrophic head on the morning of March twenty-seventh,"], [817.03, 822.15, "nineteen eighty, a day that financial history will forever remember as Silver Thursday."], [822.15, 832.92, "That morning, the major brokerage firm Bache Halsey Stuart Shields picked up the telephone and issued a massive margin call to the Hunt brothers for one hundred million dollars."], [832.92, 835.93, "The Hunts simply did not have the cash."], [835.93, 843.27, "Bunker Hunt was overseas in Europe trying to arrange emergency financing, but the clock ran out."], [843.27, 844.98, "Bache immediately began liquidating the Hunts' silver positions on the open floor,"], [844.98, 849.42, "dumping millions of ounces onto a market that had zero buyers."], [849.42, 853.26, "The trading pits erupted in absolute pandemonium."], [853.26, 859.4, "The price of silver went into freefall, plunging from twenty-one dollars down to ten dollars and eighty cents in a matter of hours."], [859.4, 868.98, "Rumors spread like wildfire across Wall Street that major brokerage firms were failing and that the Hunt brothers were insolvent."], [868.98, 874.33, "The Dow Jones Industrial Average plunged, and trading in several banking stocks was temporarily halted."], [874.33, 886.82, "Terrified of a systemic banking collapse, Federal Reserve officials and a syndicate of thirteen major commercial banks rushed into emergency meetings."], [886.82, 896.55, "Over the coming weeks, they put together a one-point-one-billion-dollar emergency credit package to bail out the brokerage firms and prevent a domino collapse of the financial system."], [896.55, 900.7, "But in exchange, the banks took total control of the Hunts."], [900.7, 904.13, "The brothers were forced to pledge their vast oil properties,"], [904.13, 906.84, "real estate, ranches, racehorses, and family holdings as collateral."], [906.84, 909.16, "The silver empire had turned into a financial prison."], [909.16, 912.86, "The fallout from the silver squeeze dragged on for nearly a decade."], [912.86, 925.52, "In nineteen eighty-eight, a federal jury found Nelson Bunker Hunt and William Herbert Hunt guilty of civil conspiracy to corner the silver market."], [925.52, 933.86, "The jury ordered the brothers to pay over one hundred and thirty million dollars in damages to a Peruvian state-owned mineral company that had been caught in the crossfire."], [933.86, 939.83, "Faced with astronomical legal bills, bank debts, and penalties from the Internal Revenue Service,"], [939.83, 944.79, "both Bunker and Herbert Hunt were forced to file for Chapter eleven personal bankruptcy."], [944.79, 953.46, "At their bankruptcy hearings, Bunker Hunt sat quietly in a crowded courtroom while auctioneers sold off his prize racehorses,"], [953.46, 958.92, "his father's oil leases, and even his personal coin collections to satisfy creditors."], [958.92, 964.0, "His personal fortune, once estimated to be well over five billion dollars, had almost completely vanished."], [964.0, 973.96, "Decades later, the Hunt brothers' silver gamble stands as one of the most audacious attempts in history to corner a global commodity."], [973.96, 974.95, "They were right about inflation."], [974.95, 978.19, "They were right that industrial demand was outstripping mine supply."], [978.19, 982.68, "And they were right that paper currency loses purchasing power over time."], [982.68, 989.75, "But they forgot the most important rule of high-stakes finance: when the little guy breaks the rules,"], [989.75, 991.81, "he goes to jail."], [991.81, 995.37, "But when the big guy breaks the house, the house simply rewrites the rules."]];

  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));

  // Ensure CC.rain is safely defined
  CC.rain = function (ctx, s, kind, o) {
    o = o || {};
    const n = o.n || 12, speed = o.speed || 400;
    const lq = CC.q(s.lt);
    for (let i = 0; i < n; i++) {
      const x = ((i * 173 + 80) % 1800) + 60;
      const y0 = ((i * 241) % 1000) - 200;
      const y = (y0 + lq * speed) % 1200 - 100;
      const rot = (i * 0.4 + lq * 2) % (Math.PI * 2);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      if (kind === 'coin') {
        P.coin(ctx, 0, 0, { r: 28 });
      } else {
        P.bill(ctx, 0, 0, { s: 1.1 });
      }
      ctx.restore();
    }
  };

  // Custom actors
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);
  const analyst = (ctx, s, base, track) => CC.actor(ctx, s, 'analyst', Object.assign({ s: 1.4, expr: 'shock' }, base), track);
  const reporter = (ctx, s, base, track) => CC.actor(ctx, s, 'reporter', Object.assign({ s: 1.4, expr: 'neutral' }, base), track);
  const judge = (ctx, s, base, track) => CC.actor(ctx, s, 'judge', Object.assign({ s: 1.45, expr: 'angry' }, base), track);
  const worker = (ctx, s, base, track) => CC.actor(ctx, s, 'worker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const trader = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.4, expr: 'scared' }, base), track);

  S(0.18, 3.80, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.city(ctx, FL, PAL.slate, { xs: [150, 380, 1520, 1750] });
    P.bank(ctx, 1280, FL, { s: 1.15, label: 'WALL ST' });
    bunker(ctx, s, { x: 640, y: FL, expr: 'smug' }, [{ at: 0, slideIn: 'left', dur: 0.5 }, { at: 0.8, pose: 'point', expr: 'confident' }]);
    herbert(ctx, s, { x: 440, y: FL, expr: 'happy' }, [{ at: 0.15, slideIn: 'left', dur: 0.5 }, { at: 1.0, pose: 'thumbsUp' }]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.3, { size: 85, rot: -0.02 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.18, 0, 3.62), sfx: [[0.1, 'whoosh']] });
  S(3.80, 7.73, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 480, y: FL, expr: 'laugh' }, [{ at: 0.2, pose: 'laugh' }]);
    CC.actor(ctx, s, 'analyst', { x: 1440, y: FL, expr: 'shock' }, [{ at: 0.3, pose: 'point' }]);
    bunker(ctx, s, { x: 960, y: FL, s: 1.65, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp', expr: 'grin' }]);
    CC.stamp(ctx, s, 'CRAZY IDEA', 960, 240, 0.3, { col: PAL.crimson, size: 95 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.2), sfx: [[0.2, 'stamp']] });
  S(7.73, 12.00, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.15, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.5, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.35, { col: PAL.red, size: 105 });
    });
    bunker(ctx, s, { x: 380, y: FL, pose: 'shrug', expr: 'disappointed' }, [{ at: 0.5, expr: 'shock', fx: 'sweat' }]);
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 460, 1.25, 0.2), sfx: [[0.2, 'stamp']] });
  S(12.00, 16.43, (ctx, s) => {
    CC.bg(ctx, '#181A20', { floor: FL, floorCol: '#101216' });
    P.bank(ctx, 960, FL, { s: 1.15, label: 'US TREASURY', col: '#DFDAD0', shade: '#9F978A' });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 420 });
    analyst(ctx, s, { x: 380, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 220, s.lt, 0.25, { size: 92, col: PAL.red });
    CC.spotlight(ctx, 960, 520, 680, 'rgba(255,245,225,0.18)', 'rgba(10,12,18,0.85)');
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(16.43, 18.20, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'SWISS VAULT' });
    bunker(ctx, s, { x: 420, y: FL, expr: 'confident' }, [{ at: 0.2, pose: 'point' }]);
    CC.callout(ctx, 'SAFE VAULT', 960, 220, s.lt, 0.2, { size: 80, rot: -0.02 });
    CC.vignette(ctx, 0.5);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.77), sfx: [[0.1, 'whoosh']] });
  S(18.20, 20.16, (ctx, s) => {
    CC.bg(ctx, '#141824', { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 450 }, c => {
      CC.rect(c, -240, -150, 480, 150, '#B8BAC0', 8, 14);
      c.fillStyle = '#8E9199'; c.fillRect(-230, -145, 460, 20);
      CC.text(c, 'SILVER .999', 0, -75, 56, PAL.white, { font: 'Georgia, serif' });
    });
    bunker(ctx, s, { x: 1450, y: FL, s: 1.6, expr: 'greedy' }, [{ at: 0.25, pose: 'point', expr: 'smug' }]);
    CC.stamp(ctx, s, 'COLD HARD METAL', 960, 240, 0.25, { col: PAL.gold, size: 85 });
    CC.spotlight(ctx, 960, FL - 75, 600, 'rgba(230,240,255,0.22)', 'rgba(8,10,18,0.88)');
  }, { cam: CC.cam.punch(960, FL - 75, 1.3, 0.15), sfx: [[0.15, 'thud']] });
  S(20.16, 21.80, (ctx, s) => {
    CC.bg(ctx, '#22181C', { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.1, pose: 'cross', expr: 'confident' }]);
    CC.stamp(ctx, s, 'NOT A LITTLE BIT', 960, 250, 0.2, { col: PAL.red, size: 90 });
    CC.spotlight(ctx, 960, 520, 550, 'rgba(255,235,225,0.25)', 'rgba(15,8,12,0.85)');
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.15), sfx: [[0.15, 'stamp']] });
  S(21.80, 24.50, (ctx, s) => {
    CC.bg(ctx, '#0E131E', { floor: FL });
    P.globe(ctx, 960, 520, { r: 240, sea: '#2A4D6E', land: '#5A8A4A' });
    CC.stamp(ctx, s, '1/3 OF EARTH', 960, 180, 0.2, { col: PAL.gold, size: 96 });
    CC.spotlight(ctx, 960, 520, 700, 'rgba(255,255,255,0.15)', 'rgba(6,8,14,0.9)');
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(24.50, 26.94, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.jar(ctx, 960, FL, { w: 340, h: 440, fill: 0.33, label: '1/3 OF SILVER' });
    bunker(ctx, s, { x: 480, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'point' }]);
    herbert(ctx, s, { x: 1440, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.2), sfx: [[0.2, 'pop']] });
  S(26.94, 31.22, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.3, 0.2], [0.6, 0.5], [0.9, 0.98]], CC.prog(CC.q(s.lt), 0.1, 0.8), { col: PAL.greenDk, lw: 10 });
    CC.stamp(ctx, s, '+700%', 1250, 360, 0.4, { col: PAL.red, size: 125 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.punch(1250, 360, 1.35, 0.4), sfx: [[0.4, 'stamp']] });
  S(31.22, 34.77, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'grandma', { x: 620, y: FL, expr: 'shock' }, [{ at: 0, slideIn: 'left', dur: 0.4 }, { at: 0.5, pose: 'give', expr: 'happy' }]);
    CC.actor(ctx, s, 'worker', { x: 1300, y: FL, pose: 'hold', expr: 'neutral' }, [{ at: 0.4, pose: 'carry' }]);
    CC.callout(ctx, 'MELTING HEIRLOOMS', 960, 220, s.lt, 0.2, { size: 76 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.punch(960, 480, 1.2, 0.2), sfx: [[0.1, 'whoosh']] });
  S(34.77, 38.32, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    CC.stamp(ctx, s, 'STREET CORNER MELTDOWNS', 960, 220, 0.2, { col: PAL.gold, size: 76 });
    P.coinStack(ctx, 960, FL, { n: 8, r: 65 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.zoom(1.1), sfx: [[0.1, 'clink']] });
  S(38.32, 44.55, (ctx, s) => {
    CC.bg(ctx, '#1A2234', { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'KINGS OF THE WORLD', 960, 240, 0.3, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.push(960, 480, 1.2, 0, 6.23), sfx: [[0.1, 'whoosh']] });
  S(44.55, 47.12, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 600, y: FL, s: 1.6, expr: 'furious' }, [{ at: 0.1, pose: 'point' }]);
    CC.actor(ctx, s, 'banker', { x: 1320, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'cross' }]);
    CC.callout(ctx, 'THE ESTABLISHMENT', 960, 220, s.lt, 0.2, { size: 80, col: PAL.red });
    CC.vignette(ctx, 0.5);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.2), sfx: [[0.1, 'whoosh']] });
  S(47.12, 50.51, (ctx, s) => {
    CC.bg(ctx, '#2A181C', { floor: FL });
    P.gavel(ctx, 960, FL, { s: 1.6 });
    CC.stamp(ctx, s, 'CHANGING THE RULES', 960, 260, 0.2, { col: PAL.crimson, size: 94 });
    CC.spotlight(ctx, 960, 480, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.2), sfx: [[0.2, 'thud']] });
  /* CH 1 */ S(50.51, 55.14, (ctx, s) => CC.chapter(ctx, s, "The Gambler's Sons", { kicker: "CHAPTER ONE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(55.14, 60.04, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL, floorCol: PAL.tanDk });
    hl_hunt(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.callout(ctx, 'H.L. HUNT', 960, 220, s.lt, 0.2, { size: 92 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.9), sfx: [[0.1, 'whoosh']] });
  S(60.04, 63.99, (ctx, s) => {
    CC.bg(ctx, PAL.gold, { floor: FL });
    CC.rain(ctx, s, 'coin', { n: 16, speed: 500 });
    hl_hunt(ctx, s, { x: 960, y: FL, s: 1.85, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'RICHEST MAN ON EARTH', 960, 240, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'ding']] });
  S(63.99, 65.99, (ctx, s) => {
    CC.bg(ctx, PAL.gold, { floor: FL });
    CC.rain(ctx, s, 'coin', { n: 16, speed: 500 });
    hl_hunt(ctx, s, { x: 960, y: FL, s: 1.85, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'RICHEST MAN ON EARTH', 960, 240, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'ding']] });
  S(65.99, 72.00, (ctx, s) => {
    CC.bg(ctx, '#1C2E20', { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    hl_hunt(ctx, s, { x: 500, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'point' }]);
    CC.stamp(ctx, s, 'POKER GAMBLER', 960, 240, 0.25, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.push(960, 480, 1.18, 0, 6.01), sfx: [[0.1, 'whoosh']] });
  S(72.00, 76.88, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 280, h: 500, col: '#1E1E1E', sign: 'OIL DERRICK' });
    hl_hunt(ctx, s, { x: 440, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'EAST TEXAS OIL', 960, 220, 0.3, { col: PAL.moneyDk, size: 90 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(76.88, 85.76, (ctx, s) => {
    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 280, h: 500, col: '#1E1E1E', sign: 'OIL DERRICK' });
    hl_hunt(ctx, s, { x: 440, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'EAST TEXAS OIL', 960, 220, 0.3, { col: PAL.moneyDk, size: 90 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(85.76, 88.81, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "HUNT WAS BRILLIANT,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.05), sfx: [[0.1, 'whoosh']] });
  S(88.81, 93.07, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.document(ctx, 1200, FL, { s: 1.2 });
    hl_hunt(ctx, s, { x: 600, y: FL, s: 1.65, expr: 'neutral' }, [{ at: 0.15, pose: 'present' }]);
    CC.callout(ctx, 'PAPER BAG LUNCH', 960, 220, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.26), sfx: [[0.1, 'whoosh']] });
  S(93.07, 101.17, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND FIRMLY BELIEVED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.1), sfx: [[0.1, 'whoosh']] });
  S(101.17, 107.84, (ctx, s) => {
    CC.bg(ctx, '#1E222A', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'HUNT ESTATE' });
    bunker(ctx, s, { x: 640, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'cross' }]);
    herbert(ctx, s, { x: 1280, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'cross' }]);
    CC.stamp(ctx, s, '$5 BILLION INHERITANCE', 960, 240, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.2, 0.3), sfx: [[0.3, 'stamp']] });
  S(107.84, 110.77, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "STANDING RIGHT THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.93), sfx: [[0.1, 'whoosh']] });
  S(110.77, 114.27, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 700, y: FL, s: 1.7, expr: 'confident' }, [{ at: 0.1, pose: 'point' }]);
    herbert(ctx, s, { x: 1220, y: FL, s: 1.6, expr: 'confident' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.callout(ctx, 'THE HUNT BROTHERS', 960, 220, s.lt, 0.2, { size: 84 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.5), sfx: [[0.1, 'whoosh']] });
  S(114.27, 123.39, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER HUNT WAS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.12), sfx: [[0.1, 'whoosh']] });
  S(123.39, 129.50, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT UNDERNEATH THAT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.11), sfx: [[0.1, 'whoosh']] });
  S(129.50, 136.79, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER INHERITED PERSONAL", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.29), sfx: [[0.1, 'whoosh']] });
  S(136.79, 138.17, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT NINETEEN SEVENTY-THREE,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.38), sfx: [[0.1, 'whoosh']] });
  /* CH 2 */ S(138.17, 141.04, (ctx, s) => CC.chapter(ctx, s, "The Shiny Metal Loophole", { kicker: "CHAPTER TWO", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(141.04, 145.04, (ctx, s) => {
    CC.bg(ctx, '#2A1418', { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 600, y: FL, s: 1.6, expr: 'furious' }, [{ at: 0.1, pose: 'cross' }]);
    P.skyscraper(ctx, 1200, FL, { w: 260, h: 480, col: '#1E1E1E', sign: 'LIBYAN OIL' });
    CC.stamp(ctx, s, 'GADDAFI MILITARY COUP', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'thud']] });
  S(145.04, 150.92, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.stamp(ctx, s, 'NATIONALIZED: $0', 960, 250, 0.3, { col: PAL.red, size: 92 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.3), sfx: [[0.3, 'stamp']] });
  S(150.92, 154.33, (ctx, s) => {
    CC.bg(ctx, '#2A1418', { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 600, y: FL, s: 1.6, expr: 'furious' }, [{ at: 0.1, pose: 'cross' }]);
    P.skyscraper(ctx, 1200, FL, { w: 260, h: 480, col: '#1E1E1E', sign: 'LIBYAN OIL' });
    CC.stamp(ctx, s, 'GADDAFI MILITARY COUP', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'thud']] });
  S(154.33, 159.28, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "REALIZED THAT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.95), sfx: [[0.1, 'whoosh']] });
  S(159.28, 165.28, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'INFLATION SPIRAL', 960, 220, s.lt, 0.2, { size: 86, col: PAL.red });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(165.28, 170.19, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.15, label: 'US DOLLAR' });
    CC.stamp(ctx, s, 'GOLD STANDARD ENDS', 960, 220, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.25), sfx: [[0.25, 'thud']] });
  S(170.19, 178.02, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'INFLATION SPIRAL', 960, 220, s.lt, 0.2, { size: 86, col: PAL.red });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(178.02, 182.84, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER TURNED HIS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.82), sfx: [[0.1, 'whoosh']] });
  S(182.84, 184.72, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WERE GOING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.88), sfx: [[0.1, 'whoosh']] });
  S(184.72, 186.94, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY NEEDED SOMETHING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.22), sfx: [[0.1, 'whoosh']] });
  S(186.94, 191.23, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "NATURALLY, THE FIRST", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.29), sfx: [[0.1, 'whoosh']] });
  S(191.23, 195.45, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "GOLD HAD BEEN", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.22), sfx: [[0.1, 'whoosh']] });
  S(195.45, 198.47, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT THERE WAS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.02), sfx: [[0.1, 'whoosh']] });
  S(198.47, 203.29, (ctx, s) => {
    CC.bg(ctx, '#1C2028', { floor: FL });
    P.handcuffs(ctx, 960, FL - 120, 1.4);
    CC.stamp(ctx, s, 'GOLD BULLION ILLEGAL', 960, 240, 0.25, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(203.29, 207.52, (ctx, s) => {
    CC.bg(ctx, '#1C2028', { floor: FL });
    P.handcuffs(ctx, 960, FL - 120, 1.4);
    CC.stamp(ctx, s, 'GOLD BULLION ILLEGAL', 960, 240, 0.25, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(207.52, 212.41, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE GOVERNMENT WOULD", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.89), sfx: [[0.1, 'whoosh']] });
  S(212.41, 216.12, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER AND HERBERT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.71), sfx: [[0.1, 'whoosh']] });
  S(216.12, 220.98, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 400 }, c => {
      CC.rect(c, -220, -140, 440, 140, '#D0D4DC', 8, 14);
      CC.text(c, 'SILVER IS 100% LEGAL', 0, -70, 46, PAL.white, { font: 'Georgia, serif' });
    });
    bunker(ctx, s, { x: 420, y: FL, s: 1.6, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.spotlight(ctx, 960, FL - 70, 650);
  }, { cam: CC.cam.punch(960, FL - 70, 1.25, 0.15), sfx: [[0.15, 'thud']] });
  S(220.98, 225.76, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 400 }, c => {
      CC.rect(c, -220, -140, 440, 140, '#D0D4DC', 8, 14);
      CC.text(c, 'SILVER IS 100% LEGAL', 0, -70, 46, PAL.white, { font: 'Georgia, serif' });
    });
    bunker(ctx, s, { x: 420, y: FL, s: 1.6, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.spotlight(ctx, 960, FL - 70, 650);
  }, { cam: CC.cam.punch(960, FL - 70, 1.25, 0.15), sfx: [[0.15, 'thud']] });
  S(225.76, 228.71, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    P.coin(ctx, 960, FL - 160, { r: 120 });
    CC.stamp(ctx, s, '$1.50 PER OUNCE', 960, 240, 0.25, { col: PAL.moneyDk, size: 92 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(228.71, 234.82, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL });
    P.coin(ctx, 960, FL - 160, { r: 120 });
    CC.stamp(ctx, s, '$1.50 PER OUNCE', 960, 240, 0.25, { col: PAL.moneyDk, size: 92 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(234.82, 238.34, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT BUNKER HUNT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.52), sfx: [[0.1, 'whoosh']] });
  S(238.34, 243.43, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "STARTED STUDYING THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.09), sfx: [[0.1, 'whoosh']] });
  S(243.43, 251.67, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BACK THEN, THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.24), sfx: [[0.1, 'whoosh']] });
  S(251.67, 258.89, (ctx, s) => {
    CC.bg(ctx, '#262214', { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 320, h: 500, col: '#E0B820', sign: 'KODAK FILM' });
    CC.stamp(ctx, s, 'MILLIONS OF OUNCES', 960, 240, 0.25, { col: PAL.red, size: 82 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.25), sfx: [[0.25, 'stamp']] });
  S(258.89, 263.44, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    analyst(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.15, pose: 'point' }]);
    CC.callout(ctx, 'INDUSTRIAL SHORTAGE', 960, 220, s.lt, 0.2, { size: 80 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.55), sfx: [[0.1, 'whoosh']] });
  S(263.44, 264.25, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    analyst(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.15, pose: 'point' }]);
    CC.callout(ctx, 'INDUSTRIAL SHORTAGE', 960, 220, s.lt, 0.2, { size: 80 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 0.81), sfx: [[0.1, 'whoosh']] });
  S(264.25, 274.43, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE GAP BETWEEN", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 10.18), sfx: [[0.1, 'whoosh']] });
  S(274.43, 274.98, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT THOSE GOVERNMENT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 0.55), sfx: [[0.1, 'whoosh']] });
  S(274.98, 277.52, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER HUNT RAN", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.54), sfx: [[0.1, 'whoosh']] });
  S(277.52, 286.06, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "SOMEONE WITH ENOUGH", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.54), sfx: [[0.1, 'whoosh']] });
  S(286.06, 290.31, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE ENTIRE GLOBAL", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.25), sfx: [[0.1, 'whoosh']] });
  S(290.31, 294.79, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "NINETEEN SEVENTY-THREE, THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.48), sfx: [[0.1, 'whoosh']] });
  S(294.79, 300.77, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY QUIETLY PURCHASED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.98), sfx: [[0.1, 'whoosh']] });
  S(300.77, 303.09, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT THE BROTHERS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.32), sfx: [[0.1, 'whoosh']] });
  S(303.09, 304.54, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "COULD ONLY PUSH", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.45), sfx: [[0.1, 'whoosh']] });
  S(304.54, 312.32, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY NEEDED ALLIES", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.78), sfx: [[0.1, 'whoosh']] });
  S(312.32, 316.83, (ctx, s) => {
    CC.bg(ctx, '#1C261E', { floor: FL });
    bunker(ctx, s, { x: 550, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.actor(ctx, s, 'sheikh', { x: 1370, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'SAUDI PETRODOLLARS', 960, 240, 0.3, { col: PAL.gold, size: 82 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(316.83, 319.74, (ctx, s) => {
    CC.bg(ctx, '#1C261E', { floor: FL });
    bunker(ctx, s, { x: 550, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.actor(ctx, s, 'sheikh', { x: 1370, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'SAUDI PETRODOLLARS', 960, 240, 0.3, { col: PAL.gold, size: 82 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(319.74, 322.18, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER LAID OUT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.44), sfx: [[0.1, 'whoosh']] });
  /* CH 3 */ S(322.18, 329.65, (ctx, s) => CC.chapter(ctx, s, "The Midnight Airlift", { kicker: "CHAPTER THREE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(329.65, 335.08, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND THAT TOGETHER,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.43), sfx: [[0.1, 'whoosh']] });
  S(335.08, 337.50, (ctx, s) => {
    CC.bg(ctx, '#1C261E', { floor: FL });
    bunker(ctx, s, { x: 550, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.actor(ctx, s, 'sheikh', { x: 1370, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'SAUDI PETRODOLLARS', 960, 240, 0.3, { col: PAL.gold, size: 82 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(337.50, 343.39, (ctx, s) => {
    CC.bg(ctx, PAL.navy, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'IMIC PARTNERSHIP' });
    CC.stamp(ctx, s, 'THE TRAP IS SET', 960, 220, 0.25, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(343.39, 344.95, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE TRAP WAS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.56), sfx: [[0.1, 'whoosh']] });
  S(344.95, 347.10, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "UNDERSTAND HOW THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.15), sfx: [[0.1, 'whoosh']] });
  S(347.10, 354.34, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "YOU HAVE UNDERSTAND", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.24), sfx: [[0.1, 'whoosh']] });
  S(354.34, 362.49, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.15), sfx: [[0.1, 'whoosh']] });
  S(362.49, 366.12, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "NOBODY ACTUALLY EXPECTS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.63), sfx: [[0.1, 'whoosh']] });
  S(366.12, 367.32, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.2), sfx: [[0.1, 'whoosh']] });
  S(367.32, 376.57, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.25), sfx: [[0.1, 'whoosh']] });
  S(376.57, 383.81, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT WHEN THAT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.24), sfx: [[0.1, 'whoosh']] });
  S(383.81, 386.54, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY SIMPLY SETTLE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.73), sfx: [[0.1, 'whoosh']] });
  S(386.54, 388.47, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND ROLL OVER", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.93), sfx: [[0.1, 'whoosh']] });
  S(388.47, 392.67, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE HUNT BROTHERS,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.2), sfx: [[0.1, 'whoosh']] });
  S(392.67, 395.32, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY DID NOT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.65), sfx: [[0.1, 'whoosh']] });
  S(395.32, 397.90, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WANTED THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.58), sfx: [[0.1, 'whoosh']] });
  S(397.90, 401.86, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WHEN THEIR CONTRACTS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.96), sfx: [[0.1, 'whoosh']] });
  S(401.86, 405.68, (ctx, s) => {
    CC.bg(ctx, '#141E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'DEMAND PHYSICAL DELIVERY', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(405.68, 408.21, (ctx, s) => {
    CC.bg(ctx, '#141E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'DEMAND PHYSICAL DELIVERY', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(408.21, 413.03, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.cashStack(ctx, 960, FL, { n: 12 });
    worker(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'carry' }]);
    CC.stamp(ctx, s, '32-LB SILVER BARS', 960, 220, 0.3, { col: PAL.white, size: 84 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(413.03, 418.78, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.cashStack(ctx, 960, FL, { n: 12 });
    worker(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'carry' }]);
    CC.stamp(ctx, s, '32-LB SILVER BARS', 960, 220, 0.3, { col: PAL.white, size: 84 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'thud']] });
  S(418.78, 422.71, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT BUNKER HUNT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.93), sfx: [[0.1, 'whoosh']] });
  S(422.71, 427.46, (ctx, s) => {
    CC.bg(ctx, '#1C2028', { floor: FL });
    P.handcuffs(ctx, 960, FL - 120, 1.4);
    CC.stamp(ctx, s, 'GOLD BULLION ILLEGAL', 960, 240, 0.25, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] });
  S(427.46, 430.92, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "DECIDED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.46), sfx: [[0.1, 'whoosh']] });
  S(430.92, 434.85, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE DEAD", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.93), sfx: [[0.1, 'whoosh']] });
  S(434.85, 437.97, (ctx, s) => {
    CC.bg(ctx, '#0C101A', { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 400, h: 260, col: '#334', sign: 'BOEING 707' });
    CC.stamp(ctx, s, 'MIDNIGHT AIRLIFT', 960, 220, 0.25, { col: PAL.gold, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);
  }, { cam: CC.cam.push(960, 480, 1.2, 0, 3.12), sfx: [[0.1, 'whoosh']] });
  S(437.97, 442.20, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "HIRED SQUAD", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.23), sfx: [[0.1, 'whoosh']] });
  S(442.20, 445.39, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "GUARD THE LOADING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.19), sfx: [[0.1, 'whoosh']] });
  S(445.39, 449.75, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "PALLET AFTER PALLET", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.36), sfx: [[0.1, 'whoosh']] });
  S(449.75, 454.42, (ctx, s) => {
    CC.bg(ctx, '#0C101A', { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 400, h: 260, col: '#334', sign: 'BOEING 707' });
    CC.stamp(ctx, s, 'MIDNIGHT AIRLIFT', 960, 220, 0.25, { col: PAL.gold, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);
  }, { cam: CC.cam.push(960, 480, 1.2, 0, 4.67), sfx: [[0.1, 'whoosh']] });
  S(454.42, 458.57, (ctx, s) => {
    CC.bg(ctx, '#141824', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'SWISS VAULT - ZURICH' });
    CC.stamp(ctx, s, 'LOCKED IN SWISS VAULTS', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(458.57, 460.79, (ctx, s) => {
    CC.bg(ctx, '#141824', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'SWISS VAULT - ZURICH' });
    CC.stamp(ctx, s, 'LOCKED IN SWISS VAULTS', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(460.79, 465.40, (ctx, s) => {
    CC.bg(ctx, '#1C261E', { floor: FL });
    bunker(ctx, s, { x: 550, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.actor(ctx, s, 'sheikh', { x: 1370, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'SAUDI PETRODOLLARS', 960, 240, 0.3, { col: PAL.gold, size: 82 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(465.40, 467.38, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WERE USING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.98), sfx: [[0.1, 'whoosh']] });
  S(467.38, 473.95, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WOULD TAKE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.57), sfx: [[0.1, 'whoosh']] });
  S(473.95, 480.27, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.32), sfx: [[0.1, 'whoosh']] });
  S(480.27, 481.77, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WAS UNSTOPPABLE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.5), sfx: [[0.1, 'whoosh']] });
  /* CH 4 */ S(481.77, 487.25, (ctx, s) => CC.chapter(ctx, s, "The Silver Fever of 1980", { kicker: "CHAPTER FOUR", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(487.25, 493.89, (ctx, s) => {
    CC.bg(ctx, PAL.gold, { floor: FL });
    P.jar(ctx, 960, FL, { w: 380, h: 480, fill: 0.5, label: '200M OUNCES' });
    bunker(ctx, s, { x: 440, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, '50% OF WESTERN SILVER', 960, 220, 0.3, { col: PAL.red, size: 78 });
    CC.spotlight(ctx, 960, 480, 700);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.3), sfx: [[0.3, 'stamp']] });
  S(493.89, 498.76, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WITH HUNDREDS MILLIONS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.87), sfx: [[0.1, 'whoosh']] });
  S(498.76, 501.62, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE OPEN MARKET", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.86), sfx: [[0.1, 'whoosh']] });
  S(501.62, 507.34, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    analyst(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.15, pose: 'point' }]);
    CC.callout(ctx, 'INDUSTRIAL SHORTAGE', 960, 220, s.lt, 0.2, { size: 80 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.72), sfx: [[0.1, 'whoosh']] });
  S(507.34, 511.82, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE PRICE SILVER", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.48), sfx: [[0.1, 'whoosh']] });
  S(511.82, 514.74, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "JANUARY NINETEEN", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.92), sfx: [[0.1, 'whoosh']] });
  S(514.74, 517.98, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "SEPTEMBER, HIT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.24), sfx: [[0.1, 'whoosh']] });
  S(517.98, 520.68, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "DECEMBER, BLEW", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.7), sfx: [[0.1, 'whoosh']] });
  S(520.68, 528.29, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND THEN, THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.61), sfx: [[0.1, 'whoosh']] });
  S(528.29, 537.65, (ctx, s) => {
    CC.bg(ctx, '#182414', { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.5, 0.4], [0.8, 0.6], [1.0, 1.0]], 1.0, { col: PAL.green, lw: 12 });
    CC.stamp(ctx, s, '$50.35 ALL-TIME HIGH', 1200, 340, 0.25, { col: PAL.gold, size: 96 });
    CC.spotlight(ctx, 1200, 340, 600);
  }, { cam: CC.cam.punch(1200, 340, 1.4, 0.25), sfx: [[0.25, 'ding']] });
  S(537.65, 540.51, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "JUST ONE YEAR,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.86), sfx: [[0.1, 'whoosh']] });
  S(540.51, 547.60, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "PAPER, BUNKER AND", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.09), sfx: [[0.1, 'whoosh']] });
  S(547.60, 552.48, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WERE, FOR", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.88), sfx: [[0.1, 'whoosh']] });
  S(552.48, 557.92, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "ACROSS THE UNITED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.44), sfx: [[0.1, 'whoosh']] });
  S(557.92, 568.77, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "PEOPLE SUDDENLY REALIZED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 10.85), sfx: [[0.1, 'whoosh']] });
  S(568.77, 577.86, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "LINES STRETCHED AROUND", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.09), sfx: [[0.1, 'whoosh']] });
  S(577.86, 581.22, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "PEOPLE STOOD THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.36), sfx: [[0.1, 'whoosh']] });
  S(581.22, 588.32, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "COMMUNION PLATES, AND", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.1), sfx: [[0.1, 'whoosh']] });
  S(588.32, 593.70, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "REFINERIES WORKED AROUND", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.38), sfx: [[0.1, 'whoosh']] });
  S(593.70, 598.90, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BURGLARS BEGAN BREAKING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.2), sfx: [[0.1, 'whoosh']] });
  S(598.90, 603.62, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND HEADING STRAIGHT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.72), sfx: [[0.1, 'whoosh']] });
  S(603.62, 612.96, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.newspaper(ctx, 960, FL, { s: 1.3, headline: 'NY TIMES: UNCONSCIONABLE' });
    CC.stamp(ctx, s, 'TIFFANY & CO OUTRAGE', 960, 220, 0.3, { col: PAL.red, size: 82 });
    CC.vignette(ctx, 0.5);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(612.96, 624.93, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE PUBLICLY BLASTED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 11.97), sfx: [[0.1, 'whoosh']] });
  S(624.93, 627.29, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.15, pose: 'shrug', expr: 'grin' }]);
    CC.speech(ctx, "A billion just isn't what it used to be.", 960, FL - 280, s.lt, 0.2, { size: 48, side: 1 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.36), sfx: [[0.1, 'whoosh']] });
  S(627.29, 630.61, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WHEN REPORTER ASKED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.32), sfx: [[0.1, 'whoosh']] });
  S(630.61, 637.91, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.15, pose: 'shrug', expr: 'grin' }]);
    CC.speech(ctx, "A billion just isn't what it used to be.", 960, FL - 280, s.lt, 0.2, { size: 48, side: 1 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.3), sfx: [[0.1, 'whoosh']] });
  S(637.91, 645.40, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WHILE THE HUNT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.49), sfx: [[0.1, 'whoosh']] });
  S(645.40, 652.81, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.41), sfx: [[0.1, 'whoosh']] });
  /* CH 5 */ S(652.81, 656.86, (ctx, s) => CC.chapter(ctx, s, "Changing the Rules", { kicker: "CHAPTER FIVE", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(656.86, 661.91, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "MEANING THEY HAD", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.05), sfx: [[0.1, 'whoosh']] });
  S(661.91, 668.21, (ctx, s) => {
    CC.bg(ctx, '#141E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'DEMAND PHYSICAL DELIVERY', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(668.21, 676.79, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE SHORT SELLERS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.58), sfx: [[0.1, 'whoosh']] });
  S(676.79, 680.21, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE MEN", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.42), sfx: [[0.1, 'whoosh']] });
  S(680.21, 684.28, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY CHANGED THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.07), sfx: [[0.1, 'whoosh']] });
  S(684.28, 688.88, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "FIRST, THE EXCHANGES", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.6), sfx: [[0.1, 'whoosh']] });
  S(688.88, 700.13, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "PREVIOUSLY, INVESTOR ONLY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 11.25), sfx: [[0.1, 'whoosh']] });
  S(700.13, 706.97, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE EXCHANGES SUDDENLY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.84), sfx: [[0.1, 'whoosh']] });
  S(706.97, 709.18, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEN CAME THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.21), sfx: [[0.1, 'whoosh']] });
  S(709.18, 711.86, (ctx, s) => {
    CC.bg(ctx, '#2A1014', { floor: FL });
    P.gavel(ctx, 960, FL, { s: 1.5 });
    CC.stamp(ctx, s, 'RULE: LIQUIDATION ONLY', 960, 240, 0.2, { col: PAL.red, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.2), sfx: [[0.2, 'thud']] });
  S(711.86, 716.27, (ctx, s) => {
    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.41), sfx: [[0.1, 'whoosh']] });
  S(716.27, 720.43, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "YOU WERE ONLY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.16), sfx: [[0.1, 'whoosh']] });
  S(720.43, 724.60, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THINK ABOUT THAT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.17), sfx: [[0.1, 'whoosh']] });
  S(724.60, 727.01, (ctx, s) => {
    CC.bg(ctx, '#2A1014', { floor: FL });
    P.gavel(ctx, 960, FL, { s: 1.5 });
    CC.stamp(ctx, s, 'RULE: LIQUIDATION ONLY', 960, 240, 0.2, { col: PAL.red, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.2), sfx: [[0.2, 'thud']] });
  S(727.01, 731.14, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND SELLERS ARE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.13), sfx: [[0.1, 'whoosh']] });
  S(731.14, 736.24, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "WITH BUYERS LEGALLY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.1), sfx: [[0.1, 'whoosh']] });
  S(736.24, 739.42, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'FEDERAL RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 420, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'point' }]);
    CC.stamp(ctx, s, 'PAUL VOLCKER INTERVENES', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(739.42, 747.99, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'INFLATION SPIRAL', 960, 220, s.lt, 0.2, { size: 86, col: PAL.red });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(747.99, 751.89, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "TOLD THEM", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.9), sfx: [[0.1, 'whoosh']] });
  S(751.89, 757.55, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "OVERNIGHT, THE HUNT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.66), sfx: [[0.1, 'whoosh']] });
  S(757.55, 762.42, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY COULD LONGER", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.87), sfx: [[0.1, 'whoosh']] });
  S(762.42, 765.85, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND THE MARKET", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.43), sfx: [[0.1, 'whoosh']] });
  S(765.85, 771.97, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "SOON THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 6.12), sfx: [[0.1, 'whoosh']] });
  S(771.97, 774.83, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "FROM FIFTY DOLLARS,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.86), sfx: [[0.1, 'whoosh']] });
  /* CH 6 */ S(774.83, 779.57, (ctx, s) => CC.chapter(ctx, s, "Silver Thursday and the Fall", { kicker: "CHAPTER SIX", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(779.57, 785.06, (ctx, s) => {
    CC.bg(ctx, '#2D1418', { floor: FL });
    P.phone(ctx, 960, FL - 120, 1.4);
    analyst(ctx, s, { x: 440, y: FL, s: 1.6, expr: 'shock' }, [{ at: 0.15, pose: 'face' }]);
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 240, 0.25, { col: PAL.crimson, size: 92 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(785.06, 794.22, (ctx, s) => {
    CC.bg(ctx, '#2D1418', { floor: FL });
    P.phone(ctx, 960, FL - 120, 1.4);
    analyst(ctx, s, { x: 440, y: FL, s: 1.6, expr: 'shock' }, [{ at: 0.15, pose: 'face' }]);
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 240, 0.25, { col: PAL.crimson, size: 92 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(794.22, 799.98, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "YOU CANNOT PRODUCE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.76), sfx: [[0.1, 'whoosh']] });
  S(799.98, 804.17, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "FOR SEVERAL WEEKS,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.19), sfx: [[0.1, 'whoosh']] });
  S(804.17, 807.37, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY POURED MILLIONS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.2), sfx: [[0.1, 'whoosh']] });
  S(807.37, 810.44, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "SOLD OFF FAMILY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.07), sfx: [[0.1, 'whoosh']] });
  S(810.44, 812.13, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT THE DECLINE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 1.69), sfx: [[0.1, 'whoosh']] });
  S(812.13, 817.03, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "EVERYTHING CAME", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.9), sfx: [[0.1, 'whoosh']] });
  S(817.03, 822.15, (ctx, s) => {
    CC.bg(ctx, '#1C1014', { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.9], [0.3, 0.7], [0.7, 0.3], [1.0, 0.05]], 1.0, { col: PAL.red, lw: 12 });
    CC.stamp(ctx, s, 'SILVER THURSDAY CRASH', 1200, 360, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(1200, 360, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(822.15, 832.92, (ctx, s) => {
    CC.bg(ctx, '#2D1418', { floor: FL });
    P.phone(ctx, 960, FL - 120, 1.4);
    analyst(ctx, s, { x: 440, y: FL, s: 1.6, expr: 'shock' }, [{ at: 0.15, pose: 'face' }]);
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 240, 0.25, { col: PAL.crimson, size: 92 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(832.92, 835.93, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE HUNTS SIMPLY", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.01), sfx: [[0.1, 'whoosh']] });
  S(835.93, 843.27, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUNKER HUNT WAS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 7.34), sfx: [[0.1, 'whoosh']] });
  S(843.27, 844.98, (ctx, s) => {
    CC.bg(ctx, '#2D1418', { floor: FL });
    P.phone(ctx, 960, FL - 120, 1.4);
    analyst(ctx, s, { x: 440, y: FL, s: 1.6, expr: 'shock' }, [{ at: 0.15, pose: 'face' }]);
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 240, 0.25, { col: PAL.crimson, size: 92 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(844.98, 849.42, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "DUMPING MILLIONS OUNCES", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.44), sfx: [[0.1, 'whoosh']] });
  S(849.42, 853.26, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE TRADING PITS", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.84), sfx: [[0.1, 'whoosh']] });
  S(853.26, 859.40, (ctx, s) => {
    CC.bg(ctx, '#1C1014', { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.9], [0.3, 0.7], [0.7, 0.3], [1.0, 0.05]], 1.0, { col: PAL.red, lw: 12 });
    CC.stamp(ctx, s, 'SILVER THURSDAY CRASH', 1200, 360, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 480, 650);
  }, { cam: CC.cam.punch(1200, 360, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  S(859.40, 868.98, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "RUMORS SPREAD LIKE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.58), sfx: [[0.1, 'whoosh']] });
  S(868.98, 874.33, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE DOW JONES", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.35), sfx: [[0.1, 'whoosh']] });
  S(874.33, 886.82, (ctx, s) => {
    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'FEDERAL RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 420, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'point' }]);
    CC.stamp(ctx, s, 'PAUL VOLCKER INTERVENES', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.25, 0.3), sfx: [[0.3, 'stamp']] });
  S(886.82, 896.55, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "OVER THE COMING", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.73), sfx: [[0.1, 'whoosh']] });
  S(896.55, 900.70, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "BUT EXCHANGE, THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.15), sfx: [[0.1, 'whoosh']] });
  S(900.70, 904.13, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE BROTHERS WERE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.43), sfx: [[0.1, 'whoosh']] });
  S(904.13, 906.84, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "REAL ESTATE, RANCHES,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.71), sfx: [[0.1, 'whoosh']] });
  S(906.84, 909.16, (ctx, s) => {
    CC.bg(ctx, '#22262E', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE SILVER EMPIRE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 2.32), sfx: [[0.1, 'whoosh']] });
  /* CH 7 */ S(909.16, 912.86, (ctx, s) => CC.chapter(ctx, s, "The Billion-Dollar Lesson", { kicker: "FINAL CHAPTER", at: 0.1, dur: 1.0 }), { cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] });
  S(912.86, 925.52, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 700, y: FL, s: 1.7, expr: 'confident' }, [{ at: 0.1, pose: 'point' }]);
    herbert(ctx, s, { x: 1220, y: FL, s: 1.6, expr: 'confident' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.callout(ctx, 'THE HUNT BROTHERS', 960, 220, s.lt, 0.2, { size: 84 });
    CC.vignette(ctx, 0.35);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 12.66), sfx: [[0.1, 'whoosh']] });
  S(925.52, 933.86, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THE JURY ORDERED", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 8.34), sfx: [[0.1, 'whoosh']] });
  S(933.86, 939.83, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "FACED WITH ASTRONOMICAL", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.97), sfx: [[0.1, 'whoosh']] });
  S(939.83, 944.79, (ctx, s) => {
    CC.bg(ctx, '#20181E', { floor: FL });
    judge(ctx, s, { x: 500, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'present' }]);
    bunker(ctx, s, { x: 1380, y: FL, s: 1.5, expr: 'disappointed' }, [{ at: 0.3, pose: 'shrug' }]);
    CC.stamp(ctx, s, 'PERSONAL BANKRUPTCY', 960, 240, 0.3, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.3), sfx: [[0.3, 'stamp']] });
  S(944.79, 953.46, (ctx, s) => {
    CC.bg(ctx, '#20181E', { floor: FL });
    judge(ctx, s, { x: 500, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'present' }]);
    bunker(ctx, s, { x: 1380, y: FL, s: 1.5, expr: 'disappointed' }, [{ at: 0.3, pose: 'shrug' }]);
    CC.stamp(ctx, s, 'PERSONAL BANKRUPTCY', 960, 240, 0.3, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 650);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.3), sfx: [[0.3, 'stamp']] });
  S(953.46, 958.92, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "HIS FATHERS OIL", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.46), sfx: [[0.1, 'whoosh']] });
  S(958.92, 964.00, (ctx, s) => {
    CC.bg(ctx, '#1C2622', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "HIS PERSONAL FORTUNE,", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 5.08), sfx: [[0.1, 'whoosh']] });
  S(964.00, 973.96, (ctx, s) => {
    CC.bg(ctx, '#2A241C', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "DECADES LATER, THE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 9.96), sfx: [[0.1, 'whoosh']] });
  S(973.96, 974.95, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'INFLATION SPIRAL', 960, 220, s.lt, 0.2, { size: 86, col: PAL.red });
    CC.vignette(ctx, 0.4);
  }, { cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] });
  S(974.95, 978.19, (ctx, s) => {
    CC.bg(ctx, '#181E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "THEY WERE RIGHT", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 3.24), sfx: [[0.1, 'whoosh']] });
  S(978.19, 982.68, (ctx, s) => {
    CC.bg(ctx, '#221C28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.6, expr: 'neutral' }, [{ at: 0.15, pose: 'point', expr: 'confident' }]);
    P.bank(ctx, 1300, FL, { s: 1.1, label: 'FINANCE' });
    CC.callout(ctx, "AND THEY WERE", 960, 230, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.45);
  }, { cam: CC.cam.push(960, 480, 1.15, 0, 4.49), sfx: [[0.1, 'whoosh']] });
  S(982.68, 989.75, (ctx, s) => {
    CC.bg(ctx, '#141416', { floor: FL });
    P.bars(ctx, 960, FL, { s: 1.4 });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.5, expr: 'sad' }, [{ at: 0.2, pose: 'hold' }]);
    CC.stamp(ctx, s, 'LITTLE GUY GOES TO JAIL', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'thud']] });
  S(989.75, 991.81, (ctx, s) => {
    CC.bg(ctx, '#141416', { floor: FL });
    P.bars(ctx, 960, FL, { s: 1.4 });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.5, expr: 'sad' }, [{ at: 0.2, pose: 'hold' }]);
    CC.stamp(ctx, s, 'LITTLE GUY GOES TO JAIL', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 600);
  }, { cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'thud']] });
  S(991.81, 995.37, (ctx, s) => {
    CC.bg(ctx, '#182030', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'THE SYSTEM' });
    CC.stamp(ctx, s, 'THE HOUSE REWRITES THE RULES', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 700);
  }, { cam: CC.cam.punch(960, 480, 1.35, 0.25), sfx: [[0.25, 'stamp']] });
  TM.config({
    fps: 30,
    duration: 995.37,
    shots: shots
  });
})();

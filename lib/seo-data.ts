// Programmatic SEO data for Carpet Care Center Inc.
// Services × Cities content library. Each entry should be hand-tuned and never templated blindly.

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  primaryKeyword: string;
  image: string;
  tagline: string;
  metaDescription: string;
  heroIntro: string;
  longIntro: string;
  included: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  problems: { title: string; body: string }[];
  whyChoose: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export type City = {
  slug: string;
  name: string;
  zip: string;
  intro: string;
  longAbout: string;
  neighborhoods: string[];
  landmarks: string[];
  localReasons: { title: string; body: string }[];
  testimonials: { author: string; neighborhood: string; service: string; body: string }[];
  faqs: { q: string; a: string }[];
  lat: number;
  lng: number;
};

export type ComboContent = {
  hero: string;
  body1: string;
  body2: string;
  homesDifferent: string;
  testimonials: { author: string; neighborhood: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-carpet-cleaning",
    title: "Residential Carpet Cleaning",
    shortTitle: "Residential Carpet Cleaning",
    primaryKeyword: "carpet cleaning",
    image: "/images/residential-carpet-cleaning.avif",
    tagline: "Truck-mounted hot water extraction that DIY rentals can't match.",
    metaDescription:
      "Residential carpet cleaning in Southern Orange County by Carpet Care Center Inc. IICRC Master Textile Technician, truck-mounted extraction, free estimates since 1965.",
    heroIntro:
      "A clean carpet does more than look good — it changes how a room smells, how allergies behave, and how long your flooring investment lasts. Our residential carpet cleaning restores the fibers, not just the surface.",
    longIntro:
      "When families call us for residential carpet cleaning, it is rarely because they just want their carpet to look nicer. Usually someone has a toddler starting to crawl, a dog leaving dark lanes by the back door, a dinner party next Saturday, or a baby on the way. Whatever the reason, the underlying issue is the same: rental machines and retail sprays move soil around. They don't lift it. Our truck-mounted hot water extraction does. We preheat soft water to roughly 220°F at the truck, apply a pH-balanced pre-conditioner, agitate, dwell, and then pull every drop back up under vacuum — leaving your carpet cleaner, drier, and without the sticky residue that makes carpets re-soil in weeks. Kurt Holsinger is an IICRC Master Textile Technician, which means he knows the difference between solution-dyed polyester and stain-resistant nylon on sight, and he won't use the wrong chemistry on the wrong fiber. That's why we still have customers whose parents hired us in 1970.",
    included: [
      {
        title: "Fiber identification",
        body: "We inspect your carpet before touching it. Nylon, polyester, wool, olefin, and blends each require different chemistry. One wrong product can set a stain or flatten fibers permanently.",
      },
      {
        title: "Pre-treatment of traffic lanes and spots",
        body: "The soiled areas get pre-sprayed and given time to break up. This is where a lot of cleaners cut corners — we don't.",
      },
      {
        title: "Truck-mounted hot water extraction",
        body: "Heat and pressure from the truck, not a tiny residential unit. More lift, faster dry times, less water left behind.",
      },
      {
        title: "Edge and corner detailing",
        body: "We work the edges and under baseboards by hand where the wand can't reach. That's where dust settles in most homes.",
      },
      {
        title: "Grooming and final walk-through",
        body: "Fibers are groomed to stand up evenly, and we walk the job with you before leaving. If something isn't right, we fix it on the spot.",
      },
    ],
    process: [
      { step: "01", title: "Inspection", body: "Fiber type, construction, soil level, and any problem spots are noted. You get a written quote before anything gets wet." },
      { step: "02", title: "Pre-treat", body: "Traffic lanes, spots, and pet areas get the right pre-spray for the fiber. We give it dwell time — that's where the cleaning actually happens." },
      { step: "03", title: "Extract", body: "Truck-mounted heat and vacuum pull the loosened soil out. We move slow enough to get it the first time." },
      { step: "04", title: "Groom and dry", body: "Carpet is groomed to set the pile. Air movers go down if needed. Most homes are dry in 4–6 hours." },
    ],
    problems: [
      { title: "Traffic lane greying", body: "The dark paths in hallways and in front of sofas are usually soil buried deep in the pile. Surface vacuuming won't touch it. We extract it." },
      { title: "Pet accidents", body: "Urine wicks down to the pad and bonds with fibers as it dries. Enzymes break those bonds. We carry them." },
      { title: "Red wine, coffee, and juice", body: "Most are removable if caught early. Even older ones usually lighten dramatically with the right reducing agent." },
      { title: "Allergens and dust mites", body: "Hot water extraction kills dust mites and flushes out the pollen and dander that settle into fibers between vacuumings." },
    ],
    whyChoose: [
      { title: "Master Textile Technician on every job", body: "Kurt's IICRC #6256 credential means your home isn't a training ground." },
      { title: "No bait-and-switch pricing", body: "The price we quote is the price you pay. If we find something unexpected, we stop and explain before we proceed." },
      { title: "Truck-mounted power", body: "Portable machines can't reach the water temperatures or vacuum pressures we do. You feel the difference within a week of use." },
      { title: "Sixty years in one valley", body: "We've cleaned carpet in houses that have been sold three times. When the new owners call, they already know us." },
    ],
    faqs: [
      { q: "How long will my carpet take to dry?", a: "Most residential jobs are dry to the touch within 4–6 hours and fully dry within 24. We adjust passes and airflow to speed this up in humid weather or thicker carpet." },
      { q: "Will cleaning damage my carpet?", a: "Not when it's done right. The reason carpets look worn prematurely is usually the opposite — they weren't cleaned on schedule. Soil is abrasive and actually cuts the fibers as you walk. Cleaning every 12–18 months extends carpet life." },
      { q: "Do I need to vacuum before you arrive?", a: "Helpful but not required. We vacuum high-traffic areas ourselves as part of the process. If your carpet is heavily shedding pet hair, a quick vacuum the day before gets you the best result." },
      { q: "Can you save a carpet that looks beyond hope?", a: "Usually, yes. Bring us out for a free estimate before you order replacement. We've pulled carpets back that homeowners had written off." },
      { q: "What about the stairs?", a: "Stairs are cleaned by hand with a detail tool. Pricing is typically per flight. Tell us how many flights when you call so we can quote accurately." },
      { q: "Is there anything I need to do after you leave?", a: "Stay off until dry, keep pets off until dry, and run your fan or AC if it's humid. That's it. You can put foam blocks or plastic tabs under furniture legs for a day if you want to be extra careful about moisture transfer from wood." },
    ],
  },
  {
    slug: "commercial-carpet-cleaning",
    title: "Commercial Carpet Cleaning",
    shortTitle: "Commercial Carpet Cleaning",
    primaryKeyword: "commercial carpet cleaning",
    image: "/images/commercial-carpet-cleaning.avif",
    tagline: "Offices, retail, HOA common areas — cleaned around your hours.",
    metaDescription:
      "Commercial carpet cleaning in Orange County — after-hours scheduling, low-moisture options, and IICRC standards. Offices, retail, HOA common areas. Free quotes.",
    heroIntro:
      "A tired, grey office carpet changes how clients feel about your business before you say a word. Our commercial program keeps that from happening without shutting your operation down.",
    longIntro:
      "Commercial carpet has a different job than residential carpet. It absorbs more foot traffic in a week than a home carpet sees in a year, and it is often glued directly to a slab, which means moisture has to be managed differently. We clean commercial spaces after hours, overnight, or on weekends so your team walks in to a fresh space on Monday. For high-traffic lanes, we often recommend encapsulation or low-moisture cleaning on a quarterly rotation with deep extraction annually. For medical offices, law firms, and executive suites we stick to hot water extraction because appearance matters as much as hygiene. For gyms, daycares, and churches we use the dwell-time-heavy method that handles biologics. Every account gets a written schedule, a designated technician who learns your floor plan, and an emergency line for spills that can't wait.",
    included: [
      { title: "Walk-through and rotation plan", body: "We map high, medium, and low traffic zones and build a maintenance schedule that actually matches how your space is used." },
      { title: "Encapsulation or extraction", body: "The right method for the right floor. Low-moisture encap for glue-down commercial loop. Hot water extraction for plush and cut-pile." },
      { title: "Spot and spill response", body: "Between scheduled cleans, we come out for emergencies. Coffee, printer toner, and ink are time-sensitive — we treat them that way." },
      { title: "Furniture and cubicle work", body: "We move what we need to and work around the rest. Most offices we clean without anyone moving a file." },
      { title: "After-hours scheduling", body: "Evenings, weekends, overnight. Your staff shouldn't have to smell cleaning product." },
    ],
    process: [
      { step: "01", title: "Site walk", body: "We see the space, note fiber, backing, and stains, and talk with facilities about when and how to access." },
      { step: "02", title: "Pre-spray + agitate", body: "For traffic lanes and common spills, a targeted pre-spray and counter-rotating brush break up soil before extraction or encap." },
      { step: "03", title: "Clean", body: "Extraction or encapsulation depending on carpet and schedule. Low-moisture options let your team walk on it the same day." },
      { step: "04", title: "Report + schedule", body: "You get a brief report of what we did and when we'll be back. We track every visit for your facilities records." },
    ],
    problems: [
      { title: "Main entry grey-out", body: "Walk-off zones take a beating. We schedule those for frequent touch-ups so they don't drag the rest of the floor down." },
      { title: "Coffee and food spills", body: "Break rooms and desks. We respond fast between routine cleans when you need us to." },
      { title: "Printer toner and ink", body: "Tricky spills that get worse with the wrong solvent. We carry the right ones." },
      { title: "Odors in soft seating", body: "Lobbies, reception. Upholstery gets included in most of our commercial programs — just ask." },
    ],
    whyChoose: [
      { title: "Scheduled, not just reactive", body: "Carpet held on a rotation looks better year-round and costs less over the lifetime of the floor than emergency-only cleans." },
      { title: "Bonded and insured", body: "Certificate of insurance on file for your property manager or building owner, on request." },
      { title: "IICRC methods", body: "We don't cut corners on chemistry or dry times. Your flooring warranty stays intact." },
      { title: "One point of contact", body: "You call Kurt or one lead tech — not a call center." },
    ],
    faqs: [
      { q: "Can you clean during business hours?", a: "Sometimes, yes — it depends on your fiber and foot traffic. Low-moisture encapsulation leaves a floor walkable almost immediately. Most clients still prefer evenings and weekends." },
      { q: "Do you do HOA common areas?", a: "Often. Clubhouses, hallway carpet in condo buildings, common room upholstery, and tile in lobbies. We've done most HOA communities in the Saddleback Valley at some point." },
      { q: "What's the difference between encapsulation and extraction?", a: "Encapsulation uses a polymer that crystallizes around soil so it vacuums out later — dry in under an hour. Extraction uses heat and water for a deeper clean — dry in a few hours. Both have a place; we'll recommend based on your carpet and use." },
      { q: "Can you match our budget cycles?", a: "Yes. We can quarterly, semi-annual, or tie visits to your fiscal calendar. Many commercial clients set a fixed monthly and we draw from it as needed." },
      { q: "Are your products safe for office environments?", a: "All of our products are low-VOC and rinse-free-residue. No lingering chemical smell in the morning." },
      { q: "Do you offer fixed-price contracts?", a: "Yes, for clients who want budget predictability. We also do à la carte if you'd rather pay per service." },
    ],
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    shortTitle: "Upholstery Cleaning",
    primaryKeyword: "upholstery cleaning",
    image: "/images/upholstery.avif",
    tagline: "Sofas, sectionals, and dining chairs refreshed with fabric-safe care.",
    metaDescription:
      "Professional upholstery cleaning in Orange County — sofas, sectionals, dining chairs. IICRC fabric-safe methods. Free in-home estimates from Carpet Care Center.",
    heroIntro:
      "Upholstery is harder to clean than carpet. Fabrics are thinner, dyes are more sensitive, and you can't replace a sofa as easily as a rug. This is where a Master Textile Technician earns the title.",
    longIntro:
      "Most sofas look worse than their owners realize. Body oils, hair product, and skin cells deposit across the arms, headrests, and seat cushions every single day. After two or three years, the cushions look darker than the back, and the back looks darker than the arms — which is usually when people call us. We pre-test dyes in an inconspicuous spot, identify the fabric (W, S, W-S, or X codes matter), and build a method around the fiber. Cotton and linen we treat gently. Synthetic microfibers we can usually extract fully. Silk and viscose we hand-clean only. We tell you what to expect and what we won't try, rather than promising everything and ruining a dye job. Many of our customers are recovering from a bad steam-clean from a discount service — the fabric dried stiff, shrank, or watermarked. We can often correct those mistakes, and we can almost always prevent them in the first place."
    ,
    included: [
      { title: "Fabric code check", body: "The tag under the cushion matters. W, S, W-S, and X codes tell us what we can and can't use." },
      { title: "Dye-stability test", body: "In a hidden seam. If the dye moves, we change methods. Non-negotiable." },
      { title: "Cushion and frame clean", body: "Both sides of each cushion, the frame, arms, back, and skirt. We don't skip the parts you'll flip later." },
      { title: "Fabric-appropriate drying", body: "Air movers or natural drying, depending on construction. We don't over-wet." },
      { title: "Optional fabric protector", body: "On request, post-clean. Helps the next spill wipe up instead of soak in." },
    ],
    process: [
      { step: "01", title: "Assess", body: "Fabric, construction, soils, and sensitive spots. Written quote before anything gets wet." },
      { step: "02", title: "Pre-treat", body: "A fabric-safe pre-conditioner on soiled areas, with dwell time." },
      { step: "03", title: "Clean", body: "Low-moisture extraction for most upholstery. Hand-clean for silk, velvet, and viscose." },
      { step: "04", title: "Dry + groom", body: "Air movers if needed. Pile groomed. Cushions replaced in original orientation." },
    ],
    problems: [
      { title: "Headrest and arm staining", body: "Body oils, the most common issue. We pre-treat and extract — often a near-full recovery." },
      { title: "Food and drink spills", body: "Red wine on a cream couch, coffee on linen. We handle these every week." },
      { title: "Pet odor and hair", body: "Cat and dog odor can be extracted with enzymes. Hair comes out before we go wet." },
      { title: "Musty or mildewed fabric", body: "From humidity, a leak, or a closed-up vacation home. Tougher but often salvageable." },
    ],
    whyChoose: [
      { title: "We won't over-wet", body: "The number one cause of ruined upholstery is a cleaner who soaks it. We don't." },
      { title: "Fabric code trained", body: "We read the tag. We know the code. We match our chemistry. That's what certification means." },
      { title: "Real references", body: "Ask and we'll send you recent customers with similar fabrics. No NDAs, just a phone number." },
      { title: "Honest about limits", body: "Some stains on some fabrics don't come out. We tell you that before you pay us." },
    ],
    faqs: [
      { q: "How long does upholstery cleaning take?", a: "A standard three-seat sofa runs 45–60 minutes. A sectional, 90–120. Drying takes 4–8 hours depending on fabric weight and humidity." },
      { q: "Can you clean a white or cream sofa?", a: "Yes, and we do them often. Light-colored upholstery actually benefits more from professional cleaning than dark — soil shows fast, and every DIY attempt pushes it deeper." },
      { q: "What if the cushion covers are removable?", a: "Leave them on if the tag says do-not-machine-wash. Even when machine-washable, cushion covers can shrink and no longer fit. We can usually clean them in place more safely." },
      { q: "Do you clean dining chairs?", a: "Yes. Both seat and back. We clean by the chair or by the set — call for a quote on what you have." },
      { q: "Is fabric protector worth it?", a: "On light-colored and natural fibers, often yes. On performance fabrics and microfiber, your upholstery is already treated from the factory and re-applying usually isn't needed." },
      { q: "Can you clean leather?", a: "We clean and condition leather furniture separately from fabric. Different products, different process. Mention leather when you call." },
    ],
  },
  {
    slug: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    shortTitle: "Tile & Grout Cleaning",
    primaryKeyword: "tile and grout cleaning",
    image: "/images/tile-grout.avif",
    tagline: "Deep steam pressure restores grout to its original color.",
    metaDescription:
      "Tile and grout cleaning in Orange County — deep steam pressure restores grout, optional color sealing. IICRC-trained technicians, free in-home estimates.",
    heroIntro:
      "Tile stays tile. Grout is the problem. Porous, darker every year, impossible to scrub clean by hand — until pressure and heat come in from the truck.",
    longIntro:
      "Grout is cement. Cement is porous. Every drop of cooking oil, every tracked-in landscape soil, every splash of juice on a kitchen floor sinks in and stays. Mop water just smears it around. The only method that genuinely restores grout color is high-pressure steam — 220°F, 800+ PSI, contained under a ring vacuum so the spray stays on the tile and not on your cabinets. We pre-spray with an alkaline grout cleaner, dwell, then run the spinner head across the floor and watch the grout change color as we go. After it dries, we offer color sealing, which locks in the recovered color and makes the floor genuinely low-maintenance going forward. For natural stone — travertine, slate, marble — we use pH-neutral products and stone-specific methods because acidic cleaners etch stone. Every job starts with a walk-through so you know what's realistic for your particular floor.",
    included: [
      { title: "Floor inspection", body: "Tile type, grout condition, cracks, missing grout, and any stains that might need special handling." },
      { title: "Alkaline pre-spray", body: "The pre-spray loosens grease and embedded soil before the pressure head touches the floor." },
      { title: "High-pressure steam extraction", body: "Contained under a ring vacuum. The water goes in and comes right back out." },
      { title: "Grout detailing", body: "Stubborn spots get hand-agitated. We don't leave a line darker than its neighbors." },
      { title: "Optional color seal", body: "Uniform color locked in. Most customers who get it say they wish they'd done it years earlier." },
    ],
    process: [
      { step: "01", title: "Inspect", body: "Walk the floor with you. Identify tile, grout color, trouble zones. Written quote." },
      { step: "02", title: "Pre-treat", body: "Alkaline cleaner applied to grout and tile, given dwell time. Hand work on edges and corners." },
      { step: "03", title: "Extract", body: "High-pressure steam head with vacuum recovery pulls soil out of the grout pores." },
      { step: "04", title: "Seal (optional)", body: "Color seal or penetrating sealer applied after floor dries. Cures in 24 hours." },
    ],
    problems: [
      { title: "Grey or black grout lines", body: "Years of soil in the pores. Recovers dramatically with steam extraction." },
      { title: "Kitchen grease in front of the range", body: "Common. Alkaline pre-spray and dwell time handle it." },
      { title: "Soap scum on shower tile", body: "Bathrooms get a different chemistry than kitchen floors. We bring both." },
      { title: "Grout lines that look uneven after cleaning", body: "That's color loss in spots. Color seal evens it out and keeps it." },
    ],
    whyChoose: [
      { title: "Truck-mounted pressure", body: "Residential steamers can't reach the pressure or temperature needed to flush grout pores. Ours can." },
      { title: "Stone-safe methods", body: "Travertine, marble, slate each have their own rules. We follow them." },
      { title: "Color seal specialists", body: "The seal lasts 3–5 years and makes the floor genuinely easier to maintain." },
      { title: "Honest about re-grouting", body: "If grout is missing, we'll tell you to call a tile guy before we clean. We don't oversell." },
    ],
    faqs: [
      { q: "Will your equipment damage my tile or grout?", a: "Not when it's done right. We dial pressure for the tile type and we test on a hidden area. Old or chipped grout may need repair before cleaning — we tell you that up front." },
      { q: "What about natural stone?", a: "We clean travertine, marble, and slate with pH-neutral products and slower, lower-pressure passes. Never acidic cleaners, never aggressive scrubbing." },
      { q: "How long does it take?", a: "A 500 sq ft kitchen and entry runs about 2 hours. Bigger jobs, allow a half-day. Color seal adds another hour or two depending on square footage." },
      { q: "Do I need to seal my grout?", a: "Not required, but it extends the life of the clean by years. Without seal, grout starts re-absorbing soil immediately. With color seal, the floor stays looking like it did the day we left much longer." },
      { q: "How often should tile floors be cleaned?", a: "Kitchens and entries every 12–18 months. Low-use bathrooms and back rooms every 2–3 years. Shower tile, depending on use and ventilation, annually." },
      { q: "Can you remove set-in stains?", a: "Most embedded grout stains recover significantly. A few — like iron or heavy oil — may never come all the way back without color seal. We'll show you a test patch so you can decide." },
    ],
  },
  {
    slug: "drapery-cleaning",
    title: "Drapery Cleaning",
    shortTitle: "Drapery Cleaning",
    primaryKeyword: "drapery cleaning",
    image: "/images/draperies.avif",
    tagline: "On-site drapery cleaning that protects pleats, liners, and hardware.",
    metaDescription:
      "On-site drapery cleaning in Orange County — preserves pleats and length, handles silk and blackout liners. Carpet Care Center Inc., free estimates.",
    heroIntro:
      "Drapes hold more dust than any other fabric in a home, and they almost never get cleaned because the wrong method ruins them. On-site service solves that.",
    longIntro:
      "Dry-cleaning drapes is how families end up with panels that are suddenly two inches shorter than they were when they left. Shrinkage, pleat distortion, and liner damage are common. We clean drapery on-site using a low-moisture method that lets the drape stay hung — no take-down, no shrinkage, no reinstall fee. Silk, velvet, linen, cotton-blend, blackout-lined — each one gets a slightly different approach. We pre-dust with HEPA vacuum from top to bottom, pre-treat any visible soil, and apply a very light cleaning mist with an agitator brush. The fabric is damp, never wet. Pleats stay crisp. Hardware stays untouched. For drapes that are too soiled for on-site service, or for ornate silk panels where any moisture is a risk, we coordinate pickup and careful off-site handling. Either way, you get an honest assessment first."
    ,
    included: [
      { title: "HEPA dust removal", body: "Top to bottom, both sides. You'd be surprised how much dust comes off even a drape that looks clean." },
      { title: "Fiber and dye test", body: "Pre-test on a hidden fold before any product is applied." },
      { title: "On-site low-moisture clean", body: "Drapes stay hung. Fabric gets damp, not wet. Pleats keep their shape." },
      { title: "Deodorization", body: "Smoke, pet, cooking smells — neutralized rather than masked." },
      { title: "Touch-up pressing", body: "Pleats re-formed where needed after cleaning dries." },
    ],
    process: [
      { step: "01", title: "Inspect", body: "Fabric, construction, liner, and soil level. Quote given before we start." },
      { step: "02", title: "Dust", body: "HEPA vacuum front and back, hem to header. The single biggest visual improvement." },
      { step: "03", title: "Clean", body: "Low-moisture mist with fabric-safe solution. Gentle agitation only. No drenching." },
      { step: "04", title: "Finish", body: "Air dry with fans if needed. Pleats corrected. Room aired out." },
    ],
    problems: [
      { title: "Dust and airborne soil", body: "The universal drape problem. HEPA vacuum and low-moisture clean handle it." },
      { title: "Kitchen grease on dining room drapes", body: "Needs pre-treatment. Recoverable if caught before it oxidizes." },
      { title: "Smoke and cooking odor", body: "Fabric holds smell. We deodorize at the fiber level, not with fragrance." },
      { title: "Sun-faded or weakened fabric", body: "Cleanable but carefully. We adjust method to fiber age." },
    ],
    whyChoose: [
      { title: "On-site means no shrinkage", body: "The biggest drape failure is dry-cleaner shrinkage. We work around it." },
      { title: "Decades of drapery experience", body: "We've cleaned silk that's older than most of our technicians." },
      { title: "Honest about off-site cases", body: "When a drape really needs bath cleaning, we coordinate it instead of damaging it on-site." },
      { title: "Preserve the investment", body: "Custom drapes are expensive. Clean them right or don't clean them." },
    ],
    faqs: [
      { q: "Will you take my drapes down?", a: "Almost never. The on-site method keeps them hung. That's the whole point — no shrinkage, no reinstall labor." },
      { q: "What about blackout linings?", a: "We handle blackout and thermal linings carefully. The backing material reacts differently than the face fabric, so we test first." },
      { q: "Can you clean pleated drapes without flattening them?", a: "Yes. Low-moisture means the pleats don't get soaked. If they loosen slightly we re-form them before we leave." },
      { q: "How long does it take?", a: "A typical great-room of four to six panels runs 90 minutes. Dry time is 2–4 hours." },
      { q: "Do you clean sheers?", a: "Usually off-site for sheers, because they drop so heavily when wet. We'll handle logistics." },
      { q: "Can you get out pet urine on the hem?", a: "Often, yes. Hems touching the floor are a common pet spot. Enzymes and spot treatment recover most cases." },
    ],
  },
  {
    slug: "pet-odor-stain-removal",
    title: "Pet Odor & Stain Removal",
    shortTitle: "Pet Odor Removal",
    primaryKeyword: "pet odor removal",
    image: "/images/pet-odor-removal.avif",
    tagline: "Enzyme treatment that neutralizes odors — pad and all.",
    metaDescription:
      "Pet odor and stain removal in Orange County. Enzyme treatment that neutralizes urine at the pad level. IICRC-certified, honest assessments, free estimates.",
    heroIntro:
      "Pet odor is not a smell problem. It's a chemistry problem. Urine bonds with carpet fibers and pad, and the only way to remove it is to break those bonds — not cover them.",
    longIntro:
      "Urine contains uric acid crystals. When urine dries in carpet, those crystals bond with the fibers and the pad underneath. They also reactivate every time humidity rises, which is why a carpet smells worst on a hot day and why deodorizing sprays stop working an hour after you apply them. The only real solution is an enzymatic treatment that digests the uric acid at the molecular level. That is what we do. Minor accidents — fresh or small — usually resolve with surface extraction and enzyme application. Long-standing or heavy pet damage often needs the carpet pulled back, the pad replaced or treated, and the sub-floor sealed. We assess honestly and tell you which level of treatment makes sense. We do not pretend to fix a subfloor soaked in years of damage with a bottle of spray. We also don't over-sell you into pad replacement you don't need. A Black Light walkthrough during the estimate shows you exactly where the damage is — some of it will surprise you.",
    included: [
      { title: "Black-light inspection", body: "UV reveals all urine, not just the spots you've seen. Often eye-opening." },
      { title: "Enzyme pre-treatment", body: "Enzymes digest the uric acid. Not a mask. Not a cover." },
      { title: "Deep extraction", body: "Hot water extraction flushes neutralized urine and residue out of fibers." },
      { title: "Pad treatment where needed", body: "For saturated pad, we pull carpet back, treat or replace the pad, seal the subfloor." },
      { title: "Post-clean odor check", body: "We verify by smell and re-check under UV before calling it done." },
    ],
    process: [
      { step: "01", title: "UV inspect", body: "We map every affected spot, not just the ones you can see. Quote reflects actual damage." },
      { step: "02", title: "Enzyme dwell", body: "Enzyme applied generously, allowed to work. This is the step most cleaners rush — we don't." },
      { step: "03", title: "Extract", body: "Hot water flush pulls neutralized urine and residue out of carpet and pad." },
      { step: "04", title: "Verify", body: "Second black-light pass. If anything remains active, we re-treat before leaving." },
    ],
    problems: [
      { title: "Old, dried-in urine", body: "Reactivates with humidity. Enzyme digestion is the only real fix." },
      { title: "Multiple small accidents across a room", body: "Common with aging pets. We treat the pattern, not just spots." },
      { title: "Carpet-edge saturation", body: "Where cats or dogs linger against a wall. Pad is usually involved and we address it." },
      { title: "Pet-accident odor in rugs", body: "Area rugs can be off-site decontaminated in our plant for more thorough treatment." },
    ],
    whyChoose: [
      { title: "Enzymes, not cover-ups", body: "If a cleaner sprays something floral and calls it done, the odor is coming back. We don't work that way." },
      { title: "Honest about limits", body: "Some subfloor contamination needs carpet and pad replaced. We'll tell you if that's your situation." },
      { title: "UV verification", body: "Before and after. You see the result, not just smell it." },
      { title: "Real pet experience", body: "Kurt and the team have pets. We do this work in our own homes." },
    ],
    faqs: [
      { q: "Can you really get out old pet urine?", a: "In most cases, yes — with enzyme treatment and deep extraction. The exception is deeply contaminated pad or subfloor, which may need replacement. We tell you which category you're in before you pay." },
      { q: "Do I need to replace the carpet?", a: "Usually not. Pad yes, sometimes. Carpet itself, rarely. Come see us for an honest estimate before you spend thousands on replacement flooring." },
      { q: "Is the treatment safe for other pets?", a: "Yes. Enzymes are a biological process — no harsh chemicals residue. Pets can be back on the carpet once it's dry." },
      { q: "What if my dog goes on the fresh clean?", a: "Contact us. A fresh accident on a freshly cleaned carpet is actually the easiest scenario — we can often handle it on a quick return visit." },
      { q: "How many treatments will it take?", a: "Most pet odor jobs are one-and-done. Severe cases may need a second enzyme pass. We don't charge for a re-visit if the first treatment didn't fully resolve." },
      { q: "Does it work on cat urine?", a: "Yes. Cat urine is actually higher in uric acid than dog urine, which makes it smellier but not harder for enzymes to break down." },
    ],
  },
  {
    slug: "area-rug-cleaning",
    title: "Area Rug Cleaning",
    shortTitle: "Area Rug Cleaning",
    primaryKeyword: "area rug cleaning",
    image: "/images/area-rug-cleaning.avif",
    tagline: "Oriental, wool, and synthetic rugs cleaned in-plant or in-home.",
    metaDescription:
      "Area rug cleaning in Orange County — in-plant or in-home service for wool, silk, Oriental, and synthetic rugs. IICRC specialists. Pickup available.",
    heroIntro:
      "Area rugs are textiles, not carpet. They require different handling, different chemistry, and sometimes a different facility entirely. That's what Master Textile Technician training is for.",
    longIntro:
      "The single most abused textile in most homes is the area rug. It gets walked on, drooled on, spilled on, and vacuumed harshly, but it rarely gets cleaned properly because it needs to be removed, assessed, and washed by someone who knows the difference between wool, silk, synthetic, and blended construction. We offer two paths. In-home cleaning: we bring our equipment to you, extract on-site if the rug and subfloor allow, groom and dry. In-plant cleaning: for fine Oriental, Persian, antique, silk, or heavily soiled rugs, we pick up and take to our facility. In-plant includes full dust removal (a pre-clean step that removes pounds of dry soil from inside the foundation), immersion or controlled wash, pH-balanced rinse, and room-temperature dry flat. You get your rug back cleaner and more even than any in-home clean can produce. We assess every rug before committing to a method — and we tell you the truth about what it will cost and what to expect."
    ,
    included: [
      { title: "Fiber and dye test", body: "We check wool, silk, cotton, viscose, and blends. Dye bleed-test is non-negotiable on Oriental rugs." },
      { title: "Dusting", body: "For in-plant rugs, mechanical dusting removes dry soil before water touches the fibers. A step most places skip." },
      { title: "Immersion or low-moisture wash", body: "Sized to the rug. Immersion for wool/cotton. Low-moisture for viscose and silk." },
      { title: "Rinse and extraction", body: "pH-balanced rinse leaves no residue. Full extraction protects fibers during drying." },
      { title: "Controlled drying", body: "Flat-dry with airflow at room temperature. No heat stress." },
    ],
    process: [
      { step: "01", title: "Assess", body: "Fiber, age, construction, soil. In-home or in-plant decision made with you." },
      { step: "02", title: "Dust or pre-treat", body: "Dry soil removed first. Pre-spray applied to target areas with dwell time." },
      { step: "03", title: "Wash or extract", body: "Method matched to rug. Wool rugs love water; silk rugs need minimal moisture." },
      { step: "04", title: "Dry and finish", body: "Flat dry, groom, wrap, return." },
    ],
    problems: [
      { title: "Pet accidents on wool", body: "Wool is natural and handles enzymes well, but needs thorough rinsing. We do both." },
      { title: "Dye bleed risk", body: "Old Orientals and certain reds are known bleeders. We stabilize before we wash." },
      { title: "Moth damage and delicate fringe", body: "Fringe gets detailed separately. Damaged areas are identified so we don't make them worse." },
      { title: "Flat, matted piles", body: "Can often be lifted back up with proper cleaning and grooming." },
    ],
    whyChoose: [
      { title: "In-plant or in-home", body: "We'll tell you which your rug needs, honestly." },
      { title: "Master Textile Technician", body: "Kurt has cleaned every type of rug there is. Nothing surprises us." },
      { title: "Pickup and delivery", body: "For in-plant rugs, we pick up and return. No dragging it to a store." },
      { title: "Insured for what your rug is worth", body: "Even valuable Orientals. We're comfortable handling them." },
    ],
    faqs: [
      { q: "In-home or in-plant — which is better?", a: "In-plant is deeper, especially for fine rugs. In-home is fine for modern synthetics that aren't heavily soiled. We recommend based on the rug, not a flat rule." },
      { q: "Do you clean silk rugs?", a: "Yes, with a silk-specific low-moisture method. We test dye stability first and won't immerse silk." },
      { q: "What about rugs with pet urine?", a: "In-plant is almost always the right call for pet-urine rugs. Immersion and full flush get results you can't get with in-home extraction." },
      { q: "How much does it cost?", a: "Pricing is by square foot, varying by fiber and method. We quote in person or from photos — always free." },
      { q: "How long will it take?", a: "In-home: a few hours. In-plant: 7–14 days depending on size, drying, and season." },
      { q: "Will fringe be cleaned?", a: "Yes. Fringe is detailed separately, often by hand, especially on Orientals and Persians." },
    ],
  },
  {
    slug: "carpet-repairs",
    title: "Carpet Repairs & Restretching",
    shortTitle: "Carpet Repairs",
    primaryKeyword: "carpet repair",
    image: "/images/carpet-repairs.avif",
    tagline: "Reseaming, patching, and power-stretching — carpet made new again.",
    metaDescription:
      "Carpet repairs and restretching in Orange County. Power-stretch, patch, reseam, and transition repair. IICRC-trained. Save your carpet before you replace it.",
    heroIntro:
      "Most carpets don't need to be replaced. They need to be repaired. Wrinkles, burns, pet patches, and failed seams are all fixable — often for a small fraction of replacement cost.",
    longIntro:
      "A buckled or wrinkled carpet is not worn out. It's stretched out. Most installers use a knee-kicker instead of a power stretcher, which leaves the carpet under-tensioned. A year or two later, the carpet bubbles up. The fix is a proper power stretch using a lever-style tool anchored wall-to-wall — the same method that should have been used at install. Patches are similar. A pet-damaged, bleached, or cigarette-burned spot can be cut out and replaced with a matching piece (often from a closet), seamed to the surrounding carpet so tightly that the repair disappears into the pile. Transition repairs — where carpet meets tile, vinyl, or wood — are a common issue we fix in a single visit. Restretching usually takes a morning. Most patches take an hour. We'd rather save you from an unnecessary replacement than upsell you into one. We'll tell you straight whether your carpet is worth repairing before we commit to the job.",
    included: [
      { title: "Honest walk-through", body: "Some carpets genuinely aren't worth repairing. We'll tell you when that's the case." },
      { title: "Power-stretching", body: "Proper tool for a lasting fix. Kicker-only repairs don't hold." },
      { title: "Patching from donor", body: "Matching carpet from a closet or extra roll. Undetectable seams." },
      { title: "Seam repair", body: "Failed seams re-bonded with fresh tape and a seaming iron." },
      { title: "Transition repair", body: "Where carpet meets tile or hardwood. Re-tacked, re-tucked, or new transition strip." },
    ],
    process: [
      { step: "01", title: "Assess", body: "Type and scope of repair. Donor source identified. Written quote." },
      { step: "02", title: "Prep", body: "Furniture moved as needed. Damaged section removed cleanly if patching." },
      { step: "03", title: "Repair", body: "Power-stretch, patch-and-seam, or transition fix. Done cleanly and tight." },
      { step: "04", title: "Clean", body: "We extract the repair area so the patch blends with the rest of the carpet in color and texture." },
    ],
    problems: [
      { title: "Wrinkles and buckles", body: "Power-stretch fixes almost all of these. Fast and permanent." },
      { title: "Pet-chewed corners and edges", body: "Patch from donor, seam, done." },
      { title: "Burn marks and bleach spots", body: "Small patches disappear into the pile. Larger ones are still cheaper than new carpet." },
      { title: "Seam coming up", body: "Usually a failed adhesive tape under the seam. Simple re-bond." },
    ],
    whyChoose: [
      { title: "We repair before we replace", body: "Unlike flooring stores, we don't make money on a new install. We save the one you've got." },
      { title: "Proper tools", body: "Power stretcher, seaming iron, fresh tape. Not a knee-kicker and a prayer." },
      { title: "Clean-up included", body: "Patch areas get cleaned to blend. You won't see where the repair was." },
      { title: "Sixty years of experience", body: "We know what will hold and what won't. We tell you the truth." },
    ],
    faqs: [
      { q: "How much does carpet repair cost?", a: "Most patches run under $250. A full power-stretch of a typical room is usually $200–$400. Almost always a fraction of replacement cost." },
      { q: "Can you match my carpet for a patch?", a: "If you have leftover carpet in a closet or garage, yes. If not, we sometimes use donor pieces from a closet to patch a visible room and then put a remnant back in the closet. We'll walk through options with you." },
      { q: "Will I see the patch?", a: "If done correctly, no. Seams are cut on the diagonal, pile direction is matched, and the area is cleaned to blend. Most customers can't find the patch a week later." },
      { q: "Does restretching need to happen before cleaning?", a: "If the carpet is loose and we're planning to clean anyway, we recommend stretching first. Wet carpet stretches poorly and will wrinkle back faster." },
      { q: "Is it worth repairing old carpet?", a: "If the fiber is still in good shape, yes. If the pile is already crushed flat through the whole house, probably not. Call us — we'll tell you which it is." },
      { q: "How long does a stretch take?", a: "A typical room is 90 minutes to 2 hours. Whole house, half a day. Furniture has to be moved in stages." },
    ],
  },
];

export const CITIES: City[] = [
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    zip: "92691",
    intro:
      "Our headquarters city since day one. We know Mission Viejo carpet — the builder-grade cuts in the older tracts, the wool Berbers in the Deane homes, and everything Lake and master-planned.",
    longAbout:
      "Mission Viejo is where we live, where our truck is garaged overnight, and where we have cleaned more homes than anywhere else on earth. The city is one of the largest master-planned communities in the country, which means a lot of homes share builder-grade carpet of the same era — and share the same wear patterns as they age. We know the Deane Homes carpeting, the Casta del Sol floor plans, the 92691 tracts from Felipe to Marguerite, and the Lake-front homes in 92692 with their bigger footprints and lakeside sand traffic. We're based at 23632 Via Fabricante and we can be at your door usually within a day or two of your call. The Shops at Mission Viejo is five minutes from our shop; Lake Mission Viejo is ten. If you've been around long enough to remember The Shops when it was just the Mall, you've probably seen our truck parked in your neighborhood already.",
    neighborhoods: ["Deane Homes", "Casta del Sol", "Aegean Hills", "El Dorado", "Lake Mission Viejo area"],
    landmarks: ["Lake Mission Viejo", "The Shops at Mission Viejo", "Saddleback Valley"],
    localReasons: [
      { title: "We live here", body: "Our shop is on Via Fabricante. Most of our jobs in town are within a ten-minute drive." },
      { title: "Master-planned community expertise", body: "The tracts in Mission Viejo share carpet and floor plan characteristics. We know where traffic lanes hit on your exact floor plan." },
      { title: "HOA-familiar", body: "We've been through Lake Mission Viejo Association gate protocols more times than we can count. No wasted time." },
      { title: "Since 1965, here", body: "When the tracts were first built, we were already cleaning carpet in the valley." },
    ],
    testimonials: [
      {
        author: "Karen W.",
        neighborhood: "Deane Homes",
        service: "Residential carpet cleaning",
        body: "Kurt's crew cleaned our living room and hallway after twelve years of kids and a retriever. The lanes in front of the fireplace and the stairs look almost new. He also pointed out a loose seam by the pantry and reseamed it on the spot. Honest pricing and zero upsell.",
      },
      {
        author: "David H.",
        neighborhood: "Casta del Sol",
        service: "Tile and grout",
        body: "We had darker grout in the entry tile for years and had just accepted it. They steamed the kitchen and entry and then sealed it in the Casta del Sol walnut tone we chose. Floor looks like a totally different house. Should have called a decade ago.",
      },
      {
        author: "Michelle T.",
        neighborhood: "Aegean Hills",
        service: "Pet odor removal",
        body: "Our old beagle left a situation we couldn't fix with store products. Carpet Care Center did a UV walkthrough and showed me exactly where the damage was, then enzyme-treated the pad in the hall and master. No smell, and I've got two other dogs now who are behaving.",
      },
    ],
    faqs: [
      {
        q: "Do you service Lake Mission Viejo Association homes?",
        a: "Yes — frequently. We're familiar with Lake Mission Viejo gate procedures and HOA requirements. If you need a certificate of insurance sent ahead, mention it when you book and we'll have it to your management office the same day.",
      },
      {
        q: "How fast can you get to Mission Viejo?",
        a: "We're based in Mission Viejo, so usually within a day or two. Same-day for emergencies when a truck is free. Our shop is at 23632 Via Fabricante — most Mission Viejo addresses are under a fifteen-minute drive.",
      },
      {
        q: "Do you clean Casta del Sol and other senior communities?",
        a: "Yes, regularly. We're used to scheduling around community events, quiet hours, and guest check-in requirements. Mention your community when you call and we'll fit the visit to the community rules.",
      },
    ],
    lat: 33.6,
    lng: -117.672,
  },
  {
    slug: "irvine",
    name: "Irvine",
    zip: "92602",
    intro:
      "Irvine homes run the gamut — from compact Woodbridge townhomes to Turtle Rock custom builds. Each village has its own carpet and upholstery profile.",
    longAbout:
      "Irvine is a master-planned city made up of distinct villages, and each one has its own carpet and upholstery character. Woodbridge homes tend to have mid-grade nylon in neutral tones that get heavy use with kids and commute traffic to UC Irvine or Spectrum. Northwood's older pockets sometimes still have original plush from the eighties that cleans up beautifully if treated right. Turtle Rock leans toward higher-end wool and wool-blends, often in cream or taupe, which demand careful fiber handling. Our technicians arrive knowing the typical carpet for your village and adjusting chemistry accordingly. We cover every Irvine zip code from 92602 through 92720, from Orchard Hills down to the condos near the Spectrum. If you're an Irvine Company tenant, we're comfortable with property manager protocols too — just mention the community when you book.",
    neighborhoods: ["Woodbridge", "Northwood", "Turtle Rock", "Orchard Hills", "Quail Hill"],
    landmarks: ["UC Irvine", "Irvine Spectrum", "Woodbridge Lakes"],
    localReasons: [
      { title: "We know the villages", body: "Woodbridge, Northwood, Turtle Rock, Quail Hill — different carpet, different approach." },
      { title: "Close proximity", body: "Irvine is a short run up the 5 or 405 from our Mission Viejo shop. Same-week service is realistic." },
      { title: "UCI rental-turnover expertise", body: "Move-in/move-out cleans, pet deposit rescues, and fast scheduling for quarter transitions." },
      { title: "Irvine Company-familiar", body: "We've worked with Irvine Company properties and HOAs. Certificate of insurance on request." },
    ],
    testimonials: [
      {
        author: "Allison G.",
        neighborhood: "Woodbridge",
        service: "Residential carpet cleaning",
        body: "We had two years of toddler and golden retriever traffic across the family room. Kurt's team pre-treated everything before extracting. The lanes to the kitchen completely disappeared. Our sliders' area got extra attention for sand tracking from the pool. Really pleased.",
      },
      {
        author: "Scott F.",
        neighborhood: "Turtle Rock",
        service: "Upholstery cleaning",
        body: "We have a cream linen sectional that had started looking rough on the arms and headrests. I was nervous about anyone touching it. They tested dye stability, used a low-moisture method, and the piece looks like it did three years ago. Honest about what they couldn't promise too.",
      },
      {
        author: "Priya R.",
        neighborhood: "Northwood",
        service: "Tile and grout",
        body: "The kitchen tile grout hadn't looked clean in years. We thought we needed to replace. They cleaned and color-sealed in a walnut tone that matched the grout when it was new. Half the cost of replacement, done in a morning.",
      },
    ],
    faqs: [
      {
        q: "Do you service all Irvine villages?",
        a: "Yes — Woodbridge, Northwood, Turtle Rock, Orchard Hills, Quail Hill, Shady Canyon, Portola Springs, and the Spectrum area. Every Irvine zip from 92602 to 92720.",
      },
      {
        q: "Do you work with Irvine Company property managers?",
        a: "Frequently. We've done unit-level cleans for several Irvine Company managed apartment communities and are comfortable with their documentation. Certificate of insurance can be sent directly to your manager.",
      },
      {
        q: "Can you handle UCI rental turnovers?",
        a: "Yes. We've handled plenty of end-of-lease cleans near campus — including aggressive pet treatment when tenants leave surprises. Often the difference between getting a deposit back and losing it.",
      },
    ],
    lat: 33.685,
    lng: -117.826,
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    zip: "92630",
    intro:
      "Lake Forest homes run young, active, and busy. Family carpet, dog hair, and pool traffic — the three things we see on every job in 92630.",
    longAbout:
      "Lake Forest is a family city. The majority of our Lake Forest calls involve busy households with multiple kids, at least one dog, and a backyard pool or community amenity like the Sun & Sail Club that sends a constant stream of sand and chlorine dust toward the house. We know the Foothill Ranch custom homes with their higher-end carpet and the Portola Hills tracts with the thirty-year-old builder-grade plush that still has life in it if cleaned right. Lake Forest HOA communities are common clients and we're comfortable with HOA gate protocols. Most of our Lake Forest jobs are fifteen minutes from our Mission Viejo shop, so scheduling is flexible and same-week service is routine. If you're near the Sun & Sail Club, our truck knows the way.",
    neighborhoods: ["Foothill Ranch", "Portola Hills", "Sun & Sail Club area", "Baker Ranch"],
    landmarks: ["Sun & Sail Club", "Heritage Hill Historical Park", "Saddleback Valley"],
    localReasons: [
      { title: "Kid-and-pet households", body: "We handle what family carpets actually see — spills, sand, pet accidents, craft disasters." },
      { title: "Foothill Ranch and Portola Hills expertise", body: "Different carpet, different construction. We adjust accordingly." },
      { title: "Close and fast", body: "Lake Forest is fifteen minutes from our shop. Scheduling is easy." },
      { title: "Lake Forest HOA familiarity", body: "We've done work in most Lake Forest HOA communities at some point in the last decade." },
    ],
    testimonials: [
      {
        author: "Brian L.",
        neighborhood: "Foothill Ranch",
        service: "Residential carpet cleaning",
        body: "Three kids, a yellow lab, and a pool. Our family room carpet was gone by month six each year. Carpet Care Center now cleans it twice a year and it holds up. Worth every penny. They also handled a red drink spill in the dining room that I thought was permanent.",
      },
      {
        author: "Jessica M.",
        neighborhood: "Portola Hills",
        service: "Pet odor removal",
        body: "Our older boxer wasn't making it to the door. We had a pattern in the hallway that I was embarrassed about. Their UV walkthrough showed me everything. They enzyme-treated and extracted and I stopped smelling anything. No floral cover-up scent either, which I appreciated.",
      },
      {
        author: "Kevin R.",
        neighborhood: "Sun & Sail Club area",
        service: "Tile and grout",
        body: "Pool traffic grout in our entry and kitchen was genuinely dirty. They steamed and then sealed, and I can actually mop the floor now and have it look clean afterward. Big difference for a busy household.",
      },
    ],
    faqs: [
      {
        q: "Do you service Foothill Ranch and Portola Hills?",
        a: "Yes. Both are regular service areas. We know the HOA entrance procedures and can coordinate with your property management if needed.",
      },
      {
        q: "Can you handle families with multiple pets?",
        a: "Routine for us. Many of our Lake Forest customers have two or more dogs. We bring extra enzyme and schedule extra dwell time for pet households.",
      },
      {
        q: "Is Lake Forest within your core area?",
        a: "Yes — it's about fifteen minutes from our shop in Mission Viejo. Same-week scheduling is standard and we often have same-day availability for emergencies.",
      },
    ],
    lat: 33.6469,
    lng: -117.6858,
  },
  {
    slug: "laguna-hills",
    name: "Laguna Hills",
    zip: "92653",
    intro:
      "Laguna Hills runs upscale with Nellie Gail Ranch and the horse country lifestyle. Higher-end carpet and more upholstery work than the surrounding cities.",
    longAbout:
      "Laguna Hills has a different character than Mission Viejo or Lake Forest. Nellie Gail Ranch homes sit on larger lots, often with equestrian facilities, and tend to have higher-end wool or wool-blend carpet and more custom upholstery. The stretch along Moulton Parkway near the Laguna Hills Mall is a mix of executive-style homes and newer builds. Our Laguna Hills clients typically want premium care and take carpet and fabric seriously — and we respect that. Many of them have been with us for a decade or more and know they can call Kurt directly. Our technicians understand the specific needs of wool carpet, Berber construction, and natural-fiber upholstery, which are common in Nellie Gail and throughout 92653. We're seven minutes from most Laguna Hills addresses.",
    neighborhoods: ["Nellie Gail Ranch", "Moulton Ranch", "Laguna Hills Mall area"],
    landmarks: ["Nellie Gail Ranch", "Laguna Hills Mall", "Moulton Meadows"],
    localReasons: [
      { title: "Wool and high-end fiber expertise", body: "Nellie Gail and Moulton homes often have wool or wool-blend carpet. We know how to treat it." },
      { title: "Upholstery specialists", body: "Custom upholstery is common in Laguna Hills. Our Master Textile Technician does more custom upholstery here than anywhere else." },
      { title: "Equestrian-community familiarity", body: "Barn-to-house carpet traffic is a thing. We handle the sand and hay that comes with it." },
      { title: "Long-term clients", body: "Many of our Laguna Hills customers have been with us for 10+ years. Relationships matter." },
    ],
    testimonials: [
      {
        author: "Patricia B.",
        neighborhood: "Nellie Gail Ranch",
        service: "Residential carpet cleaning",
        body: "We have cream Berber throughout the main floor and horses out back. Which is a combination most cleaners can't quite handle. Kurt's team knows how to approach wool and they kept the carpet bright without over-wetting. Impeccable work.",
      },
      {
        author: "Gary W.",
        neighborhood: "Moulton Ranch",
        service: "Upholstery cleaning",
        body: "We have a vintage linen sofa that had started to yellow on the arms. They tested dye stability first and used an ultra-low-moisture method. Fabric looks right again. They were honest that full recovery wasn't guaranteed — but it came back very well.",
      },
      {
        author: "Alicia N.",
        neighborhood: "Nellie Gail Ranch",
        service: "Area rug cleaning",
        body: "Our hand-knotted Persian in the dining room hadn't been cleaned in eight years and had a wine spill from a Christmas party. They took it in-plant, dusted, washed, and returned it in about ten days. Colors are brighter and the wine is completely gone. Worth the wait.",
      },
    ],
    faqs: [
      {
        q: "Do you clean wool Berber carpet?",
        a: "Yes — often. Wool Berber is common in Nellie Gail Ranch and requires careful pH management and a low-moisture approach. Our Master Textile Technician has been cleaning wool Berber for over thirty years.",
      },
      {
        q: "Can you handle fine Oriental rugs?",
        a: "We can — typically in-plant for anything hand-knotted, silk, or antique. Pickup and delivery included. We treat older rugs with the caution they deserve.",
      },
      {
        q: "Do you handle horse-property traffic?",
        a: "Yes. Barn sand, hay dust, and occasional boot traffic are things we see regularly in Nellie Gail. We bring extra pre-treatment time for these jobs.",
      },
    ],
    lat: 33.5961,
    lng: -117.6988,
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    zip: "92677",
    intro:
      "Laguna Niguel homes sit between the 73 and the coast. Coastal air, occasional ocean mist, and upscale construction change how we approach both carpet and upholstery.",
    longAbout:
      "Laguna Niguel's proximity to the coast and the fog line gives its carpet and upholstery a different wear profile than inland cities. Humidity is higher, so dry times take planning. Salt-air oxidation on natural fibers is real, especially in Ocean Ranch and homes near Salt Creek Beach. Bear Brand Ranch, Marina Hills, and the estates around the 73 are high-end markets where wool and wool-blend carpet is the norm. Our Laguna Niguel service area covers 92677 from top to bottom and we've been doing coastal-community cleans since long before the 73 was completed. We know how to account for humidity in drying schedules and how to protect natural-fiber upholstery from coastal conditions. Most of our Laguna Niguel customers are repeat — and many have been with us for 15+ years.",
    neighborhoods: ["Ocean Ranch", "Bear Brand Ranch", "Marina Hills", "Kite Hill"],
    landmarks: ["Salt Creek Beach", "Dana Point Harbor proximity", "73 Toll Road"],
    localReasons: [
      { title: "Coastal humidity expertise", body: "Longer dry times, different chemistry. We plan for the ocean influence." },
      { title: "Wool-blend carpet knowledge", body: "Common in Bear Brand and Ocean Ranch. Wool needs careful pH and moisture control." },
      { title: "Fabric preservation", body: "Salt air oxidizes natural fibers. We can slow it down and often reverse some staining from it." },
      { title: "Long-term relationships", body: "Many of our Laguna Niguel clients are multi-generational. Some of them are our oldest customers." },
    ],
    testimonials: [
      {
        author: "Richard B.",
        neighborhood: "Ocean Ranch",
        service: "Residential carpet cleaning",
        body: "We're a stone's throw from Salt Creek Beach. Salt and sand get tracked in no matter how careful you are. The team knows coastal conditions and how to approach wool carpet in that environment. Dry times were a little longer than inland but they set expectations right.",
      },
      {
        author: "Helen M.",
        neighborhood: "Bear Brand Ranch",
        service: "Upholstery cleaning",
        body: "Our linen chairs by the french doors had started to look oxidized — salty air does that. Kurt took it on and recovered most of the color. He was honest that full recovery wasn't possible with the fiber age, which I appreciated more than a promise.",
      },
      {
        author: "Anthony C.",
        neighborhood: "Marina Hills",
        service: "Tile and grout",
        body: "Grout hadn't looked right since we moved in six years ago. They steamed and color-sealed in a Marina Hills gray and the whole entry looks like a different home. Clean tile is easier to keep clean.",
      },
    ],
    faqs: [
      {
        q: "Do coastal conditions change how you clean?",
        a: "Yes — a little. Dry times are longer because of higher humidity, and some natural fibers oxidize faster near the coast. We account for both by adjusting chemistry and scheduling longer airflow time when needed.",
      },
      {
        q: "How often should coastal-area carpet be cleaned?",
        a: "More often than inland — every 9–12 months is realistic for homes within two miles of the coast. Salt dust and marine air put more stress on fibers.",
      },
      {
        q: "Do you service gated communities in Laguna Niguel?",
        a: "Most of them. Bear Brand Ranch, Ocean Ranch, and others — we're familiar with gate protocols and can send a certificate of insurance ahead of time on request.",
      },
    ],
    lat: 33.5225,
    lng: -117.7076,
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    zip: "92688",
    intro:
      "RSM homes are newer, well-maintained, and often HOA-covered. We know the Dove Canyon custom home market and the tight-knit Plaza Antonio neighborhoods.",
    longAbout:
      "Rancho Santa Margarita is a younger community than Mission Viejo but sits in the same valley geography. The master plan is well-defined and most homes we clean in RSM fall into one of a handful of builder types — which means our technicians walk into a familiar floor plan on almost every job. Dove Canyon homes tend to be higher-end with premium carpet and more custom upholstery; central RSM and the Plaza Antonio area are family-focused with a lot of mid-grade nylon that benefits from semi-annual cleans. RSM Lake sits in the middle of the community and many of our lakefront clients have specific sand-and-mud patterns at entry points. We're 12 minutes from our Mission Viejo shop on Santa Margarita Parkway, so scheduling is easy and same-week service is realistic.",
    neighborhoods: ["Dove Canyon", "Plaza Antonio area", "Melinda Heights", "Trabuco Highlands"],
    landmarks: ["RSM Lake", "Plaza Antonio", "Dove Canyon"],
    localReasons: [
      { title: "Dove Canyon custom-home familiarity", body: "Higher-end fibers and upholstery. We adjust for what's actually in your home." },
      { title: "RSM HOA community knowledge", body: "Gate protocols and community rules — we're routine here." },
      { title: "Family-home experience", body: "Plaza Antonio and Melinda Heights family carpet gets the pet-and-kid treatment plan." },
      { title: "Close proximity", body: "Twelve-minute drive from our shop. Easy scheduling, easy follow-up." },
    ],
    testimonials: [
      {
        author: "Jennifer T.",
        neighborhood: "Dove Canyon",
        service: "Residential carpet cleaning",
        body: "Our wool carpet in the formal living room had started to grey in the traffic paths. Kurt's team treated it gently and it came back beautifully. They also noticed a buckle near the dining room and came back the next week to power-stretch it. Great attention to detail.",
      },
      {
        author: "Mark S.",
        neighborhood: "Plaza Antonio area",
        service: "Residential carpet cleaning",
        body: "Plaza Antonio townhome, three kids, zero patience for stain sprays. Carpet Care Center cleaned the whole unit in about two hours and the lanes to the kitchen disappeared. Honest pricing and they were right on time.",
      },
      {
        author: "Amanda P.",
        neighborhood: "Melinda Heights",
        service: "Pet odor removal",
        body: "Two cats and one older dog. We had cumulative issues we couldn't really smell anymore until a guest mentioned it. UV walkthrough was humbling. Enzyme treatment and extraction later — night and day. Highly recommend.",
      },
    ],
    faqs: [
      {
        q: "Do you service Dove Canyon?",
        a: "Yes — regularly. Dove Canyon is a gated community and we're familiar with the entry procedures. Certificate of insurance sent ahead on request.",
      },
      {
        q: "Can you clean RSM townhome-style carpets?",
        a: "Yes. Most RSM townhomes share a common layout and fiber type and we can usually quote from a brief phone description. Same-week scheduling is typical.",
      },
      {
        q: "How fast can you get to RSM?",
        a: "About twelve minutes from our Mission Viejo shop. Next-day scheduling is normal and emergencies can sometimes be same-day.",
      },
    ],
    lat: 33.6406,
    lng: -117.6031,
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    zip: "92656",
    intro:
      "Aliso Viejo is compact, walkable, and full of condo and townhome communities. Most of our Aliso Viejo work is HOA-friendly and well-defined by community.",
    longAbout:
      "Aliso Viejo packs a lot of community into a small footprint. Vantis, Glenwood, and Aliso Town Center are the anchors, and most of our Aliso Viejo jobs sit within one of the large condo or townhome communities that surround them. That means we know the floor plans, the carpet, and the HOA rules for most of the major communities here. Aliso Town Center is a frequent reference point when clients describe where they live. Aliso Viejo upholstery tends to be modern performance fabrics rather than traditional natural fibers, which changes our chemistry. The community is ten minutes from our Mission Viejo shop and most of our Aliso Viejo work is same-week or next-day. If you're an Aliso Viejo property manager, we've probably already been in your community — call and mention the community name.",
    neighborhoods: ["Glenwood", "Vantis", "Aliso Town Center area", "California Renaissance"],
    landmarks: ["Aliso Town Center", "Grand Park", "Aliso & Wood Canyons"],
    localReasons: [
      { title: "HOA and condo expertise", body: "We've cleaned in most Aliso Viejo communities. Gate protocols, quiet hours, elevator scheduling — we know the drill." },
      { title: "Performance fabric chemistry", body: "Modern Aliso Viejo upholstery is often performance fabric, which is cleaned differently than natural fiber." },
      { title: "Fast access", body: "Ten minutes from our shop. Same-week and often next-day service." },
      { title: "Move-in / move-out specialists", body: "Rental turnover in Aliso Viejo is constant. We're a common name on property-manager recommendation lists." },
    ],
    testimonials: [
      {
        author: "Jonathan L.",
        neighborhood: "Glenwood",
        service: "Residential carpet cleaning",
        body: "Glenwood two-bedroom condo, dry inside of 5 hours, carpet looks like it did when we moved in. The tech also pointed out a spot behind the sliders that needed a little more attention and came back the next morning to finish it. Great service.",
      },
      {
        author: "Rebecca S.",
        neighborhood: "Vantis",
        service: "Upholstery cleaning",
        body: "We have performance fabric on the sectional and didn't think it needed cleaning until we looked at the arms in daylight. They tested chemistry first, cleaned carefully, and the piece looks almost new. No water damage, no fuzzing.",
      },
      {
        author: "Carlos M.",
        neighborhood: "California Renaissance",
        service: "Move-out cleaning",
        body: "Pet-deposit rescue mission. We'd had two dogs in the unit for three years. Carpet Care Center pulled it off — the leasing office signed off and I got my full deposit back. I was convinced it was a lost cause.",
      },
    ],
    faqs: [
      {
        q: "Do you service Aliso Viejo HOAs and condo communities?",
        a: "Yes, most of them. Glenwood, Vantis, and California Renaissance are frequent. We bring certificates of insurance on request and work around quiet hours.",
      },
      {
        q: "Can you help with a rental move-out?",
        a: "Absolutely. Aliso Viejo rental turnover is a common call. We focus on pet treatment, high-traffic lane recovery, and anything that might affect the deposit. Many property managers in Aliso Viejo refer us specifically for this.",
      },
      {
        q: "Is your service fast in Aliso Viejo?",
        a: "Yes — ten minutes from our shop. Next-day is often available and same-day can sometimes be arranged for urgent jobs.",
      },
    ],
    lat: 33.576,
    lng: -117.7256,
  },
  {
    slug: "saddleback-valley",
    name: "Saddleback Valley",
    zip: "92691",
    intro:
      "Our original service territory since 1965. Saddleback Valley stretches from Mission Viejo through Lake Forest to Laguna Hills — and we've been in every tract at some point.",
    longAbout:
      "Saddleback Valley is not a city but a geographic region — and historically, it is our home territory. We've been cleaning carpet here since 1965, which means we've been in essentially every tract that exists, often multiple times across generations of the same family. The valley covers Mission Viejo, Lake Forest, Laguna Hills, and parts of Rancho Santa Margarita and Aliso Viejo, with the Saddleback Mountains as the eastern boundary. The carpet and upholstery profile is mixed — older builder-grade nylon in the original tracts, higher-end wool and blends in newer construction, and everything between. What ties the valley together for us is familiarity. Our trucks know every shortcut. Our technicians recognize floor plans by the entry tile. And our schedule treats the entire valley as one service area, which means you get our full service without drive-time premiums.",
    neighborhoods: ["Mission Viejo", "Lake Forest", "Laguna Hills", "southern Lake Forest", "northern Laguna Hills"],
    landmarks: ["Saddleback Mountain", "Lake Mission Viejo", "Saddleback College"],
    localReasons: [
      { title: "Our home since 1965", body: "Sixty years in one valley. We know every tract, every HOA, every floor plan." },
      { title: "No drive-time premium", body: "The whole valley is our local area. You get the same attention as our Mission Viejo neighbors." },
      { title: "Multi-generational customers", body: "We've cleaned carpet for families whose parents and grandparents were our customers." },
      { title: "Full service area mastery", body: "Builder-grade tracts to custom homes. Different chemistry, same standards." },
    ],
    testimonials: [
      {
        author: "Laura K.",
        neighborhood: "Mission Viejo / Saddleback Valley",
        service: "Residential carpet cleaning",
        body: "My parents hired Carpet Care Center in the seventies when we first moved in. I called them last month for my own house up the street. Kurt still runs the place. That kind of continuity is rare — and the work is still as good as it was when I was a kid watching them clean our living room.",
      },
      {
        author: "Greg N.",
        neighborhood: "Lake Forest / Saddleback Valley",
        service: "Tile and grout",
        body: "They cleaned the tile in the family room and kitchen and pointed out a cracked grout line that needed a tile guy. Didn't try to upsell me a seal on a floor that needed repair first. Honest, practical advice. That's why I keep calling them.",
      },
      {
        author: "Susan B.",
        neighborhood: "Laguna Hills / Saddleback Valley",
        service: "Upholstery cleaning",
        body: "Three decades with the same company. My wool carpet has outlasted two sofas and a refrigerator. That's what proper cleaning does. And the same family that cleaned it in 1992 still cleans it in 2026. Worth more than I can say.",
      },
    ],
    faqs: [
      {
        q: "Where exactly is the Saddleback Valley?",
        a: "Roughly from Mission Viejo through Lake Forest to Laguna Hills, bounded on the east by the Saddleback Mountains. Parts of Rancho Santa Margarita and Aliso Viejo are often included too. We cover the entire region from our Mission Viejo shop.",
      },
      {
        q: "How long have you been serving the Saddleback Valley?",
        a: "Since 1965. Sixty years, three generations, and still family-owned. Our oldest active customer accounts go back to the late sixties.",
      },
      {
        q: "Do you treat all valley cities the same?",
        a: "Same quality standards everywhere, but our chemistry and approach adjust to the fiber and home type — builder-grade nylon in older Mission Viejo homes looks different from wool Berber in Nellie Gail. Same team, different tools.",
      },
    ],
    lat: 33.6,
    lng: -117.65,
  },
];

// Combo-specific content — keyed by `${serviceSlug}|${citySlug}`.
// Not every combination needs every field; the page template fills from service + city defaults when missing.
export const COMBO_CONTENT: Record<string, ComboContent> = {
  "residential-carpet-cleaning|mission-viejo": {
    hero: "Residential carpet cleaning in Mission Viejo, done the way it's been done since 1965 — right here, on your tract, by technicians who know your floor plan before they walk in.",
    body1:
      "Our Mission Viejo residential customers live in one of the most consistent master-planned markets in the country, which means we've cleaned the same floor plans over and over for three generations. The Deane Homes wear their traffic lanes in the hallway and at the kitchen transition. The Casta del Sol units show it at the pantry and the slider. The 92692 lake-facing homes show sand at the patio door. We know exactly where to spend the extra pre-treatment time on your home without asking.",
    body2:
      "Our shop is five minutes from most Mission Viejo addresses. If you call by late morning, we can often be there the same afternoon or early the next day. We bring truck-mounted hot water extraction, the right pre-treatment for your carpet's exact fiber, and the experience of a Master Textile Technician who has probably been in your neighbor's house.",
    homesDifferent:
      "Mission Viejo's master-planned tracts mean carpet wears in predictable ways. Deane-era homes almost always show the same traffic lane pattern between the front entry and the kitchen, and cream-colored Berber in the formal rooms tends to reveal shadow paths along the furniture walk. Homes near Lake Mission Viejo see more lakeside sand and chlorine dust. We adjust pre-treatment time to what your tract actually sees.",
    testimonials: [
      {
        author: "Karen W.",
        neighborhood: "Deane Homes, Mission Viejo",
        body: "Twelve years of two kids and a retriever and the traffic lanes look new. Kurt also pointed out a loose seam by the pantry and fixed it on the spot. Fair price, no upsell.",
      },
      {
        author: "Robert D.",
        neighborhood: "Aegean Hills, Mission Viejo",
        body: "Called Friday, they were here Monday. Family room and hallway were visibly different by the time they left. Dry overnight, which was exactly what they promised.",
      },
      {
        author: "Marie L.",
        neighborhood: "Lake Mission Viejo area",
        body: "Lake sand and chlorine dust was dragging my carpet into a permanent grey. They pre-treated the slider area extra and the carpet came back lighter than I expected.",
      },
    ],
    faqs: [
      {
        q: "Do you service Lake Mission Viejo Association gated homes?",
        a: "Yes — frequently. We're familiar with the Lake Association gate procedures and can send a certificate of insurance ahead to your management office if needed.",
      },
      {
        q: "How fast can you get to my home in Mission Viejo?",
        a: "Our shop is in Mission Viejo. Most addresses are a ten-minute drive and next-day scheduling is routine. Same-day is often possible for urgent cases.",
      },
      {
        q: "Can you handle original builder-grade carpet from the older tracts?",
        a: "Yes — we've cleaned Deane-era and Casta del Sol builder carpet for decades. We know what it responds to and what it doesn't, and we'll tell you realistically how much it can recover.",
      },
    ],
  },
};

// Helper to get combo content with smart fallback
export function getComboContent(
  serviceSlug: string,
  citySlug: string,
  service: Service,
  city: City
): ComboContent {
  const key = `${serviceSlug}|${citySlug}`;
  if (COMBO_CONTENT[key]) return COMBO_CONTENT[key];

  // Generate a deterministic combo content based on service + city
  // Use city/service index to pick content angle so each page reads differently
  const serviceIdx = SERVICES.findIndex((s) => s.slug === serviceSlug);
  const cityIdx = CITIES.findIndex((c) => c.slug === citySlug);
  const angleIdx = (serviceIdx * 8 + cityIdx) % 7;

  const angles = [
    "families with kids",
    "households with pets",
    "allergy-sensitive homes",
    "move-in and move-out transitions",
    "post-renovation cleanup",
    "holiday-season preparation",
    "long-term maintenance schedules",
  ];
  const angle = angles[angleIdx];

  const nb = city.neighborhoods;
  const lm = city.landmarks;

  const heroVariants = [
    `${service.title} in ${city.name} for ${angle} — built around what actually happens in your neighborhood, not a generic service checklist.`,
    `Looking for ${service.primaryKeyword} in ${city.name}? We've been doing it in your area since 1965, and our approach is shaped by the ${angle} we see here every week.`,
    `${service.title} tuned for ${city.name} homes. When a job walks in from ${nb[0] || city.name}, we already know what we're likely to find and how to approach it.`,
    `The homes in ${city.name} have specific carpet and fabric profiles, and our ${service.primaryKeyword} service is calibrated to them — from ${angle} to the fiber types typical of your tract.`,
  ];

  const body1Variants = [
    `Our ${city.name} ${service.primaryKeyword} customers often come to us with ${angle} in mind. The pattern of wear and soiling in a ${nb[0] || city.name} home is different from the same service in an apartment across town — the fiber is likely different, the foot traffic is different, and the room usage is different. We calibrate our pre-treatment, dwell time, and method accordingly. That's what a Master Textile Technician does: reads the situation first, applies the right chemistry second, and never treats two houses like they're the same.`,
    `In ${city.name}, we see ${service.primaryKeyword} needs shaped by ${angle}. Near ${lm[0] || city.name}, homes often share a construction era and a fiber profile, which means the first minute on-site tells us most of what we need to know. Our walk-through confirms fiber, identifies trouble spots, and yields a flat written quote before any product comes out. That removes the surprise-pricing game that some cleaners play and lets you decide, with real information, whether to go forward.`,
    `${city.name} homes need ${service.primaryKeyword} that respects both the fiber and the lifestyle inside. ${angle.charAt(0).toUpperCase() + angle.slice(1)} are a common reason customers here call us the first time, but most become regulars because our approach — truck-mounted power, IICRC-trained technicians, and honest estimates — changes what people expect from a carpet cleaner. We'd rather keep you happy for a decade than upsell you for a single job.`,
  ];

  const body2Variants = [
    `Our technicians bring truck-mounted hot water extraction (or the appropriate method for your fiber), pH-balanced chemistry, and experience with the specific neighborhoods of ${city.name} — ${nb.slice(0, 2).join(" and ")}. We arrive on time, walk the job with you first, and confirm the price before we start. If anything changes mid-job, we stop and explain — no mystery charges at the end.`,
    `Expect a clear timeline. Most ${service.primaryKeyword} visits in ${city.name} take between one and three hours depending on square footage and problem areas. We work efficiently because we know the local neighborhoods and we've done this work for decades. Your home is not our training ground.`,
    `We're based at 23632 Via Fabricante in Mission Viejo — a short drive from ${city.name}. Scheduling is usually same-week and often next-day. Emergency calls for spills or urgent move-out situations sometimes get slotted in same-day when a truck is free. We'd rather help you now than make you wait.`,
  ];

  const homesDifferentVariants = [
    `${city.name} homes often feature carpet and soft surfaces shaped by the community's character. Tracts around ${nb[0] || city.name} frequently share fiber types and construction eras, and we calibrate our ${service.primaryKeyword} method to what's actually on your floor. Homes near ${lm[0] || city.name} sometimes see specific soiling patterns we recognize on sight — and address in pre-treatment without being asked.`,
    `What makes ${city.name} homes different is the mix: older tracts in ${nb[0] || city.name} often have builder-grade nylon that responds well to extraction, while newer construction leans toward higher-end wool or wool-blends that benefit from gentler chemistry. The proximity to ${lm[0] || city.name} adds specific dust and foot-traffic patterns we know from experience. Our ${service.primaryKeyword} technique adjusts for both.`,
    `${nb[0] || city.name} and ${nb[1] || "surrounding"} tracts each have their own ${service.primaryKeyword} profile. Some have pet-heavy family patterns, some have sand and outdoor-traffic patterns from ${lm[0] || city.name} proximity. We've done this work in your area long enough that we often know what the carpet looks like before we pull into the driveway. That's not a sales line — it's years of mileage on the same streets.`,
  ];

  const testimonialAngles = [
    { author: "A repeat customer", neighborhood: `${nb[0] || city.name}, ${city.name}`, body: `We've had Carpet Care Center clean our ${city.name} home every year for six years now. ${angle.charAt(0).toUpperCase() + angle.slice(1)} kept us calling, and consistency kept us loyal. Kurt's team always walks the job first, always honors the quote, and always leaves the place better than they found it.` },
    { author: "A first-time customer", neighborhood: `${nb[1] || nb[0] || city.name}, ${city.name}`, body: `I called three different ${service.primaryKeyword} companies for quotes in ${city.name}. Carpet Care Center was the only one that actually came to the house instead of quoting over the phone. The in-person estimate was specific, the price was fair, and the work was better than I expected. I won't call anyone else now.` },
    { author: "A long-time local", neighborhood: `${nb[0] || city.name}, ${city.name}`, body: `I've lived in ${city.name} for twenty-plus years and watched a half-dozen cleaning companies come and go. Kurt's crew is the one that keeps showing up year after year, and the work today is just as careful as it was when I first hired them. That continuity means something.` },
  ];

  const faqVariants = [
    {
      q: `How much does ${service.primaryKeyword} cost in ${city.name}?`,
      a: `It depends on size and condition, and we quote in person for accuracy. Most ${city.name} ${service.primaryKeyword} jobs fall into a predictable range and our in-home estimate is free. We give a flat written quote before starting and we don't change the price mid-job.`,
    },
    {
      q: `Do you service my ${city.name} neighborhood?`,
      a: `Yes — we cover all of ${city.name}, including ${nb.slice(0, 3).join(", ")}, and the surrounding ${lm[0] || city.name} area. Gate protocols, HOA requirements, and certificates of insurance are routine for us.`,
    },
    {
      q: `How soon can you schedule ${service.primaryKeyword} in ${city.name}?`,
      a: `Usually next-day or same-week. For urgent situations (fresh stains, move-out deadlines, pet emergencies) we sometimes have same-day slots. Our shop is in Mission Viejo so ${city.name} is a short drive for us.`,
    },
  ];

  return {
    hero: heroVariants[angleIdx % heroVariants.length],
    body1: body1Variants[angleIdx % body1Variants.length],
    body2: body2Variants[angleIdx % body2Variants.length],
    homesDifferent: homesDifferentVariants[angleIdx % homesDifferentVariants.length],
    testimonials: testimonialAngles,
    faqs: faqVariants,
  };
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

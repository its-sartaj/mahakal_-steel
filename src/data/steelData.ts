export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  specifications: ProductSpecification[];
  applications: string[];
  features: string[];
  relatedProductSlugs: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  overview: string;
  commonGrades: string[];
  standardShapes: string[];
  products: ProductItem[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  keyProducts: string[];
  iconName: string;
}

// Brand constants
export const COMPANY_INFO = {
  name: 'MAHAKAL STEEL',
  gstin: '27DLSPR1147D1ZU',
  addressLine1: 'Gala No. 10, Bunavad Market',
  addressLine2: 'Opp. Asha Kripa Bldg., Link Road, Sakinaka',
  city: 'Mumbai',
  state: 'Maharashtra',
  postalCode: '400072',
  country: 'India',
  fullAddress: 'Gala No. 10, Bunavad Market, Opp. Asha Kripa Bldg., Link Road, Sakinaka, Mumbai - 400072, Maharashtra, India',
  phone: '+91 98200 87654',
  whatsapp: '919820087654',
  email: 'sales@mahakalsteel.in',
  workingHours: 'Monday - Saturday: 9:00 AM – 7:00 PM (Closed on Sunday)',
  tagline: 'Quality Steel. Trusted Service.',
  heroImage: '/assets/images/hero_steel_warehouse_1793271819088.jpg',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.021577749007!2d72.88566977508933!3d19.10668998210359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c870a48a9775%3A0x6331d5b3d68ad413!2sSakinaka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Sakinaka,+Link+Road,+Mumbai+400072',
  developerCredit: 'Designed, Developed By Sajid Web Solutions',
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'steel-sheets-plates',
    name: 'Steel Sheets & Plates',
    headline: 'Hot Rolled, Cold Rolled & Chequered Steel Plates',
    description: 'Precision-sheared, flat, and uniform steel sheets and heavy plates suitable for industrial fabrication, storage tanks, and construction.',
    heroImage: '/assets/images/steel_sheets_plates_1793271793920.jpg',
    cardImage: '/assets/images/steel_sheets_plates_1793271793920.jpg',
    overview: 'Mahakal Steel offers an extensive inventory of Prime Hot Rolled (HR) and Cold Rolled (CR) plates, tear-drop anti-skid chequered plates, and custom sheared sheets directly sourced to maintain structural integrity across heavy manufacturing and civil projects.',
    commonGrades: ['IS 2062 E250 / E350', 'ASTM A36', 'SAIL Hard', 'IS 513 CR'],
    standardShapes: ['Flat Sheets', 'Heavy Base Plates', 'Chequered Plates', 'Cut-to-Length Strips'],
    products: [
      {
        id: 'hr-steel-plates',
        slug: 'hot-rolled-steel-plates',
        name: 'Hot Rolled (HR) Steel Plates',
        categorySlug: 'steel-sheets-plates',
        categoryName: 'Steel Sheets & Plates',
        tagline: 'High-strength structural plates for heavy fabrication & manufacturing',
        shortDescription: 'Industrial grade hot rolled steel plates adhering to IS 2062 and ASTM specifications, suitable for pressure vessels, machinery bases, and structural framing.',
        fullDescription: 'Our Hot Rolled (HR) Steel Plates are manufactured through hot continuous rolling processes, yielding exceptional yield strength, consistent thickness, and superior weldability. We stock a comprehensive thickness spectrum from 3 mm to 80 mm in standard and custom sheared sizes at our Sakinaka yard. Each batch comes with standard test reports ensuring reliable material performance.',
        images: [
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 Grade E250 / E350, ASTM A36' },
          { label: 'Thickness Range', value: '3.0 mm to 80.0 mm' },
          { label: 'Standard Widths', value: '1250 mm, 1500 mm, 2000 mm, 2500 mm' },
          { label: 'Standard Lengths', value: '2500 mm, 5000 mm, 6000 mm, 12000 mm' },
          { label: 'Supply Condition', value: 'Mill finish, As-Rolled, Shot Blasted upon request' },
          { label: 'Tolerance', value: 'Adheres to BIS 1852 dimensional tolerances' }
        ],
        applications: [
          'Heavy industrial fabrication & machinery foundations',
          'Bridge girders and heavy structural construction',
          'Storage silos, pressure tanks, and hopper bins',
          'Shipbuilding, marine frames, and transport vehicle chassis'
        ],
        features: [
          'High tensile resilience and uniform chemical composition',
          'Excellent bending, flame cutting, and welding properties',
          'Tested for ultrasonic soundness and impact resilience',
          'Ready inventory in Sakinaka for fast Mumbai-wide dispatch'
        ],
        relatedProductSlugs: ['cold-rolled-sheets-coils', 'chequered-tear-drop-plates', 'heavy-structural-i-beams-is-mb']
      },
      {
        id: 'cr-sheets-coils',
        slug: 'cold-rolled-sheets-coils',
        name: 'Cold Rolled (CR) Sheets & Coils',
        categorySlug: 'steel-sheets-plates',
        categoryName: 'Steel Sheets & Plates',
        tagline: 'Smooth surface finish with tight dimensional tolerances',
        shortDescription: 'Prime cold rolled steel sheets with smooth surface textures, ideal for automotive panels, electrical cabinets, and precision fabrication.',
        fullDescription: 'Cold Rolled (CR) steel sheets are processed below re-crystallization temperature to deliver a silky smooth, scale-free surface and exact thickness control. Sourced for precision sheet metal workers and enclosure builders across Mumbai, our CR materials offer predictable ductility for deep drawing, stamping, and electrostatic powder coating.',
        images: [
          '/assets/images/stainless_steel_coils_1793271795436.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 513 / JIS G3141 SPCC / ASTM A1008' },
          { label: 'Thickness Range', value: '0.50 mm to 3.20 mm' },
          { label: 'Standard Widths', value: '900 mm, 1000 mm, 1220 mm, 1250 mm' },
          { label: 'Standard Lengths', value: 'Cut-to-length 2440 mm, 2500 mm, or coil form' },
          { label: 'Surface Finish', value: 'Matte (Dull) Finish, Oiled to prevent rust' },
          { label: 'Formability', value: 'Drawing (D), Deep Drawing (DD), Extra Deep Drawing (EDD)' }
        ],
        applications: [
          'Electrical enclosures, control panels, and server racks',
          'Automotive body parts, brackets, and fuel tanks',
          'HVAC ducting, home appliance exteriors, and steel furniture',
          'Precision CNC laser and punch press parts'
        ],
        features: [
          'Pristine defect-free surface ready for paint and powder coating',
          'Stringent gauge tolerance and uniform flatness',
          'Superior formability without cracking along bend radiuses',
          'Supplied with protective oil film against oxidation'
        ],
        relatedProductSlugs: ['hot-rolled-steel-plates', 'chequered-tear-drop-plates', 'ss-304-304l-sheets-plates']
      },
      {
        id: 'chequered-plates',
        slug: 'chequered-tear-drop-plates',
        name: 'Tear-Drop Chequered Steel Plates',
        categorySlug: 'steel-sheets-plates',
        categoryName: 'Steel Sheets & Plates',
        tagline: 'High traction slip-resistant floor plates for industrial walkways',
        shortDescription: 'Tear-drop patterned chequered plates designed to maximize pedestrian and vehicular grip in industrial stairways, ramps, and vehicle beds.',
        fullDescription: 'Our Chequered Steel Plates feature distinct raised tear-drop diamond patterns that offer exceptional friction and skid resistance even in oily or wet operating conditions. Built with high-strength structural grade mild steel, these plates resist heavy dynamic loads, pedestrian footfall, and forklift wheel stresses.',
        images: [
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 3502 / IS 2062 Grade E250' },
          { label: 'Thickness Range', value: '3.0 mm to 12.0 mm (base thickness)' },
          { label: 'Pattern Design', value: 'Standard Tear-Drop / Diamond Raised Pattern' },
          { label: 'Standard Widths', value: '1250 mm, 1500 mm' },
          { label: 'Standard Lengths', value: '2500 mm, 5000 mm, 6000 mm' },
          { label: 'Pattern Height', value: '1.0 mm to 1.5 mm raised traction profile' }
        ],
        applications: [
          'Industrial walkways, catwalks, and catwalk mezzanines',
          'Factory stair treads, spiral steps, and safety gangways',
          'Truck, trailer, and commercial utility vehicle cargo floors',
          'Drainage trench covers and access pit hatch doors'
        ],
        features: [
          'Reliable anti-slip surface compliant with industrial safety',
          'High load-bearing capacity under wheel and foot traffic',
          'Easy cutting, welding, and framing with structural channels',
          'Corrosion resistance when coated or galvanized'
        ],
        relatedProductSlugs: ['hot-rolled-steel-plates', 'ms-channels-ismc', 'ms-equal-angles-isa']
      }
    ]
  },
  {
    slug: 'steel-pipes-tubes',
    name: 'Steel Pipes & Tubes',
    headline: 'Seamless, ERW & Hollow Structural Steel Tubing',
    description: 'Comprehensive inventory of carbon steel seamless pipes, ERW conduits, and hollow structural square/rectangular tubes for fluid transfer and structural frameworks.',
    heroImage: '/assets/images/steel_pipes_tubes_1793271794975.jpg',
    cardImage: '/assets/images/steel_pipes_tubes_1793271794975.jpg',
    overview: 'Mahakal Steel maintains a dependable supply of round, square, and rectangular structural pipes. From heavy wall ASTM A106 Grade B seamless pipes engineered for high pressure steam and oil pipelines to ERW structural hollow sections for modern pre-engineered building frameworks.',
    commonGrades: ['ASTM A106 Gr. B', 'API 5L Gr. B', 'IS 1239 / IS 3589', 'IS 4923 YSt 210/310'],
    standardShapes: ['Round Seamless', 'ERW Round Pipes', 'Square Hollow Sections (SHS)', 'Rectangular Hollow Sections (RHS)'],
    products: [
      {
        id: 'seamless-pipes',
        slug: 'seamless-carbon-steel-pipes',
        name: 'Carbon Steel Seamless Pipes',
        categorySlug: 'steel-pipes-tubes',
        categoryName: 'Steel Pipes & Tubes',
        tagline: 'High-pressure certified seamless pipes without longitudinal welds',
        shortDescription: 'Solid pierced seamless carbon steel pipes engineered for high pressure steam, oil, natural gas, and chemical pipeline applications.',
        fullDescription: 'Manufactured without welded seams, our seamless carbon steel pipes exhibit uniform circumferential wall thickness and high bursting resistance under severe pressures and elevated temperatures. Stocked in Schedule 40, Schedule 80, and Schedule 160 across nominal bore sizes.',
        images: [
          '/assets/images/steel_pipes_tubes_1793271794975.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'ASTM A106 Gr. B / ASTM A53 / API 5L Gr. B' },
          { label: 'Size Range', value: '1/2" NB to 24" NB (Nominal Bore)' },
          { label: 'Wall Thickness Schedule', value: 'SCH 20, SCH 40, SCH 80, SCH 160, SCH XXS' },
          { label: 'Length Range', value: 'Single Random (5-7m), Double Random (10-12m)' },
          { label: 'End Finish', value: 'Plain End (PE), Beveled End (BE) for butt welding' },
          { label: 'Surface Protection', value: 'Black rust preventive varnish or bare' }
        ],
        applications: [
          'High pressure boiler piping and steam distribution lines',
          'Refinery, petrochemical, and process plant pipelines',
          'Hydraulic cylinders, piston tubes, and heavy mechanical sleeves',
          'Firefighting ring mains and high-rise riser installations'
        ],
        features: [
          'Uniform circular cross-section and smooth internal bore',
          'High burst strength under hydrostatic test pressures',
          'Zero risk of weld seam flaw or longitudinal cracking',
          'Full material test traceability by heat number'
        ],
        relatedProductSlugs: ['erw-rectangular-square-hollow-sections', 'gi-galvanized-iron-pipes', 'ss-316-seamless-pipes']
      },
      {
        id: 'erw-hollow-sections',
        slug: 'erw-rectangular-square-hollow-sections',
        name: 'Square & Rectangular Hollow Sections (SHS/RHS)',
        categorySlug: 'steel-pipes-tubes',
        categoryName: 'Steel Pipes & Tubes',
        tagline: 'Architectural structural steel tubing with high torsional rigidity',
        shortDescription: 'Cold-formed electric resistance welded hollow sections offering high strength-to-weight ratios for modern architectural columns and trusses.',
        fullDescription: 'Electric Resistance Welded (ERW) hollow structural sections deliver outstanding aesthetic lines combined with multi-axial structural strength. Preferred by structural engineers for sports stadiums, airport terminals, industrial factory sheds, and heavy equipment chassis.',
        images: [
          '/assets/images/steel_pipes_tubes_1793271794975.jpg',
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 4923 / EN 10219 / ASTM A500' },
          { label: 'Square Sections (SHS)', value: '20x20 mm up to 250x250 mm' },
          { label: 'Rectangular Sections (RHS)', value: '40x20 mm up to 300x200 mm' },
          { label: 'Thickness Range', value: '1.6 mm to 10.0 mm' },
          { label: 'Standard Length', value: '6.0 meters and cut-to-length orders' },
          { label: 'Yield Strength', value: 'YSt 210 / YSt 310 / YSt 355 MPa' }
        ],
        applications: [
          'Pre-Engineered Buildings (PEB) columns, purlins, and roof trusses',
          'Solar panel mounting structures and industrial sheds',
          'Automotive bus body fabrication and heavy transport trailers',
          'Modern architectural facades, railings, and security grills'
        ],
        features: [
          'High torsional resistance compared to open angle/channel sections',
          'Clean flat sides allowing simplified bolt and weld connections',
          'Reduced surface area lowering painting and maintenance costs',
          'High strength-to-weight ratio saving overall structural tonnage'
        ],
        relatedProductSlugs: ['seamless-carbon-steel-pipes', 'heavy-structural-i-beams-is-mb', 'ms-channels-ismc']
      },
      {
        id: 'gi-pipes',
        slug: 'gi-galvanized-iron-pipes',
        name: 'Galvanized Iron (GI) Steel Pipes',
        categorySlug: 'steel-pipes-tubes',
        categoryName: 'Steel Pipes & Tubes',
        tagline: 'Hot-dip zinc coated pipes for corrosive fluid and outdoor installations',
        shortDescription: 'Durable hot-dip galvanized steel pipes offering long-term atmospheric and moisture corrosion resistance.',
        fullDescription: 'GI Pipes are immersed in molten zinc to form a protective metallurgically bonded barrier against rust, moisture, and soil chemicals. Extensively supplied for municipal water pipelines, industrial cooling towers, outdoor scaffolding, and boundary fencing throughout Maharashtra.',
        images: [
          '/assets/images/steel_pipes_tubes_1793271794975.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 1239 (Part 1) / IS 3589 / BS 1387' },
          { label: 'Class Types', value: 'Class A (Light / Yellow), Class B (Medium / Blue), Class C (Heavy / Red)' },
          { label: 'Size Range', value: '15 mm NB (1/2") to 150 mm NB (6")' },
          { label: 'Zinc Coating Mass', value: 'Minimum 360 to 400 g/m² hot-dip galvanized' },
          { label: 'End Connections', value: 'Screwed & Socketed (threaded with coupler) or Plain Ends' },
          { label: 'Pressure Rating', value: 'Hydrostatically tested up to 50 bar' }
        ],
        applications: [
          'Potable water supply pipelines and municipal plumbing',
          'Fire hydrant ring networks and sprinkler conduits',
          'Agricultural irrigation lines and borewell casing',
          'Outdoor construction scaffolding, railings, and utility poles'
        ],
        features: [
          'Heavy uniform zinc layer ensuring decades of rust prevention',
          'Impact-resistant mechanical strength under rigorous jobsite handling',
          'Clean precision threading for leak-free coupler attachments',
          'Compliant with IS 1239 quality benchmarks'
        ],
        relatedProductSlugs: ['seamless-carbon-steel-pipes', 'erw-rectangular-square-hollow-sections', 'ss-316-seamless-pipes']
      }
    ]
  },
  {
    slug: 'mild-steel',
    name: 'Mild Steel Products',
    headline: 'Structural Angles, Channels, Flat Bars & Round Rods',
    description: 'Core mild steel commercial and structural sections for general fabrication, machinery parts, grillwork, and construction framing.',
    heroImage: '/assets/images/mild_steel_bars_1793271818875.jpg',
    cardImage: '/assets/images/mild_steel_bars_1793271818875.jpg',
    overview: 'Mild Steel forms the backbone of Mumbai’s fabrication and construction workshops. Mahakal Steel stocks ready-to-deliver Mild Steel Angles, Channels, Flat bars, and solid Round rods in prime tested grades.',
    commonGrades: ['IS 2062 Grade E250 A/BR', 'SAIL / TATA / RINL / Primary Mills Quality'],
    standardShapes: ['Equal & Unequal Angles', 'Standard Channels (ISMC)', 'Solid Flat Bars', 'Smooth Round Rods'],
    products: [
      {
        id: 'ms-angles',
        slug: 'ms-equal-angles-isa',
        name: 'Mild Steel Equal Angles (ISA)',
        categorySlug: 'mild-steel',
        categoryName: 'Mild Steel Products',
        tagline: 'L-shaped structural sections for trusses, bracing & frames',
        shortDescription: 'Hot rolled mild steel equal angles conforming to IS 2062 for building frames, transmission towers, and industrial brackets.',
        fullDescription: 'Our MS Equal Angles feature precise 90-degree internal and external radius fillets for optimal structural load transfer. Readily fabricated, punched, and welded, these angles are used across residential construction, commercial PEB bracing, and machinery base framing.',
        images: [
          '/assets/images/mild_steel_bars_1793271818875.jpg',
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 Grade E250 / IS 808' },
          { label: 'Size Range', value: '25x25 mm up to 200x200 mm' },
          { label: 'Thickness Range', value: '3.0 mm to 24.0 mm' },
          { label: 'Standard Length', value: '6.0 meters, 11-12 meters' },
          { label: 'Supply Origin', value: 'Primary Mills & Tested Rolling Stock' },
          { label: 'Yield Strength', value: 'Min. 250 MPa' }
        ],
        applications: [
          'Transmission line towers and telecom mast structures',
          'Industrial truss frameworks and horizontal wind bracing',
          'Heavy machine bases, mounting brackets, and skids',
          'Warehouse racking uprights and storage mezzanine supports'
        ],
        features: [
          'Sharp, true 90-degree corner geometry for accurate joint fit-up',
          'Consistent carbon content ensuring easy manual arc and MIG welding',
          'High load-carrying capacity with predictable deflection indices',
          'Bulk stock maintained at Sakinaka warehouse'
        ],
        relatedProductSlugs: ['ms-channels-ismc', 'ms-flat-bars-round-rods', 'heavy-structural-i-beams-is-mb']
      },
      {
        id: 'ms-channels',
        slug: 'ms-channels-ismc',
        name: 'Mild Steel Channels (ISMC)',
        categorySlug: 'mild-steel',
        categoryName: 'Mild Steel Products',
        tagline: 'C-shaped structural channels for purlins, lintels & vehicle chassis',
        shortDescription: 'Heavy-duty hot rolled C-channels engineered for superior bending resistance under vertical and lateral loads.',
        fullDescription: 'Mild Steel Channels (ISMC) provide high bending stiffness about their major axis, making them ideal for floor joists, wall purlins, equipment slides, and heavy vehicle chassis cross members.',
        images: [
          '/assets/images/mild_steel_bars_1793271818875.jpg',
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 E250 / IS 808 (ISMC)' },
          { label: 'Designations', value: 'ISMC 75, 100, 125, 150, 200, 250, 300, 400' },
          { label: 'Web Height Range', value: '75 mm to 400 mm' },
          { label: 'Flange Width Range', value: '40 mm to 100 mm' },
          { label: 'Standard Length', value: '6.0 meters, 11-12 meters' },
          { label: 'Supply Condition', value: 'Mill Straightened, As-Rolled' }
        ],
        applications: [
          'Roof purlins and side girts in industrial steel buildings',
          'Heavy truck chassis, bus frame channels, and trailer bodies',
          'Escalator, elevator guide rails, and hoist beam framing',
          'Structural lintels and window door framing supports'
        ],
        features: [
          'Tapered flanges designed to optimize structural strength vs. weight',
          'Dimensional accuracy according to Bureau of Indian Standards',
          'Superior resistance to lateral torsional buckling',
          'Clean cut ends and straight tolerances'
        ],
        relatedProductSlugs: ['ms-equal-angles-isa', 'ms-flat-bars-round-rods', 'heavy-structural-i-beams-is-mb']
      },
      {
        id: 'ms-flats-rounds',
        slug: 'ms-flat-bars-round-rods',
        name: 'Mild Steel Flat Bars & Round Rods',
        categorySlug: 'mild-steel',
        categoryName: 'Mild Steel Products',
        tagline: 'Solid merchant bars for machining, forging & general fabrication',
        shortDescription: 'Solid hot rolled mild steel flats and bright rounds used across machining, anchor bolts, shafts, and metal fabrication.',
        fullDescription: 'Our merchant bar collection includes smooth solid round bars and rectangular flat strips. Sourced from tested prime billets, these bars offer uniform grain structure for high-speed machining, threading, turning, and hot forging.',
        images: [
          '/assets/images/mild_steel_bars_1793271818875.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 Grade E250 / IS 1732' },
          { label: 'Flat Bar Widths', value: '12 mm to 300 mm' },
          { label: 'Flat Bar Thickness', value: '3.0 mm to 50.0 mm' },
          { label: 'Round Bar Diameter', value: '6 mm to 150 mm dia' },
          { label: 'Standard Length', value: '5.5 to 6.2 meters' },
          { label: 'Supply Condition', value: 'Black hot rolled or bright drawn on request' }
        ],
        applications: [
          'Machined shafts, pins, bushings, and coupling flanges',
          'Foundation anchor bolts, threaded tie rods, and sag rods',
          'Base plates, stiffener gussets, and joinery cleats',
          'Grillwork, architectural gates, and perimeter railings'
        ],
        features: [
          'Uniform homogeneous metallurgy without internal voids',
          'Easy thread rolling and precision CNC lathe turning',
          'Square edges on flats for clean multi-layer welded assemblies',
          'Immediate local availability in small and bulk lots'
        ],
        relatedProductSlugs: ['ms-equal-angles-isa', 'ms-channels-ismc', 'hot-rolled-steel-plates']
      }
    ]
  },
  {
    slug: 'stainless-steel',
    name: 'Stainless Steel Products',
    headline: 'Corrosion-Resistant SS 304, 316 Sheets, Pipes & Coils',
    description: 'High-alloy stainless steel sheets, coils, tubes, and decorative profiles engineered for corrosive chemical environments, food processing, and architectural applications.',
    heroImage: '/assets/images/stainless_steel_coils_1793271795436.jpg',
    cardImage: '/assets/images/stainless_steel_coils_1793271795436.jpg',
    overview: 'Stainless steel provides unmatched resistance against pitting, crevice corrosion, and acid degradation. Mahakal Steel supplies austenitic SS 304, 304L, 316, and 316L grades in 2B mill finish, mirror, and hairline architectural textures.',
    commonGrades: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310S', 'AISI 430'],
    standardShapes: ['2B Sheets & Slit Coils', 'Seamless & Welded Tubes', 'Hairline / Mirror Plates', 'Round Bars & Flanges'],
    products: [
      {
        id: 'ss-304-sheets',
        slug: 'ss-304-304l-sheets-plates',
        name: 'Stainless Steel 304/304L Sheets & Plates',
        categorySlug: 'stainless-steel',
        categoryName: 'Stainless Steel Products',
        tagline: 'Versatile 18/8 austenitic stainless steel for hygiene & acid resistance',
        shortDescription: 'Food-grade austenitic stainless steel sheets with superior corrosion resistance and formability for pharmaceuticals, kitchens, and chemical vats.',
        fullDescription: 'Grade 304 (18% Chromium, 8% Nickel) is the world’s most widely specified stainless steel. Mahakal Steel supplies certified Prime SS 304/304L sheets with low carbon content to prevent intergranular sensitization during welding.',
        images: [
          '/assets/images/stainless_steel_coils_1793271795436.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'ASTM A240 / ASME SA240 / EN 10088-2' },
          { label: 'Grade Type', value: 'AISI 304 / 304L (UNS S30400 / UNS S30403)' },
          { label: 'Thickness Range', value: '0.4 mm to 50.0 mm' },
          { label: 'Surface Finishes', value: '2B Cold Rolled, No. 1 Hot Rolled, No. 4 Hairline, BA (Bright Annealed)' },
          { label: 'Standard Dimensions', value: '1000x2000 mm, 1250x2500 mm, 1500x3000 mm' },
          { label: 'Protection', value: 'Laser-safe PVC coating film on request' }
        ],
        applications: [
          'Pharmaceutical processing vessels and cleanroom furniture',
          'Commercial kitchen equipment, dairy pasteurizers, and sinks',
          'Architectural elevator interiors, wall cladding, and handrails',
          'Chemical holding tanks and petrochemical heat exchangers'
        ],
        features: [
          'Immunity to organic chemicals, sterilizers, and ambient moisture',
          'Deep drawing capability and seamless cold workability',
          'Supplied with mill test certificates (MTC) certifying chemistry',
          'Protective film applied to preserve pristine cosmetic surfaces'
        ],
        relatedProductSlugs: ['ss-316-seamless-pipes', 'ss-decorative-finish-sheets', 'cold-rolled-sheets-coils']
      },
      {
        id: 'ss-316-pipes',
        slug: 'ss-316-seamless-pipes',
        name: 'Stainless Steel 316/316L Pipes & Tubes',
        categorySlug: 'stainless-steel',
        categoryName: 'Stainless Steel Products',
        tagline: 'Molybdenum-bearing stainless tubes for marine and saline exposure',
        shortDescription: 'Grade 316 stainless steel pipes with 2% molybdenum for exceptional resistance to chlorides, marine salt, and harsh acids.',
        fullDescription: 'Stainless Steel 316/316L contains an essential addition of 2-3% Molybdenum, granting remarkable resistance to pitting and crevice corrosion in chloride-rich atmospheres. Frequently deployed in coastal Mumbai engineering projects, offshore oil setups, and specialized chemical flow lines.',
        images: [
          '/assets/images/stainless_steel_coils_1793271795436.jpg',
          '/assets/images/steel_pipes_tubes_1793271794975.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'ASTM A312 / ASTM A269 / ASME SA312' },
          { label: 'Grade Type', value: 'AISI 316 / 316L (UNS S31600 / UNS S31603)' },
          { label: 'Size Range', value: '1/4" NB to 16" NB' },
          { label: 'Wall Schedules', value: 'SCH 5S, SCH 10S, SCH 40S, SCH 80S' },
          { label: 'Manufacturing', value: 'Seamless cold drawn & high frequency welded' },
          { label: 'Testing', value: 'Hydrostatic, Eddy Current & PMI tested' }
        ],
        applications: [
          'Marine desalination plants and seaside intake pipework',
          'Pulp and paper bleaching equipment and dye processing',
          'High purity pharmaceutical WFI (Water for Injection) loops',
          'Chemical reagent dosing manifolds and offshore platforms'
        ],
        features: [
          'Superior resistance to chloride pitting compared to Grade 304',
          'Smooth electropolished internal surface option for sterile flow',
          'Tested to withstand aggressive organic and inorganic acids',
          'Precise diameter and roundness for orbitally welded joints'
        ],
        relatedProductSlugs: ['ss-304-304l-sheets-plates', 'seamless-carbon-steel-pipes', 'ss-decorative-finish-sheets']
      },
      {
        id: 'ss-decorative-sheets',
        slug: 'ss-decorative-finish-sheets',
        name: 'Architectural Decorative Finish SS Sheets',
        categorySlug: 'stainless-steel',
        categoryName: 'Stainless Steel Products',
        tagline: 'Mirror, Hairline & PVD coated decorative sheets for luxury spaces',
        shortDescription: 'Premium stainless steel surface finishes designed for modern commercial facades, elevators, hospitality interiors, and fixtures.',
        fullDescription: 'Our architectural grade stainless sheets undergo precision mechanical polishing and PVD color treatments to achieve mirror No. 8, hairline brushed, and titanium-gold finishes. Sourced by interior designers, corporate architects, and luxury elevator fabricators.',
        images: [
          '/assets/images/stainless_steel_coils_1793271795436.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg'
        ],
        specifications: [
          { label: 'Base Grades', value: 'AISI 304 / AISI 316' },
          { label: 'Finishes Available', value: 'No. 4 Hairline, No. 8 Super Mirror, Vibration, Bead Blasted' },
          { label: 'PVD Colors', value: 'Gold, Rose Gold, Champagne, Charcoal Black, Bronze' },
          { label: 'Thickness Range', value: '0.8 mm to 3.0 mm' },
          { label: 'Dimensions', value: '1220x2440 mm (4x8 ft), 1250x3000 mm' },
          { label: 'Protective Layer', value: 'Double layer laser-grade PE film' }
        ],
        applications: [
          'Luxury commercial elevator doors, cabins, and jambs',
          'High-end hotel lobbies, reception counters, and pillar cladding',
          'Retail showroom displays, brand signage, and light boxes',
          'Architectural ceiling panels and decorative partition screens'
        ],
        features: [
          'Flawless optical reflection on mirror finish without distortion',
          'Directional hairline polish with uniform brush stroke density',
          'Durable PVD color that resists peeling, flaking, or UV fading',
          'Heavy duty film protection preventing scratches during installation'
        ],
        relatedProductSlugs: ['ss-304-304l-sheets-plates', 'cold-rolled-sheets-coils', 'ss-316-seamless-pipes']
      }
    ]
  },
  {
    slug: 'structural-steel',
    name: 'Structural Steel Sections',
    headline: 'Heavy Beams, Columns, Angles & Industrial Sections',
    description: 'Heavy rolled I-Beams (ISMB), H-Beams, Universal Columns, and wide flange structural profiles for large-span infrastructure and pre-engineered buildings.',
    heroImage: '/assets/images/structural_steel_beams_1793271796654.jpg',
    cardImage: '/assets/images/structural_steel_beams_1793271796654.jpg',
    overview: 'Mahakal Steel is a premier supplier of heavy structural steel in Mumbai. We provide certified structural beams and columns capable of bearing high compressive and bending loads in industrial plants, multi-level warehouses, and civil infrastructure.',
    commonGrades: ['IS 2062 Grade E250 / E350', 'ASTM A992 / A572 Gr. 50', 'EN 10025 S355JR'],
    standardShapes: ['ISMB (Indian Standard Medium Beams)', 'ISHB (Heavy Beams)', 'Universal Columns (UC)', 'Wide Flange Beams (W-Beams)'],
    products: [
      {
        id: 'structural-beams-ismb',
        slug: 'heavy-structural-i-beams-is-mb',
        name: 'Heavy Structural I-Beams (ISMB)',
        categorySlug: 'structural-steel',
        categoryName: 'Structural Steel Sections',
        tagline: 'Standard medium and heavy I-beams for major structural spans',
        shortDescription: 'High strength Indian Standard Medium Beams (ISMB) engineered to carry heavy bending moments in commercial and industrial construction.',
        fullDescription: 'Indian Standard Medium Beams (ISMB) are hot-rolled with tapered flanges to maximize the section modulus about the major axis. Our stock covers standard sizes from ISMB 100 up to ISMB 600 in ready lengths, sourced from primary steel manufacturers with mill test verification.',
        images: [
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 Grade E250 / IS 808' },
          { label: 'Designations', value: 'ISMB 100, 150, 200, 250, 300, 350, 400, 450, 500, 600' },
          { label: 'Depth Range', value: '100 mm to 600 mm' },
          { label: 'Flange Width Range', value: '50 mm to 210 mm' },
          { label: 'Standard Lengths', value: '6 meters, 11 meters, 12 meters' },
          { label: 'Yield Strength', value: 'Min. 250 MPa to 350 MPa' }
        ],
        applications: [
          'Overhead crane gantry girders and factory runway beams',
          'Heavy floor joists in multi-story industrial buildings',
          'Bridge superstructures and heavy civil flyover falsework',
          'Foundational piling caps, transfer trusses, and shoring'
        ],
        features: [
          'High major-axis moment of inertia resisting large bending stresses',
          'Precise roll tolerances ensuring straightness and square flange cuts',
          'Certified chemical composition enabling certified welding procedures',
          'Stocked in bulk for fast delivery across Mumbai & Navi Mumbai'
        ],
        relatedProductSlugs: ['structural-h-beams-universal-columns', 'heavy-duty-structural-angles-channels', 'hot-rolled-steel-plates']
      },
      {
        id: 'structural-h-beams',
        slug: 'structural-h-beams-universal-columns',
        name: 'Universal H-Beams & Heavy Columns (ISHB)',
        categorySlug: 'structural-steel',
        categoryName: 'Structural Steel Sections',
        tagline: 'Parallel wide-flange beams for heavy axial column loads',
        shortDescription: 'Parallel flange H-beams and Universal Columns delivering equal bending strength along major and minor axes for high-rise frames.',
        fullDescription: 'Unlike conventional tapered I-beams, H-Beams (ISHB / Universal Columns) feature wide, parallel flanges of uniform thickness. This geometry provides balanced moments of inertia, dramatically increasing column buckling capacity and simplifying bolted beam-to-column connections.',
        images: [
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/hero_steel_warehouse_1793271819088.jpg',
          '/assets/images/steel_pipes_tubes_1793271794975.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 E250/E350 / IS 12778 / ASTM A992' },
          { label: 'Section Types', value: 'ISHB 150, 200, 250, 300, 350, 400, 450 & UC sections' },
          { label: 'Flange Width', value: '150 mm to 400 mm parallel wide flanges' },
          { label: 'Weight Range', value: '27.1 kg/m to 150+ kg/m' },
          { label: 'Length Range', value: '10 to 12 meters standard mill lengths' },
          { label: 'Straightness', value: 'Within 0.15% of length tolerance' }
        ],
        applications: [
          'Primary vertical columns in multi-tier industrial complexes',
          'Heavy infrastructure metro stations and railway concourses',
          'Heavy equipment foundation frames and turbine pedestals',
          'High-capacity warehouse mezzanine support stanchions'
        ],
        features: [
          'Wide parallel flanges offer effortless drilling and high-strength bolting',
          'High radius of gyration minimizing buckling under compressive loads',
          'Significant structural weight savings compared to built-up plate girders',
          'Supplied with comprehensive mill test certificates'
        ],
        relatedProductSlugs: ['heavy-structural-i-beams-is-mb', 'heavy-duty-structural-angles-channels', 'erw-rectangular-square-hollow-sections']
      },
      {
        id: 'heavy-structural-sections',
        slug: 'heavy-duty-structural-angles-channels',
        name: 'Heavy Industrial Channels & Structural Angles',
        categorySlug: 'structural-steel',
        categoryName: 'Structural Steel Sections',
        tagline: 'Heavy gauge rolled sections for load-bearing truss assemblies',
        shortDescription: 'Heavy-section channels and large-profile structural angles tailored for industrial heavy-duty fabrication and civil engineering.',
        fullDescription: 'When standard commercial merchant bars are insufficient for heavy cyclic loads, our heavy structural angles and channels step in. Specifically manufactured with thick webs and reinforced flanges to endure severe stress in dynamic mechanical systems and civil earth retention systems.',
        images: [
          '/assets/images/structural_steel_beams_1793271796654.jpg',
          '/assets/images/mild_steel_bars_1793271818875.jpg',
          '/assets/images/steel_sheets_plates_1793271793920.jpg'
        ],
        specifications: [
          { label: 'Standard Compliance', value: 'IS 2062 Grade E250 / E350' },
          { label: 'Heavy Angle Sizes', value: 'ISA 100x100x12 mm up to 200x200x24 mm' },
          { label: 'Heavy Channel Sizes', value: 'ISMC 200, 250, 300, 400' },
          { label: 'Standard Length', value: '11.5 to 12.0 meters' },
          { label: 'Testing Protocol', value: 'Ultrasonic test and Charpy V-notch impact tests' },
          { label: 'Surface Finish', value: 'Mill finish with protective primer options' }
        ],
        applications: [
          'Heavy structural lattice girders and space truss frameworks',
          'Retaining wall soldier piles and sheet pile support walers',
          'Quarry conveyor gantries, hopper structures, and crushers',
          'Crane runway braces and rail tie clamps'
        ],
        features: [
          'Thick cross-sectional area ensuring maximum fatigue endurance',
          'Resilient ductile behavior under dynamic shock loadings',
          'True dimensional tolerances according to Indian structural codes',
          'Readily cut and batched for site delivery schedules'
        ],
        relatedProductSlugs: ['heavy-structural-i-beams-is-mb', 'structural-h-beams-universal-columns', 'ms-channels-ismc']
      }
    ]
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'construction-infrastructure',
    title: 'Construction & Civil Infrastructure',
    description: 'Supplying heavy structural beams, angles, and plates for high-rise buildings, bridges, metro transit lines, and commercial developments across Mumbai and Maharashtra.',
    keyProducts: ['Heavy Structural I-Beams (ISMB)', 'Hot Rolled Steel Plates', 'MS Channels & Angles', 'SHS/RHS Hollow Sections'],
    iconName: 'Building2'
  },
  {
    id: 'fabrication-machinery',
    title: 'Heavy Fabrication & Machine Building',
    description: 'Providing precision-dimensioned mild steel plates, solid bars, and seamless pipes for OEM equipment, machine skids, hydraulic systems, and industrial tanks.',
    keyProducts: ['Hot Rolled Plates (IS 2062)', 'Seamless Carbon Steel Pipes', 'MS Solid Round & Flat Bars', 'Tear-Drop Chequered Plates'],
    iconName: 'Factory'
  },
  {
    id: 'chemical-pharma',
    title: 'Pharmaceutical & Chemical Processing',
    description: 'Supplying certified Grade 304 and 316 stainless steel sheets, coils, and corrosion-resistant tubes for sterile pharmaceutical vessels and chemical transport pipelines.',
    keyProducts: ['SS 304/304L Sheets & Plates', 'SS 316 Seamless Pipes & Tubes', 'Sanitary Tubing', 'Hairline Cladding Sheets'],
    iconName: 'FlaskConical'
  },
  {
    id: 'peb-warehousing',
    title: 'Pre-Engineered Buildings (PEB) & Warehousing',
    description: 'Fulfilling high-volume orders of hollow structural sections, purlins, structural channels, and roof sheeting substrates for modern logistics hubs and industrial sheds.',
    keyProducts: ['Square & Rectangular Hollow Sections', 'ISMC Channels', 'Universal Columns', 'Chequered Mezzanine Plates'],
    iconName: 'Warehouse'
  },
  {
    id: 'automotive-transport',
    title: 'Automotive & Commercial Transport',
    description: 'Delivering cold rolled sheets, chassis channels, and precision tubular components for bus body building, heavy commercial trailers, and auto ancillary units.',
    keyProducts: ['Cold Rolled (CR) Sheets', 'Automotive Chassis Channels', 'Hollow Mechanical Tubes', 'Mild Steel Flats'],
    iconName: 'Truck'
  },
  {
    id: 'oil-gas-energy',
    title: 'Oil, Gas & Power Utilities',
    description: 'Supplying high pressure ASTM A106 Grade B seamless pipes, heavy boiler-grade plates, and galvanized conduit systems for energy utilities and processing stations.',
    keyProducts: ['ASTM A106 Seamless Steel Pipes', 'GI Heavy Galvanized Pipes', 'Boiler Quality Plates', 'High-Tensile Structural Beams'],
    iconName: 'Flame'
  }
];

// Helper functions for easy querying
export function getAllProducts(): ProductItem[] {
  return PRODUCT_CATEGORIES.flatMap(category => category.products);
}

export function getProductBySlug(categorySlug: string, productSlug: string): ProductItem | undefined {
  const category = PRODUCT_CATEGORIES.find(c => c.slug === categorySlug);
  if (!category) return undefined;
  return category.products.find(p => p.slug === productSlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find(c => c.slug === slug);
}

export function getRelatedProducts(product: ProductItem): ProductItem[] {
  const all = getAllProducts();
  return all.filter(p => product.relatedProductSlugs.includes(p.slug));
}

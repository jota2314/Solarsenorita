// Comprehensive local solar data for Massachusetts cities
// This data powers local SEO and content depth

export interface CityIncentives {
  federal: string[];
  state: string[];
  local: string[];
  utility: string[];
}

export interface CityStats {
  avgElectricityCost: string;
  solarPotential: string;
  avgSystemSize: string;
  avgSavings: string;
  paybackPeriod: string;
  population: string;
  households: string;
}

export interface LocalServices {
  permits: string[];
  inspections: string[];
  utilities: string[];
  contractors: string[];
}

export interface CityGeoData {
  lat: number;
  lng: number;
  county: string;
  zipCodes: string[];
  neighborhoods: string[];
}

export interface CityLocalData {
  displayName: string;
  slug: string;
  description: string;
  longDescription: string;
  stats: CityStats;
  incentives: CityIncentives;
  services: LocalServices;
  geo: CityGeoData;
  nearbyCity: string[];
  localKeywords: string[];
}

export const cityLocalData: Record<string, CityLocalData> = {
  'boston': {
    displayName: 'Boston',
    slug: 'boston',
    description: 'Leading solar panel installation in Boston, Massachusetts. Solar Señorita provides expert solar solutions for Greater Boston residents with guaranteed savings.',
    longDescription: 'Boston leads Massachusetts in solar adoption with over 15,000 residential solar installations. Our team specializes in navigating Boston\'s unique permitting process and maximizing available incentives for city residents.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Excellent (4.2 peak sun hours)',
      avgSystemSize: '7.2 kW',
      avgSavings: '$1,890/year',
      paybackPeriod: '6-8 years',
      population: '695,506',
      households: '266,724'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)', 'USDA Rural Energy Grants'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0', 'Solar Massachusetts Renewable Target (SMART)'],
      local: ['Boston Property Tax Exemption', 'Expedited Permitting Program'],
      utility: ['Eversource Solar Incentives', 'National Grid Interconnection Credits']
    },
    services: {
      permits: ['Boston Inspectional Services', 'Online Permit Portal', 'Same-Day Approvals Available'],
      inspections: ['Electrical Inspection Required', 'Building Department Final Inspection', 'Utility Interconnection'],
      utilities: ['Eversource Energy', 'National Grid'],
      contractors: ['Licensed Massachusetts Solar Contractors', 'NABCEP Certified Installers']
    },
    geo: {
      lat: 42.3601,
      lng: -71.0589,
      county: 'Suffolk County',
      zipCodes: ['02101', '02102', '02103', '02104', '02108', '02109', '02110', '02111', '02113', '02114', '02115', '02116', '02117', '02118', '02119', '02120', '02121', '02122', '02124', '02125', '02126', '02127', '02128', '02129', '02130', '02131', '02132', '02134', '02135', '02136', '02137', '02163', '02196', '02199', '02201', '02203', '02204', '02205', '02206', '02210', '02211', '02212', '02215', '02217', '02222', '02241', '02266', '02283', '02284', '02293', '02297', '02298'],
      neighborhoods: ['Back Bay', 'Beacon Hill', 'North End', 'South End', 'Financial District', 'Cambridge Street', 'Charlestown', 'East Boston', 'South Boston', 'Dorchester', 'Roxbury', 'Jamaica Plain', 'Fenway', 'Mission Hill', 'Allston', 'Brighton', 'West Roxbury', 'Roslindale', 'Hyde Park', 'Mattapan']
    },
    nearbyCity: ['Cambridge', 'Somerville', 'Quincy', 'Newton', 'Brookline'],
    localKeywords: [
      'solar panels Boston MA',
      'Boston solar installation',
      'solar contractors Boston',
      'Greater Boston solar',
      'Boston solar incentives',
      'solar permit Boston',
      'rooftop solar Boston',
      'Boston solar companies',
      'solar energy Boston Massachusetts',
      'Suffolk County solar panels'
    ]
  },
  'cambridge': {
    displayName: 'Cambridge',
    slug: 'cambridge',
    description: 'Premium solar panel installation in Cambridge, MA. Solar Señorita delivers cutting-edge solar solutions for Cambridge homeowners and businesses.',
    longDescription: 'Cambridge is a leader in clean energy innovation with aggressive climate goals. Our installations help residents join the city\'s commitment to carbon neutrality by 2050.',
    stats: {
      avgElectricityCost: '$0.24/kWh',
      solarPotential: 'Excellent (4.1 peak sun hours)',
      avgSystemSize: '6.8 kW',
      avgSavings: '$1,750/year',
      paybackPeriod: '6-7 years',
      population: '118,403',
      households: '47,291'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Cambridge Solar Loan Program', 'Property Tax Exemption', 'Expedited Permitting'],
      utility: ['Eversource Cambridge Solar Initiative']
    },
    services: {
      permits: ['Cambridge Building Department', 'Online Application System'],
      inspections: ['Electrical Inspection', 'Building Final Inspection'],
      utilities: ['Eversource Energy'],
      contractors: ['NABCEP Certified Installers', 'Cambridge Licensed Contractors']
    },
    geo: {
      lat: 42.3736,
      lng: -71.1097,
      county: 'Middlesex County',
      zipCodes: ['02138', '02139', '02140', '02141', '02142'],
      neighborhoods: ['Harvard Square', 'Porter Square', 'Central Square', 'Kendall Square', 'Inman Square', 'Davis Square Area', 'Fresh Pond', 'North Cambridge', 'East Cambridge', 'Cambridgeport', 'Mid-Cambridge', 'Riverside', 'Wellington-Harrington', 'Neighborhood Nine', 'Agassiz', 'Peabody']
    },
    nearbyCity: ['Boston', 'Somerville', 'Belmont', 'Arlington'],
    localKeywords: [
      'solar panels Cambridge MA',
      'Cambridge solar installation',
      'Harvard solar contractors',
      'MIT area solar panels',
      'Cambridge solar incentives',
      'Middlesex County solar',
      'Cambridge rooftop solar',
      'solar energy Cambridge Massachusetts'
    ]
  },
  'worcester': {
    displayName: 'Worcester',
    slug: 'worcester',
    description: 'Trusted solar panel installation in Worcester, Massachusetts. Solar Señorita provides affordable solar solutions for Central Mass residents.',
    longDescription: 'Worcester, the Heart of the Commonwealth, offers excellent solar potential and strong state incentives. We help residents maximize savings in Massachusetts\' second-largest city.',
    stats: {
      avgElectricityCost: '$0.22/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '7.5 kW',
      avgSavings: '$1,980/year',
      paybackPeriod: '7-9 years',
      population: '206,518',
      households: '82,103'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Worcester Property Tax Exemption', 'Green Energy Loan Program'],
      utility: ['National Grid Worcester Solar Rebates']
    },
    services: {
      permits: ['Worcester Building Division', 'Code Enforcement'],
      inspections: ['Electrical Inspection Required', 'Final Building Inspection'],
      utilities: ['National Grid'],
      contractors: ['Central Mass Solar Specialists', 'Licensed MA Contractors']
    },
    geo: {
      lat: 42.2626,
      lng: -71.8023,
      county: 'Worcester County',
      zipCodes: ['01601', '01602', '01603', '01604', '01605', '01606', '01607', '01608', '01609', '01610'],
      neighborhoods: ['Downtown', 'Elm Park', 'Forest Grove', 'Great Brook Valley', 'Green Island', 'Main South', 'Piedmont', 'Quinsigamond Village', 'Vernon Hill', 'West Side', 'Shrewsbury Street District']
    },
    nearbyCity: ['Shrewsbury', 'Auburn', 'Millbury', 'Leicester'],
    localKeywords: [
      'solar panels Worcester MA',
      'Worcester solar installation',
      'Central Mass solar contractors',
      'Worcester County solar',
      'Worcester solar incentives',
      'Heart of Commonwealth solar'
    ]
  },
  'springfield': {
    displayName: 'Springfield',
    slug: 'springfield',
    description: 'Professional solar panel installation in Springfield, Massachusetts. Solar Señorita provides expert solar solutions for Western Mass residents with guaranteed savings.',
    longDescription: 'Springfield, the birthplace of basketball, offers excellent solar potential and strong state incentives. As Western Massachusetts\' largest city, we help residents capitalize on solar opportunities in Hampden County.',
    stats: {
      avgElectricityCost: '$0.21/kWh',
      solarPotential: 'Very Good (4.1 peak sun hours)',
      avgSystemSize: '7.8 kW',
      avgSavings: '$1,850/year',
      paybackPeriod: '7-8 years',
      population: '155,929',
      households: '59,421'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Springfield Property Tax Exemption', 'Green Springfield Initiative'],
      utility: ['Eversource Energy Western MA Solar Program']
    },
    services: {
      permits: ['Springfield Building Department', 'Code Enforcement Division'],
      inspections: ['Electrical Inspection Required', 'Final Building Inspection'],
      utilities: ['Eversource Energy'],
      contractors: ['Western Mass Solar Specialists', 'Licensed MA Solar Contractors']
    },
    geo: {
      lat: 42.1015,
      lng: -72.5898,
      county: 'Hampden County',
      zipCodes: ['01103', '01104', '01105', '01107', '01108', '01109', '01118', '01119', '01128', '01129', '01144', '01151', '01152'],
      neighborhoods: ['Downtown', 'Forest Park', 'Sixteen Acres', 'East Springfield', 'Pine Point', 'South End', 'North End', 'Brightwood', 'Hungry Hill', 'Indian Orchard', 'Liberty Heights', 'McKnight', 'Memorial Square', 'Metro Center', 'Old Hill', 'Six Corners', 'Upper Hill']
    },
    nearbyCity: ['Chicopee', 'Westfield', 'Holyoke', 'West Springfield'],
    localKeywords: [
      'solar panels Springfield MA',
      'Springfield solar installation',
      'Western Mass solar contractors',
      'Hampden County solar',
      'Springfield solar incentives',
      'Forest Park solar panels'
    ]
  },
  'lowell': {
    displayName: 'Lowell',
    slug: 'lowell',
    description: 'Trusted solar panel installation in Lowell, Massachusetts. Solar Señorita delivers cutting-edge solar solutions for Merrimack Valley residents.',
    longDescription: 'Lowell, a historic mill city turned tech hub, offers excellent solar opportunities. Our team helps residents navigate Lowell\'s solar incentives and maximize savings in this vibrant Middlesex County community.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Good (3.9 peak sun hours)',
      avgSystemSize: '7.3 kW',
      avgSavings: '$1,720/year',
      paybackPeriod: '7-9 years',
      population: '115,554',
      households: '42,185'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Lowell Property Tax Exemption', 'Solar Loan Program'],
      utility: ['National Grid Merrimack Valley Solar Incentives']
    },
    services: {
      permits: ['Lowell Building Department', 'Inspectional Services'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['Merrimack Valley Solar Experts', 'NABCEP Certified Installers']
    },
    geo: {
      lat: 42.6334,
      lng: -71.3162,
      county: 'Middlesex County',
      zipCodes: ['01850', '01851', '01852', '01853', '01854'],
      neighborhoods: ['Downtown', 'Acre', 'Back Central', 'Belvidere', 'Centralville', 'Highlands', 'Lower Highlands', 'Pawtucketville', 'South Lowell', 'The Flats']
    },
    nearbyCity: ['Billerica', 'Chelmsford', 'Tewksbury', 'Dracut'],
    localKeywords: [
      'solar panels Lowell MA',
      'Lowell solar installation',
      'Merrimack Valley solar',
      'Middlesex County solar contractors',
      'Lowell solar incentives'
    ]
  },
  'newton': {
    displayName: 'Newton',
    slug: 'newton',
    description: 'Premium solar panel installation in Newton, Massachusetts. Solar Señorita provides luxury solar solutions for Newton\'s environmentally conscious residents.',
    longDescription: 'Newton, known as the Garden City, leads in environmental sustainability. Our premium solar installations help Newton residents achieve energy independence while maintaining the city\'s commitment to green living.',
    stats: {
      avgElectricityCost: '$0.24/kWh',
      solarPotential: 'Excellent (4.2 peak sun hours)',
      avgSystemSize: '8.5 kW',
      avgSavings: '$2,180/year',
      paybackPeriod: '6-7 years',
      population: '88,923',
      households: '32,648'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Newton Green Energy Initiative', 'Property Tax Exemption', 'Expedited Solar Permitting'],
      utility: ['Eversource Energy Newton Solar Program']
    },
    services: {
      permits: ['Newton Building Department', 'Environmental Affairs'],
      inspections: ['Electrical Inspection Required', 'Environmental Compliance Check'],
      utilities: ['Eversource Energy'],
      contractors: ['Premium Solar Installers', 'Newton Licensed Contractors']
    },
    geo: {
      lat: 42.3370,
      lng: -71.2092,
      county: 'Middlesex County',
      zipCodes: ['02458', '02459', '02460', '02461', '02462', '02464', '02465', '02466', '02467', '02468'],
      neighborhoods: ['Newton Centre', 'Newton Highlands', 'Newton Lower Falls', 'Newton Upper Falls', 'Newtonville', 'West Newton', 'Waban', 'Chestnut Hill', 'Newton Corner', 'Oak Hill', 'Nonantum', 'Auburndale', 'Newton North', 'Newton South']
    },
    nearbyCity: ['Brookline', 'Wellesley', 'Waltham', 'Watertown'],
    localKeywords: [
      'solar panels Newton MA',
      'Newton solar installation',
      'Garden City solar',
      'luxury solar Newton',
      'Newton solar contractors',
      'Middlesex County premium solar'
    ]
  },
  'framingham': {
    displayName: 'Framingham',
    slug: 'framingham',
    description: 'Expert solar panel installation in Framingham, Massachusetts. Solar Señorita provides reliable solar solutions for MetroWest residents.',
    longDescription: 'Framingham, the heart of MetroWest, offers excellent solar potential with strong community support for renewable energy. Our installations help residents take advantage of city and state solar incentives.',
    stats: {
      avgElectricityCost: '$0.22/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '7.6 kW',
      avgSavings: '$1,890/year',
      paybackPeriod: '7-8 years',
      population: '72,362',
      households: '26,734'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Framingham Property Tax Exemption', 'Green Framingham Initiative'],
      utility: ['Eversource Energy MetroWest Solar Program']
    },
    services: {
      permits: ['Framingham Building Department', 'Engineering Division'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['Eversource Energy'],
      contractors: ['MetroWest Solar Specialists', 'Licensed Framingham Contractors']
    },
    geo: {
      lat: 42.2793,
      lng: -71.4162,
      county: 'Middlesex County',
      zipCodes: ['01701', '01702', '01703', '01704', '01705'],
      neighborhoods: ['Downtown Framingham', 'Nobscot', 'Saxonville', 'Cushing', 'Framingham Centre', 'South Framingham', 'Ashland Road Area', 'Farm Pond', 'Pinefield']
    },
    nearbyCity: ['Natick', 'Ashland', 'Marlborough', 'Sudbury'],
    localKeywords: [
      'solar panels Framingham MA',
      'Framingham solar installation',
      'MetroWest solar contractors',
      'Framingham solar incentives',
      'Middlesex County solar'
    ]
  },
  'quincy': {
    displayName: 'Quincy',
    slug: 'quincy',
    description: 'Professional solar panel installation in Quincy, Massachusetts. Solar Señorita provides expert solar solutions for South Shore residents.',
    longDescription: 'Quincy, the City of Presidents, offers excellent coastal solar potential. Our team helps South Shore residents maximize solar savings while contributing to Quincy\'s sustainability goals.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Excellent (4.3 peak sun hours)',
      avgSystemSize: '7.4 kW',
      avgSavings: '$1,950/year',
      paybackPeriod: '6-8 years',
      population: '101,636',
      households: '44,312'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Quincy Property Tax Exemption', 'Coastal Solar Initiative'],
      utility: ['National Grid South Shore Solar Program']
    },
    services: {
      permits: ['Quincy Building Department', 'Inspectional Services'],
      inspections: ['Electrical Inspection Required', 'Coastal Compliance Check'],
      utilities: ['National Grid'],
      contractors: ['South Shore Solar Experts', 'Quincy Licensed Contractors']
    },
    geo: {
      lat: 42.2529,
      lng: -71.0023,
      county: 'Norfolk County',
      zipCodes: ['02169', '02170', '02171', '02269'],
      neighborhoods: ['Quincy Center', 'North Quincy', 'Wollaston', 'Quincy Point', 'Marina Bay', 'Merrymount', 'Germantown', 'Montclair', 'West Quincy', 'Houghs Neck', 'Squantum']
    },
    nearbyCity: ['Braintree', 'Weymouth', 'Milton', 'Boston'],
    localKeywords: [
      'solar panels Quincy MA',
      'Quincy solar installation',
      'South Shore solar contractors',
      'Norfolk County solar',
      'Quincy solar incentives',
      'coastal solar Massachusetts'
    ]
  },
  'brockton': {
    displayName: 'Brockton',
    slug: 'brockton',
    description: 'Affordable solar panel installation in Brockton, Massachusetts. Solar Señorita provides cost-effective solar solutions for Plymouth County residents.',
    longDescription: 'Brockton, the Champion City, offers great solar potential with affordable installation options. Our team helps residents access solar incentives and achieve significant energy savings.',
    stats: {
      avgElectricityCost: '$0.21/kWh',
      solarPotential: 'Very Good (4.1 peak sun hours)',
      avgSystemSize: '7.7 kW',
      avgSavings: '$1,780/year',
      paybackPeriod: '7-9 years',
      population: '105,643',
      households: '38,917'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Brockton Property Tax Exemption', 'Community Solar Program'],
      utility: ['National Grid Plymouth County Solar Incentives']
    },
    services: {
      permits: ['Brockton Building Department', 'Code Enforcement'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['Plymouth County Solar Specialists', 'Brockton Licensed Contractors']
    },
    geo: {
      lat: 42.0834,
      lng: -71.0184,
      county: 'Plymouth County',
      zipCodes: ['02301', '02302', '02303', '02304', '02305'],
      neighborhoods: ['Downtown Brockton', 'Campello', 'Montello', 'East Brockton', 'South Brockton', 'West Brockton', 'Belmont', 'Crescent Beach']
    },
    nearbyCity: ['Bridgewater', 'Abington', 'Stoughton', 'Easton'],
    localKeywords: [
      'solar panels Brockton MA',
      'Brockton solar installation',
      'Plymouth County solar',
      'affordable solar Brockton',
      'Champion City solar'
    ]
  },
  'lynn': {
    displayName: 'Lynn',
    slug: 'lynn',
    description: 'Professional solar panel installation in Lynn, Massachusetts. Solar Señorita provides expert solar solutions for North Shore residents.',
    longDescription: 'Lynn, the City by the Sea, offers excellent coastal solar potential. Our team helps North Shore residents maximize solar savings while contributing to Lynn\'s renewable energy goals.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Excellent (4.2 peak sun hours)',
      avgSystemSize: '7.2 kW',
      avgSavings: '$1,840/year',
      paybackPeriod: '6-8 years',
      population: '101,253',
      households: '39,428'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Lynn Property Tax Exemption', 'Coastal Renewable Energy Program'],
      utility: ['National Grid North Shore Solar Program']
    },
    services: {
      permits: ['Lynn Building Department', 'Inspectional Services'],
      inspections: ['Electrical Inspection Required', 'Coastal Environmental Check'],
      utilities: ['National Grid'],
      contractors: ['North Shore Solar Experts', 'Lynn Licensed Contractors']
    },
    geo: {
      lat: 42.4668,
      lng: -70.9495,
      county: 'Essex County',
      zipCodes: ['01901', '01902', '01903', '01904', '01905'],
      neighborhoods: ['Downtown Lynn', 'East Lynn', 'West Lynn', 'Lynn Woods', 'Diamond District', 'Wyoma', 'Pine Hill', 'Goldfish Pond', 'Fayette Street', 'Manning Bowl']
    },
    nearbyCity: ['Salem', 'Peabody', 'Saugus', 'Swampscott'],
    localKeywords: [
      'solar panels Lynn MA',
      'Lynn solar installation',
      'North Shore solar contractors',
      'Essex County solar',
      'coastal solar Lynn'
    ]
  },
  'somerville': {
    displayName: 'Somerville',
    slug: 'somerville',
    description: 'Innovative solar panel installation in Somerville, Massachusetts. Solar Señorita provides cutting-edge solar solutions for this progressive community.',
    longDescription: 'Somerville, known for innovation and sustainability, leads in green energy adoption. Our installations help residents achieve carbon neutrality goals while maximizing solar savings in this vibrant community.',
    stats: {
      avgElectricityCost: '$0.24/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '6.9 kW',
      avgSavings: '$1,690/year',
      paybackPeriod: '6-7 years',
      population: '81,045',
      households: '35,872'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Somerville Climate Action Plan Incentives', 'SolarizeSOMA Program'],
      utility: ['Eversource Energy Somerville Solar Initiative']
    },
    services: {
      permits: ['Somerville Building Department', 'Environmental Sustainability'],
      inspections: ['Electrical Inspection Required', 'Sustainability Compliance'],
      utilities: ['Eversource Energy'],
      contractors: ['Green Energy Specialists', 'Somerville Licensed Contractors']
    },
    geo: {
      lat: 42.3876,
      lng: -71.0995,
      county: 'Middlesex County',
      zipCodes: ['02143', '02144', '02145'],
      neighborhoods: ['Davis Square', 'Porter Square East', 'Union Square', 'Inman Square East', 'Assembly Square', 'Spring Hill', 'Winter Hill', 'East Somerville', 'West Somerville', 'Teele Square', 'Ball Square']
    },
    nearbyCity: ['Cambridge', 'Medford', 'Arlington', 'Charlestown'],
    localKeywords: [
      'solar panels Somerville MA',
      'Somerville solar installation',
      'innovative solar Somerville',
      'green energy Somerville',
      'Davis Square solar'
    ]
  },
  'lawrence': {
    displayName: 'Lawrence',
    slug: 'lawrence',
    description: 'Affordable solar panel installation in Lawrence, Massachusetts. Solar Señorita provides accessible solar solutions for Merrimack Valley residents.',
    longDescription: 'Lawrence, the Immigrant City, offers excellent solar potential with strong community programs. Our team helps residents access affordable solar options and maximize available incentives.',
    stats: {
      avgElectricityCost: '$0.22/kWh',
      solarPotential: 'Good (3.9 peak sun hours)',
      avgSystemSize: '7.5 kW',
      avgSavings: '$1,650/year',
      paybackPeriod: '8-9 years',
      population: '89,143',
      households: '28,640'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Lawrence Community Solar Program', 'Property Tax Exemption'],
      utility: ['National Grid Merrimack Valley Solar Incentives']
    },
    services: {
      permits: ['Lawrence Building Department', 'Code Enforcement'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['Merrimack Valley Solar Experts', 'Lawrence Licensed Contractors']
    },
    geo: {
      lat: 42.7070,
      lng: -71.1631,
      county: 'Essex County',
      zipCodes: ['01840', '01841', '01842', '01843'],
      neighborhoods: ['Tower Hill', 'Prospect Hill', 'South Lawrence', 'North Lawrence', 'Arlington District', 'Bellevue', 'Everett Mills', 'Oak Island']
    },
    nearbyCity: ['Methuen', 'Andover', 'North Andover', 'Haverhill'],
    localKeywords: [
      'solar panels Lawrence MA',
      'Lawrence solar installation',
      'Merrimack Valley solar',
      'affordable solar Lawrence',
      'Essex County solar contractors'
    ]
  },
  'new-bedford': {
    displayName: 'New Bedford',
    slug: 'new-bedford',
    description: 'Coastal solar panel installation in New Bedford, Massachusetts. Solar Señorita provides marine-grade solar solutions for South Coast residents.',
    longDescription: 'New Bedford, the Whaling City, offers excellent coastal solar potential. Our marine-grade installations help South Coast residents maximize solar savings while withstanding coastal conditions.',
    stats: {
      avgElectricityCost: '$0.22/kWh',
      solarPotential: 'Excellent (4.3 peak sun hours)',
      avgSystemSize: '7.8 kW',
      avgSavings: '$1,920/year',
      paybackPeriod: '7-8 years',
      population: '101,079',
      households: '39,208'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['New Bedford Renewable Energy Program', 'Coastal Solar Initiative'],
      utility: ['Eversource Energy South Coast Solar Program']
    },
    services: {
      permits: ['New Bedford Building Department', 'Coastal Zone Management'],
      inspections: ['Electrical Inspection Required', 'Coastal Compliance Check'],
      utilities: ['Eversource Energy'],
      contractors: ['South Coast Solar Specialists', 'Marine-Grade Solar Installers']
    },
    geo: {
      lat: 41.6362,
      lng: -70.9342,
      county: 'Bristol County',
      zipCodes: ['02740', '02741', '02742', '02743', '02744', '02745', '02746'],
      neighborhoods: ['Downtown New Bedford', 'North End', 'South End', 'West End', 'Brooklawn Park', 'Hazelwood Park', 'Riverside', 'Buttonwood Park']
    },
    nearbyCity: ['Dartmouth', 'Fairhaven', 'Acushnet', 'Fall River'],
    localKeywords: [
      'solar panels New Bedford MA',
      'New Bedford solar installation',
      'South Coast solar contractors',
      'coastal solar New Bedford',
      'Bristol County solar',
      'marine grade solar'
    ]
  },
  'fall-river': {
    displayName: 'Fall River',
    slug: 'fall-river',
    description: 'Professional solar panel installation in Fall River, Massachusetts. Solar Señorita provides reliable solar solutions for South Coast residents.',
    longDescription: 'Fall River, the Scholarship City, offers excellent solar potential with strong community support. Our installations help residents achieve energy independence while supporting the city\'s economic revitalization.',
    stats: {
      avgElectricityCost: '$0.21/kWh',
      solarPotential: 'Very Good (4.1 peak sun hours)',
      avgSystemSize: '7.6 kW',
      avgSavings: '$1,760/year',
      paybackPeriod: '7-9 years',
      population: '94,000',
      households: '38,759'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Fall River Property Tax Exemption', 'Economic Development Solar Credits'],
      utility: ['National Grid South Coast Solar Program']
    },
    services: {
      permits: ['Fall River Building Department', 'Economic Development'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['South Coast Solar Experts', 'Fall River Licensed Contractors']
    },
    geo: {
      lat: 41.7015,
      lng: -71.1550,
      county: 'Bristol County',
      zipCodes: ['02720', '02721', '02722', '02723', '02724'],
      neighborhoods: ['Downtown Fall River', 'Highlands', 'Flint Village', 'South End', 'North End', 'Corky Row', 'The Hill', 'Mechanicsville']
    },
    nearbyCity: ['Somerset', 'Swansea', 'Westport', 'New Bedford'],
    localKeywords: [
      'solar panels Fall River MA',
      'Fall River solar installation',
      'South Coast solar contractors',
      'Bristol County solar',
      'Scholarship City solar'
    ]
  },
  'malden': {
    displayName: 'Malden',
    slug: 'malden',
    description: 'Expert solar panel installation in Malden, Massachusetts. Solar Señorita provides professional solar solutions for Greater Boston residents.',
    longDescription: 'Malden, known for its diversity and community spirit, offers excellent solar potential. Our installations help residents take advantage of city and state incentives while contributing to Malden\'s sustainability goals.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '7.1 kW',
      avgSavings: '$1,730/year',
      paybackPeriod: '7-8 years',
      population: '66,263',
      households: '28,155'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Malden Property Tax Exemption', 'Community Solar Initiative'],
      utility: ['National Grid Greater Boston Solar Program']
    },
    services: {
      permits: ['Malden Building Department', 'Inspectional Services'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['Greater Boston Solar Specialists', 'Malden Licensed Contractors']
    },
    geo: {
      lat: 42.4251,
      lng: -71.0662,
      county: 'Middlesex County',
      zipCodes: ['02148'],
      neighborhoods: ['Malden Center', 'Linden', 'Edgeworth', 'Faulkner', 'Forestdale', 'Oak Grove', 'Maplewood']
    },
    nearbyCity: ['Medford', 'Everett', 'Melrose', 'Revere'],
    localKeywords: [
      'solar panels Malden MA',
      'Malden solar installation',
      'Greater Boston solar',
      'Middlesex County solar contractors',
      'Malden solar incentives'
    ]
  },
  'medford': {
    displayName: 'Medford',
    slug: 'medford',
    description: 'Professional solar panel installation in Medford, Massachusetts. Solar Señorita provides expert solar solutions for Greater Boston area residents.',
    longDescription: 'Medford, home to Tufts University, combines academic excellence with environmental consciousness. Our installations help residents achieve energy independence while supporting the community\'s sustainability initiatives.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '7.3 kW',
      avgSavings: '$1,810/year',
      paybackPeriod: '6-8 years',
      population: '63,447',
      households: '25,667'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Medford Property Tax Exemption', 'Green Medford Initiative'],
      utility: ['Eversource Energy Greater Boston Solar Program']
    },
    services: {
      permits: ['Medford Building Department', 'Community Development'],
      inspections: ['Electrical Inspection Required', 'Environmental Compliance'],
      utilities: ['Eversource Energy'],
      contractors: ['Greater Boston Solar Experts', 'Medford Licensed Contractors']
    },
    geo: {
      lat: 42.4184,
      lng: -71.1061,
      county: 'Middlesex County',
      zipCodes: ['02155'],
      neighborhoods: ['Medford Square', 'Wellington', 'West Medford', 'South Medford', 'Hillside', 'Glenwood']
    },
    nearbyCity: ['Somerville', 'Arlington', 'Winchester', 'Malden'],
    localKeywords: [
      'solar panels Medford MA',
      'Medford solar installation',
      'Tufts area solar',
      'Greater Boston solar contractors',
      'Middlesex County solar'
    ]
  },
  'peabody': {
    displayName: 'Peabody',
    slug: 'peabody',
    description: 'Professional solar panel installation in Peabody, Massachusetts. Solar Señorita provides expert solar solutions for North Shore residents.',
    longDescription: 'Peabody, the Leather City, offers excellent solar potential with strong local support for renewable energy. Our installations help residents maximize North Shore solar opportunities.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Very Good (4.1 peak sun hours)',
      avgSystemSize: '7.5 kW',
      avgSavings: '$1,880/year',
      paybackPeriod: '6-8 years',
      population: '54,481',
      households: '22,220'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Peabody Property Tax Exemption', 'North Shore Solar Initiative'],
      utility: ['National Grid North Shore Solar Program']
    },
    services: {
      permits: ['Peabody Building Department', 'Inspectional Services'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['North Shore Solar Specialists', 'Peabody Licensed Contractors']
    },
    geo: {
      lat: 42.5278,
      lng: -70.9286,
      county: 'Essex County',
      zipCodes: ['01960'],
      neighborhoods: ['Downtown Peabody', 'West Peabody', 'South Peabody', 'Northshore Community College Area', 'Centennial']
    },
    nearbyCity: ['Salem', 'Beverly', 'Danvers', 'Lynn'],
    localKeywords: [
      'solar panels Peabody MA',
      'Peabody solar installation',
      'North Shore solar contractors',
      'Essex County solar',
      'Leather City solar'
    ]
  },
  'revere': {
    displayName: 'Revere',
    slug: 'revere',
    description: 'Coastal solar panel installation in Revere, Massachusetts. Solar Señorita provides marine-grade solar solutions for beachfront communities.',
    longDescription: 'Revere, home to America\'s first public beach, offers excellent coastal solar potential. Our marine-grade installations help beachfront residents maximize solar savings while withstanding ocean conditions.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Excellent (4.3 peak sun hours)',
      avgSystemSize: '7.2 kW',
      avgSavings: '$1,860/year',
      paybackPeriod: '6-7 years',
      population: '62,186',
      households: '26,616'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Revere Property Tax Exemption', 'Coastal Renewable Energy Program'],
      utility: ['Eversource Energy Coastal Solar Initiative']
    },
    services: {
      permits: ['Revere Building Department', 'Coastal Zone Management'],
      inspections: ['Electrical Inspection Required', 'Coastal Environmental Check'],
      utilities: ['Eversource Energy'],
      contractors: ['Coastal Solar Specialists', 'Marine-Grade Solar Installers']
    },
    geo: {
      lat: 42.4084,
      lng: -71.0120,
      county: 'Suffolk County',
      zipCodes: ['02151'],
      neighborhoods: ['Revere Beach', 'Beachmont', 'Oak Island', 'Point of Pines', 'Shirley', 'West Revere']
    },
    nearbyCity: ['Chelsea', 'Winthrop', 'Everett', 'Malden'],
    localKeywords: [
      'solar panels Revere MA',
      'Revere solar installation',
      'coastal solar Revere',
      'Revere Beach solar',
      'marine grade solar Massachusetts'
    ]
  },
  'waltham': {
    displayName: 'Waltham',
    slug: 'waltham',
    description: 'Professional solar panel installation in Waltham, Massachusetts. Solar Señorita provides expert solar solutions for MetroWest residents.',
    longDescription: 'Waltham, known as Watch City, combines historic charm with modern innovation. Our installations help residents achieve energy independence while supporting Waltham\'s commitment to sustainable development.',
    stats: {
      avgElectricityCost: '$0.23/kWh',
      solarPotential: 'Very Good (4.0 peak sun hours)',
      avgSystemSize: '7.4 kW',
      avgSavings: '$1,820/year',
      paybackPeriod: '6-8 years',
      population: '65,218',
      households: '27,632'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Waltham Property Tax Exemption', 'Sustainable Waltham Initiative'],
      utility: ['Eversource Energy MetroWest Solar Program']
    },
    services: {
      permits: ['Waltham Building Department', 'Planning & Community Development'],
      inspections: ['Electrical Inspection Required', 'Environmental Compliance'],
      utilities: ['Eversource Energy'],
      contractors: ['MetroWest Solar Experts', 'Waltham Licensed Contractors']
    },
    geo: {
      lat: 42.3765,
      lng: -71.2356,
      county: 'Middlesex County',
      zipCodes: ['02451', '02452', '02453', '02454'],
      neighborhoods: ['Downtown Waltham', 'Piety Corner', 'Prospect Hill', 'South Waltham', 'West Waltham', 'The Highlands', 'Cedarland']
    },
    nearbyCity: ['Newton', 'Watertown', 'Belmont', 'Lexington'],
    localKeywords: [
      'solar panels Waltham MA',
      'Waltham solar installation',
      'Watch City solar',
      'MetroWest solar contractors',
      'Middlesex County solar'
    ]
  },
  'taunton': {
    displayName: 'Taunton',
    slug: 'taunton',
    description: 'Professional solar panel installation in Taunton, Massachusetts. Solar Señorita provides reliable solar solutions for southeastern Massachusetts residents.',
    longDescription: 'Taunton, the Silver City, offers excellent solar potential in southeastern Massachusetts. Our installations help residents take advantage of regional incentives while contributing to the area\'s renewable energy growth.',
    stats: {
      avgElectricityCost: '$0.22/kWh',
      solarPotential: 'Very Good (4.1 peak sun hours)',
      avgSystemSize: '7.7 kW',
      avgSavings: '$1,830/year',
      paybackPeriod: '7-8 years',
      population: '59,408',
      households: '23,244'
    },
    incentives: {
      federal: ['30% Solar Investment Tax Credit (ITC)'],
      state: ['Massachusetts SMART Program', 'Net Metering 2.0'],
      local: ['Taunton Property Tax Exemption', 'Silver City Green Initiative'],
      utility: ['National Grid Southeastern MA Solar Program']
    },
    services: {
      permits: ['Taunton Building Department', 'Code Enforcement'],
      inspections: ['Electrical Inspection Required', 'Building Final Inspection'],
      utilities: ['National Grid'],
      contractors: ['Southeastern Mass Solar Specialists', 'Taunton Licensed Contractors']
    },
    geo: {
      lat: 41.9001,
      lng: -71.0897,
      county: 'Bristol County',
      zipCodes: ['02780', '02783'],
      neighborhoods: ['Downtown Taunton', 'East Taunton', 'North Taunton', 'Oakland', 'Whittenton', 'Weir Village']
    },
    nearbyCity: ['Bridgewater', 'Middleborough', 'Norton', 'Raynham'],
    localKeywords: [
      'solar panels Taunton MA',
      'Taunton solar installation',
      'Silver City solar',
      'southeastern Mass solar',
      'Bristol County solar contractors'
    ]
  }
};

// Helper functions for SEO content generation
export const getCityLocalContent = (citySlug: string) => {
  return cityLocalData[citySlug] || null;
};

export const getNearbyCity = (citySlug: string): string[] => {
  const city = cityLocalData[citySlug];
  return city?.nearbyCity || [];
};

export const getAllCityLocalKeywords = (): string[] => {
  return Object.values(cityLocalData).flatMap(city => city.localKeywords);
};
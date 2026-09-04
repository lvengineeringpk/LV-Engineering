import {
  SolutionItem,
  IndustryItem,
  ProcessStep,
  MissionPrinciple,
  ValuePillar,
  OfficeLocation,
  GlobalPrincipal,
  ProjectCaseStudy,
} from '../types';

export const COMPANY_INFO = {
  name: 'LV Engineering',
  legalName: 'Low Voltage Engineering',
  tagline: 'Turning Concepts Into Engineering Marvels',
  secondaryTagline: 'Sparks of Innovation',
  website: 'www.lv-engineering.com',
  primaryEmail: 'info@lv-engineering.com',
  salesEmail: 'sales.lvengineering@gmail.com',
  primaryPhone: '0301-1484433',
  secondaryPhone: '0322-2222805',
  summary:
    'Low Voltage Engineering is a competent company specializing in Electrical, Instrumentation and Automation Services in industrial and commercial sectors. We combine quality delivery with cost-saving engineering methodology, backed by robust technical support and responsive customer service.',
};

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Karachi',
    title: 'Karachi Head Office',
    address:
      'Mezzanine Floor, Building #19C, Sunset, 2nd Floor, DHA Phase-II Extension, Karachi South Saddar Town.',
    phone: '0301-1484433',
    email: 'info@lv-engineering.com',
    hours: 'Monday – Saturday: 09:00 – 18:00 PKT',
    coordinates: '24.8290° N, 67.0654° E',
  },
  {
    city: 'Lahore',
    title: 'Lahore Regional Office',
    address:
      '2 Km off Ferozepur Road, Nadir Chowk, Industrial State, Hazara Chowk, Street #5, Lahore.',
    phone: '0322-2222805',
    email: 'info@lv-engineering.com',
    hours: 'Monday – Saturday: 09:00 – 18:00 PKT',
    coordinates: '31.4504° N, 74.3411° E',
  },
];

export const MISSION_PRINCIPLES: MissionPrinciple[] = [
  {
    number: '01',
    title: 'Provide Excellent Service',
    description:
      'To provide an excellent service to our clients, ensuring that all electrical, automation and life safety solutions meet the highest technical standards and industry best practices.',
    iconName: 'ShieldCheck',
  },
  {
    number: '02',
    title: 'Client Principal Position',
    description:
      'To give our clients their principal position in the business, recognizing that client operational success, reliability and satisfaction are the ultimate measure of our performance.',
    iconName: 'Award',
  },
  {
    number: '03',
    title: 'Integrity & Honesty',
    description:
      'To treat our clients with the integrity and honesty they deserve, fostering transparent partnerships through ethical engineering practice, accurate scoping and candid guidance.',
    iconName: 'Compass',
  },
  {
    number: '04',
    title: 'Deliver Quality Service On Time',
    description:
      'To deliver quality service strictly on time and within agreed project schedules, honoring critical shutdown windows, installation deadlines and commissioning targets.',
    iconName: 'Clock',
  },
  {
    number: '05',
    title: 'Work According to Client Convenience',
    description:
      'To work according to client convenience and operational schedules, coordinating site works flexibly to minimize downtime and prevent plant disruptions.',
    iconName: 'Layers',
  },
  {
    number: '06',
    title: 'Use Quality Materials',
    description:
      'To always utilize premium, certified engineering materials sourced from authenticated global manufacturers to ensure electrical safety and long-term asset reliability.',
    iconName: 'Cpu',
  },
  {
    number: '07',
    title: 'Provide Value for Money',
    description:
      'To provide true value for money through value-engineered solutions, cost-saving methodologies, reduced operating costs, and optimized capital expenditure.',
    iconName: 'Zap',
  },
  {
    number: '08',
    title: 'Train Young Professionals',
    description:
      'To train and mentor young professionals and engineers entering the industry, passing on practical technical knowledge, safety disciplines, and engineering craftsmanship.',
    iconName: 'GraduationCap',
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'QUALITY',
    subtitle: 'Certified Materials & Standards',
    description:
      'Execution driven by top-grade engineering materials, meticulous quality control, and adherence to international electrical and safety norms.',
    points: [
      'Certified components from global manufacturers',
      'Rigorous pre-commissioning testing',
      'Structured cable management and panel layout',
    ],
  },
  {
    title: 'RELIABILITY',
    subtitle: 'Dependable Performance',
    description:
      'Turnkey delivery that honors critical commissioning schedules with proactive engineering support to safeguard operational uptime.',
    points: [
      'Timely handover across demanding project phases',
      'Continuous technical backup & troubleshooting',
      'Engineered redundancy for critical infrastructure',
    ],
  },
  {
    title: 'TECHNICAL EXPERTISE',
    subtitle: 'Electrical, Instrumentation & Automation',
    description:
      'Multi-disciplinary capabilities spanning low-voltage power distribution, advanced PLC/SCADA automation, and precision instrumentation.',
    points: [
      'Experienced engineering management team',
      'Advanced telemetry and remote diagnostic systems',
      'Customized controls for complex industrial processes',
    ],
  },
  {
    title: 'CLIENT FOCUS',
    subtitle: 'Cost-Saving Methodology',
    description:
      'Engineering tailored directly around client requirements and operating profiles to optimize total cost of ownership without cutting corners.',
    points: [
      'Value engineering to eliminate unnecessary overheads',
      'Comprehensive customer service & after-sales care',
      'Adaptable integration into live plant environments',
    ],
  },
];

export const ENGINEERING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Scope & Requirement Analysis',
    description:
      'Detailed site investigation, single-line diagram assessment, load profiling, and identification of client operational constraints.',
    deliverables: ['Requirement Matrix', 'Site Feasibility Report', 'Preliminary Scope Definition'],
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Detailed Engineering & Schematics',
    description:
      'Preparation of electrical schematics, instrumentation layouts, automation logic flows, and bill of materials adhering to relevant standards.',
    deliverables: ['Single Line Diagrams (SLD)', 'I/O Assignment Tables', 'Panel Layout Drawings'],
  },
  {
    step: '03',
    title: 'Engineer',
    subtitle: 'Component Selection & Custom Assembly',
    description:
      'Procurement of certified tier-one equipment, custom fabrication of distribution boards, motor control centers (MCC), and control panels.',
    deliverables: ['Factory Assembly Verification', 'Component Compliance Certs', 'Panel Wiring Schematics'],
  },
  {
    step: '04',
    title: 'Install',
    subtitle: 'Site Deployment & Cable Infrastructure',
    description:
      'Professional installation of cable trays, heavy cabling, earthing networks, sensor points, and structural mountings with strict PPE compliance.',
    deliverables: ['Cable Schedule Logs', 'Earthing Resistance Verification', 'Physical Inspection Sign-off'],
  },
  {
    step: '05',
    title: 'Test',
    subtitle: 'Insulation, Continuity & Loop Testing',
    description:
      'Exhaustive pre-power testing including insulation resistance, point-to-point continuity checks, signal loop simulation, and breaker calibration.',
    deliverables: ['Megger Test Reports', 'Loop Check Sheets', 'Safety Interlock Confirmation'],
  },
  {
    step: '06',
    title: 'Commission',
    subtitle: 'Energization & Operational Tuning',
    description:
      'Controlled energization, live load balancing, PLC sequence tuning, SCADA calibration, and client team operational handover.',
    deliverables: ['Commissioning Certificate', 'As-Built Documentation', 'Operator Handover Protocol'],
  },
  {
    step: '07',
    title: 'Support',
    subtitle: 'Lifecycle Maintenance & Technical Service',
    description:
      'Ongoing technical assistance, preventive maintenance visits, troubleshooting, and continuous support to safeguard plant productivity.',
    deliverables: ['Routine Service Logs', 'Priority On-call Support', 'Spare Parts Availability'],
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'electrical-services',
    slug: 'electrical',
    title: 'Electrical Services & Infrastructure',
    category: 'Electrical Engineering',
    headline: 'End-to-end power distribution, cable architecture and intelligent power control.',
    description:
      'Low Voltage Engineering delivers complete industrial and commercial electrical services from main distribution to final point wiring, utilizing precision cable tray systems, L.T. panels, and motor control centers.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Low Tension (L.T.) Panels, Distribution Boards (DBs) & MCC Panels',
      'Cable Trays, Heavy Cable Ladders & Cable Mesh Systems',
      'Medium and Low Voltage Cabling, Glanding & Termination',
      'Industrial Lighting and LED Facility Installation',
      'Automatic Voltage Regulators (AVR) & Dynamic Voltage Regulators (DVR / UPS)',
      'Air Circuit Breakers, Molded Case Breakers, Soft Starters & VFD Units',
      'Energy Monitoring & Plant Power Profiling Systems',
    ],
    keySpecs: [
      { label: 'Voltage Range', value: 'Low Voltage 220V - 1000V AC' },
      { label: 'Enclosure Types', value: 'Form 2, 3b, 4b Distribution Panels' },
      { label: 'Cable Routing', value: 'Perforated, Ladder & Wire-Mesh' },
      { label: 'Protection Rating', value: 'IP42 up to IP65 Weatherproof' },
    ],
    standards: ['IEC 61439-1/2', 'IEEE Standards', 'BS 7671 IET Wiring Regulations'],
    applications: [
      'Manufacturing Plants',
      'Commercial Towers & Plazas',
      'Heavy Industrial Warehouses',
      'Data & Switching Centers',
    ],
  },
  {
    id: 'automation-instrumentation',
    slug: 'automation',
    title: 'Automation & Instrumentation',
    category: 'Control & Telemetry',
    headline: 'PLC, SCADA and integrated process automation for intelligent operations.',
    description:
      'Advanced industrial automation engineering designed to modernize plant performance. We program, build, and deploy custom PLC panels, supervisory SCADA dashboards, and instrumentation loops.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Programmable Logic Controllers (PLC) Programming & Integration',
      'Supervisory Control and Data Acquisition (SCADA) Architectures',
      'Custom PLC Panels and VFD-Based Motor Speed Regulation Panels',
      'Comprehensive Process Monitoring & Remote Telemetry Units (RTU)',
      'Plant Energy Monitoring Systems with Digital Metering Networks',
      'Automated Interlocks, Safety Sequences & Process Batch Control',
    ],
    keySpecs: [
      { label: 'Architectures', value: 'Centralized & Distributed I/O' },
      { label: 'Protocols', value: 'Modbus TCP/RTU, Profinet, Ethernet/IP' },
      { label: 'Human-Machine', value: 'Industrial Touch HMI & SCADA Workstations' },
      { label: 'Response Time', value: 'Sub-millisecond Logic Execution' },
    ],
    standards: ['IEC 61131-3', 'ISA-88 Batch Control', 'ISA-101 HMI Standard'],
    applications: [
      'Continuous Process Plants',
      'Packaging & Conveyor Systems',
      'Water & Effluent Treatment Facilities',
      'Substation Telemetry',
    ],
  },
  {
    id: 'power-generation',
    slug: 'power-generation',
    title: 'Generators & Power Solutions',
    category: 'Prime & Standby Power',
    headline: 'High-performance generating sets and customized power stations up to 3 MWe.',
    description:
      'In partnership with Starkgen (Turkey), we supply and commission heavy-duty generator solutions with digital fuel monitoring, AMF synchronization controllers, and ultra-silent acoustic enclosures.',
    partnerBrand: 'Starkgen',
    partnerOrigin: 'Turkey',
    featured: true,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Special Customized Diesel Generating Sets up to 3 MWe Capacity',
      'Compact, Stackable and Modular Design (Up to 24 units loadable per shipment)',
      'Comap AMF8, AMF9, AMF25 and InteliGen IG200 Controller Options',
      'Heavy Duty Baseframes with Integrated Vibration Isolation',
      'Precision Digital Fuel-Level Sensor & Remote Asset Monitoring',
      'Ultra Silent Sound-Proof Canopies with Acoustic Baffling',
      'Salt Test Endurance of Over 3,000 Hours for Corrosive Environments',
      'Up to 20% Fuel Savings with 100% First-Step Load Acceptance Capability',
      'Factory Filled with High-Grade Lubricants and Extreme Antifreeze',
    ],
    keySpecs: [
      { label: 'Capacity Range', value: 'Up to 3 MWe per unit' },
      { label: 'Controllers', value: 'Comap AMF8, AMF9, AMF25, IG200' },
      { label: 'Load Acceptance', value: '100% First Step Load Rating' },
      { label: 'Corrosion Endurance', value: '3,000+ Hours Salt Spray Test' },
    ],
    standards: ['ISO 8528 Generator Standards', 'CE Machinery Directive', 'Sound Attenuation Directives'],
    applications: [
      'Industrial Factories & Spinning Mills',
      'Hospitals & Healthcare Facilities',
      'Commercial Mega-Structures',
      'Continuous Remote Power Sites',
    ],
  },
  {
    id: 'fire-protection',
    slug: 'fire-protection',
    title: 'Fire Fighting Solutions',
    category: 'Life Safety & Protection',
    headline: 'Complete turnkey fire suppression, pumping and water delivery infrastructure.',
    description:
      'Partnering with Bristol Fire Engineering (UAE, established 1974), we provide certified firefighting systems including specialized fire pumps, foam units, fire stop arrangements, and hydrant networks.',
    partnerBrand: 'Bristol Fire Engineering',
    partnerOrigin: 'Middle East (Since 1974)',
    featured: true,
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Certified Fire Pumps (Diesel-Driven, Electric Motor & Jockey Pump Sets)',
      'Fire Sprinkler Systems, Heads, Valves & Water Flow Detectors',
      'Mobile Foam Units & Specialized Industrial Foam Deluge Systems',
      'Valves & Specialties (OS&Y Gate Valves, Butterfly, Check & Alarm Valves)',
      'Heavy Fire Hose Reels, Stainless Cabinets & Landing Valves',
      'Steel Pipes, Hangers, Heavy Supports, Swivel Clamps & Accessories (MS & HDPE)',
      'External Fire Hydrants & Departmental Connection Inlets',
      'Portable and Wheeled Fire Extinguishers (CO2, Foam, Clean Agent & Dry Powder)',
      'Certified Fire-Stop Sealant Arrangements for Wall & Slab Cable Penetrations',
    ],
    keySpecs: [
      { label: 'Pump Configurations', value: 'Electric + Diesel + Jockey Skid' },
      { label: 'Piping Grades', value: 'Schedule 40 Mild Steel & HDPE' },
      { label: 'Valves Standard', value: 'UL / FM Listed Specifications' },
      { label: 'Extinguisher Media', value: 'ABC Powder, CO2, AFFF Foam' },
    ],
    standards: ['NFPA 13, 14, 20 & 72', 'UL Listed & FM Approved components', 'Civil Defense Regulations'],
    applications: [
      'Oil Refineries & Fuel Storage Depots',
      'High-Rise Commercial & Residential Towers',
      'Textile Mills & Industrial Complexes',
      'Logistics Warehouses & Cold Stores',
    ],
  },
  {
    id: 'fire-alarm-systems',
    slug: 'fire-alarm',
    title: 'Addressable Fire Alarm Systems',
    category: 'Detection & Life Safety',
    headline: 'Microprocessor-driven addressable detection pinpointing incident origin instantly.',
    description:
      'Utilizing advanced Nittan addressable fire alarm technology (UL & LPCB listed), our systems continuously monitor smoke density, device health, and pinpoint exact physical room locations during emergencies.',
    partnerBrand: 'Nittan',
    partnerOrigin: 'Global (UL / LPCB Listed)',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Intelligent Addressable Fire Alarm Control Panels (FACP)',
      'Precision Multi-Sensor, Optical Smoke & Thermal Heat Detectors',
      'Addressable Manual Call Points (Pull Stations) & Monitoring Modules',
      'Synchronized Audio-Visual Strobes, Electronic Sounders & Voice Alarm',
      'Continuous Digital Two-Way Communication Between Panel and Field Devices',
      'Live Transmission of Vital Parameters: Location, Smoke Density, System Health',
      'Faster Emergency Response Times with Extreme False Alarm Immunity',
      'Scalable Loop Architecture Supporting Hundreds of Addressable Points per Loop',
      'LPCB and UL Certified System Integrity',
    ],
    keySpecs: [
      { label: 'Certifications', value: 'UL Listed & LPCB Certified' },
      { label: 'Communication', value: 'Fully Addressable Digital Protocol' },
      { label: 'Topology', value: 'Class A & Class B Fault-Tolerant Loops' },
      { label: 'Diagnostics', value: 'Real-time Smoke Obscuration & Drift' },
    ],
    standards: ['NFPA 72 National Fire Alarm Code', 'UL 864 10th Edition', 'EN 54 Standards'],
    applications: [
      'Corporate Headquarters',
      'Pharmaceutical Manufacturing',
      'Multi-Story Shopping Malls',
      'Educational Campuses & Hospitals',
    ],
  },
  {
    id: 'lightning-protection',
    slug: 'lightning-protection',
    title: 'Lightning Protection & Earthing',
    category: 'Structural Protection',
    headline: 'Active ESE lightning conductors and certified earthing systems.',
    description:
      'Partnering with FOREND Electrical Co (specialists in lightning protection and earthing since 1977), we engineer active Early Streamer Emission (ESE) conductors and low-impedance grounding grids.',
    partnerBrand: 'Forend Electrical Co',
    partnerOrigin: 'Since 1977 (Compliant ISO 9001/2000)',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Forend Early Streamer Emission (ESE) Lightning Conductors',
      'Active Protection Envelope Encompassing the Entire Building & Perimeters',
      'Cost-Effective Architecture Requiring Fewer Down-Conductors and Earth Pits',
      'High Conductivity Copper-Bonded Earth Rods & Specialized Clamps',
      'Heavy-Duty Heavy Load Earth Inspection Pits (Polymer & Concrete)',
      'TAM and TAM PLUS Advanced Earth Resistivity Reduction Chemical Compounds',
      'Rapid Dissipation of Atmospheric Surge Currents Safely into Earth',
      'Easy Installation, Low Ongoing Maintenance and Minimal Workforce Demand',
    ],
    keySpecs: [
      { label: 'Standards Compliant', value: 'NFC 17-102, EN 50164-1, IEC 62561-6' },
      { label: 'Additional Norms', value: 'FD C17-108 & UNE 21168' },
      { label: 'Laboratory Accreditations', value: 'LCOE, ENAC, ICMET, TÜRK ENSTİTÜSÜ' },
      { label: 'Ground Enhancement', value: 'TAM / TAM PLUS Low-Resistivity' },
    ],
    standards: ['NFC 17-102', 'EN 50164-1', 'IEC 62561-6', 'UNE 21168'],
    applications: [
      'High-Rise Towers & Rooftop Structures',
      'Industrial Chemical Storage Tanks',
      'Telecommunications Towers & Radar Sites',
      'Renewable Energy Solar & Wind Farms',
    ],
  },
  {
    id: 'surge-protection',
    slug: 'surge-protection',
    title: 'Surge Protection Devices (SPD)',
    category: 'Transient Voltage Suppression',
    headline: 'High-energy surge arresters safeguarding sensitive electronic assets.',
    description:
      'Engineered in partnership with Hakel spol. s r.o. (Czech Republic, established 1994), leading global manufacturer of surge arresters, insulation monitors, and transient voltage suppression devices.',
    partnerBrand: 'Hakel spol. s r.o.',
    partnerOrigin: 'Czech Republic (Founded 1994)',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Type 1, Type 2, and Type 3 Low-Voltage Surge Protective Devices',
      'Specialized Pipeline Cathodic Protection and Insulating Flange Spark Gaps',
      'Industrial Photovoltaic (PV) DC Surge Arresters (Up to 1500V DC)',
      'Surge Suppression for Telecom, Data Lines, RS-485 and Ethernet Networks',
      'Continuous Insulation Monitoring Devices for IT Ungrounded Networks',
      'Protection of Mission-Critical VFDs, PLCs, Medical Hardware and CNC Machinery',
      'Visual Fault Indicators and Dry Remote Alarm Contact Output',
    ],
    keySpecs: [
      { label: 'Class Types', value: 'Type 1 (Class I), Type 2 (Class II), Type 3' },
      { label: 'Application Fields', value: 'Power, Photovoltaic, Signals, Railways' },
      { label: 'Impulse Current Iimp', value: 'Up to 25kA - 50kA (10/350 µs)' },
      { label: 'Response Time', value: '< 25 nanoseconds' },
    ],
    standards: ['IEC 61643-11', 'EN 61643-11', 'IEC 61643-31 (PV)', 'CE Marked'],
    applications: [
      'Oil & Gas Pipelines and Pumping Stations',
      'Photovoltaic Utility Solar Plants',
      'Railway Signaling & Power Distribution',
      'Precision Industrial Machinery & Drives',
    ],
  },
  {
    id: 'emergency-lighting',
    slug: 'emergency-lighting',
    title: 'Emergency Lighting Systems',
    category: 'Life Safety Lighting',
    headline: 'Addressable central battery and self-contained emergency luminaires.',
    description:
      'Representing Clever Light (Hungary, established 1998), we deploy state-of-the-art emergency egress lighting, exit route indicators, and centralized 220V AC/DC battery monitoring systems.',
    partnerBrand: 'Clever Light',
    partnerOrigin: 'Hungary (Since 1998)',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Self-Contained Addressable Emergency Lighting Systems with Automated Testing',
      'Addressable Central Battery Systems 220V AC/DC with Centralized Management',
      'Standalone Self-Contained Emergency & Exit Route Luminaires',
      'Maintained & Non-Maintained High-Efficiency LED Optics',
      'Automated Functional and Autonomy Duration Testing Schedules',
      'Central Monitoring Software Reporting Lamp and Battery Condition in Real Time',
      'Robust High-Temperature LiFePO4 & NiCd Emergency Battery Cells',
    ],
    keySpecs: [
      { label: 'System Categorization', value: '3 Distinct Modular Architectures' },
      { label: 'Central Battery', value: '220V AC/DC High Autonomy Inverter' },
      { label: 'Certifications', value: 'UL, TÜV Rheinland, NQA ISO 9001' },
      { label: 'Emergency Duration', value: '1 Hour, 3 Hours Selectable Back-up' },
    ],
    standards: ['EN 1838 Lighting Applications', 'EN 50171 Central Power Supply', 'UL Listed'],
    applications: [
      'Commercial Towers & Corporate Centers',
      'Industrial Production Floors & Escape Ways',
      'Airports, Metros & Transit Hubs',
      'Auditoriums & Public Gathering Halls',
    ],
  },
  {
    id: 'instrumentation-flow-meters',
    slug: 'instrumentation',
    title: 'Flow Measurement & Instrumentation',
    category: 'Process Engineering',
    headline: 'Endress+Hauser precision process solutions for flow, level, pressure & analytics.',
    description:
      'We supply and commission world-class measurement instrumentation from Endress+Hauser, optimizing industrial facilities for economic efficiency, plant safety, emissions reduction, and standards compliance.',
    partnerBrand: 'Endress+Hauser',
    partnerOrigin: 'Global Process Leader',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Electromagnetic, Coriolis Mass, Vortex and Ultrasonic Flow Meters',
      'Continuous Level Measurement (Radar, Guided Wave, Ultrasonic & Capacitance)',
      'Gauge, Absolute and Differential Pressure Transmitters',
      'Liquid Analytics Sensors (pH/ORP, Conductivity, Dissolved Oxygen & Turbidity)',
      'High-Accuracy Temperature Sensors, Thermowells and Head Transmitters',
      'Digital Recorders, Data Managers and Advanced Fieldbus Interfaces',
      'Improvement of Plant Safety and Reduction of Operational Business Costs',
      'Flow Calibration Technology ensuring Constant Product Quality',
      'Minimization of Greenhouse Gases and Strict Compliance with Regulations',
    ],
    keySpecs: [
      { label: 'Parameters Measured', value: 'Flow, Level, Pressure, Analytics, Temperature' },
      { label: 'Communication', value: 'HART, PROFIBUS, FOUNDATION Fieldbus, IO-Link' },
      { label: 'Certifications', value: 'TÜV SÜD, ISO 14001, SIL 2/3 Safety' },
      { label: 'Process Connections', value: 'Flanged, Hygienic Tri-Clamp, Threaded' },
    ],
    standards: ['ISO 14001', 'TÜV SÜD Certified', 'IEC 61508 Functional Safety SIL'],
    applications: [
      'Chemical & Petrochemical Processing',
      'Food & Beverage Sanitary Manufacturing',
      'Power Plants & Steam Boilers',
      'Water Treatment & Desalination Facilities',
    ],
  },
  {
    id: 'parking-guidance',
    slug: 'parking-guidance',
    title: 'Parking Guidance & Management Systems',
    category: 'Smart Mobility Technology',
    headline: 'CASS Parking intelligent guidance, vehicle counting and real-time surveillance.',
    description:
      'Deploying CASS Parking technology—one of the most impressive systems for smart parking guidance, ultrasonic/camera space sensors, automated counting, find-your-car kiosks, and occupancy optimization.',
    partnerBrand: 'CASS Parking',
    partnerOrigin: 'Smart Parking Leader',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Overhead Ultrasonic and Video-Based Parking Space Sensors',
      'Real-Time Outdoor & Indoor LED Directional Variable Message Displays',
      'Automated Vehicle Counting Systems & Zone Occupancy Management',
      'Find-Your-Car Kiosk Terminals and Mobile Integrated Plate Lookups',
      'Integrated Video Surveillance & Security Recording at Individual Bays',
      'Dedicated EV Charging Bay Identification and Unauthorized Parking Alerts',
      'Reserved, VIP and Handicapped-Space Dynamic Monitoring',
      'Auto Pay Station Hardware with Multi-Currency & Card Processing Integration',
      'Customizable Analytics Reports on Dwell Time, Turnover, and Revenue Optimization',
    ],
    keySpecs: [
      { label: 'Detection Types', value: 'Dual Ultrasonic & High-Res LPR Camera' },
      { label: 'Display Units', value: 'Full-Color Outdoor & Indoor Ultra-Bright LED' },
      { label: 'Special Features', value: 'Find-Your-Car, EV Detection, Counting' },
      { label: 'Software Suite', value: 'Cloud / Local Server Analytics & Reporting' },
    ],
    standards: ['CE Electromagnetic Compliance', 'ISO 9001 Quality Production'],
    applications: [
      'Shopping Malls & Retail Developments',
      'International Airport Terminal Parking',
      'Commercial High-Rise Basements',
      'Public Urban Parking Garages',
    ],
  },
  {
    id: 'elevators-escalators',
    slug: 'elevators-escalators',
    title: 'Elevators, Escalators & Vertical Transport',
    category: 'Vertical Transportation',
    headline: 'SJEC heavy-duty passenger lifts, hospital bed lifts, escalators and moving walks.',
    description:
      'Backed by SJEC vast manufacturing and installation experience, we source, erect, and commission comprehensive transportation systems for heavy commercial, hospital, and industrial environments.',
    partnerBrand: 'SJEC',
    partnerOrigin: 'Global Transportation Leader',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    details: [
      'High-Speed Gearless Passenger Lifts for Commercial & Residential Towers',
      'Hospital Patient Bed Lifts with Smooth Leveling & Extended Cabin Depths',
      'Heavy-Duty Industrial Cargo & Goods Freight Lifts with Sturdy Flooring',
      'Specialized Dumbwaiter Lifts for Food, Pharmaceuticals & Documents',
      'Heavy-Traffic Commercial and Public Transit Escalators',
      'Horizontal and Inclined Travellators (Moving Walkways) for Terminals',
      'Integrated Parking Management & Automated Vehicle Stacking Systems',
      'Platform Screen Doors and Safety Automated Gates for Mass Transit',
    ],
    keySpecs: [
      { label: 'Drive Type', value: 'Permanent Magnet Synchronous Gearless' },
      { label: 'Control Method', value: 'Microprocessor Variable Frequency (VVVF)' },
      { label: 'Safety Systems', value: 'Over-speed Governors, Progressive Buffers' },
      { label: 'Door Mechanisms', value: 'Multi-Beam Infrared Curtain Protection' },
    ],
    standards: ['EN 81-20/50 Lift Safety', 'EN 115 Escalator Standards', 'ASME A17.1'],
    applications: [
      'Commercial Towers & Corporate Headquarters',
      'Hospitals & Medical Care Centers',
      'Airports, Railway & Transit Stations',
      'Hotels, Department Stores & Supermarkets',
    ],
  },
  {
    id: 'solar-energy',
    slug: 'solar-energy',
    title: 'Solar Energy (Complete Turnkey Solutions)',
    category: 'Renewable Power',
    headline: 'Customized photovoltaic systems designed for optimal harvest, durability and ROI.',
    description:
      'LV Engineering delivers complete turnkey solar energy solutions. From initial irradiance modeling and premium tier-one equipment selection to structural fabrication, installation, and final grid synchronization.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Tailored System Design Calculated on Client Usage and Load Profiles',
      'Tier-1 High-Efficiency Monocrystalline Bifacial PV Modules',
      'Industrial On-Grid, Off-Grid and Hybrid Solar Inverter Integration',
      'Heavy-Duty Wind-Resistant Galvanized Steel & Aluminum Mounting Structures',
      'Complete Installation, DC/AC Cabling, String Fusing and Combiner Boxes',
      'Comprehensive Earthing Networks and Surge Protection for PV Arrays',
      'Installation to Commissioning Carried Out for Best Possible Harvest',
      'Cloud-Based Inverter Telemetry and Performance Ratio (PR) Tracking',
    ],
    keySpecs: [
      { label: 'System Types', value: 'On-Grid Net Metering, Hybrid & Off-Grid' },
      { label: 'Module Tech', value: 'High-Efficiency Tier 1 Monocrystalline Bifacial' },
      { label: 'Mounting Structure', value: 'Hot-Dip Galvanized & High-Grade Al' },
      { label: 'Monitoring', value: 'Real-time Remote Generation Analytics' },
    ],
    standards: ['IEC 61215 / IEC 61730', 'IEC 62109 Inverter Safety', 'Local Grid Net Metering'],
    applications: [
      'Industrial Factory Rooftops & Textile Mills',
      'Commercial Complexes & Office Plazas',
      'Agricultural Tubewells & Rural Farms',
      'Hospital & Educational Campuses',
    ],
  },
  {
    id: 'switchgear-infrastructure',
    slug: 'switchgear',
    title: 'Switchgear & Electrical Assemblies',
    category: 'Power Distribution',
    headline: 'Circuit breakers, isolation assemblies, switchboards, and protection switchgear.',
    description:
      'Dedicated engineering for electrical switchgear, circuit breakers, fuses, switches, isolation devices, and custom-assembled switchboards built for maximum electrical safety and short-circuit withstand.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    details: [
      'Low Voltage Electrical Switchgear Assemblies and Main Incomers',
      'Air Circuit Breakers (ACB) and Molded Case Circuit Breakers (MCCB)',
      'High-Breaking Capacity Fuses, Switch-Disconnectors & Changeovers',
      'Automated Isolation and Motor Protection Circuit Breakers (MPCB)',
      'Custom Factory-Built Low Tension Switchboards and Panel Assemblies',
      'Form-Separated Internal Compartmentalization for Maintenance Safety',
      'Protection Relays for Earth Fault, Overcurrent and Under-Voltage',
    ],
    keySpecs: [
      { label: 'Rated Current In', value: 'Up to 6300A Main Busbar Rating' },
      { label: 'Short-Circuit Icw', value: 'Up to 50kA / 65kA 1-Second Withstand' },
      { label: 'Compartment Forms', value: 'Form 2a through Form 4b Segregation' },
      { label: 'Insulation Voltage', value: 'Up to 1000V AC' },
    ],
    standards: ['IEC 61439-1 & IEC 61439-2', 'IEC 60947 Switching Equipment'],
    applications: [
      'Heavy Industrial Sub-Stations',
      'Continuous Manufacturing Plants',
      'Commercial Utility Incomers',
      'Power Generation Synchronization Panels',
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'industrial-facilities',
    name: 'Industrial Facilities & Heavy Plants',
    tagline: 'Continuous uptime for intensive manufacturing',
    description:
      'Heavy process industries require uncompromised power stability, robust switchgear, and fail-safe automation to protect million-dollar machinery and maintain high yield.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Harmonic mitigation & voltage stabilization',
      'MCC panels and heavy motor starters',
      'Continuous SCADA telemetry and fault monitoring',
    ],
    relevantSolutions: ['Electrical Services', 'Switchgear', 'Generators', 'Automation'],
  },
  {
    id: 'commercial-buildings',
    name: 'Commercial Buildings & Plazas',
    tagline: 'Life safety, energy efficiency, and tenant comfort',
    description:
      'High-rise commercial towers and shopping centers demand intelligent parking guidance, addressable fire alarms, sleek vertical transport, and smart emergency lighting.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Addressable fire alarms & emergency egress lighting',
      'High-speed passenger elevators & escalators',
      'CASS automated parking guidance & counting systems',
    ],
    relevantSolutions: ['Parking Guidance', 'Elevators & Escalators', 'Fire Alarm Systems', 'Emergency Lighting'],
  },
  {
    id: 'power-infrastructure',
    name: 'Power Infrastructure & Generation',
    tagline: 'Critical baseload and standby resilience',
    description:
      'Utility substations, synchronized multi-megawatt generator banks, and high-capacity switchboards that keep electrical grids energized under demanding conditions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Tailor-made Starkgen generating sets up to 3 MWe',
      'High fault-current switchgear assemblies',
      'Digital fuel level and AMF synchronization controllers',
    ],
    relevantSolutions: ['Generators & Power Solutions', 'Switchgear', 'Electrical Services'],
  },
  {
    id: 'oil-gas-environments',
    name: 'Oil & Gas Environments',
    tagline: 'High-risk containment and certified fire suppression',
    description:
      'Petrochemical facilities, fuel depots, and pipelines demand hazardous-area earthing, Hakel surge protection for pipelines, and Bristol foam firefighting units.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Bristol certified fire pumps and mobile foam systems',
      'Cathodic pipeline surge protection by Hakel',
      'Endress+Hauser SIL-rated level and flow transmitters',
    ],
    relevantSolutions: ['Fire Fighting Solutions', 'Surge Protection Devices', 'Instrumentation'],
  },
  {
    id: 'manufacturing-processing',
    name: 'Manufacturing & Process Automation',
    tagline: 'Precision control and automated execution',
    description:
      'From textile spinning and FMCG packaging to chemical processing, we deliver PLC/SCADA control logic, energy profiling, and Endress+Hauser instrumentation.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Custom PLC control panels & VFD speed regulation',
      'High-precision flow, temperature and pressure sensors',
      'Energy monitoring networks to reduce unit costs',
    ],
    relevantSolutions: ['Automation & Instrumentation', 'Flow Measurement', 'Electrical Services'],
  },
  {
    id: 'solar-energy-infrastructure',
    name: 'Solar Energy & Renewables',
    tagline: 'Clean harvest with maximum durability',
    description:
      'Turnkey photovoltaic installations engineered for maximum irradiation capture, durable galvanized mounting, and net metering synchronization for major facilities.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Turnkey solar design & equipment selection',
      'Forend lightning protection & Hakel DC surge arresters',
      'Galvanized wind-load certified mounting frames',
    ],
    relevantSolutions: ['Solar Energy', 'Surge Protection', 'Lightning Protection'],
  },
  {
    id: 'parking-facilities',
    name: 'Parking Facilities & Transit Hubs',
    tagline: 'Seamless traffic flow and driver guidance',
    description:
      'Airports, mega malls, and multi-deck parking structures benefit from automated guidance, real-time occupancy counts, find-your-car kiosks, and integrated video surveillance.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'CASS intelligent sensors and variable message screens',
      'EV charging spot identification and management',
      'Dynamic occupancy reports and reduced traffic congestion',
    ],
    relevantSolutions: ['Parking Guidance', 'Emergency Lighting', 'Electrical Services'],
  },
  {
    id: 'safety-critical',
    name: 'Safety-Critical Environments',
    tagline: 'Comprehensive asset protection and compliance',
    description:
      'Hospitals, laboratories, and high-occupancy venues where life safety cannot fail: certified Nittan fire alarms, Forend lightning conductors, and emergency lighting.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    criticalFocus: [
      'Nittan UL-listed addressable fire alarm panels',
      'Clever Light central battery emergency illumination',
      'Forend active ESE lightning air terminals and earth pits',
    ],
    relevantSolutions: ['Fire Alarm Systems', 'Emergency Lighting', 'Lightning Protection'],
  },
];

export const HSEQ_COMMITMENTS = [
  {
    title: 'Protect Own Health and Safety',
    description:
      'Every technician and engineer is empowered and required to take reasonable care of their own health and safety during all project phases.',
  },
  {
    title: 'Protect Health and Safety of Others',
    description:
      'Rigorous hazard demarcations and work protocols to prevent injury or hazard exposure to client personnel, subcontractors, and the public.',
  },
  {
    title: 'Proper Care & Correct Use of PPE',
    description:
      'Mandatory use of certified personal protective equipment (arc flash gear, safety helmets, insulated boots, high-vis vests, goggles) at all times.',
  },
  {
    title: 'Report Hazardous Situations or Acts',
    description:
      'Clear, blame-free reporting mechanisms to immediately highlight any unsafe act, hazard, or near-miss on site before escalations occur.',
  },
  {
    title: 'Cooperate With Safety Responsibilities',
    description:
      'Active cooperation with designated safety inspectors and adherence to all duties and responsibilities placed under applicable health and safety acts.',
  },
  {
    title: 'Comply With Prescribed Safety Measures',
    description:
      'Strict execution of lockout-tagout (LOTO) protocols, pre-work permit-to-work checklists, and hot-work safety procedures.',
  },
  {
    title: 'Focus on Mental Health',
    description:
      'Prioritizing psychological wellbeing, active stress mitigation, work-life balance, and continuous emotional support across all engineering teams.',
  },
  {
    title: 'Maintain a Positive Attitude',
    description:
      'Fostering a constructive, respectful, and proactive workplace culture where teamwork, safety vigilance, and problem-solving thrive.',
  },
];

export const GLOBAL_PRINCIPALS: GlobalPrincipal[] = [
  {
    id: 'janitza',
    name: 'Janitza Electronics GmbH',
    country: 'Germany',
    flagEmoji: '🇩🇪',
    established: '1961',
    specialization: 'Power Quality, Energy Measurement & Class A Analyzers',
    description:
      'Global pioneer in intelligent power management, class-A power quality analyzers (UMG series), residual current monitoring, and GridVis energy visualization software.',
    keyProducts: ['UMG 604/605 Class A Analyzers', 'GridVis Energy Software', 'RCM Residual Current Monitors', 'Harmonic Active Filters'],
    certifications: ['IEC 61000-4-30 Class A', 'ISO 50001 Energy Management', 'CE / UL Marked'],
    solutionSlug: 'instrumentation',
    websiteUrl: 'https://www.janitza.com',
  },
  {
    id: 'igel-electric',
    name: 'IGEL Electric GmbH',
    country: 'Germany',
    flagEmoji: '🇩🇪',
    established: '2001',
    specialization: 'Low & Medium Voltage Solid-State Soft Starters',
    description:
      'Engineers of heavy-duty digital soft starters from 220V up to 13,800V with integrated bypass contactors, thyristor firing controls, and harsh environment coatings.',
    keyProducts: ['ISA-HD Heavy Duty Starters', 'MV-Soft Starters (Up to 13.8kV)', 'IP65 Field Enclosures', 'Thyristor Power Controllers'],
    certifications: ['IEC 60947-4-2', 'ISO 9001:2015', 'TÜV Rheinland'],
    solutionSlug: 'automation',
    websiteUrl: 'https://www.igelelectric.de',
  },
  {
    id: 'trafo-elettro',
    name: 'Trafo Elettro',
    country: 'Italy',
    flagEmoji: '🇮🇹',
    established: '1969',
    specialization: 'Cast Resin Dry Type Transformers (Up to 36kV)',
    description:
      'Premier European manufacturer of cast resin dry type transformers up to 25 MVA, providing flame-retardant, self-extinguishing power transformation for high-density buildings.',
    keyProducts: ['Cast Resin Dry Transformers', 'Low-Loss EcoDesign Series', 'Traction Transformers', 'Enclosed Substation Units'],
    certifications: ['IEC 60076-11 (C2/E2/F1)', 'ISO 14001', 'CE Certified'],
    solutionSlug: 'switchgear',
    websiteUrl: 'https://www.trafoelettro.com',
  },
  {
    id: 'eaton-ceag',
    name: 'Eaton CEAG / Fire Systems',
    country: 'Germany / USA',
    flagEmoji: '🇩🇪',
    established: '1906',
    specialization: 'Central Battery Systems & Life Safety Infrastructure',
    description:
      'World-renowned life safety systems comprising addressable emergency lighting central batteries, automated luminaire testing, and certified fire alarms.',
    keyProducts: ['CEAG 220V Central Battery Systems', 'CGLine+ Web Monitoring', 'Addressable Exit Luminaires', 'Industrial Fire Systems'],
    certifications: ['EN 50171 / EN 50172', 'VdS Approved', 'UL / FM Certified'],
    solutionSlug: 'emergency-lighting',
    websiteUrl: 'https://www.eaton.com',
  },
  {
    id: 'leutron',
    name: 'Leutron GmbH',
    country: 'Germany',
    flagEmoji: '🇩🇪',
    established: '1954',
    specialization: 'Surge Voltage Limitation & Impulse Current Discharge',
    description:
      'Pioneers of hermetically sealed, inert gas-filled spark gap surge arresters capable of extinguishing follow-on currents up to 50kA without venting hot ionized gases.',
    keyProducts: ['EnerPro Class I Lightning Arresters', 'DataPro Signal SPDs', 'PowerPro Class II Surge Protectors', 'High-Energy Spark Gaps'],
    certifications: ['IEC 61643-11', 'EN 61643-11', 'ISO 9001:2015'],
    solutionSlug: 'surge-protection',
    websiteUrl: 'https://www.leutron.de',
  },
  {
    id: 'parksol',
    name: 'Parksol (Intelligent Guidance)',
    country: 'European Union',
    flagEmoji: '🇪🇺',
    established: '2010',
    specialization: 'Ultrasonic & Camera-Based Parking Guidance Systems',
    description:
      'Complete parking guidance infrastructure with multi-color bay sensors, real-time occupancy counting, find-my-car video kiosks, and dynamic LED direction displays.',
    keyProducts: ['Ultrasonic Space Detectors', 'LPR Video Space Cameras', 'Variable Message Displays', 'Parksol Cloud Management'],
    certifications: ['CE Certified', 'RoHS Compliant', 'ISO 9001'],
    solutionSlug: 'parking-guidance',
    websiteUrl: 'https://www.parksol.lt',
  },
  {
    id: 'hakel',
    name: 'HAKEL spol. s r.o.',
    country: 'Czech Republic',
    flagEmoji: '🇨🇿',
    established: '1994',
    specialization: 'Surge Protection Devices & Insulation Monitoring',
    description:
      'Global manufacturer of Type 1, 2, 3 surge arresters, pipeline spark gaps, and IT ungrounded system insulation monitoring devices.',
    keyProducts: ['Type 1/2/3 SPDs', 'Cathodic Spark Gaps', 'Photovoltaic DC SPDs', 'IT-System Insulation Monitors'],
    certifications: ['IEC 61643-11', 'IEC 61557-8', 'CE / EAC'],
    solutionSlug: 'surge-protection',
  },
  {
    id: 'forend',
    name: 'FOREND Lightning Protection',
    country: 'Turkey',
    flagEmoji: '🇹🇷',
    established: '1992',
    specialization: 'Active ESE Lightning Terminals & Earthing Compounds',
    description:
      'High-voltage tested Early Streamer Emission (ESE) lightning terminals, chemical grounding enhancement compounds, and digital lightning strike counters.',
    keyProducts: ['Petex-S & Petex-L ESE Terminals', 'TAM / TAM PLUS Compounds', 'Digital Strike Counters', 'Copper Bonded Earth Rods'],
    certifications: ['NFC 17-102:2011 Annex C', 'ISO 9001', 'CE Certified'],
    solutionSlug: 'lightning-protection',
  },
  {
    id: 'starkgen',
    name: 'STARKGEN Generators',
    country: 'International',
    flagEmoji: '🌐',
    established: '2005',
    specialization: 'Diesel & Gas Generating Sets (10kVA – 3300kVA)',
    description:
      'Robust diesel power generator sets powered by Perkins, Cummins, Baudouin, and Stamford/Leroy Somer alternators with Deep Sea digital control modules.',
    keyProducts: ['Heavy Diesel GenSets (Up to 3300kVA)', 'Automatic Transfer Switches (ATS)', 'Sound-Attenuated Canopies', 'Synchronizing Panels'],
    certifications: ['ISO 8528 Standard', 'CE Marked', 'ISO 9001:2015'],
    solutionSlug: 'power-generation',
  },
  {
    id: 'bristol-fire',
    name: 'BRISTOL FIRE ENGINEERING',
    country: 'UAE / Global',
    flagEmoji: '🇦🇪',
    established: '1974',
    specialization: 'UL / FM Fire Pumps & Turnkey Fire Suppression',
    description:
      'Leader in complete firefighting solutions: UL-listed fire pump skids, deluge valves, pre-action valves, foam bladder tanks, and clean agent gaseous suppression.',
    keyProducts: ['UL/FM End Suction & Split Case Pumps', 'FM200 / NOVEC Suppression', 'Fire Hydrants & Hose Cabinets', 'Deluge Valve Assemblies'],
    certifications: ['UL Listed', 'FM Approved', 'LPCB Certified', 'NFPA Compliant'],
    solutionSlug: 'fire-protection',
  },
  {
    id: 'endress-hauser',
    name: 'Endress+Hauser',
    country: 'Switzerland',
    flagEmoji: '🇨🇭',
    established: '1953',
    specialization: 'Industrial Process Flow, Level & Pressure Measurement',
    description:
      'World-leading process automation instrumentation: electromagnetic flow meters, radar level transmitters, Coriolis mass meters, and industrial telemetry.',
    keyProducts: ['Promag Electromagnetic Flowmeters', 'Micropilot Radar Level', 'Cerabar Pressure Transmitters', 'Digital Process Recorders'],
    certifications: ['SIL 2/3 Functional Safety', 'ATEX / IECEx Hazardous', 'ISO 9001 / ISO 14001'],
    solutionSlug: 'instrumentation',
  },
  {
    id: 'sjec',
    name: 'SJEC CORPORATION',
    country: 'International',
    flagEmoji: '🌐',
    established: '1992',
    specialization: 'Elevators, Escalators & Moving Walkways',
    description:
      'High-speed gearless passenger elevators, panoramic observation cars, public transit duty escalators, and horizontal moving walkways engineered to EN 81/115.',
    keyProducts: ['Passenger High-Speed Lifts', 'Heavy Duty Transit Escalators', 'Hospital Stretcher Lifts', 'Moving Walkways'],
    certifications: ['EN 81-20/50', 'EN 115 European Standard', 'CE Certified'],
    solutionSlug: 'elevators-escalators',
  },
  {
    id: 'nittan',
    name: 'NITTAN COMPANY',
    country: 'Japan / UK',
    flagEmoji: '🇯🇵',
    established: '1954',
    specialization: 'Addressable Fire Alarm & Smoke Detection Systems',
    description:
      'Sensortec optical smoke detectors, multi-sensor heat sensors, loop-powered sounder strobes, and modular addressable fire alarm panels.',
    keyProducts: ['EV-P Optical Smoke Sensors', 'EV-H Heat Detectors', 'Evolution Loop Sounders', 'Modular Addressable Fire Panels'],
    certifications: ['UL Listed', 'EN 54 Approved', 'LPCB Certified', 'BSI Kitemark'],
    solutionSlug: 'fire-alarm',
  },
  {
    id: 'clever-light',
    name: 'CLEVER LIGHT',
    country: 'Hungary',
    flagEmoji: '🇭🇺',
    established: '1998',
    specialization: 'Emergency Egress Lighting & Central Battery Systems',
    description:
      'High-efficiency LED emergency exit luminaires, 220V AC/DC central battery systems, and automated addressable luminaire testing software.',
    keyProducts: ['220V AC/DC Central Battery Cabinets', 'Addressable LED Exit Signs', 'Escape Route Luminaires', 'Auto-Test Diagnostic Units'],
    certifications: ['EN 60598-2-22', 'EN 50171 Central Battery', 'TÜV Rheinland'],
    solutionSlug: 'emergency-lighting',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'nishat-chunian-complex',
    title: 'Nishat Chunian Textile Processing Plant',
    clientIndustry: 'Textile Processing & Dyeing',
    location: 'Lahore / Kasur, Punjab',
    category: 'Industrial',
    year: '2024',
    scopeSummary:
      'Complete power quality stabilization, Janitza Class-A energy analyzers, IGEL solid-state soft starters for heavy compressor lines, and Hakel Type 1+2 surge mitigation across 8 main distribution boards.',
    challenge:
      'Frequent utility voltage transients and high THD (total harmonic distortion exceeding 22%) were triggering sensitive yarn spinning controllers and causing costly batch scrap.',
    solutionEngineered:
      'Implemented Janitza UMG-605 Class-A power quality monitoring network with automated harmonic filtering and soft starter ramp-profiles, successfully capping THD below 3.8%.',
    keyEquipment: [
      'Janitza UMG 605 Class-A Analyzers',
      'IGEL ISA-HD Soft Starters (400kW)',
      'Hakel SPC 50 Type 1+2 Arresters',
      'Form 4b Low Voltage Switchboards',
    ],
    metrics: [
      { label: 'Harmonic THD Reduction', value: '22% → 3.8%' },
      { label: 'Connected Capacity', value: '14.5 MVA' },
      { label: 'Annual Uptime', value: '99.98%' },
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'lucky-one-tower-mall',
    title: 'Lucky One Commercial Tower & Mall Complex',
    clientIndustry: 'Commercial Real Estate & Retail Hub',
    location: 'Rashid Minhas Rd, Karachi',
    category: 'Commercial',
    year: '2023',
    scopeSummary:
      'Turnkey multi-deck parking guidance system (Parksol/CASS) spanning 3,200 bays with variable LED wayfinding screens, Trafo Elettro cast resin dry transformers, and Nittan addressable fire detection.',
    challenge:
      'Peak weekend traffic queues extending onto arterial expressways, and high-temperature ambient conditions requiring non-flammable transformer substations located in basement decks.',
    solutionEngineered:
      'Deployed Parksol ultrasonic bay sensors with dynamic routing displays and installed 4x 2000kVA Trafo Elettro dry transformers compliant with F1 flame retardancy standards.',
    keyEquipment: [
      'Parksol Ultrasonic Sensor Matrix (3,200 Bays)',
      'Trafo Elettro 2000kVA Cast Resin Transformers',
      'Nittan Addressable Evolution Fire System',
      'Clever Light 220V Emergency Egress Luminaires',
    ],
    metrics: [
      { label: 'Parking Bays Managed', value: '3,200 Bays' },
      { label: 'Avg Parking Search Time', value: '-65% Reduction' },
      { label: 'Substation Rating', value: '8.0 MVA Dry Type' },
    ],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'engro-polymer-substations',
    title: 'Engro Polymer & Petrochemical Substations',
    clientIndustry: 'Petrochemical & Hazardous Processing',
    location: 'Port Qasim, Karachi',
    category: 'Power & Energy',
    year: '2023',
    scopeSummary:
      'Petrochemical sub-station engineering comprising Hakel pipeline spark gaps, Forend ESE lightning conductor towers, Bristol UL/FM fire pump skid, and Starkgen 3300kVA synchronized emergency blackstart generation.',
    challenge:
      'Severe maritime coastal corrosion, explosive vapor classifications (Zone 1/2), and high consequence of any lightning strike or power loss in polymer polymerization reactors.',
    solutionEngineered:
      'Delivered ATEX-compliant instrumentation enclosures, Hakel cathodic spark gaps, Forend 60-meter radius ESE protection, and Bristol dual diesel/electric UL/FM fire pumping system.',
    keyEquipment: [
      'Starkgen 3300kVA Heavy Diesel GenSet',
      'Bristol UL/FM Split-Case Fire Pump Skid',
      'Forend Petex-L ESE Active Terminals',
      'Hakel Cathodic Isolation Spark Gaps',
    ],
    metrics: [
      { label: 'Standby Blackstart', value: '3,300 kVA' },
      { label: 'Fire Pumping Head', value: '150 PSI @ 2000 GPM' },
      { label: 'Hazard Classification', value: 'Zone 1 / Class I Div 1' },
    ],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'shaukat-khanum-hospital',
    title: 'Specialized Oncology Hospital Complex',
    clientIndustry: 'Healthcare & Critical Facilities',
    location: 'Lahore / Peshawar',
    category: 'Life Safety',
    year: '2024',
    scopeSummary:
      'Medical isolated power supplies (IPS) for surgical operating theaters, Clever Light 220V central battery egress system, and Endress+Hauser medical gas and utility flow telemetry.',
    challenge:
      'Zero allowable interruption in life-support theatres, strict IT-earthing insulation impedance monitoring, and micro-shock patient safety requirements.',
    solutionEngineered:
      'Engineered medical IPS panels with Hakel insulation fault location monitors, combined with Nittan multi-criteria smoke detectors and automated emergency path illumination.',
    keyEquipment: [
      'Medical Isolated Power Supply (IPS)',
      'Hakel HIS IT-System Insulation Monitors',
      'Clever Light Central Battery 220V Cabinet',
      'Nittan Dual Optical/Thermal Detectors',
    ],
    metrics: [
      { label: 'Operation Theatres Secured', value: '16 Theatres' },
      { label: 'Insulation Alarm Level', value: '50 kΩ Automatic Trip' },
      { label: 'Emergency Battery Backup', value: '3 Hours Autonomous' },
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'toyota-indus-assembly',
    title: 'Automotive Stamping & Robotic Assembly Plant',
    clientIndustry: 'Automotive Manufacturing',
    location: 'Port Qasim Industrial Zone, Karachi',
    category: 'Industrial',
    year: '2023',
    scopeSummary:
      'High-inertia stamping press soft-starters (IGEL Electric), Form 4b motor control center panels, busbar trunking integration, and remote SCADA monitoring.',
    challenge:
      'Sudden inrush current surges from 600kW hydraulic press motors causing voltage dips across automated robotic welding lines.',
    solutionEngineered:
      'Installed IGEL ISA-HD solid-state soft starters with programmed torque deceleration curves, smoothing motor starting transients to within 2.5x rated current.',
    keyEquipment: [
      'IGEL ISA-HD 600kW Heavy Duty Soft Starters',
      'Form 4b Draw-Out Motor Control Center',
      'Janitza UMG 96RM Power Analyzers',
      'Schneider PLC / SCADA Telemetry',
    ],
    metrics: [
      { label: 'Motor Starting Inrush', value: '6.5x → 2.3x FLA' },
      { label: 'Busbar Rating', value: '4000A Sandwich Busduct' },
      { label: 'Production Uptime', value: '99.95%' },
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'packages-mall-transit',
    title: 'Packages Mall Public Transit & Retail Complex',
    clientIndustry: 'Retail, Entertainment & Infrastructure',
    location: 'Walton Road, Lahore',
    category: 'Infrastructure',
    year: '2023',
    scopeSummary:
      'Public duty heavy-traffic escalators by SJEC, rooftop Forend active lightning protection grid, 220V central battery egress illumination, and turnkey electrical distribution.',
    challenge:
      'Handling weekend visitor throughput exceeding 80,000 visitors per day with guaranteed vertical passenger transit safety and compliance with EN 115 escalator standards.',
    solutionEngineered:
      'Installed 12x SJEC public-duty escalators featuring VVVF variable frequency eco-drives, automatic step-gap safety sensors, and integrated Clever Light emergency path lighting.',
    keyEquipment: [
      'SJEC Commercial & Transit Duty Escalators',
      'Forend ESE Active Terminal Air Rods',
      'Clever Light Auto-Test Exit Luminaires',
      'Main Low Tension Distribution Switchgear',
    ],
    metrics: [
      { label: 'Daily Visitor Flow', value: '80,000+ Footfall' },
      { label: 'Escalator Units', value: '12 Heavy Duty' },
      { label: 'Lightning Protection Zone', value: 'Level 1 Protection' },
    ],
    image: 'https://images.unsplash.com/photo-1580795478844-5ed694336c90?q=80&w=1200&auto=format&fit=crop',
  },
];


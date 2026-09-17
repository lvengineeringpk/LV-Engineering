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
    image: '/assets/images/electrical_services.jpg',
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
    image: '/assets/images/automation_instrumentation.jpg',
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
    image: '/assets/images/power_generation.jpg',
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
    image: '/assets/images/fire_fighting.jpg',
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
    image: '/assets/images/fire_alarm.jpg',
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
    image: '/assets/images/lightning_protection.jpg',
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
    image: '/assets/images/surge_protection.jpg',
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
    image: '/assets/images/emergency_lighting.jpg',
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
    image: '/assets/images/flow_measurement.jpg',
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
    image: '/assets/images/parking_guidance.jpg',
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
    image: '/assets/images/elevators_escalators.jpg',
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
    image: '/assets/images/solar_energy.jpg',
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
    image: '/assets/images/switchgear.jpg',
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
    image: '/assets/images/industry_heavy_facilities.jpg',
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
    id: 'hakel',
    name: 'HAKEL spol. s r.o.',
    country: 'Czech Republic',
    flagEmoji: '🇨🇿',
    established: '1994',
    specialization: 'Surge Protection Devices & Insulation Monitoring',
    description:
      'Purely Czech manufacturer and global specialist in Type 1, 2, and 3 surge arresters, pipeline spark gaps, and IT ungrounded system insulation monitoring devices protecting commercial buildings, industry, railways, and photovoltaics.',
    keyProducts: ['Type 1/2/3 Low-Voltage SPDs', 'Pipeline Cathodic Spark Gaps', 'Photovoltaic DC Surge Arresters', 'IT-System Insulation Monitors'],
    certifications: ['IEC 61643-11', 'IEC 61557-8', 'CE / EAC Approved'],
    solutionSlug: 'surge-protection',
  },
  {
    id: 'forend',
    name: 'FOREND ELECTRICAL CO',
    country: 'Turkey',
    flagEmoji: '🇹🇷',
    established: '1977',
    specialization: 'Early Streamer Emission (ESE) Lightning Protection & Earthing',
    description:
      'Pioneering manufacturers of active Early Streamer Emission (ESE) lightning conductors, copper bonded earth rods, heavy duty inspection pits, and TAM / TAM PLUS low-resistivity grounding enhancement compounds.',
    keyProducts: ['Petex-S & Petex-L ESE Terminals', 'TAM & TAM PLUS Compounds', 'High-Conductivity Earth Rods & Clamps', 'Digital Lightning Strike Counters'],
    certifications: ['NFC 17-102', 'EN 50164-1', 'IEC 62561-6', 'CE / LCOE / ENAC / ICMET'],
    solutionSlug: 'lightning-protection',
  },
  {
    id: 'clever-light',
    name: 'Clever Light ®',
    country: 'Hungary',
    flagEmoji: '🇭🇺',
    established: '1998',
    specialization: 'Emergency Egress Lighting & Central Battery Systems',
    description:
      'European manufacturer of self-contained addressable emergency lighting systems, addressable central battery systems (220V AC/DC), and standalone self-contained escape route luminaires with automated testing software.',
    keyProducts: ['220V AC/DC Central Battery Cabinets', 'Self-Contained Addressable Luminaires', 'Standalone Emergency Exit Signs', 'Automated Diagnostic Software'],
    certifications: ['UL Listed', 'TÜV Rheinland', 'NQA ISO 9001', 'UKAS'],
    solutionSlug: 'emergency-lighting',
  },
  {
    id: 'starkgen',
    name: 'STARKGEN Generators',
    country: 'Turkey',
    flagEmoji: '🇹🇷',
    established: '2005',
    specialization: 'Generating Sets & Power Stations (Up to 3 MWe)',
    description:
      'Manufacturers of heavy-duty prime and standby generating sets powered by international engines with Comap AMF controllers, ultra-silent soundproof canopies, 3,000+ hour salt-spray durability, and up to 20% fuel savings.',
    keyProducts: ['Diesel & Gas Generating Sets (Up to 3 MWe)', 'Comap AMF8/AMF9/AMF25 & IG200 Controllers', 'Ultra Silent Sound Proof Canopies', 'Digital Fuel Level & Remote Monitoring'],
    certifications: ['ISO 8528 Standard', 'CE Marked', 'ISO 9001:2015'],
    solutionSlug: 'power-generation',
  },
  {
    id: 'bristol-fire',
    name: 'BRISTOL Fire Engineering',
    country: 'UAE / Middle East',
    flagEmoji: '🇦🇪',
    established: '1974',
    specialization: 'Complete Fire Fighting Solutions & Certified Fire Pumps',
    description:
      'Middle Eastern leader in complete firefighting systems since 1974: certified fire pump sets (diesel, electric, and jockey), mobile foam units, deluge systems, sprinklers, hydrants, cabinets, and certified fire stop arrangements.',
    keyProducts: ['UL/FM End Suction & Split Case Fire Pumps', 'Mobile Foam Units & Deluge Systems', 'Fire Hydrants, Hose Reels & Cabinets', 'Fire Stop Penetration Seals & Clamps'],
    certifications: ['UL Listed', 'FM Approved', 'LPCB Certified', 'NFPA Compliant'],
    solutionSlug: 'fire-protection',
  },
  {
    id: 'nittan',
    name: 'NITTAN',
    country: 'Japan / UK',
    flagEmoji: '🇯🇵',
    established: '1954',
    specialization: 'Addressable Fire Alarm Systems (UL Listed & LPCB Certified)',
    description:
      'Global manufacturer of microprocessor-driven addressable fire alarm systems providing two-way digital communication, multi-criteria optical and thermal detection, faster response times, and simplified system maintenance.',
    keyProducts: ['Addressable Fire Alarm Control Panels (FACP)', 'Multi-Sensor Optical Smoke & Heat Detectors', 'Synchronized Audio-Visual Strobes & Sounders', 'Addressable Modules & Manual Call Points'],
    certifications: ['UL Listed', 'LPCB Certified', 'EN 54 Approved', 'NFPA 72'],
    solutionSlug: 'fire-alarm',
  },
  {
    id: 'endress-hauser',
    name: 'Endress+Hauser',
    country: 'Switzerland / Global',
    flagEmoji: '🇨🇭',
    established: '1953',
    specialization: 'Flow Meters & Industrial Process Instrumentation',
    description:
      'Global leader in process automation ("People for Process Automation"): electromagnetic, Coriolis, vortex and ultrasonic flow meters, continuous radar level transmitters, pressure transmitters, liquid analytics, and telemetry.',
    keyProducts: ['Electromagnetic & Coriolis Mass Flowmeters', 'Radar & Guided Wave Level Transmitters', 'Cerabar Pressure Transmitters', 'Digital Process Recorders & Telemetry'],
    certifications: ['TÜV SÜD Certified', 'ISO 14001', 'SIL 2/3 Functional Safety'],
    solutionSlug: 'instrumentation',
  },
  {
    id: 'cass-parking',
    name: 'CASS Parking Systems',
    country: 'International',
    flagEmoji: '🌐',
    established: '2004',
    specialization: 'Smart Parking Guidance, Counting & Video Surveillance',
    description:
      'Long-lasting systems for smart parking guidance, vehicle counting, find-your-car kiosks, auto pay stations, and bay video surveillance. Optimizes traffic, reduces maintenance, and delivers real-time analytics.',
    keyProducts: ['Ultrasonic & Video Bay Space Sensors', 'RealTime Directional LED Screens', 'Auto Pay Station Terminals', 'Find-Your-Car Kiosks & Analytics Reports'],
    certifications: ['CE Certified', 'ISO 9001 Quality Production'],
    solutionSlug: 'parking-guidance',
  },
  {
    id: 'sjec',
    name: 'SJEC CORPORATION',
    country: 'International',
    flagEmoji: '🌐',
    established: '1992',
    specialization: 'Elevators, Escalators & Vertical Mobility Systems',
    description:
      'Vast manufacturing experience in high-speed gearless passenger lifts, hospital bed lifts, cargo freight lifts, commercial & transit-duty escalators, horizontal moving walkways, and platform screen doors engineered to EN 81/115.',
    keyProducts: ['High-Speed Passenger Lifts', 'Heavy Duty Transit Escalators', 'Hospital Stretcher & Bed Lifts', 'Moving Walkways & Platform Screen Doors'],
    certifications: ['EN 81-20/50 Lift Safety', 'EN 115 Escalator Standard', 'CE Certified', 'ASME A17.1'],
    solutionSlug: 'elevators-escalators',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'industrial-electrical-services',
    title: 'Turnkey Industrial Electrical Services & Infrastructure',
    clientIndustry: 'Industrial & Commercial Sector',
    location: 'Industrial Facilities & Complexes',
    category: 'Industrial',
    year: 'Engineering Portfolio',
    scopeSummary:
      'Turnkey engineering, fabrication, and installation of Low Tension (L.T.) panels, distribution boards (DBs), MCC panels, heavy duty cable trays, ladders, wireways, cabling termination, and dynamic voltage regulation.',
    challenge:
      'Continuous multi-shift operations demanding zero uncommanded downtime, balanced three-phase distribution, and robust short-circuit withstand across heavy motor control lines.',
    solutionEngineered:
      'Delivered Form-segregated L.T. switchboards, custom VFD motor control panels, and automated energy monitoring systems ensuring reliable power distribution and operational cost savings.',
    keyEquipment: [
      'Low Tension (L.T.) Panels & DBs',
      'Cable Tray, Ladders & Mesh Systems',
      'VFD & MCC Control Panels',
      'Dynamic Voltage Regulator (DVR / UPS)',
    ],
    metrics: [
      { label: 'Engineering Scope', value: 'Design to Commissioning' },
      { label: 'Panel Segregation', value: 'Form 2 to Form 4b' },
      { label: 'Compliance', value: 'IEC 61439-1/2 Standard' },
    ],
    image: '/assets/images/electrical_services.jpg',
  },
  {
    id: 'active-lightning-protection',
    title: 'Active Early Streamer Emission (ESE) Lightning Protection',
    clientIndustry: 'Industrial & Commercial Facilities',
    location: 'Commercial & Industrial Sites',
    category: 'Infrastructure',
    year: 'Engineering Portfolio',
    scopeSummary:
      'Turnkey FOREND Early Streamer Emission (ESE) active lightning conductors, copper-bonded earth rods, heavy duty inspection pits, and TAM / TAM PLUS grounding enhancement compounds.',
    challenge:
      'Large-footprint facility structures vulnerable to direct cloud-to-ground atmospheric strikes with high soil resistivity demanding an extensive protection radius.',
    solutionEngineered:
      'Installed Forend active ESE lightning air terminals compliant with NFC 17-102 providing full site protection radius with minimal down-conductors and low-impedance earth pits.',
    keyEquipment: [
      'FOREND Petex ESE Lightning Terminals',
      'TAM & TAM PLUS Earth Compounds',
      'Copper Bonded Earth Rods & Clamps',
      'Digital Lightning Strike Counters',
    ],
    metrics: [
      { label: 'Protection Standard', value: 'NFC 17-102 Compliant' },
      { label: 'Earth Resistance', value: '< 5 Ohm Target' },
      { label: 'Accreditations', value: 'LCOE, ENAC, ICMET' },
    ],
    image: '/assets/images/lightning_protection.jpg',
  },
  {
    id: 'surge-protection-monitoring',
    title: 'Surge Protection Devices & IT Insulation Monitoring',
    clientIndustry: 'Process & Industrial Manufacturing',
    location: 'Manufacturing & Process Plants',
    category: 'Power & Energy',
    year: 'Engineering Portfolio',
    scopeSummary:
      'HAKEL coordinated Type 1, Type 2, and Type 3 surge arresters, photovoltaic DC arresters, pipeline spark gaps, and IT ungrounded system insulation monitoring devices.',
    challenge:
      'Transient utility surges, lightning impulses, and undetected insulation leakage risking sudden shutdown of sensitive PLCs, VFDs, and automated machinery.',
    solutionEngineered:
      'Installed Hakel coordinated surge protection across main distribution boards and continuous insulation monitors with remote telemetry for early fault detection.',
    keyEquipment: [
      'HAKEL Type 1+2+3 Surge Protective Devices',
      'IT-System Insulation Monitors',
      'Photovoltaic DC Surge Arresters (1500V)',
      'Cathodic Protection Spark Gaps',
    ],
    metrics: [
      { label: 'Standard', value: 'IEC 61643-11' },
      { label: 'Impulse Discharge Iimp', value: 'Up to 50kA (10/350µs)' },
      { label: 'Protection Level', value: 'Continuous IT Monitoring' },
    ],
    image: '/assets/images/surge_protection.jpg',
  },
  {
    id: 'starkgen-power-stations',
    title: 'Standby & Prime Power Generating Sets (Up to 3 MWe)',
    clientIndustry: 'Industrial & Commercial Sector',
    location: 'Critical Baseload Installations',
    category: 'Power & Energy',
    year: 'Engineering Portfolio',
    scopeSummary:
      'STARKGEN heavy-duty diesel and gas generating sets with Comap AMF digital controllers, ultra-silent soundproof acoustic canopies, and digital remote fuel monitoring.',
    challenge:
      'Uninterrupted baseload demands during utility outages requiring rapid full load acceptance, low ambient noise, and verified fuel economy.',
    solutionEngineered:
      'Commissioned STARKGEN modular generating sets delivering 100% first-step load acceptance, up to 20% fuel savings, and 3,000+ hour salt-spray endurance enclosures.',
    keyEquipment: [
      'STARKGEN Heavy Diesel GenSets (up to 3MWe)',
      'Comap AMF8/AMF9/AMF25 & IG200 Controllers',
      'Ultra Silent Soundproof Acoustic Canopies',
      'Digital Precision Fuel Level Sensors',
    ],
    metrics: [
      { label: 'Capacity Range', value: 'Up to 3 MWe Units' },
      { label: 'Load Acceptance', value: '100% First Step Load' },
      { label: 'Fuel Economy', value: 'Up to 20% Savings' },
    ],
    image: '/assets/images/power_generation.jpg',
  },
  {
    id: 'bristol-fire-fighting-systems',
    title: 'Turnkey Fire Fighting Solutions & Certified Fire Pumps',
    clientIndustry: 'Commercial & Industrial Sector',
    location: 'High-Density Facilities & Commercial Towers',
    category: 'Life Safety',
    year: 'Engineering Portfolio',
    scopeSummary:
      'BRISTOL Fire Engineering complete systems: certified fire pumps (diesel, electric & jockey), mobile foam units, deluge systems, sprinklers, hydrants, hose cabinets, and fire stop arrangements.',
    challenge:
      'High-risk industrial and commercial facilities requiring certified water delivery rates, automated actuation, and certified containment seals across cable openings.',
    solutionEngineered:
      'Supplied and commissioned Bristol complete fire protection with automatic diesel/electric pumping skids, NFPA-compliant distribution networks, and certified fire stop seals.',
    keyEquipment: [
      'BRISTOL Diesel, Electric & Jockey Fire Pumps',
      'Fire Hose Reels & Stainless Cabinets',
      'Mobile Foam Units & Deluge Valves',
      'Certified Fire Stop Penetration Barriers',
    ],
    metrics: [
      { label: 'Pumping Certification', value: 'UL Listed / FM Approved' },
      { label: 'Standards', value: 'NFPA 13, 14, 20 & 72' },
      { label: 'System Delivery', value: 'Turnkey Fire Suppression' },
    ],
    image: '/assets/images/fire_fighting.jpg',
  },
  {
    id: 'nittan-addressable-fire-alarm',
    title: 'Microprocessor Addressable Fire Alarm & Detection',
    clientIndustry: 'Commercial & Industrial Sector',
    location: 'Multi-Story Commercial & Healthcare',
    category: 'Life Safety',
    year: 'Engineering Portfolio',
    scopeSummary:
      'NITTAN UL-listed and LPCB-certified addressable fire alarm system with two-way digital communication, multi-sensor optical and heat detection, and synchronized audio-visual alarms.',
    challenge:
      'Large multi-zone facilities requiring instantaneous incident localization with zero tolerance for false alarms and simplified routine maintenance.',
    solutionEngineered:
      'Deployed NITTAN intelligent addressable fire alarm panels with real-time smoke density tracking, loop-powered sounder strobes, and automated device health diagnostics.',
    keyEquipment: [
      'NITTAN Addressable Fire Alarm Control Panels',
      'Multi-Sensor Optical Smoke & Heat Detectors',
      'Synchronized Audio-Visual Strobes & Sounders',
      'Addressable Call Points & Interface Modules',
    ],
    metrics: [
      { label: 'Certifications', value: 'UL Listed & LPCB Certified' },
      { label: 'Signaling', value: '2-Way Digital Protocol' },
      { label: 'Reliability', value: 'High False Alarm Immunity' },
    ],
    image: '/assets/images/fire_alarm.jpg',
  },
  {
    id: 'clever-light-emergency-systems',
    title: 'Addressable Emergency Lighting & 220V Central Battery',
    clientIndustry: 'Commercial & Public Facilities',
    location: 'Public Buildings & Escape Routes',
    category: 'Life Safety',
    year: 'Engineering Portfolio',
    scopeSummary:
      'Clever Light self-contained addressable emergency lighting, addressable central battery systems (220V AC/DC), and standalone self-contained egress luminaires.',
    challenge:
      'Ensuring continuous path illumination along designated exit routes during utility failure while complying with strict autonomy and automated testing standards.',
    solutionEngineered:
      'Configured Clever Light 220V central battery cabinets and addressable LED exit luminaires featuring automated periodic battery and lamp diagnostic testing.',
    keyEquipment: [
      'Clever Light 220V AC/DC Central Battery Cabinets',
      'Self-Contained Addressable Luminaires',
      'Standalone Emergency Exit Signs',
      'Automated Diagnostic Testing Software',
    ],
    metrics: [
      { label: 'Battery Architecture', value: '220V AC/DC Central System' },
      { label: 'Testing Method', value: 'Automated Self-Test' },
      { label: 'Certifications', value: 'UL & TÜV Rheinland' },
    ],
    image: '/assets/images/emergency_lighting.jpg',
  },
  {
    id: 'turnkey-solar-energy',
    title: 'Complete Turnkey Solar Photovoltaic Energy Solutions',
    clientIndustry: 'Industrial & Commercial Sector',
    location: 'Industrial & Commercial Rooftops',
    category: 'Renewable Energy',
    year: 'Engineering Portfolio',
    scopeSummary:
      'Complete solar energy solution: tailored design calculated on site usage, selection of premium equipment, durable galvanized mounting structures, installation, and final commissioning.',
    challenge:
      'Rising electricity costs and peak demand charges requiring maximum energy harvest, wind-resistant structural fabrication, and seamless grid-tie synchronization.',
    solutionEngineered:
      'Designed and installed high-efficiency tier-one solar PV systems with galvanized steel mounting, string protection, DC/AC cabling, and digital inverter telemetry.',
    keyEquipment: [
      'Tier-1 Monocrystalline Bifacial PV Modules',
      'Hot-Dip Galvanized Mounting Structures',
      'Industrial On-Grid & Hybrid Solar Inverters',
      'Surge Protection & DC Combiner Boxes',
    ],
    metrics: [
      { label: 'Delivery Model', value: 'Design to Commissioning' },
      { label: 'Structural Rating', value: 'Wind-Resistant Galvanized' },
      { label: 'Harvest Quality', value: 'Optimized Usage Matching' },
    ],
    image: '/assets/images/solar_energy.jpg',
  },
  {
    id: 'cass-smart-parking-systems',
    title: 'Smart Parking Guidance, Counting & Video Surveillance',
    clientIndustry: 'Commercial Sector',
    location: 'Multi-Deck Parking Garages',
    category: 'Infrastructure',
    year: 'Engineering Portfolio',
    scopeSummary:
      'CASS Parking Systems intelligent parking guidance, ultrasonic and video space sensors, automated vehicle counting, real-time LED directional screens, and auto pay stations.',
    challenge:
      'Traffic congestion, parking search delays, driver frustration, and high maintenance costs in high-volume multi-level parking structures.',
    solutionEngineered:
      'Installed CASS Parking complete guidance architecture with bay status indicators, find-your-car kiosks, auto pay terminals, and customizable analytics reporting.',
    keyEquipment: [
      'CASS Ultrasonic & Video Bay Space Sensors',
      'RealTime Directional LED Guidance Screens',
      'Auto Pay Station Hardware & Cashless Units',
      'Find-Your-Car Kiosks & Analytics Reports',
    ],
    metrics: [
      { label: 'Functionality', value: 'Guidance, Counting & Video' },
      { label: 'Impact', value: 'Reduced Traffic & Search Stress' },
      { label: 'Reports', value: 'Customizable Real-Time Analytics' },
    ],
    image: '/assets/images/parking_guidance.jpg',
  },
  {
    id: 'sjec-vertical-transportation',
    title: 'Elevators, Escalators & Vertical Mobility Systems',
    clientIndustry: 'Commercial & Infrastructure Sector',
    location: 'Commercial Towers & Transit Hubs',
    category: 'Commercial',
    year: 'Engineering Portfolio',
    scopeSummary:
      'SJEC high-speed gearless passenger lifts, hospital bed lifts, cargo freight lifts, commercial & transit-duty escalators, and horizontal moving walkways.',
    challenge:
      'High-volume passenger and stretcher transit requiring smooth leveling, energy-efficient operation, and adherence to international lift safety standards.',
    solutionEngineered:
      'Installed SJEC permanent magnet synchronous passenger lifts and transit escalators featuring VVVF control, infrared multi-beam door safety, and progressive buffers.',
    keyEquipment: [
      'SJEC High-Speed Passenger Lifts',
      'Heavy-Duty Transit Escalators',
      'Hospital Bed & Stretcher Lifts',
      'Moving Walkways & Platform Doors',
    ],
    metrics: [
      { label: 'Lift Standards', value: 'EN 81-20/50 & ASME A17.1' },
      { label: 'Escalator Standard', value: 'EN 115 European Norm' },
      { label: 'Drive Efficiency', value: 'PMSM Gearless VVVF' },
    ],
    image: '/assets/images/elevators_escalators.jpg',
  },
  {
    id: 'endress-hauser-process-instrumentation',
    title: 'Process Flow Measurement & Industrial Instrumentation',
    clientIndustry: 'Process & Manufacturing Sector',
    location: 'Process Facilities & Utilities',
    category: 'Industrial',
    year: 'Engineering Portfolio',
    scopeSummary:
      'Endress+Hauser measurement instrumentation: electromagnetic and Coriolis flow meters, radar level transmitters, pressure transmitters, temperature sensors, and analytics.',
    challenge:
      'Maintaining precise process flow, constant product quality, plant safety, and greenhouse gas reduction in demanding industrial environments.',
    solutionEngineered:
      'Supplied and configured Endress+Hauser flowmeters and digital data managers, optimizing plant economic efficiency, safety interlocks, and ISO 14001 compliance.',
    keyEquipment: [
      'Endress+Hauser Promag Flowmeters',
      'Micropilot Radar Level Transmitters',
      'Cerabar Pressure Transmitters',
      'Digital Recorders & Process Telemetry',
    ],
    metrics: [
      { label: 'Certifications', value: 'TÜV SÜD & ISO 14001' },
      { label: 'Scope', value: 'Flow, Level, Pressure, Analytics' },
      { label: 'Technology', value: 'Flow Calibration Technology' },
    ],
    image: '/assets/images/flow_measurement.jpg',
  },
];


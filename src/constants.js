const constants = {
  COMMERCIAL: "COMMERCIAL",
  RESIDENTIAL: "RESIDENTIAL",
  CONTACT_METHOD_PHONE: "PHONE",
  CONTACT_METHOD_EMAIL: "EMAIL",
  COUNTRY_CODES: [
    {
      value: '+65',
      text: '+65',
    },
    {
      value: '+60',
      text: '+60',
    },
  ],
  PREFERED_CONTACT_METHODS: [
    {
      value: 'PHONE',
      text: 'Phone',
    },
    {
      value: 'EMAIL',
      text: 'Email',
    },
  ],
  CONTRACT_TYPES: [
    {
      value: 'RESIDENTIAL',
      text: 'Residential'
    },
    {
      value: 'COMMERCIAL',
      text: 'Commercial'
    }
  ],
  SALUTATIONS: [
    {
      value: "MR",
      text: "Mr"
    },
    {
      value: "MRS",
      text: "Mrs"
    },
    {
      value: "MISS",
      text: "Miss"
    },
    {
      value: "MS",
      text: "Ms"
    }
  ],
  CONTRACT_SUB_TYPE: [
    {
      value: 'ROOM1',
      text: '1-Room HDB'
    },
    {
      value: 'ROOM2',
      text: '2-Room HDB'
    },
    {
      value: 'ROOM3',
      text: '3-Room HDB'
    },
    {
      value: 'ROOM4',
      text: '4-Room HDB'
    },
    {
      value: 'ROOM5',
      text: '5-Room/Executive - HDB'
    },
    {
      value: 'CONDO',
      text: 'C- Condo'
    },
    {
      value: 'LANDED',
      text: 'L - Landed'
    }
  ],
  INDUSTRIES: [
    {
      "value": "ACCOUNTING",
      "text": "Accounting"
    },
    {
      "value": "AIRLINE_AVIATION",
      "text": "Airlines/Aviation"
    },
    {
      "value": "ALTERNATIVE_DISPUTE_RESOLUTION",
      "text": "Alternative Dispute Resolution"
    },
    {
      "value": "ALTERNATIVE",
      "text": "Alternative Medicine"
    },
    {
      "value": "ANIMATION",
      "text": "Animation"
    },
    {
      "value": "APPAREL_FASHION",
      "text": "Apparel/Fashion"
    },
    {
      "value": "ARCHITECTURE_PLANNING",
      "text": "Architecture/Planning"
    },
    {
      "value": "ARTS_CRAFTS",
      "text": "Arts/Crafts"
    },
    {
      "value": "AUTOMOTIVE",
      "text": "Automotive"
    },
    {
      "value": "AVIATION_AEROSPACE",
      "text": "Aviation/Aerospace"
    },
    {
      "value": "BANKING_MORTGAGE",
      "text": "Banking/Mortgage"
    },
    {
      "value": "BIOTECHNOLOGY_GREENTECH",
      "text": "Biotechnology/Greentech"
    },
    {
      "value": "BROADCAST_MEDIA",
      "text": "Broadcast Media"
    },
    {
      "value": "BUILDING_METERIALS",
      "text": "Building Materials"
    },
    {
      "value": "BUSINESS_SUPPLY_EQUIPMENT",
      "text": "Business Supplies/Equipment"
    },
    {
      "value": "MARKETS_FUND_EQUITY",
      "text": "Capital Markets/Hedge Fund/Private Equity"
    },
    {
      "value": "CHEMICALS",
      "text": "Chemicals"
    },
    {
      "value": "CIVIC_SOCIAL_ORG",
      "text": "Civic/Social Organization"
    },
    {
      "value": "CIVIL_ENGINEERING",
      "text": "Civil Engineering"
    },
    {
      "value": "COMMERC_REAL_ESTATE",
      "text": "Commercial Real Estate"
    },
    {
      "value": "COMPUTER_GAMES",
      "text": "Computer Games"
    },
    {
      "value": "COMPUTER_HARDWARE",
      "text": "Computer Hardware"
    },
    {
      "value": "COMPUTER_NETWORKING",
      "text": "Computer Networking"
    },
    {
      "value": "COMPUTER_SOFTWARE_ENGINEERING",
      "text": "Computer Software/Engineering"
    },
    {
      "value": "COMPUTER_NETWORK_SECURITY",
      "text": "Computer/Network Security"
    },
    {
      "value": "CONSTRUCTION",
      "text": "Construction"
    },
    {
      "value": "CONSUMER_ELECTRONICS",
      "text": "Consumer Electronics"
    },
    {
      "value": "CONSUMER_GOODS",
      "text": "Consumer Goods"
    },
    {
      "value": "CONSUMER_SERVICES",
      "text": "Consumer Services"
    },
    {
      "value": "COSMETICS",
      "text": "Cosmetics"
    },
    {
      "value": "DAIRY",
      "text": "Dairy"
    },
    {
      "value": "DEFENSE_SPACE",
      "text": "Defense/Space"
    },
    {
      "value": "DESIGN",
      "text": "Design"
    },
    {
      "value": "E_LEARNING",
      "text": "E-Learning"
    },
    {
      "value": "EDUCATION_MANAGEMENT",
      "text": "Education Management"
    },
    {
      "value": "ELECTRO_MANUFACTURING",
      "text": "Electrical/Electronic Manufacturing"
    },
    {
      "value": "ENTERTAIN_MOVIE_PROD",
      "text": "Entertainment/Movie Production"
    },
    {
      "value": "ENVIRONMENTAL_SERVICES",
      "text": "Environmental Services"
    },
    {
      "value": "EVENT_SERVICES",
      "text": "Events Services"
    },
    {
      "value": "EXECUTIVE_OFFICE",
      "text": "Executive Office"
    },
    {
      "value": "FACILITY_SERVICES",
      "text": "Facilities Services"
    },
    {
      "value": "FARMING",
      "text": "Farming"
    },
    {
      "value": "FINANCIAL_SERVICES",
      "text": "Financial Services"
    },
    {
      "value": "FINE_ART",
      "text": "Fine Art"
    },
    {
      "value": "FISHERY",
      "text": "Fishery"
    },
    {
      "value": "FOOD_PROD",
      "text": "Food Production"
    },
    {
      "value": "FOOD_BEVERAGES",
      "text": "Food/Beverages"
    },
    {
      "value": "FUNDRAISING",
      "text": "Fundraising"
    },
    {
      "value": "FURNITURE",
      "text": "Furniture"
    },
    {
      "value": "GAMBLING_CASINOS",
      "text": "Gambling/Casinos"
    },
    {
      "value": "GLASS_CERAMICS_CONCRETE",
      "text": "Glass/Ceramics/Concrete"
    },
    {
      "value": "GOV_ADMIN",
      "text": "Government Administration"
    },
    {
      "value": "GOV_RELATION",
      "text": "Government Relations"
    },
    {
      "value": "GRAPHIC_WEB_DESIGN",
      "text": "Graphic Design/Web Design"
    },
    {
      "value": "HEALTH_FITNESS",
      "text": "Health/Fitness"
    },
    {
      "value": "HIGHER_EDUCATION_ACADAMIA",
      "text": "Higher Education/Acadamia"
    },
    {
      "value": "HOSPITAL_HEALTH_CARE",
      "text": "Hospital/Health Care"
    },
    {
      "value": "HOSPITALITY",
      "text": "Hospitality"
    },
    {
      "value": "HR",
      "text": "Human Resources/HR"
    },
    {
      "value": "IMPORT_EXPORT",
      "text": "Import/Export"
    },
    {
      "value": "INDIVID_FAMILY_SERVICES",
      "text": "Individual/Family Services"
    },
    {
      "value": "INDUSTRIAL_AUTOMATION",
      "text": "Industrial Automation"
    },
    {
      "value": "INFORMATION_SERVICES",
      "text": "Information Services"
    },
    {
      "value": "IT",
      "text": "Information Technology/IT"
    },
    {
      "value": "INSURANCE",
      "text": "Insurance"
    },
    {
      "value": "INTERNATIONAL_AFFAIRS",
      "text": "International Affairs"
    },
    {
      "value": "INTERNATIONAL_DEV",
      "text": "International Trade/Development"
    },
    {
      "value": "INTERNET",
      "text": "Internet"
    },
    {
      "value": "INVEST_BANK_VENTURE",
      "text": "Investment Banking/Venture"
    },
    {
      "value": "INVEST_MANAG_FUND_EQUITY",
      "text": "Investment Management/Hedge Fund/Private Equity"
    },
    {
      "value": "JUDICIARY",
      "text": "Judiciary"
    },
    {
      "value": "LAW_ENFORCE",
      "text": "Law Enforcement"
    },
    {
      "value": "LAW_PRACTICE_FIRMS",
      "text": "Law Practice/Law Firms"
    },
    {
      "value": "LEGAL_SERVICES",
      "text": "Legal Services"
    },
    {
      "value": "LEGISLATIVE_OFFICE",
      "text": "Legislative Office"
    },
    {
      "value": "LEISURE_TRAVEL",
      "text": "Leisure/Travel"
    },
    {
      "value": "LIBRARY",
      "text": "Library"
    },
    {
      "value": "LOGISTICS_PROCUREMENT",
      "text": "Logistics/Procurement"
    },
    {
      "value": "LUXURY_GOODS_JEWELRY",
      "text": "Luxury Goods/Jewelry"
    },
    {
      "value": "MACHINERY",
      "text": "Machinery"
    },
    {
      "value": "MANAGEMENT_CONSULTING",
      "text": "Management Consulting"
    },
    {
      "value": "MARITIME",
      "text": "Maritime"
    },
    {
      "value": "MARKET_RESEARCH",
      "text": "Market Research"
    },
    {
      "value": "MARKETING_ADVERTISING_SALES",
      "text": "Marketing/Advertising/Sales"
    },
    {
      "value": "MECHANICAL_INDUSTRIAL_ENGINEERING",
      "text": "Mechanical or Industrial Engineering"
    },
    {
      "value": "MEDIA_PROD",
      "text": "Media Production"
    },
    {
      "value": "MEDICAL_EQUIPMENT",
      "text": "Medical Equipment"
    },
    {
      "value": "MEDICAL_PRACTICE",
      "text": "Medical Practice"
    },
    {
      "value": "MENTAL_HEALTH_CARE",
      "text": "Mental Health Care"
    },
    {
      "value": "MILITARY_INDUSTRY",
      "text": "Military Industry"
    },
    {
      "value": "MINING_METALS",
      "text": "Mining/Metals"
    },
    {
      "value": "MOTION_FILM",
      "text": "Motion Pictures/Film"
    },
    {
      "value": "MUSEUMS_INSTITUTIONS",
      "text": "Museums/Institutions"
    },
    {
      "value": "MUSIC",
      "text": "Music"
    },
    {
      "value": "NANOTECHNOLOGY",
      "text": "Nanotechnology"
    },
    {
      "value": "NEWSPAPERS_JOURNALISM",
      "text": "Newspapers/Journalism"
    },
    {
      "value": "NON_PROFIT",
      "text": "Non-Profit/Volunteering"
    },
    {
      "value": "OIL_ENERGY",
      "text": "Oil/Energy/Solar/Greentech"
    },
    {
      "value": "ONLINE_PUBLISHING",
      "text": "Online Publishing"
    },
    {
      "value": "OTHER_INDUSTRY",
      "text": "Other Industry"
    },
    {
      "value": "OUTSOURCING_OFFSHORING",
      "text": "Outsourcing/Offshoring"
    },
    {
      "value": "PACKAGE_FREIGHT",
      "text": "Package/Freight Delivery"
    },
    {
      "value": "PACKAGE_CONTAINERS",
      "text": "Packaging/Containers"
    },
    {
      "value": "PAPER_PROD",
      "text": "Paper/Forest Products"
    },
    {
      "value": "PERFORMING_ART",
      "text": "Performing Arts"
    },
    {
      "value": "PHARMACEUTICALS",
      "text": "Pharmaceuticals"
    },
    {
      "value": "PHILANTHROPY",
      "text": "Philanthropy"
    },
    {
      "value": "PHOTOGRAPHY",
      "text": "Photography"
    },
    {
      "value": "PLASTICS",
      "text": "Plastics"
    },
    {
      "value": "POLITICAL_ORG",
      "text": "Political Organization"
    },
    {
      "value": "PRIMARY_EDUCATION",
      "text": "Primary/Secondary Education"
    },
    {
      "value": "PRINTING",
      "text": "Printing"
    },
    {
      "value": "PROFESSIONAL_TRAINING",
      "text": "Professional Training"
    },
    {
      "value": "PROGRAM_DEV",
      "text": "Program Development"
    },
    {
      "value": "PUBLIC_RELATIONS",
      "text": "Public Relations/PR"
    },
    {
      "value": "PUBLIC_SAFETY",
      "text": "Public Safety"
    },
    {
      "value": "PUBLISHING_INDUSTRY",
      "text": "Publishing Industry"
    },
    {
      "value": "RAILROAD_MANUFACTURE",
      "text": "Railroad Manufacture"
    },
    {
      "value": "RANCHING",
      "text": "Ranching"
    },
    {
      "value": "REAL_ESTATE_MORTGAGE",
      "text": "Real Estate/Mortgage"
    },
    {
      "value": "RECREATIONAL_SERVICES",
      "text": "Recreational Facilities/Services"
    },
    {
      "value": "RELIGIOUS_INSTITUTIONS",
      "text": "Religious Institutions"
    },
    {
      "value": "RENEWABLES_ENV",
      "text": "Renewables/Environment"
    },
    {
      "value": "RESEARCH_INDUSTRY",
      "text": "Research Industry"
    },
    {
      "value": "RESTAURANTS",
      "text": "Restaurants"
    },
    {
      "value": "RETAIL_INDUSTRY",
      "text": "Retail Industry"
    },
    {
      "value": "SECURITY_INVESTIGATE",
      "text": "Security/Investigations"
    },
    {
      "value": "SEMICONDUCTORS",
      "text": "Semiconductors"
    },
    {
      "value": "SHIPBUILDING",
      "text": "Shipbuilding"
    },
    {
      "value": "SPORTING_GOODS",
      "text": "Sporting Goods"
    },
    {
      "value": "SPORTS",
      "text": "Sports"
    },
    {
      "value": "STAFFING_RECRUITING",
      "text": "Staffing/Recruiting"
    },
    {
      "value": "SUPERMARKETS",
      "text": "Supermarkets"
    },
    {
      "value": "TELECOMMUNICATION",
      "text": "Telecommunications"
    },
    {
      "value": "TEXTILES",
      "text": "Textiles"
    },
    {
      "value": "THINK_TANKS",
      "text": "Think Tanks"
    },
    {
      "value": "TOBACCO",
      "text": "Tobacco"
    },
    {
      "value": "TRANSLATION_LOCALIZATION",
      "text": "Translation/Localization"
    },
    {
      "value": "TRANSPORTATION",
      "text": "Transportation"
    },
    {
      "value": "UTILITIES",
      "text": "Utilities"
    },
    {
      "value": "VENTURE_CAPITAL",
      "text": "Venture Capital/VC"
    },
    {
      "value": "VETERINARY",
      "text": "Veterinary"
    },
    {
      "value": "WAREHOUSING",
      "text": "Warehousing"
    },
    {
      "value": "WHOLESALE",
      "text": "Wholesale"
    },
    {
      "value": "WINE_SPIRITS",
      "text": "Wine/Spirits"
    },
    {
      "value": "WIRELESS",
      "text": "Wireless"
    },
    {
      "value": "WRITING_EDITING",
      "text": "Writing/Editing"
    }
  ]
};

export default constants;

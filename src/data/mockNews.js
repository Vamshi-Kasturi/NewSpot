// Curated fallback data for offline use and API rate limit protection
export const mockArticles = {
  general: [
    {
      uuid: "gen-1",
      title: "Global Climate Summit Concludes With Landmark Renewable Energy Accord",
      description: "World leaders at the climate conference have finalized a historic agreement accelerating the transition to clean energy, pledging over $200 billion toward green infrastructure over the next decade.",
      snippet: "World leaders finalize historic transition agreement...",
      url: "https://www.reuters.com",
      image_url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      source: "reuters.com",
      categories: ["general"]
    },
    {
      uuid: "gen-2",
      title: "Revolutionary High-Speed Rail Project Connects Major Economic Corridors",
      description: "Engineers and urban planners have inaugurated the first phase of an ultra-modern high-speed rail corridor designed to cut travel times by 65% and reduce regional carbon emissions.",
      snippet: "New bullet train line opens with massive public turnout...",
      url: "https://www.bbc.com/news",
      image_url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 5).toISOString(),
      source: "bbc.com",
      categories: ["general"]
    },
    {
      uuid: "gen-3",
      title: "Urban Reforestation Programs Show Rapid Recovery in Biodiversity Metrics",
      description: "A five-year metropolitan study reveals that mini-forests planted across suburban belts have sparked an unexpected surge in native bird species and pollinator density.",
      snippet: "Metropolitan ecological restoration succeeds beyond expectations...",
      url: "https://apnews.com",
      image_url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 8).toISOString(),
      source: "apnews.com",
      categories: ["general"]
    }
  ],
  business: [
    {
      uuid: "bus-1",
      title: "Global Markets Rally as Inflation Cools and Manufacturing Orders Surge",
      description: "Equities touched new record highs this morning following release of consumer price index figures showing steady moderation alongside robust consumer demand.",
      snippet: "Tech and banking sectors lead a broad market surge...",
      url: "https://www.bloomberg.com",
      image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 3).toISOString(),
      source: "bloomberg.com",
      categories: ["business"]
    },
    {
      uuid: "bus-2",
      title: "Venture Investments in Sustainable Agritech Quadruple in Q3",
      description: "Agtech startups specializing in vertical farming and drone-based crop monitoring raised over $4.2 billion this quarter as institutional funds prioritize food security.",
      snippet: "Food security technology emerges as top venture capital draw...",
      url: "https://www.ft.com",
      image_url: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 7).toISOString(),
      source: "ft.com",
      categories: ["business"]
    }
  ],
  sports: [
    {
      uuid: "spo-1",
      title: "Historic Cricket Comeback: Thrilling Final Over Victory Stuns Fans",
      description: "In an exhilarating finish before an 80,000-strong stadium, a sensational boundary in the final delivery sealed a historic triumph that will be remembered for generations.",
      snippet: "Thrilling boundary in final over seals international championship...",
      url: "https://www.espncricinfo.com",
      image_url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 1).toISOString(),
      source: "espncricinfo.com",
      categories: ["sports"]
    },
    {
      uuid: "spo-2",
      title: "Underdog Squad Clinches Football Title in Breathtaking Extra-Time Winner",
      description: "A dramatic 118th-minute header broke the deadlock in front of roaring crowds, capping an unbelievable Cinderella run for the championship challengers.",
      snippet: "Stunning extra-time header secures football tournament triumph...",
      url: "https://www.skysports.com",
      image_url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      source: "skysports.com",
      categories: ["sports"]
    }
  ],
  tech: [
    {
      uuid: "tech-1",
      title: "Breakthrough in Photonic Quantum Computing Achieves Room-Temperature Operation",
      description: "Researchers announce a major hardware milestone that operates light-based qubits at ambient room temperatures, drastically slashing the cost of future quantum systems.",
      snippet: "Photonic processors bypass sub-zero refrigeration requirement...",
      url: "https://techcrunch.com",
      image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      source: "techcrunch.com",
      categories: ["tech"]
    },
    {
      uuid: "tech-2",
      title: "Open Source AI Models Surpass Proprietary Benchmarks in Code Reasoning",
      description: "A consortium of global researchers released a lightweight open-weights neural network capable of outperforming multi-billion-dollar proprietary models on coding benchmarks.",
      snippet: "New open model democratizes advanced software development intelligence...",
      url: "https://www.theverge.com",
      image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 6).toISOString(),
      source: "theverge.com",
      categories: ["tech"]
    }
  ],
  entertainment: [
    {
      uuid: "ent-1",
      title: "International Film Festival Honors Visionary Independent Directors",
      description: "The prestigious cinema festival wrapped up with high acclaim for groundbreaking indie directors exploring contemporary human connection in an increasingly virtual era.",
      snippet: "Indie filmmakers sweep top accolades at prestigious festival...",
      url: "https://variety.com",
      image_url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 3).toISOString(),
      source: "variety.com",
      categories: ["entertainment"]
    }
  ],
  health: [
    {
      uuid: "hea-1",
      title: "Universal Preventive Vaccine Candidate Enters Final Phase Trials",
      description: "Clinical immunologists report that early human trials demonstrate a 94% efficacy rate across broad viral variants, paving the way for next-generation medical resilience.",
      snippet: "Novel antibody formulation demonstrates strong universal protection...",
      url: "https://www.medicalnewstoday.com",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      source: "medicalnewstoday.com",
      categories: ["health"]
    }
  ],
  science: [
    {
      uuid: "sci-1",
      title: "Deep Space Telescope Discovers Water Vapor in Atmosphere of Habitable-Zone Exoplanet",
      description: "Spectroscopic observations have confirmed high concentrations of atmospheric water molecules on an earth-sized exoplanet orbiting within its star's goldilocks habitable zone.",
      snippet: "Spectroscopy confirms atmospheric signatures on Earth-sized exoplanet...",
      url: "https://www.nature.com",
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      published_at: new Date(Date.now() - 3600000 * 5).toISOString(),
      source: "nature.com",
      categories: ["science"]
    }
  ]
};

export const getMockArticlesForCategory = (cat) => {
  const normalized = (cat || "general").toLowerCase();
  return mockArticles[normalized] || mockArticles.general;
};

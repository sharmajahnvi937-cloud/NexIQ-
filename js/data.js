/* ============================================
   NEXIQ — Simulated Datasets
   ============================================ */

const NEXIQ_DATA = {

  /* ---------- Brand Profiles ---------- */
  brands: [
    {
      id: 'b1',
      name: 'NovaSkin Cosmetics',
      logo: 'NS',
      tagline: 'Premium skincare powered by science',
      category: 'Beauty & Skincare',
      founded: 2019,
      trustScore: 92,
      successProbability: 87,
      website: 'novaskin.com',
      certifications: ['FDA Approved', 'Cruelty-Free', 'ISO 9001', 'Dermatologist Tested'],
      productMetrics: {
        quality: 94,
        durability: 88,
        safety: 96,
        efficacy: 91,
        innovation: 85,
        packaging: 89
      },
      campaigns: {
        total: 47,
        successful: 42,
        avgROI: 340,
        totalSpend: 285000,
        totalRevenue: 1254000
      },
      growth: {
        monthly: [12, 15, 18, 22, 19, 25, 28, 32, 35, 38, 42, 48],
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      collaborations: [
        { creator: 'Sarah Chen', campaign: 'Summer Glow Collection', roi: 420, status: 'completed', date: '2025-11' },
        { creator: 'Mike Rivera', campaign: 'Men\'s Skincare Launch', roi: 310, status: 'completed', date: '2025-10' },
        { creator: 'Priya Sharma', campaign: 'Diwali Beauty Box', roi: 380, status: 'completed', date: '2025-09' },
        { creator: 'Emma Wilson', campaign: 'Winter Care Series', roi: 290, status: 'active', date: '2025-12' },
        { creator: 'Alex Thompson', campaign: 'Acne Solutions', roi: 360, status: 'completed', date: '2025-08' }
      ]
    },
    {
      id: 'b2',
      name: 'VoltFit Athletics',
      logo: 'VF',
      tagline: 'Performance gear for every athlete',
      category: 'Sports & Fitness',
      founded: 2020,
      trustScore: 88,
      successProbability: 82,
      website: 'voltfit.io',
      certifications: ['ISO 14001', 'Sustainable Materials', 'Fair Trade'],
      productMetrics: {
        quality: 90,
        durability: 93,
        safety: 92,
        efficacy: 87,
        innovation: 91,
        packaging: 84
      },
      campaigns: {
        total: 32,
        successful: 27,
        avgROI: 280,
        totalSpend: 198000,
        totalRevenue: 752400
      },
      growth: {
        monthly: [8, 10, 14, 16, 20, 24, 22, 28, 33, 36, 40, 45],
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      collaborations: [
        { creator: 'Jake Fitness', campaign: 'Marathon Prep Gear', roi: 350, status: 'completed', date: '2025-11' },
        { creator: 'Lisa Yoga', campaign: 'Yoga Collection Drop', roi: 260, status: 'completed', date: '2025-10' },
        { creator: 'Ryan Cross', campaign: 'CrossFit Essentials', roi: 310, status: 'active', date: '2025-12' }
      ]
    },
    {
      id: 'b3',
      name: 'BrewCraft Coffee',
      logo: 'BC',
      tagline: 'Artisan coffee for the modern lifestyle',
      category: 'Food & Beverage',
      founded: 2018,
      trustScore: 95,
      successProbability: 91,
      website: 'brewcraft.co',
      certifications: ['Organic Certified', 'Fair Trade', 'Rainforest Alliance', 'Non-GMO'],
      productMetrics: {
        quality: 97,
        durability: 82,
        safety: 98,
        efficacy: 94,
        innovation: 88,
        packaging: 92
      },
      campaigns: {
        total: 58,
        successful: 54,
        avgROI: 410,
        totalSpend: 320000,
        totalRevenue: 1632000
      },
      growth: {
        monthly: [20, 22, 25, 28, 30, 35, 38, 42, 48, 52, 55, 62],
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      collaborations: [
        { creator: 'Coffee with Sam', campaign: 'Morning Ritual Box', roi: 480, status: 'completed', date: '2025-11' },
        { creator: 'Foodie Maya', campaign: 'Taste Test Series', roi: 390, status: 'completed', date: '2025-10' },
        { creator: 'Chef Antonio', campaign: 'Coffee Pairing Guide', roi: 420, status: 'completed', date: '2025-09' }
      ]
    }
  ],

  /* ---------- Creator Profiles ---------- */
  creators: [
    {
      id: 'c1',
      name: 'Sarah Chen',
      avatar: 'SC',
      tagline: 'Beauty & lifestyle content creator with 2M+ engaged followers',
      niche: 'Beauty & Lifestyle',
      platform: 'Instagram + YouTube',
      followers: 2100000,
      reputationScore: 94,
      engagementRate: 6.8,
      audienceTrustScore: 91,
      followerViewRatio: 0.42,
      conversionRate: 4.2,
      avgROI: 380,
      campaignSuccessRate: 92,
      audienceDemographics: {
        labels: ['18-24', '25-34', '35-44', '45+'],
        data: [35, 42, 18, 5]
      },
      audienceGender: {
        labels: ['Female', 'Male', 'Other'],
        data: [72, 24, 4]
      },
      monthlyEngagement: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        likes: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 75000, 82000, 78000, 85000, 92000],
        comments: [3200, 3800, 3500, 4200, 4000, 5100, 4800, 5300, 5800, 5500, 6000, 6500],
        shares: [1800, 2100, 1900, 2500, 2300, 2900, 2700, 3100, 3400, 3200, 3500, 3800]
      },
      roiHistory: {
        labels: ['NovaSkin', 'LuxeHair', 'GlowUp', 'PureSkin', 'AquaGlow', 'BloomBox'],
        values: [420, 350, 390, 310, 440, 380]
      },
      collaborations: [
        { brand: 'NovaSkin Cosmetics', campaign: 'Summer Glow', roi: 420, rating: 5, date: '2025-11' },
        { brand: 'LuxeHair Pro', campaign: 'Hair Revival', roi: 350, rating: 4, date: '2025-09' },
        { brand: 'GlowUp Skincare', campaign: 'Glow Challenge', roi: 390, rating: 5, date: '2025-07' },
        { brand: 'PureSkin Labs', campaign: 'Clean Beauty', roi: 310, rating: 4, date: '2025-05' },
        { brand: 'AquaGlow', campaign: 'Hydration Series', roi: 440, rating: 5, date: '2025-03' }
      ],
      portfolio: [
        { title: 'Summer Glow Collection Review', views: 1200000, likes: 89000, type: 'video' },
        { title: '10-Step Korean Skincare Routine', views: 2400000, likes: 156000, type: 'video' },
        { title: 'Honest Beauty Brand Rankings', views: 890000, likes: 67000, type: 'reel' },
        { title: 'Morning Skincare Routine 2025', views: 1800000, likes: 120000, type: 'video' }
      ]
    },
    {
      id: 'c2',
      name: 'Mike Rivera',
      avatar: 'MR',
      tagline: 'Tech reviewer & gadget enthusiast | 1.5M subscribers',
      niche: 'Technology & Gadgets',
      platform: 'YouTube + Twitter',
      followers: 1500000,
      reputationScore: 90,
      engagementRate: 5.4,
      audienceTrustScore: 88,
      followerViewRatio: 0.38,
      conversionRate: 3.8,
      avgROI: 320,
      campaignSuccessRate: 88,
      audienceDemographics: {
        labels: ['18-24', '25-34', '35-44', '45+'],
        data: [28, 45, 20, 7]
      },
      audienceGender: {
        labels: ['Female', 'Male', 'Other'],
        data: [22, 74, 4]
      },
      monthlyEngagement: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        likes: [38000, 42000, 45000, 50000, 48000, 55000, 60000, 58000, 65000, 70000, 72000, 78000],
        comments: [4500, 5000, 5200, 5800, 5500, 6200, 6800, 6500, 7200, 7800, 8000, 8500],
        shares: [2200, 2500, 2600, 2900, 2800, 3200, 3500, 3300, 3800, 4100, 4200, 4500]
      },
      roiHistory: {
        labels: ['TechPro', 'GadgetX', 'SoundWave', 'PixelCam', 'NovaSkin', 'SmartHome'],
        values: [380, 290, 340, 310, 310, 350]
      },
      collaborations: [
        { brand: 'TechPro Gadgets', campaign: 'CES Launch', roi: 380, rating: 5, date: '2025-11' },
        { brand: 'GadgetX', campaign: 'Smart Watch Review', roi: 290, rating: 4, date: '2025-09' },
        { brand: 'SoundWave Audio', campaign: 'Earbuds Challenge', roi: 340, rating: 5, date: '2025-07' },
        { brand: 'PixelCam', campaign: 'Camera Showdown', roi: 310, rating: 4, date: '2025-05' }
      ],
      portfolio: [
        { title: 'iPhone 18 Pro - Honest Review', views: 3200000, likes: 198000, type: 'video' },
        { title: 'Best Budget Laptops 2025', views: 1800000, likes: 112000, type: 'video' },
        { title: 'Smart Home Setup Under $500', views: 950000, likes: 72000, type: 'video' }
      ]
    },
    {
      id: 'c3',
      name: 'Priya Sharma',
      avatar: 'PS',
      tagline: 'Food & travel blogger | Authentic Indian cuisine | 800K followers',
      niche: 'Food & Travel',
      platform: 'Instagram + Blog',
      followers: 800000,
      reputationScore: 96,
      engagementRate: 8.2,
      audienceTrustScore: 95,
      followerViewRatio: 0.52,
      conversionRate: 5.6,
      avgROI: 420,
      campaignSuccessRate: 96,
      audienceDemographics: {
        labels: ['18-24', '25-34', '35-44', '45+'],
        data: [22, 38, 28, 12]
      },
      audienceGender: {
        labels: ['Female', 'Male', 'Other'],
        data: [58, 38, 4]
      },
      monthlyEngagement: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        likes: [28000, 32000, 35000, 40000, 38000, 45000, 48000, 52000, 55000, 58000, 62000, 68000],
        comments: [5800, 6200, 6800, 7500, 7200, 8000, 8500, 9000, 9500, 10000, 10500, 11200],
        shares: [3200, 3600, 3900, 4500, 4200, 4800, 5200, 5500, 5800, 6200, 6500, 7000]
      },
      roiHistory: {
        labels: ['BrewCraft', 'SpiceLand', 'TravelEase', 'NovaSkin', 'FoodBox', 'CookPro'],
        values: [480, 420, 390, 380, 450, 410]
      },
      collaborations: [
        { brand: 'BrewCraft Coffee', campaign: 'Diwali Special', roi: 480, rating: 5, date: '2025-11' },
        { brand: 'SpiceLand', campaign: 'Spice Box Unboxing', roi: 420, rating: 5, date: '2025-09' },
        { brand: 'TravelEase', campaign: 'South India Tour', roi: 390, rating: 5, date: '2025-07' },
        { brand: 'FoodBox India', campaign: 'Meal Kit Reviews', roi: 450, rating: 5, date: '2025-05' }
      ],
      portfolio: [
        { title: 'Hidden Gems of Kerala', views: 920000, likes: 78000, type: 'video' },
        { title: 'Street Food Tour - Delhi', views: 1500000, likes: 125000, type: 'reel' },
        { title: 'Authentic Biryani Recipe', views: 680000, likes: 58000, type: 'video' }
      ]
    }
  ],

  /* ---------- Analytics Data ---------- */
  analytics: {
    platformGrowth: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      creators: [120, 180, 250, 340, 420, 510, 620, 750, 890, 1050, 1240, 1480],
      brands: [45, 68, 95, 130, 165, 200, 245, 300, 360, 430, 510, 600],
      campaigns: [15, 28, 42, 58, 78, 95, 120, 148, 180, 220, 265, 320]
    },
    categoryDistribution: {
      labels: ['Beauty', 'Tech', 'Food', 'Fashion', 'Fitness', 'Travel', 'Gaming', 'Education'],
      data: [24, 18, 16, 14, 10, 8, 6, 4]
    },
    roiByCategory: {
      labels: ['Beauty', 'Tech', 'Food', 'Fashion', 'Fitness', 'Travel', 'Gaming', 'Education'],
      data: [380, 320, 420, 290, 310, 340, 260, 280]
    },
    trustScoreDistribution: {
      labels: ['90-100', '80-89', '70-79', '60-69', 'Below 60'],
      data: [35, 30, 20, 10, 5]
    },
    monthlyRevenue: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      data: [45000, 62000, 78000, 95000, 112000, 138000, 155000, 178000, 205000, 235000, 268000, 310000]
    },
    engagementTrends: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      instagram: [5.2, 5.4, 5.8, 6.1, 6.3, 6.5, 6.8, 7.0, 7.2, 7.5, 7.8, 8.1],
      youtube: [3.8, 4.0, 4.2, 4.5, 4.6, 4.8, 5.0, 5.2, 5.4, 5.6, 5.8, 6.0],
      tiktok: [8.2, 8.5, 8.8, 9.0, 9.2, 9.5, 9.8, 10.0, 10.2, 10.5, 10.8, 11.2]
    },
    campaignPerformance: {
      labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
      successful: [82, 85, 88, 92],
      partial: [12, 10, 8, 5],
      failed: [6, 5, 4, 3]
    }
  },

  /* ---------- AI Module Results ---------- */
  aiModules: {
    brandSuccessPredictor: {
      name: 'Brand Success Predictor',
      icon: '🚀',
      description: 'Predicts the probability of a brand\'s success based on market data, product quality, and historical performance.',
      sample: {
        brand: 'NovaSkin Cosmetics',
        prediction: 87,
        confidence: 92,
        factors: [
          { name: 'Product Quality', score: 94, impact: 'high' },
          { name: 'Market Positioning', score: 88, impact: 'high' },
          { name: 'Brand Recognition', score: 82, impact: 'medium' },
          { name: 'Customer Satisfaction', score: 91, impact: 'high' },
          { name: 'Innovation Index', score: 85, impact: 'medium' }
        ]
      }
    },
    creatorROIAnalyzer: {
      name: 'Creator ROI Analyzer',
      icon: '📊',
      description: 'Analyzes and predicts the ROI a creator can deliver based on audience data, engagement patterns, and conversion history.',
      sample: {
        creator: 'Sarah Chen',
        predictedROI: 395,
        confidence: 89,
        breakdown: [
          { metric: 'Direct Sales Impact', value: '45%' },
          { metric: 'Brand Awareness Lift', value: '28%' },
          { metric: 'Social Proof Generation', value: '15%' },
          { metric: 'SEO & Traffic Boost', value: '12%' }
        ]
      }
    },
    audienceTrustAnalyzer: {
      name: 'Audience Trust Analyzer',
      icon: '🛡️',
      description: 'Measures the trust level between a creator and their audience through sentiment analysis and engagement patterns.',
      sample: {
        creator: 'Priya Sharma',
        trustScore: 95,
        metrics: [
          { name: 'Comment Sentiment', value: 94, trend: 'up' },
          { name: 'Recommendation Follow-through', value: 88, trend: 'up' },
          { name: 'Audience Retention', value: 92, trend: 'stable' },
          { name: 'Authenticity Perception', value: 96, trend: 'up' },
          { name: 'Repeat Engagement', value: 90, trend: 'up' }
        ]
      }
    },
    compatibilityEngine: {
      name: 'Collaboration Compatibility Engine',
      icon: '🔗',
      description: 'Matches brands with creators based on audience alignment, niche relevance, and performance compatibility.',
      sample: {
        matches: [
          { brand: 'NovaSkin Cosmetics', creator: 'Sarah Chen', score: 96, factors: ['Audience Match', 'Niche Alignment', 'ROI History'] },
          { brand: 'BrewCraft Coffee', creator: 'Priya Sharma', score: 94, factors: ['Content Style', 'Audience Trust', 'Category Fit'] },
          { brand: 'VoltFit Athletics', creator: 'Mike Rivera', score: 78, factors: ['Tech Audience', 'Cross-niche Potential', 'Male Demographics'] }
        ]
      }
    },
    productQualityEngine: {
      name: 'Product Quality Assessment',
      icon: '✅',
      description: 'Evaluates product quality through multi-dimensional scoring based on testing reports, certifications, and user feedback.',
      sample: {
        product: 'NovaSkin Vitamin C Serum',
        overallScore: 94,
        dimensions: [
          { name: 'Ingredient Quality', score: 96 },
          { name: 'Efficacy Proof', score: 92 },
          { name: 'Safety Profile', score: 98 },
          { name: 'Packaging Quality', score: 89 },
          { name: 'Value for Money', score: 85 },
          { name: 'Sustainability', score: 88 }
        ]
      }
    },
    reputationSimulator: {
      name: 'Reputation Impact Simulator',
      icon: '🎯',
      description: 'Simulates the potential impact of a collaboration on both brand and creator reputation before commitment.',
      sample: {
        scenario: 'NovaSkin × Sarah Chen Collaboration',
        brandImpact: { before: 88, after: 93, change: '+5.7%' },
        creatorImpact: { before: 91, after: 94, change: '+3.3%' },
        risks: [
          { type: 'Low', description: 'Audience overlap may cause saturation' },
          { type: 'Minimal', description: 'Product category well-received by audience' }
        ]
      }
    },
    statisticalAnalyzer: {
      name: 'Statistical Performance Analyzer',
      icon: '📈',
      description: 'Provides deep statistical analysis of campaign performance using regression models and trend detection.',
      sample: {
        metrics: {
          meanROI: 358,
          medianROI: 345,
          stdDeviation: 42,
          trendDirection: 'upward',
          projectedGrowth: '12.5%',
          confidenceInterval: '342 - 374'
        }
      }
    },
    campaignPredictor: {
      name: 'Campaign Outcome Predictor',
      icon: '🔮',
      description: 'Predicts campaign outcomes before launch using historical data, market conditions, and creator-brand synergy.',
      sample: {
        campaign: 'Winter Wellness Campaign',
        predictions: {
          successProbability: 89,
          estimatedROI: 365,
          estimatedReach: 1800000,
          estimatedEngagement: 142000,
          estimatedConversions: 8500,
          timeToROI: '14 days'
        }
      }
    }
  },

  /* ---------- Compatibility Matches ---------- */
  compatibilityMatches: [
    {
      brand: { name: 'NovaSkin Cosmetics', logo: 'NS', category: 'Beauty' },
      creator: { name: 'Sarah Chen', avatar: 'SC', niche: 'Beauty & Lifestyle' },
      score: 96,
      audienceMatch: 94,
      nicheAlignment: 98,
      roiPotential: 95,
      riskLevel: 'Low',
      recommendation: 'Highly Recommended — Perfect niche alignment with proven ROI track record'
    },
    {
      brand: { name: 'BrewCraft Coffee', logo: 'BC', category: 'Food & Beverage' },
      creator: { name: 'Priya Sharma', avatar: 'PS', niche: 'Food & Travel' },
      score: 94,
      audienceMatch: 92,
      nicheAlignment: 96,
      roiPotential: 93,
      riskLevel: 'Low',
      recommendation: 'Strongly Recommended — High audience trust and engagement in food category'
    },
    {
      brand: { name: 'VoltFit Athletics', logo: 'VF', category: 'Sports' },
      creator: { name: 'Mike Rivera', avatar: 'MR', niche: 'Tech & Gadgets' },
      score: 72,
      audienceMatch: 68,
      nicheAlignment: 55,
      roiPotential: 78,
      riskLevel: 'Medium',
      recommendation: 'Consider with Caution — Cross-niche potential but audience mismatch risk'
    },
    {
      brand: { name: 'NovaSkin Cosmetics', logo: 'NS', category: 'Beauty' },
      creator: { name: 'Priya Sharma', avatar: 'PS', niche: 'Food & Travel' },
      score: 81,
      audienceMatch: 78,
      nicheAlignment: 72,
      roiPotential: 85,
      riskLevel: 'Low-Medium',
      recommendation: 'Good Potential — Strong audience trust compensates for partial niche mismatch'
    },
    {
      brand: { name: 'BrewCraft Coffee', logo: 'BC', category: 'Food & Beverage' },
      creator: { name: 'Sarah Chen', avatar: 'SC', niche: 'Beauty & Lifestyle' },
      score: 76,
      audienceMatch: 74,
      nicheAlignment: 65,
      roiPotential: 82,
      riskLevel: 'Medium',
      recommendation: 'Viable — Lifestyle overlap creates opportunity despite different primary niches'
    }
  ],

  /* ---------- Platform Stats ---------- */
  platformStats: {
    totalCreators: 14800,
    totalBrands: 6200,
    campaignsLaunched: 32400,
    avgROI: 340,
    totalRevenue: '$48M+',
    satisfactionRate: 96
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NEXIQ_DATA;
}

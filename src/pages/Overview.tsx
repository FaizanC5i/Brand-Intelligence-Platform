import { useState, useEffect } from "react";
import { format, subMonths, subMinutes, subHours } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/components/layout/AppLayout";
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Target, 
  Globe, 
  Users, 
  ArrowRight,
  Sparkles,
  Brain,
  Eye,
  Activity,
  ChevronRight,
  ChevronDown,
  Play,
  Star,
  AlertTriangle,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Gamepad2,
  Monitor,
  Building,
  Tablet,
  Smartphone,
  Timer,
  Flame,
  Award,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [animationCounter, setAnimationCounter] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);
  const [activeTab, setActiveTab] = useState("executive");
  const [selectedTracker, setSelectedTracker] = useState("consumer-pc");
  const [selectedWave, setSelectedWave] = useState("april-2025");
  const [selectedMarket, setSelectedMarket] = useState("usa");
  const [selectedSegment, setSelectedSegment] = useState("recent-buyers");
  const [selectedDataSource, setSelectedDataSource] = useState("primary-brand-tracking");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCounter(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(metricInterval);
  }, []);

  const metrics = [
    { 
      label: "Market Share Growth", 
      value: 23.4, 
      unit: "%", 
      trend: "up", 
      color: "text-green-500",
      previousValue: 19.2,
      icon: BarChart3,
      gradient: "bg-gradient-primary"
    },
    { 
      label: "Consumer Interest", 
      value: 87.2, 
      unit: "%", 
      trend: "up", 
      color: "text-blue-500",
      previousValue: 82.1,
      icon: Users,
      gradient: "bg-gradient-secondary"
    },
    { 
      label: "AI PC Adoption", 
      value: 34.8, 
      unit: "%", 
      trend: "up", 
      color: "text-purple-500",
      previousValue: 28.3,
      icon: Brain,
      gradient: "bg-gradient-cool"
    },
    { 
      label: "Consumer PC Unaided Consideration", 
      value: 45, 
      unit: "%", 
      trend: "up", 
      color: "text-blue-500",
      previousValue: 42,
      icon: Monitor,
      gradient: "bg-gradient-primary"
    },
    { 
      label: "Gaming PC Unaided Consideration", 
      value: 45, 
      unit: "%", 
      trend: "up", 
      color: "text-red-500",
      previousValue: 42,
      icon: Gamepad2,
      gradient: "bg-gradient-warm"
    }
  ];

  const insights = [
    {
      id: 1,
      type: "breaking",
      title: "AI PCs Surge 340% in Enterprise Sector",
      description: "Unexpected adoption wave across Fortune 500 companies",
      timestamp: format(subMinutes(new Date(), 2), "HH:mm") + " (2 min ago)",
      impact: "high",
      category: "Market Disruption",
      icon: Brain,
      gradient: "bg-gradient-primary"
    },
    {
      id: 2,
      type: "trending",
      title: "Gaming PC Demand Breaks All Records",
      description: "Holiday season drives unprecedented 67% growth",
      timestamp: format(subMinutes(new Date(), 15), "HH:mm") + " (15 min ago)",
      impact: "medium",
      category: "Consumer Trends",
      icon: Gamepad2,
      gradient: "bg-gradient-warm"
    },
    {
      id: 3,
      type: "prediction",
      title: "Hybrid Work Revolution Reshapes Commercial PCs",
      description: "New form factors emerging for flexible workforce",
      timestamp: format(subHours(new Date(), 1), "HH:mm") + " (1 hour ago)",
      impact: "high",
      category: "Future Trends",
      icon: Building,
      gradient: "bg-gradient-secondary"
    }
  ];

  const marketSegments = [
    { name: "Gaming PCs", value: 34, growth: 23.4, color: "bg-gradient-warm", icon: Gamepad2 },
    { name: "Business Laptops", value: 28, growth: 12.1, color: "bg-gradient-primary", icon: Monitor },
    { name: "AI Workstations", value: 18, growth: 156.8, color: "bg-gradient-secondary", icon: Brain },
    { name: "Creative Pros", value: 20, growth: 8.9, color: "bg-gradient-cool", icon: Tablet }
  ];

  const urgentActions = [
    { 
      title: "Competitive Intel Alert", 
      description: "3 new product announcements in gaming segment",
      priority: "urgent",
      time: "< 1 hour",
      action: "Analyze Impact",
      icon: AlertTriangle
    },
    { 
      title: "Survey Response Spike", 
      description: "Consumer interest in AI features up 340%",
      priority: "high",
      time: "Real-time",
      action: "Deep Dive",
      icon: TrendingUp
    },
    { 
      title: "Market Shift Detected", 
      description: "Enterprise buying patterns showing anomaly",
      priority: "medium",
      time: format(subMinutes(new Date(), 30), "HH:mm") + " (30 min ago)",
      action: "Investigate",
      icon: Target
    }
  ];

  const trackers = [
    { id: "consumer-pc", name: "Consumer PC", icon: Monitor },
    { id: "consumer-tablet", name: "Consumer Tablet", icon: Tablet },
    { id: "consumer-gaming", name: "Consumer Gaming", icon: Gamepad2 },
    { id: "commercial-pc", name: "Commercial PC", icon: Building }
  ];

  const trackerData = {
    "consumer-pc": {
      lenovo: { awareness: 45, consideration: 26, preference: 6, rank: 4 },
      competitors: [
        { name: "Dell", awareness: 80, consideration: 58, preference: 22, rank: 1, logo: "D" },
        { name: "HP", awareness: 79, consideration: 55, preference: 25, rank: 2, logo: "HP" },
        { name: "Apple", awareness: 69, consideration: 45, preference: 24, rank: 3, logo: "A" }
      ]
    },
    "commercial-pc": {
      lenovo: { awareness: 38.7, consideration: 31.2, preference: 35.4, rank: 3 },
      competitors: [
        { name: "Dell", awareness: 56.1, consideration: 48.9, preference: 42.3, rank: 1, logo: "D" },
        { name: "HP", awareness: 49.8, consideration: 44.2, preference: 39.1, rank: 2, logo: "HP" },
        { name: "Apple", awareness: 22.9, consideration: 19.8, preference: 28.7, rank: 4, logo: "A" }
      ]
    },
    "consumer-tablet": {
      lenovo: { awareness: 18.3, consideration: 15.7, preference: 22.1, rank: 5 },
      competitors: [
        { name: "Apple", awareness: 67.2, consideration: 59.8, preference: 68.4, rank: 1, logo: "A" },
        { name: "Samsung", awareness: 43.8, consideration: 38.2, preference: 34.7, rank: 2, logo: "S" },
        { name: "HP", awareness: 28.4, consideration: 24.1, preference: 18.9, rank: 3, logo: "HP" }
      ]
    },
    "consumer-gaming": {
      lenovo: { awareness: 29.8, consideration: 25.3, preference: 38.6, rank: 4 },
      competitors: [
        { name: "ASUS", awareness: 48.9, consideration: 44.7, preference: 52.1, rank: 1, logo: "AS" },
        { name: "HP", awareness: 44.2, consideration: 39.8, preference: 36.4, rank: 2, logo: "HP" },
        { name: "Dell", awareness: 35.7, consideration: 31.2, preference: 28.9, rank: 3, logo: "D" }
      ]
    }
  };

  return (
    <AppLayout 
      title="C5i Discovery"
      subtitle="Real-time market insights and strategic intelligence"
      showGlobalSearch={false}
    >
      <div className="p-8 space-y-8">
        {/* Hero Section with Dynamic Metrics */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8 border border-neutral-200/50 shadow-2xl">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="bg-white/20 text-foreground px-4 py-2 animate-pulse-subtle backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Live Intelligence Feed
                  </Badge>
                  <h1 className="text-5xl font-bold gradient-text leading-tight">
                    Market Moving
                    <br />
                    <span className="text-foreground">Right Now</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    <span className="font-semibold text-foreground">Real-time insights</span> at your fingertips.
                  </p>
                </div>
              </div>

              {/* Live Metrics Carousel */}
              <div className="relative">
                <Link to={`/dashboard/${
                  activeMetric === 0 ? 'market-share' : 
                  activeMetric === 1 ? 'consumer-interest' : 
                  activeMetric === 2 ? 'ai-pc' : 
                  activeMetric === 3 ? 'consumer-pc' : 'gaming-pc'
                }`}>
                  <Card className={`card-modern border-0 ${metrics[activeMetric].gradient} hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group shadow-xl`}>
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        {/* Icon and Main Value */}
                        <div className="flex items-center justify-center gap-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-white/30">
                            {(() => {
                              const IconComponent = metrics[activeMetric].icon;
                              return <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />;
                            })()}
                          </div>
                          <div className="text-left">
                            <div className="text-5xl font-black text-white animate-scale-in drop-shadow-lg">
                              {metrics[activeMetric].value}{metrics[activeMetric].unit}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              {metrics[activeMetric].trend === "up" ? (
                                <TrendingUp className="w-5 h-5 text-white drop-shadow-md" />
                              ) : (
                                <TrendingDown className="w-5 h-5 text-white drop-shadow-md" />
                              )}
                              <span className="text-sm font-bold text-white drop-shadow-md">
                                {metrics[activeMetric].trend === "up" ? "+" : ""}
                                {(metrics[activeMetric].value - metrics[activeMetric].previousValue).toFixed(1)}
                                {metrics[activeMetric].unit}
                              </span>
                              <span className="text-xs text-white/80 drop-shadow-sm">vs last wave</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Label and Description */}
                        <div>
                          <div className="text-xl font-bold text-white group-hover:text-white/90 transition-colors drop-shadow-lg">
                            {metrics[activeMetric].label}
                          </div>
                          <div className="text-sm text-white/90 flex items-center justify-center gap-2 drop-shadow-sm">
                            <Activity className="w-4 h-4 text-white" />
                            Live tracking across 47 markets
                          </div>
                        </div>
                        
                        {/* Previous Value Reference */}
                        <div className="text-sm text-white bg-black/30 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30 shadow-lg font-medium">
                          Previous wave: {metrics[activeMetric].previousValue}{metrics[activeMetric].unit}
                        </div>
                        
                        {/* Click indicator */}
                        <div className="text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                          Click for detailed dashboard →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="card-modern border-0 shadow-large">
          <CardHeader className="border-b border-neutral-200/50 bg-gradient-to-r from-neutral-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button 
                  variant={activeTab === "executive" ? "default" : "ghost"}
                  className={`px-6 py-3 font-semibold text-sm transition-all ${
                    activeTab === "executive" 
                      ? "bg-gradient-primary text-white shadow-colored" 
                      : "text-muted-foreground hover:text-foreground hover:bg-neutral-100"
                  }`}
                  onClick={() => setActiveTab("executive")}
                >
                  Executive Summary
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {/* Wave and Market Filters */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600">Wave:</span>
                    <Select value={selectedWave} onValueChange={setSelectedWave}>
                      <SelectTrigger className="w-40 h-8 text-xs bg-white border border-neutral-300 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20">
                        <SelectValue placeholder="Select wave" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-neutral-200 shadow-xl z-[100] max-h-60">
                        <SelectItem value="april-2025" className="text-xs hover:bg-neutral-50 cursor-pointer">April 2025</SelectItem>
                        <SelectItem value="march-2025" className="text-xs hover:bg-neutral-50 cursor-pointer">March 2025</SelectItem>
                        <SelectItem value="february-2025" className="text-xs hover:bg-neutral-50 cursor-pointer">February 2025</SelectItem>
                        <SelectItem value="january-2025" className="text-xs hover:bg-neutral-50 cursor-pointer">January 2025</SelectItem>
                        <SelectItem value="december-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">December 2024</SelectItem>
                        <SelectItem value="november-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">November 2024</SelectItem>
                        <SelectItem value="april-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">April 2024</SelectItem>
                        <SelectItem value="march-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">March 2024</SelectItem>
                        <SelectItem value="february-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">February 2024</SelectItem>
                        <SelectItem value="january-2024" className="text-xs hover:bg-neutral-50 cursor-pointer">January 2024</SelectItem>
                        <SelectItem value="december-2023" className="text-xs hover:bg-neutral-50 cursor-pointer">December 2023</SelectItem>
                        <SelectItem value="november-2023" className="text-xs hover:bg-neutral-50 cursor-pointer">November 2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                   <div className="flex items-center gap-2">
                     <span className="text-xs font-medium text-gray-600">Market:</span>
                     <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                       <SelectTrigger className="w-40 h-8 text-xs bg-white border border-neutral-300 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20">
                         <SelectValue placeholder="Select market" />
                       </SelectTrigger>
                       <SelectContent className="bg-white border border-neutral-200 shadow-xl z-[100] max-h-60">
                        <SelectItem value="global" className="text-xs hover:bg-neutral-50 cursor-pointer">Global</SelectItem>
                        <SelectItem value="france" className="text-xs hover:bg-neutral-50 cursor-pointer">France</SelectItem>
                        <SelectItem value="germany" className="text-xs hover:bg-neutral-50 cursor-pointer">Germany</SelectItem>
                        <SelectItem value="uk" className="text-xs hover:bg-neutral-50 cursor-pointer">United Kingdom</SelectItem>
                        <SelectItem value="italy" className="text-xs hover:bg-neutral-50 cursor-pointer">Italy</SelectItem>
                        <SelectItem value="spain" className="text-xs hover:bg-neutral-50 cursor-pointer">Spain</SelectItem>
                        <SelectItem value="netherlands" className="text-xs hover:bg-neutral-50 cursor-pointer">Netherlands</SelectItem>
                        <SelectItem value="poland" className="text-xs hover:bg-neutral-50 cursor-pointer">Poland</SelectItem>
                        <SelectItem value="usa" className="text-xs hover:bg-neutral-50 cursor-pointer">United States</SelectItem>
                        <SelectItem value="canada" className="text-xs hover:bg-neutral-50 cursor-pointer">Canada</SelectItem>
                        <SelectItem value="china" className="text-xs hover:bg-neutral-50 cursor-pointer">China</SelectItem>
                        <SelectItem value="japan" className="text-xs hover:bg-neutral-50 cursor-pointer">Japan</SelectItem>
                         <SelectItem value="india" className="text-xs hover:bg-neutral-50 cursor-pointer">India</SelectItem>
                         <SelectItem value="australia" className="text-xs hover:bg-neutral-50 cursor-pointer">Australia</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>

                   <div className="flex items-center gap-2">
                     <span className="text-xs font-medium text-gray-600">Overall Segments:</span>
                     <Select value={selectedSegment} onValueChange={setSelectedSegment}>
                       <SelectTrigger className="w-44 h-8 text-xs bg-white border border-neutral-300 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20">
                         <SelectValue placeholder="Select segment" />
                       </SelectTrigger>
                       <SelectContent className="bg-white border border-neutral-200 shadow-xl z-[100] max-h-60">
                         <SelectItem value="recent-buyers" className="text-xs hover:bg-neutral-50 cursor-pointer">Recent buyers</SelectItem>
                         <SelectItem value="intenders" className="text-xs hover:bg-neutral-50 cursor-pointer">Intenders</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>

                   <div className="flex items-center gap-2">
                     <span className="text-xs font-medium text-gray-600">Data Sources:</span>
                     <Select value={selectedDataSource} onValueChange={setSelectedDataSource}>
                       <SelectTrigger className="w-52 h-8 text-xs bg-white border border-neutral-300 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20">
                         <SelectValue placeholder="Select data source" />
                       </SelectTrigger>
                       <SelectContent className="bg-white border border-neutral-200 shadow-xl z-[100] max-h-60">
                         <SelectItem value="primary-brand-tracking" className="text-xs hover:bg-neutral-50 cursor-pointer">Primary Brand Tracking</SelectItem>
                         <SelectItem value="synthetic-pulse-checks" className="text-xs hover:bg-neutral-50 cursor-pointer">Synthetic Pulse checks</SelectItem>
                         <SelectItem value="social-media-sensing" className="text-xs hover:bg-neutral-50 cursor-pointer">Social Media sensing</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>
               </div>
             </div>
          </CardHeader>
          <CardContent className="p-8">
            {activeTab === "executive" && (
              <div className="space-y-8 animate-fade-in">
                {/* Tracker Filter */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Brand Tracker Selection
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {trackers.map((tracker) => {
                      const IconComponent = tracker.icon;
                      return (
                        <Button
                          key={tracker.id}
                          variant={selectedTracker === tracker.id ? "default" : "outline"}
                          className={`p-4 h-auto flex flex-col gap-2 transition-all ${
                            selectedTracker === tracker.id
                              ? "bg-gradient-primary text-white shadow-colored"
                              : "text-muted-foreground hover:text-foreground hover:bg-neutral-50"
                          }`}
                          onClick={() => setSelectedTracker(tracker.id)}
                        >
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm font-medium">{tracker.name}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Brand Awareness Metrics */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <div className="text-base text-gray-700 leading-relaxed">
                      <span className="font-bold text-foreground">Lenovo's metrics have remained largely stable in the last one year with a marginal increase in Consideration in the last six months. Lenovo continues to be ranked #{trackerData[selectedTracker]?.lenovo.rank || 4} vis-à-vis competition.</span>
                    </div>
                    
                    <div className="mt-4 text-base text-gray-700 leading-relaxed">
                      {selectedTracker === "consumer-pc" ? (
                        <>In the last six months, the marginal increase in Unaided Consideration was driven by <span className="font-semibold text-foreground">improved product positioning and enhanced marketing campaigns</span>.</>
                      ) : selectedTracker === "commercial-pc" ? (
                        <>In the last six months, the marginal increase in Unaided Consideration was driven by <span className="font-semibold text-foreground">improved product positioning and enhanced marketing campaigns</span>.</>
                      ) : selectedTracker === "consumer-gaming" ? (
                        <>In the last six months, the marginal increase in Unaided Consideration was driven by <span className="font-semibold text-foreground">improved product positioning and enhanced marketing campaigns</span>.</>
                      ) : (
                        <>In the last six months, the marginal increase in Unaided Consideration was driven by <span className="font-semibold text-foreground">improved product positioning and enhanced marketing campaigns</span>.</>
                      )}
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      {/* Lenovo with Ranking */}
                      <div className="bg-white/70 rounded-xl p-4 border border-blue-200/30">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                              L
                            </div>
                            <span className="font-semibold text-foreground">Lenovo</span>
                            <Badge variant="outline" className={`${
                              trackerData[selectedTracker]?.lenovo.rank === 1 ? "bg-green-100 text-green-700 border-green-300" :
                              trackerData[selectedTracker]?.lenovo.rank === 2 ? "bg-blue-100 text-blue-700 border-blue-300" :
                              trackerData[selectedTracker]?.lenovo.rank === 3 ? "bg-purple-100 text-purple-700 border-purple-300" :
                              "bg-orange-100 text-orange-700 border-orange-300"
                            }`}>
                              Rank #{trackerData[selectedTracker]?.lenovo.rank || 4}
                            </Badge>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-sm text-gray-600 font-medium">Unaided Awareness</div>
                            <div className="text-lg font-bold text-foreground">{trackerData[selectedTracker]?.lenovo.awareness || 34.2}%</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600 font-medium">Unaided Consideration</div>
                            <div className="text-lg font-bold text-foreground">{trackerData[selectedTracker]?.lenovo.consideration || 28.5}%</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600 font-medium">Unaided Preference</div>
                            <div className="text-lg font-bold text-foreground">{trackerData[selectedTracker]?.lenovo.preference || 41.8}%</div>
                          </div>
                        </div>
                      </div>

                      {/* Competitive Brands */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-foreground">Competition Overview</h5>
                        
                        {trackerData[selectedTracker]?.competitors.map((competitor, index) => (
                          <div key={competitor.name} className="bg-white/50 rounded-lg p-4 border border-neutral-200/50">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded flex items-center justify-center text-white font-bold text-xs ${
                                  competitor.name === 'HP' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                                  competitor.name === 'Dell' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                                  competitor.name === 'Apple' ? 'bg-gradient-to-br from-gray-600 to-gray-700' :
                                  competitor.name === 'ASUS' ? 'bg-gradient-to-br from-purple-600 to-purple-700' :
                                  competitor.name === 'Samsung' ? 'bg-gradient-to-br from-indigo-600 to-indigo-700' :
                                  'bg-gradient-to-br from-gray-500 to-gray-600'
                                }`}>
                                  {competitor.logo}
                                </div>
                                <span className="font-medium text-foreground">{competitor.name}</span>
                                <Badge variant="outline" className={`text-xs ${
                                  competitor.rank === 1 ? "bg-green-100 text-green-700 border-green-300" :
                                  competitor.rank === 2 ? "bg-blue-100 text-blue-700 border-blue-300" :
                                  competitor.rank === 3 ? "bg-purple-100 text-purple-700 border-purple-300" :
                                  "bg-orange-100 text-orange-700 border-orange-300"
                                }`}>
                                  Rank #{competitor.rank}
                                </Badge>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center">
                                <div className="text-xs text-gray-600">Unaided Awareness</div>
                                <div className="text-sm font-bold text-foreground">{competitor.awareness}%</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs text-gray-600">Unaided Consideration</div>
                                <div className="text-sm font-bold text-foreground">{competitor.consideration}%</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs text-gray-600">Unaided Preference</div>
                                <div className="text-sm font-bold text-foreground">{competitor.preference}%</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200/50">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <ThumbsUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-base text-muted-foreground leading-relaxed">
                        In the last six months, there has been a marginal increase in unaided preference which is driven by increase in preference from recent buyers.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Key Performance Indicators
                  </h4>
                  
                  {selectedTracker === "consumer-pc" ? (
                    <div className="grid gap-4">
                      <div className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] rounded-2xl p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300/70 animate-fade-in cursor-pointer hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                            1
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                              Unaided brand awareness showed an increase of{" "}
                              <span className="inline-flex items-center gap-1 font-bold text-green-600 text-lg group-hover:scale-105 transition-transform duration-300">
                                <TrendingUp className="w-4 h-4 group-hover:animate-bounce" />
                                3%
                              </span> enhanced by better marketing campaigns which were more focused towards certain sub-brands of Lenovo
                            </div>
                          </div>
                        </div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 rounded-2xl -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out"></div>
                      </div>

                      <div className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 hover:border-blue-300/70 animate-fade-in cursor-pointer hover-lift" style={{animationDelay: '100ms'}}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                            2
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                              Lenovo still ranks behind the top three brands HP, Dell and Apple on Unaided consideration and still has a large gap to fill when compared to key competition.
                            </div>
                          </div>
                        </div>
                         {/* Shimmer effect */}
                         <div className="absolute inset-0 rounded-2xl -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out"></div>
                       </div>
                     </div>
                  ) : selectedTracker === "commercial-pc" ? (
                    <div className="grid gap-4">
                      <div className="group hover:shadow-medium transition-all duration-300 rounded-2xl p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            1
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed">
                              Commercial PC B2B awareness improved with{" "}
                              <span className="inline-flex items-center gap-1 font-bold text-green-600 text-lg">
                                <TrendingUp className="w-4 h-4" />
                                +9.7%
                              </span> increase in enterprise recognition reaching{" "}
                              <span className="font-bold text-foreground text-lg">38.7%</span> driven by strategic partnerships and enterprise solutions
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group hover:shadow-medium transition-all duration-300 rounded-2xl p-6 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            2
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed">
                              Enterprise consideration metrics showed{" "}
                              <span className="inline-flex items-center gap-1 font-bold text-green-600 text-lg">
                                <TrendingUp className="w-4 h-4" />
                                +11.4%
                              </span> growth reaching{" "}
                              <span className="font-bold text-foreground text-lg">31.2%</span>, with strong performance in productivity and security positioning
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group hover:shadow-medium transition-all duration-300 rounded-2xl p-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            3
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed">
                              Commercial preference improved by{" "}
                              <span className="inline-flex items-center gap-1 font-bold text-green-600 text-lg">
                                <TrendingUp className="w-4 h-4" />
                                +6.2%
                              </span> to{" "}
                              <span className="font-bold text-foreground text-lg">35.4%</span> through enterprise-focused innovations and workplace productivity solutions
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      <div className="group hover:shadow-medium transition-all duration-300 rounded-2xl p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            1
                          </div>
                          <div className="flex-1">
                             <div className="text-base text-gray-700 leading-relaxed">
                              Brand awareness campaigns showed strong performance with{" "}
                              <span className="inline-flex items-center gap-1 font-bold text-green-600 text-lg">
                                <TrendingUp className="w-4 h-4" />
                                +12.3%
                              </span> increase in unaided awareness and{" "}
                              <span className="font-bold text-foreground text-lg">34.2%</span> total awareness score
                            </div>
                          </div>
                        </div>
                      </div>
                     </div>
                   )}
                 </div>
               </div>
             )}
           </CardContent>
         </Card>
       </div>
     </AppLayout>
   );
 };
 
 export default Index;
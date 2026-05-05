import { useState } from "react";
import { Link } from "react-router-dom";
import { format, addDays, startOfMonth, endOfMonth } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Search, 
  Bot, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  FileText, 
  HelpCircle, 
  BarChart3, 
  Zap, 
  Brain,
  Monitor,
  Gamepad2,
  Building,
  Tablet,
  Server,
  Users,
  Package,
  Activity,
  Target,
  Lightbulb,
  ChevronRight,
  MessageCircle,
  X,
  Filter,
  ChevronDown,
  TrendingDown,
  ExternalLink,
  Share2,
  MessageSquare,
  Flag,
  FileDown,
  Presentation,
  Play,
  Eye
} from "lucide-react";

const TrackerPlatform = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showBot, setShowBot] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("Unaided Consideration");

  const navigationItems = [
    { id: "overview", name: "C5i Discovery", icon: BarChart3 },
    { id: "knowledge", name: "Knowledge Hub", icon: FileText },
    { id: "analytics", name: "Analytics Hub", icon: Activity },
    { id: "intelligence", name: "Intelligence", icon: Brain }
  ];

  // Enhanced KPI data with proper semantic colors
  const kpiData = [
    { 
      name: "Consumer PC", 
      value: "85%", 
      change: "+2.3%", 
      previousValue: "82.7%",
      icon: Monitor, 
      colorClass: "from-primary to-blue-600",
      bgClass: "bg-primary/10",
      trend: "up",
      reportId: "consumer-pc-report"
    },
    { 
      name: "Gaming PC", 
      value: "92%", 
      change: "+5.1%", 
      previousValue: "86.9%",
      icon: Gamepad2, 
      colorClass: "from-success to-green-600",
      bgClass: "bg-success/10",
      trend: "up",
      reportId: "gaming-pc-report"
    },
    { 
      name: "Commercial PC", 
      value: "78%", 
      change: "-1.2%", 
      previousValue: "79.2%",
      icon: Building, 
      colorClass: "from-warning to-amber-600",
      bgClass: "bg-warning/10",
      trend: "down",
      reportId: "commercial-pc-report"
    },
    { 
      name: "Tablet PC", 
      value: "76%", 
      change: "+3.4%", 
      previousValue: "72.6%",
      icon: Tablet, 
      colorClass: "from-info to-cyan-600",
      bgClass: "bg-info/10",
      trend: "up",
      reportId: "tablet-pc-report"
    },
    { 
      name: "ISG", 
      value: "88%", 
      change: "+1.8%", 
      previousValue: "86.2%",
      icon: Server, 
      colorClass: "from-purple to-violet-600",
      bgClass: "bg-purple/10",
      trend: "up",
      reportId: "isg-report"
    },
    { 
      name: "Corporate Tracker", 
      value: "82%", 
      change: "+0.9%", 
      previousValue: "81.1%",
      icon: Target, 
      colorClass: "from-pink to-rose-600",
      bgClass: "bg-pink/10",
      trend: "up",
      reportId: "corporate-tracker-report"
    },
    { 
      name: "Commercial End Users", 
      value: "79%", 
      change: "+2.1%", 
      previousValue: "76.9%",
      icon: Users, 
      colorClass: "from-teal to-emerald-600",
      bgClass: "bg-teal/10",
      trend: "up",
      reportId: "commercial-end-users-report"
    }
  ];

  // Enhanced calendar with better colors and shading - dynamic dates
  const currentDate = new Date();
  const surveyStages = {
    [format(addDays(currentDate, 1), "yyyy-MM-dd")]: { 
      stage: "Data Collection", 
      project: "Consumer Electronics Survey", 
      color: "bg-blue-600", 
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    [format(addDays(currentDate, 2), "yyyy-MM-dd")]: { 
      stage: "Data Collection", 
      project: "Smart Home Technology Study", 
      color: "bg-blue-600", 
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    [format(addDays(currentDate, 13), "yyyy-MM-dd")]: { 
      stage: "Analysis", 
      project: "Mobile Device Market Analysis", 
      color: "bg-amber-600", 
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      borderColor: "border-amber-300"
    },
    [format(addDays(currentDate, 16), "yyyy-MM-dd")]: { 
      stage: "Analysis", 
      project: "Commercial PC Market Analysis", 
      color: "bg-amber-600", 
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      borderColor: "border-amber-300"
    },
    [format(addDays(currentDate, 18), "yyyy-MM-dd")]: { 
      stage: "Review", 
      project: "ISG Infrastructure Report", 
      color: "bg-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-400"
    },
    [format(addDays(currentDate, 19), "yyyy-MM-dd")]: { 
      stage: "Review", 
      project: "Enterprise Software Study", 
      color: "bg-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-400"
    },
    [format(addDays(currentDate, 20), "yyyy-MM-dd")]: { 
      stage: "Publication", 
      project: "Corporate Tracker Release", 
      color: "bg-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300"
    },
    [format(addDays(currentDate, 23), "yyyy-MM-dd")]: { 
      stage: "Data Collection", 
      project: "Consumer PC Holiday Survey", 
      color: "bg-blue-600", 
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    [format(addDays(currentDate, 26), "yyyy-MM-dd")]: { 
      stage: "Analysis", 
      project: "Tablet PC Innovation Study", 
      color: "bg-amber-600", 
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      borderColor: "border-amber-300"
    },
    [format(addDays(currentDate, 12), "yyyy-MM-dd")]: { 
      stage: "Review", 
      project: "End User Adoption Research", 
      color: "bg-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-400"
    },
    [format(addDays(currentDate, 14), "yyyy-MM-dd")]: { 
      stage: "Publication", 
      project: "Q4 Market Summary", 
      color: "bg-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300"
    },
    [format(addDays(currentDate, 17), "yyyy-MM-dd")]: { 
      stage: "Data Collection", 
      project: "Enterprise Demand Study", 
      color: "bg-blue-600", 
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    [format(addDays(currentDate, 21), "yyyy-MM-dd")]: { 
      stage: "Review", 
      project: "Premium Segment Analysis", 
      color: "bg-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-400"
    },
    [format(addDays(currentDate, 24), "yyyy-MM-dd")]: { 
      stage: "Publication", 
      project: "Annual Technology Trends", 
      color: "bg-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300"
    },
    [format(addDays(currentDate, 11), "yyyy-MM-dd")]: { 
      stage: "Data Collection", 
      project: "Market Research Survey", 
      color: "bg-blue-600", 
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    [format(addDays(currentDate, 15), "yyyy-MM-dd")]: { 
      stage: "Analysis", 
      project: "Consumer Behavior Study", 
      color: "bg-amber-600", 
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      borderColor: "border-amber-300"
    },
    [format(addDays(currentDate, 22), "yyyy-MM-dd")]: { 
      stage: "Review", 
      project: "Holiday Sales Impact", 
      color: "bg-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-400"
    },
    [format(addDays(currentDate, 25), "yyyy-MM-dd")]: { 
      stage: "Publication", 
      project: "Year-End Summary Report", 
      color: "bg-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300"
    },
    [format(addDays(currentDate, 28), "yyyy-MM-dd")]: { 
      stage: "Publication", 
      project: "Q4 Technology Trends Report", 
      color: "bg-emerald-600", 
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300"
    }
  };

  const renderDayContent = (day: Date) => {
    const dateKey = day.toISOString().split('T')[0];
    const surveyStage = surveyStages[dateKey];
    
    if (surveyStage) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className={`
                  relative w-full h-full min-h-[2.5rem] flex items-center justify-center
                  ${surveyStage.bgColor} ${surveyStage.borderColor}
                  border-2 rounded-lg shadow-sm hover:shadow-md
                  transition-all duration-200 cursor-pointer
                  hover:scale-105 hover:z-10
                  transform-gpu
                `}
              >
                <span className="relative z-10 text-gray-800 font-semibold text-sm">
                  {day.getDate()}
                </span>
                <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${surveyStage.color} shadow-sm`}></div>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent 
              className="bg-white border border-border shadow-large z-50 max-w-xs p-0"
              side="top"
              align="center"
            >
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-3 h-3 rounded-full ${surveyStage.color}`}></div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {surveyStage.stage}
                  </span>
                </div>
                <p className="font-semibold text-foreground text-sm leading-tight">
                  {surveyStage.project}
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    
    return (
      <div className="relative w-full h-full min-h-[2.5rem] flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
        <span className="text-gray-700">{day.getDate()}</span>
      </div>
    );
  };

  const accelerators = [
    { name: "AI for CI", description: "Competitive Intelligence automation", icon: Brain },
    { name: "SPOS", description: "Sales Point of Sale insights", icon: Package },
    { name: "Synthetic Audience", description: "Audience modeling & simulation", icon: Users },
    { name: "DPOS", description: "Digital Point of Sale analytics", icon: BarChart3 },
    { name: "TXTSense", description: "Text analytics & sentiment", icon: FileText },
    { name: "AI for BI", description: "Automated reporting & insights", icon: Bot }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-large border-r border-border z-50 hidden lg:block">
        {/* User Profile Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback className="bg-gradient-primary text-white">JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">John Doe</h3>
              <p className="text-sm text-muted-foreground">Senior Analyst</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              item.id === "knowledge" ? (
                <Link key={item.id} to="/knowledge-hub">
                  <button
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-muted-foreground hover:bg-accent hover:text-accent-foreground`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? "bg-gradient-primary text-white shadow-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              )
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden bg-white border-b border-border p-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold text-primary hover:opacity-80 transition-opacity">Tracker Platform</Link>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-40 hidden lg:block">
          <div className="px-4 sm:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  Tracker Intelligence Platform
                </Link>
                <p className="text-muted-foreground text-sm">Single Source of Truth for Market Research</p>
              </div>
              
              {/* Global Search */}
              <div className="flex-1 max-w-xl mx-4 sm:mx-8 hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search across all trackers, reports, and insights..." 
                    className="pl-10 bg-white border-border shadow-soft"
                  />
                </div>
              </div>

              <Button className="bg-gradient-primary shadow-medium hidden sm:flex">
                <Play className="w-4 h-4 mr-2" />
                Simulation
              </Button>
            </div>
          </div>
        </header>

        {/* Filters Section */}
        <section className="px-4 sm:px-8 py-4 bg-white border-b border-border hidden lg:block">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  {selectedMetric}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border shadow-large z-50">
                <DropdownMenuItem onClick={() => setSelectedMetric("Unaided Consideration")}>
                  Unaided Consideration
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedMetric("Unaided Awareness")}>
                  Unaided Awareness
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedMetric("Unaided Preference")}>
                  Unaided Preference
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto sm:ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Region:</span> All
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-border shadow-large z-50">
                  <DropdownMenuItem>All Regions</DropdownMenuItem>
                  <DropdownMenuItem>North America</DropdownMenuItem>
                  <DropdownMenuItem>Europe</DropdownMenuItem>
                  <DropdownMenuItem>Asia Pacific</DropdownMenuItem>
                  <DropdownMenuItem>Latin America</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Country:</span> All
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-border shadow-large z-50">
                  <DropdownMenuItem>All Countries</DropdownMenuItem>
                  <DropdownMenuItem>United States</DropdownMenuItem>
                  <DropdownMenuItem>Canada</DropdownMenuItem>
                  <DropdownMenuItem>United Kingdom</DropdownMenuItem>
                  <DropdownMenuItem>Germany</DropdownMenuItem>
                  <DropdownMenuItem>France</DropdownMenuItem>
                  <DropdownMenuItem>Japan</DropdownMenuItem>
                  <DropdownMenuItem>China</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        {/* KPI Row - Infographic Style */}
        <section className="px-4 sm:px-8 py-6 bg-white border-b border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {kpiData.map((kpi, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in hover-lift"
                style={{animationDelay: `${index * 100}ms`}}
                onClick={() => window.open(`/reports/${kpi.reportId}`, '_blank')}
              >
                <div className={`absolute inset-0 ${kpi.bgClass} group-hover:opacity-40 transition-opacity duration-300`}></div>
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    {/* Enhanced Donut Chart with Animation */}
                    <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="transparent"
                          stroke="#e5e7eb"
                          strokeWidth="4"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray={`${parseInt(kpi.value)} 100`}
                          strokeLinecap="round"
                          className={`transition-all duration-700 ease-out ${kpi.colorClass.includes('primary') ? 'text-primary group-hover:drop-shadow-lg' : 
                                       kpi.colorClass.includes('success') ? 'text-success group-hover:drop-shadow-lg' :
                                       kpi.colorClass.includes('warning') ? 'text-warning group-hover:drop-shadow-lg' :
                                       kpi.colorClass.includes('info') ? 'text-info group-hover:drop-shadow-lg' :
                                       kpi.colorClass.includes('purple') ? 'text-purple group-hover:drop-shadow-lg' :
                                       kpi.colorClass.includes('pink') ? 'text-pink group-hover:drop-shadow-lg' : 'text-teal group-hover:drop-shadow-lg'}`}
                          style={{
                            strokeDasharray: `${parseInt(kpi.value)} 100`,
                            strokeDashoffset: `100`,
                            animation: `draw-${index} 1.5s ease-out forwards`
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-foreground group-hover:scale-110 transition-transform duration-300">{kpi.value}</span>
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping bg-current transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                      {kpi.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-success group-hover:animate-bounce" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive group-hover:animate-bounce" />
                      )}
                      <Badge variant={kpi.trend === "up" ? "default" : "destructive"} className="text-xs group-hover:shadow-lg transition-shadow duration-300">
                        {kpi.change}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide group-hover:text-foreground transition-colors duration-300">
                      {kpi.name}
                    </div>
                  </div>
                  {/* Enhanced Report link indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 lg:p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Insights & Calendar Row */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                {/* Key Insights */}
                <Card className="xl:col-span-2 shadow-soft h-[600px] flex flex-col">
                  <CardHeader className="border-b border-border flex-shrink-0">
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-warning" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 overflow-y-auto space-y-4">
                    <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 border-l-4 border-success rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Gaming PC Market Surge</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Gaming PC segment shows strongest growth at +5.1%, driven by premium GPU adoption
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Sources:</span>
                            <a href="/deep-dive/gaming-pc-gpu-trends" className="text-primary hover:underline">1</a>
                            <a href="/deep-dive/gaming-market-analysis" className="text-primary hover:underline">2</a>
                            <a href="/deep-dive/premium-segment-growth" className="text-primary hover:underline">3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Flag className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-warning/10 to-warning/5 border-l-4 border-warning rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Commercial PC Stabilization</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            After Q2 decline, commercial segment showing signs of recovery in enterprise demand
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Sources:</span>
                            <a href="/deep-dive/commercial-pc-recovery" className="text-primary hover:underline">1</a>
                            <a href="/deep-dive/enterprise-demand-trends" className="text-primary hover:underline">2</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Flag className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-info/10 to-info/5 border-l-4 border-info rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Tablet PC Innovation Impact</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            New form factors driving +3.4% growth in tablet PC market share
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Sources:</span>
                            <a href="/deep-dive/tablet-innovation-trends" className="text-primary hover:underline">1</a>
                            <a href="/deep-dive/form-factor-analysis" className="text-primary hover:underline">2</a>
                            <a href="/deep-dive/tablet-market-growth" className="text-primary hover:underline">3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Flag className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple/10 to-purple/5 border-l-4 border-purple rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">ISG Server Demand Rising</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Infrastructure spending increases drive +1.8% growth in ISG segment performance
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Sources:</span>
                            <a href="/deep-dive/infrastructure-spending" className="text-primary hover:underline">1</a>
                            <a href="/deep-dive/isg-performance-metrics" className="text-primary hover:underline">2</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Flag className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-teal/10 to-teal/5 border-l-4 border-teal rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Commercial End Users Adoption</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Remote work trends boost commercial end user tracker performance by +2.1%
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Sources:</span>
                            <a href="/deep-dive/remote-work-impact" className="text-primary hover:underline">1</a>
                            <a href="/deep-dive/commercial-user-trends" className="text-primary hover:underline">2</a>
                            <a href="/deep-dive/workplace-technology-adoption" className="text-primary hover:underline">3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Flag className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Calendar */}
                <Card className="shadow-soft h-[600px] flex flex-col">
                  <CardHeader className="border-b border-border flex-shrink-0">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                      Survey Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-col gap-6 flex-1">
                      {/* Calendar */}
                      <div className="flex-1">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border border-border shadow-soft pointer-events-auto w-full mx-auto"
                          components={{
                            DayContent: ({ date }) => renderDayContent(date)
                          }}
                        />
                      </div>
                      
                      {/* Legends */}
                      <div className="mt-4">
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">Stage Legend</h4>
                        <div className="grid grid-cols-4 gap-3">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span>Data Collection</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0"></div>
                            <span>Analysis</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-purple-900 rounded-full flex-shrink-0"></div>
                            <span>Review</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-emerald-600 rounded-full flex-shrink-0"></div>
                            <span>Publication</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Pipeline Status Row */}
              <Card className="shadow-soft">
                <CardHeader className="border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Project Pipeline Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Progress</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        </TableCell>
                        <TableCell className="font-medium">Gaming PC Tracker Q1 2025</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            Approval Pending
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">25%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </TableCell>
                        <TableCell className="font-medium">Commercial PC Tracker</TableCell>
                        <TableCell>
                          <Badge variant="default" className="text-xs bg-blue-100 text-blue-700">
                            In Progress
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">65%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        </TableCell>
                        <TableCell className="font-medium">Tablet PC Tracker</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-700">
                            Resource Allocation
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">15%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </TableCell>
                        <TableCell className="font-medium">Consumer PC Tracker</TableCell>
                        <TableCell>
                          <Badge variant="default" className="text-xs bg-green-100 text-green-700">
                            Ready to Launch
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">95%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Latest Reports */}
              <Card className="shadow-soft">
                <CardHeader className="border-b border-border">
                  <CardTitle>This Quarter's Latest Reports</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Monitor className="w-6 h-6 text-primary" />
                          <h4 className="font-semibold">Consumer PC</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Q4 2024 Report</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Presentation className="w-3 h-3" />
                            PPT
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <FileDown className="w-3 h-3" />
                            PDF
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Gamepad2 className="w-6 h-6 text-success" />
                          <h4 className="font-semibold">Gaming PC</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Q4 2024 Report</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Presentation className="w-3 h-3" />
                            PPT
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <FileDown className="w-3 h-3" />
                            PDF
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Server className="w-6 h-6 text-purple" />
                          <h4 className="font-semibold">ISG</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Q4 2024 Report</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Presentation className="w-3 h-3" />
                            PPT
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <FileDown className="w-3 h-3" />
                            PDF
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="w-6 h-6 text-pink" />
                          <h4 className="font-semibold">Corporate Tracker</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Q4 2024 Report</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Presentation className="w-3 h-3" />
                            PPT
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <FileDown className="w-3 h-3" />
                            PDF
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "accelerators" && (
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader className="border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-warning" />
                    AI Accelerators Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {accelerators.map((accelerator, index) => (
                      <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow group cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium">
                              <accelerator.icon className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">{accelerator.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{accelerator.description}</p>
                          <Button className="w-full bg-gradient-primary shadow-medium group-hover:shadow-large transition-shadow">
                            Launch Tool
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "overview" && activeTab !== "accelerators" && (
            <Card className="shadow-soft">
              <CardHeader className="border-b border-border">
                <CardTitle className="capitalize">{activeTab}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8" />
                  </div>
                  <p>Content for {activeTab} coming soon...</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Floating AI Bot */}
      {showBot && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-large border border-border z-50">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">AI Assistant</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowBot(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-80 flex flex-col">
            <div className="flex-1 bg-muted/20 rounded-lg p-3 mb-3 overflow-y-auto">
              <div className="text-sm text-muted-foreground">
                Hello! I'm your AI assistant. How can I help you today?
              </div>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Ask me anything..." className="flex-1" />
              <Button size="icon" className="bg-gradient-primary">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI Bot Toggle */}
      <Button
        onClick={() => setShowBot(!showBot)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-primary shadow-large hover:shadow-xl transition-shadow z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default TrackerPlatform;
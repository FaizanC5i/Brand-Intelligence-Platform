import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/AppLayout";
import NewsFeed from "@/components/NewsFeed";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  Presentation, 
  FileSpreadsheet, 
  Image, 
  Calendar,
  MapPin,
  ChevronDown,
  Upload,
  Plus,
  User,
  Users,
  BarChart3,
  Lightbulb,
  MessageCircle,
  Bot,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Activity,
  Send,
  CheckCircle
} from "lucide-react";
import audienceHubImage from "@/assets/audience-hub.jpg";
import measurementHubImage from "@/assets/measurement-hub.jpg";
import insightsHubImage from "@/assets/insights-hub.jpg";
import { useToast } from "@/hooks/use-toast";

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [isBotModalOpen, setIsBotModalOpen] = useState(false);
  const [superSearch, setSuperSearch] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your Research Assistant. I can help you find insights, analyze data patterns, and answer questions about your knowledge base. What would you like to explore today?",
      timestamp: new Date(),
      insights: [],
      references: []
    }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [exportingToPPT, setExportingToPPT] = useState<number | null>(null);
  const { toast } = useToast();

  const phaseOptions = [
    { value: "all", label: "All Content" },
    { value: "questionnaire", label: "Questionnaire" },
    { value: "published-reports", label: "Published Reports" },
    { value: "banners", label: "Banner Files" },
    { value: "raw-data", label: "Raw Data" },
    { value: "research-brief", label: "Research Brief" }
  ];

  const hubSections = [
    {
      id: "audience",
      title: "Audience Hub",
      description: "Deep dive into consumer insights, demographic analysis, and market segmentation data. Access comprehensive audience research, behavioral studies, and customer journey mapping tools.",
      image: audienceHubImage,
      icon: Users,
      color: "bg-gradient-primary",
      borderColor: "border-blue-200",
      bgColor: "from-blue-50 to-cyan-50",
      features: ["Consumer Segmentation", "Behavioral Analytics", "Journey Mapping", "Survey Tools"],
      stats: { reports: 156, insights: 89, tools: 12 }
    },
    {
      id: "measurement",
      title: "Brand & Reputation Tracking", 
      description: "Comprehensive measurement frameworks, KPI tracking systems, and performance analytics. Monitor campaign effectiveness, ROI metrics, and business intelligence insights.",
      image: measurementHubImage,
      icon: BarChart3,
      color: "bg-gradient-secondary",
      borderColor: "border-purple-200",
      bgColor: "from-purple-50 to-indigo-50",
      features: ["KPI Dashboards", "ROI Analytics", "Performance Tracking", "Business Intelligence"],
      stats: { reports: 234, insights: 145, tools: 18 }
    },
    {
      id: "insights",
      title: "Insights Hub",
      description: "Strategic intelligence, market trends, and predictive analytics. Discover emerging opportunities, competitive intelligence, and data-driven recommendations.",
      image: insightsHubImage,
      icon: Lightbulb,
      color: "bg-gradient-warm",
      borderColor: "border-orange-200",
      bgColor: "from-orange-50 to-red-50",
      features: ["Market Intelligence", "Trend Analysis", "Predictive Models", "Strategic Reports"],
      stats: { reports: 198, insights: 267, tools: 15 }
    }
  ];

  const otherResources = [
    { name: "CX Portal", description: "Customer Experience Hub", link: "#", icon: Target },
    { name: "MI Knowledge Center", description: "Market Intelligence", link: "#", icon: Activity },
    { name: "DOMO", description: "Business Intelligence", link: "#", icon: BarChart3 },
    { name: "UX Research", description: "User Experience Studies", link: "#", icon: Eye }
  ];

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      content: currentInput,
      timestamp: new Date(),
      insights: [],
      references: []
    };

    // Simulate AI response with insights and references
    const aiResponse = {
      id: chatMessages.length + 2,
      type: "assistant" as const,
      content: generateAIResponse(currentInput),
      timestamp: new Date(),
      insights: generateInsights(currentInput),
      references: generateReferences(currentInput)
    };

    setChatMessages([...chatMessages, userMessage, aiResponse]);
    setCurrentInput("");
  };

  const generateAIResponse = (query: string) => {
    const responses = {
      "unaided consideration": "45% in Unaided Brand Consideration, ranking #4 in the market with +0.3% YoY growth",
      "unaided preference": "6% with 0% year-over-year change",
      "trust compared": "Lenovo scores 32% on \"Brand I can trust\" vs 38% market average (-6% difference)",
      "strongest brand attribute": "\"Provides good value for money\" at 37% (+0.1% vs market average). 2% Year-over-year change",
      "net promoter score": "NPS: 47 (with 59% promoters, 29% passives, 12% detractors) and +2% year-over-year change",
      "gaming": "Based on our latest research data, the gaming PC market is experiencing significant growth with a 34% increase in premium segment demand. Key trends include AI-enhanced gaming features and high-refresh displays.",
      "ai pc": "AI PC adoption has surged by 340% in enterprise environments. Organizations are primarily investing in productivity-focused AI capabilities and enhanced security features.",
      "consumer sentiment": "Recent sentiment analysis reveals 78% positive reception for AI-powered features, with particular enthusiasm in the 25-35 demographic for productivity and creative applications.",
      "default": "I've analyzed the available data and found several relevant insights. The market trends show strong momentum across key segments with notable consumer preference shifts toward AI-enabled solutions."
    };

    const key = Object.keys(responses).find(k => query.toLowerCase().includes(k)) || "default";
    return responses[key as keyof typeof responses];
  };

  const generateInsights = (query: string) => {
    return [
      { text: "Market growth acceleration detected", confidence: 92 },
      { text: "Consumer preference shift identified", confidence: 87 },
      { text: "Competitive landscape evolution", confidence: 89 }
    ];
  };

  const generateReferences = (query: string) => {
    return [
      { text: "Q4 2024 Gaming Market Report", url: "#", source: "Gaming Research Institute" },
      { text: "AI PC Adoption Study", url: "#", source: "Technology Insights Lab" },
      { text: "Consumer Sentiment Analysis", url: "#", source: "Market Intelligence Center" }
    ];
  };

  const handleExportToPowerPoint = async (messageId: number) => {
    setExportingToPPT(messageId);
    
    try {
      // Simulate PowerPoint generation process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const message = chatMessages.find(m => m.id === messageId);
      if (!message) return;

      // Create PowerPoint content structure
      const pptData = {
        title: "Research Assistant Summary",
        timestamp: message.timestamp.toLocaleDateString(),
        content: message.content,
        insights: message.insights,
        references: message.references,
        slides: [
          {
            title: "Executive Summary",
            content: message.content
          },
          {
            title: "Key Insights",
            content: message.insights.map(insight => `• ${insight.text} (${insight.confidence}% confidence)`).join("\n")
          },
          {
            title: "Supporting References",
            content: message.references.map((ref, idx) => `[${idx + 1}] ${ref.text} - ${ref.source}`).join("\n")
          }
        ]
      };

      // In a real implementation, this would call an API to generate the PowerPoint
      console.log("Generating PowerPoint with data:", pptData);
      
      toast({
        title: "PowerPoint Export Complete",
        description: "Your research summary has been exported to PowerPoint format. Download will start shortly.",
      });

      // Simulate file download
      const blob = new Blob([JSON.stringify(pptData, null, 2)], { 
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" 
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `research-summary-${Date.now()}.pptx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting to PowerPoint. Please try again.",
        variant: "destructive"
      });
    } finally {
      setExportingToPPT(null);
    }
  };

  return (
    <AppLayout 
      title="Knowledge Hub"
      subtitle="Centralized intelligence platform for research and insights"
      showGlobalSearch={false}
    >
      <div className="p-8 space-y-8">
        {/* Enhanced Search Section */}
        <Card className="card-modern border-0 shadow-large">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input 
                  placeholder={superSearch ? "Search by keyword, or supersearch across all hubs..." : "Search by keyword, or supersearch"}
                  className="input-modern pl-16 pr-24 h-16 text-lg border-2 hover:border-primary/30 focus:border-primary transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <Button 
                    variant={superSearch ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSuperSearch(!superSearch)}
                    className={`h-8 px-3 font-medium transition-all ${
                      superSearch 
                        ? "bg-gradient-primary text-white shadow-colored" 
                        : "hover:bg-primary/10 hover:border-primary/20"
                    }`}
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    SuperSearch
                  </Button>
                </div>
              </div>
              
              {/* Phase Filter */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Label htmlFor="phase-filter" className="text-sm font-medium text-foreground">
                    Filter by Content Type:
                  </Label>
                  <Select value={selectedPhase} onValueChange={setSelectedPhase}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select phase" />
                    </SelectTrigger>
                    <SelectContent>
                      {phaseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {selectedPhase !== "all" && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Filter className="w-3 h-3 mr-1" />
                    {phaseOptions.find(p => p.value === selectedPhase)?.label}
                  </Badge>
                )}
              </div>
              
              {superSearch && (
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 border border-primary/20 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">SuperSearch Activated</h4>
                      <p className="text-sm text-muted-foreground">
                        Now searching across all hubs, documents, insights, and historical data with AI-powered semantic matching.
                        {selectedPhase !== "all" && (
                          <span className="font-medium"> Filtered by: {phaseOptions.find(p => p.value === selectedPhase)?.label}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Stats & Quick Actions */}
        <Card className="card-modern border-0 bg-gradient-to-br from-neutral-50 to-white shadow-large">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Enhanced Metrics */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold gradient-text">Repository Analytics</h2>
                    <p className="text-muted-foreground">Real-time knowledge metrics</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 hover-lift transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text mb-1 animate-scale-in">588</div>
                    <div className="text-sm text-muted-foreground font-medium">Total Reports</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      +12 this week
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200/50 hover-lift transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text mb-1 animate-scale-in">501</div>
                    <div className="text-sm text-muted-foreground font-medium">Insights Generated</div>
                    <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      +28 this week
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 hover-lift transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text mb-1 animate-scale-in">45</div>
                    <div className="text-sm text-muted-foreground font-medium">Research Tools</div>
                    <div className="text-xs text-blue-600 flex items-center justify-center gap-1 mt-1">
                      <Activity className="w-3 h-3" />
                      6 active now
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-glow transition-all duration-300 h-16 text-base"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Documents
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-16 text-base"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Reports
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem className="text-blue-700 hover:bg-blue-50">
                        <FileText className="w-4 h-4 mr-2 text-blue-600" />
                        Audience Reports (PDF)
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-purple-700 hover:bg-purple-50">
                        <FileSpreadsheet className="w-4 h-4 mr-2 text-purple-600" />
                        Analytics Data (Excel)
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-orange-700 hover:bg-orange-50">
                        <Presentation className="w-4 h-4 mr-2 text-orange-600" />
                        Insights Deck (PPT)
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-green-700 hover:bg-green-50">
                        <Image className="w-4 h-4 mr-2 text-green-600" />
                        Visual Assets (ZIP)
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {/* Hidden file input */}
                <input 
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      console.log('Files selected:', e.target.files);
                      // Handle file upload logic here
                    }
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content with Expanded Research Assistant */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {/* Main Hub Sections */}
            <div className="grid gap-6">
              {hubSections.map((hub) => {
                const IconComponent = hub.icon;
                return (
                  <Card key={hub.id} className={`card-modern hover-lift hover-glow group cursor-pointer border-0 bg-gradient-to-r ${hub.bgColor} border ${hub.borderColor}`}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 ${hub.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {hub.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{hub.stats.reports} reports</span>
                                <span>{hub.stats.insights} insights</span>
                                <span>{hub.stats.tools} tools</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {hub.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {hub.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="bg-white/70 text-foreground">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button 
                            className="btn-primary group-hover:shadow-glow transition-all"
                            onClick={() => window.location.href = `/hub/${hub.id}`}
                          >
                            Explore {hub.title}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        
                        <div className="relative">
                          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                            <img 
                              src={hub.image} 
                              alt={hub.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Expanded Research Assistant */}
          <div className="lg:col-span-2">
            <Card className="card-modern border-0 relative overflow-hidden h-full shadow-2xl">
              {/* Animated Dark Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/30"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-600/20 to-transparent rounded-full blur-2xl transform -translate-x-24 translate-y-24"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute top-32 right-16 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 right-8 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              <CardContent className="relative z-10 p-10 h-full flex flex-col">
                <div className="space-y-8 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white drop-shadow-sm">Research Assistant</h4>
                      <p className="text-base text-white/80 drop-shadow-sm">AI-powered insights & analysis</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-white/90 leading-relaxed drop-shadow-sm">
                      Get instant answers, generate comprehensive summaries, discover hidden patterns in your research data, and export findings directly to PowerPoint presentations.
                    </p>
                    
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-lg border border-white/30">
                      <h5 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-slate-600" />
                        What I can help with:
                      </h5>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { icon: "📊", text: "Analyze market trends and consumer behavior patterns" },
                          { icon: "📝", text: "Generate detailed research summaries with insights" }, 
                          { icon: "🔍", text: "Find relevant documents and cross-reference data" },
                          { icon: "📈", text: "Create data-driven recommendations and forecasts" },
                          { icon: "📋", text: "Export findings to PowerPoint automatically with structured slides" },
                          { icon: "🤖", text: "Provide real-time answers with confidence scoring" }
                        ].map((capability, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200/50 hover:from-slate-100 hover:to-gray-100 transition-colors">
                            <span className="text-lg flex-shrink-0">{capability.icon}</span>
                            <span className="text-sm text-gray-700 font-medium">{capability.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
                      <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Quick Start Examples:
                      </h5>
                      <div className="space-y-2">
                        {[
                          "What are the latest gaming PC market trends?",
                          "Summarize AI PC adoption in enterprise",
                          "Generate consumer sentiment insights"
                        ].map((example, idx) => (
                          <div key={idx} className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg p-3 cursor-pointer hover:bg-white/90 hover:shadow-sm transition-all border border-gray-200/50">
                            <span className="text-gray-500">"</span>{example}<span className="text-gray-500">"</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    onClick={() => setIsBotModalOpen(true)}
                    className="w-full bg-white/15 backdrop-blur-sm hover:bg-white/25 border-2 border-white/20 hover:border-white/40 text-white hover:text-white shadow-lg hover:shadow-xl transition-all h-16 text-lg font-semibold group"
                  >
                    <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    Start Research Session
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Resources */}
        <Card className="card-modern border-0 bg-gradient-to-r from-neutral-50 to-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Other Resources</h3>
              <p className="text-muted-foreground">Explore additional tools and platforms</p>
            </div>
            
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {otherResources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <a 
                    key={resource.name}
                    href={resource.link}
                    className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-neutral-200 hover:border-primary/20"
                  >
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{resource.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Bot Modal */}
        <Dialog open={isBotModalOpen} onOpenChange={setIsBotModalOpen}>
          <DialogContent className="max-w-6xl w-[90vw] h-[90vh] glass border-neutral-200/50 flex flex-col">
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="text-xl gradient-text flex items-center gap-2">
                <Bot className="w-6 h-6" />
                Research Assistant
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 flex flex-col gap-4 overflow-hidden">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 bg-gradient-to-b from-neutral-50 to-white rounded-2xl p-6 border border-neutral-200/50 min-h-0">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.type === 'assistant' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] space-y-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`p-4 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white ml-8' 
                          : 'bg-white border border-neutral-200 shadow-sm'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      
                      {message.type === 'assistant' && message.insights.length > 0 && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                          <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" />
                            Key Insights
                          </h5>
                          <div className="space-y-2">
                            {message.insights.map((insight, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <span className="text-sm text-blue-800">{insight.text}</span>
                                <Badge className="bg-blue-100 text-blue-700">{insight.confidence}% confidence</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {message.type === 'assistant' && message.references.length > 0 && (
                        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200/50">
                          <h5 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            References
                          </h5>
                          <div className="space-y-2">
                            {message.references.map((ref, idx) => (
                              <div key={idx} className="flex items-center justify-between group">
                                <a 
                                  href={ref.url} 
                                  className="text-sm text-purple-700 hover:text-purple-900 underline underline-offset-2 hover:underline-offset-4 transition-all group-hover:font-medium"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  [{idx + 1}] {ref.text}
                                </a>
                                <span className="text-xs text-purple-600">{ref.source}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {message.type === 'assistant' && (message.insights.length > 0 || message.references.length > 0) && (
                        <div className="flex justify-end mt-3">
                          <Button
                            onClick={() => handleExportToPowerPoint(message.id)}
                            disabled={exportingToPPT === message.id}
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-black hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 text-xs px-4 py-2"
                          >
                            {exportingToPPT === message.id ? (
                              <>
                                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Presentation className="w-3 h-3 mr-2" />
                                Export to PowerPoint
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Quick Actions - Flex Shrink 0 */}
              <div className="flex-shrink-0 space-y-3 px-2">
                <h5 className="font-medium text-foreground text-sm">Quick Actions:</h5>
                <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                  {[
                    "How does Lenovo rank in unaided consideration in FY'25 in USA in the Consumer PC tracker?",
                    "What is Lenovo's unaided preference score in FY'25 amongst 18-34 yr olds in the Gaming PC tracker?",
                    "How does Lenovo perform on trust compared to market average in FY'25 in France in the Consumer PC tracker?",
                    "What is Lenovo's strongest brand attribute in UK in FY'25 in the Commercial PC tracker?",
                    "What is Lenovo's Net Promoter Score and has this scored vs last year in the Consumer PC tracker?"
                  ].map((question) => (
                    <Button 
                      key={question}
                      variant="outline" 
                      size="sm"
                      className="justify-start text-left h-auto p-3 hover:bg-primary/5 hover:border-primary/20 text-sm"
                      onClick={() => {
                        setCurrentInput(question);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      <MessageCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                      <span className="truncate">{question}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Input - Flex Shrink 0 */}
              <div className="flex-shrink-0 flex gap-3 pt-4 border-t border-neutral-200">
                <Input 
                  placeholder="Ask me anything about your research data..." 
                  className="input-modern flex-1 h-12 text-base"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-glow h-12 px-6"
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default KnowledgeHub;
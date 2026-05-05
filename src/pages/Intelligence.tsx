import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AppLayout from "@/components/layout/AppLayout";
import { 
  Brain,
  Send,
  Sparkles,
  Database,
  Users,
  Wifi,
  BarChart3,
  Globe,
  Activity,
  HelpCircle,
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  Eye,
  MessageSquare,
  Search,
  Filter,
  Star,
  Clock,
  AlertTriangle,
  User,
  UserCheck,
  LineChart,
  TrendingDown,
  Award,
  Heart,
  ThumbsUp
} from "lucide-react";

const Intelligence = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>(['synthetic', 'social']);

  const dataSources = [
    { 
      id: 'synthetic', 
      name: 'Synthetic', 
      icon: Brain, 
      description: 'AI-generated market models and simulations',
      color: 'bg-gradient-primary',
      count: '2.4M records',
      status: 'active'
    },
    { 
      id: 'social', 
      name: 'Social', 
      icon: Users, 
      description: 'Social media sentiment and trend analysis',
      color: 'bg-gradient-secondary',
      count: '156K posts/day',
      status: 'active'
    },
    { 
      id: 'primary', 
      name: 'Primary', 
      icon: Target, 
      description: 'First-hand survey and interview data',
      color: 'bg-gradient-warm',
      count: '45K responses',
      status: 'active'
    },
    { 
      id: 'telemetry', 
      name: 'Telemetry', 
      icon: Activity, 
      description: 'Device usage and performance metrics',
      color: 'bg-gradient-cool',
      count: '8.7M data points',
      status: 'active'
    },
    { 
      id: 'digital', 
      name: 'Digital', 
      icon: Globe, 
      description: 'Web analytics and digital footprint data',
      color: 'bg-gradient-secondary',
      count: '234K sessions',
      status: 'active'
    }
  ];

  const faqItems = [
    {
      question: "How does the AI intelligence engine work?",
      answer: "Our AI engine combines multiple data sources including synthetic models, social sentiment, primary research, telemetry data, and digital analytics to provide comprehensive market intelligence. It uses advanced machine learning algorithms to identify patterns, predict trends, and generate actionable insights in real-time."
    },
    {
      question: "What makes our data sources unique?",
      answer: "We leverage five distinct data sources: Synthetic data from AI models provides predictive capabilities, Social data captures real-time consumer sentiment, Primary research offers direct consumer insights, Telemetry data reveals actual usage patterns, and Digital analytics tracks online behavior across multiple touchpoints."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our predictions achieve 94% accuracy for short-term market trends (1-3 months) and 87% accuracy for long-term forecasts (6-12 months). Accuracy varies by market segment, with technology and consumer electronics showing the highest prediction reliability."
    },
    {
      question: "Can I customize the intelligence prompts?",
      answer: "Yes, you can create custom prompts tailored to your specific research needs. The system supports natural language queries and can be fine-tuned to focus on particular market segments, geographic regions, or consumer demographics."
    },
    {
      question: "How often is the data updated?",
      answer: "Data refresh rates vary by source: Social and Digital data update in real-time, Telemetry data refreshes hourly, Primary research updates as new surveys complete, and Synthetic models recalibrate daily based on new market inputs."
    }
  ];

  const reasoningExamples = [
    {
      query: "Why are AI PCs gaining traction in enterprise?",
      reasoning: [
        "Analyzed 50K+ enterprise IT decision-maker surveys (Primary)",
        "Detected 340% increase in AI-related job postings (Digital)",
        "Identified productivity claims in 85% of social discussions (Social)",
        "Correlated with hardware performance benchmarks (Telemetry)",
        "Validated predictions with market simulation models (Synthetic)"
      ],
      confidence: 94,
      conclusion: "Enterprise adoption driven by measurable productivity gains and competitive advantage in AI-enabled workflows."
    },
    {
      query: "What's driving gaming PC market growth?",
      reasoning: [
        "Tracked 23% increase in high-end GPU demand signals (Telemetry)",
        "Analyzed 156K gaming community discussions (Social)",
        "Surveyed 12K gamers on purchasing intentions (Primary)",
        "Monitored e-commerce search patterns (Digital)",
        "Modeled supply chain and demand scenarios (Synthetic)"
      ],
      confidence: 91,
      conclusion: "Growth fueled by next-gen game requirements, streaming popularity, and professional esports expansion."
    }
  ];

  const performanceMetrics = [
    {
      name: "Unaided Awareness",
      icon: Eye,
      color: "bg-red-500",
      lineColor: "stroke-red-500",
      data: [42, 46, 43, 46, 45]
    },
    {
      name: "A2C",
      icon: TrendingUp,
      color: "bg-red-400",
      lineColor: "stroke-red-400", 
      data: [70, 59, 59, 62, 58]
    },
    {
      name: "Unaided Consideration", 
      icon: ThumbsUp,
      color: "bg-blue-500",
      lineColor: "stroke-blue-500",
      data: [29, 27, 26, 29, 26]
    },
    {
      name: "C2P",
      icon: Target,
      color: "bg-blue-400", 
      lineColor: "stroke-blue-400",
      data: [17, 27, 25, 25, 24]
    },
    {
      name: "Rank",
      icon: Award,
      color: "bg-yellow-500",
      lineColor: "stroke-yellow-500",
      data: [4, 4, 4, 4, 4]
    },
    {
      name: "Unaided Preference",
      icon: Heart,
      color: "bg-green-500", 
      lineColor: "stroke-green-500",
      data: [5, 7, 6, 7, 6]
    }
  ];

  const timeLabels = ["Jun'24", "Sep'24", "Dec'24", "Mar'25", "Aug'25(Syn)"];
  const ageGroups = ["18-34 Yrs. Old", "35-55 Yrs. Old"];
  const genderGroups = ["Male", "Female"];

  const MiniLineChart = ({ data, color }: { data: number[], color: string }) => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = range === 0 ? 50 : ((maxValue - value) / range) * 80 + 10;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative w-full h-8">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            points={points}
            className={color}
          />
          {data.map((value, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = range === 0 ? 50 : ((maxValue - value) / range) * 80 + 10;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                fill="currentColor"
                className={color}
              />
            );
          })}
        </svg>
        <div className="absolute inset-x-0 -bottom-1 flex justify-between text-xs text-muted-foreground">
          {data.map((value, index) => (
            <span key={index} className="text-[10px]">{value}%</span>
          ))}
        </div>
      </div>
    );
  };

  const toggleSource = (sourceId: string) => {
    setSelectedSources(prev => 
      prev.includes(sourceId) 
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const handleSubmitPrompt = () => {
    if (!prompt.trim()) return;
    // Handle prompt submission logic here
    console.log("Submitting prompt:", prompt, "with sources:", selectedSources);
  };

  return (
    <AppLayout 
      title="Intelligence Center"
      subtitle="AI-powered market intelligence with multi-source data fusion"
    >
      <div className="p-8 space-y-8">
        {/* Prompt Interface */}
        <Card className="card-modern border-0 bg-gradient-pastel-mint">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Brain className="w-6 h-6 text-primary" />
              Ask Intelligence Engine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Textarea
                placeholder="Ask anything about market trends, consumer behavior, competitive intelligence, or future predictions..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] text-lg resize-none input-modern"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>Powered by {selectedSources.length} data sources</span>
                </div>
                <Button 
                  onClick={handleSubmitPrompt}
                  disabled={!prompt.trim()}
                  className="bg-white/20 text-foreground hover:bg-white/30 backdrop-blur-sm border-white/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Generate Intelligence
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources Selection */}
        <Card className="card-modern border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Data Sources Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {dataSources.map((source) => {
                const IconComponent = source.icon;
                const isSelected = selectedSources.includes(source.id);
                
                return (
                  <Card 
                    key={source.id}
                    className={`cursor-pointer transition-all duration-300 border-2 hover-lift ${
                      isSelected 
                        ? 'border-primary bg-primary/5 shadow-colored' 
                        : 'border-neutral-200 hover:border-primary/50'
                    }`}
                    onClick={() => toggleSource(source.id)}
                  >
                    <CardContent className="p-4 text-center space-y-3">
                      <div className={`w-12 h-12 ${source.color} rounded-2xl flex items-center justify-center mx-auto ${isSelected ? 'animate-pulse-subtle' : ''}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{source.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{source.description}</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <Badge variant={isSelected ? "default" : "outline"} className="text-xs">
                            {source.count}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Performance Analytics
            </TabsTrigger>
            <TabsTrigger value="reasoning" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Understanding Reasoning
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Live Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="card-modern border-0 bg-gradient-pastel-mint">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Quick Analytics Overview
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  For detailed performance analytics and demographic insights, visit the dedicated Analytics Hub.
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-4xl">📊</div>
                  <h3 className="text-xl font-semibold">Comprehensive Analytics Available</h3>
                  <p className="text-muted-foreground">
                    View detailed performance metrics, demographic breakdowns, and trend analysis in the Analytics Hub.
                  </p>
                  <Link to="/analytics">
                    <Button className="btn-primary">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Open Analytics Hub
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reasoning" className="space-y-6">
            <Card className="card-modern border-0">
              <CardHeader>
                <CardTitle>How Intelligence Engine Reasons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reasoningExamples.map((example, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-to-r from-neutral-50 to-white border border-neutral-200">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-foreground">{example.query}</h4>
                        <Badge className="bg-gradient-primary text-white">
                          {example.confidence}% confidence
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-foreground">Reasoning Process:</h5>
                        {example.reasoning.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                            </div>
                            <p className="text-muted-foreground">{step}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-4 bg-gradient-primary/10 rounded-xl border border-primary/20">
                        <h5 className="font-medium text-foreground mb-2">Conclusion:</h5>
                        <p className="text-foreground">{example.conclusion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card className="card-modern border-0">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-neutral-200 rounded-2xl px-6">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-modern border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Real-time Data Flow
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dataSources.map((source) => {
                    const IconComponent = source.icon;
                    return (
                      <div key={source.id} className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${source.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{source.name}</div>
                            <div className="text-sm text-muted-foreground">{source.count}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">Live</span>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="card-modern border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Quick Intelligence Queries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "What's the next big trend in PC gaming?",
                    "How will AI PCs impact enterprise market?",
                    "Which regions show highest growth potential?",
                    "What are competitors planning for Q2?",
                    "How do consumers feel about new form factors?"
                  ].map((query, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-between text-left h-auto p-4 hover:bg-primary/5 hover:border-primary/30"
                      onClick={() => setPrompt(query)}
                    >
                      <span className="text-foreground">{query}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Intelligence;
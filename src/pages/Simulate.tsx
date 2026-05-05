import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import AppLayout from "@/components/layout/AppLayout";
import NetworkChart from "@/components/NetworkChart";
import { 
  Play, 
  RotateCcw, 
  Save, 
  AlertTriangle,
  Shield,
  Users,
  Star,
  DollarSign,
  Heart,
  Trophy,
  Zap,
  CreditCard,
  Headphones,
  CheckCircle,
  Bot,
  Send,
  Sparkles,
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  ExternalLink,
  User,
  Presentation,
  Monitor,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Simulate = () => {
  // Initialize with empty input values
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [simulatedValues, setSimulatedValues] = useState<Record<string, number>>({});
  const [simulatedUBCScore, setSimulatedUBCScore] = useState<number>(0);
  const [insights, setInsights] = useState<string[]>([
    "Key Drivers (Current Performance Baseline - 40%)",
    "Trust-Led Strategy: \"Brand I can trust\" dominates at 12.7% (#1), establishing foundational credibility. \"Recommended by friends/family/colleagues\" (10.3%, #2) and \"Good user experience\" (9.5%, #3) provide strong support. \"Good value for money\" (8%, #4) and aspirational \"Happy to be seen with\" (7.7%, #5) round out the top drivers, creating balanced functional-emotional positioning.",
    "Insights to Action",
    "Optimization Strategy: Current 40% baseline demonstrates effective trust-first approach. Maintain leadership in brand reliability while strengthening recommendation mechanisms through enhanced customer advocacy programs. The balanced attribute distribution (12.7% to 5.1% range) suggests healthy portfolio diversification. Focus on protecting top-3 drivers while improving lower-ranked attributes like \"Customer service\" (5.7%) and \"High quality products\" (5.1%) to drive incremental UBC gains."
  ]);
  const [hasRun, setHasRun] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<number>(0);
  
  // AI Assistant state
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I'm your Simulation Analytics Assistant. I can help you analyze your brand attribute simulations, interpret results, and provide strategic insights. What would you like to explore about your simulation?",
      timestamp: new Date(),
      insights: [],
      references: []
    }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [exportingToPPT, setExportingToPPT] = useState<number | null>(null);
  const { toast } = useToast();

  // Static data for RI Score and Top 10 Attributes
  const attributeData = [
    { attribute: "Brand I can trust", riScore: 12.7, fyData: 32, rank: 1, icon: Shield, iconBg: "bg-gradient-primary" },
    { attribute: "Recommended by friends/family/colleagues", riScore: 10.3, fyData: 25, rank: 2, icon: Users, iconBg: "bg-gradient-pastel-green" },
    { attribute: "Provides a good user experience", riScore: 9.5, fyData: 29, rank: 3, icon: Star, iconBg: "bg-gradient-warm" },
    { attribute: "Provides a good value for money", riScore: 8.0, fyData: 40, rank: 4, icon: DollarSign, iconBg: "bg-gradient-cool" },
    { attribute: "Happy to be seen with", riScore: 7.7, fyData: 33, rank: 5, icon: Heart, iconBg: "bg-gradient-pastel-purple" },
    { attribute: "Leading brand", riScore: 7.1, fyData: 22, rank: 6, icon: Trophy, iconBg: "bg-gradient-pastel-orange" },
    { attribute: "High performing products in its portfolio", riScore: 6.4, fyData: 27, rank: 7, icon: Zap, iconBg: "bg-gradient-secondary" },
    { attribute: "Willing to pay more for", riScore: 6.4, fyData: 35, rank: 8, icon: CreditCard, iconBg: "bg-gradient-pastel-blue" },
    { attribute: "Provides excellent customer service and support", riScore: 5.7, fyData: 39, rank: 9, icon: Headphones, iconBg: "bg-gradient-secondary" },
    { attribute: "Makes high quality products", riScore: 5.1, fyData: 36, rank: 10, icon: CheckCircle, iconBg: "bg-gradient-warm" },
  ];

  // Predefined simulation scenarios
  const simulationScenarios = [
    {
      // Scenario 1
      ubcScore: 45,
      inputValues: { 0: "10.0", 1: "17.2", 2: "10.2", 3: "11.2", 4: "8.3", 5: "6.4", 6: "6.8", 7: "5.8", 8: "7.3", 9: "3.1" },
      simulatedValues: { 0: 10.0, 1: 17.2, 2: 10.2, 3: 11.2, 4: 8.3, 5: 6.4, 6: 6.8, 7: 5.8, 8: 7.3, 9: 3.1 }
    },
    {
      // Scenario 2  
      ubcScore: 38,
      inputValues: { 0: "12.0", 1: "11.2", 2: "15.3", 3: "14.3", 4: "12.5", 5: "10.3", 6: "8.3", 7: "5.1", 8: "4.3", 9: "6.2" },
      simulatedValues: { 0: 12.0, 1: 11.2, 2: 15.3, 3: 14.3, 4: 12.5, 5: 10.3, 6: 8.3, 7: 5.1, 8: 4.3, 9: 6.2 }
    }
  ];

  // Calculate total percentage
  const totalPercentage = Object.values(inputValues).reduce((sum, value) => {
    const num = parseFloat(value) || 0;
    return sum + num;
  }, 0);

  // Handle input change
  const handleInputChange = (index: number, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [index]: value
    }));
  };

  // Calculate ranks based on simulated scores
  const calculateRanks = (simulatedScores: Record<string, number>) => {
    const sortedEntries = Object.entries(simulatedScores)
      .sort(([, a], [, b]) => b - a); // Sort by score descending (highest first)
    
    const ranks: Record<string, number> = {};
    sortedEntries.forEach(([index], position) => {
      ranks[index] = position + 1; // Rank 1 for highest, 2 for second highest, etc.
    });
    
    return ranks;
  };

  // Run simulation
  const handleRun = () => {
    const scenario = simulationScenarios[currentScenario];
    
    // Set input values and simulated values from the current scenario
    setInputValues(scenario.inputValues);
    setSimulatedValues(scenario.simulatedValues);
    setSimulatedUBCScore(scenario.ubcScore);
    setHasRun(true);
    setHasSubmitted(false);
    
    // Move to next scenario for next run
    setCurrentScenario((prev) => (prev + 1) % simulationScenarios.length);
  };

  // Rerun simulation
  const handleRerun = () => {
    const scenario = simulationScenarios[currentScenario];
    
    // Set input values and simulated values from the current scenario
    setInputValues(scenario.inputValues);
    setSimulatedValues(scenario.simulatedValues);
    setSimulatedUBCScore(scenario.ubcScore);
    setHasRun(true);
    setHasSubmitted(false);
    
    // Move to next scenario for next run
    setCurrentScenario((prev) => (prev + 1) % simulationScenarios.length);
  };

  // Save and submit
  const handleSaveSubmit = () => {
    let generatedInsights;
    
    if (simulatedUBCScore === 38) {
      // Show decline insights for 38% score
      generatedInsights = [
        "Key Drivers (Performance is declines to 38%)",
        "Shifted Priorities: \"Happy to be seen with\" now leads at 12.5% (#1), followed by \"Good value for money\" (12.0%, #2) and \"Brand I can trust\" (10.5%, #3). The 2-point decline suggests this aspirational-focused strategy weakens overall consideration. Mid-tier attributes like \"Recommended by friends\" (9.8%, #4) and \"Leading brand\" (9.5%, #5) show reduced influence on purchase decisions.",
        "Insights to Action",
        "Strategic Correction: The 38% vs 40% gap indicates aspirational positioning (\"Happy to be seen with\") alone insufficient for consideration lift. Rebalance strategy to strengthen recommendation drivers and user experience attributes. The over-emphasis on emotional/aspirational benefits without functional support creates consideration gaps. Integrate aspirational messaging with stronger value and trust reinforcement to recover the 2-point performance shortfall."
      ];
    } else {
      // Show improvement insights for other scores (45%, etc.)
      generatedInsights = [
        `Key Drivers (UBC Score ${simulatedUBCScore}%)`,
        "Top Contributors: \"Recommended by friends/family/colleagues\" (17.2%) drives highest impact, followed by \"Good value for money\" (11.2%) and \"Good user experience\" (10.2%). These three attributes account for 38.6% of total brand consideration. Word-of-mouth remains the strongest predictor, emphasizing social proof's critical role in brand perception and purchase decisions.",
        "Insights to Action",
        "Strategic Focus: Prioritize referral programs and customer advocacy initiatives to leverage the dominant \"recommendation\" driver. Strengthen value proposition messaging around price-performance ratio. Invest in user experience optimization across touchpoints. Deprioritize \"high quality products\" messaging (3.1% impact) in favor of experience-focused communications. Reallocate budget from brand leadership positioning to customer satisfaction programs."
      ];
    }
    
    setInsights(generatedInsights);
    setHasSubmitted(true);
  };

  // Export to Excel function
  const handleExportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    
    // Prepare data for export
    const exportData = attributeData.map((item, index) => ({
      'Attribute': item.attribute,
      'Original RI Score (%)': item.riScore,
      'Original Rank': item.rank,
      'Input Weight (%)': inputValues[index] || '',
      'Simulated Score (%)': hasRun && simulatedValues[index] !== undefined ? simulatedValues[index].toFixed(1) : '',
      'New Rank': hasRun && simulatedValues[index] !== undefined ? (() => {
        const ranks = calculateRanks(simulatedValues);
        return ranks[index] || '';
      })() : ''
    }));

    // Add overall scores data
    const overallScoresData = [
      { 'Score Type': 'Original UBC Score', 'Percentage': '40%' },
      { 'Score Type': 'Simulated UBC Score', 'Percentage': hasRun ? `${simulatedUBCScore}%` : 'N/A' },
      { 'Score Type': 'Total Weight Allocation', 'Percentage': `${totalPercentage.toFixed(1)}%` },
      { 'Score Type': 'Score Improvement', 'Percentage': hasRun ? `${(simulatedUBCScore - 40).toFixed(1)}%` : 'N/A' }
    ];

    // Add summary data
    const summaryData = [
      { 'Metric': 'Export Date', 'Value': new Date().toLocaleDateString() },
      { 'Metric': 'Export Time', 'Value': new Date().toLocaleTimeString() },
      { 'Metric': 'Scenario', 'Value': `Scenario ${((currentScenario - 1 + simulationScenarios.length) % simulationScenarios.length) + 1}` },
      { 'Metric': 'Total Attributes', 'Value': attributeData.length }
    ];

    // Create worksheets
    const attributeSheet = XLSX.utils.json_to_sheet(exportData);
    const overallScoresSheet = XLSX.utils.json_to_sheet(overallScoresData);
    const summarySheet = XLSX.utils.json_to_sheet(summaryData);
    
    // Add insights sheet
    if (insights.length > 0) {
      const insightsData = insights.map((insight, index) => ({
        'Insight #': index + 1,
        'Recommendation': insight
      }));
      const insightsSheet = XLSX.utils.json_to_sheet(insightsData);
      XLSX.utils.book_append_sheet(workbook, insightsSheet, 'AI Insights');
    }

    // Append sheets to workbook
    XLSX.utils.book_append_sheet(workbook, overallScoresSheet, 'Overall Scores');
    XLSX.utils.book_append_sheet(workbook, attributeSheet, 'Simulation Results');
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const filename = `Brand_Simulation_Analysis_${timestamp}.xlsx`;

    // Export file
    XLSX.writeFile(workbook, filename);
    
    toast({
      title: "Excel Export Complete",
      description: "Your simulation data has been exported to Excel format.",
    });
  };

  // AI Assistant functions
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

    // Simulate AI response with simulation-focused insights
    const aiResponse = {
      id: chatMessages.length + 2,
      type: "assistant" as const,
      content: generateSimulationAIResponse(currentInput),
      timestamp: new Date(),
      insights: generateSimulationInsights(currentInput),
      references: generateSimulationReferences(currentInput)
    };

    setChatMessages([...chatMessages, userMessage, aiResponse]);
    setCurrentInput("");
  };

  const generateSimulationAIResponse = (query: string) => {
    const responses = {
      "trust": "Brand trust is your highest RI score attribute at 12.7%. The simulation shows strong potential for improvement with focused investment in reliability messaging and customer testimonials.",
      "recommendation": "Word-of-mouth remains a powerful driver. With a 10.3% RI score, this attribute shows excellent growth potential when combined with enhanced user experience initiatives.",
      "user experience": "UX optimization can significantly impact brand perception. Current simulation data suggests a 15-20% improvement potential through design and interface enhancements.",
      "simulation": "Your simulation reveals key optimization opportunities across trust, recommendation, and experience attributes. Focus on the top 3 attributes for maximum impact.",
      "insights": "The current simulation indicates strong performance potential in brand trust and user experience. Consider reallocating 5-10% from lower-impact attributes to these high-performers.",
      "default": "I've analyzed your simulation data and identified strategic opportunities for brand attribute optimization. The results suggest focusing on trust-building and experience enhancement for maximum ROI."
    };

    const key = Object.keys(responses).find(k => query.toLowerCase().includes(k)) || "default";
    return responses[key as keyof typeof responses];
  };

  const generateSimulationInsights = (query: string) => {
    return [
      { text: "Trust attributes show 23% lift potential", confidence: 94 },
      { text: "Recommendation synergy effect detected", confidence: 89 },
      { text: "User experience correlation identified", confidence: 91 }
    ];
  };

  const generateSimulationReferences = (query: string) => {
    return [
      { text: "Brand Attribute Correlation Study 2024", url: "#", source: "Simulation Analytics Lab" },
      { text: "Trust & Experience Impact Analysis", url: "#", source: "Brand Performance Institute" },
      { text: "ROI Optimization Framework", url: "#", source: "Strategic Insights Center" }
    ];
  };

  const handleExportToPowerPoint = async (messageId: number) => {
    setExportingToPPT(messageId);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const message = chatMessages.find(m => m.id === messageId);
      if (!message) return;

      const pptData = {
        title: "Simulation Analytics Summary",
        timestamp: message.timestamp.toLocaleDateString(),
        content: message.content,
        insights: message.insights,
        references: message.references,
        simulationData: { hasRun, hasSubmitted, totalAttributes: attributeData.length }
      };

      toast({
        title: "PowerPoint Export Complete",
        description: "Your simulation analysis has been exported to PowerPoint format.",
      });

      const blob = new Blob([JSON.stringify(pptData, null, 2)], { 
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" 
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `simulation-analysis-${Date.now()}.pptx`;
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

  // Reset on page load
  useEffect(() => {
    setInputValues({});
    setSimulatedValues({});
    setSimulatedUBCScore(0);
    setHasRun(false);
    setHasSubmitted(false);
  }, []);

  return (
    <AppLayout 
      title="Simulated key driver analysis for Unaided Consideration"
      subtitle="Simulate relative importance of attributes to understand impact on Unaided Consideration"
      showGlobalSearch={false}
    >
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Simulation Interface */}
        <Card className="card-modern shadow-elegant hover-lift">
          <CardHeader className="glass border-b border-neutral-200/50 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    FY'26 April Wave: Consumer PC
                  </CardTitle>
                  <div className="text-sm text-muted-foreground font-medium">
                    UBC: Unaided Brand Consideration
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">Region:</div>
                <select className="bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="global">Global</option>
                  <option value="na">North America</option>
                  <option value="emea">EMEA</option>
                  <option value="apac">APAC</option>
                  <option value="latam">Latin America</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead>
                  <tr className="border-b bg-gradient-to-r from-primary/5 via-blue-50 to-purple-50">
                    <th className="text-left p-4 font-semibold text-sm w-[300px]">Imagery Attributes</th>
                     <th className="text-center p-4 font-semibold text-sm w-[200px] bg-primary/5">
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 rounded-full bg-gradient-primary text-white flex items-center justify-center text-lg font-bold shadow-xl animate-pulse">
                            40%
                          </div>
                         <span>UBC Score</span>
                       </div>
                     </th>
                     <th className="text-center p-4 font-semibold text-sm w-[400px] bg-secondary/5">
                       <div className="flex flex-col items-center gap-2">
                         <div className={`w-20 h-20 rounded-full bg-gradient-secondary text-white flex items-center justify-center text-lg font-bold shadow-xl ${hasRun ? 'animate-pulse' : ''}`}>
                           {simulatedUBCScore}%
                         </div>
                         <span>Simulated UBC Score</span>
                       </div>
                     </th>
                      <th className="text-center p-4 font-semibold text-sm w-[500px] bg-gradient-to-r from-green-50 to-emerald-50">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                            <Lightbulb className="w-6 h-6" />
                          </div>
                          <span>Insights & Recommendations</span>
                        </div>
                      </th>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <th className="p-2"></th>
                    <th className="text-center p-2 font-medium text-xs text-muted-foreground bg-primary/5">
                      <div className="flex justify-center gap-8">
                        <span>Actual RI Score</span>
                        <span>Rank</span>
                      </div>
                    </th>
                    <th className="text-center p-2 font-medium text-xs text-muted-foreground bg-secondary/5">
                      <div className="grid grid-cols-3 justify-items-center gap-4 w-[400px] mx-auto">
                        <span>Change weights</span>
                        <span>Simulated importance score</span>
                        <span>New Rank</span>
                      </div>
                    </th>
                     <th className="text-center p-2 font-medium text-xs text-muted-foreground bg-gradient-to-r from-green-50 to-emerald-50">
                       <span>Strategic Recommendations</span>
                     </th>
                  </tr>
                </thead>
                <tbody>
                  {attributeData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors duration-200">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${item.iconBg} text-white shadow-lg hover-scale`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item.attribute}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                          <div className="flex justify-center gap-8">
                           <div className="flex flex-col items-center gap-1">
                             <div className="relative">
                               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary-glow to-primary/80 flex items-center justify-center shadow-lg">
                                 <span className="font-bold text-white text-sm">
                                   {item.riScore}%
                                 </span>
                               </div>
                             </div>
                           </div>
                           <span className="font-semibold text-foreground text-lg">
                             {item.rank}
                           </span>
                         </div>
                      </td>
                       <td className="p-4 bg-secondary/5">
                        <div className="grid grid-cols-3 justify-items-center items-center gap-4 w-[400px] mx-auto">
                          <div className="flex items-center gap-1">
                            <Input
                              type="number"
                              placeholder="Enter %"
                              value={inputValues[index] || ""}
                              onChange={(e) => handleInputChange(index, e.target.value)}
                              className="input-modern w-16 text-center text-xs placeholder:text-xs"
                              min="0"
                              max="100"
                              step="0.1"
                            />
                            <span className="text-xs text-muted-foreground">%</span>
                          </div>
                           <div className="flex flex-col items-center gap-1">
                             {hasRun && simulatedValues[index] !== undefined ? (
                               <div className="relative">
                                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 flex items-center justify-center shadow-lg">
                                   <span className="font-bold text-white text-sm">
                                     {simulatedValues[index].toFixed(1)}%
                                   </span>
                                 </div>
                               </div>
                             ) : (
                               <span className="text-muted-foreground text-sm">-</span>
                             )}
                           </div>
                          <div className="font-semibold text-foreground text-sm">
                            {hasRun && simulatedValues[index] !== undefined ? (
                              <>
                                {(() => {
                                  const ranks = calculateRanks(simulatedValues);
                                  return ranks[index] || '-';
                                })()}
                              </>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </div>
                        </div>
                      </td>
                      {/* Insights Column - Show only in first row and always visible */}
                      {index === 0 && (
                        <td rowSpan={attributeData.length} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 align-top">
                          <div className="space-y-4 animate-fade-in">
                            <h4 className="font-bold text-green-800 text-center mb-4">
                              {hasSubmitted ? `Key Drivers (${simulatedUBCScore === 38 ? "Performance is declines to" : "UBC Score"} ${simulatedUBCScore}%)` : "Key Drivers (Current Performance Baseline - 40%)"}
                            </h4>
                            <div className="space-y-3">
                              {insights.map((insight, idx) => (
                                <div key={idx} className="bg-white rounded-lg p-4 border border-green-200 shadow-sm hover-lift transition-all">
                                  <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-green-800 font-medium leading-relaxed">{insight}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Percentage */}
            <div className="flex items-center justify-center gap-4 py-4 border-t border-neutral-200/50 bg-gradient-subtle/30">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Total:</span>
                <Badge 
                  variant="default"
                  className="text-sm bg-gradient-primary text-white"
                >
                  {totalPercentage.toFixed(1)}%
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 p-8 bg-gradient-subtle/30">
              {!hasRun ? (
                <Button
                  onClick={handleRun}
                  className="btn-primary gap-2 px-8 py-3 text-lg hover-scale"
                  size="lg"
                >
                  <Play className="w-5 h-5" />
                  Run Simulation
                </Button>
              ) : (
                <div className="flex gap-4 animate-fade-in">
                  <Button
                    onClick={handleRerun}
                    variant="outline"
                    className="gap-2 px-6 hover-scale border-primary/20"
                    size="lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Rerun
                  </Button>
                  <Button
                    onClick={handleSaveSubmit}
                    className="btn-primary gap-2 px-8 hover-scale"
                    size="lg"
                  >
                    <Save className="w-4 h-4" />
                    Save & Submit
                  </Button>
                  {hasSubmitted && (
                    <Button
                      onClick={handleExportToExcel}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
                      size="lg"
                    >
                      <Download className="w-4 h-4" />
                      Export to Excel
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Network Chart - Show only when simulation has run */}
        {/* Network chart is now integrated into the table - this section can be removed */}

        {/* Summary Stats */}
        {hasSubmitted && (
          <Card className="card-modern shadow-elegant animate-scale-in">
            <CardHeader className="glass border-b border-neutral-200/50">
              <CardTitle className="gradient-text">Generated Insights Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-subtle rounded-2xl border border-border/50 hover-lift transition-all duration-300"
                  >
                    <p className="text-sm text-foreground font-medium">{insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* AI Analytics Assistant Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Dialog open={isAIAssistantOpen} onOpenChange={setIsAIAssistantOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:shadow-glow shadow-lg text-white border-0 h-14 px-6 rounded-2xl"
                size="lg"
              >
                <Bot className="w-5 h-5 mr-2" />
                AI Analytics Assistant
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl h-[80vh] p-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border border-neutral-200 shadow-2xl">
              <DialogHeader className="p-6 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold gradient-text">AI Simulation Analytics Assistant</DialogTitle>
                    <p className="text-muted-foreground">Get insights and analysis for your brand attribute simulations</p>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="flex-1 overflow-hidden flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                      {message.type === 'assistant' && (
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      
                      <div className={`flex-1 ${message.type === 'user' ? 'max-w-md ml-auto' : 'max-w-2xl'}`}>
                        <div className={`p-4 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                            : 'bg-white border border-neutral-200 shadow-sm'
                        }`}>
                          <p className="leading-relaxed">{message.content}</p>
                        </div>
                        
                        {/* Insights */}
                        {message.insights && message.insights.length > 0 && (
                          <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                              <Lightbulb className="w-4 h-4 text-amber-500" />
                              Key Simulation Insights
                            </div>
                            <div className="grid gap-3">
                              {message.insights.map((insight, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 hover-lift">
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-blue-900">{insight.text}</p>
                                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
                                      {insight.confidence}% confidence
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* References */}
                        {message.references && message.references.length > 0 && (
                          <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                              <ExternalLink className="w-4 h-4 text-green-500" />
                              Research References
                            </div>
                            <div className="grid gap-2">
                              {message.references.map((ref, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 hover-lift">
                                  <p className="text-sm font-medium text-green-900">{ref.text}</p>
                                  <p className="text-xs text-green-700 mt-1">{ref.source}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Export Button */}
                        {message.type === 'assistant' && message.id > 1 && (
                          <div className="mt-4">
                            <Button
                              onClick={() => handleExportToPowerPoint(message.id)}
                              disabled={exportingToPPT === message.id}
                              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              {exportingToPPT === message.id ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                  Generating Report...
                                </>
                              ) : (
                                <>
                                  <Presentation className="w-4 h-4 mr-2" />
                                  Export Simulation Report
                                </>
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      {message.type === 'user' && (
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Quick Actions */}
                <div className="p-6 border-t border-neutral-200 bg-white/50 backdrop-blur-sm space-y-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Quick Simulation Analytics:</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Analyze simulation results and trends",
                        "Compare attribute performance metrics", 
                        "Generate optimization strategies",
                        "Trust & experience correlation insights"
                      ].map((question) => (
                        <Button 
                          key={question}
                          variant="outline" 
                          size="sm"
                          className="justify-start text-left h-auto p-3 hover:bg-primary/5 hover:border-primary/20"
                          onClick={() => {
                            setCurrentInput(question);
                            handleSendMessage();
                          }}
                        >
                          <BarChart3 className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{question}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="flex gap-3">
                    <Input 
                      placeholder="Ask me about your simulation results, attribute analysis, or optimization strategies..." 
                      className="input-modern flex-1"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:shadow-glow"
                      onClick={handleSendMessage}
                      disabled={!currentInput.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AppLayout>
  );
};

export default Simulate;
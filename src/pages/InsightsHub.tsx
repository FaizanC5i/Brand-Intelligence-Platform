import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppLayout from "@/components/layout/AppLayout";
import { 
  Lightbulb, 
  TrendingUp, 
  Eye, 
  Brain, 
  Download,
  Target,
  Zap,
  FileText,
  BarChart3
} from "lucide-react";
import insightsHubImage from "@/assets/insights-hub.jpg";

const InsightsHub = () => {
  return (
    <AppLayout 
      title="Insights Hub"
      subtitle="Strategic intelligence and predictive analytics"
    >
      <div className="p-8 space-y-8">
        {/* Hero Section */}
        <Card className="card-modern border-0 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold gradient-text">Insights Hub</h1>
                    <p className="text-muted-foreground">Strategic intelligence & trends</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover emerging opportunities, competitive intelligence, and data-driven recommendations through strategic intelligence and market trends.
                </p>
                <div className="flex gap-4">
                  <Button className="btn-primary">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Insights
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Reports
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={insightsHubImage} 
                  alt="Insights Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights Overview */}
        <div className="grid grid-cols-4 gap-6">
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-orange-50 to-red-50">
            <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 mb-2">198</div>
            <div className="text-sm text-muted-foreground">Strategic Reports</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
            <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">267</div>
            <div className="text-sm text-muted-foreground">Market Insights</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
            <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
            <div className="text-sm text-muted-foreground">Predictive Models</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
            <div className="text-sm text-muted-foreground">Trend Accuracy</div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Card className="card-modern border-0">
          <CardContent className="p-8">
            <Tabs defaultValue="intelligence" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="intelligence">Market Intelligence</TabsTrigger>
                <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
                <TabsTrigger value="predictive">Predictive Models</TabsTrigger>
                <TabsTrigger value="reports">Strategic Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="intelligence" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="p-6 border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Target className="w-5 h-5" />
                        Competitive Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="p-3 bg-white/70 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Market Share</span>
                            <Badge className="bg-blue-100 text-blue-700">34.2%</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">vs. 31.8% last quarter</div>
                        </div>
                        <div className="p-3 bg-white/70 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Brand Perception</span>
                            <Badge className="bg-green-100 text-green-700">+12%</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">Positive sentiment increase</div>
                        </div>
                        <div className="p-3 bg-white/70 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Innovation Index</span>
                            <Badge className="bg-purple-100 text-purple-700">8.7/10</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">Industry leading position</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="flex items-center gap-2 text-orange-700">
                        <Zap className="w-5 h-5" />
                        Emerging Opportunities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="p-4 border border-orange-200 rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-orange-700">AI Integration</h4>
                          <p className="text-sm text-muted-foreground">67% growth potential in AI-powered solutions</p>
                          <Badge className="mt-2 bg-orange-100 text-orange-700">High Priority</Badge>
                        </div>
                        <div className="p-4 border border-orange-200 rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-orange-700">Sustainability Focus</h4>
                          <p className="text-sm text-muted-foreground">Growing consumer demand for eco-friendly products</p>
                          <Badge className="mt-2 bg-yellow-100 text-yellow-700">Medium Priority</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="trends" className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Trend Analysis Dashboard</h3>
                  <p className="text-muted-foreground">Identify and analyze market trends and patterns</p>
                </div>
              </TabsContent>
              
              <TabsContent value="predictive" className="space-y-6">
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-muted-foreground">AI-powered models for future market predictions</p>
                </div>
              </TabsContent>
              
              <TabsContent value="reports" className="space-y-6">
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Strategic Reports</h3>
                  <p className="text-muted-foreground">Comprehensive strategic intelligence reports</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default InsightsHub;
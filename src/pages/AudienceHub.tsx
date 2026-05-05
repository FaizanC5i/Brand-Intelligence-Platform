import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppLayout from "@/components/layout/AppLayout";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Eye, 
  Filter,
  Download,
  Search,
  ArrowRight,
  BarChart3,
  PieChart
} from "lucide-react";
import audienceHubImage from "@/assets/audience-hub.jpg";

const AudienceHub = () => {
  return (
    <AppLayout 
      title="Audience Hub"
      subtitle="Deep dive into consumer insights and demographic analysis"
    >
      <div className="p-8 space-y-8">
        {/* Hero Section */}
        <Card className="card-modern border-0 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold gradient-text">Audience Hub</h1>
                    <p className="text-muted-foreground">Consumer insights & segmentation</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Access comprehensive audience research, behavioral studies, and customer journey mapping tools to understand your consumers better.
                </p>
                <div className="flex gap-4">
                  <Button className="btn-primary">
                    <Eye className="w-4 h-4 mr-2" />
                    View Insights
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={audienceHubImage} 
                  alt="Audience Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-6">
          <Card className="card-modern border-0 text-center p-6">
            <div className="text-3xl font-bold gradient-text mb-2">156</div>
            <div className="text-sm text-muted-foreground">Consumer Reports</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6">
            <div className="text-3xl font-bold gradient-text mb-2">89</div>
            <div className="text-sm text-muted-foreground">Behavioral Insights</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6">
            <div className="text-3xl font-bold gradient-text mb-2">12</div>
            <div className="text-sm text-muted-foreground">Research Tools</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6">
            <div className="text-3xl font-bold gradient-text mb-2">34</div>
            <div className="text-sm text-muted-foreground">Active Segments</div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Card className="card-modern border-0">
          <CardContent className="p-8">
            <Tabs defaultValue="segmentation" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="segmentation">Consumer Segmentation</TabsTrigger>
                <TabsTrigger value="behavioral">Behavioral Analytics</TabsTrigger>
                <TabsTrigger value="journey">Journey Mapping</TabsTrigger>
                <TabsTrigger value="surveys">Survey Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="segmentation" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Demographic Segments
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span>Gen Z (18-24)</span>
                          <Badge>23.4%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span>Millennials (25-40)</span>
                          <Badge>31.2%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span>Gen X (41-56)</span>
                          <Badge>28.7%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span>Boomers (57+)</span>
                          <Badge>16.7%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="w-5 h-5" />
                        Psychographic Profiles
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold">Tech Enthusiasts</h4>
                          <p className="text-sm text-muted-foreground">Early adopters, high engagement</p>
                        </div>
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold">Value Seekers</h4>
                          <p className="text-sm text-muted-foreground">Price-conscious, research-heavy</p>
                        </div>
                        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold">Brand Loyalists</h4>
                          <p className="text-sm text-muted-foreground">Repeat customers, advocates</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="behavioral" className="space-y-6">
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Behavioral Analytics Dashboard</h3>
                  <p className="text-muted-foreground">Comprehensive behavioral patterns and user interactions</p>
                </div>
              </TabsContent>
              
              <TabsContent value="journey" className="space-y-6">
                <div className="text-center py-12">
                  <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Customer Journey Mapping</h3>
                  <p className="text-muted-foreground">Visualize and analyze customer touchpoints</p>
                </div>
              </TabsContent>
              
              <TabsContent value="surveys" className="space-y-6">
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Survey & Research Tools</h3>
                  <p className="text-muted-foreground">Create and manage consumer research surveys</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AudienceHub;
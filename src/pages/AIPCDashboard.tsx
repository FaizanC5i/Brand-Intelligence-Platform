import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import { Brain, TrendingUp, Cpu, ArrowLeft, Monitor, Zap, Building } from "lucide-react";
import { Link } from "react-router-dom";

const AIPCDashboard = () => {
  return (
    <AppLayout 
      title="AI PC Adoption Dashboard"
      subtitle="Comprehensive analysis of AI-powered computer market penetration"
    >
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/overview">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Overview
            </Button>
          </Link>
          <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +6.5% Adoption Growth
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Current Adoption Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-600 mb-2">34.8%</div>
              <div className="text-sm text-purple-700">+6.5% from previous wave</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-cyan-800 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Enterprise Segment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-cyan-600 mb-2">67.3%</div>
              <div className="text-sm text-cyan-700">Business adoption rate</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Performance Boost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-sm text-green-700">Average productivity gain</div>
            </CardContent>
          </Card>
        </div>

        {/* Adoption Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-500" />
                Adoption by Sector
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Technology</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                    <span className="text-blue-600 font-bold text-sm">78%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Finance</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                    <span className="text-green-600 font-bold text-sm">72%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Healthcare</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-purple-600 font-bold text-sm">65%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Education</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '58%'}}></div>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm">58%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Manufacturing</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '42%'}}></div>
                    </div>
                    <span className="text-red-600 font-bold text-sm">42%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-500" />
                AI Feature Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Most Used Features</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Intelligent task automation (89%)</li>
                    <li>• Natural language processing (84%)</li>
                    <li>• Predictive analytics (78%)</li>
                    <li>• Smart content generation (71%)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Emerging Applications</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• AI-powered coding assistance (+45%)</li>
                    <li>• Intelligent meeting summarization (+38%)</li>
                    <li>• Automated document processing (+32%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Market Analysis & Future Projections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3">Growth Drivers</h4>
                <ul className="space-y-2 text-purple-700">
                  <li>• Increased remote work adoption</li>
                  <li>• Rising demand for productivity tools</li>
                  <li>• Enterprise digital transformation</li>
                  <li>• Cost savings from AI automation</li>
                  <li>• Competitive advantage requirements</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3">Market Challenges</h4>
                <ul className="space-y-2 text-orange-700">
                  <li>• High initial investment costs</li>
                  <li>• Need for employee training</li>
                  <li>• Data security concerns</li>
                  <li>• Integration complexity</li>
                  <li>• Resistance to change</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">2024-2025 Projections</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">52%</div>
                  <div className="text-sm text-purple-700">Expected adoption by Q4 2024</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$45B</div>
                  <div className="text-sm text-blue-700">Projected market size 2025</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">28%</div>
                  <div className="text-sm text-green-700">Annual growth rate forecast</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AIPCDashboard;
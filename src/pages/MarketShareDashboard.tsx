import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import { BarChart3, TrendingUp, TrendingDown, ArrowLeft, Target, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MarketShareDashboard = () => {
  return (
    <AppLayout 
      title="Market Share Growth Dashboard"
      subtitle="Detailed analysis of market share trends and performance"
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
          <Badge className="bg-green-100 text-green-700 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +4.2% Growth
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Current Market Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-2">23.4%</div>
              <div className="text-sm text-green-700">+4.2% from previous wave</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Market Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 mb-2">#3</div>
              <div className="text-sm text-blue-700">Global ranking in segment</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Geographic Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-600 mb-2">47</div>
              <div className="text-sm text-purple-700">Active markets worldwide</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Growth Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Q1 2024</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">+8.3%</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Q2 2024</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">+6.1%</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Q3 2024</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">+4.2%</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Competitive Landscape
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Competitor A</span>
                  <span className="text-red-600 font-bold">34.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Competitor B</span>
                  <span className="text-orange-600 font-bold">28.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Our Company</span>
                  <span className="text-green-600 font-bold">23.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Others</span>
                  <span className="text-gray-600 font-bold">13.7%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Strategic Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Key Growth Drivers</h4>
              <ul className="space-y-2 text-green-700">
                <li>• Strong performance in emerging markets (+12.4% YoY)</li>
                <li>• Successful product portfolio expansion</li>
                <li>• Enhanced distribution network coverage</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3">Areas for Improvement</h4>
              <ul className="space-y-2 text-amber-700">
                <li>• Increase market penetration in developed regions</li>
                <li>• Strengthen competitive positioning against Competitor A</li>
                <li>• Focus on premium segment expansion</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MarketShareDashboard;
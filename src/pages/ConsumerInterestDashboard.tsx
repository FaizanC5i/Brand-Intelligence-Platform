import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import { Users, TrendingUp, Heart, ArrowLeft, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ConsumerInterestDashboard = () => {
  return (
    <AppLayout 
      title="Consumer Interest Dashboard"
      subtitle="Deep dive into consumer sentiment and engagement metrics"
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
          <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +5.1% Interest Growth
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Overall Interest Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 mb-2">87.2%</div>
              <div className="text-sm text-blue-700">+5.1% from previous wave</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-pink-800 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Brand Affinity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-pink-600 mb-2">92.4%</div>
              <div className="text-sm text-pink-700">Positive sentiment score</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Engagement Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-2">34.8%</div>
              <div className="text-sm text-green-700">Active user participation</div>
            </CardContent>
          </Card>
        </div>

        {/* Interest Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Interest by Category
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Product Innovation</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                    <span className="text-blue-600 font-bold text-sm">94%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Sustainability</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                    <span className="text-green-600 font-bold text-sm">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Value for Money</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm">76%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Customer Service</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    <span className="text-purple-600 font-bold text-sm">82%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Trend Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Rising Trends</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• AI-powered features (+23%)</li>
                    <li>• Eco-friendly materials (+18%)</li>
                    <li>• Personalization options (+15%)</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Declining Interest</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Traditional features (-8%)</li>
                    <li>• Basic packaging (-12%)</li>
                    <li>• Generic designs (-6%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Consumer Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Consumer Insights & Behavior Patterns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Primary Motivators</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Quality and reliability (94% importance)</li>
                  <li>• Innovation and technology (87% importance)</li>
                  <li>• Brand reputation (82% importance)</li>
                  <li>• Value proposition (78% importance)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3">Decision Factors</h4>
                <ul className="space-y-2 text-purple-700">
                  <li>• Peer recommendations (89% influence)</li>
                  <li>• Online reviews (85% influence)</li>
                  <li>• Expert opinions (72% influence)</li>
                  <li>• Social media buzz (68% influence)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ConsumerInterestDashboard;
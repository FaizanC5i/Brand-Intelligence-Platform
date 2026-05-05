import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import { Gamepad2, TrendingUp, Trophy, ArrowLeft, Target, Flame, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GamingDashboard = () => {
  return (
    <AppLayout 
      title="Gaming Segment Dashboard"
      subtitle="Deep analysis of gaming PC market trends and consumer behavior"
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
          <Badge className="bg-red-100 text-red-700 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +13.5M Units Growth
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Market Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600 mb-2">156.3M</div>
              <div className="text-sm text-red-700">+13.5M from previous wave</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-yellow-800 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Revenue Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-600 mb-2">67%</div>
              <div className="text-sm text-yellow-700">Holiday season surge</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Market Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-600 mb-2">34%</div>
              <div className="text-sm text-purple-700">Of total PC segment</div>
            </CardContent>
          </Card>
        </div>

        {/* Gaming Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Popular Gaming Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Battle Royale</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                    <span className="text-red-600 font-bold text-sm">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">FPS Games</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '84%'}}></div>
                    </div>
                    <span className="text-orange-600 font-bold text-sm">84%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">RPG Games</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                    <span className="text-purple-600 font-bold text-sm">76%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Sports Games</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
                    </div>
                    <span className="text-green-600 font-bold text-sm">68%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Strategy Games</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '62%'}}></div>
                    </div>
                    <span className="text-blue-600 font-bold text-sm">62%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                Player Demographics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Age Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>18-25 years</span>
                      <span className="font-bold text-blue-600">32%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>26-35 years</span>
                      <span className="font-bold text-blue-600">28%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>36-45 years</span>
                      <span className="font-bold text-blue-600">23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>46+ years</span>
                      <span className="font-bold text-blue-600">17%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Spending Patterns</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Premium builds: $2,500+ (24%)</li>
                    <li>• Mid-range builds: $1,200-$2,500 (45%)</li>
                    <li>• Budget builds: $600-$1,200 (31%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hardware Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">RTX 4080/4090</span>
                <span className="font-bold text-red-600">42%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">RTX 4070/4070 Ti</span>
                <span className="font-bold text-orange-600">34%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">RTX 4060/4060 Ti</span>
                <span className="font-bold text-yellow-600">24%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resolution Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">1440p Gaming</span>
                <span className="font-bold text-blue-600">48%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">4K Gaming</span>
                <span className="font-bold text-purple-600">32%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">1080p Gaming</span>
                <span className="font-bold text-green-600">20%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Refresh Rate Priority</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">144Hz+</span>
                <span className="font-bold text-red-600">56%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">120Hz</span>
                <span className="font-bold text-orange-600">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">60Hz</span>
                <span className="font-bold text-gray-600">16%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Gaming Market Insights & Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3">Key Growth Opportunities</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Esports and competitive gaming surge</li>
                  <li>• Content creation and streaming demand</li>
                  <li>• VR/AR gaming adoption increasing</li>
                  <li>• Cloud gaming infrastructure needs</li>
                  <li>• AI-enhanced gaming experiences</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3">Market Challenges</h4>
                <ul className="space-y-2 text-orange-700">
                  <li>• Supply chain constraints for GPUs</li>
                  <li>• Rising component costs</li>
                  <li>• Mobile gaming competition</li>
                  <li>• Console market share pressure</li>
                  <li>• Economic uncertainty impact</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default GamingDashboard;
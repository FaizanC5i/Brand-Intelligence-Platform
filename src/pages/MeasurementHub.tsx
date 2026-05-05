import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppLayout from "@/components/layout/AppLayout";
import { ExternalLink, FileText, Lightbulb, BarChart3, TrendingUp } from "lucide-react";
import corporateTrackerImage from "@/assets/corporate-tracker.jpg";
import isgTrackerImage from "@/assets/isg-tracker.jpg";
import consumerTrackerImage from "@/assets/consumer-tracker.jpg";
import gamerTrackerImage from "@/assets/gamer-tracker.jpg";
import itdmTrackerImage from "@/assets/itdm-tracker.jpg";
import endUserTrackerImage from "@/assets/end-user-tracker.jpg";
import tabletTrackerImage from "@/assets/tablet-tracker.jpg";

const MeasurementHub = () => {
  return (
    <AppLayout 
      title="Brand & Reputation Tracking"
      subtitle="Comprehensive measurement frameworks and performance analytics"
    >
      <div className="p-8 space-y-12">
        {/* Hero Section */}
        <Card className="card-modern border-0 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      Brand & Reputation Tracking
                    </h1>
                    <p className="text-muted-foreground">Comprehensive measurement & analytics</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover brand performance insights, competitor analysis, and data-driven recommendations through comprehensive tracking and market intelligence.
                </p>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={corporateTrackerImage} 
                  alt="Brand & Reputation Tracking Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
            <div className="text-sm text-muted-foreground">Brand Reports</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
            <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">234</div>
            <div className="text-sm text-muted-foreground">Reputation Insights</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50">
            <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-muted-foreground">Tracking Models</div>
          </Card>
          <Card className="card-modern border-0 text-center p-6 bg-gradient-to-br from-orange-50 to-red-50">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </Card>
        </div>

        {/* Brand Trackers Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Brand</h2>
          </div>
          
          {/* IDG Trackers */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">IDG Trackers</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Consumer Tracker */}
              <Card className="card-modern border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={consumerTrackerImage} 
                      alt="Consumer Tracker Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Consumer Tracker</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Dashboard Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Gamer Tracker */}
              <Card className="card-modern border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={gamerTrackerImage} 
                      alt="Gamer Tracker Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Gamer Tracker</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Dashboard Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* ITDM Tracker */}
              <Card className="card-modern border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={itdmTrackerImage} 
                      alt="ITDM Tracker Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">ITDM Tracker</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Dashboard Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Row */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* End User Tracker */}
              <Card className="card-modern border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={endUserTrackerImage} 
                      alt="End User Tracker Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">End User Tracker</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Dashboard Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tablet Tracker */}
              <Card className="card-modern border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={tabletTrackerImage} 
                      alt="Tablet Tracker Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Tablet Tracker</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Dashboard Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Corporate Tracker Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Corporate Tracker</h2>
          <Card className="card-modern border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-40">
                  <img 
                    src={corporateTrackerImage} 
                    alt="ITDM & Tech Optimists Tracker Analytics"
                    className="w-full h-full object-cover rounded-l-2xl"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">ITDM & Tech Optimists Tracker</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Dashboard Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ISG Tracker Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">ISG Tracker</h2>
          <Card className="card-modern border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-40">
                  <img 
                    src={isgTrackerImage} 
                    alt="ITDM Tracker Analytics"
                    className="w-full h-full object-cover rounded-l-2xl"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">ITDM Tracker</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Dashboard Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AppLayout>
  );
};

export default MeasurementHub;
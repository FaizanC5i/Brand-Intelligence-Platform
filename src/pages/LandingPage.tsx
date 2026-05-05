import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Target, 
  Zap,
  BarChart3,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="space-y-4">
            <Badge className="bg-gradient-primary text-white px-6 py-3 text-lg animate-pulse-subtle">
              <Sparkles className="w-5 h-5 mr-2" />
              Next-Generation Intelligence
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold gradient-text leading-tight">
              C5i Brand Intelligence Platform
            </h1>
            <p className="text-2xl text-neutral-300 max-w-3xl mx-auto">
              Unlock market opportunities with AI-powered discovery, real-time intelligence, 
              and predictive insights that transform how you understand your brand landscape.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-neutral-600 text-black hover:bg-neutral-800 hover:text-white px-8 py-4 text-lg">
              <Eye className="w-5 h-5 mr-3" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "C5i Discovery",
              description: "Real-time market insights and breaking intelligence alerts",
              icon: Target,
              link: "/overview",
              color: "bg-gradient-pastel-blue"
            },
            {
              title: "Simulate & Predict",
              description: "AI-powered forecasting and scenario simulation tools",
              icon: TrendingUp,
              link: "/simulate",
              color: "bg-gradient-pastel-purple"
            },
            {
              title: "Knowledge Hub",
              description: "Comprehensive reports and strategic market analysis",
              icon: Brain,
              link: "/knowledge-hub",
              color: "bg-gradient-pastel-green"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link key={feature.title} to={feature.link}>
                <Card className={`${feature.color} hover-lift hover-glow group cursor-pointer border-0 h-full shadow-lg`}>
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <IconComponent className="w-10 h-10 text-foreground" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/80 text-lg">
                        {feature.description}
                      </p>
                    </div>
                    <Button className="w-full bg-white/20 text-foreground border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
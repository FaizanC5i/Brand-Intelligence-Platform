import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Clock, 
  TrendingUp, 
  MessageCircle,
  Share2,
  Bookmark,
  Zap,
  Star,
  Eye
} from "lucide-react";

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: "PC Market Shows Resilience in Q4 2024",
      summary: "Global PC shipments exceed expectations with 3.2% growth driven by enterprise refresh cycles and gaming demand.",
      source: "TechMarket Research",
      author: "Sarah Chen",
      time: "2 hours ago",
      category: "Market Analysis",
      image: "/placeholder.svg",
      trending: true,
      comments: 24,
      shares: 12,
      views: "2.4k",
      featured: true
    },
    {
      id: 2,
      title: "AI Integration Drives Commercial PC Upgrades",
      summary: "Businesses accelerate hardware refresh to support AI workloads, creating new opportunities in the commercial segment.",
      source: "Enterprise Tech Weekly",
      author: "Mike Johnson",
      time: "4 hours ago",
      category: "Enterprise",
      image: "/placeholder.svg",
      trending: false,
      comments: 18,
      shares: 8,
      views: "1.8k",
      featured: false
    },
    {
      id: 3,
      title: "Gaming PC Demand Shifts to Premium Tier",
      summary: "High-end gaming PCs see 15% increase as content creators and enthusiasts drive market expansion.",
      source: "Gaming Industry Report",
      author: "Alex Rodriguez",
      time: "6 hours ago",
      category: "Gaming",
      image: "/placeholder.svg",
      trending: true,
      comments: 31,
      shares: 15,
      views: "3.1k",
      featured: false
    },
    {
      id: 4,
      title: "Sustainability Focus Impacts PC Design",
      summary: "Manufacturers prioritize eco-friendly materials and energy efficiency in response to corporate ESG requirements.",
      source: "Green Tech Times",
      author: "Lisa Wang",
      time: "8 hours ago",
      category: "Sustainability",
      image: "/placeholder.svg",
      trending: false,
      comments: 9,
      shares: 6,
      views: "956",
      featured: false
    }
  ];

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Market Analysis": return "bg-gradient-primary text-white";
      case "Enterprise": return "bg-gradient-secondary text-white";
      case "Gaming": return "bg-gradient-warm text-white";
      case "Sustainability": return "bg-gradient-cool text-white";
      default: return "bg-neutral-100 text-neutral-800";
    }
  };

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-neutral-200/50 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold text-foreground">Industry Pulse</h2>
          <Badge className="bg-gradient-primary text-white px-3 py-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
        <p className="text-muted-foreground">Real-time insights from the PC market ecosystem</p>
      </div>

      {/* Featured Story */}
      {featuredNews && (
        <Card className="card-modern hover-lift group cursor-pointer border-0 bg-gradient-mesh">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className={getCategoryStyle(featuredNews.category)}>
                    Featured
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {featuredNews.category}
                  </Badge>
                </div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {featuredNews.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredNews.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {featuredNews.views}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 px-3 hover:bg-white/80">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      {featuredNews.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-3 hover:bg-white/80">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Trending Stories */}
      <Card className="card-modern border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Trending Stories</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {regularNews.slice(0, 3).map((item, index) => (
            <div key={item.id} className="group p-4 rounded-xl hover:bg-neutral-50 transition-all duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0
                  ${index === 0 ? 'bg-gradient-primary' : index === 1 ? 'bg-gradient-secondary' : 'bg-gradient-warm'}
                `}>
                  {index + 1}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`text-xs ${getCategoryStyle(item.category)} border-0`}>
                      {item.category}
                    </Badge>
                    {item.trending && (
                      <Badge variant="secondary" className="text-xs bg-orange/10 text-orange border-orange/20">
                        <Zap className="w-2 h-2 mr-1" />
                        Hot
                      </Badge>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Avatar className="h-5 w-5">
                        <AvatarFallback className="text-xs">{item.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span>{item.author}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {item.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="card-modern border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 hover:bg-gradient-primary hover:text-white transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <ExternalLink className="w-4 h-4 text-primary group-hover:text-white" />
            </div>
            <span className="font-medium">View All Stories</span>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 hover:bg-gradient-secondary hover:text-white transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-lg bg-info/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <TrendingUp className="w-4 h-4 text-info group-hover:text-white" />
            </div>
            <span className="font-medium">Market Alerts</span>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 hover:bg-gradient-warm hover:text-white transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-lg bg-pink/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4 text-pink group-hover:text-white" />
            </div>
            <span className="font-medium">Join Discussion</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsFeed;
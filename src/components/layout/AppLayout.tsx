import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart3, 
  FileText, 
  Activity, 
  Zap, 
  Brain,
  Play,
  Bell,
  Settings,
  Command,
  Sparkles
} from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
  showFilters?: boolean;
  showGlobalSearch?: boolean;
  title?: string;
  subtitle?: string;
  rightSidebar?: React.ReactNode;
}

const AppLayout = ({ 
  children, 
  showFilters = false, 
  showGlobalSearch = true,
  title = "Tracker Intelligence Platform",
  subtitle = "Single Source of Truth for Market Research",
  rightSidebar
}: AppLayoutProps) => {
  const location = useLocation();
  
  const navigationItems = [
    { id: "overview", name: "C5i Discovery", icon: BarChart3, path: "/overview", badge: null, gradient: "bg-gradient-pastel-blue" },
    { id: "simulate", name: "Simulate & Predict", icon: Brain, path: "/simulate", badge: null, gradient: "bg-gradient-pastel-purple" },
    { id: "knowledge", name: "Knowledge Hub", icon: FileText, path: "/knowledge-hub", badge: "12", gradient: "bg-gradient-pastel-green" }
  ];

  const isActivePath = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Left Sidebar - Dark Theme */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-neutral-900 border-r border-neutral-800 z-50 hidden lg:block">
        {/* Logo Section */}
        <div className="p-6 border-b border-neutral-800">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-white text-lg">TrackerPro</h2>
              <p className="text-xs text-neutral-400">Intelligence Platform</p>
            </div>
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-neutral-800">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20 shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback className="bg-gradient-primary text-white font-semibold">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-white">John Doe</h3>
              <p className="text-sm text-neutral-400">Senior Analyst</p>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-neutral-800 text-neutral-400 hover:text-white">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-3">
          {navigationItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <div
                className={`group flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 hover-lift ${
                  isActivePath(item.path)
                    ? `${item.gradient} text-foreground shadow-lg border border-white/20`
                    : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${
                    isActivePath(item.path) 
                      ? "bg-white/20 backdrop-blur-sm" 
                      : "bg-neutral-800 group-hover:bg-neutral-700"
                  } transition-all duration-300`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <Badge 
                    variant="secondary"
                    className={`text-xs px-2 py-0.5 ${
                      isActivePath(item.path) 
                        ? "bg-white/20 text-foreground border-white/30" 
                        : "bg-neutral-800 text-neutral-300 border-neutral-700"
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
            </Link>
          ))}
        </nav>

      </aside>

      {/* Main Content */}
      <main className={`${rightSidebar ? 'lg:ml-72 lg:mr-80' : 'lg:ml-72'} min-h-screen`}>
        {/* Mobile Header */}
        <div className="lg:hidden glass border-b border-neutral-200/50 p-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity">TrackerPro</Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <header className="glass border-b border-neutral-200/50 sticky top-0 z-40 hidden lg:block">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold gradient-text">
                  {title}
                </h1>
                <p className="text-muted-foreground">{subtitle}</p>
              </div>
              
              {/* Global Search */}
              {showGlobalSearch && (
                <div className="flex-1 max-w-lg mx-8">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Command className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search anything... ⌘K" 
                      className="input-modern pl-12 pr-12 h-12 text-sm bg-white/80"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-neutral-100">
                  <Bell className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="animate-fade-in">
          {children}
        </div>
      </main>

      {/* Right Sidebar */}
      {rightSidebar && (
        <aside className="fixed right-0 top-0 h-screen w-80 glass border-l border-neutral-200/50 z-40 hidden lg:block overflow-y-auto">
          <div className="animate-slide-in-right">
            {rightSidebar}
          </div>
        </aside>
      )}
    </div>
  );
};

export default AppLayout;
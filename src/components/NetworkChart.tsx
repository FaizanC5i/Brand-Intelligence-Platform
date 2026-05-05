import React, { useRef, useEffect, useState } from 'react';

interface NetworkNode {
  id: string;
  name: string;
  value: number;
  level: number;
  color: string;
}

interface NetworkLink {
  source: string;
  target: string;
  strength: number;
}

interface NetworkChartProps {
  simulatedValues: Record<string, number>;
  attributeData: Array<{
    attribute: string;
    riScore: number;
    iconBg: string;
  }>;
}

const NetworkChart: React.FC<NetworkChartProps> = ({ simulatedValues, attributeData }) => {
  // Create nodes data with enhanced positioning
  const createNodesData = () => {
    const nodes: (NetworkNode & { x: number; y: number })[] = [];
    
    // Center coordinates (scaled for better space utilization)
    const centerX = 300;
    const centerY = 250;
    
    // Add central "Consideration" node (like the star in reference)
    nodes.push({
      id: 'consideration',
      name: 'Consideration',
      value: 100,
      level: 0,
      color: '#F59E0B', // Golden/amber color for central node like the star
      x: centerX,
      y: centerY
    });

    // Add attribute nodes in circular arrangement with better spacing
    attributeData.forEach((attr, index) => {
      const simulatedValue = simulatedValues[index] || attr.riScore;
      const level = simulatedValue > 8 ? 1 : 2;
      
      // Calculate position in circle with larger radius for better space utilization
      const angle = (index / attributeData.length) * 2 * Math.PI;
      const baseRadius = level === 1 ? 140 : 180; // Increased radius
      const radiusVariation = Math.sin(index * 0.7) * 15; // Add some variation
      const radius = baseRadius + radiusVariation;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      nodes.push({
        id: `attr-${index}`,
        name: attr.attribute,
        value: simulatedValue,
        level,
        color: getColorFromBg(attr.iconBg),
        x,
        y
      });
    });

    return nodes;
  };

  // Generate strategic connections between nodes (cleaner approach)
  const generateConnections = (nodes: (NetworkNode & { x: number; y: number })[]) => {
    const connections: Array<{from: NetworkNode & { x: number; y: number }, to: NetworkNode & { x: number; y: number }, strength: number}> = [];
    
    // Connect all nodes to center (primary connections)
    const centerNode = nodes.find(n => n.id === 'consideration')!;
    nodes.filter(n => n.id !== 'consideration').forEach(node => {
      connections.push({
        from: centerNode,
        to: node,
        strength: Math.max(0.5, node.value / 10) // Stronger, more visible connections
      });
    });

    // Create strategic inter-node connections (deterministic, no randomness)
    const attributeNodes = nodes.filter(n => n.id !== 'consideration');
    const highPerformingNodes = attributeNodes.filter(n => n.value > 7); // Lower threshold
    
    // Connect adjacent high-performing nodes
    for (let i = 0; i < highPerformingNodes.length; i++) {
      for (let j = i + 1; j < highPerformingNodes.length; j++) {
        const nodeA = highPerformingNodes[i];
        const nodeB = highPerformingNodes[j];
        
        const distance = Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
        const scoreDiff = Math.abs(nodeA.value - nodeB.value);
        
        // More permissive connection criteria - no randomness
        const areAdjacent = distance < 200; // Larger radius for more connections
        const similarScores = scoreDiff < 3; // More lenient similarity
        
        if (areAdjacent || similarScores) {
          const strength = Math.max(0.3, (10 - scoreDiff) / 20);
          connections.push({
            from: nodeA,
            to: nodeB,
            strength: Math.min(0.6, strength)
          });
        }
      }
    }

    return connections;
  };

  // Generate curved path between two points
  const generateCurvedPath = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    // Calculate control point for curve
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const controlDistance = 20;
    const controlX = midX + Math.cos(angle + Math.PI / 2) * controlDistance;
    const controlY = midY + Math.sin(angle + Math.PI / 2) * controlDistance;
    
    return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
  };

  // Convert iconBg class to hex color
  const getColorFromBg = (iconBg: string): string => {
    const colorMap: Record<string, string> = {
      'bg-gradient-primary': '#3B82F6',
      'bg-gradient-pastel-green': '#10B981',
      'bg-gradient-warm': '#F59E0B',
      'bg-gradient-cool': '#06B6D4',
      'bg-gradient-pastel-purple': '#8B5CF6',
      'bg-gradient-pastel-orange': '#F97316',
      'bg-gradient-secondary': '#EC4899',
      'bg-gradient-pastel-blue': '#3B82F6'
    };
    return colorMap[iconBg] || '#6B7280';
  };

  const nodes = createNodesData();
  const connections = generateConnections(nodes);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 rounded-lg border border-purple-200/50 overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <svg width="100%" height="100%" viewBox="0 0 600 500" className="w-full h-full relative z-10">
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="attributeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.15"/>
          </filter>
        </defs>
        
        {/* Draw all network connections */}
        {connections.map((connection, index) => {
          const strokeWidth = Math.max(1.5, connection.strength * 3);
          const isCenterConnection = connection.from.id === 'consideration' || connection.to.id === 'consideration';
          const curvedPath = generateCurvedPath(connection.from.x, connection.from.y, connection.to.x, connection.to.y);
          
          return (
            <path
              key={`connection-${index}`}
              d={curvedPath}
              fill="none"
              stroke={isCenterConnection ? "url(#connectionGradient)" : "rgba(139, 92, 246, 0.4)"}
              strokeWidth={strokeWidth}
              opacity={isCenterConnection ? "0.7" : "0.4"}
              className={isCenterConnection ? "animate-pulse" : ""}
              strokeDasharray={isCenterConnection ? "none" : "3,3"}
            />
          );
        })}
        
        {/* Draw nodes */}
        {nodes.map(node => {
          const isCentral = node.id === 'consideration';
          const size = isCentral ? 40 : Math.max(18, Math.sqrt(node.value) * 3 + 15); // Increased sizes
          
          return (
            <g key={node.id} className="group animate-scale-in">
              {/* Node shadow */}
              <circle
                cx={node.x}
                cy={node.y + 2}
                r={size}
                fill="rgba(0,0,0,0.1)"
                className="transition-all duration-300"
              />
              
              {/* Main node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={size}
                fill={isCentral ? "url(#goldenGradient)" : 
                      node.level === 1 ? "url(#attributeGradient)" : "url(#secondaryGradient)"}
                stroke="white"
                strokeWidth="3" 
                filter="url(#shadow)"
                className="hover-scale transition-all duration-300 cursor-pointer"
                style={{
                  filter: isCentral ? 'url(#glow)' : 'url(#shadow)'
                }}
              />
              
              {/* Special star effect for central node */}
              {isCentral && (
                <>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={size - 8}
                    fill="rgba(255,255,255,0.3)"
                    className="animate-pulse"
                  />
                  {/* Star points */}
                  <polygon
                    points={`${node.x},${node.y-15} ${node.x+4},${node.y-4} ${node.x+15},${node.y-4} ${node.x+6},${node.y+2} ${node.x+9},${node.y+13} ${node.x},${node.y+7} ${node.x-9},${node.y+13} ${node.x-6},${node.y+2} ${node.x-15},${node.y-4} ${node.x-4},${node.y-4}`}
                    fill="rgba(255,255,255,0.4)"
                    className="animate-pulse"
                  />
                </>
              )}
              
              {/* Percentage text */}
              <text
                x={node.x}
                y={node.y + (isCentral ? 0 : -2)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={isCentral ? "11" : Math.max(9, size/2.5)} // Increased font sizes
                fontWeight="bold"
                className="pointer-events-none drop-shadow-sm"
              >
                {isCentral ? 'GOAL' : `${node.value.toFixed(1)}%`}
              </text>
              
              {/* Node name */}
              {isCentral ? (
                <text
                  x={node.x}
                  y={node.y + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="9" 
                  fontWeight="bold"
                  className="pointer-events-none drop-shadow-sm"
                >
                  Consideration
                </text>
              ) : (
                <text
                  x={node.x}
                  y={node.y + size + 16}
                  textAnchor="middle"
                  fill="#374151"
                  fontSize="9" 
                  fontWeight="600"
                  className="pointer-events-none"
                  style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
                >
                  <tspan x={node.x} dy="0">
                    {node.name.split(' ').slice(0, 2).join(' ')}
                  </tspan>
                  {node.name.split(' ').length > 2 && (
                    <tspan x={node.x} dy="11">
                      {node.name.split(' ').slice(2).join(' ')}
                    </tspan>
                  )}
                </text>
              )}
              
              {/* Hover effect ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={size + 4}
                fill="none"
                stroke={isCentral ? '#F59E0B' : node.level === 1 ? '#8B5CF6' : '#6366F1'}
                strokeWidth="2"
                opacity="0"
                className="group-hover:opacity-40 transition-opacity duration-300"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NetworkChart;
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingUp, Activity } from "lucide-react"

const pathogens = [
  {
    name: "Salmonella enterica",
    abundance: 12.4,
    confidence: 98.2,
    risk: "high",
    samples: 8,
  },
  {
    name: "Escherichia coli O157:H7",
    abundance: 8.7,
    confidence: 95.8,
    risk: "high",
    samples: 5,
  },
  {
    name: "Listeria monocytogenes",
    abundance: 5.3,
    confidence: 92.1,
    risk: "medium",
    samples: 3,
  },
  {
    name: "Campylobacter jejuni",
    abundance: 3.8,
    confidence: 89.4,
    risk: "medium",
    samples: 2,
  },
  {
    name: "Staphylococcus aureus",
    abundance: 2.1,
    confidence: 85.6,
    risk: "low",
    samples: 1,
  },
]

export function PathogenDetectionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Detected Pathogens
        </CardTitle>
        <CardDescription>Identified pathogenic organisms with risk assessment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {pathogens.map((pathogen, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground italic">{pathogen.name}</p>
                  <Badge
                    variant={
                      pathogen.risk === "high" ? "destructive" : pathogen.risk === "medium" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {pathogen.risk} risk
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {pathogen.abundance}% abundance
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Activity className="h-3 w-3" />
                    {pathogen.confidence}% confidence
                  </span>
                  <span className="text-xs text-muted-foreground">{pathogen.samples} samples</span>
                </div>
              </div>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  pathogen.risk === "high"
                    ? "bg-destructive"
                    : pathogen.risk === "medium"
                      ? "bg-primary"
                      : "bg-secondary"
                }`}
                style={{ width: `${pathogen.confidence}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

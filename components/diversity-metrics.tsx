"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const metrics = [
  {
    name: "Shannon Index",
    value: "4.82",
    change: "+0.34",
    trend: "up",
    description: "Species diversity",
  },
  {
    name: "Simpson Index",
    value: "0.91",
    change: "+0.08",
    trend: "up",
    description: "Dominance measure",
  },
  {
    name: "Chao1",
    value: "1,247",
    change: "-23",
    trend: "down",
    description: "Species richness",
  },
  {
    name: "Evenness",
    value: "0.78",
    change: "+0.05",
    trend: "up",
    description: "Distribution uniformity",
  },
]

export function DiversityMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Diversity Metrics</CardTitle>
        <CardDescription>Alpha diversity indices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{metric.name}</p>
                <div
                  className={`flex items-center gap-1 text-xs ${
                    metric.trend === "up" ? "text-secondary" : "text-destructive"
                  }`}
                >
                  {metric.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {metric.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

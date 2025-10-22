"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  { sample: "S1", quality: 38, reads: 2.4 },
  { sample: "S2", quality: 36, reads: 2.8 },
  { sample: "S3", quality: 39, reads: 2.2 },
  { sample: "S4", quality: 37, reads: 2.6 },
  { sample: "S5", quality: 35, reads: 2.9 },
  { sample: "S6", quality: 38, reads: 2.5 },
  { sample: "S7", quality: 40, reads: 2.3 },
  { sample: "S8", quality: 36, reads: 2.7 },
]

export function QualityMetricsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Quality Metrics by Sample</CardTitle>
        <CardDescription>Average quality scores and read counts</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="sample" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="quality" fill="hsl(var(--chart-1))" name="Quality Score" radius={[4, 4, 0, 0]} />
            <Bar dataKey="reads" fill="hsl(var(--chart-2))" name="Reads (M)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  { week: "W1", bacteria: 65, archaea: 15, viruses: 10, fungi: 7, other: 3 },
  { week: "W2", bacteria: 67, archaea: 14, viruses: 9, fungi: 7, other: 3 },
  { week: "W3", bacteria: 68, archaea: 13, viruses: 9, fungi: 6, other: 4 },
  { week: "W4", bacteria: 66, archaea: 14, viruses: 10, fungi: 6, other: 4 },
  { week: "W5", bacteria: 69, archaea: 12, viruses: 8, fungi: 7, other: 4 },
  { week: "W6", bacteria: 68, archaea: 13, viruses: 8, fungi: 6, other: 5 },
]

export function AbundanceTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Abundance Over Time</CardTitle>
        <CardDescription>Taxonomic composition trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="bacteria"
              stackId="1"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              name="Bacteria"
            />
            <Area
              type="monotone"
              dataKey="archaea"
              stackId="1"
              stroke="hsl(var(--chart-2))"
              fill="hsl(var(--chart-2))"
              name="Archaea"
            />
            <Area
              type="monotone"
              dataKey="viruses"
              stackId="1"
              stroke="hsl(var(--chart-3))"
              fill="hsl(var(--chart-3))"
              name="Viruses"
            />
            <Area
              type="monotone"
              dataKey="fungi"
              stackId="1"
              stroke="hsl(var(--chart-4))"
              fill="hsl(var(--chart-4))"
              name="Fungi"
            />
            <Area
              type="monotone"
              dataKey="other"
              stackId="1"
              stroke="hsl(var(--chart-5))"
              fill="hsl(var(--chart-5))"
              name="Other"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

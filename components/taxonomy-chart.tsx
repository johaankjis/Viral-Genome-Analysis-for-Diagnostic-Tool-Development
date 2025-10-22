"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Bacteria", value: 68.4, color: "hsl(var(--chart-1))" },
  { name: "Archaea", value: 12.8, color: "hsl(var(--chart-2))" },
  { name: "Viruses", value: 8.3, color: "hsl(var(--chart-3))" },
  { name: "Fungi", value: 6.2, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 4.3, color: "hsl(var(--chart-5))" },
]

export function TaxonomyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Taxonomic Distribution</CardTitle>
        <CardDescription>Composition by domain</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TaxonomyChart } from "@/components/taxonomy-chart"
import { QualityMetricsChart } from "@/components/quality-metrics-chart"
import { PathogenDetectionChart } from "@/components/pathogen-detection-chart"
import { DiversityMetrics } from "@/components/diversity-metrics"
import { AbundanceTimeline } from "@/components/abundance-timeline"
import { Download, FileText, Share2, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function ResultsPage() {
  const [selectedRun, setSelectedRun] = useState("run-2847")

  return (
    <div className="flex h-screen">
      <SidebarNav />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground text-balance">Analysis Results</h1>
                <p className="text-muted-foreground mt-1">View and export pipeline analysis results</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Run Selection */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Select Analysis Run</CardTitle>
                    <CardDescription>Choose a completed pipeline run to view results</CardDescription>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pipeline Run</label>
                    <Select value={selectedRun} onValueChange={setSelectedRun}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="run-2847">RUN-2847 • Outbreak_Dataset_Q1</SelectItem>
                        <SelectItem value="run-2845">RUN-2845 • Metagenomic_Cohort_B</SelectItem>
                        <SelectItem value="run-2843">RUN-2843 • Surveillance_Week_14</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Samples</p>
                      <p className="text-lg font-semibold text-foreground">48</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Runtime</p>
                      <p className="text-lg font-semibold text-foreground">2h 18m</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="text-lg font-semibold text-foreground">Mar 15</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Findings */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    High-Risk Pathogens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">2</div>
                  <p className="text-xs text-muted-foreground mt-1">Detected in 13 samples</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/50 bg-secondary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    Detection Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">94.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">+30% from baseline</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-foreground">Species Identified</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">1,247</div>
                  <p className="text-xs text-muted-foreground mt-1">Across all samples</p>
                </CardContent>
              </Card>
            </div>

            {/* Results Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
                <TabsTrigger value="pathogens">Pathogens</TabsTrigger>
                <TabsTrigger value="quality">Quality</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <TaxonomyChart />
                  <DiversityMetrics />
                </div>

                <AbundanceTimeline />

                <PathogenDetectionChart />
              </TabsContent>

              {/* Taxonomy Tab */}
              <TabsContent value="taxonomy" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <TaxonomyChart />
                  <DiversityMetrics />
                </div>

                <AbundanceTimeline />

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Top Species</CardTitle>
                    <CardDescription>Most abundant organisms detected</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Bacteroides fragilis", abundance: 18.4, samples: 42 },
                        { name: "Faecalibacterium prausnitzii", abundance: 14.2, samples: 38 },
                        { name: "Prevotella copri", abundance: 11.8, samples: 35 },
                        { name: "Ruminococcus bromii", abundance: 9.3, samples: 31 },
                        { name: "Bifidobacterium longum", abundance: 7.6, samples: 28 },
                      ].map((species, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-foreground italic">{species.name}</p>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-muted-foreground">{species.samples} samples</span>
                              <span className="text-sm font-semibold text-foreground">{species.abundance}%</span>
                            </div>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${species.abundance * 5}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pathogens Tab */}
              <TabsContent value="pathogens" className="space-y-6">
                <PathogenDetectionChart />

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Risk Assessment</CardTitle>
                      <CardDescription>Pathogen risk distribution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-destructive" />
                            <span className="text-sm font-medium text-foreground">High Risk</span>
                          </div>
                          <span className="text-lg font-bold text-foreground">2</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-primary" />
                            <span className="text-sm font-medium text-foreground">Medium Risk</span>
                          </div>
                          <span className="text-lg font-bold text-foreground">2</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-secondary" />
                            <span className="text-sm font-medium text-foreground">Low Risk</span>
                          </div>
                          <span className="text-lg font-bold text-foreground">1</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Sample Distribution</CardTitle>
                      <CardDescription>Pathogen presence across samples</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Positive Samples</span>
                          <span className="text-foreground font-medium">13 / 48</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-destructive" style={{ width: "27%" }} />
                        </div>
                        <p className="text-xs text-muted-foreground">27% of samples contain detected pathogens</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-destructive/50 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Recommended Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-foreground">
                    <p>• Immediate notification to public health authorities recommended</p>
                    <p>• Enhanced surveillance protocols should be implemented</p>
                    <p>• Additional confirmatory testing advised for high-risk samples</p>
                    <p>• Review source tracking and contamination pathways</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Quality Tab */}
              <TabsContent value="quality" className="space-y-6">
                <QualityMetricsChart />

                <div className="grid gap-6 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Avg Quality Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">37.8</div>
                      <p className="text-xs text-muted-foreground mt-1">Phred score</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Reads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">124M</div>
                      <p className="text-xs text-muted-foreground mt-1">Across all samples</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Pass Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">96.4%</div>
                      <p className="text-xs text-muted-foreground mt-1">Quality threshold</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Quality Summary</CardTitle>
                    <CardDescription>Per-sample quality assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { sample: "Sample 1-8", status: "excellent", count: 8, color: "bg-secondary" },
                        { sample: "Sample 9-42", status: "good", count: 34, color: "bg-primary" },
                        { sample: "Sample 43-46", status: "acceptable", count: 4, color: "bg-chart-4" },
                        { sample: "Sample 47-48", status: "poor", count: 2, color: "bg-destructive" },
                      ].map((group, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className={`h-8 w-8 rounded ${group.color} flex items-center justify-center`}>
                            <span className="text-xs font-bold text-white">{group.count}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{group.sample}</p>
                            <p className="text-xs text-muted-foreground capitalize">{group.status} quality</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Export Results</CardTitle>
                <CardDescription>Download analysis data in various formats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-4">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <FileText className="h-4 w-4" />
                    PDF Report
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <FileText className="h-4 w-4" />
                    CSV Data
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <FileText className="h-4 w-4" />
                    JSON Export
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <FileText className="h-4 w-4" />
                    FASTA Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

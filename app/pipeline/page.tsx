"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Settings2, CheckCircle2, Circle, Clock, AlertCircle, Info } from "lucide-react"
import { useState } from "react"

export default function PipelinePage() {
  const [selectedDataset, setSelectedDataset] = useState("")
  const [qualityThreshold, setQualityThreshold] = useState([30])
  const [enabledTools, setEnabledTools] = useState({
    qualityControl: true,
    trimming: true,
    alignment: true,
    variantCalling: true,
    taxonomyClassification: true,
    pathogenDetection: true,
  })

  const pipelineSteps = [
    {
      id: 1,
      name: "Quality Control",
      description: "FastQC analysis and quality metrics",
      status: "completed",
      duration: "2m 34s",
      enabled: enabledTools.qualityControl,
    },
    {
      id: 2,
      name: "Read Trimming",
      description: "Adapter removal and quality trimming",
      status: "completed",
      duration: "5m 12s",
      enabled: enabledTools.trimming,
    },
    {
      id: 3,
      name: "Genome Alignment",
      description: "Bowtie2 alignment to reference",
      status: "running",
      duration: "18m 45s",
      enabled: enabledTools.alignment,
    },
    {
      id: 4,
      name: "Variant Calling",
      description: "GATK variant detection",
      status: "pending",
      duration: "—",
      enabled: enabledTools.variantCalling,
    },
    {
      id: 5,
      name: "Taxonomy Classification",
      description: "Kraken2 taxonomic assignment",
      status: "pending",
      duration: "—",
      enabled: enabledTools.taxonomyClassification,
    },
    {
      id: 6,
      name: "Pathogen Detection",
      description: "BLAST pathogen identification",
      status: "pending",
      duration: "—",
      enabled: enabledTools.pathogenDetection,
    },
  ]

  const recentRuns = [
    {
      id: "RUN-2847",
      dataset: "Outbreak_Dataset_Q1",
      started: "2024-03-15 14:23",
      duration: "2h 18m",
      status: "completed",
    },
    {
      id: "RUN-2846",
      dataset: "16S_rRNA_Sample_042",
      started: "2024-03-15 13:45",
      duration: "1h 42m",
      status: "running",
    },
    {
      id: "RUN-2845",
      dataset: "Metagenomic_Cohort_B",
      started: "2024-03-15 11:20",
      duration: "3h 05m",
      status: "completed",
    },
  ]

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
                <h1 className="text-3xl font-bold text-foreground text-balance">Pipeline Execution</h1>
                <p className="text-muted-foreground mt-1">Configure and run bioinformatics analysis pipelines</p>
              </div>
            </div>

            <Tabs defaultValue="configure" className="space-y-6">
              <TabsList>
                <TabsTrigger value="configure">Configure Pipeline</TabsTrigger>
                <TabsTrigger value="monitor">Monitor Runs</TabsTrigger>
                <TabsTrigger value="history">Run History</TabsTrigger>
              </TabsList>

              {/* Configure Tab */}
              <TabsContent value="configure" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Configuration Panel */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-foreground">Dataset Selection</CardTitle>
                        <CardDescription>Choose the dataset to analyze</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="dataset">Select Dataset</Label>
                          <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                            <SelectTrigger id="dataset">
                              <SelectValue placeholder="Choose a dataset" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ds-001">Outbreak_Dataset_Q1 (2.4 GB, 48 samples)</SelectItem>
                              <SelectItem value="ds-002">16S_rRNA_Sample_042 (856 MB, 24 samples)</SelectItem>
                              <SelectItem value="ds-003">Metagenomic_Cohort_B (4.1 GB, 96 samples)</SelectItem>
                              <SelectItem value="ds-004">Surveillance_Week_15 (1.8 GB, 32 samples)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {selectedDataset && (
                          <div className="rounded-lg bg-muted p-4 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Dataset Type:</span>
                              <Badge variant="outline">Metagenomic</Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Read Type:</span>
                              <span className="text-foreground font-medium">Paired-end</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Estimated Runtime:</span>
                              <span className="text-foreground font-medium">2-3 hours</span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-foreground">Pipeline Configuration</CardTitle>
                        <CardDescription>Select analysis steps and parameters</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Quality Control */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="qc"
                                checked={enabledTools.qualityControl}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, qualityControl: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="qc" className="text-sm font-medium cursor-pointer">
                                  Quality Control
                                </Label>
                                <p className="text-xs text-muted-foreground">FastQC analysis</p>
                              </div>
                            </div>
                            <Badge variant="secondary">Required</Badge>
                          </div>

                          {enabledTools.qualityControl && (
                            <div className="ml-9 space-y-3 p-3 rounded-lg bg-muted">
                              <div className="space-y-2">
                                <Label className="text-xs">Quality Score Threshold: {qualityThreshold[0]}</Label>
                                <Slider
                                  value={qualityThreshold}
                                  onValueChange={setQualityThreshold}
                                  min={20}
                                  max={40}
                                  step={1}
                                  className="w-full"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Read Trimming */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="trimming"
                                checked={enabledTools.trimming}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, trimming: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="trimming" className="text-sm font-medium cursor-pointer">
                                  Read Trimming
                                </Label>
                                <p className="text-xs text-muted-foreground">Trimmomatic adapter removal</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Alignment */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="alignment"
                                checked={enabledTools.alignment}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, alignment: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="alignment" className="text-sm font-medium cursor-pointer">
                                  Genome Alignment
                                </Label>
                                <p className="text-xs text-muted-foreground">Bowtie2 reference alignment</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Variant Calling */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="variants"
                                checked={enabledTools.variantCalling}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, variantCalling: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="variants" className="text-sm font-medium cursor-pointer">
                                  Variant Calling
                                </Label>
                                <p className="text-xs text-muted-foreground">GATK variant detection</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Taxonomy */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="taxonomy"
                                checked={enabledTools.taxonomyClassification}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, taxonomyClassification: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="taxonomy" className="text-sm font-medium cursor-pointer">
                                  Taxonomy Classification
                                </Label>
                                <p className="text-xs text-muted-foreground">Kraken2 taxonomic assignment</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pathogen Detection */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                id="pathogen"
                                checked={enabledTools.pathogenDetection}
                                onCheckedChange={(checked) =>
                                  setEnabledTools({ ...enabledTools, pathogenDetection: checked as boolean })
                                }
                              />
                              <div>
                                <Label htmlFor="pathogen" className="text-sm font-medium cursor-pointer">
                                  Pathogen Detection
                                </Label>
                                <p className="text-xs text-muted-foreground">BLAST pathogen identification</p>
                              </div>
                            </div>
                            <Badge variant="secondary">Recommended</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Summary Panel */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-foreground">Run Summary</CardTitle>
                        <CardDescription>Pipeline configuration overview</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Selected Steps:</span>
                            <span className="text-foreground font-medium">
                              {Object.values(enabledTools).filter(Boolean).length} / 6
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Est. Runtime:</span>
                            <span className="text-foreground font-medium">2-3 hours</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Compute Cost:</span>
                            <span className="text-foreground font-medium">$2.40</span>
                          </div>
                        </div>

                        <Button className="w-full gap-2" size="lg" disabled={!selectedDataset}>
                          <Play className="h-4 w-4" />
                          Start Pipeline
                        </Button>

                        <Button variant="outline" className="w-full gap-2 bg-transparent">
                          <Settings2 className="h-4 w-4" />
                          Advanced Settings
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/50 bg-primary/5">
                      <CardHeader>
                        <CardTitle className="text-sm text-foreground flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary" />
                          Pipeline Tips
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>• Enable pathogen detection for outbreak surveillance</p>
                        <p>• Quality threshold of 30+ recommended for clinical samples</p>
                        <p>• Taxonomy classification adds ~30min to runtime</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Monitor Tab */}
              <TabsContent value="monitor" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Active Pipeline Run</CardTitle>
                    <CardDescription>RUN-2846 • Started 28 minutes ago</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Progress Overview */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Overall Progress</span>
                        <span className="text-foreground font-medium">Step 3 of 6 • 50%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all" style={{ width: "50%" }} />
                      </div>
                    </div>

                    {/* Pipeline Steps */}
                    <div className="space-y-3">
                      {pipelineSteps.map((step) => (
                        <div
                          key={step.id}
                          className={`flex items-center gap-4 p-4 rounded-lg border ${
                            step.status === "running"
                              ? "border-primary bg-primary/5"
                              : step.status === "completed"
                                ? "border-border bg-muted/50"
                                : "border-border"
                          }`}
                        >
                          <div>
                            {step.status === "completed" && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                            {step.status === "running" && <Clock className="h-5 w-5 text-primary animate-pulse" />}
                            {step.status === "pending" && <Circle className="h-5 w-5 text-muted-foreground" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-foreground">{step.name}</p>
                              {step.status === "running" && (
                                <Badge variant="default" className="text-xs">
                                  Running
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">{step.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{step.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Pause Run
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Cancel Run
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Recent Pipeline Runs</CardTitle>
                    <CardDescription>View past analysis executions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentRuns.map((run) => (
                      <div
                        key={run.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-border"
                      >
                        <div className="flex items-center gap-4">
                          {run.status === "completed" && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                          {run.status === "running" && <Clock className="h-5 w-5 text-primary animate-pulse" />}
                          {run.status === "failed" && <AlertCircle className="h-5 w-5 text-destructive" />}
                          <div>
                            <p className="text-sm font-medium text-foreground">{run.id}</p>
                            <p className="text-xs text-muted-foreground">{run.dataset}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              run.status === "completed"
                                ? "secondary"
                                : run.status === "running"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {run.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{run.started}</p>
                          <p className="text-xs text-muted-foreground">{run.duration}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

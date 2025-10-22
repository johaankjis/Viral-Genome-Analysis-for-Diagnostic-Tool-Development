import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Database,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react"

export default function DashboardPage() {
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
                <h1 className="text-3xl font-bold text-foreground text-balance">Pathogen Surveillance Dashboard</h1>
                <p className="text-muted-foreground mt-1">Real-time monitoring of microbiome genomics pipeline</p>
              </div>
              <Button className="gap-2">
                <Activity className="h-4 w-4" />
                Run New Analysis
              </Button>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Detection Accuracy</CardTitle>
                  <TrendingUp className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">94.2%</div>
                  <p className="text-xs text-secondary flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +30% from baseline
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Analysis Time</CardTitle>
                  <Clock className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">2.4h</div>
                  <p className="text-xs text-secondary flex items-center gap-1 mt-1">
                    <TrendingDown className="h-3 w-3" />
                    -40% reduction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Datasets</CardTitle>
                  <Database className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">127</div>
                  <p className="text-xs text-muted-foreground mt-1">18 processing now</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Completed Runs</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">1,284</div>
                  <p className="text-xs text-muted-foreground mt-1">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Pipeline Runs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Pipeline Runs</CardTitle>
                  <CardDescription>Latest analysis executions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "RUN-2847", dataset: "Outbreak_Dataset_Q1", status: "completed", time: "12 min ago" },
                    { id: "RUN-2846", dataset: "16S_rRNA_Sample_042", status: "processing", time: "28 min ago" },
                    { id: "RUN-2845", dataset: "Metagenomic_Cohort_B", status: "completed", time: "1 hour ago" },
                    { id: "RUN-2844", dataset: "Surveillance_Week_15", status: "failed", time: "2 hours ago" },
                  ].map((run) => (
                    <div key={run.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {run.status === "completed" && <CheckCircle2 className="h-4 w-4 text-secondary" />}
                        {run.status === "processing" && <Activity className="h-4 w-4 text-primary animate-pulse" />}
                        {run.status === "failed" && <AlertCircle className="h-4 w-4 text-destructive" />}
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
                              : run.status === "processing"
                                ? "default"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {run.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{run.time}</p>
                      </div>
                    </div>
                  ))}

                  <Button variant="ghost" className="w-full gap-2 mt-2">
                    View All Runs
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Pipeline Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Pipeline Tools</CardTitle>
                  <CardDescription>Integrated bioinformatics tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "BLAST", description: "Sequence alignment", status: "active" },
                    { name: "Bowtie", description: "Genome alignment", status: "active" },
                    { name: "GATK", description: "Variant calling", status: "active" },
                    { name: "Quality Control", description: "Data preprocessing", status: "active" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <p className="text-sm font-medium text-foreground">{tool.name}</p>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {tool.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* System Alerts */}
            <Card className="border-secondary/50 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-secondary" />
                  System Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">New outbreak dataset available:</span> Surveillance data from Week 16
                    ready for analysis
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Recommended: Run full pipeline with enhanced pathogen detection
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

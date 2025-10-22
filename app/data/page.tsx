"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Upload,
  FileText,
  Database,
  Trash2,
  Download,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DataPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const datasets = [
    {
      id: "DS-001",
      name: "Outbreak_Dataset_Q1",
      type: "Metagenomic",
      size: "2.4 GB",
      samples: 48,
      uploaded: "2024-03-15",
      status: "ready",
    },
    {
      id: "DS-002",
      name: "16S_rRNA_Sample_042",
      type: "16S rRNA",
      size: "856 MB",
      samples: 24,
      uploaded: "2024-03-14",
      status: "processing",
    },
    {
      id: "DS-003",
      name: "Metagenomic_Cohort_B",
      type: "Metagenomic",
      size: "4.1 GB",
      samples: 96,
      uploaded: "2024-03-12",
      status: "ready",
    },
    {
      id: "DS-004",
      name: "Surveillance_Week_15",
      type: "WGS",
      size: "1.8 GB",
      samples: 32,
      uploaded: "2024-03-10",
      status: "ready",
    },
    {
      id: "DS-005",
      name: "Clinical_Samples_March",
      type: "Amplicon",
      size: "645 MB",
      samples: 18,
      uploaded: "2024-03-08",
      status: "error",
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
                <h1 className="text-3xl font-bold text-foreground text-balance">Data Management</h1>
                <p className="text-muted-foreground mt-1">Upload and manage genomic datasets</p>
              </div>
            </div>

            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Upload New Dataset</CardTitle>
                <CardDescription>Upload FASTQ, FASTA, or BAM files for analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium text-foreground mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">FASTQ, FASTA, BAM, or compressed files (max 10GB)</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="dataset-name">Dataset Name</Label>
                    <Input id="dataset-name" placeholder="e.g., Outbreak_Dataset_Q2" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataset-type">Dataset Type</Label>
                    <Select>
                      <SelectTrigger id="dataset-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metagenomic">Metagenomic</SelectItem>
                        <SelectItem value="16s">16S rRNA</SelectItem>
                        <SelectItem value="wgs">Whole Genome Sequencing</SelectItem>
                        <SelectItem value="amplicon">Amplicon</SelectItem>
                        <SelectItem value="transcriptomic">Transcriptomic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Dataset
                </Button>
              </CardContent>
            </Card>

            {/* Datasets Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Uploaded Datasets</CardTitle>
                    <CardDescription>Manage your genomic data files</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search datasets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="metagenomic">Metagenomic</SelectItem>
                      <SelectItem value="16s">16S rRNA</SelectItem>
                      <SelectItem value="wgs">WGS</SelectItem>
                      <SelectItem value="amplicon">Amplicon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dataset ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Samples</TableHead>
                        <TableHead>Uploaded</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {datasets.map((dataset) => (
                        <TableRow key={dataset.id}>
                          <TableCell className="font-mono text-sm">{dataset.id}</TableCell>
                          <TableCell className="font-medium">{dataset.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{dataset.type}</Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{dataset.size}</TableCell>
                          <TableCell className="text-muted-foreground">{dataset.samples}</TableCell>
                          <TableCell className="text-muted-foreground">{dataset.uploaded}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                dataset.status === "ready"
                                  ? "secondary"
                                  : dataset.status === "processing"
                                    ? "default"
                                    : "destructive"
                              }
                              className="gap-1"
                            >
                              {dataset.status === "ready" && <CheckCircle2 className="h-3 w-3" />}
                              {dataset.status === "processing" && <Clock className="h-3 w-3" />}
                              {dataset.status === "error" && <AlertCircle className="h-3 w-3" />}
                              {dataset.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="gap-2">
                                  <FileText className="h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Download className="h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Database className="h-4 w-4" />
                                  Run Analysis
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Storage Info */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">9.8 GB</div>
                  <p className="text-xs text-muted-foreground mt-1">of 100 GB used</p>
                  <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "9.8%" }} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Datasets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">127</div>
                  <p className="text-xs text-muted-foreground mt-1">5 uploaded this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">3,842</div>
                  <p className="text-xs text-muted-foreground mt-1">Across all datasets</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

"use client";

import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { RefreshCw, AlertCircle, FolderOpen } from "lucide-react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Types for our data
interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

interface ApiResponse {
  data: ChartData[];
  success: boolean;
  message?: string;
}

interface DashboardStats {
  totalProjects: number;
}

// Mock API function for chart data
const fetchChartData = async (): Promise<ApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Fixed data instead of random
  const data = months.slice(0, 8).map((month, index) => ({
    month,
    desktop: 150 + index * 25,
    mobile: 80 + index * 20,
  }));

  return {
    data,
    success: true,
    message: "Chart data loaded successfully",
  };
};

// Mock API function for dashboard stats
const fetchDashboardStats = async (): Promise<DashboardStats> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    totalProjects: 0,
  };
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(221, 83%, 53%)",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(212, 95%, 68%)",
  },
} satisfies ChartConfig;

const Dashboard = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    totalProjects: 0,
  });
  const [chartLoading, setChartLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [chartError, setChartError] = useState<string | null>(null);
  const [statsError, setStatsError] = useState<string | null>(null);

  const loadChartData = async () => {
    try {
      setChartLoading(true);
      setChartError(null);
      const response = await fetchChartData();

      if (response.success) {
        setChartData(response.data);
      } else {
        setChartError(response.message || "Failed to load chart data");
      }
    } catch (err) {
      setChartError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setChartLoading(false);
    }
  };

  const loadDashboardStats = async () => {
    try {
      setStatsLoading(true);
      setStatsError(null);
      const stats = await fetchDashboardStats();
      setDashboardStats(stats);
    } catch (err) {
      setStatsError(
        err instanceof Error ? err.message : "Failed to load stats"
      );
    } finally {
      setStatsLoading(false);
    }
  };

  const loadAllData = async () => {
    await Promise.all([loadChartData(), loadDashboardStats()]);
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Demo card data with icons and colors
  const cardData = [
    {
      title: "Total Projects",
      value: statsLoading
        ? "..."
        : statsError
        ? "Error"
        : dashboardStats.totalProjects.toString(),
      icon: FolderOpen,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className={`${card.bgColor} border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </p>
                  <p className={`text-2xl font-bold ${card.textColor}`}>
                    {statsLoading && (
                      <RefreshCw className="h-5 w-5 animate-spin inline" />
                    )}
                    {!statsLoading && !statsError && card.value}
                    {statsError && (
                      <span className="text-red-500 text-base">
                        <AlertCircle className="h-4 w-4 inline mr-1" />
                        Error
                      </span>
                    )}
                  </p>
                </div>
                <div className={`${card.color} p-3 rounded-full`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-lg border">
        {chartLoading ? (
          <div className="p-6">
            <div className="flex items-center justify-center h-64">
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                <p className="text-gray-600">Loading chart data...</p>
              </div>
            </div>
          </div>
        ) : chartError ? (
          <div className="p-6">
            <div className="flex items-center justify-center h-64">
              <div className="flex flex-col items-center gap-3 text-center">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <p className="text-red-600 font-medium">
                  Error loading chart data
                </p>
                <p className="text-gray-600 text-sm">{chartError}</p>
                <button
                  onClick={loadChartData}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Retry
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Chart */}
            <div className="p-6">
              <ChartContainer
                config={chartConfig}
                className="min-h-[400px] w-full"
              >
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                      fontSize={12}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      fontSize={12}
                      tickFormatter={(value) => `${value}`}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
                    />
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={[4, 4, 0, 0]}
                      name="Desktop"
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={[4, 4, 0, 0]}
                      name="Mobile"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

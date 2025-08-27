export interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

export interface ApiResponse {
  data: ChartData[];
  success: boolean;
  message?: string;
}

export interface cardData {
    data: ApiStatus[];
}

export interface ApiStatus {
  Name: string;
  Url: string;
  Version: string;
  Status: boolean;
  Databases: Database[];
  Dependencies: Dependency[];
  EnvironmentName: string;
  DeployedName: string;
}

export interface Database {
  DatabaseName: string;
  Status: boolean;
}

export interface Dependency {
  APIName: string;
  Status: boolean;
}

export interface ApiResponse {
    data: ApiStatus[] | null,
    status: number,
    message: string
}

export interface alertProps {
    status: number,
    message: string
}
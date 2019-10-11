export interface TenantRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  created: Date;
  processed: boolean;
}

export interface Unit {
  number: string;
  floor: number;
  rent: number;
  vacant?: boolean;
  tenant_requests: Unit[];
}

export interface Property {
  _id?: string; // Assigned automatically by datastore
  name: string;
  address: string;
  units: Unit[];
}

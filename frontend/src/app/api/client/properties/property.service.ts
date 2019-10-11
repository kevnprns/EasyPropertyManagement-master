import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { APIConfig } from '../api.config';

const PROPERTIES_PATH = `${APIConfig.BASE_API_PATH}/api/properties`;

export interface TenantRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  created: Date;
  processed?: boolean;
}

export interface Unit {
  number: string;
  floor: number;
  rent: number;
  vacant?: boolean;
  tenant_requests: TenantRequest[];
}

export interface Property {
  _id?: string; // Assigned automatically by datastore
  name: string;
  address: string;
  units: Unit[];
}

@Injectable()
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

  public queryProperties(
    query: any = {},
    params: { limit: number; offset: number } = { limit: 10, offset: 0 }
  ): Observable<Property[]> {
    return this.http.post<Property[]>(PROPERTIES_PATH, query, {
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
  }

  public updateProperty(
    query: any = {},
  ): Observable<String> {
    return this.http.put<String>(PROPERTIES_PATH, query);
  }
}

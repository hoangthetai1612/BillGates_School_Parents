/* eslint-disable @typescript-eslint/naming-convention */
export interface DetailAbsenceRequest {
  StudentAbsenceRequestId?: number;
  FromDate: Date;
  ToDate: Date;
  Description: string;
  Type: number;
  Status?: number;
}

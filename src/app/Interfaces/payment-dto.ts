export interface PaymentDto {
    price: number;
  installmentStartDate: string; // Use string for ISO date representation
  yearsCount: number;
  userId: number;
  unitId: number;
  installmentPlanId: number;
}

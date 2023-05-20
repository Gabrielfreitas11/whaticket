import { apiWpp } from "../../libs/axios";

interface UpdateSalesMessagePayload {
  message: string;
  companyId: number;
}

export default async function UpdateSalesMessage(
  payload: UpdateSalesMessagePayload
): Promise<void> {
  try {
    await apiWpp.put("/updateClient", {
      fields: {
        message: payload.message
      },
      companyId: String(payload.companyId)
    });

    return null;
  } catch (error) {
    return null;
  }
}

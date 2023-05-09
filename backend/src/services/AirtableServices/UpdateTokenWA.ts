import { api } from "../../libs/axios";

interface UpdateTokenWAPayload {
  token: string;
  companyId: number;
}

export default async function UpdateTokenWA(payload: UpdateTokenWAPayload): Promise<void> {
  
  try {
    await api.post("/updateToken", {
      token: payload.token,
      companyId: String(payload.companyId)
    })  
  } catch (error) {

    return null
  }
}

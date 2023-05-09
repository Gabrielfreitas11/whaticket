import { api } from "../../libs/axios";

interface RegisterUserPayload {
  name: string;
  email: string;
  companyId: number;
}

export default async function RegisterUser(payload: RegisterUserPayload): Promise<void> {
  
  try {
    await api.post("/register", {
      name: payload.name,
      email: payload.email,
      accountId: String(payload.companyId)
    }) 
  } catch (error) {

    return null
  }
}

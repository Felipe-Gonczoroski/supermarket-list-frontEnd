import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/list-items");
    return result.data;
  } catch (error) {
    alert("Erro ao obter dados da API");
    console.log({ error });
  }
};

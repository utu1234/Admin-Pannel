import api from "./api";

export const getPatients = async () => {
  const { data } = await api.get("/patients");
  return data;
};

export const getPatientById = async (id) => {
  const { data } = await api.get(`/patients/${id}`);
  return data;
};

export const createPatient = async (patientData) => {
  const { data } = await api.post("/patients", patientData);
  return data;
};

export const updatePatient = async (id, patientData) => {
  const { data } = await api.put(`/patients/${id}`, patientData);
  return data;
};

export const deletePatient = async (id) => {
  const { data } = await api.delete(`/patients/${id}`);
  return data;
};

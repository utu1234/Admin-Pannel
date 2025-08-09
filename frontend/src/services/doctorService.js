import api from "./api";

export const getDoctors = async () => {
  const { data } = await api.get("/doctors");
  return data;
};

export const getDoctorById = async (id) => {
  const { data } = await api.get(`/doctors/${id}`);
  return data;
};

export const createDoctor = async (doctorData) => {
  const { data } = await api.post("/doctors", doctorData);
  return data;
};

export const updateDoctor = async (id, doctorData) => {
  const { data } = await api.put(`/doctors/${id}`, doctorData);
  return data;
};

export const deleteDoctor = async (id) => {
  const { data } = await api.delete(`/doctors/${id}`);
  return data;
};

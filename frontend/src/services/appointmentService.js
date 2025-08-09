import api from "./api";

export const getAppointments = async () => {
  const { data } = await api.get("/appointments");
  return data;
};

export const getAppointmentById = async (id) => {
  const { data } = await api.get(`/appointments/${id}`);
  return data;
};

export const createAppointment = async (appointmentData) => {
  const { data } = await api.post("/appointments", appointmentData);
  return data;
};

export const updateAppointment = async (id, appointmentData) => {
  const { data } = await api.put(`/appointments/${id}`, appointmentData);
  return data;
};

export const deleteAppointment = async (id) => {
  const { data } = await api.delete(`/appointments/${id}`);
  return data;
};

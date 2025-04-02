if (!localStorage.getItem("appointments")) {
  localStorage.setItem("appointments", JSON.stringify([]));
}

/**
 * Save appointment to local storage
 * @param {Object} appointment - Appointment data
 */
function saveAppointment(appointment) {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push({
    ...appointment,
    timestamp: new Date().toISOString(),
    id: Date.now(),
  });
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

/**
 * Get all appointments from local storage
 * @returns {Array} Array of appointments
 */
function getAllAppointments() {
  return JSON.parse(localStorage.getItem("appointments")) || [];
}

/**
 * Export appointments as JSON file (for admin purposes)
 */
function exportAppointments() {
  const data = JSON.stringify(getAllAppointments(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "appointments-backup.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

window.db = {
  saveAppointment,
  getAllAppointments,
  exportAppointments,
};

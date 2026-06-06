import api from "./api";

export function getRequests() {
  return api.get("/requests");
}

export function createRequest(request) {
  return api.post("/requests", request);
}

export function deleteRequest(id) {
  return api.delete(`/requests/${id}`);
}

export function updateRequestStatus(id, status) {
  return api.patch(`/requests/${id}/status`, {
    status: status,
  });
}

export function findRequestByProtocol(protocol) {
  return api.get(`/requests/protocol/${protocol}`);
}
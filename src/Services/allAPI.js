import commonAPI from "./commonAPI"

//register
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST",'/register',reqBody)
}

//login
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST",'/login',reqBody)
}

//register orphanage
export const registerorphanageAPI=async(reqBody)=>{
    return await commonAPI("POST",'/orphanRegister',reqBody)
}

export const getApprovedOrphanagesAPI = async () => {
    return await commonAPI("GET", "getAllOrphanages", "")
}


export const getCurrentOrphanageAPI = async () => {
    return await commonAPI("GET", "/getorphange", "")
}

export const addNeedAPI = async (reqBody) => {
    return await commonAPI("POST", "/postneeds", reqBody)
}

// Orphanage's OWN needs (used in Dashboard2 / Manage)
export const getNeedsAPI = async () => {
    return await commonAPI("GET", "/getneeds", "")
}

// ALL needs from every orphanage (used in donor's Essential page)
export const getAllNeedsAPI = async () => {
    return await commonAPI("GET", "/getAllNeeds", "")
}

export const updateNeedAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `/updateNeed/${id}`, reqBody)
}

export const deleteNeedAPI = async (id) => {
    return await commonAPI("DELETE", `/deleteNeed/${id}`, "")
}

export const updateOrphanageAPI = async (reqBody) => {
    return await commonAPI("PUT", "/updateOrphanage", reqBody)
}

export const donateEssentialAPI = async (reqBody) => {
    return await commonAPI("POST", "/donate", reqBody)
}

export const getalluserAPI = async () => {
    return await commonAPI("GET", "/getdonoruser", "")
}

export const getallessentialsAPI = async () => {
    return await commonAPI("GET", "/getallessentials", "")
}

export const approveEssentialAPI = async (id) => {
    return await commonAPI("PUT", `/approveEssential/${id}`, "")
}

export const getMyDonationsAPI = async () => {
    return await commonAPI("GET", "/getMyDonations", "")
}

export const getMessagesAPI = async (otherEmail) => {
    return await commonAPI("GET", `/getMessages/${otherEmail}`, "")
}

export const createCheckoutSessionAPI = async (reqBody) => {
  return await commonAPI("POST", `/create-checkout-session`, reqBody)
}

export const verifySessionAPI = async (sessionId) => {
  return await commonAPI("GET", `/verify-session/${sessionId}`)
}

export const getMoneyDonationsAPI = async (reqHeader) => {
  return await commonAPI("GET", `/getMoneyDonations`, "", reqHeader)
}

export const getMyMoneyDonationsAPI = async () => {
  return await commonAPI("GET",'/getMyMoneyDonations')
}

export const getProfileAPI = async () => {
  return await commonAPI("GET",'/getProfile')
}

export const updateProfileAPI = async (reqBody) => {
  return await commonAPI("PUT",'/updateProfile', reqBody)
}

export const getAllOrphanagesAdminAPI = async () => {
    return await commonAPI("GET", "/getAllOrphanagesAdmin", "")
}

export const approveOrphanageAPI = async (id) => {
    return await commonAPI('PUT',`/orphanage/approve/${id}`,{});
};

export const getAllDonorsAPI = async () => {
    return await commonAPI("GET", "/getalluserdonor", "")
}
import { commonAPI } from "./commonApi"
import { serverUrl } from "./ServerUrl"

//api to add video
export const allVideoApi = async(reqBody)=>{
   return await commonAPI('POST',`${serverUrl}/allVideos`,reqBody)
}

//api to get video
export const getAllVideoApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/allVideos`,"")
}

//api to delete a video
export const deletVideoApi = async(id)=>{
   return await commonAPI('DELETE',`${serverUrl}/allVideos/${id}`,{})
}

//api to add video to watchhistory

export const addVideoHistory = async(reqBody)=>{
   return await commonAPI('POST',`${serverUrl}/history`,reqBody)
}

//api to get all video from watchhistory
export const getVideoHistoryApi = async()=>{
   return await commonAPI('GET',`${serverUrl}/history`,"")
}

//api to delete a video from history

export const deleteVideoHistoryApi =async(id)=>{
   return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category

export const addCategoryApi =async(reqBody)=>{
   return await commonAPI('POST',`${serverUrl}/category`,reqBody)
}

//api to get all category

export const getAllCategory=async()=>{
   return await commonAPI('GET',`${serverUrl}/category`)
}

//api to delete category
 export const removeCategoryApi =async(id)=>{
   return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})

 }

//api to update category
export const updateCategoryApi = async(id,reqBody)=>{
   return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)


}
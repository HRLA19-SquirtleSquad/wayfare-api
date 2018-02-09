import {
  // import queries from listingsQuery
  getListingImagesQuery, 
  getListingQuery, 
  updateListingViewCountQuery, 
  getListingSkillsQuery, 
  createListingQuery,
  getSearchedListingsQuery,
  postListingPhotoQuery,
  addSkillToListingQuery
  getUserSkillsQuery,
  createUserSkillsQuery,
  deleteUserSkillsQuery
} from './listingsQuery';
import {
  getUserQuery
} from '../users/usersQuery';
import { getTopListings } from '../../config/redis/redis'

// define controllers

export const getListingPhoto = async (req, res) => {
  try {
    const data = await getListingImagesQuery(req.query.listingId); 
    const result = data.rows[0] ? data.rows[0].url : ''; 
    return res.status(200).send(result);
  } catch (err) {
    throw new Error(err);
  }
}

export const getListing  = async (req, res) => {
  try {
    const data = await getListingQuery(req.query.listingId); 
    return res.status(200).send(data.rows[0]); 
  } catch (err) {
    throw new Error( err); 
  }
}

export const updateListingViewCount = async (req, res) => {
  try {
    const data = await updateListingViewCountQuery(req.body.params.listingId); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getTopTenListings = async (req, res) => {
  try {
    const data = await getTopListings(); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getListingSkills = async (req, res) => {
  try {
    const data = await getListingSkillsQuery(req.query.listingId); 
    return res.status(200).send(data.rows); 
  }  catch (err) {
    throw new Error (err); 
  }
}

export const createListing = async (req, res) => {
  try {
    const data = await createListingQuery(req.body.params.listingDetails); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const getSearchedListings = async (req, res) => {
  try {
    const data = await getSearchedListingsQuery(req.query.city);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error (err);
  }
}
export const postListingPhoto = async (req, res) => {
  try {
    const data = await postListingPhotoQuery(req.body.listingId, req.body.url); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}

export const createUserSkills = async (req, res) => {
  try {
    //get user id first using uid
    const user = await getUserQuery(req.body.uid);
    const userId = user.rows[0].id
    // create user skill using the userId
    // console.log(user.rows[0].id)
    await createUserSkillsQuery(userId, req.body.skill)
    const data = await getUserSkillsQuery(userId);
    // console.log(data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error (err); 
  }
}

export const getUserSkills = async (req, res) => {
  try {
    // get user id first using uid
    const userId = await getUserQuery(req.query.uid);
    // get user skills using the userId
    const data = await getUserSkillsQuery(userId.rows[0].id)
    // console.log(data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error (err); 
  }
}

export const addSkillToListing = async (req, res) => {
  try {
    const data = await addSkillToListingQuery(req.body.params); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error (err); 
  }
}
export const deleteUserSkills = async (req, res) => {
  try {
    await deleteUserSkillsQuery(req.query.id);
    const data = await getUserSkillsQuery(req.query.uid)
    console.log(data)
    return res.status(200).send(data)
  } catch (err) {
    throw new Error(err);
  }
}


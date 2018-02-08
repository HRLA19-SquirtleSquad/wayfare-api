// RETURN string of psql syntax
export const getTopListingsHelper = () => {
  return `
    SELECT * FROM listings 
    ORDER BY viewCount; 
  `;
}

export const getListingImagesHelper = ( listingId ) => {
  return `
    SELECT url from images where id = ${listingId}
  `
}

export const getListingHelper = ( listingId ) => {
  return `
    SELECT * FROM LISTINGS WHERE id = ${listingId}
  `
}


export const updateListingViewCountHelper = ( listingId )  => {
  return `
    UPDATE listings SET viewCount = viewCount + 1 WHERE id = ${listingId} RETURNING viewCount
  `
}

export const getListingSkillsHelper = ( listingId ) => {
  return `
    SELECT skill FROM skills WHERE listingId = ${listingId}
  `
}

export const createListingHelper = ( title, startDate, endDate, latitude, longitude, address, city, hostId, description ) => {
  return `
    INSERT INTO listings VALUES (DEFAULT, '${title}', '${startDate}', '${endDate}', ${latitude}, ${longitude}, '${address}', '${city}', ${hostId}, null, 0, '${description}', 'PENDING') RETURNING id
  `
}
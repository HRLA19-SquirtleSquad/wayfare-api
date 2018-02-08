export const getUserHelper = (uid) => {
  return `
    SELECT * FROM users 
    WHERE uid = '${uid}' 
  `
}

export const postUserHelper = (name, email, uid) => {
  return `
    insert into users values (
      default, 
      '${name}', 
      '${email}', 
      '${uid}', 
      null, 
      0, 
      0, 
      0, 
      0, 
      0
    )
  `
}

export const putUserHelper = (city, bio, image, uid) => {
  return `
    UPDATE users
    SET city = '${city}', bio = '${bio}', image = '${image}'
    WHERE uid = '${uid}'
  `
}

export const getUserNameHelper = (userId) => {
  return `
  SELECT name FROM users WHERE id = ${userId}
  `
}

export const getUserReviewsHelper = (userId) => {
  return `
    SELECT * FROM reviews WHERE commentee = ${userId}
  `
}

export const getGivenReviewsHelper = (id) => {
  return `
    SELECT * FROM reviews WHERE commentor = ${id}
  `
}

export const getReceivedReviewsHelper = (id) => {
  return `
  SELECT * FROM reviews WHERE commentee = ${id}
  `
}

export const upgradeUserHelper = (uid, type) => {
  type === 0 ? type = 1 : type = 0;
  return `
    UPDATE users
    SET type = '${type}'
    WHERE uid = '${uid}'
  `
}

export const getUserDataHelper = ( userId ) => {
  return `
    SELECT * FROM users WHERE id = ${userId}
    `
}
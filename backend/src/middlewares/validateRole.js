const adminRole = (req, res, next ) => {
  const {role} = req.body
  if(role !== 'ADMIN_ROLE'){
      return res.status(401).json({message: 'No tienes permisos para hacer esto'});
  }

  next();
}

module.exports = {
  adminRole
}
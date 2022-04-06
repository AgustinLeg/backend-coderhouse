const adminRole = (req, res, next ) => {
  const {role, name} = req.body
  console.log(req.body)

  if(role !== 'ADMIN_ROLE'){
      return res.status(401).json({message: `${name} no tiene los permisos necesarios`});
  }

  next();
}

module.exports = {
  adminRole
}
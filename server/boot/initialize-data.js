module.exports = function(app) {
  /*Initialize users here.*/
  app.models.User.create([
    {username:'admin', password: 'admin', email: 'admin@gmail.com'},
    {username:'abcd', password: 'abcd', email: 'abcd@gmail.com'},
  ], function(err, users){
    if(err){
      return;
    }
    console.log("Users created.");
  });

};

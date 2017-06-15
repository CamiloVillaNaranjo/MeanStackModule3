var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

//temporary data store
var users ={};

module.exports = function(passport){

    //passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user,done){
        console.log('Serializing user: ', user.username);
        return done(null, user.username);
    });
    
    passport.deserializeUser(function(username,done){
        return done('we have not implemented this',false);
    });

    passport.use('login', new LocalStrategy({
        passReqToCallback:true
        },
        function(req, username, password, done){
            return done('we have not implemented this',false);
        }
    ));

    passport.use('signup', new LocalStrategy({
        passReqToCallback:true //allows us to pass back the entire request to callback
        },
        function(req, username, password, done){
            return done('we have not implemented this',false);
        }
    ));

    var IsValidPassword = function(user,password){
        return bCrypt.compareSync(password,use.password);
    };

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10),null);
    };
};
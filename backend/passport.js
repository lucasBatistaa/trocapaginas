import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';

GoogleStrategy.Strategy;

passport.use(
    new GoogleStrategy({
        clientID: '466281999410-0fs5m0nbvs27cka5enoi6etev6ud039f.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/callback',
        scope: ['profile', 'email'],
    },
    function (accessToken, refreshToken, profile, callback) {
        callback(null, profile);
    } 
    )
);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
})

export default passport;
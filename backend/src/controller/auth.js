import express from 'express';
import passport from '../../passport.js';

const router = express.Router();

router.get('/login/success', (req, res) => {   
    console.log('oi') 

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    if (req.user) {
        console.log('alou')


        res.status(200).json({
            error: false,
            message: 'Login success',
            user: req.user,
        });

    }else {
        console.log('nao alou')
        res.status(403).json({error: true, message:'Not Authorized'});
    }
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: 'Login failed',
    });    
});

router.get(
    '/google/callback', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        passport.authenticate("google", {
            successRedirect: '/localhost:3000',
            failureRedirect: '/login/failed',
        });
    }
);

router.get('/google', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    passport.authenticate('google', ['profile', 'email'])(req, res);
});

export default router;
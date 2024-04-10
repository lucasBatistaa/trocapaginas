import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from '../backend/src/controller/routes.js';
import session from 'express-session';
import passport from 'passport'; 
import GoogleStrategy from 'passport-google-oauth';
const GOOGLE_CLIENT_ID = '';
const GOOGL_CLIENT_SECRET = '';





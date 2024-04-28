import { ImageURI } from '../../../frontend/src/utils/imageURI.jsx';
import {Database} from '../../database.js'

const database = new Database();

export class Post {
    constructor(idPost, idUser, content, timePost, ImageURI) {
        this.idPost = idPost;
        this.idUser = idUser;
        this.content = content;
        this.timePost = timePost;
        this.nameBook = nameBook;
        this.imageUri= imageUri;
    }
 }

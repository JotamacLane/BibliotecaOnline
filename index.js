

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize('rI7MzjMSkgalJx8Me3HsfkwVuqXLH4VnNFKGgXmT', 'mVaYJbkTiKvdpjgaFHrkBl4F7p3xd6HFTDIphygm');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com'

const express = require('express');
const app = express();
const handlebars = require('express-handlebars') ;

const Post = require('./models/Post');

app.engine('handlebars', handlebars.engine({defaultlayout: 'main'}));
app.set('view engine', 'handlerbars');
    // rederizar
    app.engine('handlebars', handlebars.engine ({
        defaultLayout: 'main', runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    })) 

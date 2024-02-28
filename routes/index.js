var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

//==================  Register  =========================
router.post('/insert_user',user.insert)
router.get('/update_user/:id',user.Update);
router.get('/delete_user/:id',user.Delete)
//==================  View data  =========================
router.get("/view",user.get_data);
router.get('/view_user/:id',user.view_user)
//==================  Login and Logout  ====================
router.post('/login_user',user.login)
router.post('/logout_user',user.logout)

module.exports = router;

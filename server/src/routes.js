const AuthController = require('./controllers/AuthController')
const Events = require('./controllers/Events')
const upload = require('./controllers/posterUpload')
const Glimpsesupload = require('./config/multerglimpsesconfig')
const GlimpseController = require('./controllers/GLimpseController')

module.exports = (app) => {
    app.post('/register',AuthController.register)

    app.post('/login',AuthController.login)

    app.post('/verify-token',AuthController.verifyToken)

    //Events Paths
    app.get('/events', Events.getEvents);
    app.post('/events', upload.single('COC_Event'), Events.uploadEvent)
    app.get('/events/:id', Events.getEventById);
    app.put('/events/:id', Events.updateEvent);
    app.delete('/events/:id', Events.deleteEvent);

    app.post('/glimpses/upload',Glimpsesupload.fields([{name: 'photos',maxCount: 10}]),GlimpseController.save)
}
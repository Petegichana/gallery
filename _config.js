var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://petegichana:2011417242.Ab@GalleryCluster.mmyd3z6.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://petegichana:2011417242.Ab@GalleryCluster.mmyd3z6.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://petegichana:2011417242.Ab@GalleryCluster.mmyd3z6.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
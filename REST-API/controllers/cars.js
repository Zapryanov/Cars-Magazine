const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const carId = req.query.id;
        models.Cars.find(carId ? { _id: carId } : {}).sort("-created_at").populate('author', '-password')
            .then((cars) => res.send(carId ? cars[0] : cars))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, price, contact, imageUrl } = req.body;
        const { _id } = req.user;

        models.Cars.create({ description, price, contact, imageUrl, author: _id })
            .then((createdCars) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdCars } }),
                    models.Cars.findOne({ _id: createdCars._id })
                ]);
            })
            .then(([modifiedObj, carsObj]) => {
                res.send(carsObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description, price, contact, imageUrl  } = req.body;
        models.Cars.updateOne({ _id: id }, { description, price, contact, imageUrl })
            .then((updatedCars) => res.send(updatedCars))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const userId = req.user._id;
        Promise.all([
            models.Cars.deleteOne({ _id: id }),
            models.User.updateOne({ _id: userId }, { $pull: { posts: id } })
        ])
            .then(([removedCars, updatedUser]) => res.send(removedCars))
            .catch(next)
    }
};
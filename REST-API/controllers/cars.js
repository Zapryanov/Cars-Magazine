const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const carId = req.params.id;
        models.Cars.find(carId ? { _id: carId } : {}).populate('author', '-password')
            .then((cars) => res.send(carId ? cars[0] : cars))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, price, contact } = req.body;
        const { _id } = req.user;

        models.Cars.create({ description, price, contact, author: _id })
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
        const { description } = req.body;
        models.Cars.updateOne({ _id: id }, { description })
            .then((updatedCars) => res.send(updatedCars))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Cars.deleteOne({ _id: id })
            .then((removedCars) => res.send(removedCars))
            .catch(next)
    }
};
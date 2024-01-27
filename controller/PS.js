const { ObjectId } = require('mongodb');
const PS = require('../models/PSschema');

const ProbS = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const doc = await PS.findOne({ _id: new ObjectId(req.params.id) });
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ error: 'Document not found' });
            }
        } else {
            res.status(400).json({ error: 'Invalid ID format' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err });
    }
};

const edit = async (req, res) => {
    try {
        const id = req.query.id;
        const psData = await PS.findById(id);
        if (psData) {
            res.render('edit', { psData: psData });
        } else {
            res.redirect('/home');
        }
    } catch (e) {
        console.log(e.message);
    }
};

const update = async (req, res) => {
    try {
        const psId = req.body.psId;
        const studentId = req.body.studentId;

        const ps = await PS.findOne({ _id: psId, 'studentsData._id': studentId });
        if (!ps) {
            return res.status(404).json({ error: 'Student not found' });
        }

        const updateData = await PS.findOneAndUpdate(
            { _id: psId, 'studentsData._id': studentId },
            {
                $set: {
                    'studentsData.$.name': req.body.Name,
                    'studentsData.$.rollNo': req.body.rollNo,
                    'studentsData.$.year': req.body.year
                }
            },
            { new: true }
        );

        res.redirect('/home');
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = { ProbS, edit, update };

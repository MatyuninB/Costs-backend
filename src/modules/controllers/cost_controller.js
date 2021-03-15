const { reduce } = require('underscore');
const Costs = require('../../db/models/costs/index.js');


module.exports.parsAllCosts = (req, res) => {
  Costs.find().then(result => {
    res.send(JSON.stringify(result));
  })
}

module.exports.setNewCost = (req, res) => {
  let cost = new Costs (req.body);
  console.log(req.body)

  cost.save().then(res.send("succes"));
}

module.exports.costDelete = (req, res) => {
  Costs.deleteOne({ _id : req.body._id}).then(res.send('delited'));
}

module.exports.editCost = (req, res) => {
  Costs.updateOne({ _id : req.body._id}, req.body).then(res.send('edited'));
}

module.exports.summCosts = (req, res) => {
  let summ = 0;
  
  Costs.find()
  .then(result => {
    result.forEach((elem, i) => {
      return summ += result[i].cost;
    });
  })
  .then(result => {
    res.send(JSON.stringify(summ));
  });
}

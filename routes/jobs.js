const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('deu certo')
})

//add job via post

router.post('/add', (req, res) => {

  let { titulo_jobs, salario_jobs, compania, email, new_job, description } = req.body;

  //insert
  Job.create({
    titulo_jobs,
    salario_jobs,
    compania,
    email,
    new_job,
    description
  })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router;
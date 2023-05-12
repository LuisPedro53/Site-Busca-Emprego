const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
//rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo')
})

//detalhe da vaga

router.get('/view/:id', (req, res) => Job.findOne({
  where:{id: req.params.id}
}).then(job => {
  res.render('view',{
    job
  });
}).catch(err => console.log(err)))

//form da rota de envio
router.get('/add', (req, res) => {
  res.render('add')
})

//add job via post

router.post('/add', (req, res) => {

  let { titulo_jobs, salario_jobs, company, email, new_job, description } = req.body;

  //insert
  Job.create({
    titulo_jobs,
    salario_jobs,
    company,
    email,
    new_job,
    description
  })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router;
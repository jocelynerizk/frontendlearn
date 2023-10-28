const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3001;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_adresse_email@gmail.com',
    pass: 'votre_mot_de_passe'
  }
});

app.post('/envoyer-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'adresse_de_destination@example.com',
    subject: 'Nouveau message de formulaire de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Email envoyé avec succès');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

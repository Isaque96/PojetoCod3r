const mongoose = require('mongoose');

// Problema de reconhecimento no Node trocar de "localhost" para o IP 127.0.0.1
mongoose.connect('mongodb://127.0.0.1/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(e => {
    const msg = 'Não foi possível conectar com MongoDB!' + e;
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
  });
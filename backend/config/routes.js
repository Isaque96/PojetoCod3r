module.exports = app => {
  app.route('/users').post(app.api.user.save).get(app.api.user.get);

  app.route('/users/:id').put(app.api.user.save).get(app.api.user.getById);

  app.route('/categories').get(app.api.category.get).post(app.api.category.save);

  // Cuidado com a Ordem, aqui ela importa - Quando ele escuta o path com algum parametro tem que ser sempre passado depois do path normal que não é parametro - Ex.: tree antes de :id
  app.route('/categories/tree').get(app.api.category.getTree);

  app.route('/categories/:id').get(app.api.category.getById).put(app.api.category.save).delete(app.api.category.remove);
}
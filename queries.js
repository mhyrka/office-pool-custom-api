const database = require("./database-connection");

module.exports = {
    list(){
      return database('user_picks')
    },
    read(id){
      return database('user_picks').where('id', id).first()
    },
    create(picks_card){
      return database('user_picks').insert(picks_card)
                                   .returning('*')
                                   .then(record => record[0])
    },
    update(id, game){
      return database('user_picks').update(picks_card)
                                   .where('id', id)
                                   .returning('*')
                                   .then(record => record[0])
    },
    delete(id){
      return database('user_picks').delete().where('id', id)
    }
};

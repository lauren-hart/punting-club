exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {id: 4401, person: 'Lauren', couple: 'Bielby/Hart', email: 'laurenannehart@gmail.com', imagesolo: '../server/public/images/lauren.png', imagecouple: '../server/public/images/bielby-hart.png'},
        {id: 4402, person: 'Thomas', couple: 'Bielby/Hart', email: 'tbielby@gmail.com', imagesolo: '../server/public/images/thomas.png', imagecouple: '../server/public/images/bielby-hart.png'},
        {id: 4403, person: 'Hannah', couple: 'Scaglia/Scaglia', email: 'hannah@gmail.com', imagesolo: '../server/public/images/hannah.png', imagecouple: '../server/public/images/scaglias.png'},
        {id: 4404, person: 'Steven', couple: 'Scaglia/Scaglia', email: 'steven@gmail.com', imagesolo: '../server/public/images/steven.png', imagecouple: '../server/public/images/scaglias.png'},
        {id: 4405, person: 'Lucy', couple: 'Burningham/Sim', email: 'lucy@gmail.com', imagesolo: '../server/public/images/lucy.png', imagecouple: '../server/public/images/burningham-sim.png'},
        {id: 4406, person: 'Saul', couple: 'Burningham/Sim', email: 'saul@gmail.com', imagesolo: '../server/public/images/saul.png', imagecouple: '../server/public/images/burningham-sim.png'}
      ])
    })
}

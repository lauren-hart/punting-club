exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {id: 4401, person: 'Lauren', couple: 'Bielby/Hart', email: 'laurenannehart@gmail.com', imagesolo: '../images/lauren.png', imagecouple: '../images/bielby-hart.png'},
        {id: 4402, person: 'Thomas', couple: 'Bielby/Hart', email: 'tbielby@gmail.com', imagesolo: '../images/thomas.png', imagecouple: '../images/bielby-hart.png'},
        {id: 4403, person: 'Hannah', couple: 'Scaglia/Scaglia', email: 'hannah@gmail.com', imagesolo: '../images/hannah.png', imagecouple: '../images/scaglias.png'},
        {id: 4404, person: 'Steven', couple: 'Scaglia/Scaglia', email: 'steven@gmail.com', imagesolo: '../images/steven.png', imagecouple: '../images/scaglias.png'},
        {id: 4405, person: 'Lucy', couple: 'Burningham/Sim', email: 'lucy@gmail.com', imagesolo: '../images/lucy.png', imagecouple: '../images/burningham-sim.png'},
        {id: 4406, person: 'Saul', couple: 'Burningham/Sim', email: 'saul@gmail.com', imagesolo: '../images/saul.png', imagecouple: '../images/burningham-sim.png'}
      ])
    })
}

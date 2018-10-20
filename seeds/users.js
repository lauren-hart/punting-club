exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: '11101',
          name: 'Joe Banks',
          email: 'joeb@yahoo.com',
          hash: 'jsahfksfbe839afhap9fdfbsdeih9w',
          hours: '9am - 3pm',
          isSeller: '1',
          lat: '-36.8019299',
          long: '174.7766424',
          suburb: 'Hauraki'
        },
        {
          address: '23 Arthur Crescent',
          city: 'Auckland',
          description: 'Kids have moved out of home so I have lots of produce to share!',
          email: 'mon@gmail.com',
          hash: 'jsahfksfbe839afhap9fdfbsdeih9w',
          hours: 'Saturday 9am - 12pm',
          id: '11102',
          isSeller: '1',
          lat: '-36.7961868',
          long: '174.7806733',
          name: 'Mon Collins',
          suburb: 'Hauraki'
        }
      ])
    })
};

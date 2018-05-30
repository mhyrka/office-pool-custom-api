
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_picks').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_picks').insert([
        { id: 1, user_name: 'Dirty Mike', picks: ['Cincinnati Bengals',
                                                  'Tampa Bay Buccaneers',
                                                  'Tennessee Titans',
                                                  'Los Angeles Rams',
                                                  'Washington Redskins',
                                                  'San Francisco 49ers',
                                                  'Seattle Seahawks',
                                                  'Jacksonville Jaguars',
                                                  'Chicago Bears',
                                                  'New York Jets'] },
        { id: 2, user_name: 'Sea Bass', picks: ['Indianapolis Colts',
                                                  'New Orleans Saints',
                                                  'Tennessee Titans',
                                                  'Oakland Raiders',
                                                  'Arizona Cardinals',
                                                  'Minnesota Vikings',
                                                  'Denver Broncos',
                                                  'New York Giants',
                                                  'Green Bay Packers',
                                                  'Detroit Lions'] },
        { id: 3, user_name: 'Frank the Tank', picks: ['Cleveland Browns',
                                                  'New England Patriots',
                                                  'Tennessee Titans',
                                                  'Carolina Panthers',
                                                  'Baltimore Ravens',
                                                  'Philadelphia Eagles',
                                                  'Los Angeles Chargers',
                                                  'Detroit Lions',
                                                  'Green Bay Packers',
                                                  'New York Giants'] }
      ]);
    })
    .then(function() {
     // Moves id column (PK) auto-incrementer to correct value after inserts
     return knex.raw("SELECT setval('user_picks_id_seq', (SELECT MAX(id) FROM user_picks))")
   })

};

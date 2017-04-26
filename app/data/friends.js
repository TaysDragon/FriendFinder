// ===============================================================================
// DATA
// Below data will hold all of the people.
// Initially we just set it equal to a "dummy" person.
// Can be an empty array as well.
// ===============================================================================

var friendsArray = [{
    name:"Moshe",
  photo:"https://i.kinja-img.com/gawker-media/image/upload/s--LJ4kR8Aa--/c_scale,fl_progressive,q_80,w_800/197gkt72jr0e1jpg.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];

// Export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

let GobletofFire= new Map( [
    ['HarryPotter', 'Hogwarts'],
    ['CedricDiggory', 'Hogwarts'],
    ['FleurDelacour', 'Beauxbatons'],
    ['Viktor Krum', 'Durmstrang']
  ]);
  for (let name of GobletofFire.keys()) {
    console.log(name+'-'+'X');
  }
  for (let school of GobletofFire.values()) {
    console.log(school+'-'+'Y');
  }
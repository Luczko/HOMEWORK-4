class Soldier {
  constructor(name) {
    this.name = name;
  }
}

(function() {
  let unit = [];
  let numberOfSoldiers = 7;
  for (let i = 1; i <= numberOfSoldiers; i++) {
    unit.push(new Soldier(`Soldier ${i}`));
  }
  let executioner = 0;
  for (; unit.length > 1; ) {
    let fatality = (executioner + 1) % unit.length;
    console.log(
      "executioner:",
      unit[executioner].name,
      "victim:",
      unit[fatality].name
    );
    unit.splice(fatality, 1);
    executioner = fatality % unit.length;
  }
  console.log(unit[0].name, "remains alive");
})();

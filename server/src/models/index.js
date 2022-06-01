import sequelize from "./initOrm";

import CircuitsInit from "./Circuits";
import ConstructorResultsInit from "./ConstructorResults";
import CarConstructorInit from "./CarConstructors";
import ConstructorStandingsInit from "./ConstructorStandings";
import DriversInit from "./Drivers";
import DriverStandingsInit from "./DriverStandings";
import RacesInit from "./Races";
import ResultsInit from "./Results";
import SessionInit from "./Sessions";
import DonationsInit from "./Donations";

const Circuits = CircuitsInit(sequelize);
const ConstructorResults = ConstructorResultsInit(sequelize);
const CarConstructor = CarConstructorInit(sequelize);
const ConstructorStandings = ConstructorStandingsInit(sequelize);
const Drivers = DriversInit(sequelize);
const DriverStandings = DriverStandingsInit(sequelize);
const Races = RacesInit(sequelize);
const Results = ResultsInit(sequelize);
const Sessions = SessionInit(sequelize);
const Donations = DonationsInit(sequelize);

Results.belongsTo(CarConstructor, { foreignKey: "car_constructor_id" });
CarConstructor.hasMany(Results, { foreignKey: "car_constructor_id" });

ConstructorResults.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(ConstructorResults, { foreignKey: "race_id" });

ConstructorResults.belongsTo(CarConstructor, {
  foreignKey: "car_constructor_id",
});
CarConstructor.hasMany(ConstructorResults, {
  foreignKey: "car_constructor_id",
});

ConstructorStandings.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(ConstructorStandings, { foreignKey: "race_id" });

ConstructorStandings.belongsTo(CarConstructor, {
  foreignKey: "car_constructor_id",
});
CarConstructor.hasMany(ConstructorStandings, {
  foreignKey: "car_constructor_id",
});

DriverStandings.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(DriverStandings, { foreignKey: "race_id" });

DriverStandings.belongsTo(Drivers, { foreignKey: "driver_id" });
Drivers.hasMany(DriverStandings, { foreignKey: "driver_id" });

Races.belongsTo(Circuits, { foreignKey: "circuit_id" });
Circuits.hasMany(Races, { foreignKey: "circuit_id" });

Results.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(Results, { foreignKey: "race_id" });

Results.belongsTo(Drivers, { foreignKey: "driver_id" });
Drivers.hasMany(Results, { foreignKey: "driver_id" });

Sessions.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(Sessions, { foreignKey: "race_id" });

export {
  sequelize,
  Circuits,
  ConstructorResults,
  CarConstructor,
  ConstructorStandings,
  Drivers,
  DriverStandings,
  Races,
  Results,
  Sessions,
  Donations,
};

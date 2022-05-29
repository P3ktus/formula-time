import sequelize from "./initOrm";

import CircuitsInit from "./Circuits";
import ConstructorResultsInit from "./ConstructorResults";
import ConstructorsInit from "./Constructors";
import ConstructorStandingsInit from "./ConstructorStandings";
import DriversInit from "./Drivers";
import DriverStandingsInit from "./DriverStandings";
import RacesInit from "./Races";
import ResultsInit from "./Results";
import SessionInit from "./Sessions";

const Circuits = CircuitsInit(sequelize);
const ConstructorResults = ConstructorResultsInit(sequelize);
const Constructors = ConstructorsInit(sequelize);
const ConstructorStandings = ConstructorStandingsInit(sequelize);
const Drivers = DriversInit(sequelize);
const DriverStandings = DriverStandingsInit(sequelize);
const Races = RacesInit(sequelize);
const Results = ResultsInit(sequelize);
const Sessions = SessionInit(sequelize);

ConstructorResults.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(ConstructorResults, { foreignKey: "race_id" });

ConstructorResults.belongsTo(Constructors, { foreignKey: "constructor_id" });
Constructors.hasMany(ConstructorResults, { foreignKey: "constructor_id" });

ConstructorStandings.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(ConstructorStandings, { foreignKey: "race_id" });

ConstructorStandings.belongsTo(Constructors, { foreignKey: "constructor_id" });
Constructors.hasMany(ConstructorStandings, { foreignKey: "constructor_id" });

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

Results.belongsTo(Constructors, { foreignKey: "constructor_id" });
Constructors.hasMany(Results, { foreignKey: "constructor_id" });

Sessions.belongsTo(Races, { foreignKey: "race_id" });
Races.hasMany(Sessions, { foreignKey: "race_id" });

export {
  sequelize,
  Circuits,
  ConstructorResults,
  Constructors,
  ConstructorStandings,
  Drivers,
  DriverStandings,
  Races,
  Results,
  Sessions,
};

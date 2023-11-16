import db from "../config/dbConfig.js";
import Sequelize from "sequelize";

const DataTypes = Sequelize;
const Users = db.define(
  "mahasiswa",
  {
    nim: {
      type: DataTypes.STRING,
    },
    nama_mahasiswa: {
      type: DataTypes.STRING,
    },
    jurusan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

const mata_kuliah = db.define("mata_kuliah", {
  kode_mata_kuliah: {
    type: DataTypes.STRING,
  },
  nama_mata_kuliah: {
    type: DataTypes.TEXT,
  },
});

const nilai_mahasiswa = db.define("nilai_mahasiswa", {
  nim: {
    type: DataTypes.STRING,
  },
  kode_mata_kuliah: {
    type: DataTypes.STRING,
  },
  uts: {
    type: DataTypes.STRING,
  },
  tugas: {
    type: DataTypes.STRING,
  },
  uas: {
    type: DataTypes.TEXT,
  },
});

(async () => {
  await db.sync();
})();

export default { Users, mata_kuliah, nilai_mahasiswa };

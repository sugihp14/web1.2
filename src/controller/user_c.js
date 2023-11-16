import userMod from "../model/user_m.js";

const InputNilai = async (req, res) => {
  const nim = req.body.nim;
  const kode_mata_kuliah = req.body.kode_mata_kuliah;
  const uts = req.body.uts;
  const tugas = req.body.tugas;
  const uas = req.body.uas;
  try {
    const hasil = await userMod.nilai_mahasiswa.count({
      where: {
        nim: nim,
      },
    });
    if (hasil > 0) {
      res.json({ msg: "Your Name is Already Use" });
    } else {
      await userMod.nilai_mahasiswa.create({
        nim: nim,
        kode_mata_kuliah: kode_mata_kuliah,
        uts: uts,
        tugas: tugas,
        uas: uas,
      });
      res.json({ msg: "Register Berhasil" });
    }
  } catch (error) {
    return res.status(404).json({ msg: "Gagal Register" });
  }
};

const getmahasiswa = async (req, res) => {
  try {
    const data = await userMod.Users.findAll();
    return res.status(200).json({ msg: "Get All", data: data });
  } catch (error) {
    return res.status(404).json({ msg: "gagal" });
  }
};
const getkodemata = async (req, res) => {
  try {
    const data = await userMod.mata_kuliah.findAll();
    return res.status(200).json({ msg: "Get All", data: data });
  } catch (error) {
    return res.status(404).json({ msg: "gagal" });
  }
};
const getnilai = async (req, res) => {
  try {
    const data = await userMod.nilai_mahasiswa.findAll();
    return res.status(200).json({ msg: "Get All", data: data });
  } catch (error) {
    return res.status(404).json({ msg: "gagal" });
  }
};

export { getkodemata, getmahasiswa, InputNilai, getnilai };

window.onload = function() {
    document.getElementById('tampilkanBtn').onclick = function() {
        var nama = document.getElementById('nama').value.trim() || "(tidak diisi)";
        var kelas = document.getElementById('kelas').value.trim() || "(tidak diisi)";

        var gender = "(belum dipilih)";
        var radios = document.getElementsByName('gender');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
                break;
            }
        }

        var ekstra = [];
        var checkboxes = document.getElementsByName('ekstra');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                ekstra.push(checkboxes[i].value);
            }
        }
        if (ekstra.length === 0) ekstra = ["(tidak memilih)"];

        var jadwal = "(belum dipilih)";
        var jadwalRadios = document.getElementsByName('jadwal');
        for (var i = 0; i < jadwalRadios.length; i++) {
            if (jadwalRadios[i].checked) {
                jadwal = jadwalRadios[i].value;
                break;
            }
        }

        var hasilText = "Nama: " + nama +
                        "\nKelas/Tingkatan: " + kelas +
                        "\nJenis Kelamin: " + gender +
                        "\nEkstrakurikuler: " + ekstra.join(", ") +
                        "\nJadwal Belajar: " + jadwal;

        document.getElementById('hasil').innerText = hasilText;
    };

    document.getElementById('resetBtn').onclick = function() {
        document.getElementById('nama').value = "";
        document.getElementById('kelas').value = "";

        var radios = document.getElementsByName('gender');
        for (var i = 0; i < radios.length; i++) radios[i].checked = false;

        var checkboxes = document.getElementsByName('ekstra');
        for (var i = 0; i < checkboxes.length; i++) checkboxes[i].checked = false;

        var jadwalRadios = document.getElementsByName('jadwal');
        for (var i = 0; i < jadwalRadios.length; i++) jadwalRadios[i].checked = false;

        document.getElementById('hasil').innerText = "Data akan muncul di sini...";
    };
};

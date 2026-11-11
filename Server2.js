const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h2>Anda berada pada halaman index</h2>');

    } else if (req.url == '/mahasiswa') {

        const data = {
            nama: "Tri Kholipianto Rahmatsyah",
            nim: "20250040019",
            kelas: "TI 25G",
            matkul: "Pemrograman Berbasis Platform",
            server: "Node.js"
        };

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(data, null, 4));

    } else if (req.url == '/dosen') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h2>Anda berada pada halaman dosen</h2>');

    } else if (req.url == '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h2>Anda berada pada halaman admin</h2>');

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2>Page Not Found (404)</h2>');
    }

});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
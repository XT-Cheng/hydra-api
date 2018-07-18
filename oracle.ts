import * as oracledb from 'oracledb';

export class Database {
    static select() {
        oracledb.getConnection({
            user          : "hydadm",
            password      : "HyTest$6",
            connectString : "cne35db03/HYD1E35"
        }).then(connection => {
            connection.execute(`select LOSNR from LOS_BESTAND`,{},{outFormat: oracledb.OBJECT})
            .then(ret => {
                console.log(ret.rows[0].USER);
                Database.doRelease(connection);
            });
        });
    }

    static doRelease(connection) {
        connection.close(
          function(err) {
            if (err)
              console.error(err.message);
          });
      }
}

/* Create a homepage http://localhost:port/ and an API endpoint http://localhost:port/api/genres to run CRUD operations
 * on a list of movie genres in the fictional streaming service Streamly.
 */

/* jshint esversion: 6 */

// required modules
const express = require('express');
const app = express();

const root = require('./routes/root');
const genres = require('./routes/genres');

app.use(express.json());

app.use('/', root);
app.use('/api/genres', genres);

// expose service on env variable PORT, or 3000 if PORT not set
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
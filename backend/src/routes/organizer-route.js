// src/routes/hackathonRoutes.js
import { Router } from 'express';
import pgPool from '../pgdb.js'

const router = Router();

/**
 * Create a new hackathon
 *
 * @route POST /hackathons
 * @body {string} req.body.name - The name of the hackathon
 * @body {string} req.body.start_date - The start date of the hackathon
 * @body {string} req.body.end_date - The end date of the hackathon
 * @body {string} req.body.description - The description of the hackathon
 * @body {string} req.body.image_url - The URL of the hackathon image
 * @body {string} req.body.level - The level of the hackathon (easy, medium, hard)
 * @body {string} req.body.status - The status of the hackathon (active, upcoming, past)
 * @returns {object} - Returns the created hackathon or an error message
 * @throws {Error} - If there are errors, the hackathon creation failed
 */
router.post('/hackathons', async (req, res, next) => {
  const psqlClient = await pgPool.connect();

  try {
    // Extract and validate input data
    const { name, start_date, end_date, description, image_url, level, status } = req.body;

    if (!name || !start_date || !end_date || !description || !image_url || !level || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert hackathon into the database
    const query = `
      INSERT INTO hackathons (name, start_date, end_date, description, image_url, level, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [name, start_date, end_date, description, image_url, level, status];
    const result = await psqlClient.query(query, values);

    // Send the created hackathon as response
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Creating hackathon failed:', err);
    next(err);
  } finally {
    psqlClient.release();
  }
});

export default router;

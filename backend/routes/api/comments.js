/**
 * Express router for comment-related API endpoints.
 *
 * Provides handlers to list, create, and delete comments using the Mongoose
 * "Comment" model. The router is intended to be mounted under
 * /api/comments (e.g. app.use('/api/comments', router)).
 *
 * Routes:
 *  - GET /        : Fetch all comments
 *  - POST /       : Create a new comment (expects comment data in req.body)
 *  - DELETE /:id  : Delete a comment by its MongoDB ObjectId
 *
 * Error handling:
 *  - GET   : Returns 200 + array of comments on success, 500 on failure.
 *  - POST  : Returns 201 + created comment on success, 400 on validation/failure.
 *  - DELETE: Returns 200 + success message on success, 404 if not found, 500 on failure.
 *
 * @module routes/api/comments
 */
 
/**
 * GET / - Retrieve all comments.
 *
 * Retrieves all comment documents from the database and responds with a JSON
 * array of comments.
 *
 * @name GetComments
 * @function
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the comments or an error.
 */
 
/**
 * POST / - Create a new comment.
 *
 * Creates a new Comment document using the request body payload. On success,
 * responds with status 201 and the saved comment document. On failure responds
 * with status 400 and an error message.
 *
 * @name CreateComment
 * @function
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {Object} req.body - Payload to create the comment (shape depends on Comment schema).
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the created comment or an error.
 */
 
/**
 * DELETE /:id - Delete a comment by ID.
 *
 * Deletes the comment whose _id matches req.params.id. If the comment is not
 * found, responds with 404. On successful deletion responds with a success
 * message. On server/database error responds with 500.
 *
 * @name DeleteComment
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {string} req.params.id - MongoDB ObjectId of the comment to delete.
 * @param {import('express').Response} res - Express response object.
 * @returns {void} Sends a JSON response indicating success or an error.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot,
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});
//add another endpoint for deleting comments
router.delete("/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((deletedComment) => {
            if (!deletedComment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.json({ message: "Comment deleted successfully" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Failed to delete comment" });
        });
});
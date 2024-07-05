import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  getUser,
} from '../controllers/userController.js';
import { userControlAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/', getUser)
router
  .route('/profile')
  .get(userControlAuth, getUserProfile)
  .put(userControlAuth, updateUserProfile);

export default router;
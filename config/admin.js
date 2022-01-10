module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac9e6caf6bb1230281547fed643d34d5'),
  },
});

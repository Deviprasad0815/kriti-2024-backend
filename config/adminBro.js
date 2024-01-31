const AdminBro =require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const PS = require('../models/PSschema');
const hostels = require('../models/hostel');

AdminBro.registerAdapter(AdminBroMongoose);
const getAdminRouter = (db, mainRouter) => {
  //Check admin access
  const canModifyUsers = ({ currentAdmin }) => currentAdmin;
  const adminBro = new AdminBro({
    databases: [db],
    branding: {
      companyName: "Kriti2024",
      softwareBrothers: false,
    },
    resources: [
      {
        resource: PS,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
        resource: hostels,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        }
      },
      
    ],
    rootPath: `/admin`,
    loginPath: `/admin/login`,
    logoutPath: `/admin/logout`,
  });

  // Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: async (email, password) => {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;
        console.log(adminEmail, adminPass);
        if (email === adminEmail && adminPass === password) {
          return { email, role: "admin" };
        }
        return false;
      },
    },
    null,
    {
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      resave: true,
      saveUninitialized: true,
    }
  );

  return router;
};

module.exports = getAdminRouter;
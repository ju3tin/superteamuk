"use strict";
(() => {
var exports = {};
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 8181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/users/signup/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./libs/mongodb.js
var mongodb = __webpack_require__(303);
// EXTERNAL MODULE: ./models/user.js
var models_user = __webpack_require__(6650);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./dbConfig/dbConfig.ts

async function connect() {
    try {
        external_mongoose_default().connect(process.env.MONGO_URI);
        const connection = (external_mongoose_default()).connection;
        connection.on("connected", ()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on("error", (err)=>{
            console.log("MongoDB connection error" + err);
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
}

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(7301);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(2305);
var bcryptjs_default = /*#__PURE__*/__webpack_require__.n(bcryptjs);
;// CONCATENATED MODULE: ./app/api/users/signup/route.js






connect();
// Calls the connect function to establish a connection to the database.
async function POST(request) {
    // Defines an asynchronous POST request handler.
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        // Parses the request body to extract username, email, and password.
        //Checks if a user with the provided email already exists. 
        const user = await models_user/* default */.Z.findOne({
            email
        });
        //If yes, returns a 400 response.
        if (user) {
            return next_response/* default */.Z.json({
                error: "User already exists"
            }, {
                status: 400
            });
        }
        //hash password using bcryptjs.
        const salt = await bcryptjs_default().genSalt(10);
        const hashedPassword = await bcryptjs_default().hash(password, salt);
        const newUser = new models_user/* default */.Z({
            username,
            email,
            password: hashedPassword
        });
        // Saves the new user to the database.
        const savedUser = await newUser.save();
        return next_response/* default */.Z.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Fsignup%2Froute&name=app%2Fapi%2Fusers%2Fsignup%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.js&appDir=%2Fhome%2Fmint%2FDocuments%2Fgithub%2Fsuperteamuk%2Fapp&appPaths=%2Fapi%2Fusers%2Fsignup%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/users/signup/route","pathname":"/api/users/signup","filename":"route","bundlePath":"app/api/users/signup/route"},"resolvedPagePath":"/home/mint/Documents/github/superteamuk/app/api/users/signup/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/users/signup/route"

    

/***/ }),

/***/ 7301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return _request.NextRequest;
    }
});
const _request = __webpack_require__(6569); //# sourceMappingURL=next-request.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625,38,569,871], () => (__webpack_exec__(8181)));
module.exports = __webpack_exports__;

})();
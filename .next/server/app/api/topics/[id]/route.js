"use strict";
(() => {
var exports = {};
exports.id = 329;
exports.ids = [329];
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

/***/ 1831:
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

// NAMESPACE OBJECT: ./app/api/topics/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./libs/mongodb.js
var mongodb = __webpack_require__(303);
// EXTERNAL MODULE: ./models/topic.js
var models_topic = __webpack_require__(7410);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
;// CONCATENATED MODULE: ./app/api/topics/[id]/route.js
// Import necessary modules and models



// GET endpoint to fetch a topic by ID
async function GET(request, { params }) {
    const { id } = params;
    try {
        await (0,mongodb/* default */.Z)();
        const topic = await models_topic/* default */.Z.findById(id);
        if (!topic) {
            return next_response/* default */.Z.json({
                message: "Topic not found"
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json({
            topic
        }, {
            status: 200
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        }, {
            status: 500
        });
    }
}
// PUT endpoint to update a topic by ID
async function PUT(request, { params }) {
    const { id } = params;
    const { title, description } = await request.json();
    try {
        await (0,mongodb/* default */.Z)();
        const updatedTopic = await models_topic/* default */.Z.findByIdAndUpdate(id, {
            title,
            description
        }, {
            new: true
        });
        if (!updatedTopic) {
            return next_response/* default */.Z.json({
                message: "Topic not found"
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json({
            message: "Topic updated",
            topic: updatedTopic
        }, {
            status: 200
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&name=app%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftopics%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fmint%2FDocuments%2Fgithub%2Fsuperteamuk%2Fapp&appPaths=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/topics/[id]/route","pathname":"/api/topics/[id]","filename":"route","bundlePath":"app/api/topics/[id]/route"},"resolvedPagePath":"/home/mint/Documents/github/superteamuk/app/api/topics/[id]/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/topics/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625,918], () => (__webpack_exec__(1831)));
module.exports = __webpack_exports__;

})();
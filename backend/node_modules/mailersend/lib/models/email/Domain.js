"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
var Domain = /** @class */ (function () {
    function Domain(name, returnPathSubdomain, customTrackingSubdomain, inboundRoutingSubdomain) {
        this.name = name;
        this.return_path_subdomain = returnPathSubdomain;
        this.custom_tracking_subdomain = customTrackingSubdomain;
        this.inbound_routing_subdomain = inboundRoutingSubdomain;
    }
    return Domain;
}());
exports.Domain = Domain;

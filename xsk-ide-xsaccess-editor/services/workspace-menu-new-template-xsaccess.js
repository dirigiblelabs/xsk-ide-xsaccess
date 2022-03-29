/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company and XSK contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License, v2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and XSK contributors
 * SPDX-License-Identifier: Apache-2.0
 */
exports.getTemplate = function () {
	return {
		"name": "xsaccess",
		"label": " XS Access",
		"extension": "xsaccess",
		"data": JSON.stringify({
                                "exposed" : false,
                                "authentication" :
                                       {
                                          "method": "Form"
                                       },
                                "authorization":
                                     [
                                         "sap.xse.test::Execute",
                                         "sap.xse.test::Admin"
                            sapa         ],
                                "anonymous_connection" : "sap.hana.sqlcon::AnonConn",
                                "default_connection" : "sap.hana.sqlcon::sqlcc",
                                "cache_control" : "no-store",
                                "cors" :
                                       {
                                        "enabled" : false
                                       },
                                "default_file" : "index_1.html",
                                "enable_etags" : false,
                                "force_ssl" : true,
                                "mime_mapping" :
                                     [
                                       {
                                         "extension":"jpg", "mimetype":"image/jpeg"
                                       }
                                     ],
                                "prevent_xsrf" : true,
                                "rewrite_rules" :
                                     [{
                                           "source" : "...",
                                           "target" : "..."
                                     }]
                                "headers":
                                     {
                                      "enabled": true,
                                      "customHeaders": [ {"name":"X-Frame-Options","value":"<VALUE>"} ]
                                     }
                           }, null, 2)	};
};

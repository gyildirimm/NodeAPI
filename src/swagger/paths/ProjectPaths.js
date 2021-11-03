module.exports = {
    "/projects": {
        "get": {
          "tags": [
            "Projects"
          ],
          "summary": "Get all Projects",
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "$ref": "#/definitions/Project"
              }
            }
          }
        },
        "post": {
          "tags": [
            "Projects"
          ],
          "summary": "Create a new project",
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "model",
              "in": "body",
              "description": "project detail",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Project"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "schema": {
                "$ref": "#/definitions/Project"
              }
            },
            "400": {
              "description": "Failed. Bad post data."
            }
          }
        }
      }
};
